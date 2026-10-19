const express = require('express');
const path = require('path');
const menuRoutes = require('./routes/menuRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Konfigurasi EJS dan path absolut untuk views.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Aset CSS disajikan melalui middleware static Express.
app.use(express.static(path.join(__dirname, 'public')));

// Semua rute katalog dan detail menu dikelola di router terpisah.
app.use('/', menuRoutes);

// Penanganan URL yang tidak tersedia.
app.use((req, res) => {
  res.status(404).send(`
    <!doctype html>
    <html lang="id">
      <head><meta charset="utf-8"><title>Halaman Tidak Ditemukan</title></head>
      <body style="font-family:Arial,sans-serif;padding:40px">
        <h1>404 — Halaman tidak ditemukan</h1>
        <p>Alamat yang kamu buka tidak tersedia.</p>
        <a href="/">Kembali ke katalog Senja Café</a>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Senja Café berjalan di http://localhost:${PORT}`);
});