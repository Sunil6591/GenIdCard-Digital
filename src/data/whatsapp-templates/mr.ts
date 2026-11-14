import type { TemplateCatalog } from "@/types/whatsapp";

// Generated from docs/FootfallIQ_WhatsApp_Attendance_Templates.md.
// Exact supplied text, including final newlines. Status follows the explicit source-document declaration.
// Run npm run templates:sync after editing the source document.
export const mr: TemplateCatalog = {
  "employee_account_activated": {
    "status": "approved",
    "text": "नमस्कार *{{1}}*,\n\n*{{2}}* साठी तुमचे FootfallIQ हजेरी खाते सुरू झाले आहे.\n\n📍 *ड्युटीचे ठिकाण:* {{3}}\n\nआता तुम्ही WhatsApp वरून रोज तुमची हजेरी नोंदवू शकता.\n\nलोकेशन पाठवून हजेरी कशी नोंदवायची हे पाहण्यासाठी खालील *सूचना* बटण दाबा.\n",
    "button": {
      "label": "सूचना",
      "type": "QUICK_REPLY"
    }
  },
  "employee_shift_assigned": {
    "status": "approved",
    "text": "नमस्कार *{{1}}*,\n\nतुमच्या ड्युटीची माहिती खालीलप्रमाणे आहे:\n\n🏢 *कंपनी:* {{2}}\n\n📍 *ड्युटीचे ठिकाण:* {{3}}\n\n📅 *तारीख:* {{4}}\n\n🕘 *ड्युटीची वेळ:* *{{5}} ते {{6}}*\n\nड्युटीच्या ठिकाणी पोहोचल्यावर WhatsApp वरून तुमची *हजेरी नोंदवा.*\n"
  },
  "employee_checkin_reminder": {
    "status": "approved",
    "text": "नमस्कार *{{1}}*,\n\n*{{2}}* साठी तुमची ड्युटी *{{3}}* वाजता सुरू होईल.\n\n📍 *ड्युटीचे ठिकाण:* {{4}}\n\nकामाच्या ठिकाणी पोहोचल्यावर खालील *हजेरी नोंदवा* बटण दाबा आणि तुमचे *सध्याचे लोकेशन* पाठवा.\n\nलोकेशन तपासल्यानंतर तुमची हजेरी नोंदवली जाईल.\n",
    "button": {
      "label": "हजेरी नोंदवा",
      "type": "QUICK_REPLY"
    }
  },
  "employee_checkout_reminder": {
    "status": "approved",
    "text": "नमस्कार *{{1}}*,\n\n*{{2}}* साठी तुमची ड्युटी *{{3}}* वाजता संपणार आहे.\n\n📍 *ड्युटीचे ठिकाण:* {{4}}\n\nड्युटी पूर्ण झाल्यावर खालील *ड्युटी संपवा* बटण दाबा आणि कामाच्या ठिकाणाहून निघण्यापूर्वी तुमचे *सध्याचे लोकेशन* पाठवा.\n\nलोकेशन तपासल्यानंतर तुमची ड्युटी संपल्याची वेळ नोंदवली जाईल.\n",
    "button": {
      "label": "ड्युटी संपवा",
      "type": "QUICK_REPLY"
    }
  },
  "supervisor_missing_checkin": {
    "status": "approved",
    "text": "नमस्कार *{{1}}*,\n\n⚠️ *हजेरी सूचना*\n\nखालील कर्मचाऱ्याची हजेरी अद्याप FootfallIQ मध्ये नोंदवली गेली नाही.\n\n👤 *कर्मचारी:* {{2}}\n\n📍 *ड्युटीचे ठिकाण:* {{3}}\n\n🕘 *ड्युटी सुरू होण्याची वेळ:* {{4}}\n\nकृपया हजेरीची स्थिती तपासून आवश्यक ती कार्यवाही करा.\n"
  },
  "business_daily_attendance": {
    "status": "approved",
    "text": "नमस्कार *{{1}}*,\n\n📊 *FootfallIQ — दैनिक हजेरी अहवाल*\n\n*{{2}}* चा आजचा हजेरी अहवाल तयार आहे.\n\n📅 *तारीख:* {{3}}\n\n👥 *नियोजित ड्युट्या:* {{4}}\n\n✅ *नोंदवलेले चेक-इन:* {{5}}\n\n❌ *नोंद न झालेले चेक-इन:* {{6}}\n\nसंपूर्ण हजेरी अहवाल आणि बाकीच्या अपूर्ण नोंदी FootfallIQ वर तपासा.\n",
    "button": {
      "label": "अहवाल पाहा",
      "type": "OPTIONAL_URL"
    }
  }
};
