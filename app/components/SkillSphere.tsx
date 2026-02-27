"use client";
import { useEffect } from "react";

const TAGS = [
  "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind",
  "Python", "Java", "C++", "R", "SQL",
  "Node.js", "Express", "NestJS", "Next.js", "React", "Flask",
  "PostgreSQL", "Firestore", "MongoDB", "Supabase",
  "Docker", "GCP", "Heroku", "Vercel", "Backblaze B2",
  "GitHub Actions", "CI/CD", "Git",
  "PyTorch", "Scikit-learn", "Pandas", "NumPy", "SciPy", "Matplotlib",
  "Stripe API", "JWT", "BeautifulSoup", "Selenium",
];

export default function SkillSphere() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js";
    script.onload = () => {
      const container = document.getElementById("skillSphere");
      if (container && container.offsetWidth > 0) {
        (window as any).TagCloud("#skillSphere", TAGS, {
          radius: 250,
          maxSpeed: "normal",
          initSpeed: "normal",
          direction: 135,
          keep: true,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="skillSphere"
      className="flex-1 h-[400px] flex items-center justify-center text-[#00ffe7] text-lg"
    />
  );
}