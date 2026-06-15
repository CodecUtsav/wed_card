export interface EventItem {
  id: string;
  title: string;
  date: string; // e.g. "5 July 2026"
  time: string; // e.g. "7:30 PM Onwards"
  timestamp: string; // ISO or Parsable Date for calendar integration
  venueName: string;
  venueAddress: string;
  mapEmbedUrl: string; // Google Maps directions links or coordinates
  description: string;
  quote?: string;
  iconName: "kalash" | "mata" | "haldi" | "music" | "ring" | "horse" | "fire" | "chariot" | "reception"; // specific illustrations
  category: "pre_wedding" | "haldi_sangeet" | "wedding_day" | "reception";
  colorTheme: {
    bg: string;
    text: string;
    accent: string;
    border: string;
  };
}

export interface RSVPData {
  id: string;
  name: string;
  phone: string;
  email: string;
  status: "attending" | "may_attend" | "declined";
  guestsCount: number;
  eventsAttending: string[]; // List of event IDs
  dietaryNotes?: string;
  createdAt: string;
}

export interface BlessingMessage {
  id: string;
  name: string;
  relation: string; // e.g., "Groom's Cousin", "Bride's Best Friend", etc.
  message: string;
  hearts: number;
  date: string;
  theme: "gold" | "crimson" | "amber" | "rose" | "teal";
}
