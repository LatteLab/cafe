export type ScrapbookEntry = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  collection: string;
  category: "Events" | "Drinks";
  date: string;
};
export const entries: ScrapbookEntry[] = [
  {
    id: "blueprint-6",
    caption: "Behind the coffee counter",
    collection: "Hack Blueprint",
    category: "Events",
    date: "February 2026",
    alt: "Latte Lab volunteers in aprons serving coffee at Blueprint",
  },
  {
    id: "saas-1",
    caption: "A little something floral",
    collection: "SAAS collaboration",
    category: "Drinks",
    date: "October 2025",
    alt: "Latte art in a white cup decorated with rose petals",
  },
  {
    id: "social-2",
    caption: "The best part is the company",
    collection: "Social & recipe testing",
    category: "Events",
    date: "October 2025",
    alt: "Members chatting around a table during a Latte Lab social",
  },
  {
    id: "blueprint-1",
    caption: "A cup to keep you going",
    collection: "Hack Blueprint",
    category: "Drinks",
    date: "February 2026",
    alt: "A hand holding a finished drink in front of the Blueprint chalkboard",
  },
  {
    id: "blueprint-4",
    caption: "Coffee break, campus edition",
    collection: "Hack Blueprint",
    category: "Events",
    date: "February 2026",
    alt: "The Latte Lab pop-up counter with students serving coffee",
  },
  {
    id: "social-3",
    caption: "Made to be shared",
    collection: "Social & recipe testing",
    category: "Events",
    date: "October 2025",
    alt: "Preparing and sharing food around a table at a club social",
  },
  {
    id: "saas-5",
    caption: "One more look at that pour",
    collection: "SAAS collaboration",
    category: "Drinks",
    date: "October 2025",
    alt: "Overhead view of a latte with petals beside the cup",
  },
  {
    id: "saas-2",
    caption: "A moment between sips",
    collection: "SAAS collaboration",
    category: "Events",
    date: "October 2025",
    alt: "A club participant seated at the café table",
  },
  {
    id: "blueprint-7",
    caption: "A good day for good coffee",
    collection: "Hack Blueprint",
    category: "Events",
    date: "February 2026",
    alt: "Volunteers preparing drinks behind the Blueprint counter",
  },
  {
    id: "social-1",
    caption: "Pull up another chair",
    collection: "Social & recipe testing",
    category: "Events",
    date: "October 2025",
    alt: "Friends gathered around a long table for a club social",
  },
  {
    id: "social-6",
    caption: "Recipes, stories, seconds",
    collection: "Social & recipe testing",
    category: "Events",
    date: "October 2025",
    alt: "Members exchanging food and conversation during recipe testing",
  },
  {
    id: "saas-3",
    caption: "See you at the next one",
    collection: "SAAS collaboration",
    category: "Events",
    date: "October 2025",
    alt: "Students hanging out at a café table",
  },
].map((entry) => ({
  ...entry,
  category: entry.category as "Events" | "Drinks",
  src: `/photos/${entry.id}.webp`,
}));
