"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
const links = [["How it works", "/how-it-works"], ["Features", "/features"], ["Industries", "/solutions"], ["Pricing", "/pricing"]];
export default function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && menu.current?.open) { menu.current.open = false; menu.current.querySelector("summary")?.focus(); } };
    const outside = (event: PointerEvent) => { if (menu.current?.open && !menu.current.contains(event.target as Node)) menu.current.open = false; };
    document.addEventListener("keydown", close); document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); };
  }, []);
  return <header className="site-header"><div className="container header-inner"><Logo /><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav><div className="header-actions"><a href={siteConfig.appUrl} className="login-link" data-track="login_click">Log in <ArrowUpRight size={13} /></a><Button asChild size="sm"><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-location="header">WhatsApp us <ArrowUpRight size={14} /></a></Button></div><details className="mobile-navigation" ref={menu}><summary aria-label="Toggle navigation"><Menu className="menu-open-icon" size={23} /><X className="menu-close-icon" size={23} /></summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => { if (menu.current) menu.current.open = false; }}>{label}<ArrowUpRight size={16} /></Link>)}<a href={siteConfig.appUrl} data-track="login_click">Log in<ArrowUpRight size={16} /></a><a className="mobile-demo-link" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-location="mobile_menu" onClick={() => { if (menu.current) menu.current.open = false; }}>Chat on WhatsApp<ArrowUpRight size={16} /></a></nav></details></div></header>;
}
