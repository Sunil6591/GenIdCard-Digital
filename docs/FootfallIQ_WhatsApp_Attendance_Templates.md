# FootfallIQ — WhatsApp Attendance Templates

**Status:** Approved. The product owner confirmed on 14 November 2026 that all six supplied templates in English, Hindi and Marathi are approved and live. This confirmation does not establish a specific Meta category; the category labels below record the original proposal.

**Languages:** English (`en`), Hindi (`hi`), Marathi (`mr`)  
**Formatting:** Single literal asterisks (`*like this*`) mean WhatsApp bold. Blank lines are intentional.

**Location workflow:** The Mark Attendance / End Duty quick replies do not access location automatically. After the employee taps the button, send an interactive WhatsApp location request within the customer-service window.

---

## 1. Employee Account Activation

**Template name:** `employee_account_activated`  
**Proposed category:** UTILITY  
**Button type:** QUICK_REPLY  
**Button labels:** en: `Instructions` · hi: `निर्देश` · mr: `सूचना`

**Sample variable values:** `{{1}}` = Ramesh Patil; `{{2}}` = ABC Security Services; `{{3}}` = Wakad Society

### English (`en`)

```text
Hello *{{1}}*,

Your attendance account for *{{2}}* has been activated in FootfallIQ.

📍 *Assigned Site:* {{3}}

You can now record your daily attendance through WhatsApp.

Tap the *Instructions* button below to learn how to share your location for attendance.
```

### Hindi (`hi`)

```text
नमस्ते *{{1}}*,

*{{2}}* के लिए आपका हाज़िरी खाता FootfallIQ पर चालू हो गया है।

📍 *ड्यूटी की जगह:* {{3}}

अब आप WhatsApp से रोज़ अपनी हाज़िरी लगा सकते हैं।

लोकेशन भेजकर हाज़िरी लगाने का तरीका जानने के लिए नीचे *निर्देश* बटन दबाएँ।
```

### Marathi (`mr`)

```text
नमस्कार *{{1}}*,

*{{2}}* साठी तुमचे FootfallIQ हजेरी खाते सुरू झाले आहे.

📍 *ड्युटीचे ठिकाण:* {{3}}

आता तुम्ही WhatsApp वरून रोज तुमची हजेरी नोंदवू शकता.

लोकेशन पाठवून हजेरी कशी नोंदवायची हे पाहण्यासाठी खालील *सूचना* बटण दाबा.
```

---

## 2. Employee Shift Assignment

**Template name:** `employee_shift_assigned`  
**Proposed category:** UTILITY  
**Button type:** NONE

**Sample variable values:** `{{1}}` = Ramesh Patil; `{{2}}` = ABC Security Services; `{{3}}` = Wakad Society; `{{4}}` = 04/11/2026; `{{5}}` = 09:00 AM; `{{6}}` = 06:00 PM

### English (`en`)

```text
Hello *{{1}}*,

Your duty has been assigned with the following details:

🏢 *Company:* {{2}}

📍 *Site:* {{3}}

📅 *Date:* {{4}}

🕘 *Shift Time:* *{{5}} to {{6}}*

Please record your attendance through WhatsApp when you arrive at your assigned site.
```

### Hindi (`hi`)

```text
नमस्ते *{{1}}*,

आपकी ड्यूटी की जानकारी नीचे दी गई है:

🏢 *कंपनी:* {{2}}

📍 *ड्यूटी की जगह:* {{3}}

📅 *तारीख:* {{4}}

🕘 *ड्यूटी का समय:* *{{5}} से {{6}}*

ड्यूटी की जगह पहुँचने पर WhatsApp से अपनी *हाज़िरी दर्ज करें।*
```

### Marathi (`mr`)

```text
नमस्कार *{{1}}*,

तुमच्या ड्युटीची माहिती खालीलप्रमाणे आहे:

🏢 *कंपनी:* {{2}}

📍 *ड्युटीचे ठिकाण:* {{3}}

📅 *तारीख:* {{4}}

🕘 *ड्युटीची वेळ:* *{{5}} ते {{6}}*

ड्युटीच्या ठिकाणी पोहोचल्यावर WhatsApp वरून तुमची *हजेरी नोंदवा.*
```

