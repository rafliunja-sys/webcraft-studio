"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { LanguageRenderer } from "./language-renderer";

type Language = "id" | "en";
type SiteContextType = {
  theme: "light" | "dark";
  language: Language;
  toggleTheme: () => void;
  setLanguage: (language: Language) => void;
};
const SiteContext = createContext<SiteContextType | null>(null);

export function SiteProviders({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<Language>("id");

  useEffect(() => {
    const savedTheme = localStorage.getItem("wc-theme");
    const savedLanguage = localStorage.getItem("wc-language");
    if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
    if (savedLanguage === "id" || savedLanguage === "en") setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.lang = language;
    localStorage.setItem("wc-theme", theme);
  }, [theme, language]);

  const value = {
    theme, language,
    toggleTheme: () => setTheme((current) => current === "light" ? "dark" : "light"),
    setLanguage: (next: Language) => {
      setLanguage(next);
      localStorage.setItem("wc-language", next);
    },
  };

  return <SiteContext.Provider value={value}>{children}<LanguageRenderer language={language} /></SiteContext.Provider>;
}
export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSite must be used inside SiteProviders");
  return context;
}
