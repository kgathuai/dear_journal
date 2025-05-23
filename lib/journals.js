import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ChurchIcon from "@mui/icons-material/Church";
import PaymentIcon from "@mui/icons-material/Payment";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import heartandtruth from "../public/images/heartandtruth.jpg";
import goalsandgrace from "../public/images/genbanner.jpg";
import herWealth from "../public/images/herBanner.jpg";
import herWealthimg from "../public/images/herwealthi.jpg";
import hearttruth from "../public/images/heartandt.jpg";
import general from "../public/images/gene.jpg";
import genewrite from "../public/images/genwrite.jpg";
import heartandt from "../public/images/heartandt.jpg";
import her from "../public/images/her.jpg";

// Array of all images from the images folder
export const allImages = [
  herWealthimg,
  hearttruth,
  general,
  genewrite,
  heartandt,
  her,
];

export const OurJournal = [
  {
    title: "Heart & Truth journal",
    description:
      "Guided Bible study journal for growth, reflection, revelation, and connection.",
    image: hearttruth,
    type: "heart-and-truth",
  },
  {
    title: "Daily Goals & Grace",
    description:
      "Purposeful journal aligning goals, routines, faith, gratitude, and progress tracking.",
    image: general,
    type: "daily-goals-grace",
  },
  {
    title: "Her Wealth Journal",
    description:
      "Purposeful journal aligning goals, routines, faith, gratitude, and progress tracking.",
    image: herWealthimg,
    type: "her-wealth",
  },
];

export const journals = {
  Spiritual: {
    title: "Heart & Truth Journal",
    price: 1200,
    shortDescription:
      "Guided Bible study journal for growth, reflection, revelation, and connection.",
    fullDescription:
      "Deepen your walk with God through guided Bible study prompts, reflection sections, and space to record personal revelations. Perfect for both individual, family and small group Bible Study.",
    image: heartandtruth,
    detailImage: hearttruth,
    features: [
      "Key takeaway",
      "Truth about God",
      "Call to action",
      "Life application insight",
    ],
  },
  Daily: {
    title: "Daily Goals & Grace",
    price: 1200,
    shortDescription:
      "Purposeful journal aligning goals, routines, faith, gratitude, and progress tracking.",
    fullDescription:
      "A purpose-driven journal designed to help you align your daily routines with your goals and God’s grace. Set intentional weekly goals, track your progress, and stay spiritually grounded every step of the way, while maintaining a heart of gratitude",
    image: goalsandgrace,
    detailImage: general,
    features: [
      "Verse of the day",
      "To do List",
      "Gratitude List",
      "Daily Reflection",
      "Self-discovery exercises",
    ],
  },
  Finantial: {
    title: "Her Wealth Journal",
    price: 1800,
    shortDescription:
      "48-week journal empowering women through faith, finance, growth, and freedom.",
    fullDescription:
      "A 48-week guided journal for women ready to take charge of their money. From budgeting to building wealth, this journal blends faith, financial literacy, and personal growth for a holistic journey to financial freedom.",
    image: herWealth,
    detailImage: herWealthimg,
    features: [
      "Monthly financial topics",
      "Weekly challenges and tips",
      "Financial reflection tools",
    ],
  },
};
export const journalTypes = [
  {
    icon: <ChurchIcon sx={{ fontSize: 40, color: "#274F3B", mb: 2 }} />,
    title: "Spiritual",
    description:
      "Rigorous, peer-reviewed publications featuring cutting-edge research and scholarly discourse.",
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 40, color: "#274F3B", mb: 2 }} />,
    title: "Financial",
    description:
      "Private spaces for reflection, emotional processing, and personal growth.",
  },
  {
    icon: <LibraryBooksIcon sx={{ fontSize: 40, color: "#274F3B", mb: 2 }} />,
    title: "General",
    description:
      "Customizable organization systems combining planners, diaries, and task trackers.",
  },
];
export const teamMembers = [
  {
    name: "Susan Wangui",
    role: "Founder & Editor-in-Chief",
    bio: "Susan has over 15 years of experience in academic publishing and is passionate about making knowledge accessible to all.",
    avatar: "/placeholder.svg?height=100&width=100&text=JS",
  },
  {
    name: " Ernest Kungu",
    role: "Creative Director",
    bio: "Ernest brings his artistic vision to our journal designs, ensuring each publication is both beautiful and functional.",
    avatar: "/placeholder.svg?height=100&width=100&text=MJ",
  },
  {
    name: "Mary Warui",
    role: "Content Strategist",
    bio: "Mary specializes in developing content strategies that engage readers and promote meaningful reflection.",
    avatar: "/placeholder.svg?height=100&width=100&text=SW",
  },
  {
    name: "Lewis Mutwiri",
    role: "Partner Strategist",
    bio: "Lewis specializes in Meeting our partners  and promote meaningful Leads.",
    avatar: "/placeholder.svg?height=100&width=100&text=SW",
  },
];

export const socialMedia = [
  {
    name: "Facebook",
    icon: <FacebookIcon fontSize="large" sx={{ color: "#1877F2" }} />,
    url: "https://www.facebook.com/share/1DUTK9Jw69",
  },

  {
    name: "Instagram",
    icon: <InstagramIcon fontSize="large" sx={{ color: "#E4405F" }} />,
    url: "https://instagram.com/Dear_Journal_ke",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon fontSize="large" sx={{ color: "#0A66C2" }} />,
    url: "https://www.linkedin.com/company/dear-journal-ke",
  },
];
export const galleryItems = [
  {
    id: 1,
    title: "Academic Journal Example",
    description:
      "A sample layout of our academic journal format with research annotations.",
    image: "/placeholder.svg?height=300&width=400&text=Academic+Journal",
  },
  {
    id: 2,
    title: "Personal Journal Spread",
    description:
      "An example of a personal journal spread with daily reflections.",
    image: "/placeholder.svg?height=300&width=400&text=Personal+Journal",
  },
  {
    id: 3,
    title: "Bullet Journal Setup",
    description:
      "A monthly bullet journal setup with habit tracker and task list.",
    image: "/placeholder.svg?height=300&width=400&text=Bullet+Journal",
  },
  {
    id: 4,
    title: "Travel Journal Pages",
    description:
      "Sample pages from a travel journal documenting adventures abroad.",
    image: "/placeholder.svg?height=300&width=400&text=Travel+Journal",
  },
  {
    id: 5,
    title: "Art Journal Techniques",
    description:
      "Various mixed media techniques demonstrated in our art journals.",
    image: "/placeholder.svg?height=300&width=400&text=Art+Journal",
  },
  {
    id: 6,
    title: "Journal Binding Process",
    description: "Behind the scenes look at our journal binding process.",
    image: "/placeholder.svg?height=300&width=400&text=Journal+Binding",
  },
];
