export type TravelPhoto = {
  url: string;       // Cloudinary URL
  caption?: string;
  type? : "image" | "video";
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

// all my trips here
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
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772285728/Screenshot_2026-02-28_120030_upsudj.png" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772285728/DJI_20250826202805_0052_D_hc6vje.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772285728/DJI_20250824204117_0039_D_hkagvz.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772285726/DJI_20250820234418_0015_D_csbamv.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772285727/DJI_20250824183002_0130_D_hu7bod.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772285726/DJI_20250824043047_0126_D_z16yfy.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772285726/DJI_20250823170907_0112_D_urviag.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772285726/DJI_20250821000933_0028_D_k6q7u1.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772285726/DJI_20250822171246_0065_D_kderoc.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772285725/DJI_20250822221203_0092_D_rbmam3.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772285725/DJI_20250820225022_0012_D_g13cbm.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772285725/DJI_20250823071739_0106_D_mkcntq.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772210742/DJI_20250821000756_0022_D_fhrq9g.jpg" },
    ]
  },
  {
    slug: "California",
    city: "California",
    country: "USA",
    date: "",
    thumbnail: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1775984528/WhatsApp_Image_2026-04-12_at_09.56.46_i4ipfv.jpg",
    lat: 36.7783,
    lng: -119.4179,
    summary: "",
    description: "Updating soon.",
    photos: [
        { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1775984529/WhatsApp_Image_2026-04-12_at_09.56.46_1_k3ufvc.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1775984530/WhatsApp_Image_2026-04-12_at_09.56.46_4_qep4c9.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1775984531/WhatsApp_Image_2026-04-12_at_09.56.46_5_byz3e3.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1775984529/WhatsApp_Image_2026-04-12_at_09.56.46_2_qeayi9.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1775984529/WhatsApp_Image_2026-04-12_at_09.56.46_3_rbvn7g.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1775984528/WhatsApp_Image_2026-04-12_at_09.56.46_i4ipfv.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1775984532/WhatsApp_Image_2026-04-12_at_09.56.46_6_oapfo1.jpg" },
    ]
  },
  {
    slug: "San-Francisco",
    city: "San Francisco",
    country: "USA",
    date: "",
    thumbnail: "",
    lat: 37.7749,
    lng: -122.4194,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Canada",
    city: "Vancouver/ Banff",
    country: "Canada",
    date: "",
    thumbnail: "",
    lat: 51.1784,
    lng: -115.5708,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
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
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289609/IMG_4510_liqmzd.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/video/upload/v1772289607/IMG_4065_z5mrp8.mp4", type: "video" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289605/IMG_2620_dga4ua.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289606/IMG_3984_mjnnky.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289606/IMG_4131_uaeyoo.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289607/IMG_4234_natq94.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289607/IMG_4258_igjakb.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289606/IMG_4187_mmpbjq.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289607/IMG_4360_stcxnh.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289608/IMG_4373_gdsdp1.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289608/IMG_4403_zxfw7k.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289608/IMG_4424_bdhmmh.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289609/IMG_4533_cew702.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289609/IMG_4568_g22u88.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289610/IMG_4615_egobd6.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289610/IMG_4717_cfnixg.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289610/IMG_4741_u4bq8g.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289611/IMG_4860_kbdqvy.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289611/IMG_4909_ialwb0.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289611/IMG_5151_cth7wd.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289611/IMG_5172_npnqem.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289612/IMG_5225_jseaqf.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289612/IMG_5392_jhi0yz.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289612/IMG_5470_iecmtr.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289613/IMG_5481_vo5ye6.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289613/IMG_5489_aw0rvg.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289613/IMG_5535_qmbr57.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289613/IMG_5568_hs7vcw.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289614/IMG_5631_guk5s2.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289605/IMG_3188_ksbqqg.jpg" },
      { url: "https://res.cloudinary.com/do4ze8iv8/image/upload/q_auto,f_auto/v1772289614/IMG_5685_su626d.jpg" },
    ]
  },
  {
    slug: "Liechtenstein",
    city: "Vaduz",
    country: "Liechtenstein",
    date: "October 2023",
    thumbnail: "",
    lat: 47.1410,
    lng: 9.5215,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Switzerland",
    city: "Lucerne",
    country: "Switzerland",
    date: "October 2023",
    thumbnail: "",
    lat: 47.0502,
    lng: 8.3093,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Italy",
    city: "Amalfi",
    country: "Italy",
    date: "August 2023?",
    thumbnail: "",
    lat: 40.6340,
    lng: 14.6027,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Israel",
    city: "Tel Aviv",
    country: "Israel",
    date: "October 2022 - Present",
    thumbnail: "",
    lat: 32.0853,
    lng: 34.7818,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Ireland",
    city: "All over",
    country: "Ireland",
    date: "",
    thumbnail: "",
    lat: 52.9369,
    lng: -9.4628,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Barcelona",
    city: "Barcelona",
    country: "Spain",
    date: "2024~",
    thumbnail: "",
    lat: 41.3851,
    lng: 2.1734,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Andorra",
    city: "Andorra la Vella",
    country: "Andorra",
    date: "2024~",
    thumbnail: "",
    lat: 42.5063,
    lng: 1.5218,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Copenhagen",
    city: "Copenhagen",
    country: "Denmark",
    date: "2024~",
    thumbnail: "",
    lat: 55.6761,
    lng: 12.5683,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Cotswold",
    city: "Cotswold",
    country: "England",
    date: "",
    thumbnail: "",
    lat: 51.8330,
    lng: -1.8433,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Amsterdam-nye",
    city: "Amsterdam",
    country: "Netherlands",
    date: "December 2024",
    thumbnail: "",
    lat: 52.3676,
    lng: 4.9041,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Budapest",
    city: "Budapest",
    country: "Hungary",
    date: "",
    thumbnail: "",
    lat: 47.4979,
    lng: 19.0402,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Chernobyl",
    city: "Chernobyl",
    country: "Ukraine",
    date: "",
    thumbnail: "",
    lat: 51.2741,
    lng: 30.2219,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Vienna",
    city: "Vienna",
    country: "Austria",
    date: "",
    thumbnail: "",
    lat: 48.2082,
    lng: 16.3738,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Santorini-travels",
    city: "Oia",
    country: "Greece",
    date: "",
    thumbnail: "",
    lat: 36.4618,
    lng: 25.3753,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Athens",
    city: "Athens",
    country: "Greece",
    date: "",
    thumbnail: "",
    lat: 37.9838,
    lng: 23.7275,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Dubrovnik",
    city: "Dubrovnik",
    country: "Croatia",
    date: "",
    thumbnail: "",
    lat: 42.6507,
    lng: 18.0944,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },
  {
    slug: "Split",
    city: "Split",
    country: "Croatia",
    date: "",
    thumbnail: "",
    lat: 43.5081,
    lng: 16.4402,
    summary: "",
    description: "Updating soon.",
    photos: [
      { url: "" },
    ]
  },

];