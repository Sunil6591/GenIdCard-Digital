import { chromium } from "@playwright/test";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logo = `data:image/png;base64,${(await readFile(path.join(root, "public/digital/logo.png"))).toString("base64")}`;
const favicon = `data:image/png;base64,${(await readFile(path.join(root, "public/digital/fav.png"))).toString("base64")}`;
const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html lang="en"><meta charset="utf-8"><style>
  *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#f8faf8;color:#17241e;font-family:Arial,sans-serif;overflow:hidden}
  .brand{position:absolute;left:65px;top:38px;display:flex;align-items:center;gap:16px}.brand img{width:112px;height:72px;object-fit:contain}.brand span{font-size:12px;letter-spacing:3px;color:#11664c;border-left:1px solid #dce5de;padding-left:16px}
  .copy{position:absolute;left:65px;top:165px;width:600px}.tag{font-size:14px;letter-spacing:2px;color:#11664c}h1{font-size:57px;line-height:1.12;letter-spacing:-2px;font-weight:600;margin:24px 0}h1 span{color:#15805e}.copy p{font-size:21px;line-height:1.6;color:#64736b;width:490px}.url{position:absolute;left:65px;bottom:47px;font-size:17px;color:#11664c}
  .orbit{position:absolute;right:-60px;top:26px;width:600px;height:600px;border:1px solid #dce5de;border-radius:50%;background:radial-gradient(#dff5e9,#f8faf8 72%)}
  .phone{position:absolute;right:69px;top:57px;width:263px;height:490px;border:8px solid #28382e;border-radius:37px;background:#eae9df;box-shadow:0 22px 40px #102c2520;overflow:hidden}.status{height:36px;background:#fff;padding:10px 17px;font-size:11px}.head{background:#0d6050;color:white;padding:16px;font-size:15px;font-weight:bold}.head small{display:block;font-size:10px;font-weight:normal;opacity:.8;margin-top:5px}.bubble{margin:18px 11px;background:white;border-radius:9px;padding:14px;font-size:13px;line-height:1.6}.bubble.out{background:#d9f4cf;margin-left:52px}.bubble small{display:block;color:#64736b;font-size:9px;text-align:right;margin-top:7px}.pin{color:#15805e;font-size:21px;margin-right:5px}
  .dashboard{position:absolute;right:165px;bottom:38px;width:380px;background:#fff;border:1px solid #dce5de;border-radius:15px;padding:22px;box-shadow:0 10px 38px #102c251a}.dash-title{display:flex;justify-content:space-between;font-size:15px;font-weight:bold}.sample{color:#64736b;font-size:9px;font-weight:normal;letter-spacing:1px}.stats{display:flex;gap:15px;margin-top:20px}.stat{flex:1;background:#edf5ef;border:1px solid #dce5de;border-radius:7px;padding:13px}.stat small{font-size:10px;color:#64736b}.stat b{display:block;font-size:27px;margin-top:6px}.bars{display:flex;gap:8px;align-items:end;height:38px;margin-top:14px}.bars i{display:block;flex:1;background:#a5cbb4;border-radius:3px 3px 0 0}
  </style><div class="orbit"></div><div class="brand"><img src="${logo}" alt="FootfallIQ"><span>ATTENDANCE</span></div><div class="copy"><div class="tag">WHATSAPP-BASED ATTENDANCE</div><h1>Employee Attendance.<br><span>Simplified with<br>WhatsApp.</span></h1><p>Location check-ins. Shift reminders.<br>One clear view across your sites.</p></div><div class="url">footfalliq.in</div><div class="phone"><div class="status">8:58 AM</div><div class="head">FootfallIQ Attendance<small>Employee attendance conversation</small></div><div class="bubble">Your shift starts at <b>9:00 AM.</b><br>Share your current location when you arrive.<small>8:45 AM</small></div><div class="bubble out"><span class="pin">●</span> Current location<br><b>Assigned worksite</b><small>8:58 AM</small></div><div class="bubble">Check-in recorded ✓<br>Within the configured site radius.<small>8:58 AM</small></div></div><div class="dashboard"><div class="dash-title">Today's attendance<span class="sample">ILLUSTRATIVE DATA</span></div><div class="stats"><div class="stat"><small>Scheduled</small><b>128</b></div><div class="stat"><small>Present</small><b>112</b></div><div class="stat"><small>Sites</small><b>04</b></div></div><div class="bars">${[30,55,45,80,60,95,75,100].map(h=>`<i style="height:${h}%"></i>`).join("")}</div></div></html>`);
  await page.locator(".brand img").evaluate(img => img.decode());
  await page.screenshot({ path: path.join(root, "public/social-preview.png") });
  for (const [size, name] of [[32, "icon-32.png"], [180, "apple-touch-icon.png"]]) {
    const data = await page.evaluate(async ({ source, size }) => {
      const img = new Image(); img.src = source; await img.decode();
      const canvas = document.createElement("canvas"); canvas.width = size; canvas.height = size;
      const context = canvas.getContext("2d"); context.drawImage(img, 0, 0, size, size);
      return canvas.toDataURL("image/png").split(",")[1];
    }, { source: favicon, size });
    await writeFile(path.join(root, "public", name), Buffer.from(data, "base64"));
  }
  console.log("Generated 1200×630 social preview and 32/180px icons from existing brand assets.");
} finally { await browser.close(); }
