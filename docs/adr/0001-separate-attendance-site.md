---
status: superseded by ADR-0002
---

# Keep Attendance separate from the event-pass website

FootfallIQ Attendance and the existing event-pass offering address different customer workflows. The product owner chose a separate Attendance site on the `feat/attendance-marketing` branch. It lives in a standalone `attendance/` Next.js application with independent dependencies, configuration, and deployment root so the event-pass website can continue to operate without Attendance branding or routing changes.
