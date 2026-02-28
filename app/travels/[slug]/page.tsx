import { travelPosts } from "../travelData";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function TravelPostPage({ params }: Props) {
  const { slug } = await params;
  const post = travelPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <main className="pt-24 min-h-screen text-[#e0e0e0]">
      <div className="relative w-full h-[50vh] bg-gradient-to-br from-[#0f0f0f] via-[#141e30] to-[#00ffe7]/10 overflow-hidden">
        {post.photos[0] && (
          <img src={post.photos[0].url} alt={post.city} className="w-full h-full object-cover opacity-60" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 md:left-20">
          <h1 className="text-5xl font-extrabold text-[#00ffe7]">{post.city}</h1>
          <p className="text-[#b2ffe9] mt-1 text-lg">{post.country} · {post.date}</p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-10 py-12">
        <Link href="/travels" className="text-[#555] hover:text-[#00ffe7] transition text-sm font-mono mb-8 inline-block">
          ← Back to Travels
        </Link>
        <p className="text-xl text-[#b2ffe9] mb-6 italic">{post.summary}</p>
        <div className="text-[#e0e0e0] leading-relaxed space-y-4 mb-16">
          {post.description.split("\n\n").map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        </div>
        {post.photos.length > 1 && (
          <>
            <h2 className="text-2xl font-bold text-[#00ffe7] mb-6">Photos</h2>
            <div className="columns-1 md:columns-2 gap-4 space-y-4 mb-16">
              {post.photos.map((photo, i) => (
                <div key={i} className="break-inside-avoid">
                  <img src={photo.url} alt={photo.caption ?? `${post.city} photo ${i + 1}`} className="w-full rounded-xl object-cover hover:opacity-90 transition" />
                  {photo.caption && <p className="text-xs text-[#555] mt-2 font-mono text-center">{photo.caption}</p>}
                </div>
              ))}
            </div>
          </>
        )}
        <div className="border-t border-[#222] pt-8">
          <Link href="/travels" className="text-[#00ffe7] hover:underline font-mono text-sm">← All Travels</Link>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return travelPosts.map((p) => ({ slug: p.slug }));
}