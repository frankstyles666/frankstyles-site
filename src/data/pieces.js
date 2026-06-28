const images = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png,webp}', { eager: true });

function img(path) {
  const mod = images[`../assets/images/${path}`];
  return mod?.default ?? mod;
}

export const pieces = [
  {
    id: 'Carolines Bench',
    name: 'CAROLINES BENCH',
    year: 2025,
    materials: 'ELM, WALNUT',
    dimensions: '1500 x 440 x 250',
    description: `Designed for daily use, the bench is simple in form and sturdy in stance.\n\nThe British elm seat is formed from two boards joined along their natural line and reinforced with walnut butterfly joints. Beneath, traditional leg forms are hinted at rather than declared, while a central stretcher meets them in a through mortise and tenon secured with a tapered dovetail wedge, allowing the bench to be fully demountable. The result is a quiet fusion of styles.`,
    mainImage: img('backgrounds/CAROLINESBENCHBACKGROUND-1.jpg'),
    additionalImages: [
      img('Garston Bench/GarstonBench2.jpg'),
      img('Garston Bench/GarstonBench4.jpg'),
      img('Garston Bench/GarstonBench6.jpg'),
      img('Garston Bench/GarstonBench3.jpg'),
      img('Garston Bench/GarstonBench5.jpg'),
    ],
  },
  {
    id: 'Garston Table',
    name: 'Garston Table',
    year: 2025,
    materials: 'Elm',
    dimensions: '1500 x 440 x 250',
    description: '',
    mainImage: img('backgrounds/IMG_20260112_113053531-1.jpg'),
    additionalImages: [
      img('Garston Table/GarstonTable2.jpg'),
    ],
  },
  {
    id: 'Pig Lane Table',
    name: 'PIG LANE TABLE',
    year: 2025,
    materials: 'ASH',
    dimensions: '',
    description: '',
    mainImage: img('backgrounds/PIGLANEBACKGROUND-2.jpg'),
    additionalImages: [
      img('Pig Lane Table/IMG_7301.jpg'),
      img('Pig Lane Table/IMG_7309.jpg'),
      img('Pig Lane Table/IMG_7323.jpg'),
      img('Pig Lane Table/IMG_7344.jpg'),
      img('Pig Lane Table/IMG_7361.jpg'),
      img('Pig Lane Table/IMG_7365.jpg'),
      img('Pig Lane Table/IMG_7382.jpg'),
      img('Pig Lane Table/IMG_7388.jpg'),
    ],
  },
];
