import type { TemplateCatalog } from "@/types/whatsapp";

// Generated from docs/FootfallIQ_WhatsApp_Attendance_Templates.md.
// Exact supplied text, including final newlines. Status follows the explicit source-document declaration.
// Run npm run templates:sync after editing the source document.
export const hi: TemplateCatalog = {
  "employee_account_activated": {
    "status": "approved",
    "text": "नमस्ते *{{1}}*,\n\n*{{2}}* के लिए आपका हाज़िरी खाता FootfallIQ पर चालू हो गया है।\n\n📍 *ड्यूटी की जगह:* {{3}}\n\nअब आप WhatsApp से रोज़ अपनी हाज़िरी लगा सकते हैं।\n\nलोकेशन भेजकर हाज़िरी लगाने का तरीका जानने के लिए नीचे *निर्देश* बटन दबाएँ।\n",
    "button": {
      "label": "निर्देश",
      "type": "QUICK_REPLY"
    }
  },
  "employee_shift_assigned": {
    "status": "approved",
    "text": "नमस्ते *{{1}}*,\n\nआपकी ड्यूटी की जानकारी नीचे दी गई है:\n\n🏢 *कंपनी:* {{2}}\n\n📍 *ड्यूटी की जगह:* {{3}}\n\n📅 *तारीख:* {{4}}\n\n🕘 *ड्यूटी का समय:* *{{5}} से {{6}}*\n\nड्यूटी की जगह पहुँचने पर WhatsApp से अपनी *हाज़िरी दर्ज करें।*\n"
  },
  "employee_checkin_reminder": {
    "status": "approved",
    "text": "नमस्ते *{{1}}*,\n\n*{{2}}* के लिए आपकी ड्यूटी *{{3}}* बजे शुरू होगी।\n\n📍 *ड्यूटी की जगह:* {{4}}\n\nसाइट पर पहुँचने के बाद नीचे *हाज़िरी लगाएँ* बटन दबाएँ और अपनी *वर्तमान लोकेशन* भेजें।\n\nलोकेशन की जाँच के बाद आपकी हाज़िरी दर्ज हो जाएगी।\n",
    "button": {
      "label": "हाज़िरी लगाएँ",
      "type": "QUICK_REPLY"
    }
  },
  "employee_checkout_reminder": {
    "status": "approved",
    "text": "नमस्ते *{{1}}*,\n\n*{{2}}* के लिए आपकी ड्यूटी *{{3}}* बजे समाप्त होगी।\n\n📍 *ड्यूटी की जगह:* {{4}}\n\nड्यूटी पूरी होने के बाद नीचे *ड्यूटी समाप्त करें* बटन दबाएँ और साइट से जाने से पहले अपनी *वर्तमान लोकेशन* भेजें।\n\nलोकेशन की जाँच के बाद ड्यूटी समाप्त होने का समय दर्ज हो जाएगा।\n",
    "button": {
      "label": "ड्यूटी समाप्त करें",
      "type": "QUICK_REPLY"
    }
  },
  "supervisor_missing_checkin": {
    "status": "approved",
    "text": "नमस्ते *{{1}}*,\n\n⚠️ *हाज़िरी अलर्ट*\n\nनीचे दिए गए कर्मचारी की हाज़िरी अभी तक FootfallIQ में दर्ज नहीं हुई है।\n\n👤 *कर्मचारी:* {{2}}\n\n📍 *ड्यूटी की जगह:* {{3}}\n\n🕘 *ड्यूटी शुरू होने का समय:* {{4}}\n\nकृपया हाज़िरी की स्थिति जाँचें और ज़रूरी कार्रवाई करें।\n"
  },
  "business_daily_attendance": {
    "status": "approved",
    "text": "नमस्ते *{{1}}*,\n\n📊 *FootfallIQ — दैनिक हाज़िरी रिपोर्ट*\n\n*{{2}}* की आज की हाज़िरी रिपोर्ट तैयार है।\n\n📅 *तारीख:* {{3}}\n\n👥 *निर्धारित ड्यूटी:* {{4}}\n\n✅ *दर्ज हाज़िरी:* {{5}}\n\n❌ *दर्ज नहीं हुई हाज़िरी:* {{6}}\n\nपूरी हाज़िरी रिपोर्ट और बाकी समस्याएँ FootfallIQ पर देखें।\n",
    "button": {
      "label": "रिपोर्ट देखें",
      "type": "OPTIONAL_URL"
    }
  }
};
