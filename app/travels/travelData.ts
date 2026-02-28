export type TravelPhoto = {
  url: string;       // Cloudinary URL
  caption?: string;
};

export type TravelPost = {
  slug: string;
  city: string;
  country: string;
  date: string;
  thumbnail: string; // Cloudinary URL, w_600,q_auto,f_auto
  lat: number;
  lng: number;
  summary: string;   // Short blurb shown on card + globe popup
  description: string; // Full text shown on the post page
  photos: TravelPhoto[];
};

// ─── ADD YOUR TRIPS HERE ──────────────────────────────────────────────────────
export const travelPosts: TravelPost[] = [

  {
    slug: "Hawaii",
    city: "Honolulu",
    country: "Hawaii",
    date: "Good times",
    thumbnail: "https://res.cloudinary.com/do4ze8iv8/image/upload/w_800,q_auto,f_auto/v1772210742/DJI_20250821000756_0022_D_fhrq9g.jpg",
    lat: 21.3069,
    lng: -157.8583,
    summary: "The most recent travel - August 2025.",
    description: "Far, great, sunny, engaged.",
    photos: [
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772285728/Screenshot_2026-02-28_120030_upsudj.png",},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772285728/DJI_20250826202805_0052_D_hc6vje.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772285728/DJI_20250824204117_0039_D_hkagvz.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772285726/DJI_20250820234418_0015_D_csbamv.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772285727/DJI_20250824183002_0130_D_hu7bod.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772285726/DJI_20250824043047_0126_D_z16yfy.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772285726/DJI_20250823170907_0112_D_urviag.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772285726/DJI_20250821000933_0028_D_k6q7u1.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772285726/DJI_20250822171246_0065_D_kderoc.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772285725/DJI_20250822221203_0092_D_rbmam3.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772285725/DJI_20250820225022_0012_D_g13cbm.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772285725/DJI_20250823071739_0106_D_mkcntq.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772210742/DJI_20250821000756_0022_D_fhrq9g.jpg"},
    ]
  },
      {
    slug: "Vietnam",
    city: "Hanoi",
    country: "Vietnam",
    date: "Also good times",
    thumbnail: "https://res.cloudinary.com/do4ze8iv8/image/upload/w_800,q_auto,f_auto/v1772210742/DJI_20250821000756_0022_D_fhrq9g.jpg",
    lat: 21.0278,
    lng: 105.8342,
    summary: "Travelled from Hanoi -> Ho Chi Minh - September 2024.",
    description: "Stops: Hanoi -> Hạ Long Bay -> Hà Giang Loop -> Hanoi -> Da Nang -> Ho Chi Minh City. Far, green, long, bikes.",
    photos: [
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289609/IMG_4510_liqmzd.jpg",},
      { url: ""},
      { url: ""},
      { url: ""},
    ]
  },

];