export const sites = [
  { id: "baner", name: "Baner Business Park", scheduled: 40, present: 37, late: 2, absent: 2, upcoming: 1, pending: 4, exceptions: 3 },
  { id: "kharadi", name: "Kharadi Tech Centre", scheduled: 36, present: 32, late: 3, absent: 3, upcoming: 1, pending: 5, exceptions: 4 },
  { id: "hinjawadi", name: "Hinjawadi Campus", scheduled: 28, present: 24, late: 2, absent: 3, upcoming: 1, pending: 3, exceptions: 3 },
  { id: "wakad", name: "Wakad Square", scheduled: 24, present: 19, late: 1, absent: 2, upcoming: 3, pending: 2, exceptions: 2 },
];
export const employees = [
  { name: "Aarav Patil", initials: "AP", site: "baner", shift: "09:00 – 18:00", checkin: "08:58", checkout: "18:02", status: "Present" },
  { name: "Neha Sharma", initials: "NS", site: "kharadi", shift: "09:00 – 18:00", checkin: "—", checkout: "—", status: "Absent" },
  { name: "Rohan Mehta", initials: "RM", site: "hinjawadi", shift: "09:00 – 18:00", checkin: "09:12", checkout: "18:06", status: "Late" },
  { name: "Sneha Joshi", initials: "SJ", site: "wakad", shift: "10:00 – 19:00", checkin: "09:54", checkout: "Pending", status: "Present" },
  { name: "Vikram Rao", initials: "VR", site: "baner", shift: "10:00 – 19:00", checkin: "09:57", checkout: "Pending", status: "Present" },
];
