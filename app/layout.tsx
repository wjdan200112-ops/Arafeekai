import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "أرافيك ذكاء | المعرفة تبدأ بفكرة",
  description: "منصة عربية للذكاء الاصطناعي والتقنية وصناعة المحتوى.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}