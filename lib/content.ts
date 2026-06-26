export type FeatureIcon = "Sparkles" | "Globe" | "ShieldCheck" | "Zap" | "Tv";

export type FeatureItem = {
  title: string;
  description: string;
  icon: FeatureIcon;
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  details: string[];
  featured?: boolean;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type DashboardStat = {
  label: string;
  value: string;
  subtext: string;
};

export type SubscriptionStatus = {
  name: string;
  status: string;
  renewal: string;
  price: string;
  channelCount: string;
};

export const features: FeatureItem[] = [
  {
    title: "Crystal clear streams",
    description: "Enjoy 4K-ready channel delivery with low latency and stable playback across every device.",
    icon: "Sparkles",
  },
  {
    title: "Global coverage",
    description: "Access an expansive channel lineup from North America, Europe, Asia, and premium sports feeds.",
    icon: "Globe",
  },
  {
    title: "Secure connection",
    description: "Encrypted streams, anonymous access, and reliable servers with zero throttling.",
    icon: "ShieldCheck",
  },
  {
    title: "Fast setup",
    description: "Activate your account in minutes with easy guides for Smart TVs, Android, iOS, and web players.",
    icon: "Zap",
  },
  {
    title: "24/7 support",
    description: "Our team is available around the clock to handle activations, questions, and device help.",
    icon: "Tv",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$12",
    period: "/month",
    description: "Perfect for casual viewers who want high-quality channels without commitment.",
    details: ["HD channels", "1 device", "Quick setup"],
  },
  {
    name: "Premium",
    price: "$28",
    period: "/month",
    description: "Best value for families and streaming enthusiasts with advanced server access.",
    details: ["Unlimited devices", "Premium channels", "Priority support"],
    featured: true,
  },
  {
    name: "Ultimate",
    price: "$75",
    period: "/quarter",
    description: "The complete IPTV package with maximum coverage and exclusive extras.",
    details: ["4K channels", "VPN-ready", "Dedicated support"],
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "Which devices support IPTV Apollo?",
    answer: "IPTV Apollo works on Smart TVs, Android boxes, Fire TV, mobile devices, web players, and classic IPTV apps.",
  },
  {
    question: "How quickly can I get started?",
    answer: "Accounts are activated within minutes. Once payment is confirmed, you receive setup instructions immediately.",
  },
  {
    question: "Do you offer international channels?",
    answer: "Yes, our global bundle includes content from North America, Europe, Asia, and premium sports networks.",
  },
  {
    question: "What support options are available?",
    answer: "We offer 24/7 live chat support, email assistance, and step-by-step setup resources for every plan.",
  },
];

export const dashboardStats: DashboardStat[] = [
  { label: "Active viewers", value: "8.2k", subtext: "Daily average across all streams" },
  { label: "Streams served", value: "1.4M", subtext: "High-performance delivery every hour" },
  { label: "Renewal rate", value: "92%", subtext: "Happy customers stay connected" },
];

export const userSubscriptions: SubscriptionStatus[] = [
  { name: "Premium Plan", status: "Active", renewal: "Jun 28, 2026", price: "$28/mo", channelCount: "4,200 channels" },
  { name: "Sports Add-on", status: "Active", renewal: "Jul 12, 2026", price: "$8/mo", channelCount: "180 channels" },
  { name: "Global Pack", status: "Pending", renewal: "Aug 01, 2026", price: "$15/mo", channelCount: "2,800 channels" },
];
