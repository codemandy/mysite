import { Project, Collection } from '@/types/project';

export const collections: Collection[] = [
  { id: 'turnstile', name: 'Turnstile', path: '/turnstile' },
  { id: 'season-20', name: 'Season 20', path: '/season-20' },
  { id: 'sleepwalker', name: 'Sleepwalker', path: '/sleepwalker' },
  { id: 'season-19', name: 'Season 19', path: '/season-19' },
  { id: 'vans', name: 'Vans', path: '/vans' },
  { id: 'avirex', name: 'Avirex', path: '/avirex' },
  { id: 'season-18', name: 'Season 18', path: '/season-18' },
  { id: 'vans-2024', name: 'Vans 2024', path: '/vans-2024' },
  { id: 'orioles', name: 'Orioles', path: '/orioles' },
  { id: 'brat', name: 'BRAT', path: '/brat' },
  { id: 'season-17', name: 'Season 17', path: '/season-17' },
];

export const projects: Project[] = [
  {
    id: 'c-star-tee-white',
    name: 'C-Star Tee',
    price: 42.00,
    image: '/media/collage_setup_02-3.jpg',
    soldOut: true,
    category: 'tees',
    season: 'season-20'
  },
  {
    id: 'c-star-tee-black',
    name: 'C-Star Tee',
    price: 42.00,
    image: '/media/1.jpg',
    soldOut: true,
    category: 'tees',
    season: 'season-20'
  },
  {
    id: 'running-man-tee-white',
    name: 'Running Man Tee',
    price: 42.00,
    image: '/media/skene_01.jpg',
    soldOut: false,
    category: 'tees',
    season: 'season-20'
  },
  {
    id: 'running-man-tee-black',
    name: 'Running Man Tee',
    price: 42.00,
    image: '/media/Selfstorage_2024.jpg',
    soldOut: true,
    category: 'tees',
    season: 'season-20'
  },
  {
    id: 'mademoiselle-tee-white',
    name: 'Mademoiselle Tee',
    price: 42.00,
    image: '/media/Studio_1_2024.jpg',
    soldOut: true,
    category: 'tees',
    season: 'season-20'
  },
  {
    id: 'mademoiselle-tee-black',
    name: 'Mademoiselle Tee',
    price: 42.00,
    image: '/media/sloterdijk-bubbles-spheres-1_0398-5-speed-14-final-print-7.jpg',
    soldOut: false,
    category: 'tees',
    season: 'season-20'
  },
  {
    id: 'dog-tee-white',
    name: 'Dog Tee',
    price: 42.00,
    image: '/media/pigs.png',
    soldOut: false,
    category: 'tees',
    season: 'season-20'
  },
  {
    id: 'thermal-hoodie-red',
    name: 'C-Star Thermal Hoodie',
    price: 128.00,
    image: '/media/theeth.png',
    soldOut: false,
    category: 'hoodies',
    season: 'season-20'
  },
  {
    id: 'fake-zip-hoodie',
    name: 'Fake Zip Up Hoodie',
    price: 128.00,
    image: '/media/keys.png',
    soldOut: false,
    category: 'hoodies',
    season: 'season-20'
  },
  {
    id: 'dumb-dog-deck',
    name: 'Dumb Dog Deck',
    price: 98.00,
    image: '/media/collage_setup_02-3.jpg',
    soldOut: false,
    category: 'decks',
    season: 'season-20'
  },
  {
    id: 'leather-wallet',
    name: 'Leather Wallet',
    price: 88.00,
    image: '/media/1.jpg',
    soldOut: false,
    category: 'accessories',
    season: 'season-20'
  },
  {
    id: 'pencil-pack',
    name: '#2 Pencil - 12 Pack',
    price: 12.00,
    image: '/media/skene_01.jpg',
    soldOut: false,
    category: 'accessories',
    season: 'season-20'
  },
  {
    id: 'silver-necklace',
    name: '.925 Silver Pencil Sharpener Necklace',
    price: 348.00,
    image: '/media/Selfstorage_2024.jpg',
    soldOut: true,
    category: 'accessories',
    season: 'season-20'
  }
]; 