"use client";
import { createContext } from "react";
import type { Locale } from "@/types/whatsapp";
export const StoryLocaleContext = createContext<Locale>("en");
