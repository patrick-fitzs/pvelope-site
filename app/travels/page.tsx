import Link from "next/link";

// This is where your travel posts will live.
// Each entry maps to a photo, location, and eventually an MDX post page.
type TravelPost = {
  slug: string;
  city: string;
  country: string;
  date: string;
  thumbnail: string;
  lat: number;
  lng: number;
  summary: string;
};

const travelPosts: TravelPost[] = [
  // Example structure — replace with your real trips:
  // {
  //   slug: "japan-2025",
  //   city: "Tokyo",
  //   country: "Japan",
  //   date: "March 2025",
  //   thumbnail: "https://res.cloudinary.com/YOUR_CLOUD/image/upload/...",
  //   lat: 35.6762,
  //   lng: 139.6503,
  //   summary: "Three weeks across Japan — temples, ramen, and mountains.",
  // },
];

export default function TravelsPage() {
  return (
    <main className="pt-24 min-h-screen px-6 md:px-20 text-[#e0e0e0]">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[#00ffe7] mb-4">Travels</h1>
        <p className="text-[#b2ffe9] text-lg max-w-xl mx-auto">
          Places I&apos;ve been, photos I&apos;ve taken, and things I&apos;ve learned along the way.
        </p>
      </div>

      {/* Globe placeholder — react-globe.gl will go here */}
      <div className="w-full max-w-4xl mx-auto mb-20 rounded-2xl border border-[#00ffe7]/30 bg-[#181818] flex items-center justify-center"
        style={{ height: "500px" }}
      >
        <div className="text-center text-[#555]">
          <div className="text-6xl mb-4">🌍</div>
          <p className="text-lg">Interactive globe coming soon</p>
          <p className="text-sm mt-2 text-[#444]">react-globe.gl will render here with your travel pins and flight arcs</p>
        </div>
      </div>

      {/* Travel posts grid */}
      {travelPosts.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-20">
          {travelPosts.map((post) => (
            <Link key={post.slug} href={`/travels/${post.slug}`}>
              <div className="project-card bg-[#1e1e1e] rounded-2xl overflow-hidden cursor-pointer">
                <img src={post.thumbnail} alt={post.city} className="w-full h-52 object-cover" />
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
        <div className="text-center text-[#555] pb-20">
          <p className="text-lg">Posts coming soon — uploading photos and writing up the trips.</p>
        </div>
      )}

    </main>
  );
}