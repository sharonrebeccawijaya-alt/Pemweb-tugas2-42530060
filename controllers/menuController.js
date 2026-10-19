const menus = require('../data/menu');

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value);
}

exports.showCatalog = (req, res) => {
  // req.query membaca filter dari URL, misalnya /?kategori=kopi.
  const selectedCategory = req.query.kategori || 'semua';
  const allowedCategories = ['semua', 'makanan', 'camilan', 'kopi', 'non-kopi'];

  const safeCategory = allowedCategories.includes(selectedCategory)
    ? selectedCategory
    : 'semua';

  const filteredMenus = safeCategory === 'semua'
    ? menus
    : menus.filter((menu) => menu.category === safeCategory);

  // Data dikirim dari controller ke template EJS melalui res.render().
  res.render('index', {
    title: 'Menu Senja Café',
    menus: filteredMenus,
    selectedCategory: safeCategory,
    totalMenus: menus.length,
    formatRupiah
  });
};

exports.showDetail = (req, res) => {
  // req.params.id mengambil ID dari route /menu/:id.
  const menu = menus.find((item) => item.id === req.params.id);

  if (!menu) {
    return res.status(404).render('detail', {
      title: 'Menu Tidak Ditemukan',
      menu: null,
      formatRupiah
    });
  }

  res.render('detail', {
    title: menu.name,
    menu,
    formatRupiah
  });
};