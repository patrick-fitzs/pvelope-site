import Loader from "./components/Loader";
import ParticlesBackground from "./components/ParticlesBackground";
import SkillSphere from "./components/SkillSphere";
import ContactForm from "./components/ContactForm";
import Image from "next/image";
import Link from "next/link";

// ─── Projects data ───────────────────────────────────────────────────────────
const projects = [
  {
    img: "/imgdumpster/radar.jpg",
    alt: "radar",
    title: "Aerial Object Detection System",
    desc: "Radar simulation and object detection framework modelling kinematics and signal behaviour, with probabilistic target classification.",
    repo: "https://github.com/patrick-fitzs/Aerial-Object-Detection-System",
    tags: [
      { label: "C++", bg: "bg-blue-700", text: "text-white" },
      { label: "Python", bg: "bg-orange-400", text: "text-black" },
      { label: "Gemini API", bg: "bg-[#4285F4]", text: "text-white" },
    ],
  },
  {
    img: "/imgdumpster/league-of-legends-logo-font-download-856x484.jpg",
    alt: "League of Legends",
    title: "League of Legends Predictor",
    desc: "Predicts win/loss based on player stats like kills, gold, CS, and assists.",
    repo: "https://github.com/patrick-fitzs/League_Of_Legends_Predictor",
    tags: [
      { label: "Python", bg: "bg-orange-400", text: "text-black" },
      { label: "PyTorch", bg: "bg-orange-400", text: "text-black" },
      { label: "scikit-learn", bg: "bg-blue-500", text: "text-white" },
      { label: "Matplotlib", bg: "bg-gray-700", text: "text-white" },
    ],
  },
  {
    img: "/imgdumpster/Barrons-Logo-Block-Color.png",
    alt: "News summary",
    title: "Barron's Article Summariser",
    desc: "Summarises finance news every morning using NLP. Matches it with stock movement data. **IN PROGRESS**",
    repo: "https://github.com/patrick-fitzs/barrons-summary",
    tags: [
      { label: "Python", bg: "bg-orange-400", text: "text-black" },
      { label: "NLP", bg: "bg-purple-500", text: "text-white" },
      { label: "Pandas", bg: "bg-yellow-300", text: "text-black" },
    ],
  },
  {
    img: "/imgdumpster/mlmatrix.png",
    alt: "Confusion Matrix",
    title: "Neural Network",
    desc: "A deep learning model for tumour detection. Uses 20+ features and achieves 95% accuracy.",
    repo: "https://github.com/patrick-fitzs/NeuralNetwork",
    tags: [
      { label: "Python", bg: "bg-orange-400", text: "text-black" },
      { label: "Pandas", bg: "bg-yellow-300", text: "text-black" },
      { label: "PyTorch", bg: "bg-orange-400", text: "text-black" },
      { label: "scikit-learn", bg: "bg-yellow-300", text: "text-black" },
      { label: "Matplotlib", bg: "bg-gray-700", text: "text-white" },
    ],
  },
  {
    img: "/imgdumpster/openai.png",
    alt: "OpenAI Logo",
    title: "AI Chat Bot",
    desc: "An AI Chat bot build leveraging OpenAI's API. A Flask application deployed on Heroku.",
    repo: "https://github.com/patrick-fitzs/AIChatBotV2",
    tags: [
      { label: "Python", bg: "bg-orange-400", text: "text-black" },
      { label: "Flask", bg: "bg-gray-700", text: "text-white" },
      { label: "OpenAI API", bg: "bg-gray-400", text: "text-black" },
      { label: "Heroku", bg: "bg-gray-400", text: "text-black" },
    ],
  },
  {
    img: "/imgdumpster/MLimg.png",
    alt: "Machine Learning",
    title: "Machine Learning Algorithms",
    desc: "An array of algorithms, from LR, to Decision trees and K-Means.",
    repo: "https://github.com/patrick-fitzs/ML_Models",
    tags: [
      { label: "Python", bg: "bg-orange-400", text: "text-black" },
      { label: "scikit-learn", bg: "bg-yellow-300", text: "text-black" },
      { label: "Pandas", bg: "bg-yellow-200", text: "text-black" },
      { label: "NumPy", bg: "bg-yellow-200", text: "text-black" },
    ],
  },
  {
    img: "/imgdumpster/apkaf.png",
    alt: "Apache Kafka",
    title: "Stock Price Streamer",
    desc: "Streams real-time stock prices into Apache Kafka, showing live producer-consumer messaging.",
    repo: "#",
    tags: [
      { label: "Python", bg: "bg-orange-400", text: "text-black" },
      { label: "Apache Kafka", bg: "bg-gray-700", text: "text-white" },
      { label: "Docker", bg: "bg-blue-300", text: "text-black" },
      { label: "Finnhub API", bg: "bg-blue-300", text: "text-black" },
    ],
  },
];

