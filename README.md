# WoXue Mandarinku · 我学

Web belajar Mandarin komprehensif, terstruktur, dan interaktif untuk pemula hingga pembelajar tingkat menengah (HSK 1–4): **90 kartu frasa inti**, **10 dialog kampus & kehidupan sehari-hari**, **20 tata bahasa terstruktur**, **bank 1.000 kalimat HSK 3.0**, **hub latihan produktif (susun kalimat, isi rumpang, dikte audio)**, pinyin bernada-warna, audio TTS, dan spaced repetition (SRS).

**Live demo:** [voltakyy.github.io/belajar-mandarin](https://voltakyy.github.io/belajar-mandarin/)

> 万事开头难，重在坚持。  
> *Permulaan itu memang sulit; yang terpenting adalah konsistensi.*

---

## ✨ Fitur Utama

### 1. 🧩 20 Tata Bahasa Inti (Grammar Hub) HSK 1–4
Panduan tata bahasa terstruktur yang mencakup materi penting untuk perkuliahan dan percakapan formal/santai:
- **Kata Bantu Bilangan (量词)**: 个, 本, 张, 条, 只, 件, 杯, 瓶, 辆, 支, 斤, 位.
- **Partikel Aspek (态助词)**: 了 (aksi selesai / perubahan situasi), 过 (pengalaman lampau), 着 (keadaan berlanjut).
- **Struktur Khusus**: Pola kalimat disposisi 把 (bǎ) dan kalimat pasif 被 (bèi / 叫 / 让).
- **Aneka Komplemen (补语)**: Komplemen keadaan/derajat 得, komplemen hasil (完, 懂, 见, 到, 好), komplemen arah (来, 去, 出来, 进去), dan komplemen potensial (看得懂 vs 看不懂).
- **Perbandingan**: Pola kalimat 比 (bǐ) beserta selisih, pola kesetaraan 跟…一样, dan negasi 没有.
- **Pembeda Tiga "De"**: 白勺 的 (kata benda), 土也 地 (keterangan cara / kata kerja), 双人 得 (penilaian hasil).
- **Konjungsi Penting**: Karena… maka… (因为…所以…), Meskipun… tetapi… (虽然…但是…), Kalau… maka… (如果/只要…就…), Bukan hanya… tetapi juga… (不但…而且… / 不仅…还…).
- **Pola Penekanan & Progresi**: Struktur penekanan lampau 是…的, pola ekstrem 连…都/也…, dan progresi derajat 越来越… / 越…越….
- **Interaktif**: Dilengkapi tombol audio pelafalan tiap contoh kalimat dan **mini-kuis uji pemahaman** dengan pembahasan seketika.

### 2. 🏋️ Hub Latihan Produktif (Active Production)
Bukan hanya mengenali dan memilih arti secara pasif, tetapi melatih kemampuan aktif memproduksi kalimat:
- **Susun Kalimat (Sentence Unscramble)**: Rangkai kepingan kata Mandarin ke slot kalimat sesuai urutan tata bahasa yang benar (SVO, keterangan waktu, pola 把, 比, dll.), disertai penjelasan aturan posisi kata.
- **Isi Rumpang (Cloze Test)**: Latihan memilih partikel, measure word, komplemen, atau konjungsi yang tepat pada kalimat rumpang dengan pembahasan gramatikal komprehensif.
- **Dikte Audio (Listening Recall)**: Dengarkan pengucapan audio Mandarin (kecepatan normal & lambat 0.55×), lalu susun aksara yang didengar ke dalam kalimat yang utuh.

### 3. 🗣️ 10 Dialog Percakapan Kontekstual
Menyajikan percakapan dunia nyata (formal & informal) dengan audio per kata dan kalimat:
1. 🤝 Perkenalan Diri (Perkenalan sesama mahasiswa)
2. 🍚 Di Warung Makan (Pesan makanan dan minuman)
3. 🛍️ Belanja di Pasar (Tawar menawar harga)
4. 🤕 Di Rumah Sakit (Gejala sakit & periksa dokter)
5. 🧭 Menanyakan Arah (Navigasi jalan & transportasi)
6. 🎓 Pendaftaran Kuliah & Asrama (Registrasi paspor, kartu kampus, kunci asrama)
7. 🏢 Kehidupan Asrama & Teman Sekamar (Piket kebersihan, hemat listrik, wifi kampus)
8. 📱 Transaksi Digital & Pesan Makanan (Scan QR WeChat Pay/Alipay & pesan 外卖 waimai)
9. 🚄 Naik Kereta Cepat & Perjalanan (Naik 高铁 gāotiě, tiket digital, pemeriksaan 安检 ānjiǎn)
10. 💼 Wawancara Magang & Kantor (Interview magang, menunjukkan CV, level HSK)

### 4. 📚 Bank 1.000 Kalimat HSK 3.0 & Kuis Listening
- 281 kalimat HSK 1, 538 kalimat HSK 2, dan 181 kalimat HSK 3.
- Pencarian cerdas berdasarkan hanzi, pinyin, atau terjemahan Indonesia.
- Kuis mendengar bergaya ujian dengan opsi teracak, pemutaran audio otomatis, dan skor tersimpan.

### 5. 🃏 90 Kartu Frasa & Kuis Spaced Repetition (SRS)
- 9 kategori praktis: Sapaan, Sehari-hari, Angka & Harga, Makan, Belanja, Waktu, Keluarga, Cuaca, Arah.
- Algoritma pengulangan terjadwal: 1 → 3 → 7 → 16 → 35 → 60 hari.

### 6. 🎨 Desain Elegan & Tipografi CJK Bernada
- Pinyin berwarna nada otomatis: biru (nada 1), hijau (nada 2), ungu (nada 3), merah (nada 4), abu-abu (nada netral).
- Klik aksara per kata untuk mendengar suku kata dan melihat arti per komponen kata.
- Pengaturan kecepatan suara TTS, ukuran aksara, dan toggle warna nada.

---

## 📁 Struktur Proyek (Arsitektur Modular)

Proyek ini menggunakan pemisahan modular yang rapi tanpa memerlukan instalasi Node/npm, bundler, atau framework eksternal, sehingga tetap dapat dibuka langsung secara lokal (`file://`) maupun di-deploy ke GitHub Pages:

```
belajar-mandarin/
├── index.html       # Antarmuka utama, meta tags, semantic tabs, dan layout
├── style.css        # Desain visual, CSS custom properties, tema gelap, micro-animations
├── data.js          # Dataset mandiri (90 frasa, 10 dialog, 20 tata bahasa, latihan, 1.000 HSK)
├── app.js           # Mesin logika: TTS, pinyin bernada, SRS, grammar hub, latihan produktif
├── README.md        # Dokumentasi lengkap proyek
├── LICENSE          # Lisensi MIT
└── .gitignore
```

---

## 🚀 Cara Menjalankan

### 1. Buka Langsung (Offline / Lokal)
Cukup klik ganda file `index.html` pada browser modern (Google Chrome, Microsoft Edge, atau Safari).

Atau lewat terminal:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 2. Menggunakan HTTP Server Lokal (Opsional)
```bash
python -m http.server 8000
# lalu buka http://localhost:8000 di browser
```

---

## 🚢 Deploy ke GitHub Pages

Karena proyek ini murni client-side tanpa build step:
1. Pastikan seluruh perubahan sudah di-commit dan di-push ke GitHub:
   ```bash
   git add .
   git commit -m "feat: arsitektur modular + 20 tata bahasa + latihan produktif"
   git push
   ```
2. Buka repository GitHub → **Settings** → **Pages**.
3. Di bagian **Build and deployment**, pilih Source: **Deploy from a branch**.
4. Pilih branch **main**, direktori **/ (root)**, lalu klik **Save**.
5. Tunggu 1–2 menit, web akan langsung aktif di `https://USERNAME.github.io/NAMA-REPO/`.

---

## 📜 Lisensi & Atribusi

- **Kode Aplikasi**: Berlisensi **MIT License** — silakan gunakan, pelajari, dan kembangkan secara bebas.
- **Data 1.000 Kalimat HSK**: Diadaptasi dari dataset terbuka [no7z/hsk-sentences-audio](https://github.com/no7z/hsk-sentences-audio) berlisensi **CC BY-SA 4.0**.
- **Audio Suara**: Memanfaatkan Web Speech API (`window.speechSynthesis`) bawaan sistem browser.
