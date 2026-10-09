const images = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png,webp}', { eager: true });

function img(path) {
  const mod = images[`../assets/images/${path}`];
  return mod?.default ?? mod;
}

export const pieces = [
  {
    id: 'Carolines Bench',
    category: 'for-me',
    name: "Caroline's Bench",
    year: 2025,
    materials: 'ELM, WALNUT',
    dimensions: '1500 x 440 x 250',
    description: `Designed for daily use. A sturdy bench that doesn't compromise on detail.\n\nThe British elm seat is formed from two boards joined along their undulating live edges with walnut butterfly inlays.\n\nBeneath, the shape of the legs is inspired by those of the classic Shaker '5-board bench'. A central stretcher connects the legs with a through-mortise and tenon secured with a tapered dovetail wedge, allowing the bench to be fully demountable.\n\nA celebration of material, technique and tradition.`,
    mainImage: img('backgrounds/CAROLINESBENCHBACKGROUND-1.jpg'),
    mobileMainImage: img('backgrounds/CarolinesTableMobileHero.jpg'),
    additionalImages: [
      img('Garston Bench/GarstonBench3.jpg'),
      img('Garston Bench/GarstonBench6.jpg'),
      img('Garston Bench/GarstonBench2.jpg'),
      img('Garston Bench/GarstonBench4.jpg'),
      img('Garston Bench/GarstonBench5.jpg'),
    ],
  },
  {
    id: 'Pig Lane Table',
    category: 'for-me',
    name: 'PIG LANE TABLE',
    year: 2026,
    materials: 'ASH',
    dimensions: '1600 x 925 x 740',
    description: `A subtly playful dining table with a trestle base, informed by Japanese design.\n\nThe trestles mirror each other in reverse. One widens at the top, the other narrows. Viewed at an angle, a parallelogram opens between them.\n\nThe proportions of the top were designed to feel as comfortable as they look. A surface that sits right, alone or with guests.\n\nBook-matched ash trestles accentuate the subtle angles. Tapered sliding dovetails join the trestles to the top, keeping the table flat as the timber moves through the seasons.\n\nThe construction of each trestle presents what appears to be an impossible joint. As the column widens, the bridle joints capturing the foot and stretcher seem as though they could never have been assembled. The geometry tells you it shouldn't work. (It does!)`,
    mainImage: img('backgrounds/PIGLANEBACKGROUND-2.jpg'),
    mobileMainImage: img('backgrounds/PigLaneMobileHero.jpg'),
    additionalImages: [
      img('Pig Lane Table/IMG_7361.jpg'),
      img('Pig Lane Table/IMG_7301.jpg'),
      img('Pig Lane Table/IMG_7323.jpg'),
      img('Pig Lane Table/IMG_7344.jpg'),
      img('Pig Lane Table/IMG_7365.jpg'),
      img('Pig Lane Table/IMG_7382.jpg'),
      img('Pig Lane Table/IMG_7388.jpg'),
    ],
  },
  {
    id: 'A Warm Seat',
    category: 'for-client',
    name: 'A WARM SEAT',
    year: 2026,
    materials: 'BRITISH ASH',
    dimensions: '1110 x 440 x 490',
    description: `A window seat for every season, made to sit over a radiator.\n\nThe brief was a place to sit in the window all year round. With a radiator beneath, the design had to let the heat move freely. A slatted base and evenly spaced dowels leave generous room for warm air to rise, while breaking up the view of the radiator behind.\n\nFour hand-turned legs are joined to the rails with mortise and tenons. The end of each rail is scribed to the radius of the leg, giving a tight, seamless join. The dowels add strength as well as rhythm, and the piece was designed to sit comfortably alongside the furniture already in the room.\n\nCushion by <a href="https://www.instagram.com/emilycampbell_studio/" target="_blank" rel="noopener noreferrer">Emily Campbell</a>.`,
    mainImage: img('backgrounds/AWarmSeatBackground.jpg'),
    mobileMainImage: img('backgrounds/AWarmSeatMobileHero.jpg'),
    additionalImages: [
      img('A Warm Seat/AWarmSeat1.jpg'),
      img('A Warm Seat/AWarmSeat2.jpg'),
      img('A Warm Seat/AWarmSeat3.jpg'),
      img('A Warm Seat/AWarmSeat4.jpg'),
    ],
  },
  {
    id: 'Garston Table',
    category: 'for-client',
    name: 'GARSTON TABLE',
    year: 2025,
    materials: 'ELM',
    dimensions: '2300 x 1100 x 800',
    description: `A re-imagined classic, designed for preparing a feast and then seating the guests.\n\nSet slightly taller than standard to suit preparation and daily use, it offers a generous surface area while maintaining an elegant silhouette.\n\nMade from British elm sourced from a storm-felled tree in the client's own garden. This table is an homage to age-old methods: hand-turned farmhouse legs, drawer-bored traditional mortice and tenon joinery, and breadboard ends, allowing the timber to move naturally over time.\n\nSeats 10.`,
    mainImage: img('backgrounds/IMG_20260112_113053531-1.jpg'),
    mobileMainImage: img('backgrounds/GarstonTableMobileHero.jpg'),
    desktopFirstImage: img('Garston Table/GarstonTableDesktop1.jpg'),
    additionalImages: [
      img('Garston Table/GarstonTable9.jpg'),
      img('Garston Table/GarstonTable8.jpg'),
      img('Garston Table/GarstonTable10.jpg'),
      img('Garston Table/GarstonTable12.jpg'),
      img('Garston Table/GarstonTable11.jpg'),
    ],
  },
];
