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
      className="w-full max-w-lg space-y-4 rounded-2xl border-2 border-[color:color-mix(in_srgb,var(--accent)_45%,transparent)] bg-[#18181b]/80 p-8 shadow-xl backdrop-blur-md transition-transform hover:scale-105"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full rounded border border-[color:color-mix(in_srgb,var(--accent)_40%,transparent)] bg-[#23272f] p-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full rounded border border-[color:color-mix(in_srgb,var(--accent)_40%,transparent)] bg-[#23272f] p-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        className="w-full rounded border border-[color:color-mix(in_srgb,var(--accent)_40%,transparent)] bg-[#23272f] p-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        required
      />
      <button
        type="submit"
        className="rounded bg-[var(--accent)] px-6 py-3 text-neutral-900 transition hover:scale-105 hover:brightness-110"
      >
        Send Message
      </button>
    </form>
  );
}