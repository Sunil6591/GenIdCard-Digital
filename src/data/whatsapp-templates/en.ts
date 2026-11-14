import type { TemplateCatalog } from "@/types/whatsapp";

// Generated from docs/FootfallIQ_WhatsApp_Attendance_Templates.md.
// Exact supplied text, including final newlines. Draft for Meta approval, not approved.
// Run npm run templates:sync after editing the source document.
export const en: TemplateCatalog = {
  "employee_account_activated": {
    "status": "draft",
    "text": "Hello *{{1}}*,\n\nYour attendance account for *{{2}}* has been activated in FootfallIQ.\n\n📍 *Assigned Site:* {{3}}\n\nYou can now record your daily attendance through WhatsApp.\n\nTap the *Instructions* button below to learn how to share your location for attendance.\n",
    "button": {
      "label": "Instructions",
      "type": "QUICK_REPLY"
    }
  },
  "employee_shift_assigned": {
    "status": "draft",
    "text": "Hello *{{1}}*,\n\nYour duty has been assigned with the following details:\n\n🏢 *Company:* {{2}}\n\n📍 *Site:* {{3}}\n\n📅 *Date:* {{4}}\n\n🕘 *Shift Time:* *{{5}} to {{6}}*\n\nPlease record your attendance through WhatsApp when you arrive at your assigned site.\n"
  },
  "employee_checkin_reminder": {
    "status": "draft",
    "text": "Hello *{{1}}*,\n\nYour duty for *{{2}}* starts at *{{3}}*.\n\n📍 *Site:* {{4}}\n\nWhen you arrive at the site, tap *Mark Attendance* below and share your *current location*.\n\nYour attendance will be recorded after location verification.\n",
    "button": {
      "label": "Mark Attendance",
      "type": "QUICK_REPLY"
    }
  },
  "employee_checkout_reminder": {
    "status": "draft",
    "text": "Hello *{{1}}*,\n\nYour duty for *{{2}}* is scheduled to end at *{{3}}*.\n\n📍 *Site:* {{4}}\n\nOnce your duty is completed, tap *End Duty* below and share your *current location* before leaving the site.\n\nYour checkout time will be recorded after location verification.\n",
    "button": {
      "label": "End Duty",
      "type": "QUICK_REPLY"
    }
  },
  "supervisor_missing_checkin": {
    "status": "draft",
    "text": "Hello *{{1}}*,\n\n⚠️ *Attendance Alert*\n\nThe following employee's check-in has not been recorded in FootfallIQ.\n\n👤 *Employee:* {{2}}\n\n📍 *Site:* {{3}}\n\n🕘 *Scheduled Start:* {{4}}\n\nPlease review the attendance status and take the necessary action.\n"
  },
  "business_daily_attendance": {
    "status": "draft",
    "text": "Hello *{{1}}*,\n\n📊 *FootfallIQ — Daily Attendance Report*\n\nYour attendance summary for *{{2}}* is ready.\n\n📅 *Date:* {{3}}\n\n👥 *Scheduled Shifts:* {{4}}\n\n✅ *Check-ins Recorded:* {{5}}\n\n❌ *Missing Check-ins:* {{6}}\n\nPlease review the full attendance report and pending exceptions in FootfallIQ.\n",
    "button": {
      "label": "View Report",
      "type": "OPTIONAL_URL"
    }
  }
};
