"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";


type Props = {
  phone: string;      // e.g. "38975778746"
  message?: string;   // optional prefilled message
};

export default function WhatsAppFloatingButton({
  phone,
  message = "Hello, I would like to get in touch.",
}: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
   <a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className={[
    "fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full",
    "bg-[#0b0f1a]/90 backdrop-blur",
    "flex items-center justify-center",
    "border border-white/10",
    "shadow-lg shadow-black/40",
    "transition-all duration-300",
    "hover:-translate-y-1",
    "hover:shadow-[0_0_18px_rgba(37,211,102,0.18)]",
    visible ? "opacity-100" : "opacity-0 pointer-events-none",
  ].join(" ")}
>
  {/* WhatsApp CIRCLE icon */}
  <MessageCircle className="w-6 h-6 text-[#25D366]" strokeWidth={2.2} />
 
</a>


  );
}
