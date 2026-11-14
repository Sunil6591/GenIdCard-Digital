"use client";

import Image from "next/image";
import { CheckCheck, MapPin, Navigation } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { boldSegments, resolveMessage } from "@/lib/template-renderer";
import type { Locale, Message } from "@/types/whatsapp";

export function WhatsAppLocationMessage({ message, label }: { message: Message; label: string }) {
  return <div className="location-message">
    <div className="location-map" role="img" aria-label={`Illustrative map for ${message.location?.name ?? "shared location"}`}>
      <div className="map-block map-block-one" /><div className="map-block map-block-two" /><div className="map-road road-one" /><div className="map-road road-two" />
      <div className="map-pin"><MapPin size={24} fill="currentColor" /></div>
      <span className="map-area">BANER</span><span className="map-water" />
    </div>
    <div className="location-caption"><Navigation size={15} /><div><strong>{label}</strong><span>{message.location?.name}</span><small>{message.location?.address}</small></div></div>
  </div>;
}

export function WhatsAppInteractiveMessage({ buttons }: { buttons: NonNullable<Message["buttons"]> }) {
  return <div className="chat-quick-replies" aria-label="Illustrative WhatsApp buttons; no action or location sharing occurs in this demo">{buttons.map(button => <span key={button.id}>{button.label}</span>)}</div>;
}

export function WhatsAppMessage({ message, locale = "en", order = 0, animate = true, stagger = 0.1 }: { message: Message; locale?: Locale; order?: number; animate?: boolean; stagger?: number }) {
  const reduced = useReducedMotion();
  const { text, placeholder, status, buttons, language } = resolveMessage(message, locale);
  if (message.messageType === "system") return <p className="chat-system">{text}</p>;
  return <motion.div className={`chat-message ${message.direction === "outgoing" ? "outgoing" : "incoming"}`}
    initial={animate && !reduced ? { opacity: 0, y: 8 } : false}
    animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.24, delay: reduced || !animate ? 0 : Math.min(order, 2) * stagger }}>
    {placeholder && <span className="message-sample">{status === "draft" ? "SUPPLIED DRAFT · APPROVAL PENDING" : "SAMPLE MESSAGE"}</span>}
    {message.sender && <strong className="message-sender">{message.sender}</strong>}
    {message.messageType === "location" ? <WhatsAppLocationMessage message={message} label={text} /> :
      message.messageType === "image" && message.image ? <Image {...message.image} alt={message.image.alt} className="chat-image" /> :
      <p className="message-text" lang={language}>{boldSegments(text).map((segment, i) => segment.bold ? <strong key={i}>{segment.text}</strong> : <span key={i}>{segment.text}</span>)}</p>}
    <span className="message-time">{message.timestamp}{message.direction === "outgoing" && <CheckCheck size={13} aria-label="Delivered in demo" />}</span>
    {!!buttons.length && <WhatsAppInteractiveMessage buttons={buttons} />}
  </motion.div>;
}
