"use client";
import { useEffect, useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Load EmailJS from CDN
    const script = document.createElement("script");
    script.src = "https://cdn.emailjs.com/dist/email.min.js";
    script.onload = () => {
      (window as any).emailjs.init("RCdu08nrSrMYyge1r");
    };
    document.body.appendChild(script);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailjs = (window as any).emailjs;
    if (!emailjs || !formRef.current) return;

    emailjs
      .sendForm("service_y2n7rtd", "template_maf7ppg", formRef.current)
      .then(() => {
        alert("Message sent!");
        formRef.current?.reset();
      })
      .catch((error: any) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-lg space-y-4 bg-[#18181b]/80 border-2 border-[#00ffe7] rounded-2xl shadow-xl p-8 backdrop-blur-md transition-transform hover:scale-105"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-3 rounded bg-[#23272f] text-white border border-[#00ffe7] focus:outline-none focus:ring-2 focus:ring-[#00ffe7]"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-3 rounded bg-[#23272f] text-white border border-[#00ffe7] focus:outline-none focus:ring-2 focus:ring-[#00ffe7]"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        className="w-full p-3 rounded bg-[#23272f] text-white border border-[#00ffe7] focus:outline-none focus:ring-2 focus:ring-[#00ffe7]"
        required
      />
      <button
        type="submit"
        className="bg-[#00ffe7] text-black px-6 py-3 rounded hover:bg-[#03fff7] hover:scale-105 transition"
      >
        Send Message
      </button>
    </form>
  );
}