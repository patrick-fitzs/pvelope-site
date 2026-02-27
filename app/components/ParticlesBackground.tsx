"use client";
import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    // Dynamically load particles.js from CDN
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.onload = () => {
      (window as any).particlesJS("particles-js", {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 900 } },
          color: { value: "#9aa5a5" },
          shape: { type: "circle" },
          stroke: { width: 0, color: "#000000" },
          opacity: { value: 0.4, random: false, anim: { enable: false } },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
          move: { enable: true, speed: 0.8, direction: "none", out_mode: "out" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const canvas = document.querySelector("#particles-js canvas");
      if (canvas) canvas.remove();
    };
  }, []);

  return <div id="particles-js" />;
}