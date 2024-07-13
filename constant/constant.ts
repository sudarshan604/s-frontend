import { HeaderLinks } from "@/types";

export const headerLinks: HeaderLinks[] = [
  {
    route: "/account",
    label: "Account",
  },
  {
    route: "/engage",
    label: "Engage",
  },
  {
    route: "/analyze",
    label: "Analyze",
  },
  {
    route: "/publish",
    label: "Publish",
  },
];

export const InsightMetrics = [
  { key: "page_impressions_unique", label: "Reach", platform: "facebook" },
  {
    key: "page_impressions_paid",
    label: "Paid Impressions",
    platform: "facebook",
  },
  { key: "page_impressions", label: "Total Impressions", platform: "facebook" },
  { key: "page_fans", label: "Total Followers", platform: "facebook" },
  { key: "reach", label: "Reach", platform: "instagram" },
  { key: "impressions", label: "Impressions", platform: "instagram" },
  {
    key: "follower_count",
    label: "followers",
    platform: "instagram",
  },
];
