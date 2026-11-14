import type { TemplateCatalog } from "@/types/whatsapp";

// These interactions are NOT in the supplied template document. Demonstration only.
export const samples: TemplateCatalog = {
  checkin_location: { status: "placeholder", text: "Current location" },
  checkin_confirmation: { status: "placeholder", text: "Check-in recorded ✅\n\n{{time}} · {{site}}\nSubmitted location is within the configured site radius." },
  checkout_location: { status: "placeholder", text: "Current location" },
  checkout_confirmation: { status: "placeholder", text: "Checkout recorded ✅\n\n{{time}} · {{site}}\nToday’s check-in and checkout are now recorded. Thank you, {{employee}}!" },
  missing_attendance_reminder: { status: "placeholder", text: "Hi {{employee}}, we haven’t received your check-in for *{{site}}*. Your shift started at {{start}}. Please share your current location when you arrive." },
};
