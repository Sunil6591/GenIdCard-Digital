# Make Attendance the root application on its branch

The product owner requested removing the legacy root project and promoting the completed Attendance application from `attendance/` to the repository root. This supersedes the nested-app arrangement in ADR-0001, simplifies local and deployment commands, and makes Attendance the only application on `feat/attendance-marketing`. The existing Git repository and branch are retained; the former event-pass implementation remains in Git history.
