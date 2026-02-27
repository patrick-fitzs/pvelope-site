"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { TravelLocation } from "../components/TravelGlobe";

// Dynamically import globe — disables SSR (Three.js requires browser APIs)
const TravelGlobe = dynamic(() => import("../components/TravelGlobe"), {
  ssr: false,
});

// ─── YOUR TRAVEL DATA ────────────────────────────────────────────────────────
// Add your real trips here. Each one becomes a pin on the globe and a card below.
// thumbnail: use a Cloudinary URL once you've uploaded your DJI photos.
const travelPosts: TravelLocation[] = [
  // Example — replace or add to this:
  {
    slug: "example",
    city: "Dublin",
    country: "Ireland",
    date: "Home base",
    thumbnail: "",
    lat: 53.3498,
    lng: -6.2603,
    summary: "Where it all starts.",
  },
];

// ─── POPUP COMPONENT ─────────────────────────────────────────────────────────
function LocationPopup({
  location,
  onClose,
}: {
  location: TravelLocation;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 bg-[#1a1a1a] border border-[#00ffe7]/40 rounded-2xl p-6 max-w-sm w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-[#555] hover:text-[#00ffe7] text-xl transition"
        >✕</button>

        {location.thumbnail && (
          <img
            src={location.thumbnail}
            alt={location.city}
            className="w-full h-44 object-cover rounded-xl mb-4"
          />
        )}

        <h3 className="text-2xl font-bold text-[#00ffe7]">{location.city}</h3>
        <p className="text-sm text-[#777] mb-3">{location.country} · {location.date}</p>
        <p className="text-[#e0e0e0] text-sm mb-4">{location.summary}</p>

        {location.slug !== "example" && (
          <Link
            href={`/travels/${location.slug}`}
            className="inline-block bg-[#00ffe7] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#03fff7] transition text-sm"
          >
            View full post →
          </Link>
        )}
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function TravelsPage() {
  const [selected, setSelected] = useState<TravelLocation | null>(null);

  return (
    <main className="pt-24 min-h-screen px-6 md:px-20 text-[#e0e0e0]">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#00ffe7] mb-4">Travels</h1>
        <p className="text-[#b2ffe9] text-lg max-w-xl mx-auto">
          Places I&apos;ve been, photos I&apos;ve taken, and things I&apos;ve learned along the way.
          Click a pin to explore.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <TravelGlobe
          locations={travelPosts}
          onPinClick={(loc) => setSelected(loc)}
        />
        <p className="text-center text-[#444] text-xs mt-3 font-mono">
          drag to rotate · scroll to zoom · click a pin to preview
        </p>
      </div>

      {travelPosts.filter(p => p.slug !== "example").length > 0 ? (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-20">
          {travelPosts.filter(p => p.slug !== "example").map((post) => (
            <Link key={post.slug} href={`/travels/${post.slug}`}>
              <div className="project-card bg-[#1e1e1e] rounded-2xl overflow-hidden cursor-pointer">
                {post.thumbnail && (
                  <img src={post.thumbnail} alt={post.city} className="w-full h-52 object-cover" />
                )}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#00ffe7]">{post.city}</h3>
                  <p className="text-sm text-[#777] mb-2">{post.country} · {post.date}</p>
                  <p className="text-[#e0e0e0] text-sm">{post.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-[#555] pb-20 font-mono">
          <p>Posts coming soon — uploading photos and writing up the trips.</p>
        </div>
      )}

      {selected && (
        <LocationPopup location={selected} onClose={() => setSelected(null)} />
      )}

    </main>
  );
}