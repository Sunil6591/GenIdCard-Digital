import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = await readFile(path.join(root, "docs/FootfallIQ_WhatsApp_Attendance_Templates.md"), "utf8");
const status = source.match(/^\*\*Status:\*\* (Approved|Draft)\b/m)?.[1];
if (!status) throw new Error("Source must explicitly declare Approved or Draft status");
const templateStatus = status === "Approved" ? "approved" : "draft";
const catalogs = { en: {}, hi: {}, mr: {} };
const sections = source.split(/^## \d+\. /m).slice(1);
for (const section of sections) {
  const key = section.match(/\*\*Template name:\*\* `([^`]+)`/)?.[1];
  if (!key) throw new Error("Missing template key");
  const buttonType = section.match(/\*\*Button type:\*\* (\w+)/)?.[1];
  for (const locale of ["en", "hi", "mr"]) {
    const body = section.match(new RegExp("### [^\\n]+\\(`" + locale + "`\\)\\n\\n```text\\n([\\s\\S]*?)```"))?.[1];
    if (!body) throw new Error(`Missing ${locale} body for ${key}`);
    const label = section.match(new RegExp(locale + ": `([^`]+)`"))?.[1];
    catalogs[locale][key] = {
      status: templateStatus, text: body,
      ...(label && buttonType !== "NONE" ? { button: { label, type: buttonType } } : {}),
    };
  }
}
if (sections.length !== 6) throw new Error("Review source structure: expected six supplied templates");
for (const [locale, catalog] of Object.entries(catalogs)) {
  const output = `import type { TemplateCatalog } from "@/types/whatsapp";\n\n// Generated from docs/FootfallIQ_WhatsApp_Attendance_Templates.md.\n// Exact supplied text, including final newlines. Status follows the explicit source-document declaration.\n// Run npm run templates:sync after editing the source document.\nexport const ${locale}: TemplateCatalog = ${JSON.stringify(catalog, null, 2)};\n`;
  await writeFile(path.join(root, `src/data/whatsapp-templates/${locale}.ts`), output);
}
console.log(`Synchronized ${sections.length} ${templateStatus} templates in three languages.`);
