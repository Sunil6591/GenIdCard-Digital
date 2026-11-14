"use client";

import { useContext, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, BatteryFull, Camera, EllipsisVertical, Mic, Paperclip, Phone, Signal, Smile, Wifi } from "lucide-react";
import type { StoryScene } from "@/types/story";
import type { Locale } from "@/types/whatsapp";
import { WhatsAppMessage } from "./WhatsAppMessage";
import { StoryLocaleContext } from "@/components/storytelling/StoryLocaleContext";
export type PhoneScene = Pick<StoryScene, "id" | "date" | "time" | "conversation" | "messages" | "animation">;

export function WhatsAppHeader({ scene }: { scene: PhoneScene }) {
  return <div className="wa-header"><ArrowLeft size={18} /><span className="wa-avatar"><Image src="/digital/fav.png" alt="" width={30} height={26} /></span><div className="wa-contact"><strong>{scene.conversation.name}</strong><span>{scene.conversation.role}</span></div><Phone size={17} /><EllipsisVertical size={18} /></div>;
}
export function WhatsAppInputBar() {
  return <div className="wa-input" aria-hidden="true"><div><Smile size={17} /><span>Message</span><Paperclip size={17} /><Camera size={17} /></div><span className="wa-mic"><Mic size={18} /></span></div>;
}
export function WhatsAppConversation({ scene, locale, animate }: { scene: PhoneScene; locale: Locale; animate: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const chat = ref.current;
    if (!chat) return;
    chat.scrollTop = chat.scrollHeight;
    if (!("ResizeObserver" in window)) return;
    // Replaced templates and fonts can change bubble height. Keep the latest message visible.
    const observer = new ResizeObserver(() => { chat.scrollTop = chat.scrollHeight; });
    const content = chat.firstElementChild;
    if (content) observer.observe(content);
    return () => observer.disconnect();
  }, [scene.id, locale]);
  return <div className="wa-chat" ref={ref} tabIndex={0} role="region" aria-label={`Sample conversation: ${scene.conversation.role}. Scroll to read earlier messages.`}>
    <div className="wa-chat-content">
      <span className="chat-date">{scene.date}</span>
      <p className="chat-disclaimer">Product demo · Illustrative conversations</p>
      {scene.messages.map((message, i) => <WhatsAppMessage key={`${scene.conversation.id}-${message.id}`} message={message} locale={locale} animate={animate} order={i >= scene.messages.length - 2 ? i - (scene.messages.length - 2) : 0} stagger={scene.animation.stagger} />)}
    </div>
  </div>;
}
export default function PhoneMockup({ scene, locale, animate = true, className = "" }: { scene: PhoneScene; locale?: Locale; animate?: boolean; className?: string }) {
  const sharedLocale = useContext(StoryLocaleContext);
  return <div className={`phone ${className}`}>
    <div className="phone-screen">
      <div className="phone-status"><span>{scene.time}</span><span className="phone-island" /><div><Signal size={13} /><Wifi size={13} /><BatteryFull size={18} /></div></div>
      <WhatsAppHeader scene={scene} />
      <WhatsAppConversation scene={scene} locale={locale ?? sharedLocale} animate={animate} />
      <WhatsAppInputBar />
      <div className="phone-bottom"><span /></div>
    </div>
  </div>;
}
