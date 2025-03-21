export type Service = {
    id: number;
    title: string;
    description: string;
    icon: string; // Lucide icon name
    color: string; // Tailwind color class
  };
  
  export const services: Service[] = [
    {
      id: 1,
      title: "Radio Broadcasting",
      description: "Delivering high-quality radio content, live shows, and engaging programs across multiple stations.",
      icon: "radio",
      color: "text-red-500",
    },
    {
      id: 2,
      title: "News & Journalism",
      description: "Stay informed with up-to-date news, investigative journalism, and insightful reports.",
      icon: "newspaper",
      color: "text-blue-500",
    },
    {
      id: 3,
      title: "Podcasting",
      description: "Podcasts covering entertainment, deep conversations, and expert insights.",
      icon: "mic",
      color: "text-purple-500",
    },
    {
      id: 4,
      title: "Advertising & Promotions",
      description: "Targeted radio ads, promotions, and media campaigns for maximum reach.",
      icon: "shopping-cart",
      color: "text-green-500",
    },
    {
      id: 5,
      title: "Video Production",
      description: "High-quality video content including interviews, event coverage, and branded media.",
      icon: "video",
      color: "text-yellow-500",
    },
    {
      id: 6,
      title: "Community Engagement",
      description: "Fostering community growth through events, social initiatives, and listener interactions.",
      icon: "users",
      color: "text-orange-500",
    },
  ];
  