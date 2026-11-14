import Image from "next/image";
export default function Logo() {
  return <a className="logo" href="/" aria-label="FootfallIQ Attendance home"><Image src="/digital/logo.png" alt="Footfall IQ" width={878} height={567} className="brand-logo" priority /><span className="brand-product">ATTENDANCE</span></a>;
}
