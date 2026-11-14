"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Activity, ArrowDownToLine, CalendarDays, ChartNoAxesCombined, ChevronDown, CircleHelp, Clock3, LayoutDashboard, MapPin, Search, Settings2, Users } from "lucide-react";
import { sites, employees } from "@/data/dashboard";

function exportReport(siteId: string) {
  const rows = employees.filter(e => siteId === "all" || e.site === siteId);
  const csv = ["DEMONSTRATION DATA ONLY", "Employee,Site,Shift,Check-in,Checkout,Status", ...rows.map(e => [e.name, sites.find(s => s.id === e.site)?.name, e.shift, e.checkin, e.checkout, e.status].join(","))].join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a"); a.href = url; a.download = "footfalliq-sample-attendance.csv"; a.click(); URL.revokeObjectURL(url);
}
export function AttendanceChart({ selected }: { selected: typeof sites }) {
  return <div className="site-chart"><div className="dash-card-heading"><h4>Attendance by site</h4><span><i />Present</span></div>{selected.map(site => <div className="site-chart-row" key={site.id}><div><span>{site.name}</span><strong>{site.present}<small> / {site.scheduled}</small></strong></div><div className="chart-track"><span style={{ width: `${site.present / site.scheduled * 100}%` }} /></div></div>)}</div>;
}
export function AttendanceTable({ siteId }: { siteId: string }) {
  const rows = employees.filter(e => siteId === "all" || e.site === siteId);
  return <div className="attendance-table-wrap"><div className="dash-card-heading"><h4>Employee attendance</h4><span>{rows.length} sample records</span></div><table className="attendance-table"><caption className="sr-only">Illustrative employee attendance for 14 November 2026</caption><thead><tr><th scope="col">Employee</th><th scope="col" className="table-site">Site</th><th scope="col">Check-in</th><th scope="col" className="table-checkout">Checkout</th><th scope="col">Status</th></tr></thead><tbody>{rows.map(e => <tr key={e.name}><td><div className="employee-name"><span className={`employee-avatar avatar-${e.site}`}>{e.initials}</span><span>{e.name}<small>{e.shift}</small></span></div></td><td className="table-site">{sites.find(s => s.id === e.site)?.name}</td><td>{e.checkin}</td><td className="table-checkout">{e.checkout}</td><td><span className={`status-badge status-${e.status.toLowerCase()}`}>{e.status}</span></td></tr>)}</tbody></table></div>;
}
export default function DashboardPreview({ compact = false }: { compact?: boolean }) {
  const [siteId, setSiteId] = useState("all");
  const filterId = useId();
  const selected = sites.filter(s => siteId === "all" || s.id === siteId);
  const total = (key: "scheduled" | "present" | "late" | "absent" | "pending" | "exceptions" | "upcoming") => selected.reduce((sum, s) => sum + s[key], 0);
  return <div className={`dashboard ${compact ? "dashboard-compact" : ""}`}>
    <aside className="dash-sidebar" aria-hidden="true"><span className="dash-brand"><Image src="/digital/fav.png" alt="" width={30} height={26} /></span><LayoutDashboard className="active" size={18} /><Users size={18} /><MapPin size={18} /><CalendarDays size={18} /><ChartNoAxesCombined size={18} /><span className="dash-sidebar-bottom"><CircleHelp size={18} /><Settings2 size={18} /></span></aside>
    <div className="dash-main">
      <div className="dash-topbar"><span><strong>Workspace</strong><ChevronDown size={12} /><span className="dash-topbar-divider">/</span> Attendance</span><div><span className="demo-badge">DEMO DATA</span><span className="manager-avatar">PD</span></div></div>
      <div className="dash-content">
        <div className="dash-heading"><div><span className="dash-eyebrow">YOUR WORKFORCE, AT A GLANCE</span><h3>Attendance overview<span>↗</span></h3><p>Saturday, 14 November 2026</p></div><button className="dash-export" onClick={() => exportReport(siteId)} aria-label="Download demonstration attendance report"><ArrowDownToLine size={14} /><span>Daily report</span></button></div>
        <div className="dash-filters"><label htmlFor={filterId}><MapPin size={13} /><select id={filterId} value={siteId} onChange={e => setSiteId(e.target.value)} aria-label="Filter demonstration dashboard by site"><option value="all">All sites</option>{sites.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}</select></label><span><CalendarDays size={13} />14 Nov 2026</span><span className="dash-snapshot"><i />Sample snapshot</span></div>
        <div className="attendance-stats">{[
          { label: "Scheduled", value: total("scheduled"), icon: Users, color: "neutral", note: "Across selected sites" },
          { label: "Present", value: total("present"), icon: Activity, color: "green", note: "Includes late arrivals" },
          { label: "Late", value: total("late"), icon: Clock3, color: "amber", note: "Included in present" },
          { label: "Absent", value: total("absent"), icon: Users, color: "red", note: "Expected check-in missing" },
        ].map(({ label, value, icon: Icon, color, note }) => <div className={`stat-card stat-${color}`} key={label}><div>{label}<Icon size={15} /></div><strong>{value}<span>employees</span></strong><small>{note}</small></div>)}</div>
        <div className="dash-middle"><AttendanceChart selected={selected} /><div className="exception-card"><div className="dash-card-heading"><h4>Needs a little attention</h4><span className="exception-dot" /></div><div><span className="exception-icon amber"><Clock3 size={17} /></span><span>Pending checkouts<small>Shift records to complete</small></span><strong>{total("pending")}</strong></div><div><span className="exception-icon red"><Activity size={17} /></span><span>Attendance exceptions<small>Records needing review</small></span><strong>{total("exceptions")}</strong></div><p>{total("upcoming")} employees scheduled for later shifts.</p></div></div>
        <AttendanceTable siteId={siteId} />
        <div className="dash-footer"><span><Search size={11} />Showing illustrative records, not customer activity.</span><span>FootfallIQ Attendance</span></div>
      </div>
    </div>
  </div>;
}