// ─── Certificates data ────────────────────────────────────────────────────────
const certs = [
  { img: "/imgdumpster/python_hackerrank_cert.png", title: "Python HackerRank", link: "" },
  { img: "/imgdumpster/genAI_LLM.png", title: "Generative AI and LLMs", link: "https://coursera.org/share/a119faaedd095eedbbef2c305b5b5a51" },
  { img: "/imgdumpster/intro_NN.png", title: "Intro to Neural Networks (PyTorch)", link: "https://coursera.org/share/4172f8ef208fec35070e27ef270411d8" },
  { img: "/imgdumpster/Db_SQL.png", title: "Databases and SQL for Data Science", link: "https://coursera.org/share/2a91e25e49e1d4060c54b5748e35eacc" },
  { img: "/imgdumpster/pp_ds.png", title: "Python Project for Data Science", link: "https://coursera.org/share/ef4efb610ddca59c816acfad05500d4a" },
  { img: "/imgdumpster/pdsai.png", title: "Python for Data Science, AI & Development", link: "https://coursera.org/share/672c25978c0118f228048631493ec9df" },
];

// ─── Footer socials ───────────────────────────────────────────────────────────
const socials = [
  { href: "https://github.com/patrick-fitzs", src: "https://cdn-icons-png.flaticon.com/512/25/25231.png", alt: "GitHub", invert: true },
  { href: "https://leetcode.com/u/patrickfitzs11/", src: "/imgdumpster/leetcode.svg", alt: "LeetCode" },
  { href: "https://www.hackerrank.com/profile/pf959ftw", src: "/imgdumpster/hackerrank.svg", alt: "HackerRank" },
  { href: "https://www.codewars.com/users/patrick-fitzs", src: "/imgdumpster/codewars.svg", alt: "CodeWars" },
  { href: "https://www.instagram.com/patrickfitz11/", src: "/imgdumpster/Instagram_logo_2022.svg", alt: "Instagram" },
];

