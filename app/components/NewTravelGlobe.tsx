"use client";
import { useEffect, useRef } from "react";

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

type Props = {
  locations: TravelLocation[];
  onPinClick: (location: TravelLocation) => void;
};

const CESIUM_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMWUzMTM0Zi1iMGZlLTRjYmMtYjAyNC0xZTVkMjFhNmY4NWUiLCJpZCI6NDA1NTY2LCJpYXQiOjE3NzM4MjkxNjF9.V0BV_PTvxc1pXBXbzdCaIoAULl7PyGF-j6I-_emn6Co";

export default function TravelGlobe({ locations, onPinClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    if (viewerRef.current) return;

    const load = async () => {
      // CSS
      if (!document.getElementById("cesium-css")) {
        const link = document.createElement("link");
        link.id = "cesium-css";
        link.rel = "stylesheet";
        link.href = "https://cesium.com/downloads/cesiumjs/releases/1.114/Build/Cesium/Widgets/widgets.css";
        document.head.appendChild(link);
      }

      // JS
      if (!(window as any).Cesium) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cesium.com/downloads/cesiumjs/releases/1.114/Build/Cesium/Cesium.js";
          script.onload  = () => resolve();
          script.onerror = () => reject();
          document.head.appendChild(script);
        });
      }

      const Cesium = (window as any).Cesium;

      // ── Exact Sandcastle setup ──────────────────────────────────────────
      Cesium.Ion.defaultAccessToken = CESIUM_TOKEN;

      if (!containerRef.current) return;

      const viewer = new Cesium.Viewer(containerRef.current, {
        globe: false,
        skyAtmosphere: new Cesium.SkyAtmosphere(),
        sceneModePicker: false,
        baseLayerPicker: false,
        geocoder: false,
        animation: false,
        fullscreenButton: false,
        homeButton: false,
        infoBox: false,
        selectionIndicator: false,
        timeline: false,
        navigationHelpButton: false,
      });

      viewerRef.current = viewer;

      // Google Photorealistic 3D Tiles — exact Sandcastle code
      try {
        const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2275207);
        viewer.scene.primitives.add(tileset);
      } catch (error) {
        console.error("3D Tiles error:", error);
      }

      // ── Pins ────────────────────────────────────────────────────────────
      const pinImage = getPinImage();
      locations.forEach((loc) => {
        viewer.entities.add({
          position: Cesium.Cartesian3.fromDegrees(loc.lng, loc.lat, 0),
          billboard: {
            image: pinImage,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            disableDepthTestDistance: Number.POSITIVE_INFINITY,
            width: 28,
            height: 38,
          },
          label: {
            text: loc.city,
            font: "bold 12px monospace",
            fillColor: Cesium.Color.fromCssColorString("#00ffe7"),
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 2,
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            pixelOffset: new Cesium.Cartesian2(0, -42),
            disableDepthTestDistance: Number.POSITIVE_INFINITY,
            backgroundColor: Cesium.Color.fromCssColorString("rgba(0,0,0,0.85)"),
            showBackground: true,
            backgroundPadding: new Cesium.Cartesian2(7, 4),
          },
          properties: { locationData: loc },
        });
      });

      // ── Arcs ────────────────────────────────────────────────────────────
      for (let i = 0; i < locations.length - 1; i++) {
        viewer.entities.add({
          polyline: {
            positions: sampleArc(locations[i], locations[i + 1]),
            width: 2,
            material: new Cesium.PolylineGlowMaterialProperty({
              glowPower: 0.3,
              color: Cesium.Color.fromCssColorString("#00ffe7"),
            }),
          },
        });
      }

      // ── Click ───────────────────────────────────────────────────────────
      viewer.screenSpaceEventHandler.setInputAction((e: any) => {
        const picked = viewer.scene.pick(e.position);
        if (Cesium.defined(picked) && picked.id) {
          const data = picked.id?.properties?.locationData?.getValue();
          if (data) onPinClick(data);
        }
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

      // ── Initial camera ───────────────────────────────────────────────────
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(15, 48, 14_000_000),
        duration: 1,
      });
    };

    load().catch(console.error);

    return () => {
      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-[#00ffe7]/30"
      style={{ height: "650px", position: "relative", background: "#0a0a0f" }}
    >
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
      <div style={{
        position: "absolute", bottom: 12, left: "50%",
        transform: "translateX(-50%)",
        color: "rgba(0,255,231,0.5)", fontFamily: "monospace",
        fontSize: "12px", pointerEvents: "none", whiteSpace: "nowrap",
      }}>
        drag to rotate · scroll to zoom · click a pin to check it out!
      </div>
    </div>
  );
}

function getPinImage(): string {
  const svg = `<svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C6.27 0 0 6.27 0 14C0 24.5 14 38 14 38C14 38 28 24.5 28 14C28 6.27 21.73 0 14 0Z" fill="#00ffe7"/>
    <circle cx="14" cy="14" r="5" fill="#0a0a0f"/>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

function sampleArc(start: TravelLocation, end: TravelLocation): any[] {
  const Cesium = (window as any).Cesium;
  const pts = [];
  for (let i = 0; i <= 50; i++) {
    const t   = i / 50;
    const lat = start.lat + (end.lat - start.lat) * t;
    const lng = start.lng + (end.lng - start.lng) * t;
    const alt = 200_000 * 4 * t * (1 - t);
    pts.push(Cesium.Cartesian3.fromDegrees(lng, lat, alt));
  }
  return pts;
}