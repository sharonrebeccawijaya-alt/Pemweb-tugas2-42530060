// Data menu lokal berbentuk array objek; tidak membutuhkan database.
const menus = [
  {
    id: 'm001',
    name: 'Nasi Ayam Sambal Matah',
    category: 'makanan',
    categoryLabel: 'Makanan',
    price: 28000,
    description: 'Nasi hangat dengan ayam berbumbu, sambal matah segar, dan lalapan. Menu gurih dengan sentuhan pedas khas Bali.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85',
    tag: 'Favorit'
  },
  {
    id: 'm002',
    name: 'Chicken Katsu Rice',
    category: 'makanan',
    categoryLabel: 'Makanan',
    price: 30000,
    description: 'Ayam berbalut tepung renyah disajikan bersama nasi, sayuran, dan saus katsu yang gurih.',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=85',
    tag: 'Best seller'
  },
  {
    id: 'm003',
    name: 'Creamy Mushroom Pasta',
    category: 'makanan',
    categoryLabel: 'Makanan',
    price: 32000,
    description: 'Pasta dengan saus krim lembut, jamur, dan taburan keju. Cocok untuk makan siang santai.',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85',
    tag: 'Creamy'
  },
  {
    id: 'm004',
    name: 'Classic Beef Burger',
    category: 'makanan',
    categoryLabel: 'Makanan',
    price: 35000,
    description: 'Roti burger lembut dengan patty sapi, selada, tomat, keju, dan saus khas Senja Café.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85',
    tag: 'Pilihan chef'
  },
  {
    id: 'm005',
    name: 'French Fries',
    category: 'camilan',
    categoryLabel: 'Camilan',
    price: 18000,
    description: 'Kentang goreng renyah dengan sedikit garam. Teman yang pas untuk kopi atau minuman dingin.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=85',
    tag: 'Snack'
  },
  {
    id: 'm006',
    name: 'Pisang Goreng Madu',
    category: 'camilan',
    categoryLabel: 'Camilan',
    price: 20000,
    description: 'Pisang goreng hangat dengan lapisan madu manis dan tekstur renyah di luar, lembut di dalam.',
    image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=1000&q=85',
    tag: 'Manis'
  },
  {
    id: 'm007',
    name: 'Es Kopi Susu Senja',
    category: 'kopi',
    categoryLabel: 'Kopi',
    price: 22000,
    description: 'Perpaduan espresso, susu, dan gula aren dengan rasa seimbang untuk menemani waktu santai.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85',
    tag: 'Signature'
  },
  {
    id: 'm008',
    name: 'Cappuccino',
    category: 'kopi',
    categoryLabel: 'Kopi',
    price: 24000,
    description: 'Espresso dengan susu steamed dan foam lembut. Pilihan klasik untuk pencinta kopi.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1000&q=85',
    tag: 'Classic'
  },
  {
    id: 'm009',
    name: 'Matcha Latte',
    category: 'non-kopi',
    categoryLabel: 'Non-kopi',
    price: 25000,
    description: 'Matcha dengan susu creamy, menghadirkan rasa teh hijau yang lembut dan menyegarkan.',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1000&q=85',
    tag: 'Green tea'
  },
  {
    id: 'm010',
    name: 'Lemon Tea',
    category: 'non-kopi',
    categoryLabel: 'Non-kopi',
    price: 18000,
    description: 'Teh dingin dengan lemon segar, cocok untuk menemani makanan atau menyegarkan hari.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1000&q=85',
    tag: 'Refreshing'
  }
];

module.exports = menus;