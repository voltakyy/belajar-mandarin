# Mandarinku · WoXue 汉语学习

Web belajar Mandarin **satu halaman** untuk pemula: 90 kartu frasa inti, **1.000 kalimat HSK 1–3**, pinyin berwarna nada, audio, spaced repetition, dan latihan listening.

**Live demo:** [voltakyy.github.io/belajar-mandarin](https://voltakyy.github.io/belajar-mandarin/)

> 万事开头难，坚持就是胜利
> *Permulaan itu sulit; konsistenlah dan kamu menang.*

## Fitur

- **90 kartu frasa** dalam 9 kategori: sapaan, sehari-hari, angka & harga, makan, belanja, waktu, keluarga, cuaca, arah.
- **Bank 1.000 kalimat HSK** — 281 HSK 1, 538 HSK 2, dan 181 HSK 3. Bisa dicari berdasarkan hanzi, pinyin, atau arti; tampil 24 kalimat per halaman dengan tombol **Muat lagi**.
- **Pinyin berwarna nada** — biru (nada 1), hijau (2), ungu (3), merah (4), abu-abu (netral).
- **Audio TTS** `zh-CN` untuk kalimat utuh dan per kata. Klik aksara untuk mendengar kata demi kata.
- **Kuis SRS** dengan jadwal ulangan 1 → 3 → 7 → 16 → 35 → 60 hari, sesi maksimal 20 kartu.
- **Latihan Listening HSK** — 10 soal pilihan ganda per sesi dari bank 1.000 kalimat, audio diputar otomatis, pembahasan setelah menjawab, dan skor terbaik per level. Skor HSK disimpan terpisah dari jadwal SRS.
- **Filter level HSK** dan badge perkiraan level di 90 kartu utama.
- **5 dialog utuh** untuk latihan membaca dan menyimak konteks.
- **Tabel nada & pinyin** plus aturan tata bahasa dasar.
- **Pengaturan**: kecepatan suara (default 0,65×), ukuran aksara, warna nada on/off.
- Progres, jadwal SRS, pengaturan, dan skor HSK disimpan di **localStorage**.
- Tanpa framework, tanpa build step, tanpa server. Cukup satu file `index.html`.

## Cara pakai

1. Buka **live demo** di atas, atau unduh/clone repo ini.
2. Buka `index.html` di **Chrome** atau **Edge** (disarankan untuk suara Mandarin).
3. Di tab **Pengaturan**, klik **Contoh** untuk memastikan suara `zh-CN` aktif.
4. Mulai dari tab **Percakapan**, lalu kerjakan **Kuis SRS** 10–15 menit per hari.
5. Untuk latihan HSK, buka tab **HSK · 1000** → pilih level → **Mulai Kuis Listening**, atau telusuri **Bank Kalimat HSK** di bawahnya.

> Suara memakai Web Speech API bawaan browser. Jika tidak ada suara, pastikan paket suara Mandarin (`zh-CN`) terpasang di sistem/browser. Android Chrome biasanya sudah menyediakannya lewat Google Text-to-Speech.

## Metode belajar

Web ini menggabungkan beberapa metode yang paling banyak didukung riset:

| Elemen | Metode |
|---|---|
| Kuis berjadwal 1 → 3 → 7 → 16 → 35 → 60 hari | Spaced Repetition (SRS) |
| Menjawab sebelum melihat arti | Active Recall / Retrieval Practice |
| Belajar kalimat utuh, bukan kata lepas | Chunking / Sentence Mining |
| Warna pada pinyin | Tone-color mnemonic |
| Dengar lalu tirukan | Shadowing |
| Kuis mendengar HSK | Listening practice / exam-like recall |

## Level HSK

Ada **dua sistem level** di aplikasi ini — jangan tertukar:

### Bank 1.000 kalimat — HSK 3.0

Bank kalimat memakai pemeringkatan **HSK 3.0 (GF0025-2021)** dari dataset sumber:

- **HSK 1** — 281 kalimat
- **HSK 2** — 538 kalimat
- **HSK 3** — 181 kalimat

Ini adalah level kalimat menurut dataset, bukan hasil ujian atau sertifikasi. Materi HSK 3.0 lebih menekankan penggunaan bahasa nyata, jadi beberapa kalimat level 1–2 sudah terasa seperti kalimat percakapan utuh.

### 90 kartu utama — perkiraan HSK 2.0

Badge dan filter di tab **Percakapan** memakai **perkiraan level kosakata HSK 2.0**:

- **HSK 1** — 34 kartu
- **HSK 2** — 40 kartu
- **HSK 3+** — 16 kartu

### Catatan penting

- Halaman HSK melatih **listening** dan kosakata. Ini bukan mock test resmi dan tidak menghitung skor HSK.
- HSK 1–2 (format 2.0) hanya menguji **Listening + Reading**; writing mulai HSK 3.
- Sampai 2026, banyak pusat ujian masih memakai format HSK 2.0, sementara HSK 3.0 sedang bertahap. Selalu cek format terbaru di [chinesetest.cn](https://www.chinesetest.cn/) sebelum mendaftar.
- Untuk skor resmi, kerjakan mock test HSK yang asli dan berwaktu.
- Terjemahan Indonesia di bank kalimat adalah hasil mesin penerjemah yang disunting manual. Artinya bisa dipakai untuk belajar, tetapi bukan terjemahan resmi dan belum tentu satu-satunya terjemahan yang benar.

## Menjalankan secara lokal

Tidak perlu instalasi:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Kalau ingin memakai server lokal (opsional):

```bash
python -m http.server 8000
# lalu buka http://localhost:8000
```

## Push ke GitHub

Ganti `USERNAME` dan `NAMA-REPO` dengan milikmu.

```bash
cd C:\Users\Asus\belajar-mandarin

git init
git add .
git commit -m "feat: web belajar Mandarin + latihan listening HSK"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Kalau repo sudah ada dan hanya ingin update:

```bash
git add .
git commit -m "update: perbaikan materi dan tampilan"
git push
```

### Deploy ke GitHub Pages

1. Buka repo di GitHub → **Settings** → **Pages**.
2. Bagian **Build and deployment** → Source: **Deploy from a branch**.
3. Pilih branch **main**, folder **/ (root)** → **Save**.
4. Tunggu 1–2 menit. Situs akan tersedia di:
   `https://USERNAME.github.io/NAMA-REPO/`

Karena semuanya ada di `index.html` dan tanpa build step, GitHub Pages bisa langsung menyajikannya.

## Struktur

```
belajar-mandarin/
├── index.html   # seluruh aplikasi: UI, data, SRS, TTS, kuis HSK
├── README.md
└── .gitignore
```

Data utama di dalam `index.html`:

- `PHRASES` — 90 kartu frasa
- `DIALOGS` — 5 dialog
- `HSK_LEVELS` — perkiraan level HSK 2.0 tiap kartu utama
- `HSK_BANK` — 1.000 kalimat HSK 3.0 + pinyin + terjemahan Indonesia
- `HSK_WORDS` — kosakata tambahan untuk pemecah kata klik-per-kata
- `WORD_DICT` — pemecah kata untuk klik-per-kata
- `INTERVALS` — jadwal SRS

localStorage keys:

| Key | Isi |
|---|---|
| `mandarinku_srs_v1` | status hafal/ragu tiap kartu |
| `mandarinku_due_v1` | jadwal ulangan SRS |
| `mandarinku_settings_v1` | kecepatan suara, ukuran aksara, warna nada |
| `mandarinku_hsk_best_v1` | skor terbaik kuis HSK per level |

## Kredit

- **1.000 kalimat HSK**: dipilih dari [no7z/hsk-sentences-audio](https://github.com/no7z/hsk-sentences-audio), dataset berlisensi **CC BY-SA 4.0**. Kalimat, pinyin, dan pemeringkatan level berasal dari dataset tersebut; kami melakukan pemilihan 1.000 kalimat, pembersihan pinyin, dan penerjemahan ke bahasa Indonesia.
- **Terjemahan Indonesia**: dibuat dengan bantuan mesin penerjemah, lalu disunting manual untuk istilah uang, waktu, keluarga, dan konteks budaya. Terjemahan ini bukan terjemahan resmi.
- Level 90 kartu utama mengacu pada **HSK 2.0** (150 kata HSK 1, 300 kata HSK 2).
- Daftar kosakata pembanding untuk validasi level: [drkameleon/complete-hsk-vocabulary](https://github.com/drkameleon/complete-hsk-vocabulary) (MIT License). Dataset tidak dibundel ke aplikasi.
- Audio: Web Speech API (`speechSynthesis`) bawaan browser.
- Font: memakai font sistem (Segoe UI, Georgia, dan font CJK yang tersedia di perangkat).

Proyek ini tidak berafiliasi dengan HSK, Chinese Testing International (CTI), atau lembaga ujian mana pun.

## Lisensi

- **Kode aplikasi**: belum ditentukan. Jika repo ini publik, tambahkan file `LICENSE` (misalnya MIT) sesuai keinginanmu.
- **Data 1.000 kalimat HSK** (kalimat + pinyin + level): **CC BY-SA 4.0**, mengikuti lisensi dataset sumber. Jika kamu memodifikasi atau membagikan ulang data ini, cantumkan atribusi dan gunakan lisensi yang sama.
- **Terjemahan Indonesia** dalam bank kalimat: dianggap turunan dari data di atas, sehingga ikut CC BY-SA 4.0.
