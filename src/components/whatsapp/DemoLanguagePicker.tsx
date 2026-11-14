"use client";
import { useId } from "react";
import { Languages } from "lucide-react";
import type { Locale } from "@/types/whatsapp";
export default function DemoLanguagePicker({ value, onChange }: { value: Locale; onChange: (locale: Locale) => void }) {
  const id = useId();
  return <label className="demo-language" htmlFor={id}><Languages size={14} /><span>Demo language</span><select id={id} value={value} onChange={event => onChange(event.target.value as Locale)}><option value="en">English</option><option value="hi">हिन्दी</option><option value="mr">मराठी</option></select></label>;
}
