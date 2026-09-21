import storyForge from "../assets/logos/storyforge.png";
import jobmacha from "../assets/logos/jobmacha.png";
import buddyChef from "../assets/logos/buddychef.png";
import garvIndia from "../assets/logos/garvindia.png";

const products = [
  {
    id: 1,
    slug: "storyforge",
    logo: storyForge,
    name: "StoryForge",
    category: "AI Content Platform",
    tagline: "Create. Publish. Grow.",
    description:
      "Create, personalize, and manage digital stories powered by AI.",
    status: "Launching Soon",
    accent: "#8B5CF6",

    features: [
      "AI Writing",
      "Story Generator",
      "Publishing",
      "Brand Studio",
    ],

    website: "https://storyforge.notnulltech.com",
    android: "https://play.google.com/store/apps/details?id=com.notnulltech.storyforge",
    ios: "https://apps.apple.com/app/storyforge/id123456789",
  },

  {
    id: 2,
    slug: "jobmacha",
    logo: jobmacha,
    name: "JobMacha",
    category: "AI Career Platform",
    tagline: "Learn. Prepare. Get Hired.",
    description:
      "Learn, practice, and grow your career through personalized AI guidance.",
    status: "Launching Soon",
    accent: "#2563EB",

    features: [
      "AI Resume",
      "Mock Interview",
      "Career Coach",
      "Job Matching",
    ],

    website: "https://jobmacha.notnulltech.com",
    android: "https://play.google.com/store/apps/details?id=com.notnulltech.jobmacha",
    ios: "https://apps.apple.com/app/jobmacha/id123456789",
  },

  {
    id: 3,
    slug: "buddychef",
    logo: buddyChef,
    name: "BuddyChef",
    category: "AI Cooking Companion",
    tagline: "Cook Smarter with AI.",
    description:
      "Recipes, substitutions, meal planning, and kitchen guidance.",
    status: "Launching Soon",
    accent: "#F97316",

    features: [
      "Smart Recipes",
      "Meal Planner",
      "Voice Assistant",
      "Nutrition Tips",
    ],

    website: "https://buddychef.notnulltech.com",
    android: "https://play.google.com/store/apps/details?id=com.notnulltech.buddychef",
    ios: "https://apps.apple.com/app/buddychef/id123456789",
  },

  {
    id: 4,
    slug: "garvindia",
    logo: garvIndia,
    name: "GarvIndia",
    category: "Digital Identity Platform",
    tagline: "Trusted Digital Identity.",
    description:
      "Building secure and trusted digital identities for Indian citizens.",
    status: "Launching Soon",
    accent: "#16A34A",

    features: [
      "Identity",
      "Verification",
      "Digital Trust",
      "Certificates",
    ],

    website: "https://garvindia.com",
    android: "https://play.google.com/store/apps/details?id=com.notnulltech.garvindia",
    ios: "https://apps.apple.com/app/garvindia/id123456789",
  },
];

export default products;