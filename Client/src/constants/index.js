import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  searchMd,
  telegram,
  twitter,
} from "../assets";
import network from "../assets/benefits/Network.jpg";
import donation from "../assets/benefits/Donation.jpg";
import event from "../assets/benefits/Events.jpg";
import success from "../assets/benefits/Success.svg";
import oppurtunity from "../assets/benefits/Oppurtunities.jpg";
import feedback from "../assets/benefits/Feedback.svg";

export const navigation = [
  {
    id: "0",
    title: "Events",
    url: "#events",
  },
  {
    id: "1",
    title: "Gallery",
    url: "#gallery",
  },
  {
    id: "2",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "3",
    title: "About us",
    url: "#about",
  },
  {
    id: "4",
    title: "New account",
    url: "signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const benefits = [
  {
    id: "0",
    title: "Join the Alumni Network",
    text: "Register to join our alumni community, update your profile, and stay connected with peers.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: network,
    linkUrl: "/alumnitable",
  },
  {
    id: "1",
    title: "Make a Donation",
    text: "Contribute to scholarships, research, and projects. Your donation makes a difference!",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: donation,
    light: true,
    linkUrl: "/alumnidirectory",
  },
  {
    id: "2",
    title: "Explore Career Opportunities",
    text: "Access job postings, connect with professionals, and explore new career opportunities.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: oppurtunity,
  },
  {
    id: "3",
    title: "Discover Alumni Success Stories",
    text: "Read about fellow alumni's achievements and let their stories motivate your journey.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: success,
    light: true,
  },
  {
    id: "4",
    title: "Stay Involved Through Events",
    text: "Register for alumni events and reunions to stay engaged and connected with your community.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: event,
  },
  {
    id: "5",
    title: "Provide Feedback",
    text: "Help us improve by sharing feedback and participating in surveys. Your voice matters!",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: feedback,
  },
];

export const AlumniFeatures = [
  {
    id: "0",
    title: "Join the Alumni Network",
    text: "Register to join our alumni community, update your profile, and stay connected with peers.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: network,
    linkUrl: "/alumnidirectory",
  },
  {
    id: "1",
    title: "Make a Donation",
    text: "Contribute to scholarships, research, and projects. Your donation makes a difference!",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: donation,
    light: true,
    linkUrl: "",
  },
  {
    id: "2",
    title: "Explore Career Opportunities",
    text: "Access job postings, connect with professionals, and explore new career opportunities.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: oppurtunity,
  },
  {
    id: "3",
    title: "Discover Alumni Success Stories",
    text: "Read about fellow alumni's achievements and let their stories motivate your journey.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: success,
    light: true,
  },
  {
    id: "4",
    title: "Stay Involved Through Events",
    text: "Register for alumni events and reunions to stay engaged and connected with your community.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: event,
  },
  {
    id: "5",
    title: "Provide Feedback",
    text: "Help us improve by sharing feedback and participating in surveys. Your voice matters!",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: feedback,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const gallery = [
  {
    id: "0",
    title: "Cultural Fest 2023",
    text: "A vibrant celebration of culture and tradition.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon3,
    imageUrl: oppurtunity,
  },
  {
    id: "1",
    title: "Tech Symposium",
    text: "Showcasing innovation and cutting-edge technology.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
  },
  {
    id: "2",
    title: "Alumni Meet",
    text: "Reconnect with old friends and celebrate achievements.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
  },
  {
    id: "3",
    title: "Sports Day",
    text: "An exciting day of competition and teamwork.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
  },
  {
    id: "4",
    title: "Workshop on AI",
    text: "Exploring the future of Artificial Intelligence.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
  },
  {
    id: "5",
    title: "Graduation Ceremony",
    text: "Celebrating the achievements of our graduates.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
  },
];

export const form = [{ backgroundUrl: "./src/assets/benefits/card-1.svg" }];
