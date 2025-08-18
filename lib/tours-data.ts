export const tours = [
  {
    id: "kashmir-classics",
    slug: "kashmir-classics", // Added slug field for consistent routing
    title: "Kashmir Classics",
    hook: "Experience the timeless beauty of Kashmir's golden triangle",
    duration: "6 Days",
    difficulty: "Easy",
    region: "Kashmir",
    season: "All Year",
    bestSeason: "April to October",
    theme: "Cultural",
    groupSize: "2-12 people",
    price: 45000, // Added price field for display
    image: "/kashmir-dal-lake-houseboats.png",
    bannerImage: "/kashmir-dal-lake-sunrise.png",
    highlights: ["Dal Lake Houseboat", "Gulmarg Gondola", "Pahalgam Meadows"],
    rating: 4.9,
    reviews: 124,
    description:
      "Discover the enchanting beauty of Kashmir through this carefully crafted 6-day journey that takes you through the region's most iconic destinations. From the serene waters of Dal Lake to the snow-capped peaks of Gulmarg, experience the perfect blend of natural beauty and cultural heritage.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar - Dal Lake Experience",
        description:
          "Arrive at Srinagar Airport and transfer to your traditional houseboat on Dal Lake. Evening Shikara ride through the floating gardens and local markets.",
        activities: ["Airport pickup", "Houseboat check-in", "Shikara ride", "Welcome dinner"],
        meals: ["Dinner"],
        accommodation: "Traditional Houseboat",
      },
      {
        day: 2,
        title: "Srinagar Sightseeing - Mughal Gardens",
        description:
          "Explore the magnificent Mughal Gardens including Shalimar Bagh, Nishat Bagh, and Chashme Shahi. Visit the famous Hazratbal Shrine and explore the old city.",
        activities: ["Mughal Gardens tour", "Hazratbal Shrine", "Old city walk", "Local craft shopping"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Traditional Houseboat",
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg - Meadow of Flowers",
        description:
          "Drive to Gulmarg (52km, 2 hours). Experience the famous Gondola cable car ride to Apharwat Peak. Enjoy horse riding and explore the meadows.",
        activities: ["Drive to Gulmarg", "Gondola cable car", "Horse riding", "Meadow walks"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Gulmarg",
      },
      {
        day: 4,
        title: "Gulmarg to Pahalgam - Valley of Shepherds",
        description:
          "Journey to Pahalgam via Awantipora ruins. Explore Betaab Valley and Aru Valley. Evening at leisure by the Lidder River.",
        activities: ["Awantipora ruins", "Betaab Valley", "Aru Valley", "River walk"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Pahalgam",
      },
      {
        day: 5,
        title: "Pahalgam Exploration - Chandanwari Excursion",
        description:
          "Full day excursion to Chandanwari, the starting point of Amarnath Yatra. Visit Baisaran meadows, known as 'Mini Switzerland'.",
        activities: ["Chandanwari excursion", "Baisaran meadows", "Local village visit", "Photography session"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Pahalgam",
      },
      {
        day: 6,
        title: "Return to Srinagar - Departure",
        description: "Drive back to Srinagar. Last-minute shopping at Lal Chowk. Transfer to airport for departure.",
        activities: ["Drive to Srinagar", "Shopping at Lal Chowk", "Airport transfer"],
        meals: ["Breakfast", "Lunch"],
        accommodation: "Day use only",
      },
    ],
    inclusions: [
      "Accommodation in houseboats and hotels",
      "All meals as per itinerary",
      "Private transportation in AC vehicle",
      "Professional English-speaking guide",
      "All sightseeing and entrance fees",
      "Shikara rides on Dal Lake",
      "Gondola cable car tickets",
      "Airport transfers",
    ],
    exclusions: [
      "International/domestic airfare",
      "Personal expenses and tips",
      "Travel insurance",
      "Camera fees at monuments",
      "Any meals not mentioned",
      "Emergency evacuation costs",
      "Items of personal nature",
    ],
    gallery: [
      "Dal Lake houseboat at sunrise with mountains",
      "Mughal Gardens with colorful flowers and fountains",
      "Gulmarg gondola cable car with snow peaks",
      "Pahalgam valley with green meadows and river",
      "Traditional Kashmiri handicrafts and carpets",
      "Local Kashmiri cuisine and traditional dishes",
    ],
    faqs: [
      {
        question: "What is the best time to visit Kashmir?",
        answer:
          "Kashmir is beautiful year-round, but the best time is April to October for pleasant weather. Winter (December-February) offers snow activities but some areas may be inaccessible.",
      },
      {
        question: "Do I need any permits for this tour?",
        answer:
          "No special permits are required for this Kashmir tour. However, you'll need a valid ID proof for hotel check-ins and some tourist sites.",
      },
      {
        question: "What should I pack for the trip?",
        answer:
          "Pack comfortable walking shoes, warm clothing (even in summer), sunscreen, sunglasses, and personal medications. We'll provide a detailed packing list upon booking.",
      },
      {
        question: "Is the tour suitable for elderly travelers?",
        answer:
          "Yes, this tour is designed for all age groups with minimal walking required. However, the Gondola ride involves some altitude, so consult your doctor if you have heart conditions.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Free cancellation up to 15 days before departure. 50% refund for 7-15 days, 25% for 3-7 days. No refund for cancellations within 3 days of departure.",
      },
    ],
  },
  {
    id: "leh-nubra-pangong",
    slug: "leh-nubra-pangong", // Added slug field for consistent routing
    title: "Leh–Nubra–Pangong",
    hook: "Journey through the mystical landscapes of high-altitude Ladakh",
    duration: "7 Days",
    difficulty: "Moderate",
    region: "Ladakh",
    season: "Summer",
    bestSeason: "May to September",
    theme: "Adventure",
    groupSize: "4-10 people",
    price: 55000, // Added price field for display
    image: "/ladakh-pangong-lake.png",
    bannerImage: "/ladakh-pangong-lake.png",
    highlights: ["Nubra Valley", "Pangong Lake", "Ancient Monasteries"],
    rating: 4.8,
    reviews: 89,
    description:
      "Embark on an unforgettable journey through the high-altitude desert of Ladakh. This 7-day adventure takes you through ancient monasteries, the mystical Nubra Valley, and the stunning Pangong Lake, offering breathtaking landscapes and rich Buddhist culture.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh - Acclimatization",
        description:
          "Arrive in Leh and rest for acclimatization. Light sightseeing around Leh market and Shanti Stupa in the evening.",
        activities: [
          "Airport pickup",
          "Hotel check-in",
          "Rest and acclimatization",
          "Leh market visit",
          "Shanti Stupa",
        ],
        meals: ["Dinner"],
        accommodation: "Hotel in Leh",
      },
      {
        day: 2,
        title: "Leh Local Sightseeing - Monasteries",
        description:
          "Visit famous monasteries including Hemis, Thiksey, and Shey Palace. Experience Buddhist culture and stunning architecture.",
        activities: ["Hemis Monastery", "Thiksey Monastery", "Shey Palace", "3 Idiots School", "Cultural interactions"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Leh",
      },
      {
        day: 3,
        title: "Leh to Nubra Valley via Khardung La",
        description:
          "Cross the world's highest motorable pass, Khardung La (18,380 ft). Descend to Nubra Valley and enjoy camel safari at Hunder sand dunes.",
        activities: ["Khardung La Pass", "Drive to Nubra Valley", "Hunder sand dunes", "Double-humped camel safari"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Camp/Hotel in Nubra",
      },
      {
        day: 4,
        title: "Nubra Valley Exploration - Diskit Monastery",
        description:
          "Visit Diskit Monastery with its giant Buddha statue. Explore Sumur village and experience local Ladakhi culture.",
        activities: ["Diskit Monastery", "Giant Buddha statue", "Sumur village", "Local cultural experience"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Camp/Hotel in Nubra",
      },
      {
        day: 5,
        title: "Nubra to Pangong Lake via Shyok River",
        description:
          "Drive along the Shyok River route to the famous Pangong Lake. Witness the changing colors of the lake.",
        activities: ["Scenic drive via Shyok", "Pangong Lake arrival", "Lake photography", "Sunset viewing"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Camp near Pangong Lake",
      },
      {
        day: 6,
        title: "Pangong Lake to Leh via Chang La",
        description:
          "Early morning at Pangong Lake, then drive back to Leh via Chang La Pass. Visit Changthang Wildlife Sanctuary.",
        activities: ["Sunrise at Pangong", "Chang La Pass", "Changthang Wildlife Sanctuary", "Drive to Leh"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Leh",
      },
      {
        day: 7,
        title: "Departure from Leh",
        description: "Last-minute shopping in Leh market. Transfer to airport for departure.",
        activities: ["Shopping in Leh", "Airport transfer"],
        meals: ["Breakfast"],
        accommodation: "Day use only",
      },
    ],
    inclusions: [
      "Accommodation in hotels and camps",
      "All meals as per itinerary",
      "Private transportation with experienced driver",
      "Professional guide",
      "All permits and entry fees",
      "Camel safari at Hunder",
      "Airport transfers",
      "Oxygen cylinder in vehicle",
    ],
    exclusions: [
      "Airfare to/from Leh",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Emergency evacuation",
      "Items not mentioned in inclusions",
      "Additional activities",
    ],
    gallery: [
      "Khardung La pass with prayer flags and snow peaks",
      "Nubra Valley sand dunes with double-humped camels",
      "Pangong Lake crystal blue waters with mountains",
      "Ancient Buddhist monastery with colorful prayer flags",
      "Ladakhi traditional architecture and culture",
      "High altitude desert landscape with barren mountains",
    ],
    faqs: [
      {
        question: "What is the altitude and will I get altitude sickness?",
        answer:
          "Leh is at 11,500 ft. We include acclimatization days and carry oxygen cylinders. Consult your doctor before travel and avoid alcohol for the first 2 days.",
      },
      {
        question: "What permits are required for this tour?",
        answer:
          "Inner Line Permits are required for Nubra Valley and Pangong Lake. We arrange all permits - just provide passport-size photos and ID copies.",
      },
      {
        question: "What type of accommodation is provided?",
        answer:
          "Hotels in Leh, camps/guesthouses in Nubra Valley and Pangong Lake. All accommodations include basic amenities suitable for the region.",
      },
      {
        question: "Is this tour suitable for children and elderly?",
        answer:
          "Due to high altitude and rough terrain, this tour is recommended for ages 8-65 with good health. Medical clearance advised for elderly travelers.",
      },
      {
        question: "What should I pack for Ladakh?",
        answer:
          "Warm clothing (even in summer), sunscreen, sunglasses, personal medications, and comfortable trekking shoes. Detailed packing list provided upon booking.",
      },
    ],
  },
  {
    id: "winter-wonderland",
    slug: "winter-wonderland", // Added new tour with complete data structure
    title: "Winter Wonderland",
    hook: "Embrace the magical winter charm of Kashmir",
    duration: "4 Days",
    difficulty: "Easy",
    region: "Kashmir",
    season: "Winter",
    bestSeason: "December to February",
    theme: "Adventure",
    groupSize: "2-6 people",
    price: 35000,
    image: "/kashmir-winter-skiing-gulmarg.png",
    bannerImage: "/kashmir-houseboat-sunset.png",
    highlights: ["Snow Activities", "Houseboat Stay", "+1 more"],
    rating: 4.7,
    reviews: 67,
    description:
      "Experience Kashmir's winter magic with snow-covered landscapes, cozy houseboat stays, and thrilling winter activities in Gulmarg.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar - Winter Welcome",
        description:
          "Arrive in snow-covered Srinagar and check into a traditional houseboat with heating arrangements.",
        activities: ["Airport pickup", "Houseboat check-in", "Winter clothing arrangement", "Hot Kahwa welcome"],
        meals: ["Dinner"],
        accommodation: "Heated Houseboat",
      },
      {
        day: 2,
        title: "Gulmarg Snow Adventure",
        description: "Full day in Gulmarg for skiing, snowboarding, and gondola rides in snow-covered mountains.",
        activities: ["Drive to Gulmarg", "Skiing lessons", "Gondola ride", "Snow activities"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Gulmarg",
      },
      {
        day: 3,
        title: "Gulmarg to Srinagar - Winter Sightseeing",
        description: "Return to Srinagar and visit winter gardens and local markets for warm Kashmiri handicrafts.",
        activities: ["Winter garden visit", "Local market shopping", "Traditional craft workshops", "Houseboat return"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Heated Houseboat",
      },
      {
        day: 4,
        title: "Departure",
        description: "Final shopping and departure from Srinagar airport.",
        activities: ["Last minute shopping", "Airport transfer"],
        meals: ["Breakfast"],
        accommodation: "Day use only",
      },
    ],
    inclusions: [
      "Heated houseboat accommodation",
      "All meals as per itinerary",
      "Winter clothing assistance",
      "Skiing equipment rental",
      "Professional guide",
      "All transfers",
    ],
    exclusions: ["Airfare", "Personal winter gear purchase", "Travel insurance", "Personal expenses", "Tips"],
    gallery: [
      "Snow-covered Dal Lake with houseboats",
      "Gulmarg skiing slopes with fresh powder",
      "Traditional Kashmiri winter clothing and handicrafts",
      "Cozy houseboat interior with traditional heating",
    ],
    faqs: [
      {
        question: "Is it safe to travel to Kashmir in winter?",
        answer:
          "Yes, winter travel is safe with proper preparation. We provide heated accommodations and winter clothing guidance.",
      },
      {
        question: "Do I need skiing experience?",
        answer: "No prior experience needed. We provide beginner lessons and equipment rental in Gulmarg.",
      },
    ],
  },
]

export function getTourById(id: string) {
  return tours.find((tour) => tour.id === id)
}

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug)
}

export function getToursByRegion(region: string) {
  return tours.filter((tour) => tour.region.toLowerCase() === region.toLowerCase())
}

export function getToursByTheme(theme: string) {
  return tours.filter((tour) => tour.theme.toLowerCase() === theme.toLowerCase())
}
