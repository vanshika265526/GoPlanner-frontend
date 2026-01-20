export const samplePlans = {
  jaipur: {
    id: 'jaipur',
    heroImage:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=80',
    title: 'Jaipur Palette',
    subtitle: 'Pink City glow, rooftop thalis, and block-print bazaars.',
    summary:
      'A three-day story featuring the glowing City Palace, serene mornings at Hawa Mahal, and the fragrant nights of bustling bazaars.',
    highlights: [
      { label: 'Wake-up view', value: 'Sunrise at Nahargarh Fort' },
      { label: 'Taste note', value: 'Pyaaz kachori at Rawat' },
      { label: 'Souvenir', value: 'Hand-block stole from Johari Bazaar' },
    ],
    tips: [
      'Keep small notes handy; bargaining is common in most shops.',
      'Reserve rooftop dinners before sunset for the best view.',
      'Book the Amer Fort light & sound show in advance.',
    ],
    
    formData: {
      destination: 'Jaipur, India',
      duration: 3,
      budget: 'Moderate',
      interests: ['History', 'Food', 'Shopping'],
    },
    days: [
      {
        dayNumber: 1,
        theme: 'Palaces & Pink core',
        activities: [
          {
            time: '08:00',
            activity: 'Amer Fort climb',
            description: 'Begins withSheesh Mahal, mirrored corridors and Aravalli views ',
            location: 'Amer Fort',
            type: 'sightseeing',
          },
          {
            time: '13:00',
            activity: 'Thali lunch break',
            description: 'A cozy break with a Rajasthani platter at LMB or Chokhi Dhani.',
            location: 'MI Road',
            type: 'food',
          },
          {
            time: '16:00',
            activity: 'City Palace walkthrough',
            description: 'Royal courtyard, Mubarak Mahal and Instagram famous doors',
            location: 'City Palace',
            type: 'sightseeing',
          },
          {
            time: '19:30',
            activity: 'Bazaar crawl',
            description: 'Lac bangles, block prints, and meenakari at Johari & Bapu Bazaar.',
            location: 'Old City',
            type: 'shopping',
          },
        ],
      },
      {
        dayNumber: 2,
        theme: 'Havelis & rooftops',
        activities: [
          {
            time: '09:00',
            activity: 'Hawa Mahal chai',
            description: 'Masala chai in front of the honeycomb façade at Wind View Cafe.',
            location: 'Hawa Mahal Road',
            type: 'relaxation',
          },
          {
            time: '12:00',
            activity: 'Patrika Gate shoot',
            description: 'Capture memories in the pastel-colored corridors.',
            location: 'Jawahar Circle',
            type: 'sightseeing',
          },
          {
            time: '15:00',
            activity: 'Anokhi museum + coffee',
            description: 'Meet block-print artisans and enjoy cold coffee in the courtyard.',
            location: 'Amber town',
            type: 'culture',
          },
          {
            time: '19:00',
            activity: 'Rooftop dinner + folk',
            description: 'Pink skyline and live music at Padao or Bar Palladio.',
            location: 'Kanak Ghati',
            type: 'food',
          },
        ],
      },
      {
        dayNumber: 3,
        theme: 'Craft clusters & sunsets',
        activities: [
          {
            time: '08:30',
            activity: 'Tapri breakfast',
            description: 'Bun maska, kadak chai and Central Park view।',
            location: 'C-Scheme',
            type: 'food',
          },
          {
            time: '11:00',
            activity: 'Sanganer artisans',
            description: 'Blue pottery, paper making and block-print workshops।',
            location: 'Sanganer village',
            type: 'culture',
          },
          {
            time: '16:30',
            activity: 'Nahargarh golden hour',
            description: 'Glowing sunset over the Pink City from the rooftop of Madhavendra Bhawan.',
            location: 'Nahargarh Fort',
            type: 'sightseeing',
          },
          {
            time: '19:30',
            activity: 'Light & sound finale',
            description: 'A history night with projections on the walls of Amer Fort.',
            location: 'Amer Fort',
            type: 'culture',
          },
        ],
      },
    ],
  },
  ooty: {
    id: 'ooty',
    heroImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80',
    title: 'Ooty Slow Drip',
    subtitle: 'Nilgiri toy trains, tea mist and cozy homestays.',
    summary:
      'A three-day mountain reset featuring shola forests, chocolate trails, and lakeside sunsets.',
    highlights: [
      { label: 'Rail nostalgia', value: 'Nilgiri toy train' },
      { label: 'Sweet stop', value: 'King Star fudge tasting' },
      { label: 'Viewpoint', value: 'Doddabetta peak at dusk' },
    ],
    tips: [
      'Evenings can drop to 10°C, so carry a light layer.',
      'Book first-class seats on the toy train in advance.',
      'Keep cash handy for shopping at the tea estates.',
    ],
    
    formData: {
      destination: 'Ooty, India',
      duration: 3,
      budget: 'Moderate',
      interests: ['Nature', 'Relaxation', 'Food'],
    },
    days: [
      {
        dayNumber: 1,
        theme: 'Rails & lake loops',
        activities: [
          {
            time: '08:00',
            activity: 'Nilgiri Mountain Railway',
            description: 'Stone bridges, pine valleys and whistle stops for aclassic ride.',
            location: 'Ooty station',
            type: 'transport',
          },
          {
            time: '13:00',
            activity: 'Garden picnic',
            description: 'Unpack a cheese and bread hamper at the botanical garden.',
            location: 'Botanical Garden',
            type: 'relaxation',
          },
          {
            time: '16:00',
            activity: 'Chocolate crawl',
            description: 'Follow the fudge trail from King Star to Moddy’s.',
            location: 'Commercial Road',
            type: 'food',
          },
          {
            time: '18:30',
            activity: 'Ooty lake pedals',
            description: 'A serene evening in the mist with pedal boating and warm chai.',
            location: 'Ooty Lake',
            type: 'relaxation',
          },
        ],
      },
      {
        dayNumber: 2,
        theme: 'Tea estates & villages',
        activities: [
          {
            time: '09:00',
            activity: 'Estate walk',
            description: 'Stroll and tea tasting with tea pluckers at Chamraj or Glenmorgan.',
            location: 'Coonoor slopes',
            type: 'nature',
          },
          {
            time: '13:00',
            activity: 'Glasshouse lunch',
            description: 'Colonial greenhouse vibes at Earl’s Secret.',
            location: 'Nahar retreat',
            type: 'food',
          },
          {
            time: '16:00',
            activity: 'Toda village visit',
            description: 'Indigenous embroidery and buffalo horn music show।',
            location: 'Toda hamlet',
            type: 'culture',
          },
          {
            time: '19:30',
            activity: 'Bonfire board games',
            description: 'Local cheese platter, chai, and stories at the homestay.।',
            location: 'Homestay patio',
            type: 'relaxation',
          },
        ],
      },
      {
        dayNumber: 3,
        theme: 'Waterfalls & blue peaks',
        activities: [
          {
            time: '08:00',
            activity: 'Pykara combo',
            description: 'Waterfall trail and lake boating with zero crowds.',
            location: 'Pykara',
            type: 'nature',
          },
          {
            time: '12:30',
            activity: 'Place To Bee brunch',
            description: 'Honey-drizzled pancakes, millet bowls and craft store browse।',
            location: 'Club Road',
            type: 'food',
          },
          {
            time: '15:30',
            activity: 'Doddabetta summit',
            description: 'Nilgiri’s highest peak  clouds and panoramas',
            location: 'Doddabetta',
            type: 'sightseeing',
          },
          {
            time: '18:30',
            activity: 'St. Stephen’s sunset',
            description: 'Colonial church bells and golden hour portraits।',
            location: 'Upper Bazaar',
            type: 'culture',
          },
        ],
      },
    ],
  },
  maldives: {
    id: 'maldives',
    heroImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80',
    title: 'Maldives Azure Edit',
    subtitle: 'Four days on turquoise lagoons + private sandbanks.',
    summary:
      'A barefoot luxury itinerary featuring manta dives, floating breakfasts, and starlit cinema experiences',
    highlights: [
      { label: 'Stay vibe', value: 'Overwater villa + plunge pool' },
      { label: 'Dive pick', value: 'Banana Reef drift' },
      { label: 'Evening ritual', value: 'Sandbank dinner with lanterns' },
    ],
    tips: [
      'Carry reef-safe sunscreen and water shoes.',
      'Seaplane slots are best booked before noon.',
      'Bring a dry bag and a GoPro mount.',
    ],
    
    formData: {
      destination: 'Maldives',
      duration: 4,
      budget: 'Luxury',
      interests: ['Relaxation', 'Adventure', 'Food'],
    },
    days: [
      {
        dayNumber: 1,
        theme: 'Arrival & lagoon ease',
        activities: [
          {
            time: '11:00',
            activity: 'Seaplane touchdown',
            description: 'Butler welcome, coconut drink, villa orientation。',
            location: 'Resort island',
            type: 'relaxation',
          },
          {
            time: '15:00',
            activity: 'Transparent kayak float',
            description: 'SUP or kayak in the turquoise lagoon with drone shots.',
            location: 'Lagoon deck',
            type: 'adventure',
          },
          {
            time: '20:00',
            activity: 'Tepanyaki under stars',
            description: 'A chef’s table experience where the waves are your soundtrack.',
            location: 'Beach grill',
            type: 'food',
          },
        ],
      },
      {
        dayNumber: 2,
        theme: 'Reef dives & spa',
        activities: [
          {
            time: '08:00',
            activity: 'Banana Reef dive',
            description: 'Manta, reef shark and technicolor corals drift',
            location: 'North Malé Atoll',
            type: 'adventure',
          },
          {
            time: '13:00',
            activity: 'Floating lunch',
            description: 'Private plunge pool in the tropical spread',
            location: 'Villa pool',
            type: 'food',
          },
          {
            time: '17:30',
            activity: 'Underwater sound spa',
            description: 'Couple massage and hydro circuits deep recharge.',
            location: 'Resort spa',
            type: 'relaxation',
          },
        ],
      },
      {
        dayNumber: 3,
        theme: 'Sandbank & wildlife',
        activities: [
          {
            time: '09:00',
            activity: 'Private sandbank picnic',
            description: 'A powder-white sand strip with a chef and cabana setup.',
            location: 'Outer lagoon',
            type: 'relaxation',
          },
          {
            time: '14:00',
            activity: 'Turtle quest snorkel',
            description: 'Spot hawksbill turtles and playful dolphins with a guide.',
            location: 'House reef',
            type: 'adventure',
          },
          {
            time: '19:30',
            activity: 'Cinema under constellations',
            description: 'Beanbags, popcorn and aurora-like milky way।',
            location: 'Beachfront',
            type: 'relaxation',
          },
        ],
      },
      {
        dayNumber: 4,
        theme: 'Sunrise goodbye',
        activities: [
          {
            time: '07:00',
            activity: 'Jetty yoga flow',
            description: 'Peach horizon in front of light stretches।',
            location: 'Overwater deck',
            type: 'relaxation',
          },
          {
            time: '10:30',
            activity: 'Hydro therapy loop',
            description: 'Steam, cold plunge and coconut sorbet cooldown।',
            location: 'Spa pavilion',
            type: 'relaxation',
          },
          {
            time: '13:00',
            activity: 'Seaplane checkout',
            description: 'Leave signatures on the floating farewell board.',
            location: 'Resort jetty',
            type: 'transport',
          },
        ],
      },
    ],
  },
  paris: {
    id: 'paris',
    heroImage:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1800&q=80',
    title: 'Parisian Tapestry',
    subtitle: 'Five days of cafés, concept stores, और Seine sparkles.',
    summary:
      'A slow-but-glam plan from Left Bank to Montmartre, featuring buttery croissants, impressionist galleries, and jazz barges.',
    highlights: [
      { label: 'Cafe crawl', value: 'Café de Flore → Boot Café' },
      { label: 'Golden shot', value: 'Sunrise from Trocadéro' },
      { label: 'Night plan', value: 'Seine cruise with live jazz' },
    ],
    tips: [
      'Get a 5-day Navigo pass for unlimited metro and bus rides.',
      'Book tickets for the Louvre, d’Orsay, and Eiffel Tower in advance.',
      'Carry a reusable tote — handy at every marché.',
    ],
    
    formData: {
      destination: 'Paris, France',
      duration: 5,
      budget: 'Moderate',
      interests: ['Art', 'Food', 'Shopping'],
    },
    days: [
      {
        dayNumber: 1,
        theme: 'Left Bank prologue',
        activities: [
          {
            time: '07:00',
            activity: 'Trocadéro sunrise',
            description: 'Eiffel silhouette and pastel sky shoot.',
            location: 'Trocadéro Gardens',
            type: 'sightseeing',
          },
          {
            time: '10:00',
            activity: 'Louvre focus tour',
            description: 'Denon Wing, Winged Victory, Flemish masters and slow stroll.',
            location: 'Musée du Louvre',
            type: 'culture',
          },
          {
            time: '14:00',
            activity: 'Seine walk + crêpes',
            description: 'A river walk from Pont des Arts to Île de la Cité.',
            location: '1st arrondissement',
            type: 'relaxation',
          },
          {
            time: '20:00',
            activity: 'Jazz bar nightcap',
            description: 'Swing dancing tables at Caveau de la Huchette.',
            location: 'Latin Quarter',
            type: 'relaxation',
          },
        ],
      },
      {
        dayNumber: 2,
        theme: 'Montmartre muse',
        activities: [
          {
            time: '09:00',
            activity: 'Croissant crawl',
            description: 'The buttery duo from Du Pain et des Idées to Boot Café.',
            location: 'Canal Saint-Martin',
            type: 'food',
          },
          {
            time: '11:30',
            activity: 'Montmartre sketch walk',
            description: 'Sacré-Cœur steps, Place du Tertre artists, and hidden vine-covered corners',
            location: 'Montmartre',
            type: 'sightseeing',
          },
          {
            time: '15:00',
            activity: 'Atelier hopping',
            description: 'Tiny ateliers and ceramic stores along Rue des Saules.',
            location: 'Montmartre lanes',
            type: 'culture',
          },
          {
            time: '19:30',
            activity: 'Bouillon Pigalle dinner',
            description: 'Classic onion soup, steak frites, creme brûlée finale.',
            location: 'Pigalle',
            type: 'food',
          },
        ],
      },
      {
        dayNumber: 3,
        theme: 'Concept stores & islands',
        activities: [
          {
            time: '10:00',
            activity: 'Musée d’Orsay morning',
            description: 'Impressionists and rooftop espresso overlooking the Seine।',
            location: '7th arrondissement',
            type: 'culture',
          },
          {
            time: '13:00',
            activity: 'Marché des Enfants Rouges',
            description: 'A mix lunch from Moroccan tagine to Japanese bento.',
            location: 'Le Marais',
            type: 'food',
          },
          {
            time: '15:30',
            activity: 'Concept store triad',
            description: 'Curated shopping at Merci, Sézane, and the vintage stalls of Saint-Oueen.',
            location: 'Marais + 9th',
            type: 'shopping',
          },
          {
            time: '19:30',
            activity: 'Seine dinner cruise',
            description: 'Live jazz trio and candlelit tables on Bateaux Mouches.',
            location: 'Pont de l’Alma',
            type: 'relaxation',
          },
        ],
      },
      {
        dayNumber: 4,
        theme: 'Versailles detour',
        activities: [
          {
            time: '09:30',
            activity: 'Palace tour',
            description: 'Hall of Mirrors, Queen’s chambers and musical fountains.',
            location: 'Château de Versailles',
            type: 'culture',
          },
          {
            time: '13:30',
            activity: 'Grand Canal picnic',
            description: 'Rent a bike and enjoy a picnic along a shaded tree-lined path.',
            location: 'Versailles gardens',
            type: 'relaxation',
          },
          {
            time: '19:30',
            activity: 'Wine bar crawl',
            description: 'Natural wines at Le Baron Rouge or Septime La Cave.',
            location: '11th arrondissement',
            type: 'food',
          },
        ],
      },
      {
        dayNumber: 5,
        theme: 'Canal farewells',
        activities: [
          {
            time: '08:30',
            activity: 'Canal St-Martin stroll',
            description: 'Bookshops, vinyl stores and Ten Belles coffee.',
            location: '10th arrondissement',
            type: 'relaxation',
          },
          {
            time: '11:30',
            activity: 'Macaron workshop',
            description: 'Hands-on pastry class at La Cuisine Paris' ,
            location: 'Île Saint-Louis',
            type: 'food',
          },
          {
            time: '15:30',
            activity: 'Palais-Royal goodbye',
            description: 'Photo moments at Diptyque, Astier de Villatte, and the striped columns.',
            location: 'Palais-Royal',
            type: 'shopping',
          },
        ],
      },
    ],
  },
};

