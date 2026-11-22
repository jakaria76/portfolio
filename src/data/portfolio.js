// ============================================================
//  All portfolio content lives in this file.
//  To change any text, link or project, edit it here only.
// ============================================================

export const site = {
  // Full name: used in the page title, main heading and for Google
  name: "MD. Jakaria Mahmud",
  // Short name: used in the navbar logo where space is tight
  shortName: "MD. Jakaria",
  // Your name in Bangla, shown under your English name so Bangla searches find you
  banglaName: "মোঃ জাকারিয়া মাহমুদ",
  // Other ways people may write your name (helps Google connect them to you)
  alternateNames: [
    "MD. Jakaria",
    "Md Jakaria Mahmud",
    "Md. Jakaria Mahmud",
    "Jakaria Mahmud",
    "Jakaria",
    "jakaria76",
    "মোঃ জাকারিয়া মাহমুদ",
    "মো. জাকারিয়া মাহমুদ",
    "মোঃ জাকারিয়া",
    "জাকারিয়া মাহমুদ",
    "জাকারিয়া",
  ],
  title: "Full Stack & Mobile App Developer",
  // Your live site address. If you add a custom domain later, change it here.
  url: "https://md-jakaria-mahmud.vercel.app",
  description:
    "MD. Jakaria Mahmud is a full stack and Flutter developer from Dhaka, Bangladesh with 3 apps on Google Play, building web and mobile apps with Flutter, ASP.NET Core, Laravel and React.",
  tagline:
    "I build web and mobile applications with Flutter, ASP.NET Core, Laravel and React, and I have three apps live on Google Play.",
  email: "jakariamahmud76@gmail.com",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/jakaria76",
  linkedin: "https://www.linkedin.com/in/md-jakaria76/",
  // your photo inside the /public folder
  photo: "/jakaria.png",
  // your resume inside the /public folder
  resume: "/resume.pdf",
  // Search Console is verified with the file public/google6df2a6de2289172b.html
  // (never delete it). This field is only for the alternative meta-tag method.
  googleVerification: "",
  keywords: [
    "MD. Jakaria Mahmud",
    "Md Jakaria Mahmud",
    "Jakaria Mahmud",
    "MD. Jakaria",
    "Jakaria",
    "মোঃ জাকারিয়া মাহমুদ",
    "জাকারিয়া মাহমুদ",
    "Full Stack Developer",
    "Flutter Developer",
    "Flutter App Developer Bangladesh",
    "Mobile App Developer Dhaka",
    "Web Developer Bangladesh",
    "ASP.NET Core Developer",
    "Laravel Developer",
    "React Developer",
    "AUST CSE",
  ],
};

export const about = [
  "I'm MD. Jakaria Mahmud, a Computer Science & Engineering student at Ahsanullah University of Science and Technology (AUST) who enjoys turning ideas into working products. I build cross-platform mobile apps with Flutter, and web apps with ASP.NET Core, Laravel and React.",
  "Three of my Flutter apps are published on Google Play: a FinTech investment app, a community and blood donor app, and an Islamic lifestyle companion. Most of my projects are complete systems, with authentication and security, admin dashboards, databases, cloud services and a clean interface on top.",
  "Beyond app development, I'm a co-author of a peer-reviewed research paper on AI-based fruit quality assessment, published in Applied AI Letters (Wiley).",
  "I'm open to software engineering roles and freelance projects where I can build reliable products that make a real difference for the people who use them.",
];

export const quickFacts = [
  { label: "Studying", value: "B.Sc. in CSE, AUST" },
  { label: "Published", value: "3 apps on Google Play" },
  { label: "Research", value: "Published in Applied AI Letters (Wiley)" },
  { label: "Main stack", value: "Flutter, C#, PHP, JavaScript" },
];

