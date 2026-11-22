// ============================================================
//  All portfolio content lives in this file.
//  To change any text, link or project, edit it here only.
// ============================================================

export const site = {
  // Full name: used in the page title, main heading and for Google
  name: "MD. Jakaria Mahmud",
  // Short name: used in the navbar logo where space is tight
  shortName: "MD. Jakaria",
  // Other ways people may write your name, including Bangla.
  // Not shown on the page; only Google reads these (structured data), so that
  // English and Bangla searches both point to you.
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
    "MD. Jakaria Mahmud is a full stack and Flutter developer at Mariners Group, Dhaka, with 3 apps on Google Play, building web and mobile apps with Next.js, Flutter, ASP.NET Core and Laravel.",
  tagline:
    "I build web and mobile applications with Next.js, Flutter, ASP.NET Core and Laravel, and I have three apps live on Google Play.",
  email: "jakariamahmud76@gmail.com",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/jakaria76",
  linkedin: "https://www.linkedin.com/in/md-jakaria76/",
  orcid: "https://orcid.org/0009-0009-3280-3012",
  // your photo inside the /public folder
  photo: "/jakaria.png",
  // your resume inside the /public folder
  resume: "/resume.pdf",
  // Search Console is verified with the file public/google6df2a6de2289172b.html
  // (never delete it). This field is only for the alternative meta-tag method.
  googleVerification: "",
  // Note: Google ignores the keywords meta tag. Keep this list short and relevant;
  // stuffing it can look like spam. What ranks is the visible text on the page.
  keywords: [
    // name
    "MD. Jakaria Mahmud",
    "Md Jakaria Mahmud",
    "Jakaria Mahmud",
    "MD. Jakaria",
    "Jakaria Mahmud portfolio",
    "মোঃ জাকারিয়া মাহমুদ",
    "জাকারিয়া মাহমুদ",
    // role + place
    "Full Stack Developer Bangladesh",
    "Flutter Developer Bangladesh",
    "Flutter Developer Dhaka",
    "Mobile App Developer Bangladesh",
    "ASP.NET Core Developer Bangladesh",
    "Laravel Developer Dhaka",
    "React Developer Bangladesh",
    "Next.js Developer Bangladesh",
    "Software Engineer Bangladesh",
    // education, work, research
    "AUST CSE",
    "Ahsanullah University of Science and Technology",
    "Conscious Student Society app",
    "Rojar Alo app",
    "ThesisNest",
    "Applied AI Letters",
  ],
};

// The first paragraph is shown larger as an intro. Wrap words in **double stars** to make them bold.
export const about = [
  "I'm **MD. Jakaria Mahmud**, a software and web developer from Dhaka who turns ideas into products people actually use.",
  "At **Mariners Group** I build the **Sales and Production modules** of the company ERP with **Next.js and TypeScript**, and the **Biniyog Club** investment app with **Flutter**.",
  "I have **three apps live on Google Play**, from a FinTech investment app to a community blood donor app and an Islamic lifestyle companion. Outside work I also build with **ASP.NET Core, Laravel and React**.",
  "I'm a co-author of a **peer-reviewed AI research paper** in Applied AI Letters (Wiley), and I care about clean, maintainable code and reliable products.",
];

// "At a glance" card in the About section. icon: briefcase, education, play, research or location.
export const quickFacts = [
  { icon: "briefcase", label: "Working at", value: "Mariners Group", detail: "Junior Software & Web Developer" },
  { icon: "education", label: "Education", value: "B.Sc. in CSE", detail: "Ahsanullah University of Science and Technology" },
  { icon: "play", label: "Published", value: "3 apps on Google Play", detail: "Flutter · Android" },
  { icon: "research", label: "Research", value: "Applied AI Letters", detail: "Wiley · 2026" },
  { icon: "location", label: "Based in", value: "Dhaka, Bangladesh", detail: "GMT+6" },
];

// Jobs, newest first. current: true shows "Present" and a "Current" badge.
// highlights / stack: add what you do and the tools you use; empty lists are hidden.
export const experience = [
  {
    role: "Junior Software and Web Developer",
    company: "Mariners Group",
    companyUrl: "https://marinersgroup.com.bd/",
    logo: "/companies/mariners-group-logo.png",
    department: "IT Department",
    location: "Dhaka, Bangladesh",
    employmentType: "Full-time",
    period: "Oct 2026 – Present",
    startDate: "2026-10-04",
    current: true,
    summary:
      "Full-stack development of the company's ERP system and its Biniyog Club investment app.",
    highlights: [
      "Building the Sales and Production modules of the company ERP with Next.js, React and TypeScript",
      "Designing the PostgreSQL database on Neon with Prisma ORM, and securing the APIs with JWT authentication and Zod validation",
      "Deploying and running the ERP on a VPS with Nginx and PM2, with Cloudinary for file and image storage",
      "Developing Biniyog Club, the company's cross-platform investment app, with Flutter",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Prisma ORM",
      "JWT Auth",
      "Zod",
      "Cloudinary",
      "Nginx",
      "PM2",
      "VPS",
      "Flutter",
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Dart", "C#", "PHP", "C++", "Java", "C"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Firebase", "Supabase", "Push Notifications", "Biometric Auth", "Google Play Publishing"],
  },
  {
    category: "Backend",
    items: ["Next.js", "Node.js", "Prisma ORM", "ASP.NET Core MVC", ".NET 9", "SignalR", "Laravel", "Entity Framework Core", "RESTful APIs", "JWT & OAuth", "Zod"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Livewire", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"],
  },
  {
    category: "Databases & Cloud",
    items: ["PostgreSQL", "Neon", "SQL Server", "MySQL", "MongoDB", "Firebase", "Supabase", "Cloudinary"],
  },
  {
    category: "DevOps & Tools",
    items: ["VPS", "Nginx", "PM2", "Vercel", "Git", "GitHub", "Gemini, OpenAI & Groq APIs", "OOP", "Design Patterns"],
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
    // where it was built (shown under the title); remove for personal projects
    builtAt: "Mariners Group",
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