---

## 3. Mark Attendance — Shift Start

**Template name:** `employee_checkin_reminder`  
**Proposed category:** UTILITY  
**Button type:** QUICK_REPLY  
**Button labels:** en: `Mark Attendance` · hi: `हाज़िरी लगाएँ` · mr: `हजेरी नोंदवा`

**Sample variable values:** `{{1}}` = Ramesh Patil; `{{2}}` = ABC Security Services; `{{3}}` = 09:00 AM; `{{4}}` = Wakad Society

### English (`en`)

```text
Hello *{{1}}*,

Your duty for *{{2}}* starts at *{{3}}*.

📍 *Site:* {{4}}

When you arrive at the site, tap *Mark Attendance* below and share your *current location*.

Your attendance will be recorded after location verification.
```

### Hindi (`hi`)

```text
नमस्ते *{{1}}*,

*{{2}}* के लिए आपकी ड्यूटी *{{3}}* बजे शुरू होगी।

📍 *ड्यूटी की जगह:* {{4}}

साइट पर पहुँचने के बाद नीचे *हाज़िरी लगाएँ* बटन दबाएँ और अपनी *वर्तमान लोकेशन* भेजें।

लोकेशन की जाँच के बाद आपकी हाज़िरी दर्ज हो जाएगी।
```

### Marathi (`mr`)

```text
नमस्कार *{{1}}*,

*{{2}}* साठी तुमची ड्युटी *{{3}}* वाजता सुरू होईल.

📍 *ड्युटीचे ठिकाण:* {{4}}

कामाच्या ठिकाणी पोहोचल्यावर खालील *हजेरी नोंदवा* बटण दाबा आणि तुमचे *सध्याचे लोकेशन* पाठवा.

लोकेशन तपासल्यानंतर तुमची हजेरी नोंदवली जाईल.
```

---

## 4. End Duty — Shift Checkout

**Template name:** `employee_checkout_reminder`  
**Proposed category:** UTILITY  
**Button type:** QUICK_REPLY  
**Button labels:** en: `End Duty` · hi: `ड्यूटी समाप्त करें` · mr: `ड्युटी संपवा`

**Sample variable values:** `{{1}}` = Ramesh Patil; `{{2}}` = ABC Security Services; `{{3}}` = 06:00 PM; `{{4}}` = Wakad Society

### English (`en`)

```text
Hello *{{1}}*,

Your duty for *{{2}}* is scheduled to end at *{{3}}*.

📍 *Site:* {{4}}

Once your duty is completed, tap *End Duty* below and share your *current location* before leaving the site.

Your checkout time will be recorded after location verification.
```

### Hindi (`hi`)

```text
नमस्ते *{{1}}*,

*{{2}}* के लिए आपकी ड्यूटी *{{3}}* बजे समाप्त होगी।

📍 *ड्यूटी की जगह:* {{4}}

ड्यूटी पूरी होने के बाद नीचे *ड्यूटी समाप्त करें* बटन दबाएँ और साइट से जाने से पहले अपनी *वर्तमान लोकेशन* भेजें।

लोकेशन की जाँच के बाद ड्यूटी समाप्त होने का समय दर्ज हो जाएगा।
```

### Marathi (`mr`)

```text
नमस्कार *{{1}}*,

*{{2}}* साठी तुमची ड्युटी *{{3}}* वाजता संपणार आहे.

📍 *ड्युटीचे ठिकाण:* {{4}}

ड्युटी पूर्ण झाल्यावर खालील *ड्युटी संपवा* बटण दाबा आणि कामाच्या ठिकाणाहून निघण्यापूर्वी तुमचे *सध्याचे लोकेशन* पाठवा.

लोकेशन तपासल्यानंतर तुमची ड्युटी संपल्याची वेळ नोंदवली जाईल.
```

---

## 5. Missing Attendance Alert — Supervisor

**Template name:** `supervisor_missing_checkin`  
**Proposed category:** UTILITY  
**Button type:** NONE

**Sample variable values:** `{{1}}` = Suresh Sharma; `{{2}}` = Ramesh Patil; `{{3}}` = Wakad Society; `{{4}}` = 04/11/2026 09:00 AM

