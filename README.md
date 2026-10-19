# Senja Café — Tugas 2 Pemrograman Web

Website katalog menu kafe untuk tugas implementasi **Express, Route Parameter, Query Parameter, dan SSR EJS**.

## Fitur
- Katalog 10 menu makanan, camilan, kopi, dan non-kopi.
- Filter kategori melalui Query Parameter (`req.query`).
- Halaman detail menu melalui Route Parameter (`req.params.id`).
- Halaman 404 untuk ID menu yang tidak ditemukan.
- Template EJS modular menggunakan partial navbar dan footer.
- CSS responsif untuk desktop dan ponsel.
- Data disimpan dalam array JavaScript lokal tanpa database.

## Persyaratan
Pastikan Node.js dan npm sudah terpasang.

## Cara menjalankan
1. Ekstrak folder proyek.
2. Buka folder `senja-cafe-tugas2` di VS Code.
3. Buka terminal di folder proyek.
4. Jalankan `npm install`.
5. Jalankan `npm start`.
6. Buka `http://localhost:3000` di browser.

Untuk mode pengembangan otomatis, jalankan `npm run dev`.

## Contoh URL untuk demonstrasi
- Semua menu: `http://localhost:3000/`
- Filter makanan: `http://localhost:3000/?kategori=makanan`
- Filter kopi: `http://localhost:3000/?kategori=kopi`
- Filter camilan: `http://localhost:3000/?kategori=camilan`
- Filter non-kopi: `http://localhost:3000/?kategori=non-kopi`
- Detail menu: `http://localhost:3000/menu/m001`
- Contoh ID tidak ditemukan: `http://localhost:3000/menu/tidak-ada`

## Struktur folder
```text
senja-cafe-tugas2/
├── app.js
├── package.json
├── .gitignore
├── README.md
├── data/
│   └── menu.js
├── controllers/
│   └── menuController.js
├── routes/
│   └── menuRoutes.js
├── public/
│   └── css/
│       └── style.css
└── views/
    ├── index.ejs
    ├── detail.ejs
    └── partials/
        ├── navbar.ejs
        └── footer.ejs
```

## Poin kode yang perlu dipahami
- `app.js`: konfigurasi Express, EJS, folder views dengan `path.join`, dan static CSS.
- `routes/menuRoutes.js`: menghubungkan URL dengan controller.
- `controllers/menuController.js`: membaca `req.query` dan `req.params`, memfilter/mencari data, lalu mengirim data melalui `res.render()`.
- `views/index.ejs`: katalog dan tautan filter.
- `views/detail.ejs`: detail menu atau pesan jika ID tidak ditemukan.
- `views/partials/`: komponen navbar/footer yang digunakan ulang melalui `include`.
- Tag `<%= ... %>` digunakan untuk mencetak nilai dinamis dengan escaping HTML. Include template menggunakan `<%- include(...) %>` agar partial dirender sebagai markup.

## Checklist sebelum dikumpulkan
- [ ] Jalankan aplikasi dan uji semua URL contoh.
- [ ] Pastikan tidak ada error di terminal.
- [ ] Buat repositori GitHub publik bernama `pemweb-tugas2-[NIM]`.
- [ ] Pastikan `node_modules/` tidak diunggah.
- [ ] Rekam video 4–7 menit, wajah terlihat sepanjang video, dan tunjukkan kode saat menjelaskan.
- [ ] Unggah video YouTube dengan status **Public**.
- [ ] Tambahkan tautan YouTube ke README setelah video diunggah.
- [ ] Uji tautan video melalui mode Incognito.

## Tautan video YouTube
Ganti baris ini dengan tautan video YouTube publik setelah video selesai diunggah: **[Masukkan tautan YouTube di sini]**

> Catatan: Nama menu, harga, dan deskripsi adalah data contoh untuk proyek pembelajaran. Foto membutuhkan koneksi internet karena diambil dari URL gambar eksternal.
