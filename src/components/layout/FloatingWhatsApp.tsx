import { siteConfig } from "@/lib/config";
import WhatsAppIcon from "@/components/ui/whatsapp-icon";
export default function FloatingWhatsApp() {
  return <a className="floating-whatsapp" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-location="floating" aria-label={`Chat with FootfallIQ on WhatsApp (${siteConfig.whatsappDisplay})`}><span>Chat with us</span><WhatsAppIcon width={29} height={29} /></a>;
}
