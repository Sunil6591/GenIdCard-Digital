import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return <Link className="logo" href="/" aria-label="FootfallIQ Attendance home"><Image src="/digital/logo.png" alt="FootfallIQ" width={878} height={567} sizes="110px" className="brand-logo" priority /><span className="brand-product">ATTENDANCE</span></Link>;
}