export default function Home() {
  return (
    <>
      <Loader />
      <ParticlesBackground />

      {/* ── Floating social icons ── */}
      <div className="fixed top-1/2 right-3 -translate-y-1/2 flex flex-col space-y-5 z-[1000]">
        <div className="relative group">
          <a href="https://github.com/patrick-fitzs" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-8 h-8 invert hover:scale-125 transition-transform" />
          </a>
          <span className="absolute right-10 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Github
          </span>
        </div>
        <div className="relative group">
          <a href="https://www.linkedin.com/in/patrick-fitzsimons-243012253/" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-8 h-8 hover:scale-125 transition-transform" />
          </a>
          <span className="absolute right-10 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            LinkedIn
          </span>
        </div>
      </div>

      {/* ── CV button ── */}
      <div className="fixed top-20 right-3 z-[1000] group">
        <a href="/imgdumpster/PatricksCV.pdf" download className="relative inline-block bg-gray-800 p-3 rounded-full shadow-md hover:scale-110 transition-transform">
          <img src="/imgdumpster/resume.gif" alt="CV Icon" className="w-9 h-9 rounded-full object-cover" />
          <span className="absolute top-1/2 right-[120%] -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Check out my CV here!
          </span>
        </a>
      </div>

      <main className="pt-16">

        {/* ── INTRO ── */}
        <section id="intro" className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-10 py-10">
          <div className="intro-card flex flex-col md:flex-row items-center gap-10 bg-gradient-to-br from-[#141e30] via-[#232323] to-[#00ffe7]/10 rounded-xl shadow-2xl p-8">
            <img
              src="/imgdumpster/me.png"
              alt="Patrick"
              className="intro-photo w-44 h-44 rounded-full border-4 border-[#00ffe7] shadow-lg object-cover mb-6 md:mb-0"
            />
            <div className="max-w-xl text-left">
              <h1 className="text-5xl font-extrabold mb-4 text-[#00ffe7] drop-shadow-md">Hey, I&apos;m Patrick!</h1>
              <p className="mb-4 text-lg text-[#e0e0e0]">...and this is my personal website.</p>
              <p className="mb-4 text-[#e0e0e0]">
                It&apos;s a project that is constantly changing and being fine tuned.
                I&apos;m currently studying a BSc in Data Science and Computing{" "}
                <span className="font-semibold text-[#00ffe7]">[Year 3]</span>,
                and have been working as a backend developer across multiple companies since late 2025.
              </p>
              <p className="mb-4 text-[#e0e0e0]">
                I&apos;ve shipped production backend systems using Node.js, NestJS, and TypeScript, building APIs for payment,
                vendor, and order workflows, handling Stripe integrations, and working across PostgreSQL and Firestore.
                I&apos;ve also done full database migrations, redesigning schemas and writing custom data transformation scripts from scratch.
              </p>
              <p className="mb-4 text-[#e0e0e0]">
                Earlier I designed and deployed ETL pipelines in Python, containerised with Docker and running serverlessly on Google Cloud Functions,
                with CI/CD automated through GitHub Actions.
              </p>
              <p className="mb-4 text-[#e0e0e0]">
                On the side, I&apos;m developing a stealth product and working on a radar simulation and object detection system in C++ and Python.
              </p>
              <p className="italic text-[#b2ffe9] mb-2">Work in progress...</p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                <span className="bg-[#18181b] border border-[#00ffe7] text-[#00ffe7] px-4 py-1 rounded-full font-semibold">Software (and everything tech) Enthusiast 🤖</span>
                <span className="bg-[#18181b] border border-[#00ffe7] text-[#00ffe7] px-4 py-1 rounded-full font-semibold">Loves Coding challenges 🧑‍💻</span>
                <span className="bg-[#232323] text-[#00ffe7] px-4 py-1 rounded-full font-semibold">Gym 🏋️ | Travel 🌏 | Foodie 🍗 <span className="text-xs">(Who isn&apos;t)</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPARE TIME ── */}
        <section id="sidestep" className="min-h-[80vh] flex flex-col justify-center items-center px-10 sm:px-16 md:px-24 py-10 text-center text-[#e0e0e0]">
          <h2 className="text-3xl font-bold mb-4">What I like to do in my spare time</h2>
          <a href="https://leetcode.com/u/patrickfitzs11/" target="_blank" rel="noreferrer">
            <img src="/imgdumpster/leetcode.svg" alt="leetcode" className="w-12 h-12 hover:scale-110 transition-transform mx-auto" />
          </a>
          <p className="my-4">Yes, LeetCode. A seemingly integral part of every aspiring developer&apos;s life 🤷‍♂️</p>
          <p className="mb-2">I have a constant building list of LeetCode solutions here with crispy comments and O(1) wherever possible.</p>
          <a href="https://github.com/patrick-fitzs/LeetCode" target="_blank" rel="noreferrer" className="view-repo">View Solutions</a>
          <h3 className="mt-6 font-semibold text-lg">That&apos;s not all.....</h3>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmx4MXRoNzhvcXlsM2J3ODZnNmRkazg1ZnFoZ2IxaXcxOXkzOTlkMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lOqNS2HUyN8OJV0CuF/giphy.gif" className="gif-hover w-64 h-64 object-cover rounded-lg shadow" alt="gym" />
            <img src="https://media.giphy.com/media/3QCbTgfXMk7SCMTmsn/giphy.gif" className="gif-hover w-64 h-64 object-cover rounded-lg shadow" alt="travel" />
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzh0b3psbnBpamgyNTEzYzFnbGowaGRhNjZtMndlMnY0bW40Y3FzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XnVUazmKKpEfrX4uC4/giphy.gif" className="gif-hover w-64 h-64 object-cover rounded-lg shadow" alt="food" />
          </div>
          <p className="mt-4">P.s.... gym, travel, and eat food (of course).</p>
        </section>

        {/* ── SKILLS & EXPERIENCE ── */}
        <section id="skills-experience" className="min-h-[80vh] px-10 sm:px-16 md:px-24 py-12 flex items-center justify-center text-[#e0e0e0]">
          <div className="flex flex-wrap lg:flex-nowrap gap-12 w-full max-w-7xl">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Skills and Experience</h2>
              <p className="mb-4">
                I&apos;ve gained hands on experience across full stack development, backend engineering, and data engineering,
                working across real production environments and personal projects.
              </p>
              <p className="mb-4">
                On the backend, I&apos;ve built and shipped scalable APIs using Node.js, Express, and NestJS,
                with databases ranging from PostgreSQL to Firestore. I&apos;ve integrated Stripe for payment workflows
                including order capture, cancellation, and refunds, and handled auth flows with JWT and rate limiting.
              </p>
              <p className="mb-4">
                I&apos;ve designed and deployed ETL pipelines in Python using Docker and Google Cloud Functions,
                automated CI/CD workflows with GitHub Actions, and managed full database migrations,
                including transforming legacy WordPress data into clean PostgreSQL schemas.
              </p>
              <p className="mb-4">
                On the frontend, I&apos;ve built full-stack applications with Next.js, React, and Tailwind CSS,
                optimising for performance through SSR, parallel fetching, and query tuning.
                I have also worked with ML tools like PyTorch and scikit-learn, and enjoy tackling low-level problems in C++ and Python.
              </p>
              <p className="mb-4">
                Alongside all of this, I&apos;m currently developing a stealth product, building it end to end,
                from architecture and database design to auth, core workflows, and performance optimisation.
              </p>
            </div>
            <SkillSphere />
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="px-8 md:px-20 py-12 text-center text-[#e0e0e0]">
          <h2 className="text-3xl font-bold mb-6">My Projects</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start">
              {projects.map((p) => (
                <div key={p.title} className="project-card bg-[#1e1e1e] rounded-2xl shadow-md group relative overflow-hidden p-4 md:p-6 w-full">
                  <div className="relative w-full aspect-[16/9] md:aspect-[4/3]">
                    <img src={p.img} alt={p.alt} className="w-full h-full object-cover rounded-md" />
                    <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md px-6 text-center">
                      <p className="italic mb-3 text-base">{p.desc}</p>
                      {p.repo !== "#" && (
                        <a href={p.repo} target="_blank" rel="noreferrer" className="text-[#00ffe7] hover:underline">View Repo</a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mt-5">{p.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2 mb-2 justify-center">
                    {p.tags.map((t) => (
                      <span key={t.label} className={`${t.bg} ${t.text} font-bold px-2 py-0.5 rounded text-xs`}>{t.label}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATES ── */}
        <section id="certificates" className="w-full mt-10 py-14 flex flex-col items-center bg-[#181818]">
          <h2 className="text-3xl font-bold mb-10 text-[#00ffe7]">Certificates</h2>
          <div className="w-full max-w-5xl px-4">
            <div className="grid gap-6 md:grid-cols-3">
              {certs.map((c) => (
                <div key={c.title} className="cert-slide flex flex-col items-center bg-[#232323] rounded-xl p-4 shadow-lg cursor-pointer">
                  <img src={c.img} className="w-44 h-32 object-contain mb-3" alt={c.title} />
                  <div className="text-lg font-semibold mt-2 mb-1 text-[#e0e0e0] text-center">{c.title}</div>
                  {c.link && (
                    <a href={c.link} target="_blank" rel="noreferrer" className="text-[#00ffe7] text-sm hover:underline">View Certificate</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-center px-10 sm:px-16 md:px-24 py-12 text-center text-[#e0e0e0]">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect!</h2>
          <ContactForm />
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-black w-full py-6 flex flex-col items-center justify-center">
        <div className="flex gap-6 mb-2 items-center flex-wrap justify-center">
          <h2 className="text-[#e0e0e0]">Other socials here: <span className="text-[#00ffe7]">➔</span></h2>
          {socials.map((s) => (
            <a key={s.alt} href={s.href} target="_blank" rel="noreferrer" title={s.alt}>
              <img
                src={s.src}
                className={`w-7 h-7 hover:scale-150 transition hover:rotate-12 ${s.invert ? "invert" : ""}`}
                alt={s.alt}
              />
            </a>
          ))}
        </div>
        <span className="text-[#777] text-sm">&copy; 2026 Patrick Fitzsimons. All rights reserved.</span>
      </footer>
    </>
  );
}