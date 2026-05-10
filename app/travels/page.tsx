"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { TravelLocation } from "../components/TravelGlobe";

import { travelPosts } from "@/app/travels/travelData";

const TravelGlobe = dynamic(() => import("../components/TravelGlobe"), {
  ssr: false,
});

type Post = (typeof travelPosts)[number];
type Pin = NonNullable<Post["mapPins"]>[number];

const globeLocations = (posts: Post[]): TravelLocation[] => {
  const row = (p: Post, m?: Pin): TravelLocation => ({
    slug: p.slug,
    city: m?.city ?? p.city,
    country: p.country,
    date: p.date,
    thumbnail: p.thumbnail,
    lat: m?.lat ?? p.lat,
    lng: m?.lng ?? p.lng,
    summary: p.summary,
  });
  return posts.flatMap((p) => (p.mapPins?.length ? p.mapPins.map((m) => row(p, m)) : [row(p)]));
};



// ─────────────────────────── POPUP COMPONENT ───────────────────────────
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
        className="relative z-10 w-full max-w-sm rounded-2xl border border-[color:color-mix(in_srgb,var(--accent)_40%,transparent)] bg-[#1a1a1a] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-[#555] transition hover:text-[var(--accent)]"
        >✕</button>

        {location.thumbnail && (
          <img
            src={location.thumbnail}
            alt={location.city}
            className="w-full h-44 object-cover rounded-xl mb-4"
          />
        )}

        <h3 className="text-2xl font-bold text-[var(--accent)]">{location.city}</h3>
        <p className="text-sm text-[#777] mb-3">{location.country} · {location.date}</p>
        <p className="text-[#e0e0e0] text-sm mb-4">{location.summary}</p>

        {location.slug !== "example" && (
          <Link
            href={`/travels/${location.slug}`}
            className="inline-block rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-bold text-neutral-900 transition hover:brightness-110"
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
        <h1 className="mb-4 text-5xl font-extrabold text-[var(--accent)]">Travels</h1>
        <p className="mx-auto max-w-xl text-lg text-[color-mix(in_srgb,var(--accent)_50%,#94a3b8)]">
          Places I&apos;ve been, photos I&apos;ve taken.

        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <TravelGlobe
          locations={globeLocations(travelPosts)}
          onPinClick={(loc) => setSelected(loc)}
        />
        <p className="text-center text-[#444] text-xs mt-3 font-mono">
          drag to rotate · scroll to zoom
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
                  <h3 className="text-xl font-bold text-[var(--accent)]">{post.city}</h3>
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