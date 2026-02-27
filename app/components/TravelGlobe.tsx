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
  const [dimensions, setDimensions] = useState({ width: 800, height: 520 });

  // Build flight arcs between consecutive cities
  const arcs: ArcData[] = locations.slice(0, -1).map((loc, i) => ({
    startLat: loc.lat,
    startLng: loc.lng,
    endLat: locations[i + 1].lat,
    endLng: locations[i + 1].lng,
  }));

  // Set auto-rotate once globe mounts
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

  // Responsive sizing
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: 520,
        });
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
      style={{ height: "520px" }}
    >
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="https://unpkg.com/three-globe/example/img/night-sky.png"
        // Pins
        pointsData={locations}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => "#00ffe7"}
        pointAltitude={0.04}
        pointRadius={0.5}
        pointLabel={(d) => {
          const loc = d as TravelLocation;
          return `<div style="background:rgba(0,0,0,0.85);border:1px solid #00ffe7;border-radius:8px;padding:8px 12px;color:#e0e0e0;font-family:monospace;font-size:13px;">
            <div style="color:#00ffe7;font-weight:bold">${loc.city}</div>
            <div style="font-size:11px;color:#888">${loc.country} · ${loc.date}</div>
          </div>`;
        }}
        onPointClick={(d) => onPinClick(d as TravelLocation)}
        // Arcs
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