### English (`en`)

```text
Hello *{{1}}*,

⚠️ *Attendance Alert*

The following employee's check-in has not been recorded in FootfallIQ.

👤 *Employee:* {{2}}

📍 *Site:* {{3}}

🕘 *Scheduled Start:* {{4}}

Please review the attendance status and take the necessary action.
```

### Hindi (`hi`)

```text
नमस्ते *{{1}}*,

⚠️ *हाज़िरी अलर्ट*

नीचे दिए गए कर्मचारी की हाज़िरी अभी तक FootfallIQ में दर्ज नहीं हुई है।

👤 *कर्मचारी:* {{2}}

📍 *ड्यूटी की जगह:* {{3}}

🕘 *ड्यूटी शुरू होने का समय:* {{4}}

कृपया हाज़िरी की स्थिति जाँचें और ज़रूरी कार्रवाई करें।
```

### Marathi (`mr`)

```text
नमस्कार *{{1}}*,

⚠️ *हजेरी सूचना*

खालील कर्मचाऱ्याची हजेरी अद्याप FootfallIQ मध्ये नोंदवली गेली नाही.

👤 *कर्मचारी:* {{2}}

📍 *ड्युटीचे ठिकाण:* {{3}}

🕘 *ड्युटी सुरू होण्याची वेळ:* {{4}}

कृपया हजेरीची स्थिती तपासून आवश्यक ती कार्यवाही करा.
```

---

## 6. Daily Attendance Report — Business Owner

**Template name:** `business_daily_attendance`  
**Proposed category:** UTILITY  
**Button type:** OPTIONAL_URL  
**Button labels:** en: `View Report` · hi: `रिपोर्ट देखें` · mr: `अहवाल पाहा`

**Sample variable values:** `{{1}}` = Rajesh Patil; `{{2}}` = ABC Security Services; `{{3}}` = 04/11/2026; `{{4}}` = 50; `{{5}}` = 46; `{{6}}` = 4

### English (`en`)

```text
Hello *{{1}}*,

📊 *FootfallIQ — Daily Attendance Report*

Your attendance summary for *{{2}}* is ready.

📅 *Date:* {{3}}

👥 *Scheduled Shifts:* {{4}}

✅ *Check-ins Recorded:* {{5}}

❌ *Missing Check-ins:* {{6}}

Please review the full attendance report and pending exceptions in FootfallIQ.
```

### Hindi (`hi`)

```text
नमस्ते *{{1}}*,

📊 *FootfallIQ — दैनिक हाज़िरी रिपोर्ट*

*{{2}}* की आज की हाज़िरी रिपोर्ट तैयार है।

📅 *तारीख:* {{3}}

👥 *निर्धारित ड्यूटी:* {{4}}

✅ *दर्ज हाज़िरी:* {{5}}

❌ *दर्ज नहीं हुई हाज़िरी:* {{6}}

पूरी हाज़िरी रिपोर्ट और बाकी समस्याएँ FootfallIQ पर देखें।
```

### Marathi (`mr`)

```text
नमस्कार *{{1}}*,

📊 *FootfallIQ — दैनिक हजेरी अहवाल*

*{{2}}* चा आजचा हजेरी अहवाल तयार आहे.

📅 *तारीख:* {{3}}

👥 *नियोजित ड्युट्या:* {{4}}

✅ *नोंदवलेले चेक-इन:* {{5}}

❌ *नोंद न झालेले चेक-इन:* {{6}}

संपूर्ण हजेरी अहवाल आणि बाकीच्या अपूर्ण नोंदी FootfallIQ वर तपासा.
```

---

## Template maintenance notes

- The supplied translations (`en`, `hi`, `mr`) are approved per product-owner confirmation. Submit changed wording or new translations through the applicable approval process.
- Keep literal `*` formatting and paragraph spacing when pasting the body.
- Confirm WhatsApp messaging opt-in and business identification for each sending account.
- For quick-reply buttons, listen for the reply webhook; send a separate interactive location request.
- Meta makes the final template category and approval decision.
- If you use a URL button for the report, configure its actual destination separately.
