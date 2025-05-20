# Gak Ada Ide Website 🚀  

Proyek ini adalah eksperimen dan eksplorasi dalam pengembangan **JavaScript, Webpack, dan Netlify**, dikembangkan oleh **@AyaheVirlyTianAusy** untuk memahami lebih dalam tentang teknologi modern dalam web development.  

## 📌 Fitur Utama  
✅ **Menggunakan JavaScript ES6+** untuk pemrograman interaktif  
✅ **Menggunakan Webpack** untuk mengelola modul dan asset secara efisien  
✅ **Otomatis dideploy ke Netlify** dengan konfigurasi yang optimal  
✅ **Mendukung CI/CD** untuk alur kerja pengembangan yang mulus  

---

## 🚀 Cara Menggunakan Proyek Ini  

1️⃣ **Clone repo ini**
   ```bash
   git clone git@github.com:AyaheVirlyTianAusy/Gak-ada-ide.git
   cd Gak-ada-ide
   ```

2️⃣ **Install dependency**
   ```bash
   npm install
   ```

3️⃣ **Build proyek**
   ```bash
   npm run build
   ```

4️⃣ **Deploy otomatis ke Netlify** setelah push perubahan ke GitHub!  

---

## 🔧 Konfigurasi Netlify  
Pastikan file `netlify.toml` sudah memiliki konfigurasi ini:  
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
Jika ingin mengubah **folder hasil build**, pastikan bagian `publish = "dist"` sesuai dengan proyekmu.

---

## 📦 Teknologi yang Digunakan  
- **JavaScript (ES6+)** → Pemrograman dinamis
- **Webpack** → Manajemen modul dan bundling
- **Netlify** → Hosting otomatis dengan integrasi CI/CD  
- **GitHub Actions** → Automasi workflow deployment

---

## 🏗 Struktur Proyek  
```
/Gak-ada-ide
 ├── dist/               # Folder hasil build
 ├── src/                # Kode sumber proyek
 ├── node_modules/       # Dependency npm
 ├── package.json        # Konfigurasi proyek
 ├── netlify.toml        # Konfigurasi Netlify
 ├── README.md           # Dokumentasi proyek
 ├── LICENSE             # Lisensi MIT
 ├── webpack.config.js   # Konfigurasi Webpack
 ├── .github/workflows/  # Konfigurasi GitHub Actions
```

---

## ✨ Tentang Pengembang  
- **Nama:** Ayahe Virly Tian Ausy
- **Minat:** Seni, pengembangan web, eksplorasi teknologi  
- **Email:** cucukabidin99@gmail.com
- **Misi:** Menggabungkan kreativitas dengan teknologi untuk eksplorasi proyek inovatif!  
- **Fun Fact:** Apa itu seni? Saya juga masih mencari jawabannya! 😆  

---

## 📝 Lisensi MIT  
Proyek ini dilisensikan di bawah **MIT License**, yang memungkinkan penggunaan bebas, modifikasi, dan distribusi tanpa batasan.  

Silakan cek file [LICENSE](LICENSE) untuk detail lebih lanjut.  
```plaintext
MIT License

Copyright (c) 2025 AyaheVirlyTianAusy

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

