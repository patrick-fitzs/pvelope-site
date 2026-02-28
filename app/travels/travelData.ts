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
    thumbnail: "https://res.cloudinary.com/do4ze8iv8/image/upload/w_800,q_auto,f_auto/v1772289614/IMG_5685_su626d.jpg",

    lat: 21.0278,
    lng: 105.8342,
    summary: "Travelled from Hanoi -> Ho Chi Minh - September 2024.",
    description: "Stops: Hanoi -> Hạ Long Bay -> Hà Giang Loop -> Hanoi -> Da Nang -> Ho Chi Minh City. Far, green, long, bikes.",
    photos: [
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289609/IMG_4510_liqmzd.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289605/IMG_2620_dga4ua.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289606/IMG_3984_mjnnky.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289606/IMG_4131_uaeyoo.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289607/IMG_4234_natq94.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289607/IMG_4258_igjakb.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289606/IMG_4187_mmpbjq.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289607/IMG_4360_stcxnh.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289608/IMG_4373_gdsdp1.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289608/IMG_4373_gdsdp1.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289608/IMG_4403_zxfw7k.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289608/IMG_4424_bdhmmh.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289609/IMG_4533_cew702.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289609/IMG_4568_g22u88.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289610/IMG_4615_egobd6.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289610/IMG_4717_cfnixg.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289610/IMG_4741_u4bq8g.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289611/IMG_4860_kbdqvy.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289611/IMG_4909_ialwb0.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289611/IMG_5151_cth7wd.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289611/IMG_5172_npnqem.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289612/IMG_5225_jseaqf.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289612/IMG_5392_jhi0yz.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289612/IMG_5470_iecmtr.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289613/IMG_5481_vo5ye6.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289613/IMG_5489_aw0rvg.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289613/IMG_5535_qmbr57.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289613/IMG_5568_hs7vcw.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289614/IMG_5631_guk5s2.jpg"},
      { url : "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289605/IMG_3188_ksbqqg.jpg"},
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/v1772289614/IMG_5685_su626d.jpg"},
    ]
  },
    // Switzerland
    {
    slug: "Switzerland",
    city: "Lucerne",
    country: "Switzerland",
    date: "October 2023",
    thumbnail: "",
    lat: 0,
    lng: 0,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "",},
    ]
    },


  {
    slug: "Italy",
    city: "Amalfi",
    country: "Italy",
    date: "August 2023?",
    thumbnail: "",
    lat: 0,
    lng: 0,
    summary: "",
    description: "Updating soon.",
    photos: [
        { url: "",},
    ]
  },

  {
    slug: "Israel",
    city: "Tel Aviv",
    country: "Israel",
    date: "October 2022 - Present",
    thumbnail: "",
    lat: 0,
    lng: 0,
    summary: "",
    description: "Updating soon.",
    photos: [
        { url: "",},
    ]
  },
      {
    slug: "California",
    city: "California",
    country: "USA",
    date: "",
    thumbnail: "",
    lat: 0,
    lng: 0,
    summary: "",
    description: "Updating soon.",
    photos: [
        { url: "",},
    ]
  },
      {
    slug: "San-Francisco",
    city: "San Francisco",
    country: "USA",
    date: "",
    thumbnail: "",
    lat: 0,
    lng: 0,
    summary: "",
    description: "Updating soon.",
    photos: [
        { url: "",},
    ]
  },
        {
    slug: "Ireland",
    city: "All over",
    country: "Ireland",
    date: "",
    thumbnail: "",
    lat: 0,
    lng: 0,
    summary: "",
    description: "Updating soon.",
    photos: [
        { url: "",},
    ]
  },
        {
    slug: "Canada",
    city: "Vancouver/ Banff",
    country: "Canada",
    date: "",
    thumbnail: "",
    lat: 0,
    lng: 0,
    summary: "",
    description: "Updating soon.",
    photos: [
        { url: "",},
    ]
  },
        {
    slug: "/",
    city: "",
    country: "",
    date: "",
    thumbnail: "",
    lat: 0,
    lng: 0,
    summary: "",
    description: "Updating soon.",
    photos: [
        { url: "",},
    ]
  },


];