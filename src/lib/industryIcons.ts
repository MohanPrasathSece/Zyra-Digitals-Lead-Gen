import {
  Stethoscope,
  Sofa,
  Building2,
  Sun,
  UtensilsCrossed,
  Scissors,
  GraduationCap,
  ShoppingBag,
  HeartPulse,
  HardHat,
  Plane,
  Dumbbell,
} from "lucide-react";

/** Icon per industry slug, used on the industry index and detail pages. */
export const INDUSTRY_ICONS: Record<string, typeof Stethoscope> = {
  "dental-clinics": Stethoscope,
  "interior-designers": Sofa,
  "real-estate": Building2,
  "solar-companies": Sun,
  restaurants: UtensilsCrossed,
  "salons-spas": Scissors,
  schools: GraduationCap,
  boutiques: ShoppingBag,
  "hospitals-clinics": HeartPulse,
  "construction-companies": HardHat,
  "travel-agencies": Plane,
  "gyms-fitness": Dumbbell,
};

export const getIndustryIcon = (slug?: string) =>
  (slug ? INDUSTRY_ICONS[slug] : undefined) ?? Stethoscope;