export const skills = [
  {
    category: "Languages",
    items: ["Dart", "C#", "JavaScript", "PHP", "C++", "Java", "C"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Firebase", "Supabase", "Push Notifications", "Biometric Auth", "Google Play Publishing"],
  },
  {
    category: "Backend",
    items: ["ASP.NET Core MVC", ".NET 9", "SignalR", "Laravel", "Node.js", "Entity Framework Core", "Supabase Edge Functions", "RESTful APIs", "OAuth"],
  },
  {
    category: "Frontend",
    items: ["React", "Livewire", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"],
  },
  {
    category: "Databases & Cloud",
    items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Firebase", "Supabase", "Cloudinary"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "GitHub", "TortoiseGit", "Gemini, OpenAI & Groq APIs", "MVC Architecture", "OOP", "Design Patterns"],
  },
];

// category:  "mobile" shows it under Mobile Apps, "web" under Web Applications
// logo:      app icon in /public/projects/, shown on the card when there is no screenshot
// image:     put a screenshot in /public/projects/ and write its path, e.g. "/projects/biniyog.png"
// published: true shows a "Published on Google Play" badge
// links:     each link shows as a button. Links with an empty url ("") are hidden.
//            type is "playstore", "github" or "live".
// TODO: paste Biniyog Club's Google Play link and each project's own GitHub repository link
export const projects = [
  // ---------------- Mobile Apps ----------------
  {
    title: "Biniyog Club",
    category: "mobile",
    type: "FinTech",
    published: true,
    description:
      "A cross-platform investment and portfolio management app for individual and group investing, share purchases and real-time profit tracking.",
    highlights: [
      "Investor dashboards with membership tiers, automated installment schedules and profit accrual tracking",
      "OTP verification, biometric app lock and encrypted cloud sync with PostgreSQL",
      "Push notifications with Firebase Cloud Messaging and KYC document uploads via Cloudinary",
      "Automatically generated PDF statements and financial reports",
    ],
    stack: ["Flutter", "Dart", "PostgreSQL", "Firebase", "Cloudinary", "REST API"],
    links: [
      { type: "playstore", url: "" },
      { type: "github", url: "https://github.com/jakaria76/Biniyog-Club" },
    ],
    image: "",
  },
  {
    title: "Conscious Student Society",
    category: "mobile",
    type: "Community",
    logo: "/projects/css-society-logo.png",
    published: true,
    description:
      "A community and social welfare app that digitizes member engagement and the organization's daily work.",
    highlights: [
      "Emergency blood donor network with map-based donor search, nearest-donor filtering and blood requests",
      "AI assistant powered by Gemini, plus a social feed, event registration with payments and a notice viewer",
      "Multi-factor authentication, biometric login and role-based admin dashboards",
      "Supabase Edge Functions for automated event notifications",
    ],
    stack: ["Flutter", "Dart", "Supabase", "Gemini AI", "Cloudinary", "Google Maps"],
    links: [
      { type: "playstore", url: "https://play.google.com/store/apps/details?id=com.css.society.app" },
      { type: "github", url: "https://github.com/jakaria76/CSS_Flutter_APP" },
    ],
    image: "",
  },
  {
    title: "Rojar Alo",
    category: "mobile",
    type: "Lifestyle",
    logo: "/projects/rojar-alo-logo.png",
    published: true,
    description:
      "An Islamic lifestyle and Ramadan companion app with accurate prayer times, a Qibla compass and daily spiritual tools.",
    highlights: [
      "Real-time prayer schedules from a prayer times API",
      "Qibla compass that uses the phone's orientation sensors",
      "Digital Zikir and Tasbih counter with tap sound feedback",
      "Offline Ramadan and Islamic guides, custom onboarding and splash animations",
    ],
    stack: ["Flutter", "Dart", "REST API", "Device Sensors"],
    links: [
      { type: "playstore", url: "https://play.google.com/store/apps/details?id=com.rojaralo.app" },
      { type: "github", url: "https://github.com/tanvirarif033/rojar_alo_apk" },
    ],
    image: "",
  },
  {
    title: "Navigator",
    category: "mobile",
    type: "Transport",
    published: false,
    description:
      "A cross-platform mobile app that digitizes bus route information so passengers can find buses between any two stops.",
    highlights: [
      "Two roles: bus operators publish routes and fares, passengers search and pick seats",
      "Source-to-destination search with results shown as interactive cards",
      "Secure sign-in and real-time data with Firebase",
    ],
    stack: ["Flutter", "Dart", "Firebase"],
    links: [{ type: "github", url: "https://github.com/jakaria76/Navigator" }],
    image: "",
  },

  // ---------------- Web Applications ----------------
  {
    title: "ThesisNest",
    category: "web",
    type: "Academic Platform",
    published: false,
    description:
      "A full-stack thesis and research management platform that runs the whole university thesis lifecycle, from proposal submission and supervisor allocation to review and approval.",
    highlights: [
      "Plagiarism and similarity checking that extracts text from PDF and document files and generates detailed originality reports",
      "Real-time chat and virtual video consultation rooms with SignalR",
      "AI assistance through OpenAI and Groq, processed in a background message queue",
      "Role-based dashboards for Students, Supervisors and Admins, with Google and LinkedIn sign-in and OTP password recovery",
    ],
    stack: ["ASP.NET Core MVC", ".NET 9", "C#", "SignalR", "SQL Server", "Entity Framework Core", "OpenAI & Groq API"],
    links: [
      { type: "live", url: "" },
      { type: "github", url: "https://github.com/jakaria76/ThesisNest" },
    ],
    image: "",
  },
  {
    title: "Conscious Student Society",
    category: "web",
    type: "Community",
    logo: "/projects/css-society-logo.png",
    published: false,
    description:
      "A full-stack web portal for a student social welfare organization that manages notices, events, advisors, committees and public engagement.",
    highlights: [
      "Role-based access for Admin, Member and Public users with ASP.NET Core Identity",
      "Admin panels with validated forms to manage every section of the site",
      "Mobile-first UI with pagination, an \"Our Story\" timeline and a video gallery",
    ],
    stack: ["ASP.NET Core MVC", "C#", "ASP.NET Core Identity"],
    links: [
      { type: "live", url: "" },
      { type: "github", url: "https://github.com/jakaria76/CSS" },
    ],
    image: "",
  },
  {
    title: "BookStore",
    category: "web",
    type: "E-commerce",
    published: false,
    description:
      "An e-commerce bookstore with a live product catalog, shopping cart, wishlist and checkout.",
    highlights: [
      "Real-time search and category browsing with Livewire, without page reloads",
      "Persistent cart, wishlist and checkout flow",
      "Separate Admin and Customer dashboards protected by middleware",
      "Login, registration and email verification",
    ],
    stack: ["Laravel 9", "Livewire 2", "PHP", "Tailwind CSS"],
    links: [
      { type: "live", url: "" },
      { type: "github", url: "https://github.com/jakaria76/BookStore" },
    ],
    image: "",
  },
  {
    title: "QuickBites",
    category: "web",
    type: "Food Ordering",
    published: false,
    description:
      "A responsive food ordering frontend with menu browsing, category filters and a cart.",
    highlights: [
      "Global cart state with the React Context API",
      "Reusable component architecture for a maintainable codebase",
      "Client-side routing for Home, Cart and Place Order pages",
    ],
    stack: ["React", "Vite", "React Router"],
    links: [
      { type: "live", url: "" },
      { type: "github", url: "https://github.com/jakaria76/QuickBites" },
    ],
    image: "",
  },
];

// highlight: your name exactly as it appears in the author list (shown in bold)
export const publications = [
  {
    title:
      "Multi-Model Fruit Quality Assessment With Coarse YOLOv11 Presence Filtering, Vision Transformers and the Segment Anything Model",
    authors: [
      "Md. Fazlay Rabbi",
      "Al Hasib Mahamud",
      "Md. Redwan Hossen",
      "Md. Jakaria Mahmud",
      "Mustofa Ahmed",
    ],
    highlight: "Md. Jakaria Mahmud",
    journal: "Applied AI Letters",
    publisher: "Wiley",
    date: "October 2026",
    details: "Vol. 8, Issue 1, e70045",
    status: "Peer-reviewed journal article",
    summary:
      "An integrated AI pipeline for fruit quality assessment: YOLOv11 first filters images for fruit presence, deep learning classifiers grade ripeness and quality, and the Segment Anything Model localizes potentially spoiled regions at pixel level.",
    tags: ["YOLOv11", "Vision Transformers", "Segment Anything (SAM)", "Computer Vision", "Deep Learning"],
    url: "https://doi.org/10.1002/ail2.70045",
    doi: "10.1002/ail2.70045",
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "Ahsanullah University of Science and Technology (AUST)",
    period: "2022 – 2026",
    detail: "", // TODO: add CGPA here if you want, e.g. "CGPA: 3.60"
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    school: "Hamdard Public College, Dhaka",
    period: "2019 – 2021",
    detail: "GPA 5.00",
  },
  {
    degree: "Secondary School Certificate (Science)",
    school: "Shambhudia ML High School, Rajshahi",
    period: "2017 – 2018",
    detail: "GPA 5.00",
  },
];
