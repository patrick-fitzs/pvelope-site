"use client";
import { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";

export type TravelLocation = {
  slug: string;
  city: string;
  country: string;
  date: string;
  thumbnail: string;
  lat: number;
  lng: number;
  summary: string;
};

type ArcData = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
};

type Props = {
  locations: TravelLocation[];
  onPinClick: (location: TravelLocation) => void;
};

export default function TravelGlobe({ locations, onPinClick }: Props) {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 650 });

  const arcs: ArcData[] = locations.slice(0, -1).map((loc, i) => ({
    startLat: loc.lat,
    startLng: loc.lng,
    endLat: locations[i + 1].lat,
    endLng: locations[i + 1].lng,
  }));

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.6;
      if (locations.length > 0) {
        globeRef.current.pointOfView(
          { lat: locations[0].lat, lng: locations[0].lng, altitude: 2 },
          1000
        );
      }
    }
  }, [locations]);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setDimensions({ width: containerRef.current.offsetWidth, height: 650 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-2xl overflow-hidden border border-[#00ffe7]/30 bg-[#0a0a0f]"
      style={{ height: "650px" }}
    >
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-day.jpg"
        backgroundImageUrl="https://unpkg.com/three-globe/example/img/night-sky.png"
        // Custom HTML pin markers
        htmlElementsData={locations}
        htmlLat="lat"
        htmlLng="lng"
        htmlAltitude={0.01}
        htmlElement={(d) => {
          const loc = d as TravelLocation;
          const el = document.createElement("div");
          el.style.cssText = "cursor:pointer;display:flex;flex-direction:column;align-items:center;transform:translate(-50%,-100%);";
          el.innerHTML = `
            <div style="background:rgba(0,0,0,0.85);border:1px solid #00ffe7;border-radius:6px;padding:3px 7px;color:#00ffe7;font-family:monospace;font-size:11px;font-weight:bold;white-space:nowrap;margin-bottom:2px;">${loc.city}</div>
            <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.48 0 0 4.48 0 10C0 17.5 10 28 10 28C10 28 20 17.5 20 10C20 4.48 15.52 0 10 0Z" fill="#00ffe7"/>
              <circle cx="10" cy="10" r="4" fill="#0f0f0f"/>
            </svg>
          `;
          el.addEventListener("click", () => onPinClick(loc));
          return el;
        }}
        // Arcs between cities
        arcsData={arcs}
        arcColor={() => ["#00ffe7", "#00ffe7"]}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcStroke={0.5}
        arcAltitudeAutoScale={0.4}
      />
    </div>
  );
}