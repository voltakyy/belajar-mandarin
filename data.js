/* ============================================================
   WoXue Mandarinku - Data & Bank Kalimat
   Berisi: Kosakata Inti (90), Dialog (10), Bank HSK (1.000),
   20 Tata Bahasa Lengkap, dan Bank Latihan Produktif.
   ============================================================ */

const CATS = {
  sapaan:"👋 Sapaan",
  harian:"☀️ Sehari-hari",
  angka:"🔢 Angka & Harga",
  makan:"🍜 Makan & Minum",
  belanja:"🛍️ Belanja",
  waktu:"⏰ Waktu & Sekolah",
  keluarga:"👨‍👩‍👧 Keluarga",
  cuaca:"🌦️ Cuaca & Perasaan",
  arah:"🧭 Tanya Arah",
};

const PHRASES = [
// --- SAPAAN ---
{cat:"sapaan", zh:"你好！", py:"nǐ hǎo", id:"Haloo / apa kabar (netral, kapan saja)"},
{cat:"sapaan", zh:"你好吗？", py:"nǐ hǎo ma?", id:"Apa kabar kamu?", note:"吗 = pertanda pertanyaan ya/tidak, diletakkan di akhir."},
{cat:"sapaan", zh:"我很好，谢谢！", py:"wǒ hěn hǎo, xièxie!", id:"Aku baik, terima kasih!"},
{cat:"sapaan", zh:"早上好！", py:"zǎoshang hǎo!", id:"Selamat pagi!"},
{cat:"sapaan", zh:"下午好！", py:"xiàwǔ hǎo!", id:"Selamat sore!"},
{cat:"sapaan", zh:"晚上好！", py:"wǎnshang hǎo!", id:"Selamat malam!"},
{cat:"sapaan", zh:"再见！", py:"zàijiàn!", id:"Sampai jumpa lagi!"},
{cat:"sapaan", zh:"谢谢 / 不客气", py:"xièxie / bú kèqi", id:"Terima kasih / Sama-sama"},
{cat:"sapaan", zh:"对不起，没关系", py:"duìbuqǐ, méi guānxi", id:"Maaf / Tidak apa-apa"},
{cat:"sapaan", zh:"我叫 __。你叫什么名字？", py:"wǒ jiào __. nǐ jiào shénme míngzi?", id:"Nama saya __. Siapa namamu?"},
{cat:"sapaan", zh:"很高兴认识你！", py:"hěn gāoxìng rènshi nǐ!", id:"Senang berkenalan denganmu!"},
{cat:"sapaan", zh:"我也会说一点点汉语。", py:"wǒ yě huì shuō yīdiǎndiǎn hànyǔ", id:"Aku juga bisa bicara Mandarin sedikit-sedikit"},
{cat:"sapaan", zh:"请再说一遍，好吗？", py:"qǐng zài shuō yí biàn, hǎo ma?", id:"Ulangi lagi, ya?"},
{cat:"sapaan", zh:"你说得太快了！", py:"nǐ shuō de tài kuài le!", id:"Kamu bicara terlalu cepat!"},

// --- HARIAN ---
{cat:"harian", zh:"你吃饭了吗？", py:"nǐ chī fàn le ma?", id:"Kamu sudah makan?", note:"Sapaan umum orang Tionghoa, seperti 'apa kabar'."},
{cat:"harian", zh:"我吃饭了。", py:"wǒ chī fàn le", id:"Aku sudah makan", note:"了 (le) = menandai sesuatu sudah selesai/terjadi."},
{cat:"harian", zh:"你听见了吗？", py:"nǐ tīngjiàn le ma?", id:"Kamu dengar?"},
{cat:"harian", zh:"你看见了吗？", py:"nǐ kànjiàn le ma?", id:"Kamu lihat?"},
{cat:"harian", zh:"你生病了吗？", py:"nǐ shēngbìng le ma?", id:"Kamu sakit?"},
{cat:"harian", zh:"你要喝水吗？", py:"nǐ yào hē shuǐ ma?", id:"Kamu mau minum air?"},
{cat:"harian", zh:"我在学习汉语。", py:"wǒ zài xuéxí hànyǔ", id:"Aku sedang belajar Mandarin", note:"在 + kata kerja = sedang berlangsung."},
{cat:"harian", zh:"我今天很忙。", py:"wǒ jīntiān hěn máng", id:"Hari ini aku sibuk"},
{cat:"harian", zh:"我们一起去吧！", py:"wǒmen yīqǐ qù ba!", id:"Ayo pergi bersama!"},
{cat:"harian", zh:"没问题！", py:"méi wèntí!", id:"Tidak masalah!"},
{cat:"harian", zh:"加油！", py:"jiāyóu!", id:"Semangat! Ayo bisa!"},
{cat:"harian", zh:"等一下，好吗？", py:"děng yíxià, hǎo ma?", id:"Tunggu sebentar, ya?"},
{cat:"harian", zh:"你今天做什么？", py:"nǐ jīntiān zuò shénme?", id:"Hari ini kamu melakukan apa?"},
{cat:"harian", zh:"我在家。", py:"wǒ zài jiā", id:"Aku di rumah"},

// --- ANGKA & HARGA ---
{cat:"angka", zh:"一二三四五六七八九十百", py:"yī èr sān sì wǔ liù qī bā jiǔ shí bǎi", id:"1 2 3 4 5 6 7 8 9 10 100"},
{cat:"angka", zh:"一百元", py:"yì bǎi yuán", id:"Seratus yuan", note:"一 berubah nada karena 百 nada 3."},
{cat:"angka", zh:"五元", py:"wǔ yuán", id:"Lima yuan"},
{cat:"angka", zh:"这个苹果一元一个。", py:"zhège píngguǒ yì yuán yí gè", id:"Apel ini satu yuan satu buah"},
{cat:"angka", zh:"多少钱？", py:"duōshao qián?", id:"Berapa harganya?", note:"这个多少钱？ = This one berapa harganya?"},
{cat:"angka", zh:"太贵了！", py:"tài guì le!", id:"Terlalu mahal!"},
{cat:"angka", zh:"便宜一点儿，好吗？", py:"piányi yìdiǎnr, hǎo ma?", id:"Lebih murah sedikit, ya?"},
{cat:"angka", zh:"我要两个。", py:"wǒ yào liǎng gè", id:"Aku mau dua buah", note:" Untuk kata benda, 一百 → 一个 gunakan 两 bukan 二."},
{cat:"angka", zh:"我的电话号码是……", py:"wǒ de diànhuà hàomǎ shì…", id:"Nomor telepon saya adalah…"},
{cat:"angka", zh:"一百减三十等于七十。", py:"yì bǎi jiǎn sānshí děngyú qīshí", id:"100 dikurangi 30 sama dengan 70"},

// --- MAKAN & MINUM ---
{cat:"makan", zh:"我饿了，我们吃饭吧！", py:"wǒ è le, wǒmen chī fàn ba!", id:"Aku lapar, ayo kita makan!"},
{cat:"harian", zh:"我渴了，我要喝水。", py:"wǒ kě le, wǒ yào hē shuǐ", id:"Aku haus, aku mau minum air"},
{cat:"makan", zh:"你想吃什么？", py:"nǐ xiǎng chī shénme?", id:"Kamu mau makan apa?"},
{cat:"makan", zh:"随便 / 你决定", py:"suíbiàn / nǐ juédìng", id:"Terserah / kamu yang putuskan"},
{cat:"makan", zh:"我不吃辣。", py:"wǒ bù chī là", id:"Aku tidak makan pedas"},
{cat:"makan", zh:"好吃极了！", py:"hǎochī jí le!", id:"Sangat enak!"},
{cat:"makan", zh:"服务员，点菜！", py:"fúwùyuán, diǎn cài!", id:"Pelayan, mau pesan!"},
{cat:"makan", zh:"买单，谢谢。", py:"mǎidān, xièxie", id:" Bayar, terima kasih"},
{cat:"makan", zh:"你用餐愉快！", py:"nǐ yòngcān yúkuài!", id:"Selamat menikmati hidangan!", note:" Ini lebih untuk menyapa tamu: enjoy your meal."},
{cat:"makan", zh:"我需要一点水。", py:"wǒ xūyào yìdiǎn shuǐ", id:"Aku butuh sedikit air"},
{cat:"makan", zh:"等我一下。", py:"děng wǒ yíxià", id:"Tunggu aku sebentar"},

// --- BELANJA ---
{cat:"belanja", zh:"你想买什么？", py:"nǐ xiǎng mǎi shénme?", id:"Kamu mau beli apa?"},
{cat:"belanja", zh:"这个多少钱？", py:"zhège duōshao qián?", id:"Yang ini harganya berapa?"},
{cat:"belanja", zh:"我要买这个。", py:"wǒ yào mǎi zhège", id:"Aku mau beli yang ini"},
{cat:"belanja", zh:"有那种小号的吗？", py:"yǒu zhǒng xiǎohào de ma?", id:"Ada ukuran kecil?"},
{cat:"belanja", zh:"那个太贵了。", py:"nàge tài guì le", id:"Yang itu terlalu mahal"},
{cat:"belanja", zh:"太贵了，便宜一点！", py:"tài guì le, piányi yìdiǎn!", id:"Terlalu mahal, murahkan sedikit!"},
{cat:"belanja", zh:"再看看，谢谢。", py:"zài kànkan, xièxie", id:"Lihat-lihat lagi dulu, terima kasih"},
{cat:"belanja", zh:"你们几点开门？", py:"nǐmen jǐ diǎn kāimén?", id:"Jam berapa kalian buka?"},
{cat:"belanja", zh:"只能收现金。", py:"zhǐ néng shōu xiànjīn", id:"Hanya menerima uang tunai"},

// --- WAKTU & SEKOLAH ---
{cat:"waktu", zh:"现在几点？", py:"xiànzài jǐ diǎn?", id:"Sekarang jam berapa?"},
{cat:"waktu", zh:"现在是下午三点半。", py:"xiànzài shì xiàwǔ sān diǎn bàn", id:"Sekarang pukul setengah-empat sore (3:30)"},
{cat:"waktu", zh:"我七点起床。", py:"wǒ qī diǎn qǐchuáng", id:"Aku bangun jam tujuh"},
{cat:"waktu", zh:"我九点睡觉。", py:"wǒ jiǔ diǎn shuìjiào", id:"Aku tidur jam sembilan"},
{cat:"waktu", zh:"今天星期几？", py:"jīntiān xīngqī jǐ?", id:"Hari ini hari apa?"},
{cat:"waktu", zh:"明天我有考试。", py:"míngtiān wǒ yǒu kǎoshì", id:"Besok aku punya ujian"},
{cat:"waktu", zh:"每个月我有一次同样的课。", py:"měi gè yuè wǒ yǒu yí cì tóngyàng de kè", id:"Setiap bulan sekali aku punya pelajaran yang sama"},
{cat:"waktu", zh:"这个星期六我们一起学习吧！", py:"zhège xīngqīliù wǒmen yīqǐ xuéxí ba!", id:"Sabtu ini ayo kita belajar bersama!"},

// --- KELUARGA ---
{cat:"keluarga", zh:"这是我的妈妈和爸爸。", py:"zhè shì wǒ de māma hé bàba", id:"Ini ibu dan ayahku"},
{cat:"keluarga", zh:"我有两个哥哥。", py:"wǒ yǒu liǎng gège", id:"Aku punya dua kakak laki-laki"},
{cat:"keluarga", zh:"你家里有几口人？", py:"nǐ jiā li yǒu jǐ kǒu rén?", id:"Keluargamu berapa orang?"},
{cat:"keluarga", zh:"我家里有四口人。", py:"wǒ jiā li yǒu sì kǒu rén", id:"Keluargaku ada 4 orang"},
{cat:"keluarga", zh:"我女儿上小学。", py:"wǒ nǚ'ér shàng xiǎoxué", id:"Anak perempuanku sekolah dasar"},
{cat:"keluarga", zh:"爸爸妈妈爱我。", py:"bàba māma ài wǒ", id:"Ayah ibu menyayangiku"},
{cat:"keluarga", zh:"我爱我的家人。", py:"wǒ ài wǒ de jiārén", id:"Aku menyayangi keluargaku"},
{cat:"keluarga", zh:"我的哥哥会开车。", py:"wǒ de gège huì kāichē", id:"Kakak laki-lakiku bisa mengemudi"},

// --- CUACA & PERASAAN ---
{cat:"cuaca", zh:"今天天气很好。", py:"jīntiān tiānqì hěn hǎo", id:"Cuaca hari ini sangat bagus"},
{cat:"cuaca", zh:"今天下雨了。", py:"jīntiān xià yǔ le", id:"Hari ini turun hujan"},
{cat:"cuaca", zh:"明天会下雪。", py:"míngtiān huì xià xuě", id:"Besok akan turun salju"},
{cat:"cuaca", zh:"今天的天气很热。", py:"jīntiān de tiānqì hěn rè", id:"Cuaca hari ini sangat panas"},
{cat:"cuaca", zh:"今天太冷了！", py:"jīntiān tài lěng le!", id:"Hari ini terlalu dingin!"},
{cat:"cuaca", zh:"我很高兴。", py:"wǒ hěn gāoxìng", id:"Aku sangat senang"},
{cat:"cuaca", zh:"我很累。", py:"wǒ hěn lèi", id:"Aku sangat lelah"},
{cat:"cuaca", zh:"我有点难过。", py:"wǒ yǒudiǎn nánguò", id:"Aku agak sedih"},

// --- ARAH & TRANSPORT ---
{cat:"arah", zh:"你去哪儿？", py:"nǐ qù nǎr?", id:"Kamu mau ke mana?"},
{cat:"arah", zh:"我要去火车站。怎么走？", py:"wǒ yào qù huǒchēzhàn. zěnme zǒu?", id:"Aku mau ke stasiun kereta. Lewat jalan bagaimana?"},
{cat:"arah", zh:"直走，右转，到红绿灯左转。", py:"zhí zǒu, yòu zhuǎn, dào hónglǜdēng zuǒ zhuǎn", id:"Lurus, belok kanan, di lampu merah belok kiri"},
{cat:"arah", zh:"在左边 / 在右边", py:"zài zuǒbian / zài yòubian", id:"Di kiri / di kanan"},
{cat:"arah", zh:"离这儿远吗？", py:"lí zhèr yuǎn ma?", id:"Jauh dari sini?"},
{cat:"arah", zh:"很近，五分钟就到。", py:"hěn jìn, wǔ fēnzhōng jiù dào", id:"Sangat dekat, 5 menit sampai"},
{cat:"arah", zh:"我要买一张公交车票。", py:"wǒ yào mǎi yì zhāng gōngjiāochē piào", id:"Aku mau beli satu tiket bus"},
{cat:"arah", zh:"这辆公交车去哪儿？", py:"zhè liàng gōngjiāochē qù nǎr?", id:"Bus ini menuju ke mana?"},
];

/* Perkiraan level kosakata HSK 2.0 untuk tiap kartu.
   1 = HSK 1, 2 = HSK 2, 3 = HSK 3, 4 = HSK 4.
   Dipakai untuk badge, filter, dan kuis listening HSK. */

const HSK_LEVELS = [
  // 0–9
  1,1,1,2,1,2,1,1,1,1,
  // 10–19
  1,2,2,2,1,1,2,1,2,1,
  // 20–29
  1,1,2,2,3,2,1,1,2,2,
  // 30–39
  2,2,1,2,2,2,2,3,2,2,
  // 40–49
  1,3,3,3,2,3,4,3,2,1,
  // 50–59
  1,1,3,2,2,2,2,3,1,1,
  // 60–69
  2,1,1,2,3,2,1,2,2,2,
  // 70–79
  2,1,3,2,1,1,2,1,1,1,
  // 80–89
  2,3,1,2,3,2,2,2,3,3
];

function hskLevelOf(i){ return HSK_LEVELS[i] || 3; }

const DIALOGS = [
{title:"🤝 Perkenalan Diri", lines:[
 ["A","你好！我叫小李。你叫什么名字？","Nǐ hǎo! Wǒ jiào Xiǎo Lǐ. Nǐ jiào shénme míngzi?","Halo! Nama saya Li. Siapa namamu?"],
 ["B","我叫 Aya。很高兴认识你！","Wǒ jiào Aya. Hěn gāoxìng rènshi nǐ!","Nama saya Aya. Senang berkenalan!"],
 ["A","你也是学汉语的学生吗？","Nǐ yě shì xué hànyǔ de xuésheng ma?","Kamu juga pelajar yang belajar Mandarin?"],
 ["B","对，我每天学习汉语，可是很难！","Duì, wǒ měitiān xuéxí hànyǔ, kěshì hěn nán!","Ya, aku belajar Mandarin tiap hari, tapi susah!"],
 ["A","别担心，我们一起加油！","Bié dānxīn, wǒmen yīqǐ jiāyóu!","Jangan khawatir, ayo semangat bersama!"],
]},
{title:"🍚 Di Warung Makan", lines:[
 ["A","服务员，我饿了！我们点什么？","Fúwùyuán, wǒ è le! Wǒmen diǎn shénme?","Mas/Pelayan, saya lapar! Kita pesan apa?"],
 ["B","你要吃米饭还是面条？","Nǐ yào chī mǐfàn háishì miàntiáo?","Mau makan nasi atau mi?"],
 ["A","我想吃米饭和一点青菜。","Wǒ xiǎng chī mǐfàn hé yìdiǎn qīngcài.","Aku mau makan nasi dan sedikit sayur."],
 ["B","要喝水吗？","Yào hē shuǐ ma?","Mau minum air?"],
 ["A","要，谢谢！","Yào, xièxie!","Mau, terima kasih!"],
 ["B","多少钱？","Duōshao qián?","Berapa harganya?"],
 ["A","一共二十元。","Yígòng èrshí yuán.","Totalnya 20 yuan."],
]},
{title:"🛍️ Belanja di Pasar", lines:[
 ["A","老板，这个多少钱？","Lǎobǎn, zhège duōshao qián?","Bang/Bos, yang ini berapa?"],
 ["B","那个十块钱。","Nàge shí kuài qián.","Yang itu 10 yuan."],
 ["A","太贵了！便宜一点，好吗？","Tài guì le! Piányi yìdiǎn, hǎo ma?","Terlalu mahal! Turunkan sedikit, ya?"],
 ["B","好吧，八块。","Hǎo ba, bā kuài.","Baiklah, 8 yuan."],
 ["A","好，我要买两个。","Hǎo, wǒ yào mǎi liǎng gè.","Ok, aku beli dua."],
 ["B","一共十六，谢谢光临！","Yígòng shíliù, xièxie guānglín!","Total 16, terima kasih sudah datang!"],
]},
{title:"🤕 Di Rumah Sakit / Sakit", lines:[
 ["A","医生，我生病了。","Yīshēng, wǒ shēngbìng le.","Dokter, saya sakit."],
 ["B","你什么症状？","Nǐ shénme zhèngzhuàng?","Gejalanya apa?"],
 ["A","我头疼，觉得很累。","Wǒ tóuténg, juéde hěn lèi.","Kepalaku pusing, badan terasa sangat lelah."],
 ["B","发烧吗？","Fāshāo ma?","Demam?"],
 ["A","有一点。我应该怎么做？","Yǒu yìdiǎn. Wǒ yīnggāi zěnme zuò?","Agak demam. Sebaiknya saya apa?"],
 ["B","吃药，多喝水，好好休息。","Chī yào, duō hē shuǐ, hǎohǎo xiūxi.","Minum obat, banyak minum air, istirahat yang baik."],
 ["A","谢谢医生！","Xièxie yīshēng!","Terima kasih, dokter!"],
]},
{title:"🧭 Menanyakan Arah", lines:[
 ["A","不好意思，我要去火车站，怎么走？","Bù hǎoyìsi, wǒ yào qù huǒchēzhàn, zěnme zǒu?","Permisi, saya mau ke stasiun, lewat mana?"],
 ["B","直走，再右转，就在左边。","Zhí zǒu, zài yòu zhuǎn, jiù zài zuǒbian.","Lurus terus, lalu belok kanan, ada di kiri."],
 ["A","离这里远吗？","Lí zhèlǐ yuǎn ma?","Jauh dari sini?"],
 ["B","不远，走路十分钟。","Bù yuǎn, zǒulù shí fēnzhōng.","Tidak jauh, 10 menit jalan kaki."],
 ["A","太好了，谢谢你！","Tài hǎo le, xièxie nǐ!","Bagus, terima kasih!"],
 ["B","不客气，再见！","Bú kèqi, zàijiàn!","Sama-sama, sampai jumpa!"],
]},

,
{title:"🎓 Pendaftaran Kuliah & Asrama (选课与新生报到)", lines:[
 ["A","学长你好！我是新来的留学生，请问留学生办公室在哪儿？","Xuézhǎng nǐ hǎo! Wǒ shì xīn lái de liúxuéshēng, qǐngwèn liúxuéshēng bàngōngshì zài nǎr?","Halo Kak! Saya mahasiswa internasional baru, permisi di mana kantor mahasiswa internasional?"],
 ["B","你好！欢迎来到我们大学！办公室在三号教学楼二楼。","Nǐ hǎo! Huānyíng lái dào wǒmen dàxué! Bàngōngshì zài sān hào jiàoxuélóu èr lóu.","Halo! Selamat datang di universitas kami! Kantornya di lantai 2 gedung kuliah 3."],
 ["A","今天需要办理哪些入学手续呢？","Jīntiān xūyào bànlǐ nǎxiē rùxué shǒuxù ne?","Hari ini perlu mengurus prosedur pendaftaran masuk apa saja ya?"],
 ["B","先去登记护照，然后领校园卡和宿舍钥匙。","Xiān qù dēngjì hùzhào, ránhòu lǐng xiàoyuánkǎ hé sùshè yàoshi.","Pertama registrasi paspor, lalu ambil kartu kampus dan kunci asrama."],
 ["A","校园卡可以在食堂刷卡吃饭吗？","Xiàoyuánkǎ kěyǐ zài shítáng shuākǎ chīfàn ma?","Apakah kartu kampus bisa digesek untuk makan di kantin?"],
 ["B","当然可以，还可以去图书馆借书和洗热水澡！","Dāngrán kěyǐ, hái kěyǐ qù túshūguǎn jiè shū hé xǐ rèshuǐ zǎo!","Tentu saja bisa, bisa juga untuk meminjam buku perpustakaan dan mandi air panas!"]
]},
{title:"🏢 Kehidupan Asrama & Teman Sekamar (宿舍生活与打扫)", lines:[
 ["A","室友，今天轮到谁打扫卫生了？","Shìyǒu, jīntiān lún dào shéi dǎsǎo wèishēng le?","Teman sekamar, hari ini giliran siapa membersihkan asrama?"],
 ["B","今天是我倒垃圾，明天是你拖地，对吧？","Jīntiān shì wǒ dào lājī, míngtiān shì nǐ tuō dì, duì ba?","Hari ini saya yang buang sampah, besok kamu yang mengepel lantai, benar kan?"],
 ["A","对！晚上熄灯前别忘了把空调关掉，省点电。","Duì! Wǎnshang xīdēng qián bié wàng le bǎ kōngtiáo guān diào, shěng diǎn diàn.","Benar! Sebelum lampu dimatikan malam nanti jangan lupa matikan AC ya, hemat listrik."],
 ["B","没问题。对了，你的校园网连接正常吗？","Méi wèntí. Duì le, nǐ de xiàoyuánwǎng liánjiē zhèngcháng ma?","Tidak masalah. Ngomong-ngomong, koneksi WiFi kampusmu normal tidak?"],
 ["A","有时候有点慢，看课件还可以，看视频不行。","Yǒushíhou yǒudiǎn màn, kàn kèjiàn hái kěyǐ, kàn shìpín bù xíng.","Kadang-kadang agak lambat, kalau lihat materi presentasi masih oke, nonton video kurang kuat."],
 ["B","那我们待会儿去图书馆自习室复习吧，那里网速快！","Nà wǒmen dāihuìr qù túshūguǎn zìxíshì fùxí ba, nàlǐ wǎngsù kuài!","Kalau begitu nanti kita pergi ke ruang belajar mandiri perpustakaan yuk, di sana internetnya kencang!"]
]},
{title:"📱 Transaksi Digital & Pesan Makanan (扫码支付与点外卖)", lines:[
 ["A","老板，买单！请问支持微信支付还是支付宝？","Lǎobǎn, mǎidān! Qǐngwèn zhīchí Wēixìn zhīfù háishì Zhīfùbǎo?","Bos, bayar! Permisi mendukung pembayaran WeChat atau Alipay?"],
 ["B","都可以！桌角上有二维码，你直接扫码就行。","Dōu kěyǐ! Zhuōjiǎo shang yǒu èrwéimǎ, nǐ zhíjiē sǎomǎ jiù xíng.","Dua-duanya bisa! Di sudut meja ada kode QR, kamu langsung scan saja."],
 ["A","好的，扫过去了，一共四十五块钱对吗？","Hǎo de, sǎo guòqu le, yígòng sìshíwǔ kuài qián duì ma?","Baik, sudah saya scan, totalnya 45 kuai (yuan) benar?"],
 ["B","对，收到了！如果不想出门，下次你也可以在手机上点外卖。","Duì, shōudào le! Rúguǒ bù xiǎng chūmén, xià cì nǐ yě kěyǐ zài shǒujī shang diǎn wàimài.", "Benar, sudah masuk! Kalau tidak mau keluar rumah, lain kali kamu juga bisa pesan antar makanan (waimai) di ponsel."],
 ["A","外卖一般多久能送到宿舍楼下？","Wàimài yìbān duōjiǔ néng sòng dào sùshè lóuxià?","Waimai biasanya berapa lama bisa diantar sampai lantai bawah asrama?"],
 ["B","半个小时左右，骑手会给你打电话或者发短信！","Bàn gè xiǎoshí zuǒyòu, qíshǒu huì gěi nǐ dǎ diànhuà huòzhě fā duǎnxìn!","Sekitar setengah jam, abang kurir (qishou) akan menelepon atau kirim SMS ke kamu!"]
]},
{title:"🚄 Naik Kereta Cepat & Perjalanan (乘坐高铁与取票)", lines:[
 ["A","请问去高铁站是在这个地铁站换乘吗？","Qǐngwèn qù gāotiězhàn shì zài zhè ge dìtiězhàn huànchéng ma?","Permisi pergi ke stasiun kereta cepat apakah transit di stasiun MRT ini?"],
 ["B","对，在这儿换乘二号线，坐三站就到北京南站了。","Duì, zài zhèr huànchéng èr hào xiàn, zuò sān zhàn jiù dào Běijīng Nánzhàn le.", "Benar, di sini pindah ke Jalur 2, naik 3 stasiun langsung sampai Stasiun Selatan Beijing."],
 ["A","坐高铁需要提前取纸质车票吗？","Zuò gāotiě xūyào tíqián qǔ zhǐzhì chēpiào ma?","Apakah naik kereta cepat perlu mencetak tiket kertas lebih dulu?"],
 ["B","现在都是电子票，外国留学生刷护照走人工通道检票就行。","Xiànzài dōu shì diànzǐpiào, wàiguó liúxuéshēng shuā hùzhào zǒu réngōng tōngdào jiǎnpiào jiù xíng.", "Sekarang semuanya tiket digital, mahasiswa asing tinggal tunjukkan/scan paspor lewat gerbang manual untuk periksa tiket."],
 ["A","进站安检严不严？可以带大行李箱吗？","Jìnzhàn ānjiǎn yán bu yán? Kěyǐ dài dà xínglǐxiāng ma?", "Pemeriksaan keamanan (anjie) masuk stasiun ketat tidak? Boleh bawa koper besar?"],
 ["B","可以带大行李，但不能带易燃易爆物品，水也要喝一口检查。","Kěyǐ dài dà xínglǐ, dàn bù néng dài yìrán yìbào wùpǐn, shuǐ yě yào hē yì kǒu jiǎnchá.", "Boleh bawa koper besar, tapi dilarang bawa barang mudah terbakar/meledak, air minum juga harus diteguk seteguk untuk dicek."]
]},
{title:"💼 Wawancara Magang & Kantor (公司面试与实习)", lines:[
 ["A","您好，我是来参加今天下午的实习生面试的。","Nín hǎo, wǒ shì lái cānjiā jīntiān xiàwǔ de shíxíshēng miànshì de.","Halo Bapak/Ibu, saya datang untuk mengikuti wawancara pemagang (intern) siang ini."],
 ["B","请进！请先出示你的简历，然后用中文做个简单的自我介绍。","Qǐng jìn! Qǐng xiān chūshì nǐ de jiǎnlì, ránhòu yòng zhōngwén zuò gè jiǎndān de zìwǒ jièshào.", "Silakan masuk! Mohon tunjukkan CV/resume Anda lebih dulu, lalu buat perkenalan diri singkat dalam bahasa Mandarin."],
 ["A","各位老师好！我叫陈亮，主修计算机科学，熟练掌握编程。","Gèwèi lǎoshī hǎo! Wǒ jiào Chén Liàng, zhǔxiū jìsuànjī kēxué, shúliàn zhǎngwò biānchéng.", "Halo Bapak dan Ibu sekalian! Nama saya Chen Liang, jurusan Ilmu Komputer, menguasai pemrograman dengan mahir."],
 ["B","你的汉语水平很好，你考过HSK几级？","Nǐ de hànyǔ shuǐpíng hěn hǎo, nǐ kǎo guo HSK jǐ jí?", "Tingkat bahasa Mandarin Anda sangat baik, Anda sudah pernah lulus HSK level berapa?"],
 ["A","我去年考过了HSK四级，目前正在准备五级考试。","Wǒ qùnián kǎo guò le HSK sì jí, mùqián zhèngzài zhǔnbèi wǔ jí kǎoshì.", "Tahun lalu saya sudah lulus HSK Level 4, saat ini sedang mempersiapkan ujian Level 5."],
 ["B","非常好！我们下周五之前会通过邮件通知你面试结果。","Fēicháng hǎo! Wǒmen xià zhōu wǔ zhīqián huì tōngguò yóujiàn tōngzhī nǐ miànshì jiéguǒ.", "Sangat bagus! Kami akan mengabari hasil wawancara lewat email sebelum hari Jumat depan."]
]}

];

const HSK_BANK = [
{"l":1,"z":"老师，您好！","p":"lǎoshī nín hǎo","i":"Halo, Guru!"},
{"l":1,"z":"你好，很高兴认识你。","p":"nǐ hǎo hěn gāoxìng rènshi nǐ","i":"Halo, senang berkenalan denganmu."},
{"l":1,"z":"谢谢你！不客气。","p":"xièxie nǐ bù kèqi","i":"Terima kasih! Terima kasih kembali."},
{"l":1,"z":"对不起。没关系。","p":"duìbuqǐ méiguānxi","i":"Maaf. Tidak masalah."},
{"l":1,"z":"请问，你叫什么名字？","p":"qǐngwèn nǐ jiào shénme míngzi","i":"Permisi, siapa namamu?"},
{"l":1,"z":"请进，请坐。","p":"qǐng jìn qǐng zuò","i":"Silakan masuk dan duduk."},
{"l":1,"z":"老师再见！","p":"lǎoshī zàijiàn","i":"Sampai jumpa, Guru!"},
{"l":1,"z":"我来介绍一下我的朋友。","p":"wǒ lái jièshào yī xià wǒ de péngyou","i":"Izinkan saya memperkenalkan teman saya."},
{"l":1,"z":"他是谁？","p":"tā shì shuí","i":"Siapa dia?"},
{"l":1,"z":"他是我的老师。","p":"tā shì wǒ de lǎoshī","i":"Dia adalah guruku."},
{"l":1,"z":"你们都是学生吗？","p":"nǐmen dōu shì xuésheng ma","i":"Apakah kalian semua pelajar?"},
{"l":1,"z":"我们是同学。","p":"wǒmen shì tóngxué","i":"Kami adalah teman sekelas."},
{"l":1,"z":"她也是医生。","p":"tā yě shì yīshēng","i":"Dia juga seorang dokter."},
{"l":1,"z":"他们是工人。","p":"tāmen shì gōngrén","i":"Mereka adalah pekerja."},
{"l":1,"z":"我是中国人，你呢？","p":"wǒ shì zhōngguó rén nǐ ne","i":"Saya orang Tiongkok, kamu?"},
{"l":1,"z":"那个男生是我朋友。","p":"nà ge nánshēng shì wǒ péngyou","i":"Anak laki-laki itu adalah temanku."},
{"l":1,"z":"这个女生很认真。","p":"zhè ge nǚshēng hěn rènzhēn","i":"Anak perempuan ini sangat tekun."},
{"l":1,"z":"先生，您找谁？","p":"xiānsheng nín zhǎo shuí","i":"Pak, Anda mencari siapa?"},
{"l":1,"z":"别人都来了，就他没来。","p":"biéren dōu lái le jiù tā méi lái","i":"Semua orang sudah datang, hanya dia yang belum."},
{"l":1,"z":"我家有五口人。","p":"wǒ jiā yǒu wǔ kǒu rén","i":"Ada lima orang di keluarga saya."},
{"l":1,"z":"这是我爸爸和妈妈。","p":"zhè shì wǒ bàba hé māma","i":"Ini ayah dan ibuku."},
{"l":1,"z":"我有一个哥哥和一个妹妹。","p":"wǒ yǒu yī ge gēge hé yī ge mèimei","i":"Saya punya kakak laki-laki dan adik perempuan."},
{"l":1,"z":"他是我弟弟，她是我姐姐。","p":"tā shì wǒ dìdi tā shì wǒ jiějie","i":"Dia adik laki-lakiku, dan dia kakak perempuanku."},
{"l":1,"z":"爷爷和奶奶身体都很好。","p":"yéye hé nǎinai shēntǐ dōu hěn hǎo","i":"Kakek dan nenek keduanya dalam keadaan sehat."},
{"l":1,"z":"这是我儿子，那是我女儿。","p":"zhè shì wǒ érzi nà shi wǒ nǚér","i":"Ini putraku, itu putriku."},
{"l":1,"z":"她是我女朋友，他是我男朋友。","p":"tā shì wǒ nǚpéngyou tā shì wǒ nánpéngyou","i":"Dia pacar perempuanku, dan dia pacar laki-lakiku."},
{"l":1,"z":"我妈妈是老师，我爸爸是工人。","p":"wǒ māma shì lǎoshī wǒ bàba shì gōngrén","i":"Ibu saya adalah seorang guru dan ayah saya adalah seorang pekerja."},
{"l":1,"z":"我们是一家人。","p":"wǒmen shì yījiārén","i":"Kami adalah keluarga."},
{"l":1,"z":"我今年二十岁。","p":"wǒ jīnnián èr shí suì","i":"Saya berumur dua puluh tahun."},
{"l":1,"z":"一年有十二个月。","p":"yī nián yǒu shí èr gè yuè","i":"Ada dua belas bulan dalam setahun."},
{"l":1,"z":"一个星期有七天。","p":"yī ge xīngqī yǒu qī tiān","i":"Ada tujuh hari dalam seminggu."},
{"l":1,"z":"他有两个孩子。","p":"tā yǒu liǎng gè háizi","i":"Dia memiliki dua anak."},
{"l":1,"z":"我买了三本书。","p":"wǒ mǎi le sān běn shū","i":"Saya membeli tiga buku."},
{"l":1,"z":"我们班有四十个学生。","p":"wǒmen bān yǒu sì shí gè xuésheng","i":"Ada empat puluh siswa di kelas kami."},
{"l":1,"z":"这是第二次。","p":"zhè shì dìèr cì","i":"Ini adalah kedua kalinya."},
{"l":1,"z":"一半是我的，一半是你的。","p":"yībàn shì wǒ de yībàn shì nǐ de","i":"Separuh milikku, separuh milikmu."},
{"l":1,"z":"这本书一百块钱。","p":"zhè běn shū yì bǎi kuài qián","i":"Buku ini seratus yuan."},
{"l":1,"z":"弟弟六岁，妹妹三岁。","p":"dìdi liù suì mèimei sān suì","i":"Adik laki-laki berusia enam tahun, adik perempuan tiga tahun."},
{"l":1,"z":"南边比北边热。","p":"nánbian bǐ běibiān rè","i":"Wilayah selatan lebih panas dibandingkan wilayah utara."},
{"l":1,"z":"现在几点？","p":"xiànzài jǐ diǎn","i":"Jam berapa sekarang?"},
{"l":1,"z":"现在是上午九点半。","p":"xiànzài shì shàngwǔ jiǔ diǎn bàn","i":"Sekarang jam setengah sepuluh pagi."},
{"l":1,"z":"今天是星期几？","p":"jīntiān shì xīngqī jǐ","i":"Hari apa hari ini?"},
{"l":1,"z":"明天是星期天。","p":"míngtiān shì xīngqītiān","i":"Besok hari Minggu."},
{"l":1,"z":"昨天是星期日。","p":"zuótiān shì xīngqīrì","i":"Kemarin adalah hari Minggu."},
{"l":1,"z":"我上午有课，下午没有。","p":"wǒ shàngwǔ yǒu kè xiàwǔ méiyǒu","i":"Saya ada kelas di pagi hari tetapi tidak di sore hari."},
{"l":1,"z":"我们中午一起吃午饭。","p":"wǒmen zhōngwǔ yīqǐ chī wǔfàn","i":"Kami makan siang bersama."},
{"l":1,"z":"他晚上常常学习。","p":"tā wǎnshang chángcháng xuéxí","i":"Dia sering belajar di malam hari."},
{"l":1,"z":"明年是新年。","p":"míngnián shì xīnnián","i":"Tahun depan adalah Tahun Baru."},
{"l":1,"z":"去年我在北京。","p":"qùnián wǒ zài běijīng","i":"Saya berada di Beijing tahun lalu."},
{"l":1,"z":"现在是白天，不是晚上。","p":"xiànzài shì báitiān bù shì wǎnshang","i":"Sekarang siang, bukan malam."},
{"l":1,"z":"前天下雨了，今天没雨。","p":"qiántiān xiàyǔ le jīntiān méi yǔ","i":"Kemarin lusa hujan, tapi hari ini tidak hujan."},
{"l":1,"z":"他后天回家。","p":"tā hòutiān huíjiā","i":"Dia akan pulang lusa."},
{"l":1,"z":"有时候我早上跑，有时候走路。","p":"yǒushíhou wǒ zǎoshang pǎo yǒushíhou zǒulù","i":"Terkadang saya berlari di pagi hari dan terkadang saya berjalan."},
{"l":1,"z":"我早上七点起床。","p":"wǒ zǎoshang qī diǎn qǐchuáng","i":"Saya bangun jam tujuh pagi."},
{"l":1,"z":"我很累，想睡觉。","p":"wǒ hěn lèi xiǎng shuìjiào","i":"Aku lelah dan ingin tidur."},
{"l":1,"z":"你想喝水吗？","p":"nǐ xiǎng hē shuǐ ma","i":"Apakah kamu ingin minum air?"},
{"l":1,"z":"我想喝一杯茶。","p":"wǒ xiǎng hē yī bēi chá","i":"Saya ingin minum secangkir teh."},
{"l":1,"z":"我们一起吃饭吧。","p":"wǒmen yīqǐ chīfàn ba","i":"Ayo makan bersama."},
{"l":1,"z":"他在看电视。","p":"tā zài kàn diànshì","i":"Dia sedang menonton TV."},
{"l":1,"z":"我正在学习写字。","p":"wǒ zhèngzài xuéxí xiě zì","i":"Saya sedang belajar menulis."},
{"l":1,"z":"请说汉语。","p":"qǐng shuō hànyǔ","i":"Tolong bicara bahasa Mandarin."},
{"l":1,"z":"你会说中文吗？","p":"nǐ huì shuō zhōngwén ma","i":"Bisakah kamu berbicara bahasa Mandarin?"},
{"l":1,"z":"我会做菜。","p":"wǒ huì zuò cài","i":"Saya bisa memasak."},
{"l":1,"z":"他喜欢读书。","p":"tā xǐhuan dúshū","i":"Dia suka membaca."},
{"l":1,"z":"我给你打电话。","p":"wǒ gěi nǐ dǎdiànhuà","i":"Aku akan meneleponmu."},
{"l":1,"z":"请打开门。","p":"qǐng dǎkāi mén","i":"Tolong buka pintunya."},
{"l":1,"z":"请关上门。","p":"qǐng guānshàng mén","i":"Tolong tutup pintunya."},
{"l":1,"z":"他唱歌很好听。","p":"tā chànggē hěn hǎotīng","i":"Dia bernyanyi dengan indah."},
{"l":1,"z":"我们出去玩儿吧。","p":"wǒmen chūqù wánr ba","i":"Ayo keluar bermain."},
{"l":1,"z":"小朋友在外边跑。","p":"xiǎopéngyou zài wàibian pǎo","i":"Anak-anak bermain di luar."},
{"l":1,"z":"他走路很快，我很慢。","p":"tā zǒulù hěn kuài wǒ hěn màn","i":"Dia berjalan cepat dan aku berjalan perlahan."},
{"l":1,"z":"我要洗手。","p":"wǒ yào xǐ shǒu","i":"Saya perlu mencuci tangan."},
{"l":1,"z":"请坐下，休息一会儿。","p":"qǐngzuò xia xiūxi yīhuìr","i":"Silakan duduk dan istirahat sebentar."},
{"l":1,"z":"老师教我们汉字。","p":"lǎo shī jiāo wǒ men hàn zì","i":"Guru mengajari kami hanzi."},
{"l":1,"z":"我忘记他的名字了。","p":"wǒ wàngjì tā de míngzi le","i":"Saya lupa namanya."},
{"l":1,"z":"我记得你，也记住了你的话。","p":"wǒ jìde nǐ yě jìzhu le nǐ dehuà","i":"Aku ingat kamu, dan juga kata-katamu."},
{"l":1,"z":"你知道他家在哪儿吗？","p":"nǐ zhīdào tā jiā zài nǎr ma","i":"Tahukah kamu di mana rumahnya?"},
{"l":1,"z":"我明白了。","p":"wǒ míngbai le","i":"Saya mengerti."},
{"l":1,"z":"请告诉我你的电话。","p":"qǐng gàosù wǒ nǐ de diànhuà","i":"Tolong beri tahu saya nomor teleponmu."},
{"l":1,"z":"我们准备一下就走。","p":"wǒmen zhǔnbèi yī xià jiù zǒu","i":"Kami bersiap-siap lalu berangkat."},
{"l":1,"z":"他还没起来。","p":"tā hái méi qǐlai","i":"Dia belum bangun."},
{"l":1,"z":"请等一下，我马上来。","p":"qǐng děng yī xià wǒ mǎshàng lái","i":"Tunggu sebentar, saya segera datang."},
{"l":1,"z":"他帮我拿东西。","p":"tā bāng wǒ ná dōngxi","i":"Dia membantuku mengambil barang-barangku."},
{"l":1,"z":"谢谢你帮忙。","p":"xièxie nǐ bāngmáng","i":"Terima kasih atas bantuanmu."},
{"l":1,"z":"我在大学学习。","p":"wǒ zài dàxué xuéxí","i":"Saya sedang belajar di universitas."},
{"l":1,"z":"他是大学生，我是小学生。","p":"tā shì dàxuéshēng wǒ shì xiǎoxuésheng","i":"Dia adalah seorang mahasiswa dan saya seorang siswa sekolah dasar."},
{"l":1,"z":"我上课，下课就回家。","p":"wǒ shàngkè xiàkè jiù huíjiā","i":"Saya pergi ke kelas dan pulang ke rumah setelah kelas."},
{"l":1,"z":"他上班，我上学。","p":"tā shàngbān wǒ shàngxué","i":"Dia pergi bekerja dan aku pergi ke sekolah."},
{"l":1,"z":"下班以后我去商店。","p":"xiàbān yǐhòu wǒ qù shāngdiàn","i":"Setelah bekerja saya pergi ke toko."},
{"l":1,"z":"明天放假，不用上学。","p":"míngtiān fàngjià bùyòng shàngxué","i":"Besok adalah hari libur, jadi kamu tidak perlu pergi ke sekolah."},
{"l":1,"z":"明天考试，我要准备。","p":"míngtiān kǎoshì wǒ yào zhǔnbèi","i":"Saya harus mempersiapkan ujian besok."},
{"l":1,"z":"这次考试很难。","p":"zhè cì kǎoshì hěn nán","i":"Ujian ini sangat sulit."},
{"l":1,"z":"图书馆在教学楼旁边。","p":"túshūguǎn zài jiàoxuélóu pángbiān","i":"Perpustakaan ada di sebelah gedung kelas."},
{"l":1,"z":"我在学校工作。","p":"wǒ zài xuéxiào gōngzuò","i":"Saya bekerja di sekolah."},
{"l":1,"z":"他常常上网。","p":"tā chángcháng shàngwǎng","i":"Dia sering menjelajahi Internet."},
{"l":1,"z":"我在网上有很多网友。","p":"wǒ zài wǎngshàng yǒu hěn duō wǎngyǒu","i":"Saya punya banyak teman online."},
{"l":1,"z":"他在北京工作。","p":"tā zài běijīng gōngzuò","i":"Dia bekerja di Beijing."},
{"l":1,"z":"书在桌子上。","p":"shū zài zhuōzi shàng","i":"Buku itu ada di atas meja."},
{"l":1,"z":"书在桌子下。","p":"shū zài zhuōzi xià","i":"Buku itu ada di bawah meja."},
{"l":1,"z":"商店在医院旁边。","p":"shāngdiàn zài yīyuàn pángbiān","i":"Toko itu berada di sebelah rumah sakit."},
{"l":1,"z":"图书馆在学校里边。","p":"túshūguǎn zài xuéxiào lǐbian","i":"Perpustakaan ada di dalam sekolah."},
{"l":1,"z":"外边下雨了。","p":"wàibian xiàyǔ le","i":"Di luar sedang hujan."},
{"l":1,"z":"医院在前边，饭店在后边。","p":"yīyuàn zài qiánbian fàndiàn zài hòubian","i":"Rumah sakitnya ada di depan dan restorannya ada di belakang."},
{"l":1,"z":"请走左边，不要走右边。","p":"qǐng zǒu zuǒbian bùyào zǒu yòubian","i":"Silakan ke kiri, jangan ke kanan."},
{"l":1,"z":"我家在学校东边。","p":"wǒ jiā zài xuéxiào dōngbian","i":"Rumahku berada di sebelah timur sekolah."},
{"l":1,"z":"商场在西边，学院在北边。","p":"shāngchǎng zài xībiān xuéyuàn zài běibiān","i":"Mal di sebelah barat dan perguruan tinggi di utara."},
{"l":1,"z":"他站在门口。","p":"tā zhàn zài ménkǒu","i":"Dia berdiri di depan pintu."},
{"l":1,"z":"东西在房间中间。","p":"dōngxi zài fángjiān zhōngjiān","i":"Benda itu ada di tengah ruangan."},
{"l":1,"z":"书在床上，不在地上。","p":"shū zài chuáng shàng bù zài dìshang","i":"Buku itu ada di tempat tidur, bukan di lantai."},
{"l":1,"z":"他在楼上，我在楼下。","p":"tā zài lóushàng wǒ zài lóuxià","i":"Dia di lantai atas, aku di lantai bawah."},
{"l":1,"z":"山上有很多树。","p":"shān shàng yǒu hěn duō shù","i":"Ada banyak pohon di gunung."},
{"l":1,"z":"我要去火车站。","p":"wǒ yào qù huǒchē zhàn","i":"Aku akan ke stasiun kereta."},
{"l":1,"z":"我们打车去机场。","p":"wǒmen dǎchē qù jīchǎng","i":"Kami naik taksi ke bandara."},
{"l":1,"z":"他坐飞机去外国。","p":"tā zuò fēijī qù wàiguó","i":"Dia terbang ke luar negeri."},
{"l":1,"z":"请上车，我们走。","p":"qǐng shàngchē wǒmen zǒu","i":"Silakan naik, ayo berangkat."},
{"l":1,"z":"到了，请下车。","p":"dào liǎo qǐng xiàchē","i":"Sudah sampai, silakan turun."},
{"l":1,"z":"汽车在马路上。","p":"qìchē zài mǎlù shang","i":"Mobil ada di jalan."},
{"l":1,"z":"我买车票，你买机票。","p":"wǒ mǎi chēpiào nǐ mǎi jīpiào","i":"Saya membeli tiket bus dan kamu membeli tiket pesawat."},
{"l":1,"z":"火车快到站了。","p":"huǒchē kuài dào zhàn le","i":"Kereta hampir tiba."},
{"l":1,"z":"路口有很多人和车。","p":"lùkǒu yǒu hěn duō rén hé chē","i":"Ada banyak orang dan mobil di persimpangan."},
{"l":1,"z":"他坐在车上看书。","p":"tā zuò zài chēshàng kàn shū","i":"Dia sedang duduk di dalam mobil sambil membaca buku."},
{"l":1,"z":"回家的路上，我买了面包。","p":"huíjiā de lùshang wǒ mǎi le miànbāo","i":"Dalam perjalanan pulang, saya membeli roti."},
{"l":1,"z":"我想买新衣服。","p":"wǒ xiǎng mǎi xīn yīfu","i":"Saya ingin membeli baju baru."},
{"l":1,"z":"这个太贵了。","p":"zhè ge tài guì le","i":"Ini terlalu mahal."},
{"l":1,"z":"那个不贵，我要买。","p":"nà ge bù guì wǒ yào mǎi","i":"Itu tidak mahal, saya ingin membelinya."},
{"l":1,"z":"这本书多少钱？","p":"zhè běn shū duōshǎo qián","i":"Berapa harga buku ini?"},
{"l":1,"z":"这个八块钱。","p":"zhè ge bā kuài qián","i":"Ini delapan yuan."},
{"l":1,"z":"我的钱包在包里。","p":"wǒ de qiánbāo zài bāo lǐ","i":"Dompetku ada di tasku."},
{"l":1,"z":"商场里人很多。","p":"shāngchǎng lǐ rén hěn duō","i":"Ada banyak orang di mal."},
{"l":1,"z":"书店在商店后边。","p":"shūdiàn zài shāngdiàn hòubian","i":"Toko buku berada di belakang toko."},
{"l":1,"z":"花不贵，我买一些。","p":"huā bù guì wǒ mǎi yīxiē","i":"Bunganya tidak mahal, saya akan membelinya."},
{"l":1,"z":"门票多少钱？","p":"ménpiào duōshǎo qián","i":"Berapa harga tiketnya?"},
{"l":1,"z":"我喜欢吃米饭和菜。","p":"wǒ xǐhuan chī mǐfàn hé cài","i":"Saya suka makan nasi dan sayuran."},
{"l":1,"z":"早饭我吃面包，喝牛奶。","p":"zǎofàn wǒ chī miànbāo hē niúnǎi","i":"Saya makan roti dan minum susu untuk sarapan."},
{"l":1,"z":"这个菜很好吃。","p":"zhè ge cài hěn hǎochī","i":"Hidangan ini enak."},
{"l":1,"z":"我想吃鸡蛋和肉。","p":"wǒ xiǎng chī jīdàn hé ròu","i":"Saya ingin makan telur dan daging."},
{"l":1,"z":"我饿了，也渴了。","p":"wǒ è le yě kě le","i":"Saya lapar dan haus."},
{"l":1,"z":"水果很好吃，我买一些。","p":"shuǐguǒ hěn hǎochī wǒ mǎi yīxiē","i":"Buahnya enak, saya akan membelinya."},
{"l":1,"z":"请给我一杯茶。","p":"qǐng gěi wǒ yī bēi chá","i":"Tolong beri saya secangkir teh."},
{"l":1,"z":"我们晚饭吃面条儿和包子。","p":"wǒmen wǎnfàn chī miàntiáor hé bāozi","i":"Kami makan mi dan bakpao untuk makan malam."},
{"l":1,"z":"今天天气很好。","p":"jīntiān tiānqì hěn hǎo","i":"Cuacanya bagus hari ini."},
{"l":1,"z":"今天很冷，昨天很热。","p":"jīntiān hěn lěng zuótiān hěn rè","i":"Hari ini dingin dan kemarin panas."},
{"l":1,"z":"明天有雨。","p":"míngtiān yǒu yǔ","i":"Besok akan turun hujan."},
{"l":1,"z":"外边风很大。","p":"wàibian fēng hěn dà","i":"Di luar sangat berangin."},
{"l":1,"z":"他很忙，我不忙。","p":"tā hěn máng wǒ bù máng","i":"Dia sibuk, aku tidak."},
{"l":1,"z":"我很高兴，他很生气。","p":"wǒ hěn gāoxìng tā hěn shēngqì","i":"Saya senang dan dia marah."},
{"l":1,"z":"房间很干净。","p":"fángjiān hěn gānjìng","i":"Ruangan itu sangat bersih."},
{"l":1,"z":"他生病了，去医院看病。","p":"tā shēngbìng le qù yīyuàn kànbìng","i":"Dia sakit dan pergi ke rumah sakit untuk menemui dokter."},
{"l":1,"z":"病人在医院休息。","p":"bìngrén zài yīyuàn xiūxi","i":"Pasien sedang beristirahat di rumah sakit."},
{"l":1,"z":"今天真冷，我穿新衣服。","p":"jīntiān zhēn lěng wǒ chuān xīn yīfu","i":"Hari ini sangat dingin, aku memakai baju baru."},
{"l":1,"z":"我能进来吗？","p":"wǒ néng jìnlái ma","i":"Bisakah saya masuk?"},
{"l":1,"z":"你会开车吗？","p":"nǐ huì kāichē ma","i":"Bisakah kamu mengemudi?"},
{"l":1,"z":"这是什么？","p":"zhè shì shénme","i":"Apa ini?"},
{"l":1,"z":"那是谁的书？","p":"nà shi shéi de shū","i":"Buku siapa itu?"},
{"l":1,"z":"你怎么了？","p":"nǐ zěnme le","i":"Ada apa denganmu?"},
{"l":1,"z":"你喜欢哪个？","p":"nǐ xǐhuan nǎ ge","i":"Yang mana yang kamu suka?"},
{"l":1,"z":"他是不是学生？","p":"tā shìbushì xuésheng","i":"Apakah dia seorang pelajar?"},
{"l":1,"z":"你有时间吗？","p":"nǐ yǒu shíjiān ma","i":"Apakah kamu punya waktu?"},
{"l":1,"z":"这个字怎么写？","p":"zhè ge zì zěnme xiě","i":"Bagaimana cara menulis kata ini?"},
{"l":1,"z":"今天几月几号？","p":"jīntiān jǐ yuè jǐ hào","i":"Hari ini tanggal berapa?"},
{"l":1,"z":"你想吃什么？还是喝茶？","p":"nǐ xiǎng chī shénme háishi hē chá","i":"Kamu mau makan apa? Atau mau minum teh?"},
{"l":1,"z":"这些书里，哪些是你的？","p":"zhèxiē shū lǐ nǎxiē shì nǐ de","i":"Dari buku-buku ini, mana yang milikmu?"},
{"l":1,"z":"这是我的手机。","p":"zhè shì wǒ de shǒujī","i":"Ini ponselku."},
{"l":1,"z":"我的电脑很新。","p":"wǒ de diànnǎo hěn xīn","i":"Komputer saya sangat baru."},
{"l":1,"z":"桌子上有一本书和一个本子。","p":"zhuōzi shàng yǒu yī běn shū hé yī ge běnzi","i":"Ada sebuah buku dan buku catatan di atas meja."},
{"l":1,"z":"我喜欢这本课本和课文。","p":"wǒ xǐhuan zhè běn kèběn hé kèwén","i":"Saya suka buku pelajaran dan teks ini."},
{"l":1,"z":"请给我地图。","p":"qǐng gěi wǒ dìtú","i":"Tolong berikan saya petanya."},
{"l":1,"z":"房间里有很多桌子。","p":"fángjiān lǐ yǒu hěn duō zhuōzi","i":"Ada banyak meja di ruangan itu."},
{"l":1,"z":"我的书放在桌子上。","p":"wǒ de shū fàng zài zhuōzi shàng","i":"Bukuku ada di atas meja."},
{"l":1,"z":"洗手间在哪里？","p":"xǐshǒujiān zài nǎlǐ","i":"Di mana toilet?"},
{"l":1,"z":"我们都爱我们的国家。","p":"wǒmen dōu ài wǒmen de guójiā","i":"Kita semua mencintai negara kita."},
{"l":1,"z":"今天外边很热。","p":"jīntiān wàibian hěn rè","i":"Hari ini di luar panas."},
{"l":1,"z":"这本书很有名，也很有用。","p":"zhè běn shū hěn yǒumíng yě hěn yǒuyòng","i":"Buku ini sangat terkenal dan bermanfaat."},
{"l":1,"z":"学校很远，我坐车去。","p":"xuéxiào hěn yuǎn wǒ zuò chē qù","i":"Sekolahnya jauh, aku berangkat naik bus."},
{"l":1,"z":"这个东西太重了。","p":"zhè ge dōngxi tài zhòng le","i":"Benda ini terlalu berat."},
{"l":1,"z":"这个事很重要。","p":"zhè ge shì hěn zhòngyào","i":"Hal ini sangat penting."},
{"l":1,"z":"他的爱好是唱歌和打球。","p":"tā de àihào shì chànggē hé dǎqiú","i":"Hobinya menyanyi dan bermain bola."},
{"l":1,"z":"这个电影很有名，非常好看。","p":"zhè ge diànyǐng hěn yǒumíng fēicháng hǎokàn","i":"Film ini sangat terkenal dan sangat bagus untuk ditonton."},
{"l":1,"z":"电影院在商场旁边。","p":"diànyǐngyuàn zài shāngchǎng pángbiān","i":"Bioskopnya ada di sebelah mal."},
{"l":1,"z":"我觉得这本书很好。","p":"wǒ juéde zhè běn shū hěn hǎo","i":"Menurut saya buku ini sangat bagus."},
{"l":1,"z":"老人在家里唱歌。","p":"lǎorén zài jiālǐ chànggē","i":"Orang lanjut usia itu bernyanyi di rumah."},
{"l":1,"z":"他在门口笑着看我。","p":"tā zài ménkǒu xiào zhe kàn wǒ","i":"Dia tersenyum padaku di depan pintu."},
{"l":1,"z":"他跟朋友一起去看电影。","p":"tā gēn péngyou yīqǐ qù kàn diànyǐng","i":"Dia pergi ke bioskop bersama teman-temannya."},
{"l":1,"z":"我看见他了，他也看到我了。","p":"wǒ kànjiàn tā le tā yě kàndào wǒ le","i":"Aku melihatnya dan dia melihatku."},
{"l":1,"z":"我听见了，也听到你的话了。","p":"wǒ tīngjiàn le yě tīngdào nǐ dehuà le","i":"Aku mendengarnya, dan aku mendengar kata-katamu."},
{"l":1,"z":"老师问，学生回答。","p":"lǎoshī wèn xuésheng huídá","i":"Guru bertanya dan siswa menjawab."},
{"l":1,"z":"我要请假，去看病。","p":"wǒ yào qǐngjià qù kànbìng","i":"Saya perlu mengambil cuti untuk menemui dokter."},
{"l":1,"z":"最后一页有很多字。","p":"zuìhòu yī yè yǒu hěn duō zì","i":"Ada banyak kata di halaman terakhir."},
{"l":1,"z":"这是最好的水果。","p":"zhè shì zuìhǎo de shuǐguǒ","i":"Ini adalah buah terbaik."},
{"l":1,"z":"今天是我的生日。","p":"jīntiān shì wǒ de shēngrì","i":"Hari ini adalah hari ulang tahunku."},
{"l":1,"z":"我看到那个人回来了。","p":"wǒ kàndào nà gè rén huílai le","i":"Saya melihat pria itu kembali."},
{"l":1,"z":"他出来了，我们进去吧。","p":"tā chūlái le wǒmen jìnqù ba","i":"Dia keluar, ayo masuk."},
{"l":1,"z":"他送我回家。","p":"tā sòng wǒ huíjiā","i":"Dia mengantarku pulang."},
{"l":1,"z":"对，这是对的，那个是错的。","p":"duì zhè shì duì de nà ge shì cuò de","i":"Ya, ini benar, itu salah."},
{"l":1,"z":"请到这儿来，别去那儿。","p":"qǐng dào zhèr lái bié qù nàr","i":"Silakan datang ke sini, jangan pergi ke sana."},
{"l":1,"z":"这边是书店，那边是饭店。","p":"zhèbiān shì shūdiàn nàbian shì fàndiàn","i":"Sisi ini adalah toko buku dan sisi itu adalah restoran."},
{"l":1,"z":"这里冷，那里热。","p":"zhèlǐ lěng nàli rè","i":"Di sini dingin, di sana panas."},
{"l":1,"z":"左边是门，右边是路。","p":"zuǒbian shì mén yòubian shì lù","i":"Di sebelah kiri adalah pintu dan di sebelah kanan adalah jalan."},
{"l":1,"z":"楼上边有房间，下边有商店。","p":"lóushàng biān yǒu fángjiān xiàbian yǒu shāngdiàn","i":"Ada kamar di lantai atas dan toko di bawah."},
{"l":1,"z":"北边有山，西边有树。","p":"běibiān yǒu shān xībiān yǒu shù","i":"Ada pegunungan di utara dan pepohonan di barat."},
{"l":1,"z":"我姐姐是中学生。","p":"wǒ jiějie shì zhōngxuésheng","i":"Kakak perempuanku adalah siswa SMP."},
{"l":1,"z":"那个女人是老师，那个男人是医生。","p":"nà ge nǚrén shì lǎoshī nà ge nánrén shì yīshēng","i":"Wanita itu adalah guru, dan pria itu adalah dokter."},
{"l":1,"z":"小女孩儿和小男孩儿一起玩儿。","p":"xiǎo nǚháir hé xiǎo nánháir yīqǐ wánr","i":"Anak perempuan kecil dan anak laki-laki kecil bermain bersama."},
{"l":1,"z":"请听我说话。","p":"qǐng tīng wǒ shuōhuà","i":"Tolong dengarkan aku."},
{"l":1,"z":"老师说话，学生听写。","p":"lǎoshī shuōhuà xuésheng tīngxiě","i":"Guru berbicara, siswa menulis dikte."},
{"l":1,"z":"我想学外语，也想学新知识。","p":"wǒ xiǎng xué wàiyǔ yě xiǎng xué xīn zhīshí","i":"Saya ingin belajar bahasa asing dan mempelajari ilmu baru."},
{"l":1,"z":"飞机在天上飞。","p":"fēijī zài tiānshàng fēi","i":"Pesawat terbang di langit."},
{"l":1,"z":"我忘了，你记得吗？","p":"wǒ wàng le nǐ jìde ma","i":"Aku lupa, apakah kamu ingat?"},
{"l":1,"z":"明天考试，我想考好。","p":"míngtiān kǎoshì wǒ xiǎng kǎo hǎo","i":"Saya ada ujian besok dan saya ingin melakukannya dengan baik."},
{"l":1,"z":"请你试一下这个。","p":"qǐng nǐ shì yī xià zhè ge","i":"Silakan coba ini."},
{"l":1,"z":"他住在学校里。","p":"tā zhù zài xuéxiào lǐ","i":"Dia tinggal di kampus."},
{"l":1,"z":"我不知道干什么好。","p":"wǒ bù zhīdào gànshénme hǎo","i":"Saya tidak tahu harus berbuat apa."},
{"l":1,"z":"回到家，我很高兴。","p":"huídào jiā wǒ hěn gāoxìng","i":"Saya senang berada di rumah."},
{"l":1,"z":"他回去了，我也回去。","p":"tā huíqu le wǒ yě huíqu","i":"Dia pulang, aku juga pulang."},
{"l":1,"z":"我很累，想睡了。","p":"wǒ hěn lèi xiǎng shuì le","i":"Saya sangat lelah dan ingin tidur."},
{"l":1,"z":"今天是几月几日？","p":"jīntiān shì jǐ yuè jǐ rì","i":"Hari ini tanggal berapa?"},
{"l":1,"z":"现在还很早，不晚。","p":"xiànzài hái hěn zǎo bù wǎn","i":"Sekarang masih awal, belum terlambat."},
{"l":1,"z":"我等了半天。","p":"wǒ děng le bàntiān","i":"Saya menunggu lama sekali."},
{"l":1,"z":"这个球最大。","p":"zhè ge qiú zuì dà","i":"Bola ini adalah yang terbesar."},
{"l":1,"z":"别走，再等一下儿。","p":"bié zǒu zài děng yī xià r","i":"Jangan pergi, tunggu sebentar lagi."},
{"l":1,"z":"你先走，我们一块儿来。","p":"nǐ xiān zǒu wǒmen yīkuàir lái","i":"Kamu pergi dulu, kami menyusul."},
{"l":1,"z":"这个和那个一样。","p":"zhè ge hé nà ge yīyàng","i":"Yang ini sama dengan yang itu."},
{"l":1,"z":"我从家来，去过北京。","p":"wǒ cóng jiā lái qù guò běijīng","i":"Saya datang dari rumah dan pernah ke Beijing."},
{"l":1,"z":"还有一个人没来。","p":"háiyǒu yī gè rén méi lái","i":"Masih ada satu orang yang belum datang."},
{"l":1,"z":"有些人喝茶，有的人喝水。","p":"yǒuxiē rén hē chá yǒu de rén hē shuǐ","i":"Ada yang minum teh dan ada yang minum air."},
{"l":1,"z":"请给我一点儿水。","p":"qǐng gěi wǒ yīdiǎnr shuǐ","i":"Tolong beri saya sedikit air."},
{"l":1,"z":"别的东西我不要。","p":"biéde dōngxi wǒ bùyào","i":"Saya tidak menginginkan yang lain."},
{"l":1,"z":"他的房子很大。","p":"tā de fángzi hěn dà","i":"Rumahnya besar."},
{"l":1,"z":"车站在楼下。","p":"chēzhàn zài lóuxià","i":"Stasiun ada di lantai bawah."},
{"l":1,"z":"请给我一个杯子。","p":"qǐng gěi wǒ yī ge bēizi","i":"Tolong beri saya sebuah gelas."},
{"l":1,"z":"电视机要用电。","p":"diànshìjī yào yòng diàn","i":"Televisi menggunakan listrik."},
{"l":1,"z":"我的书包里有课本。","p":"wǒ de shūbāo lǐ yǒu kèběn","i":"Ada buku pelajaran di tas sekolahku."},
{"l":1,"z":"这是什么地方？我们在这个地点见面。","p":"zhè shì shénme dìfang wǒmen zài zhè ge dìdiǎn jiànmiàn","i":"Tempat apa ini? Kita bertemu di sini."},
{"l":1,"z":"他在国外学习。","p":"tā zài guówài xuéxí","i":"Dia belajar di luar negeri."},
{"l":1,"z":"我的电脑坏了。","p":"wǒ de diànnǎo huài le","i":"Komputer saya rusak."},
{"l":1,"z":"这个不对。","p":"zhè ge bù duì","i":"Ini salah."},
{"l":1,"z":"他不大高。","p":"tā bù dà gāo","i":"Dia tidak terlalu tinggi."},
{"l":1,"z":"这个杯子是白的。","p":"zhè ge bēizi shì bái de","i":"Cangkir ini berwarna putih."},
{"l":1,"z":"一元有十毛。","p":"yī yuán yǒu shí máo","i":"Satu yuan sama dengan sepuluh mao."},
{"l":1,"z":"我找到了书包。","p":"wǒ zhǎodào liǎo shūbāo","i":"Aku menemukan tas sekolahku."},
{"l":1,"z":"他得到了一个球。","p":"tā dédào liǎo yī ge qiú","i":"Dia mendapat bola."},
{"l":1,"z":"老师来到学校。","p":"lǎoshī láidào xuéxiào","i":"Guru datang ke sekolah."},
{"l":1,"z":"这个真的很好玩儿。","p":"zhè ge zhēnde hěn hǎowánr","i":"Ini sangat menyenangkan."},
{"l":1,"z":"没事儿，没什么。","p":"méishìr méishénme","i":"Tidak apa-apa, tidak ada masalah."},
{"l":1,"z":"明天见！","p":"míngtiān jiàn","i":"Sampai besok!"},
{"l":1,"z":"请读这个字。","p":"qǐng dú zhè ge zì","i":"Silakan baca kata ini."},
{"l":1,"z":"他进了房间。","p":"tā jìn le fángjiān","i":"Dia memasuki ruangan."},
{"l":1,"z":"老师在开会。","p":"lǎoshī zài kāihuì","i":"Guru sedang rapat."},
{"l":1,"z":"他喜欢开玩笑。","p":"tā xǐhuan kāiwánxiào","i":"Dia suka bercanda."},
{"l":1,"z":"请关门。","p":"qǐng guān mén","i":"Tolong tutup pintunya."},
{"l":1,"z":"我在中学学习，弟弟在小学。","p":"wǒ zài zhōngxué xuéxí dìdi zài xiǎoxué","i":"Aku duduk di bangku SMP dan adikku duduk di bangku SD."},
{"l":1,"z":"我等了一个小时。","p":"wǒ děng le yī ge xiǎoshí","i":"Saya menunggu selama satu jam."},
{"l":1,"z":"你什么时候来？","p":"nǐ shénme shíhou lái","i":"Kapan kamu akan datang?"},
{"l":1,"z":"今天的日期是几号？","p":"jīntiān de rìqī shì jǐ hào","i":"Tanggal berapa hari ini?"},
{"l":1,"z":"他有病，要去看病。","p":"tā yǒu bìng yào qù kànbìng","i":"Dia sakit dan perlu ke dokter."},
{"l":1,"z":"请给我票。","p":"qǐng gěi wǒ piào","i":"Tolong beri saya tiket."},
{"l":1,"z":"爷爷很老了。","p":"yéye hěn lǎo le","i":"Kakek sudah sangat tua."},
{"l":1,"z":"行，我们走吧。","p":"xíng wǒmen zǒu ba","i":"Oke, ayo pergi."},
{"l":1,"z":"现在是零点。","p":"xiànzài shì líng diǎn","i":"Sekarang tengah malam."},
{"l":1,"z":"这个饭很好吃。","p":"zhè ge fàn hěn hǎochī","i":"Makanan ini enak."},
{"l":1,"z":"这里人很少。","p":"zhèlǐ rén hěn shǎo","i":"Hanya ada sedikit orang di sini."},
{"l":1,"z":"别动！","p":"bié dòng","i":"Jangan bergerak!"},
{"l":1,"z":"这个动作很难。","p":"zhè ge dòngzuò hěn nán","i":"Gerakan ini sulit."},
{"l":1,"z":"我学了半年汉语。","p":"wǒ xué le bànnián hànyǔ","i":"Saya telah belajar bahasa Mandarin selama setengah tahun."},
{"l":1,"z":"上次你没来，下次要来。","p":"shàngcì nǐ méi lái xiàcì yào lái","i":"Kamu tidak datang terakhir kali, lain kali datang ya."},
{"l":1,"z":"他一边走一边唱。","p":"tā yībiān zǒu yībiān chàng","i":"Dia bernyanyi sambil berjalan."},
{"l":1,"z":"妈妈在家，爸爸不在家。","p":"māma zàijiā bàba bù zàijiā","i":"Ibu ada di rumah, ayah tidak."},
{"l":1,"z":"她们都是学生。","p":"tāmen dōu shì xuésheng","i":"Mereka semua adalah pelajar."},
{"l":1,"z":"小姐，请问现在几点？","p":"xiǎojie qǐngwèn xiànzài jǐ diǎn","i":"Permisi, sekarang jam berapa?"},
{"l":1,"z":"小孩儿在门口玩儿。","p":"xiǎoháir zài ménkǒu wánr","i":"Anak-anak sedang bermain di depan pintu."},
{"l":1,"z":"这是我第一次来。","p":"zhè shì wǒ dì yī cì lái","i":"Ini adalah pertama kalinya saya di sini."},
{"l":1,"z":"放学了，我们回家吧。","p":"fàngxué le wǒmen huíjiā ba","i":"Sekolah sudah usai, ayo pulang."},
{"l":1,"z":"我身上没有钱。","p":"wǒ shēnshang méiyǒu qián","i":"Saya tidak punya uang."},
{"l":1,"z":"那些书是我的。","p":"nàxiē shū shì wǒ de","i":"Buku-buku itu milikku."},
{"l":1,"z":"这间房子很大。","p":"zhè jiān fángzi hěn dà","i":"Rumah ini sangat besar."},
{"l":1,"z":"这个歌很好听。","p":"zhè ge gē hěn hǎotīng","i":"Lagu ini sangat bagus."},
{"l":1,"z":"东、南、西、北都有山。","p":"dōng nán xī běi dōu yǒu shān","i":"Terdapat pegunungan di timur, selatan, barat dan utara."},
{"l":1,"z":"现在是九点十分。","p":"xiànzài shì jiǔ diǎn shífēn","i":"Sekarang jam sembilan lewat sepuluh."},
{"l":1,"z":"这个是女的，那个是男的。","p":"zhè ge shì nǚ de nà ge shì nán de","i":"Yang ini perempuan, yang itu laki-laki."},
{"l":1,"z":"我常去那个商店。","p":"wǒ cháng qù nà ge shāngdiàn","i":"Saya sering pergi ke toko itu."},
{"l":1,"z":"差一点儿就好了。","p":"chàyīdiǎnr jiù hǎo le","i":"Hampir berhasil."},
{"l":2,"z":"欢迎大家来我们学校！","p":"huānyíng dàjiā lái wǒmen xuéxiào","i":"Selamat datang semuanya di sekolah kami!"},
{"l":2,"z":"晚安，明天见。","p":"wǎnān míngtiān jiàn","i":"Selamat malam, sampai jumpa besok."},
{"l":2,"z":"不好意思，我来晚了。","p":"bùhǎoyìsi wǒ lái wǎn le","i":"Maaf, saya terlambat."},
{"l":2,"z":"谢谢你的帮助。","p":"xièxie nǐ de bāngzhù","i":"Terima kasih atas bantuanmu."},
{"l":2,"z":"一路顺风，早点儿回来！","p":"yīlùshùnfēng zǎodiǎnr huílai","i":"Semoga perjalananmu aman dan segera kembali!"},
{"l":2,"z":"一路平安，到了给我打电话。","p":"yīlùpíngān dào liǎo gěi wǒ dǎdiànhuà","i":"Semoga perjalananmu aman; telepon aku kalau sudah sampai."},
{"l":2,"z":"大家好，我来介绍一下自己。","p":"dàjiā hǎo wǒ lái jièshào yī xià zìjǐ","i":"Halo semuanya, izinkan saya memperkenalkan diri."},
{"l":2,"z":"请大家安静，先听我讲。","p":"qǐng dàjiā ānjìng xiān tīng wǒ jiǎng","i":"Harap diam dan dengarkan aku dulu."},
{"l":2,"z":"喂，你好，请问是哪位？","p":"wèi nǐ hǎo qǐngwèn shì nǎ wèi","i":"Halo, siapa ini?"},
{"l":2,"z":"好久不见，你去哪儿了？","p":"hǎojiǔ bujiàn nǐ qù nǎr le","i":"Lama tidak bertemu, dari mana saja kamu?"},
{"l":2,"z":"我们班的班长很友好。","p":"wǒmen bān de bānzhǎng hěn yǒuhǎo","i":"Ketua kelas kami sangat ramah."},
{"l":2,"z":"他是我们的组长，也是我的老朋友。","p":"tā shì wǒmen de zǔzhǎng yě shì wǒ de lǎopéngyou","i":"Dia adalah pemimpin tim kami dan teman lama saya."},
{"l":2,"z":"她是一位年轻的教师。","p":"tā shì yī wèi niánqīng de jiàoshī","i":"Dia adalah seorang guru muda."},
{"l":2,"z":"这位先生是有名的商人。","p":"zhè wèi xiānsheng shì yǒumíng de shāngrén","i":"Pria ini adalah seorang pengusaha terkenal."},
{"l":2,"z":"我爱人是医生，在医院工作。","p":"wǒ àiren shì yīshēng zài yīyuàn gōngzuò","i":"Pasangan saya adalah seorang dokter dan bekerja di rumah sakit."},
{"l":2,"z":"他太太是一位画家。","p":"tā tàitai shì yī wèi huàjiā","i":"Istrinya adalah seorang pelukis."},
{"l":2,"z":"这位作家写了很多小说。","p":"zhè wèi zuòjiā xiě le hěn duō xiǎoshuō","i":"Penulis ini menulis banyak novel."},
{"l":2,"z":"那个司机开车很小心。","p":"nà ge sījī kāichē hěn xiǎoxīn","i":"Sopir mengemudi dengan sangat hati-hati."},
{"l":2,"z":"咱们都是同事，别客气。","p":"zánmen dōu shì tóngshì bié kèqi","i":"Kita semua rekan kerja, jangan sungkan."},
{"l":2,"z":"它是我家的猫，它们是我家的狗。","p":"tā shì wǒ jiā de māo tāmen shì wǒ jiā de gǒu","i":"Ini kucingku, dan itu anjing-anjingku."},
{"l":2,"z":"大多数考生的成绩都不错。","p":"dàduōshù kǎoshēng de chéngjì dōu bùcuò","i":"Sebagian besar peserta ujian mendapat nilai bagus."},
{"l":2,"z":"我从小在北方长大。","p":"wǒ cóngxiǎo zài běifāng zhǎngdà","i":"Saya tumbuh besar di utara."},
{"l":2,"z":"他出生在南方。","p":"tā chūshēng zài nánfāng","i":"Dia lahir di selatan."},
{"l":2,"z":"这个青年很有理想。","p":"zhè ge qīngnián hěn yǒu lǐxiǎng","i":"Pemuda ini sangat idealis."},
{"l":2,"z":"他是我们球队的队长。","p":"tā shì wǒmen qiúduì de duìzhǎng","i":"Dia adalah kapten tim kami."},
{"l":2,"z":"大人和孩子都爱看这个节目。","p":"dàren hé háizi dōu ài kàn zhè ge jiémù","i":"Baik orang dewasa maupun anak-anak suka menonton pertunjukan ini."},
{"l":2,"z":"老年人喜欢安静的地方。","p":"lǎonián rén xǐhuan ānjìng de dìfāng","i":"Orang lanjut usia menyukai tempat yang tenang."},
{"l":2,"z":"这个网站是给青少年的。","p":"zhè ge wǎngzhàn shì gěi qīngshàonián de","i":"Situs ini ditujukan untuk remaja."},
{"l":2,"z":"我们全家都爱吃饺子。","p":"wǒmen quánjiā dōu ài chī jiǎozi","i":"Seluruh keluarga kami suka makan pangsit."},
{"l":2,"z":"过年的时候，全家人在一起吃饭。","p":"guònián de shíhou quánjiā rén zài yīqǐ chīfàn","i":"Saat Tahun Baru Imlek, seluruh keluarga makan bersama."},
{"l":2,"z":"我家有一个小院子。","p":"wǒ jiā yǒu yī ge xiǎo yuànzi","i":"Rumahku mempunyai halaman yang kecil."},
{"l":2,"z":"妈妈年轻的时候很漂亮。","p":"māma niánqīng de shíhou hěn piàoliang","i":"Ibu sangat cantik ketika dia masih muda."},
{"l":2,"z":"爸爸的收入比以前高了。","p":"bàba de shōurù bǐ yǐqián gāo le","i":"Penghasilan ayah lebih tinggi dari sebelumnya."},
{"l":2,"z":"孩子长大了，应该照顾自己。","p":"háizi zhǎngdà le yīnggāi zhàogu zìjǐ","i":"Anak yang sudah tumbuh dewasa harus merawat dirinya sendiri."},
{"l":2,"z":"爷爷平时喜欢看报纸。","p":"yéye píngshí xǐhuan kàn bàozhǐ","i":"Kakek biasanya suka membaca koran."},
{"l":2,"z":"妈妈让我早点儿回家。","p":"māma ràng wǒ zǎodiǎnr huíjiā","i":"Ibu memintaku pulang lebih awal."},
{"l":2,"z":"家庭对孩子的影响很大。","p":"jiātíng duì háizi de yǐngxiǎng hěn dà","i":"Keluarga mempunyai pengaruh yang besar terhadap anak."},
{"l":2,"z":"老师给家长打了电话。","p":"lǎoshī gěi jiāzhǎng dǎ le diànhuà","i":"Guru menelepon orang tua murid."},
{"l":2,"z":"狗见到主人很开心。","p":"gǒu jiàndào zhǔrén hěn kāixīn","i":"Anjing itu senang melihat pemiliknya."},
{"l":2,"z":"家里来客人了。","p":"jiālǐ lái kèrén le","i":"Ada tamu di rumah."},
{"l":2,"z":"我买了两斤鱼和一公斤肉。","p":"wǒ mǎi le liǎng jīn yú hé yī gōngjīn ròu","i":"Saya membeli dua jin ikan (sekitar satu kilogram) dan satu kilogram daging."},
{"l":2,"z":"这条路长五公里。","p":"zhè tiáo lù cháng wǔ gōng lǐ","i":"Jalan ini panjangnya lima kilometer."},
{"l":2,"z":"一千克就是一公斤。","p":"yī qiānkè jiùshì yī gōngjīn","i":"Satu kilogram (千克) sama dengan satu kilogram (公斤)."},
{"l":2,"z":"我们学校有一万名学生。","p":"wǒmen xuéxiào yǒu yī wàn míng xuésheng","i":"Ada sepuluh ribu siswa di sekolah kami."},
{"l":2,"z":"中国有十四亿人口。","p":"zhōngguó yǒu shí sì yì rénkǒu","i":"Tiongkok mempunyai populasi sebesar 1,4 miliar jiwa."},
{"l":2,"z":"大部分学生都参加了活动。","p":"dàbùfen xuésheng dōu cānjiā le huódòng","i":"Sebagian besar siswa berpartisipasi dalam acara tersebut."},
{"l":2,"z":"许多游客在广场上照相。","p":"xǔduō yóukè zài guǎngchǎng shàng zhàoxiàng","i":"Banyak wisatawan mengambil foto di alun-alun."},
{"l":2,"z":"这本书我读了两遍。","p":"zhè běn shū wǒ dú le liǎng biàn","i":"Saya membaca buku ini dua kali."},
{"l":2,"z":"这座楼有二十层。","p":"zhè zuò lóu yǒu èr shí céng","i":"Gedung ini memiliki dua puluh lantai."},
{"l":2,"z":"我写了一篇作文。","p":"wǒ xiě le yī piān zuòwén","i":"Saya menulis esai."},
{"l":2,"z":"他给我发了一条短信。","p":"tā gěi wǒ fā le yī tiáo duǎnxìn","i":"Dia mengirimiku pesan teks."},
{"l":2,"z":"我收到了一封信。","p":"wǒ shōudào liǎo yī fēng xìn","i":"Saya menerima surat."},
{"l":2,"z":"买一套课本一共一百块。","p":"mǎi yī tào kèběn yīgòng yì bǎi kuài","i":"Membeli satu set buku pelajaran totalnya seratus yuan."},
{"l":2,"z":"少数人不愿意去。","p":"shǎoshù rén bù yuànyì qù","i":"Beberapa orang tidak mau pergi."},
{"l":2,"z":"好多人在排队。","p":"hǎoduō rén zài páiduì","i":"Banyak orang yang mengantri."},
{"l":2,"z":"人数超过了一百。","p":"rénshù chāoguò le yì bǎi","i":"Ada lebih dari seratus orang."},
{"l":2,"z":"请数一数有多少人。","p":"qǐng shǔ yī shǔ yǒu duō shǎo rén","i":"Tolong hitung ada berapa orang di sana."},
{"l":2,"z":"他读了大量的书。","p":"tā dú le dàliàng de shū","i":"Dia membaca banyak buku."},
{"l":2,"z":"我有十本书，其中三本是小说。","p":"wǒ yǒu shí běn shū qízhōng sān běn shì xiǎoshuō","i":"Saya punya sepuluh buku, tiga di antaranya novel."},
{"l":2,"z":"这个蛋有五十克。","p":"zhè ge dàn yǒu wǔ shí kè","i":"Telur ini beratnya lima puluh gram."},
{"l":2,"z":"这本书五块四角。","p":"zhè běn shū wǔ kuài sì jiǎo","i":"Buku ini lima yuan empat jiao."},
{"l":2,"z":"下个月是学校二十周年。","p":"xiàgeyuè shì xuéxiào èr shí zhōunián","i":"Bulan depan adalah ulang tahun ke-20 sekolah."},
{"l":2,"z":"春天来了，花都开了。","p":"chūntiān lái le huā dū kāi le","i":"Musim semi telah tiba dan bunga-bunga bermekaran."},
{"l":2,"z":"夏天很热，冬天很冷。","p":"xiàtiān hěn rè dōngtiān hěn lěng","i":"Panas di musim panas dan dingin di musim dingin."},
{"l":2,"z":"秋天是爬山的好时候。","p":"qiūtiān shì páshān de hǎo shíhou","i":"Musim gugur adalah waktu yang tepat untuk mendaki gunung."},
{"l":2,"z":"春节是中国最重要的节日。","p":"chūnjié shì zhōngguó zuì zhòngyào de jiérì","i":"Imlek adalah festival terpenting di Tiongkok."},
{"l":2,"z":"周末你有空儿吗？","p":"zhōumò nǐ yǒu kòngr ma","i":"Apakah kamu punya waktu luang di akhir pekan?"},
{"l":2,"z":"上周我去了海边。","p":"shàngzhōu wǒ qù le hǎibiān","i":"Minggu lalu saya pergi ke pantai."},
{"l":2,"z":"下周开学，我要复习生词。","p":"xiàzhōu kāixué wǒ yào fùxí shēngcí","i":"Minggu depan sekolah mulai, aku harus mengulang kosakata baru."},
{"l":2,"z":"我早晨六点就起床了。","p":"wǒ zǎochén liù diǎn jiù qǐchuáng le","i":"Saya bangun jam enam pagi."},
{"l":2,"z":"昨天半夜下雪了。","p":"zuótiān bànyè xiàxuě le","i":"Tengah malam tadi turun salju."},
{"l":2,"z":"夜里很安静。","p":"yèli hěn ānjìng","i":"Suasana sepi di malam hari."},
{"l":2,"z":"刚才有人给你打电话。","p":"gāngcái yǒurén gěi nǐ dǎdiànhuà","i":"Seseorang baru saja meneleponmu."},
{"l":2,"z":"最近我特别忙。","p":"zuìjìn wǒ tèbié máng","i":"Aku sangat sibuk akhir-akhir ini."},
{"l":2,"z":"后来他去外地工作了。","p":"hòulái tā qù wàidì gōngzuò le","i":"Kemudian dia pergi bekerja di tempat lain."},
{"l":2,"z":"当时我还是小学生。","p":"dāngshí wǒ háishi xiǎoxuésheng","i":"Saat itu saya masih duduk di bangku sekolah dasar."},
{"l":2,"z":"假期我打算去旅行。","p":"jiàqī wǒ dǎsuàn qù lǚxíng","i":"Saya berencana untuk bepergian selama liburan."},
{"l":2,"z":"十月是我最喜欢的月份。","p":"shí yuè shì wǒ zuì xǐhuan de yuèfèn","i":"Oktober adalah bulan favoritku."},
{"l":2,"z":"前年我还在高中。","p":"qiánnián wǒ hái zài gāozhōng","i":"Dua tahun lalu saya masih di SMA."},
{"l":2,"z":"小时候我怕黑。","p":"xiǎoshíhou wǒ pà hēi","i":"Sebagai seorang anak saya takut pada kegelapan."},
{"l":2,"z":"等到明年春天，我们再见面。","p":"děngdào míngnián chūntiān wǒmen zàijiàn miàn","i":"Sampai bertemu lagi musim semi tahun depan."},
{"l":2,"z":"那时我还小，很多事不懂。","p":"nàshí wǒ hái xiǎo hěn duō shì bù dǒng","i":"Saya masih muda saat itu dan belum memahami banyak hal."},
{"l":2,"z":"这时候路上行人很少。","p":"zhèshíhou lùshang xíngrén hěn shǎo","i":"Hanya ada sedikit pejalan kaki di jalan saat ini."},
{"l":2,"z":"今后我会常来看你。","p":"jīnhòu wǒ huì cháng lái kàn nǐ","i":"Aku akan sering datang menemuimu mulai sekarang."},
{"l":2,"z":"这周我很忙，下周好一点儿。","p":"zhè zhōu wǒ hěn máng xiàzhōu hǎo yīdiǎnr","i":"Saya sangat sibuk minggu ini, minggu depan akan lebih baik."},
{"l":2,"z":"现在正是吃饺子的时候。","p":"xiànzài zhèngshì chī jiǎozi de shíhou","i":"Sekarang waktunya makan pangsit."},
{"l":2,"z":"现在是三点一刻。","p":"xiànzài shì sān diǎn yī kè","i":"Sekarang jam tiga seperempat."},
{"l":2,"z":"我先洗澡，然后睡觉。","p":"wǒ xiān xǐzǎo ránhòu shuìjiào","i":"Aku mandi dulu lalu tidur."},
{"l":2,"z":"中午我有午睡的习惯。","p":"zhōngwǔ wǒ yǒu wǔshuì de xíguàn","i":"Saya mempunyai kebiasaan tidur siang."},
{"l":2,"z":"出门以前，别忘了关灯。","p":"chūmén yǐqián bié wàng le guān dēng","i":"Jangan lupa mematikan lampu sebelum keluar."},
{"l":2,"z":"他一边听音乐，一边干活儿。","p":"tā yībiān tīng yīnyuè yībiān gànhuór","i":"Dia mendengarkan musik dan bekerja pada saat yang bersamaan."},
{"l":2,"z":"请放下手机，先吃饭。","p":"qǐng fàngxià shǒujī xiān chīfàn","i":"Tolong letakkan ponselmu dan makan dulu."},
{"l":2,"z":"他拿出笔记本记生词。","p":"tā náchū bǐjìběn jì shēngcí","i":"Dia mengeluarkan buku catatannya untuk menuliskan kata-kata baru."},
{"l":2,"z":"用筷子吃面很方便。","p":"yòng kuàizi chī miàn hěn fāngbiàn","i":"Makan mi pakai sumpit sangat praktis."},
{"l":2,"z":"他喊我过去帮忙。","p":"tā hǎn wǒ guòqù bāngmáng","i":"Dia memanggil saya untuk membantu."},
{"l":2,"z":"请小声一点儿，别大声讲话。","p":"qǐng xiǎoshēng yīdiǎnr bié dàshēng jiǎnghuà","i":"Tolong kecilkan suaramu dan jangan bicara keras-keras."},
{"l":2,"z":"我推门走进教室。","p":"wǒ tuī mén zǒujìn jiàoshì","i":"Aku membuka pintu dan masuk ke dalam kelas."},
{"l":2,"z":"他拉着我的手过马路。","p":"tā lā zhe wǒ de shǒu guò mǎlù","i":"Dia memegang tanganku dan menyeberang jalan."},
{"l":2,"z":"别靠墙站着。","p":"bié kào qiáng zhàn zhe","i":"Jangan berdiri bersandar pada dinding."},
{"l":2,"z":"我闻到了饭的味道。","p":"wǒ wén dào liǎo fàn de wèidao","i":"Aku mencium bau makanannya."},
{"l":2,"z":"电话响了，请接一下。","p":"diànhuà xiǎng le qǐng jiē yī xià","i":"Telepon berbunyi, tolong angkat."},
{"l":2,"z":"我碰到了一位老朋友。","p":"wǒ pèngdào liǎo yī wèi lǎopéngyou","i":"Saya bertemu dengan seorang teman lama."},
{"l":2,"z":"昨天在街上碰见了同学。","p":"zuótiān zài jiē shang pèngjiàn le tóngxué","i":"Saya bertemu teman sekelas saya di jalan kemarin."},
{"l":2,"z":"他点头答应了。","p":"tā diǎntóu dāying le","i":"Dia mengangguk setuju."},
{"l":2,"z":"请举手回答问题。","p":"qǐng jǔshǒu huídá wèntí","i":"Silakan angkat tangan untuk menjawab pertanyaan tersebut."},
{"l":2,"z":"小心，杯子要掉了！","p":"xiǎoxīn bēizi yào diào le","i":"Hati-hati, cangkirnya akan jatuh!"},
{"l":2,"z":"别哭了，慢慢讲。","p":"bié kū le mànmàn jiǎng","i":"Berhentilah menangis dan bicaralah perlahan."},
{"l":2,"z":"我帮你倒一杯水。","p":"wǒ bāng nǐ dào yī bēi shuǐ","i":"Biarkan aku mengambilkanmu segelas air."},
{"l":2,"z":"请排好队，从入口进去。","p":"qǐng pái hǎo duì cóng rùkǒu jìnqù","i":"Silakan berbaris dan masuk melalui pintu masuk."},
{"l":2,"z":"衣服脏了，我去洗。","p":"yīfu zāng le wǒ qù xǐ","i":"Bajuku kotor, aku akan mencucinya."},
{"l":2,"z":"我家养了两条鱼。","p":"wǒ jiā yǎng le liǎng tiáo yú","i":"Saya punya dua ikan di rumah."},
{"l":2,"z":"他从包里拿出一份报纸。","p":"tā cóng bāo lǐ náchū yī fèn bàozhǐ","i":"Dia mengambil koran dari tasnya."},
{"l":2,"z":"别弄脏了新衣服。","p":"bié nòng zāng le xīn yīfu","i":"Jangan sampai baju barumu kotor."},
{"l":2,"z":"饭吃完了，碗我来洗。","p":"fàn chī wán le wǎn wǒ lái xǐ","i":"Setelah makan selesai, saya akan mencuci piring."},
{"l":2,"z":"别走开，等我一下。","p":"bié zǒukāi děng wǒ yī xià","i":"Jangan pergi, tunggu aku."},
{"l":2,"z":"我们分开走，一会儿见。","p":"wǒmen fēnkāi zǒu yīhuìr jiàn","i":"Kita berpisah dulu, sampai jumpa."},
{"l":2,"z":"他大声地喊我的名字。","p":"tā dàshēng dì hǎn wǒ de míngzi","i":"Dia meneriakkan namaku dengan keras."},
{"l":2,"z":"这件事咱们商量一下。","p":"zhè jiàn shì zánmen shāngliang yī xià","i":"Mari kita bahas masalah ini."},
{"l":2,"z":"请留下你的电话。","p":"qǐng liúxià nǐ de diànhuà","i":"Silakan tinggalkan nomor teleponmu."},
{"l":2,"z":"他留在家里看孩子。","p":"tā liú zài jiālǐ kàn háizi","i":"Dia tinggal di rumah untuk menjaga anak-anak."},
{"l":2,"z":"我爱交朋友。","p":"wǒ ài jiāopéngyou","i":"Saya suka berteman."},
{"l":2,"z":"这个卡怎么使用？","p":"zhè ge kǎ zěnme shǐyòng","i":"Bagaimana cara menggunakan kartu ini?"},
{"l":2,"z":"你算一下一共多少钱。","p":"nǐ suàn yī xià yīgòng duōshǎo qián","i":"Hitung berapa total biayanya."},
{"l":2,"z":"这件事我来办。","p":"zhè jiàn shì wǒ lái bàn","i":"Saya akan mengurus ini."},
{"l":2,"z":"新学期就要到了。","p":"xīn xuéqī jiùyào dào liǎo","i":"Semester baru segera tiba."},
{"l":2,"z":"我在读高中二年级。","p":"wǒ zài dú gāozhōng èr niánjí","i":"Saya duduk di kelas dua SMA."},
{"l":2,"z":"老师在黑板上写生词。","p":"lǎoshī zài hēibǎn shàng xiě shēngcí","i":"Guru menulis kata-kata baru di papan tulis."},
{"l":2,"z":"这个词的读音很难。","p":"zhè ge cí de dúyīn hěn nán","i":"Pengucapan kata ini sulit."},
{"l":2,"z":"不懂的词语可以查词典。","p":"bù dǒng de cíyǔ kěyǐ chá cídiǎn","i":"Kata yang tidak kamu mengerti bisa dicari di kamus."},
{"l":2,"z":"他普通话说得很流利。","p":"tā pǔtōnghuà shuō de hěn liúlì","i":"Dia berbicara bahasa Mandarin dengan lancar."},
{"l":2,"z":"我会说一点儿英语。","p":"wǒ huì shuō yīdiǎnr yīngyǔ","i":"Saya bisa berbicara sedikit bahasa Inggris."},
{"l":2,"z":"我的成绩比上次提高了。","p":"wǒ de chéngjì bǐ shàngcì tígāo le","i":"Nilaiku meningkat dibandingkan sebelumnya."},
{"l":2,"z":"考试的时候要认真检查。","p":"kǎoshì de shíhou yào rènzhēn jiǎnchá","i":"Saat ujian, periksa jawaban dengan teliti."},
{"l":2,"z":"老师要求我们重复练习。","p":"lǎoshī yāoqiú wǒmen chóngfù liànxí","i":"Guru meminta kami mengulangi latihan tersebut."},
{"l":2,"z":"作业写完了交给老师。","p":"zuòyè xiě wán le jiāogěi lǎoshī","i":"Jika pekerjaan rumah sudah selesai, serahkan kepada guru."},
{"l":2,"z":"他取得了很好的分数。","p":"tā qǔdé le hěn hǎo de fēnshù","i":"Dia mendapat nilai yang sangat bagus."},
{"l":2,"z":"我报名参加了学校的球队。","p":"wǒ bàomíng cānjiā le xuéxiào de qiúduì","i":"Saya mendaftar dan bergabung dengan tim sekolah."},
{"l":2,"z":"校长在晚会上讲话。","p":"xiàozhǎng zài wǎnhuì shàng jiǎnghuà","i":"Kepala sekolah berpidato di acara malam."},
{"l":2,"z":"班长通知大家明天开会。","p":"bānzhǎng tōngzhī dàjiā míngtiān kāihuì","i":"Ketua kelas memberi tahu bahwa besok ada rapat."},
{"l":2,"z":"我们小组讨论了这个难题。","p":"wǒmen xiǎozǔ tǎolùn le zhè ge nántí","i":"Kelompok kami mendiskusikan soal sulit ini."},
{"l":2,"z":"请说明你的观点。","p":"qǐng shuōmíng nǐ de guāndiǎn","i":"Tolong jelaskan sudut pandangmu."},
{"l":2,"z":"大家提出了很多好的意见。","p":"dàjiā tíchū le hěn duō hǎo de yìjiàn","i":"Semua orang mengemukakan banyak pendapat bagus."},
{"l":2,"z":"他的看法和我的想法不同。","p":"tā de kànfǎ hé wǒ de xiǎngfǎ bùtóng","i":"Pendapatnya berbeda dengan pendapat saya."},
{"l":2,"z":"留学生们在学普通话。","p":"liúxuésheng men zài xué pǔtōnghuà","i":"Siswa internasional sedang belajar bahasa Mandarin."},
{"l":2,"z":"校园里很安静。","p":"xiàoyuán lǐ hěn ānjìng","i":"Suasana kampus sangat tenang."},
{"l":2,"z":"我们教室的座位不够了。","p":"wǒmen jiàoshì de zuòwèi bùgòu le","i":"Kursi di kelas kami tidak cukup."},
{"l":2,"z":"上课要认真听讲。","p":"shàngkè yào rènzhēn tīngjiǎng","i":"Dengarkan baik-baik di kelas."},
{"l":2,"z":"我会背这篇课文。","p":"wǒ huì bèi zhè piān kèwén","i":"Saya bisa menghafal teks ini."},
{"l":2,"z":"经理在办公室等你。","p":"jīnglǐ zài bàngōngshì děng nǐ","i":"Manajer sedang menunggu kamu di kantor."},
{"l":2,"z":"公司的同事都很热情。","p":"gōngsī de tóngshì dōu hěn rèqíng","i":"Rekan-rekan di perusahaan sangat ramah."},
{"l":2,"z":"我在一家饭馆打工。","p":"wǒ zài yī jiā fànguǎn dǎgōng","i":"Saya bekerja paruh waktu di sebuah restoran."},
{"l":2,"z":"他去公司实习了。","p":"tā qù gōngsī shíxí le","i":"Dia pergi ke perusahaan untuk magang."},
{"l":2,"z":"这个工作条件不错。","p":"zhè ge gōngzuò tiáojiàn bùcuò","i":"Kondisi kerja baik."},
{"l":2,"z":"我们必须在周末以前完成计划。","p":"wǒmen bìxū zài zhōumò yǐqián wánchéng jìhuà","i":"Kami harus menyelesaikan rencana sebelum akhir pekan."},
{"l":2,"z":"单位离我家很近。","p":"dānwèi lí wǒ jiā hěn jìn","i":"Tempat kerjaku sangat dekat dengan rumah."},
{"l":2,"z":"他工作十分认真。","p":"tā gōngzuò shífēn rènzhēn","i":"Dia bekerja dengan sangat serius."},
{"l":2,"z":"我打算明年出国。","p":"wǒ dǎsuàn míngnián chūguó","i":"Saya berencana pergi ke luar negeri tahun depan."},
{"l":2,"z":"学校举行了一个晚会。","p":"xuéxiào jǔxíng le yī ge wǎnhuì","i":"Sekolah mengadakan acara malam."},
{"l":2,"z":"我们五个人组成一个小组。","p":"wǒmen wǔ gè rén zǔchéng yī ge xiǎozǔ","i":"Kami berlima membentuk kelompok."},
{"l":2,"z":"爸爸下周休假。","p":"bàba xiàzhōu xiūjià","i":"Ayah akan mengambil cuti minggu depan."},
{"l":2,"z":"他是这个市的市长。","p":"tā shì zhè ge shì de shìzhǎng","i":"Dia adalah wali kota ini."},
{"l":2,"z":"爷爷的一生都在教书。","p":"yé ye de yī shēng dōu zài jiāo shū","i":"Kakek telah mengajar sepanjang hidupnya."},
{"l":2,"z":"银行对面有一家药店。","p":"yínháng duìmiàn yǒu yī jiā yàodiàn","i":"Ada apotek di seberang bank."},
{"l":2,"z":"超市的入口在大门左边。","p":"chāoshì de rùkǒu zài dàmén zuǒbian","i":"Pintu masuk supermarket berada di sisi kiri pintu utama."},
{"l":2,"z":"出口在那边，请往前走。","p":"chūkǒu zài nàbian qǐng wǎng qián zǒu","i":"Pintu keluarnya ada di sana, silakan maju."},
{"l":2,"z":"市中心有一个大广场。","p":"shì zhōngxīn yǒu yī ge dà guǎngchǎng","i":"Ada sebuah alun-alun besar di pusat kota."},
{"l":2,"z":"这条街上有很多店。","p":"zhè tiáo jiē shang yǒu hěn duō diàn","i":"Ada banyak toko di jalan ini."},
{"l":2,"z":"学校面前是一条公路。","p":"xuéxiào miànqián shì yī tiáo gōnglù","i":"Di depan sekolah ada jalan raya."},
{"l":2,"z":"我在路边等你。","p":"wǒ zài lùbiān děng nǐ","i":"Aku akan menunggumu di pinggir jalan."},
{"l":2,"z":"我来自中国东北。","p":"wǒ láizì zhōngguó dōngběi","i":"Saya dari Tiongkok timur laut."},
{"l":2,"z":"西南的天气和北方很不同。","p":"xīnán de tiānqì hé běifāng hěn bùtóng","i":"Cuaca di barat daya sangat berbeda dengan di utara."},
{"l":2,"z":"房间里头很凉快。","p":"fángjiān lǐtou hěn liángkuai","i":"Di dalam ruangan itu sejuk."},
{"l":2,"z":"心里有话就说出来。","p":"xīnli yǒu huà jiù shuō chūlái","i":"Katakan apa yang ada di pikiranmu."},
{"l":2,"z":"他站在我身边。","p":"tā zhàn zài wǒ shēnbiān","i":"Dia berdiri di sampingku."},
{"l":2,"z":"东、西方的做法不一样。","p":"dōng xīfāng de zuòfǎ bù yīyàng","i":"Cara Timur dan Barat berbeda."},
{"l":2,"z":"火车进入了车站。","p":"huǒchē jìnrù le chēzhàn","i":"Kereta memasuki stasiun."},
{"l":2,"z":"他家的大门向东南。","p":"tā jiā de dàmén xiàng dōngnán","i":"Gerbang rumahnya menghadap ke tenggara."},
{"l":2,"z":"我们走到了路口的中间。","p":"wǒmen zǒu dào liǎo lùkǒu de zhōngjiān","i":"Kami sampai di tengah persimpangan."},
{"l":2,"z":"我坐地铁去上班。","p":"wǒ zuò dìtiě qù shàngbān","i":"Saya naik kereta bawah tanah ke tempat kerja."},
{"l":2,"z":"地铁站里人很多。","p":"dìtiězhàn lǐ rén hěn duō","i":"Ada banyak orang di stasiun kereta bawah tanah."},
{"l":2,"z":"你可以坐公共汽车去。","p":"nǐ kěyǐ zuò gōnggòngqìchē qù","i":"Kamu bisa pergi dengan bus."},
{"l":2,"z":"公交车来了，快上车！","p":"gōngjiāochē lái le kuài shàngchē","i":"Busnya datang, cepat naik!"},
{"l":2,"z":"出租车比地铁贵。","p":"chūzūchē bǐ dìtiě guì","i":"Taksi lebih mahal daripada kereta bawah tanah."},
{"l":2,"z":"我会骑自行车。","p":"wǒ huì qí zìxíngchē","i":"Dia bersepeda ke sekolah."},
{"l":2,"z":"他骑车去学校。","p":"tā qíchē qù xuéxiào","i":"Dia mengemudi ke sekolah."},
{"l":2,"z":"我们坐船过河。","p":"wǒmen zuò chuán guò hé","i":"Kami naik perahu menyeberangi sungai."},
{"l":2,"z":"飞机就要起飞了。","p":"fēijī jiùyào qǐfēi le","i":"Pesawat akan lepas landas."},
{"l":2,"z":"出国要带护照。","p":"chūguó yào dài hùzhào","i":"Kamu perlu membawa paspor saat ke luar negeri."},
{"l":2,"z":"他下个月回国。","p":"tā xiàgeyuè huíguó","i":"Dia akan pulang ke negaranya bulan depan."},
{"l":2,"z":"这次旅行很顺利。","p":"zhè cì lǚxíng hěn shùnlì","i":"Perjalanan berjalan lancar."},
{"l":2,"z":"旅客们在排队上车。","p":"lǚkè men zài páiduì shàngchē","i":"Penumpang mengantri untuk naik bus."},
{"l":2,"z":"路上车辆很多，要小心。","p":"lùshang chēliàng hěn duō yào xiǎoxīn","i":"Ada banyak kendaraan di jalan, jadi berhati-hatilah."},
{"l":2,"z":"这里交通很方便，坐车十分钟就到。","p":"zhèlǐ jiāotōng hěn fāngbiàn zuò chē shífēn zhōng jiù dào","i":"Transportasi di sini sangat mudah; naik kendaraan, sepuluh menit sampai."},
{"l":2,"z":"停车场在酒店后边。","p":"tíngchēchǎng zài jiǔdiàn hòubian","i":"Tempat parkir berada di belakang hotel."},
{"l":2,"z":"这里不能停车。","p":"zhèlǐ bù néng tíngchē","i":"Di sini tidak boleh parkir."},
{"l":2,"z":"我们从学校出发。","p":"wǒmen cóng xuéxiào chūfā","i":"Kita mulai dari sekolah."},
{"l":2,"z":"他向我问路。","p":"tā xiàng wǒ wènlù","i":"Dia menanyakan arah padaku."},
{"l":2,"z":"经过公园，就到我家了。","p":"jīngguò gōngyuán jiù dào wǒ jiā le","i":"Setelah melewati taman, kami sampai di rumahku."},
{"l":2,"z":"走过这条街就是超市。","p":"zǒuguò zhè tiáo jiē jiùshì chāoshì","i":"Setelah melewati jalan ini, ada supermarket."},
{"l":2,"z":"车开得太快，太可怕了。","p":"chē kāi dé tài kuài tài kěpà le","i":"Mobil itu melaju terlalu cepat dan menakutkan."},
{"l":2,"z":"超市的东西比店里便宜。","p":"chāoshì de dōngxi bǐ diàn lǐ biànyí","i":"Barang-barang di supermarket lebih murah daripada di toko."},
{"l":2,"z":"这件大衣有点儿贵。","p":"zhè jiàn dàyī yǒudiǎnr guì","i":"Mantel ini agak mahal."},
{"l":2,"z":"我想买球鞋，你呢？","p":"wǒ xiǎng mǎi qiúxié nǐ ne","i":"Saya ingin membeli sepatu kets, kalau kamu?"},
{"l":2,"z":"这件衣服大小正好。","p":"zhè jiàn yīfu dàxiǎo zhènghǎo","i":"Baju ini ukurannya pas."},
{"l":2,"z":"可以用信用卡吗？","p":"kěyǐ yòng xìnyòngkǎ ma","i":"Bisakah saya menggunakan kartu kredit?"},
{"l":2,"z":"我的银行卡在钱包里。","p":"wǒ de yínhángkǎ zài qiánbāo lǐ","i":"Kartu bank saya ada di dompet saya."},
{"l":2,"z":"你可以去银行换钱。","p":"nǐ kěyǐ qù yínháng huàn qián","i":"Kamu bisa pergi ke bank untuk menukar uang."},
{"l":2,"z":"这家店卖的东西很普通。","p":"zhè jiā diàn mài de dōngxi hěn pǔtōng","i":"Barang yang dijual di toko ini sangat biasa saja."},
{"l":2,"z":"店里的顾客很多。","p":"diàn lǐ de gùkè hěn duō","i":"Ada banyak pelanggan di toko."},
{"l":2,"z":"广告上说这个很好用。","p":"guǎnggào shàng shuō zhè ge hěn hǎo yòng","i":"Iklan mengatakan ini sangat praktis."},
{"l":2,"z":"我对这家店的服务很满意。","p":"wǒ duì zhè jiā diàn de fúwù hěn mǎnyì","i":"Saya sangat puas dengan pelayanan toko ini."},
{"l":2,"z":"我租了一个小房子住。","p":"wǒ zū le yī ge xiǎo fángzi zhù","i":"Saya menyewa sebuah rumah kecil untuk ditinggali."},
{"l":2,"z":"这个房间是出租的。","p":"zhè ge fángjiān shì chūzū de","i":"Kamar ini disewakan."},
{"l":2,"z":"车上人满了，等下一辆吧。","p":"chēshàng rén mǎn le děng xià yī liàng ba","i":"Kendaraan itu penuh, tunggu yang berikutnya."},
{"l":2,"z":"请称一下这条鱼。","p":"qǐng chēng yī xià zhè tiáo yú","i":"Tolong timbang ikan ini."},
{"l":2,"z":"请在名单上加一个名字。","p":"qǐng zài míngdān shàng jiā yī ge míngzi","i":"Silakan tambahkan nama ke dalam daftar."},
{"l":2,"z":"早餐我吃了一个蛋。","p":"zǎocān wǒ chī le yī ge dàn","i":"Saya makan telur untuk sarapan."},
{"l":2,"z":"午餐在公司吃快餐。","p":"wǔcān zài gōngsī chī kuàicān","i":"Saya makan cepat saji di kantor untuk makan siang."},
{"l":2,"z":"晚餐想吃中餐还是西餐？","p":"wǎncān xiǎng chī zhōngcān háishi xīcān","i":"Kamu mau masakan Tiongkok atau masakan Barat untuk makan malam?"},
{"l":2,"z":"鱼要做熟了再吃。","p":"yú yào zuò shú le zài chī","i":"Ikan harus dimasak sebelum dimakan."},
{"l":2,"z":"今天我请客，大家随便吃。","p":"jīntiān wǒ qǐngkè dàjiā suíbiàn chī","i":"Hari ini aku traktir, makan sepuasnya."},
{"l":2,"z":"请给我看看菜单。","p":"qǐng gěi wǒ kàn kan càidān","i":"Tolong tunjukkan saya menunya."},
{"l":2,"z":"为我们的友好干杯！","p":"wèi wǒmen de yǒuhǎo gānbēi","i":"Bersulang untuk persahabatan kita!"},
{"l":2,"z":"他喝了一瓶酒。","p":"tā hē le yī píng jiǔ","i":"Dia minum sebotol minuman keras."},
{"l":2,"z":"面条儿很好吃，我吃饱了。","p":"miàntiáor hěn hǎochī wǒ chī bǎo le","i":"Mienya enak, saya kenyang."},
{"l":2,"z":"这个菜味道不错。","p":"zhè ge cài wèidao bùcuò","i":"Hidangan ini rasanya enak."},
{"l":2,"z":"方便面不能常吃。","p":"fāngbiànmiàn bù néng cháng chī","i":"Mie instan sebaiknya jangan sering dimakan."},
{"l":2,"z":"我点了外卖。","p":"wǒ diǎn le wàimài","i":"Saya memesan makanan lewat layanan antar."},
{"l":2,"z":"饺子是北方人爱吃的食物。","p":"jiǎozi shì běifāng rén ài chī de shíwù","i":"Pangsit adalah makanan favorit orang utara."},
{"l":2,"z":"牛奶凉了，我去热一下。","p":"niúnǎi liáng le wǒ qù rè yī xià","i":"Susunya dingin. Aku akan memanaskannya."},
{"l":2,"z":"多吃鱼对身体有好处。","p":"duō chī yú duì shēntǐ yǒu hǎochǔ","i":"Makan lebih banyak ikan baik untuk tubuhmu."},
{"l":2,"z":"面里加一点儿油。","p":"miàn lǐ jiā yīdiǎnr yóu","i":"Tambahkan sedikit minyak ke dalam mi."},
{"l":2,"z":"今天是晴天，天上没有云。","p":"jīntiān shì qíngtiān tiānshàng méiyǒu yún","i":"Ini hari yang cerah tanpa awan di langit."},
{"l":2,"z":"明天多云，后天阴天。","p":"míngtiān duōyún hòutiān yīntiān","i":"Besok berawan, lusa mendung."},
{"l":2,"z":"天阴了，可能要下雨。","p":"tiān yīn le kěnéng yào xiàyǔ","i":"Cuacanya mendung dan mungkin akan turun hujan."},
{"l":2,"z":"气温低，出门多穿衣服。","p":"qìwēn dī chūmén duō chuān yīfú","i":"Suhunya rendah, jadi kenakan lebih banyak pakaian saat keluar."},
{"l":2,"z":"今天温度是零下三度。","p":"jīntiān wēndù shì língxià sān dù","i":"Suhu hari ini minus tiga derajat."},
{"l":2,"z":"外边下雪了，到处都是白色。","p":"wàibian xiàxuě le dàochù dōu shì báisè","i":"Di luar turun salju, di mana-mana putih."},
{"l":2,"z":"风吹得很大。","p":"fēng chuī de hěn dà","i":"Angin bertiup sangat kencang."},
{"l":2,"z":"空气很好，我们出去走走。","p":"kōngqì hěn hǎo wǒmen chūqù zǒu zǒu","i":"Udaranya sangat bagus, ayo jalan-jalan."},
{"l":2,"z":"天晴了，太阳出来了。","p":"tiān qíng le tàiyang chūlái le","i":"Langit cerah, matahari muncul."},
{"l":2,"z":"我头疼，想去医院看看。","p":"wǒ tóuténg xiǎng qù yīyuàn kàn kan","i":"Saya sakit kepala dan ingin pergi ke rumah sakit."},
{"l":2,"z":"他的腿和脚都疼。","p":"tā de tuǐ hé jiǎo dōu téng","i":"Kaki dan telapak kakinya sakit."},
{"l":2,"z":"我的眼睛有点儿难受。","p":"wǒ de yǎnjing yǒudiǎnr nánshòu","i":"Mataku agak tidak nyaman."},
{"l":2,"z":"她的头发又黑又长。","p":"tā de tóu fa yòu hēi yòu cháng","i":"Rambutnya hitam dan panjang."},
{"l":2,"z":"他的个子很高。","p":"tā de gèzi hěn gāo","i":"Dia sangat tinggi."},
{"l":2,"z":"你的脸怎么这么红？","p":"nǐ de liǎn zěnme zhème hóng","i":"Kenapa wajahmu merah sekali?"},
{"l":2,"z":"医生看了看我的嘴。","p":"yīshēng kàn le kàn wǒ de zuǐ","i":"Dokter melihat mulutku."},
{"l":2,"z":"医生给我检查了身体。","p":"yīshēng gěi wǒ jiǎnchá le shēntǐ","i":"Dokter memeriksa mulutku."},
{"l":2,"z":"吃了药就去休息。","p":"chī le yào jiù qù xiūxi","i":"Minum obatnya dan istirahatlah."},
{"l":2,"z":"药片一天吃三次。","p":"yàopiàn yī tiān chī sān cì","i":"Pilnya diminum tiga kali sehari."},
{"l":2,"z":"瓶子里装的是药水。","p":"píngzi lǐ zhuāng de shì yàoshuǐ","i":"Botol itu berisi obat cair."},
{"l":2,"z":"他生病住院了。","p":"tā shēngbìng zhùyuàn le","i":"Dia jatuh sakit dan dirawat di rumah sakit."},
{"l":2,"z":"爷爷今天出院了，全家都很开心。","p":"yéye jīntiān chūyuàn le quánjiā dōu hěn kāixīn","i":"Kakek keluar dari rumah sakit hari ini, dan seluruh keluarga sangat bahagia."},
{"l":2,"z":"多运动对健康有好处。","p":"duō yùndòng duì jiànkāng yǒu hǎochǔ","i":"Olahraga rutin baik untuk kesehatanmu."},
{"l":2,"z":"我睡得很好，身体很舒服。","p":"wǒ shuì de hěn hǎo shēntǐ hěn shūfu","i":"Saya tidur nyenyak dan merasa nyaman."},
{"l":2,"z":"别急，医生马上就来。","p":"bié jí yīshēng mǎshàng jiù lái","i":"Jangan khawatir, dokter akan segera datang."},
{"l":2,"z":"全身都不舒服，也许是生病了。","p":"quánshēn dōu bù shūfu yěxǔ shì shēngbìng le","i":"Seluruh tubuhku terasa tidak nyaman, mungkin aku sedang sakit."},
{"l":2,"z":"多喝水，早点儿睡，很快就好了。","p":"duō hē shuǐ zǎodiǎnr shuì hěn kuài jiù hǎo le","i":"Minum lebih banyak air, tidur lebih awal, nanti cepat sembuh."},
{"l":2,"z":"我喜欢打篮球和网球。","p":"wǒ xǐhuan dǎ lánqiú hé wǎngqiú","i":"Saya suka bermain basket dan tenis."},
{"l":2,"z":"排球队在体育馆练习。","p":"páiqiú duì zài tǐyùguǎn liànxí","i":"Tim bola voli berlatih di gedung olahraga."},
{"l":2,"z":"体育场上有很多人在运动。","p":"tǐyùchǎng shàng yǒu hěn duō rén zài yùndòng","i":"Banyak orang berolahraga di lapangan."},
{"l":2,"z":"我们的球队越来越好。","p":"wǒmen de qiúduì yuèláiyuè hǎo","i":"Tim kami semakin baik."},
{"l":2,"z":"周末我常去爬山。","p":"zhōumò wǒ cháng qù páshān","i":"Saya sering pergi hiking di akhir pekan."},
{"l":2,"z":"我们去公园的草地上坐坐吧。","p":"wǒmen qù gōngyuán de cǎodì shàng zuò zuò ba","i":"Ayo duduk di rumput di taman."},
{"l":2,"z":"他会唱很多流行的歌。","p":"tā huì chàng hěn duō liúxíng de gē","i":"Dia bisa menyanyikan banyak lagu populer."},
{"l":2,"z":"晚上有一个音乐会。","p":"wǎnshang yǒu yī ge yīnyuèhuì","i":"Ada konser di malam hari."},
{"l":2,"z":"这个节目很有意思。","p":"zhè ge jiémù hěn yǒuyìsi","i":"Pertunjukan ini sangat menarik."},
{"l":2,"z":"昨天的新闻你看了吗？","p":"zuótiān de xīnwén nǐ kàn le ma","i":"Apakah kamu menonton berita kemarin?"},
{"l":2,"z":"这个明星的影片我都看过。","p":"zhè ge míngxīng de yǐngpiàn wǒ dōu kàn guò","i":"Saya sudah menonton semua film artis ini."},
{"l":2,"z":"他讲了一个笑话，大家都笑了。","p":"tā jiǎng le yī ge xiàohua dàjiā dōu xiào le","i":"Dia menceritakan sebuah lelucon dan semua orang tertawa."},
{"l":2,"z":"我用相机照相，照片都很好看。","p":"wǒ yòng xiàngjī zhàoxiàng zhàopiàn dōu hěn hǎokàn","i":"Saya mengambil foto dengan kamera, fotonya bagus semua."},
{"l":2,"z":"这些图片真好看。","p":"zhèxiē túpiàn zhēn hǎokàn","i":"Gambar-gambar ini sangat bagus."},
{"l":2,"z":"我在学画画儿。","p":"wǒ zài xué huà huà ér","i":"Saya sedang belajar menggambar."},
{"l":2,"z":"音乐让我心情变好。","p":"yīnyuè ràng wǒ xīnqíng biàn hǎo","i":"Musik membuatku merasa lebih baik."},
{"l":2,"z":"他喜欢科学，想当科学家。","p":"tā xǐhuan kēxué xiǎng dāng kēxuéjiā","i":"Dia menyukai sains dan ingin menjadi ilmuwan."},
{"l":2,"z":"这是一个国际学校。","p":"zhè shì yī ge guójì xuéxiào","i":"Ini adalah sekolah internasional."},
{"l":2,"z":"全国都在过春节。","p":"quánguó dū zài guò chūnjié","i":"Seluruh negeri merayakan Imlek."},
{"l":2,"z":"见到老朋友，我感到很快乐。","p":"jiàndào lǎopéngyou wǒ gǎndào hěn kuàilè","i":"Saya merasa senang melihat teman lama."},
{"l":2,"z":"收到礼物，她很开心。","p":"shōudào lǐwù tā hěn kāixīn","i":"Dia sangat senang menerima hadiah itu."},
{"l":2,"z":"感谢大家的关心。","p":"gǎnxiè dàjiā de guānxīn","i":"Terima kasih atas perhatian kalian."},
{"l":2,"z":"他答应的事情一定会做到。","p":"tā dāying de shìqing yīdìng huì zuòdào","i":"Dia pasti akan melakukan apa yang dia janjikan."},
{"l":2,"z":"我相信你能够做到。","p":"wǒ xiāngxìn nǐ nénggòu zuòdào","i":"Saya yakin kamu bisa melakukannya."},
{"l":2,"z":"我以为你不来了。","p":"wǒ yǐwéi nǐ bù lái le","i":"Saya pikir kamu tidak akan datang."},
{"l":2,"z":"我认为他说得对。","p":"wǒ rènwéi tā shuō dé duì","i":"Menurutku dia benar."},
{"l":2,"z":"他对工作的态度很认真。","p":"tā duì gōngzuò de tàidu hěn rènzhēn","i":"Dia sangat serius dengan pekerjaannya."},
{"l":2,"z":"只要努力，就能实现理想。","p":"zhǐyào nǔlì jiù néng shíxiàn lǐxiǎng","i":"Asalkan kamu berusaha, kamu bisa mencapai cita-citamu."},
{"l":2,"z":"我对自己很有信心。","p":"wǒ duì zìjǐ hěn yǒu xìnxīn","i":"Saya sangat percaya diri."},
{"l":2,"z":"虽然很难，但是我愿意试试。","p":"suīrán hěn nán dànshì wǒ yuànyì shì shì","i":"Meski sulit, saya bersedia mencobanya."},
{"l":2,"z":"如果你有时间的话，来我家玩儿吧。","p":"rúguǒ nǐ yǒu shíjiān dehuà lái wǒ jiā wánr ba","i":"Kalau kamu punya waktu, main ke rumahku."},
{"l":2,"z":"因为下雨，所以活动停了。","p":"yīnwèi xiàyǔ suǒyǐ huódòng tíng le","i":"Karena hujan, aktivitas terhenti."},
{"l":2,"z":"他不但会英语，而且说得很流利。","p":"tā bùdàn huì yīngyǔ érqiě shuō de hěn liúlì","i":"Dia tidak hanya tahu bahasa Inggris, tapi dia berbicara dengan lancar."},
{"l":2,"z":"你可以坐地铁，或者坐公交车。","p":"nǐ kěyǐ zuò dìtiě huòzhě zuò gōngjiāochē","i":"Kamu bisa naik MRT atau bus."},
{"l":2,"z":"先吃饭，然后再讨论。","p":"xiān chīfàn ránhòu zài tǎolùn","i":"Makan dulu, diskusi nanti."},
{"l":2,"z":"他忽然站住，好像想起了什么。","p":"tā hūrán zhànzhù hǎoxiàng xiǎngqǐ le shénme","i":"Dia tiba-tiba berhenti, seolah dia teringat sesuatu."},
{"l":2,"z":"原来是你啊！","p":"yuánlái shì nǐ a","i":"Ternyata itu kamu!"},
{"l":2,"z":"这个故事让人难过。","p":"zhè ge gùshì ràng rén nánguò","i":"Kisah ini menyedihkan."},
{"l":2,"z":"他故意不接我的电话。","p":"tā gùyì bù jiē wǒ de diànhuà","i":"Dia sengaja tidak menjawab panggilanku."},
{"l":2,"z":"事情已经过去了，别想了。","p":"shìqing yǐjīng guòqù le bié xiǎng le","i":"Sudah berakhir sekarang, jangan pikirkan itu lagi."},
{"l":2,"z":"我永远不会忘记你的帮助。","p":"wǒ yǒngyuǎn bù huì wàngjì nǐ de bāngzhù","i":"Saya tidak akan pernah melupakan bantuanmu."},
{"l":2,"z":"这件事让我很感动。","p":"zhè jiàn shì ràng wǒ hěn gǎndòng","i":"Kejadian ini sangat menyentuh hati saya."},
{"l":2,"z":"别难过，这不是坏事。","p":"bié nánguò zhè bu shì huàishì","i":"Jangan sedih, ini bukan hal buruk."},
{"l":2,"z":"他是好人，不是坏人。","p":"tā shì hǎorén bù shì huàirén","i":"Dia orang baik, bukan orang jahat."},
{"l":2,"z":"这样做坏处很多。","p":"zhèyàng zuò huàichu hěn duō","i":"Cara ini punya banyak kerugian."},
{"l":2,"z":"好日子就要来了。","p":"hǎo rìzi jiùyào lái le","i":"Hari-hari yang lebih baik akan datang."},
{"l":2,"z":"这是一个好机会。","p":"zhè shì yī ge hǎo jīhuì","i":"Ini adalah kesempatan bagus."},
{"l":2,"z":"他气得说不出话。","p":"tā qì dé shuō bu chū huà","i":"Dia sangat marah sehingga dia tidak bisa berbicara."},
{"l":2,"z":"多么可爱的孩子啊！","p":"duōme kěài de háizi a","i":"Anak yang lucu!"},
{"l":2,"z":"这是一个爱情故事。","p":"zhè shì yī ge àiqíng gùshì","i":"Ini adalah kisah cinta."},
{"l":2,"z":"晚上的月亮又大又亮。","p":"wǎnshang de yuèliang yòu dà yòu liàng","i":"Bulan di malam hari besar dan terang."},
{"l":2,"z":"天上有很多星星。","p":"tiānshàng yǒu hěn duō xīngxing","i":"Ada banyak bintang di langit."},
{"l":2,"z":"大海是蓝色的。","p":"dàhǎi shì lánsè de","i":"Lautnya biru."},
{"l":2,"z":"我们在海边玩儿了一天。","p":"wǒmen zài hǎibiān wánr le yī tiān","i":"Kami menghabiskan satu hari di pantai."},
{"l":2,"z":"湖边的草绿了。","p":"hú biān de cǎo lǜ le","i":"Rerumputan di tepi danau berwarna hijau."},
{"l":2,"z":"这条河很长，向东流。","p":"zhè tiáo hé hěn cháng xiàng dōng liú","i":"Sungai itu panjang dan mengalir ke arah timur."},
{"l":2,"z":"鸟在树上唱歌。","p":"niǎo zài shù shàng chànggē","i":"Burung bernyanyi di pepohonan."},
{"l":2,"z":"动物园里有很多动物。","p":"dòngwùyuán lǐ yǒu hěn duō dòngwù","i":"Ada banyak binatang di kebun binatang."},
{"l":2,"z":"我爱大自然。","p":"wǒ ài dàzìrán","i":"Saya suka alam."},
{"l":2,"z":"地球是我们的家。","p":"dìqiú shì wǒmen de jiā","i":"Bumi adalah rumah kita."},
{"l":2,"z":"花园里的花都开了。","p":"huāyuán lǐ de huā dū kāi le","i":"Bunga-bunga di taman sedang bermekaran."},
{"l":2,"z":"我家的猫很可爱。","p":"wǒ jiā de māo hěn kěài","i":"Kucing saya sangat lucu."},
{"l":2,"z":"鸡生了一个蛋。","p":"jī shēng le yī ge dàn","i":"Ayam itu bertelur."},
{"l":2,"z":"教室的墙上有中国地图。","p":"jiàoshì de qiáng shàng yǒu zhōngguó dìtú","i":"Ada peta Tiongkok di dinding kelas."},
{"l":2,"z":"灯亮了，房间里很亮。","p":"dēng liàng le fángjiān lǐ hěn liàng","i":"Lampu menyala dan ruangan terang."},
{"l":2,"z":"我的笔和纸都在桌子上。","p":"wǒ de bǐ hé zhǐ dōu zài zhuōzi shàng","i":"Pena dan kertasku ada di atas meja."},
{"l":2,"z":"请帮我打印这份名单。","p":"qǐng bāng wǒ dǎyìn zhè fèn míngdān","i":"Tolong cetak daftar ini untuk saya."},
{"l":2,"z":"用完计算机，别忘了关机。","p":"yòng wán jìsuànjī bié wàng le guānjī","i":"Setelah memakai komputer, jangan lupa mematikannya."},
{"l":2,"z":"开机以后再等一会儿。","p":"kāijī yǐhòu zài děng yīhuìr","i":"Tunggu beberapa saat setelah booting."},
{"l":2,"z":"手机没有信号了。","p":"shǒujī méiyǒu xìnhào le","i":"Ponselnya tidak ada sinyal."},
{"l":2,"z":"我在网站上看到了这个信息。","p":"wǒ zài wǎngzhàn shàng kàndào liǎo zhè ge xìnxī","i":"Saya melihat informasi ini di situs web."},
{"l":2,"z":"家里的网坏了。","p":"jiālǐ de wǎng huài le","i":"Internet di rumah rusak."},
{"l":2,"z":"洗衣机坏了，衣服只能用手洗。","p":"xǐyījī huài le yīfu zhǐnéng yòng shǒu xǐ","i":"Mesin cuci rusak dan pakaian hanya bisa dicuci dengan tangan."},
{"l":2,"z":"这本字典很有用。","p":"zhè běn zìdiǎn hěn yǒuyòng","i":"Kamus ini sangat berguna."},
{"l":2,"z":"请写上你的姓名。","p":"qǐng xiě shàng nǐ de xìngmíng","i":"Silakan tulis nama kamu."},
{"l":2,"z":"这道题太难了，我不会做。","p":"zhè dào tí tài nán le wǒ bù huì zuò","i":"Soal ini terlalu sulit, saya tidak bisa mengerjakannya."},
{"l":2,"z":"这个句子是什么意思？","p":"zhè ge jùzi shì shénme yìsi","i":"Apa arti kalimat ini?"},
{"l":2,"z":"请举一个例子。","p":"qǐng jǔ yī ge lìzi","i":"Tolong beri contoh."},
{"l":2,"z":"比如说，这个词有两个读音。","p":"bǐrúshuō zhè ge cí yǒu liǎng gè dúyīn","i":"Misalnya, kata ini memiliki dua pengucapan."},
{"l":2,"z":"数字八的读音像发。","p":"shùzì bā de dúyīn xiàng fā","i":"Angka delapan (八) terdengar mirip dengan 发 (fā)."},
{"l":2,"z":"问题出现在什么地方？","p":"wèntí chūxiàn zài shénme dìfang","i":"Di mana masalahnya?"},
{"l":2,"z":"我们找出了原因。","p":"wǒmen zhǎochū le yuányīn","i":"Kami menemukan alasannya."},
{"l":2,"z":"用这个方法做，结果会更好。","p":"yòng zhè ge fāngfǎ zuò jiēguǒ huì gèng hǎo","i":"Jika dilakukan dengan cara ini, hasilnya akan lebih baik."},
{"l":2,"z":"这样做的目的是什么？","p":"zhèyàng zuò de mùdì shì shénme","i":"Apa tujuannya?"},
{"l":2,"z":"他的话很有道理。","p":"tā dehuà hěn yǒu dàoli","i":"Kata-katanya masuk akal."},
{"l":2,"z":"别急，我们想想办法。","p":"bié jí wǒmen xiǎng xiǎng bànfǎ","i":"Jangan khawatir, kita pikirkan caranya."},
{"l":2,"z":"这是最重要的部分。","p":"zhè shì zuì zhòngyào de bùfen","i":"Ini adalah bagian terpenting."},
{"l":2,"z":"从这个角度看，他是对的。","p":"cóng zhè ge jiǎodù kàn tā shì duì de","i":"Dari sudut pandang ini, dia benar."},
{"l":2,"z":"这两个词的意思差不多。","p":"zhè liǎng gè cí de yìsi chàbuduō","i":"Kedua kata ini memiliki arti yang serupa."},
{"l":2,"z":"事情正在进行。","p":"shìqing zhèngzài jìnxíng","i":"Urusannya sedang berlangsung."},
{"l":2,"z":"他刚出门，你打他手机吧。","p":"tā gāng chūmén nǐ dǎ tā shǒujī ba","i":"Dia baru saja keluar. Hubungi ponselnya."},
{"l":2,"z":"我刚刚看到这个通知。","p":"wǒ gānggang kàndào zhè ge tōngzhī","i":"Saya baru saja melihat pemberitahuan ini."},
{"l":2,"z":"他十点才睡觉。","p":"tā shí diǎn cái shuìjiào","i":"Dia tidak tidur sampai jam sepuluh."},
{"l":2,"z":"这个电影挺好看的。","p":"zhè ge diànyǐng tǐng hǎokàn de","i":"Film ini cukup bagus."},
{"l":2,"z":"我实在太累了。","p":"wǒ shízài tài lèi le","i":"Saya sangat lelah."},
{"l":2,"z":"有问题可以随时问我。","p":"yǒu wèntí kěyǐ suíshí wèn wǒ","i":"Kalau ada pertanyaan, tanya aku kapan saja."},
{"l":2,"z":"他又来晚了。","p":"tā yòu lái wǎn le","i":"Dia terlambat lagi."},
{"l":2,"z":"今天比昨天更冷。","p":"jīntiān bǐ zuótiān gèng lěng","i":"Hari ini lebih dingin dibandingkan kemarin."},
{"l":2,"z":"他一直在等你。","p":"tā yīzhí zài děng nǐ","i":"Dia terus menunggumu."},
{"l":2,"z":"游客占了一半以上。","p":"yóukè zhàn le yībàn yǐshàng","i":"Wisatawan mencakup lebih dari separuh pengunjung."},
{"l":2,"z":"他受到了大家的欢迎。","p":"tā shòudào liǎo dàjiā de huānyíng","i":"Dia disambut oleh semua orang."},
{"l":2,"z":"他懂得很多道理。","p":"tā dǒngde hěn duō dàoli","i":"Dia memahami banyak hal."},
{"l":2,"z":"全体学生都到了。","p":"quántǐ xuésheng dōu dào liǎo","i":"Semua siswa telah tiba."},
{"l":2,"z":"我借了一本小说。","p":"wǒ jiè le yī běn xiǎoshuō","i":"Saya meminjam sebuah novel."},
{"l":2,"z":"他请求老师再讲一遍。","p":"tā qǐngqiú lǎoshī zài jiǎng yī biàn","i":"Dia meminta guru menjelaskan sekali lagi."},
{"l":2,"z":"时间不早了，我该走了。","p":"shíjiān bù zǎo le wǒ gāi zǒu le","i":"Ini sudah larut, aku harus pergi."},
{"l":2,"z":"天气变冷了。","p":"tiānqì biàn lěng le","i":"Cuaca semakin dingin."},
{"l":2,"z":"小树变成了大树。","p":"xiǎo shù biànchéng le dà shù","i":"Pohon kecil itu berubah menjadi pohon besar."},
{"l":2,"z":"这个句子要改一改。","p":"zhè ge jùzi yào gǎi yī gǎi","i":"Kalimat ini perlu diubah."},
{"l":2,"z":"他改变了想法。","p":"tā gǎibiàn le xiǎngfǎ","i":"Dia berubah pikiran."},
{"l":2,"z":"大家为我们加油。","p":"dàjiā wèi wǒmen jiāyóu","i":"Semua orang bersorak untuk kami."},
{"l":2,"z":"我选了中级班。","p":"wǒ xuǎn le zhōngjí bān","i":"Saya memilih kelas menengah."},
{"l":2,"z":"这是一家高级酒店。","p":"zhè shì yī jiā gāojí jiǔdiàn","i":"Ini adalah hotel kelas atas."},
{"l":2,"z":"大家都是平等的。","p":"dàjiā dōu shì píngděng de","i":"Setiap orang setara."},
{"l":2,"z":"这样做不公平。","p":"zhèyàng zuò bù gōngpíng","i":"Itu tidak adil."},
{"l":2,"z":"我想要自由的生活。","p":"wǒ xiǎng yào zìyóu de shēnghuó","i":"Saya ingin kehidupan yang bebas."},
{"l":2,"z":"平安就是最大的好事。","p":"píngān jiùshì zuì dà de hǎoshì","i":"Damai itu anugerah terbesar."},
{"l":2,"z":"这句话是假的，别相信。","p":"zhè jù huà shì jiǎ de bié xiāngxìn","i":"Ini bohong, jangan percaya."},
{"l":2,"z":"这个包很轻。","p":"zhè ge bāo hěn qīng","i":"Tas ini sangat ringan."},
{"l":2,"z":"这条路很平，好走。","p":"zhè tiáo lù hěn píng hǎo zǒu","i":"Jalannya sangat datar dan mudah untuk dilalui."},
{"l":2,"z":"我平常七点起床。","p":"wǒ píngcháng qī diǎn qǐchuáng","i":"Saya biasanya bangun jam tujuh."},
{"l":2,"z":"你的回答很正确。","p":"nǐ de huídá hěn zhèngquè","i":"Jawabanmu benar."},
{"l":2,"z":"他的读音很准确。","p":"tā de dúyīn hěn zhǔnquè","i":"Pengucapannya sangat akurat."},
{"l":2,"z":"我们的看法完全相同。","p":"wǒmen de kànfǎ wánquán xiāngtóng","i":"Pandangan kami sama persis."},
{"l":2,"z":"这是一个常见的问题。","p":"zhè shì yī ge chángjiàn de wèntí","i":"Ini masalah umum."},
{"l":2,"z":"这些都是常用的词语。","p":"zhèxiē dōu shì chángyòng de cíyǔ","i":"Ini adalah kata-kata yang umum digunakan."},
{"l":2,"z":"我的水平很一般。","p":"wǒ de shuǐpíng hěn yībān","i":"Level saya rata-rata."},
{"l":2,"z":"这件衣服有点儿难看。","p":"zhè jiàn yīfu yǒudiǎnr nánkàn","i":"Baju ini agak jelek."},
{"l":2,"z":"这个歌真难听。","p":"zhè ge gē zhēn nántīng","i":"Lagu ini sungguh jelek."},
{"l":2,"z":"有话直接说。","p":"yǒu huà zhíjiē shuō","i":"Kalau ada yang mau dikatakan, bilang langsung."},
{"l":2,"z":"这条路不通。","p":"zhè tiáo lù bùtōng","i":"Jalan ini diblokir."},
{"l":2,"z":"通过学习，我懂了很多。","p":"tōngguò xuéxí wǒ dǒng le hěn duō","i":"Melalui belajar, saya memahami banyak hal."},
{"l":2,"z":"我接受你的意见。","p":"wǒ jiēshòu nǐ de yìjiàn","i":"Saya menerima pendapatmu."},
{"l":2,"z":"接下来是音乐节目。","p":"jiēxiàlai shì yīnyuè jiémù","i":"Selanjutnya adalah program musik."},
{"l":2,"z":"我接到了公司的通知。","p":"wǒ jiēdào liǎo gōngsī de tōngzhī","i":"Saya menerima pemberitahuan dari perusahaan."},
{"l":2,"z":"我们得出了结果。","p":"wǒmen déchū liǎo jiéguǒ","i":"Kami mendapatkan hasilnya."},
{"l":2,"z":"我发现了一个问题。","p":"wǒ fāxiàn le yī ge wèntí","i":"Saya menemukan masalah."},
{"l":2,"z":"我见过这个人。","p":"wǒ jiàn guò zhè ge rén","i":"Saya pernah bertemu orang ini."},
{"l":2,"z":"没想到你也来了。","p":"méixiǎngdào nǐ yě lái le","i":"Aku tidak menyangka kamu akan datang juga."},
{"l":2,"z":"有的动物爱睡觉，例如猫。","p":"yǒu de dòngwù ài shuìjiào lìrú māo","i":"Beberapa hewan suka tidur, seperti kucing."},
{"l":2,"z":"我爱运动，比如打球和爬山。","p":"wǒ ài yùndòng bǐrú dǎqiú hé páshān","i":"Saya suka olahraga, seperti bermain bola dan mendaki gunung."},
{"l":2,"z":"坐车不如骑车快。","p":"zuò chē bùrú qíchē kuài","i":"Naik kendaraan tidak secepat naik sepeda."},
{"l":2,"z":"他好像不太高兴。","p":"tā hǎoxiàng bù tài gāoxìng","i":"Dia tampak tidak senang."},
{"l":2,"z":"他老是来晚。","p":"tā lǎo shi lái wǎn","i":"Dia selalu datang terlambat."},
{"l":2,"z":"我经常坐地铁。","p":"wǒ jīngcháng zuò dìtiě","i":"Saya sering naik kereta bawah tanah."},
{"l":2,"z":"天就要黑了。","p":"tiān jiùyào hēi le","i":"Hari mulai gelap."},
{"l":2,"z":"火车快要到了。","p":"huǒchē kuàiyào dào liǎo","i":"Kereta akan segera datang."},
{"l":2,"z":"我早就听说过你。","p":"wǒ zǎojiù tīngshuō guò nǐ","i":"Aku sudah lama mendengar tentangmu."},
{"l":2,"z":"请重新写一遍。","p":"qǐng chóngxīn xiě yī biàn","i":"Silakan tulis lagi."},
{"l":2,"z":"我只想休息。","p":"wǒ zhǐ xiǎng xiūxi","i":"Saya hanya ingin istirahat."},
{"l":2,"z":"下雨了，怎么办？","p":"xiàyǔ le zěnmebàn","i":"Hujan, bagaimana ini?"},
{"l":2,"z":"你觉得这个电影怎样？","p":"nǐ juéde zhè ge diànyǐng zěnyàng","i":"Apa pendapatmu tentang film ini?"},
{"l":2,"z":"他是什么样的人？","p":"tā shì shénmeyàng de rén","i":"Orang macam apa dia?"},
{"l":2,"z":"别走那么快。","p":"bié zǒu nàme kuài","i":"Jangan pergi terlalu cepat."},
{"l":2,"z":"其他人都走了。","p":"qítā rén dōu zǒu le","i":"Orang-orang lain sudah pergi."},
{"l":2,"z":"我只吃了一点点。","p":"wǒ zhǐ chī le yīdiǎndiǎn","i":"Saya hanya makan sedikit."},
{"l":2,"z":"今天有一点儿冷。","p":"jīntiān yǒu yīdiǎnr lěng","i":"Hari ini agak dingin."},
{"l":2,"z":"他不一定来。","p":"tā bù yīdìng lái","i":"Dia mungkin tidak datang."},
{"l":2,"z":"不久以后，他就回国了。","p":"bùjiǔ yǐhòu tā jiù huíguó le","i":"Tidak lama kemudian, dia kembali ke negaranya."},
{"l":2,"z":"你学中文多久了？","p":"nǐ xué zhōngwén duōjiǔ le","i":"Sudah berapa lama kamu belajar bahasa Mandarin?"},
{"l":2,"z":"请读这一段。","p":"qǐng dú zhè yī duàn","i":"Silakan baca paragraf ini."},
{"l":2,"z":"他比我高一级。","p":"tā bǐ wǒ gāo yī jí","i":"Dia satu tingkat lebih tinggi dariku."},
{"l":2,"z":"吃两片药就好了。","p":"chī liǎng piàn yào jiù hǎo le","i":"Cukup minum dua tablet, nanti sembuh."},
{"l":2,"z":"我的表慢了五分钟。","p":"wǒ de biǎo màn le wǔ fēnzhōng","i":"Jam tanganku lambat lima menit."},
{"l":2,"z":"这个手表是爸爸送给我的。","p":"zhè ge shǒubiǎo shì bàba sònggěi wǒ de","i":"Jam tangan ini diberikan kepadaku oleh ayahku."},
{"l":2,"z":"这个词有两个音节。","p":"zhè ge cí yǒu liǎng gè yīnjié","i":"Kata ini mempunyai dua suku kata."},
{"l":2,"z":"语言要多练才行。","p":"yǔyán yào duō liàn cái xíng","i":"Bahasa harus banyak dilatih."},
{"l":2,"z":"这个药的作用很大。","p":"zhè ge yào de zuòyòng hěn dà","i":"Obat ini sangat efektif."},
{"l":2,"z":"我不懂你的做法。","p":"wǒ bù dǒng nǐ de zuòfǎ","i":"Saya tidak mengerti caramu."},
{"l":2,"z":"他的行为让人难懂。","p":"tā de xíngwéi ràng rén nán dǒng","i":"Perilakunya sulit dimengerti."},
{"l":2,"z":"我们马上行动。","p":"wǒmen mǎshàng xíngdòng","i":"Kami segera bertindak."},
{"l":2,"z":"爷爷相信中医，爸爸看西医。","p":"yéye xiāngxìn zhōngyī bàba kàn xīyī","i":"Kakek saya percaya pengobatan Tiongkok, ayah saya berobat ke dokter Barat."},
{"l":2,"z":"这是今天的重点。","p":"zhè shì jīn tiān de zhòng diǎn","i":"Ini adalah hal terpenting hari ini."},
{"l":2,"z":"这个地方的特点是安静。","p":"zhè ge dìfāng de tèdiǎn shì ānjìng","i":"Ciri khas tempat ini adalah ketenangannya."},
{"l":2,"z":"我们走的方向不对。","p":"wǒmen zǒu de fāngxiàng bù duì","i":"Kita menuju ke arah yang salah."},
{"l":2,"z":"他说的和实际不同。","p":"tā shuō de hé shíjì bùtóng","i":"Apa yang dia katakan berbeda dari kenyataan."},
{"l":2,"z":"这条街的名称很有意思。","p":"zhè tiáo jiē de míngchēng hěn yǒuyìsi","i":"Nama jalan ini menarik."},
{"l":2,"z":"我的卡不能用了。","p":"wǒ de kǎ bù néng yòng le","i":"Kartu saya tidak berfungsi."},
{"l":2,"z":"请听这段对话。","p":"qǐng tīng zhè duàn duìhuà","i":"Tolong dengarkan percakapan ini."},
{"l":2,"z":"在吃的方面，他不太重视。","p":"zài chī de fāngmiàn tā bù tài zhòngshì","i":"Soal makanan, dia tidak terlalu peduli."},
{"l":2,"z":"当老师是我的理想。","p":"dāng lǎoshī shì wǒ de lǐxiǎng","i":"Menjadi seorang guru adalah cita-cita saya."},
{"l":2,"z":"红色、黄色、黑色，你喜欢哪个颜色？","p":"hóngsè huángsè hēisè nǐ xǐhuan nǎ ge yánsè","i":"Merah, kuning, hitam, warna apa yang kamu suka?"},
{"l":2,"z":"春天到了，山变成了绿色。","p":"chūntiān dào liǎo shān biànchéng le lǜsè","i":"Musim semi telah tiba dan pegunungan berubah menjadi hijau."},
{"l":2,"z":"她的鞋是黄的。","p":"tā de xié shì huáng de","i":"Sepatunya berwarna kuning."},
{"l":2,"z":"下雪了，雪是白色的。","p":"xiàxuě le xuě shì báisè de","i":"Sedang turun salju. Saljunya putih."},
{"l":2,"z":"大海很大，海也很蓝。","p":"dàhǎi hěn dà hǎi yě hěn lán","i":"Lautnya besar dan biru."},
{"l":2,"z":"教室里的桌子和椅子都很新。","p":"jiàoshì lǐ de zhuōzi hé yǐzi dōu hěn xīn","i":"Meja dan kursi di kelas masih sangat baru."},
{"l":2,"z":"我在课堂上记笔记。","p":"wǒ zài kètáng shàng jì bǐjì","i":"Saya membuat catatan di kelas."},
{"l":2,"z":"米饭是用米做的。","p":"mǐfàn shì yòng mǐ zuò de","i":"Nasi terbuat dari beras."},
{"l":2,"z":"我的眼有点儿疼。","p":"wǒ de yǎn yǒudiǎnr téng","i":"Mataku sedikit sakit."},
{"l":2,"z":"头发太长了，我想弄短一点儿。","p":"tóufa tài zhǎng le wǒ xiǎng nòng duǎn yīdiǎnr","i":"Rambutku terlalu panjang, aku ingin memendekkannya."},
{"l":2,"z":"别碰这个瓶子！","p":"bié pèng zhè ge píngzi","i":"Jangan sentuh botol ini!"},
{"l":2,"z":"他离开家去外地了。","p":"tā líkāi jiā qù wàidì le","i":"Dia meninggalkan rumah dan pergi ke tempat lain."},
{"l":2,"z":"猫爬到了树上。","p":"māo pá dào liǎo shù shàng","i":"Kucing itu naik ke pohon."},
{"l":2,"z":"东西明天送到。","p":"dōngxi míngtiān sòngdào","i":"Barang akan dikirim besok."},
{"l":2,"z":"你快点儿过来！","p":"nǐ kuàidiǎnr guòlái","i":"Cepat kemari!"},
{"l":2,"z":"他从家里带来了很多吃的。","p":"tā cóng jiālǐ dàilái le hěn duō chī de","i":"Dia membawa banyak makanan dari rumah."},
{"l":2,"z":"我拿到了机票。","p":"wǒ nádào liǎo jīpiào","i":"Saya sudah mendapat tiket pesawat."},
{"l":2,"z":"这个钱我不能收。","p":"zhè ge qián wǒ bù néng shōu","i":"Saya tidak bisa menerima uang ini."},
{"l":2,"z":"他长大以后成为了一名医生。","p":"tā zhǎngdà yǐhòu chéngwéi le yī míng yīshēng","i":"Dia tumbuh menjadi seorang dokter."},
{"l":2,"z":"他的理想实现了，成了作家。","p":"tā de lǐxiǎng shíxiàn le chéng le zuòjiā","i":"Cita-citanya menjadi kenyataan dan dia menjadi seorang penulis."},
{"l":2,"z":"天上出现了很多星星。","p":"tiānshàng chūxiàn le hěn duō xīngxing","i":"Banyak bintang muncul di langit."},
{"l":2,"z":"请问您姓什么？","p":"qǐngwèn nín xìng shénme","i":"Siapa nama belakang Anda?"},
{"l":2,"z":"五加五等于十。","p":"wǔ jiā wǔ děngyú shí","i":"Lima tambah lima sama dengan sepuluh."},
{"l":2,"z":"他常常提到你。","p":"tā chángcháng tídào nǐ","i":"Dia sering membicarakanmu."},
{"l":2,"z":"这件事以后再提。","p":"zhè jiàn shì yǐhòu zài tí","i":"Hal ini kita bicarakan nanti."},
{"l":2,"z":"求你别生气了。","p":"qiú nǐ bié shēngqì le","i":"Tolong jangan marah."},
{"l":2,"z":"妈妈在家做饭。","p":"māma zàijiā zuòfàn","i":"Ibu memasak di rumah."},
{"l":2,"z":"我们去交作业吧。","p":"wǒmen qù jiāo zuòyè ba","i":"Ayo kita kumpulkan PR."},
{"l":2,"z":"请取好你的东西再下车。","p":"qǐng qǔ hǎo nǐ de dōngxi zài xiàchē","i":"Pastikan barangmu terbawa sebelum turun."},
{"l":2,"z":"这个东西叫作什么？","p":"zhè ge dōngxi jiàozuò shénme","i":"Apa nama benda ini?"},
{"l":2,"z":"我们参观了他们的学校。","p":"wǒmen cānguān le tāmen de xuéxiào","i":"Kami mengunjungi sekolah mereka."},
{"l":2,"z":"你的声音真好听。","p":"nǐ de shēngyīn zhēn hǎotīng","i":"Suaramu bagus sekali."},
{"l":2,"z":"他的样子有点儿累。","p":"tā de yàngzi yǒudiǎnr lèi","i":"Dia tampak sedikit lelah."},
{"l":2,"z":"请说清楚一点儿。","p":"qǐng shuō qīngchǔ yīdiǎnr","i":"Tolong bicara lebih jelas."},
{"l":2,"z":"你最近怎么样？","p":"nǐ zuìjìn zěnmeyàng","i":"Bagaimana kabarmu?"},
{"l":2,"z":"你为什么不早说？","p":"nǐ wèishénme bù zǎo shuō","i":"Kenapa kamu tidak memberitahuku sebelumnya?"},
{"l":2,"z":"你放心，我会小心的。","p":"nǐ fàngxīn wǒ huì xiǎoxīn de","i":"Jangan khawatir, saya akan berhati-hati."},
{"l":2,"z":"我感觉今天会下雨。","p":"wǒ gǎnjué jīntiān huì xiàyǔ","i":"Aku merasa hari ini akan turun hujan."},
{"l":2,"z":"过马路要小心，安全最重要。","p":"guò mǎlù yào xiǎoxīn ānquán zuì zhòngyào","i":"Hati-hati saat menyeberang jalan, keselamatan adalah yang terpenting."},
{"l":2,"z":"他心中有很多话想说。","p":"tā xīnzhōng yǒu hěn duō huà xiǎng shuō","i":"Ada banyak hal yang ingin dia katakan."},
{"l":2,"z":"住房问题很重要。","p":"zhùfáng wèntí hěn zhòngyào","i":"Masalah perumahan merupakan hal yang penting."},
{"l":2,"z":"体育课上我们打球。","p":"tǐyù kè shàng wǒmen dǎqiú","i":"Di kelas olahraga kami bermain bola."},
{"l":2,"z":"教育是国家的大事。","p":"jiàoyù shì guójiā de dàshì","i":"Pendidikan adalah prioritas nasional."},
{"l":2,"z":"他做教学工作二十年了。","p":"tā zuò jiāoxué gōngzuò èr shí nián le","i":"Dia telah mengajar selama dua puluh tahun."},
{"l":2,"z":"我喜欢旅游，也喜欢照相。","p":"wǒ xǐhuan lǚyóu yě xǐhuan zhàoxiàng","i":"Saya suka bepergian dan mengambil foto."},
{"l":2,"z":"日报是早上出的，晚报是下午出的。","p":"rìbào shì zǎoshang chū de wǎnbào shì xiàwǔ chū de","i":"Surat kabar harian terbit pada pagi hari dan surat kabar sore terbit pada sore hari."},
{"l":2,"z":"他爱讲笑话儿。","p":"tā ài jiǎng xiàohua r","i":"Dia suka menceritakan lelucon."},
{"l":2,"z":"这是我们省最有名的大学。","p":"zhè shì wǒmen shěng zuì yǒumíng de dàxué","i":"Ini adalah universitas paling terkenal di provinsi kami."},
{"l":2,"z":"他在学院工作，是院长。","p":"tā zài xuéyuàn gōngzuò shì yuànzhǎng","i":"Dia bekerja di kampus dan menjadi dekan."},
{"l":2,"z":"我们组有五个人。","p":"wǒmen zǔ yǒu wǔ gè rén","i":"Ada lima orang dalam kelompok kami."},
{"l":2,"z":"这个医院有很多科。","p":"zhè ge yīyuàn yǒu hěn duō kē","i":"Rumah sakit ini memiliki banyak departemen."},
{"l":2,"z":"春节是一年里最大的节。","p":"chūnjié shì yī nián lǐ zuì dà de jié","i":"Imlek adalah festival terbesar dalam setahun."},
{"l":2,"z":"球场上有两个队。","p":"qiúchǎng shàng yǒu liǎng gè duì","i":"Ada dua tim di lapangan."},
{"l":2,"z":"这本书是英文的。","p":"zhè běn shū shì yīngwén de","i":"Buku ini dalam bahasa Inggris."},
{"l":2,"z":"一千块钱不少了。","p":"yī qiān kuài qián bùshǎo le","i":"Seribu yuan sudah banyak."},
{"l":2,"z":"全部的作业我都写完了。","p":"quánbù de zuòyè wǒ dōu xiě wán le","i":"Saya telah menyelesaikan semua pekerjaan rumah."},
{"l":2,"z":"所有的人都来了。","p":"suǒyǒu de rén dōu lái le","i":"Semua orang datang."},
{"l":2,"z":"一部分人先走，别的人留下。","p":"yībùfen rén xiān zǒu biéde rén liúxià","i":"Beberapa orang pergi lebih dulu, yang lain tetap tinggal."},
{"l":2,"z":"多数人喜欢晴天。","p":"duōshù rén xǐhuan qíngtiān","i":"Kebanyakan orang menyukai hari yang cerah."},
{"l":2,"z":"咱去吃饭吧。","p":"zán qù chīfàn ba","i":"Ayo makan."},
{"l":2,"z":"那样做不对，这样才对。","p":"nàyàng zuò bù duì zhèyàng cái duì","i":"Bukan begitu caranya; begini yang benar."},
{"l":2,"z":"那时候我们还不认识。","p":"nà shíhou wǒmen hái bù rènshi","i":"Kami tidak saling mengenal saat itu."},
{"l":2,"z":"那会儿我正在睡觉。","p":"nàhuìr wǒ zhèngzài shuìjiào","i":"Saya sedang tidur saat itu."},
{"l":2,"z":"这时，门响了。","p":"zhèshí mén xiǎng le","i":"Saat itu, pintu berbunyi."},
{"l":2,"z":"天越黑，星星越亮。","p":"tiān yuè hēi xīngxing yuè liàng","i":"Semakin gelap langit, semakin terang bintangnya."},
{"l":2,"z":"冬天的夜很长。","p":"dōngtiān de yè hěn zhǎng","i":"Malam musim dingin itu panjang."},
{"l":2,"z":"人到中年，事情很多。","p":"rén dào zhōngnián shìqing hěn duō","i":"Ketika orang mencapai usia paruh baya, ada banyak hal yang harus mereka lakukan."},
{"l":2,"z":"少年们在球场上打篮球。","p":"shàonián men zài qiúchǎng shàng dǎ lánqiú","i":"Remaja bermain basket di lapangan."},
{"l":2,"z":"人们都爱过年。","p":"rénmen dōu ài guònián","i":"Orang-orang suka merayakan Tahun Baru."},
{"l":2,"z":"太阳从东方出来。","p":"tàiyang cóng dōngfāng chūlái","i":"Matahari terbit dari timur."},
{"l":2,"z":"他家在西北。","p":"tā jiā zài xīběi","i":"Rumahnya berada di barat laut."},
{"l":2,"z":"这条道路又长又平。","p":"zhè tiáo dàolù yòu zhǎng yòu píng","i":"Jalannya panjang dan datar."},
{"l":2,"z":"大大的眼睛，真可爱。","p":"dàdà de yǎnjing zhēn kěài","i":"Matanya besar, lucu sekali."},
{"l":2,"z":"挺好的，就这样吧。","p":"tǐng hǎo de jiù zhèyàng ba","i":"Bagus, seperti ini saja."},
{"l":2,"z":"中小学生都放假了。","p":"zhōngxiǎoxué sheng dōu fàngjià le","i":"Semua siswa sekolah dasar dan menengah sedang berlibur."},
{"l":2,"z":"全年最热的是七月。","p":"quánnián zuì rè de shì qī yuè","i":"Bulan terpanas dalam setahun adalah Juli."},
{"l":2,"z":"下午有一场大雨。","p":"xiàwǔ yǒu yī cháng dà yǔ","i":"Terjadi hujan lebat pada sore hari."},
{"l":2,"z":"不一会儿，他就回来了。","p":"bùyīhuìer tā jiù huílai le","i":"Setelah beberapa saat, dia kembali."},
{"l":2,"z":"他对结果很不满。","p":"tā duì jiēguǒ hěn bùmǎn","i":"Dia tidak senang dengan hasilnya."},
{"l":2,"z":"这件衣服很合适。","p":"zhè jiàn yīfu hěn héshì","i":"Baju ini sangat pas."},
{"l":2,"z":"他今天不太正常，话很少。","p":"tā jīntiān bù tài zhèngcháng huà hěn shǎo","i":"Hari ini dia agak tidak seperti biasanya, bicaranya sedikit."},
{"l":2,"z":"你这样做不行。","p":"nǐ zhèyàng zuò bùxíng","i":"Kamu tidak boleh begini."},
{"l":2,"z":"不要在路上玩儿！","p":"bùyào zài lùshang wánr","i":"Jangan bermain di jalan!"},
{"l":2,"z":"不过，我还是想试试。","p":"bùguò wǒ háishi xiǎng shì shì","i":"Namun, saya tetap ingin mencobanya."},
{"l":2,"z":"可是他不听。","p":"kěshì tā bù tīng","i":"Tapi dia tidak mendengarkan."},
{"l":2,"z":"但他没有来。","p":"dàn tā méiyǒu lái","i":"Tapi dia tidak datang."},
{"l":2,"z":"我们是同时到的。","p":"wǒmen shì tóngshí dào de","i":"Kami tiba pada waktu yang sama."},
{"l":2,"z":"我们买了同样的鞋。","p":"wǒmen mǎi le tóngyàng de xié","i":"Kami membeli sepatu yang sama."},
{"l":2,"z":"主要的问题是时间不够。","p":"zhǔyào de wèntí shì shíjiān bùgòu","i":"Masalah utamanya adalah kurangnya waktu."},
{"l":2,"z":"他是真正的好人。","p":"tā shì zhēnzhèng de hǎorén","i":"Dia benar-benar orang baik."},
{"l":2,"z":"或早或晚，他都会知道。","p":"huò zǎo huò wǎn tā dū huì zhīdào","i":"Cepat atau lambat, dia akan tahu."},
{"l":2,"z":"接着，我们讨论第二个问题。","p":"jiēzhe wǒmen tǎolùn dìèr gè wèntí","i":"Selanjutnya kita bahas masalah kedua."},
{"l":2,"z":"十八岁以下的人不能开车。","p":"shí bā suì yǐxià de rén bù néng kāichē","i":"Orang yang berusia di bawah 18 tahun tidak dapat mengemudi."},
{"l":2,"z":"学习以外，他还喜欢运动。","p":"xuéxí yǐwài tā hái xǐhuan yùndòng","i":"Selain belajar, dia juga menyukai olahraga."},
{"l":2,"z":"你说的全对。","p":"nǐ shuō de quán duì","i":"Kamu benar semua."},
{"l":2,"z":"时间还够吗？","p":"shíjiān hái gòu ma","i":"Apakah masih ada cukup waktu?"},
{"l":2,"z":"他个子挺高的。","p":"tā gèzi tǐng gāo de","i":"Dia cukup tinggi."},
{"l":2,"z":"我们院里有很多树。","p":"wǒmen yuàn lǐ yǒu hěn duō shù","i":"Ada banyak pohon di halaman kami."},
{"l":3,"z":"我父亲是工程师，母亲是公务员。","p":"wǒ fùqīn shì gōngchéngshī mǔqīn shì gōngwùyuán","i":"Ayah saya adalah seorang insinyur dan ibu saya adalah seorang PNS."},
{"l":3,"z":"李主任是一位专家。","p":"lǐ zhǔrèn shì yī wèi zhuānjiā","i":"Direktur Li adalah seorang ahli."},
{"l":3,"z":"服务员给我们拿来了菜单。","p":"fúwùyuán gěi wǒmen ná lái le càidān","i":"Pelayan membawakan kami menu."},
{"l":3,"z":"我爷爷去年退休了。","p":"wǒ yéye qùnián tuìxiū le","i":"Kakek saya pensiun tahun lalu."},
{"l":3,"z":"球迷和歌迷都很热情。","p":"qiúmí hé gēmí dōu hěn rèqíng","i":"Penggemar olahraga dan penggemar musik sama-sama antusias."},
{"l":3,"z":"每个公民都有自己的责任。","p":"měi gè gōngmín dōu yǒu zìjǐ de zérèn","i":"Setiap warga negara mempunyai tanggung jawab masing-masing."},
{"l":3,"z":"他有本事，也有才能。","p":"tā yǒu běnshi yě yǒu cáinéng","i":"Dia memiliki kemampuan dan bakat."},
{"l":3,"z":"我的父母都在农村生活。","p":"wǒ de fùmǔ dōu zài nóngcūn shēnghuó","i":"Anak-anak harus merawat orang tua mereka."},
{"l":3,"z":"子女应该照顾父母。","p":"zǐnǚ yīnggāi zhàogu fùmǔ","i":"Anak-anak harus menjaga orang tuanya."},
{"l":3,"z":"房东把房租提高了。","p":"fángdōng bǎ fángzū tígāo le","i":"Pemilik rumah menaikkan uang sewa."},
{"l":3,"z":"搬家的时候，家具都要搬走。","p":"bānjiā de shíhou jiājù dōu yào bān zǒu","i":"Saat berpindah, semua perabotan harus dipindahkan."},
{"l":3,"z":"她有一双漂亮的鞋。","p":"tā yǒu yī shuāng piàoliang de xié","i":"Dia memiliki sepasang sepatu yang indah."},
{"l":3,"z":"这类问题很普遍。","p":"zhè lèi wèntí hěn pǔbiàn","i":"Masalah seperti ini biasa terjadi."},
{"l":3,"z":"请给我一支笔和一张纸。","p":"qǐng gěi wǒ yī zhī bǐ hé yī zhāng zhǐ","i":"Tolong beri saya pena dan kertas."},
{"l":3,"z":"我们吃了一顿美食。","p":"wǒmen chī le yī dùn měishí","i":"Kami makan makanan lezat."},
{"l":3,"z":"整个上午他都在写作。","p":"zhěnggè shàngwǔ tā dōu zài xiězuò","i":"Dia telah menulis sepanjang pagi."},
{"l":3,"z":"目前的情况基本正常。","p":"mùqián de qíngkuàng jīběn zhèngcháng","i":"Situasi saat ini pada dasarnya normal."},
{"l":3,"z":"国庆的时候，广场上人特别多。","p":"guóqìng de shíhou guǎngchǎng shàng rén tèbié duō","i":"Selama Hari Nasional, ada banyak orang di alun-alun."},
{"l":3,"z":"当初我不理解他，现在明白了。","p":"dāngchū wǒ bù lǐjiě tā xiànzài míngbai le","i":"Awalnya aku tidak memahaminya, tapi sekarang aku mengerti."},
{"l":3,"z":"二十一世纪是科技的时代。","p":"èr shí yī shìjì shì kējì de shídài","i":"Abad ke-21 adalah era teknologi."},
{"l":3,"z":"他整天整整忙了十二个小时。","p":"tā zhěngtiān zhěngzhěng máng le shí èr gè xiǎoshí","i":"Dia sibuk dua belas jam sehari."},
{"l":3,"z":"我的听力进步了。","p":"wǒ de tīnglì jìnbù le","i":"Pendengaran saya membaik."},
{"l":3,"z":"他的专业是文学。","p":"tā de zhuānyè shì wénxué","i":"Jurusannya adalah sastra."},
{"l":3,"z":"他工作很主动，也很自觉。","p":"tā gōngzuò hěn zhǔdòng yě hěn zìjué","i":"Dia sangat proaktif dan sadar dalam pekerjaannya."},
{"l":3,"z":"我们讨论并且通过了这个建议。","p":"wǒmen tǎolùn bìngqiě tōngguò le zhè ge jiànyì","i":"Kami membahas dan menyetujui proposal ini."},
{"l":3,"z":"请复印三份文件。","p":"qǐng fùyìn sān fèn wénjiàn","i":"Silakan buat tiga salinan dokumen tersebut."},
{"l":3,"z":"他有当医生的资格。","p":"tā yǒu dāng yīshēng de zīgé","i":"Dia memenuhi syarat untuk menjadi dokter."},
{"l":3,"z":"实验室里正在做实验。","p":"shíyànshì lǐ zhèngzài zuò shíyàn","i":"Eksperimen sedang dilakukan di laboratorium."},
{"l":3,"z":"工人们在工厂里生产商品。","p":"gōngrén men zài gōngchǎng lǐ shēngchǎn shāngpǐn","i":"Pekerja memproduksi barang di pabrik."},
{"l":3,"z":"他创业成功，成立了自己的公司。","p":"tā chuàngyè chénggōng chénglì le zìjǐ de gōngsī","i":"Ia sukses memulai bisnis dan mendirikan perusahaan sendiri."},
{"l":3,"z":"房子里面很暖和，外面很冷。","p":"fángzi lǐmiàn hěn nuǎnhuo wàimiàn hěn lěng","i":"Di dalam rumah hangat dan di luar dingin."},
{"l":3,"z":"人群当中有一位老人。","p":"rénqún dāngzhōng yǒu yī wèi lǎorén","i":"Ada seorang lansia di antara kerumunan."},
{"l":3,"z":"眼前是一片美丽的景色。","p":"yǎnqián shì yī piàn měilì de jǐngsè","i":"Di depan mataku terbentang pemandangan indah."},
{"l":3,"z":"大使馆在这个区。","p":"dàshǐguǎn zài zhè ge qū","i":"Kedutaan ada di daerah ini."},
{"l":3,"z":"请把行李放在上面。","p":"qǐng bǎ xíngli fàng zài shàngmiàn","i":"Silakan letakkan barang bawaanmu di atas."},
{"l":3,"z":"我们按照路线前往首都。","p":"wǒmen ànzhào lùxiàn qiánwǎng shǒudū","i":"Kami mengikuti rute menuju ibu kota."},
{"l":3,"z":"他开车的速度太快了。","p":"tā kāichē de sùdù tài kuài le","i":"Dia mengemudi terlalu cepat."},
{"l":3,"z":"他赶到机场的时候，飞机已经起飞了。","p":"tā gǎndào jīchǎng de shíhou fēijī yǐjīng qǐfēi le","i":"Sesampainya di bandara, pesawat sudah lepas landas."},
{"l":3,"z":"这件上衣是有名的牌子。","p":"zhè jiàn shàngyī shì yǒumíng de páizi","i":"Atasan ini bermerek terkenal."},
{"l":3,"z":"买保险要看清楚费用。","p":"mǎi bǎoxiǎn yào kàn qīngchǔ fèiyòng","i":"Saat membeli asuransi, kamu perlu memperhatikan biayanya."},
{"l":3,"z":"衣服和服装店都在二层。","p":"yīfu hé fúzhuāng diàn dōu zài èr céng","i":"Toko pakaian ada di lantai dua."},
{"l":3,"z":"这个汤有点儿甜。","p":"zhè ge tāng yǒudiǎnr tián","i":"Sup ini agak manis."},
{"l":3,"z":"红茶和可乐，你要哪个？","p":"hóngchá hé kělè nǐ yào nǎ ge","i":"Teh hitam atau kola, kamu mau yang mana?"},
{"l":3,"z":"天空中一片光明。","p":"tiānkōng zhōng yī piàn guāngmíng","i":"Langit dipenuhi cahaya."},
{"l":3,"z":"外面很静，一点儿声音都没有。","p":"wàimiàn hěn jìng yīdiǎnr shēngyīn dōu méiyǒu","i":"Di luar sangat sepi, tidak ada suara sama sekali."},
{"l":3,"z":"多运动可以预防生病。","p":"duō yùndòng kěyǐ yùfáng shēngbìng","i":"Olahraga rutin dapat mencegah penyakit."},
{"l":3,"z":"卫生间要保持卫生。","p":"wèishēngjiān yào bǎochí wèishēng","i":"Kamar mandi harus tetap higienis."},
{"l":3,"z":"我们队进入了决赛。","p":"wǒmen duì jìnrù le juésài","i":"Tim kami lolos ke final."},
{"l":3,"z":"教练带领队员们训练。","p":"jiàoliàn dàilǐng duìyuán men xùnliàn","i":"Pelatih memimpin para pemain dalam latihan."},
{"l":3,"z":"乐队的演出非常精彩。","p":"yuèduì de yǎnchū fēicháng jīngcǎi","i":"Penampilan band ini sangat bagus."},
{"l":3,"z":"我用收音机收听广播。","p":"wǒ yòng shōuyīnjī shōutīng guǎngbō","i":"Saya mendengarkan siaran radio."},
{"l":3,"z":"孩子们喜欢玩具。","p":"háizi men xǐhuan wánjù","i":"Anak-anak menyukai mainan."},
{"l":3,"z":"武术在民间很流行。","p":"wǔshù zài mínjiān hěn liúxíng","i":"Seni bela diri sangat populer di kalangan masyarakat."},
{"l":3,"z":"她伤心得哭了。","p":"tā shāngxīn dé kū le","i":"Dia sangat sedih sampai dia menangis."},
{"l":3,"z":"他很乐观，从来不难过。","p":"tā hěn lèguān cóngláibù nánguò","i":"Dia optimis dan tidak pernah sedih."},
{"l":3,"z":"他的话让人感受到温暖。","p":"tā dehuà ràng rén gǎnshòu dào wēnnuǎn","i":"Kata-katanya membuat orang merasa hangat."},
{"l":3,"z":"他是一个坚强的人。","p":"tā shì yī ge jiānqiáng de rén","i":"Dia orang yang tangguh."},
{"l":3,"z":"这件事给我留下了深刻的印象。","p":"zhè jiàn shì gěi wǒ liúxià le shēnkè de yìnxiàng","i":"Kejadian ini meninggalkan kesan mendalam bagi saya."},
{"l":3,"z":"他反对这个计划。","p":"tā fǎnduì zhè ge jìhuà","i":"Dia menentang rencana itu."},
{"l":3,"z":"他否认了这件事。","p":"tā fǒurèn le zhè jiàn shì","i":"Dia menyangkal kejadian itu."},
{"l":3,"z":"大家对他的评价很高。","p":"dàjiā duì tā de píngjià hěn gāo","i":"Semua orang sangat menghargainya."},
{"l":3,"z":"做人要有爱心。","p":"zuò rén yào yǒu àixīn","i":"Jadilah orang yang penuh kasih."},
{"l":3,"z":"他克服了很多困难。","p":"tā kèfú le hěn duō kùnnan","i":"Dia mengatasi banyak kesulitan."},
{"l":3,"z":"河边有很多石头和沙子。","p":"hé biān yǒu hěn duō shítou hé shāzi","i":"Ada banyak batu dan pasir di tepi sungai."},
{"l":3,"z":"阳光下，天空特别蓝。","p":"yángguāng xià tiānkōng tèbié lán","i":"Di bawah sinar matahari, langit sangat biru."},
{"l":3,"z":"火很危险，一定要小心。","p":"huǒ hěn wēixiǎn yīdìng yào xiǎoxīn","i":"Api itu berbahaya, jadi berhati-hatilah."},
{"l":3,"z":"机器和设备都是新的。","p":"jīqì hé shèbèi dōu shì xīn de","i":"Mesin dan peralatan semuanya baru."},
{"l":3,"z":"我收到了一个重要邮件。","p":"wǒ shōudào liǎo yī ge zhòngyào yóujiàn","i":"Saya menerima email penting."},
{"l":3,"z":"这是重要的证据。","p":"zhè shì zhòngyào de zhèngjù","i":"Ini adalah bukti penting."},
{"l":3,"z":"媒体报道了这个事件。","p":"méitǐ bàodào le zhè ge shìjiàn","i":"Media memberitakan kejadian tersebut."},
{"l":3,"z":"任何人都可以参加。","p":"rènhé rén dōu kěyǐ cānjiā","i":"Siapa pun dapat berpartisipasi."},
{"l":3,"z":"大家各自回家了。","p":"dàjiā gèzì huíjiā le","i":"Mereka pulang ke rumah masing-masing."},
{"l":3,"z":"这两个方法，比较一下。","p":"zhè liǎng gè fāngfǎ bǐjiào yī xià","i":"Mari kita bandingkan kedua metode ini."},
{"l":3,"z":"当然可以！","p":"dāngrán kěyǐ","i":"Tentu!"},
{"l":3,"z":"赶快上车！","p":"gǎnkuài shàngchē","i":"Cepat naik!"},
{"l":3,"z":"好好休息吧。","p":"hǎohǎo xiūxi ba","i":"Selamat beristirahat."},
{"l":3,"z":"我仅仅是问问。","p":"wǒ jǐnjǐn shì wèn wèn","i":"Saya hanya bertanya."},
{"l":3,"z":"恐怕要下雨了。","p":"kǒngpà yào xiàyǔ le","i":"Sepertinya akan turun hujan."},
{"l":3,"z":"难道你不知道吗？","p":"nándào nǐ bù zhīdào ma","i":"Apakah kamu tidak tahu?"},
{"l":3,"z":"他始终坚持着。","p":"tā shǐzhōng jiānchí zhe","i":"Dia selalu bertahan."},
{"l":3,"z":"两国相互理解，关系相当友好。","p":"liǎng guó xiānghù lǐjiě guānxi xiāngdāng yǒuhǎo","i":"Kedua negara saling memahami dan memiliki hubungan yang cukup bersahabat."},
{"l":3,"z":"天晚了，我只好回家。","p":"tiān wǎn le wǒ zhǐhǎo huíjiā","i":"Hari sudah larut, jadi aku harus pulang."},
{"l":3,"z":"这是专门为你做的。","p":"zhè shì zhuānmén wèi nǐ zuò de","i":"Ini dibuat khusus untukmu."},
{"l":3,"z":"请按要求做。","p":"qǐng àn yāoqiú zuò","i":"Silakan lakukan seperti yang diminta."},
{"l":3,"z":"他朝我笑了笑。","p":"tā cháo wǒ xiào le xiào","i":"Dia tersenyum padaku."},
{"l":3,"z":"因此，我们要早做准备。","p":"yīncǐ wǒmen yào zǎo zuò zhǔnbèi","i":"Oleh karena itu, kita perlu mempersiapkannya sejak dini."},
{"l":3,"z":"要是你来，就告诉我。","p":"yàoshi nǐ lái jiù gàosù wǒ","i":"Kalau kamu datang, beri tahu aku."},
{"l":3,"z":"他所说的都是事实。","p":"tā suǒ shuō de dōu shì shìshí","i":"Semua yang dia katakan adalah benar."},
{"l":3,"z":"气温在慢慢上升。","p":"qìwēn zài mànmàn shàngshēng","i":"Suhu perlahan meningkat."},
{"l":3,"z":"这是个好主意。","p":"zhè shì gè hǎo zhǔyi","i":"Ini adalah ide yang bagus."},
{"l":3,"z":"见到老朋友，他乐了。","p":"jiàndào lǎopéngyou tā lè le","i":"Dia senang melihat teman lamanya."},
{"l":3,"z":"事实上，他早就知道了。","p":"shìshíshàng tā zǎojiù zhīdào le","i":"Sebenarnya dia sudah mengetahuinya."},
{"l":3,"z":"新方法产生了好的效果。","p":"xīn fāngfǎ chǎnshēng le hǎo de xiàoguǒ","i":"Pendekatan baru ini membuahkan hasil yang baik."},
{"l":3,"z":"人民的生活越来越美好。","p":"rénmín de shēnghuó yuèláiyuè měihǎo","i":"Kehidupan rakyat semakin sejahtera."},
{"l":3,"z":"这次我来付钱。","p":"zhè cì wǒ lái fù qián","i":"Kali ini aku yang bayar."},
{"l":3,"z":"他任所长已经十年了。","p":"tā rèn suǒcháng yǐjīng shí nián le","i":"Dia sudah sepuluh tahun menjabat sebagai kepala kantor."},
{"l":3,"z":"我是这个团体的会员。","p":"wǒ shì zhè ge tuántǐ de huìyuán","i":"Saya adalah anggota grup ini."},
{"l":3,"z":"请把这本书传给他。","p":"qǐng bǎ zhè běn shū chuán gěi tā","i":"Tolong berikan buku ini padanya."},
{"l":3,"z":"我保证完成任务。","p":"wǒ bǎozhèng wánchéng rènwu","i":"Saya berjanji untuk menyelesaikan pekerjaan itu."},
{"l":3,"z":"我完全信任他。","p":"wǒ wánquán xìnrèn tā","i":"Saya percaya padanya sepenuhnya."},
{"l":3,"z":"这块手表值一万块钱。","p":"zhè kuài shǒubiǎo zhí yī wàn kuài qián","i":"Jam tangan ini bernilai sepuluh ribu yuan."},
{"l":3,"z":"全场观众热烈欢迎选手们。","p":"quánchǎng guānzhòng rèliè huānyíng xuǎnshǒu men","i":"Penonton menyambut hangat para peserta."},
{"l":3,"z":"请说得具体一点儿。","p":"qǐng shuō dé jùtǐ yīdiǎnr","i":"Harap lebih spesifik."},
{"l":3,"z":"他内心其实很紧张。","p":"tā nèixīn qíshí hěn jǐnzhāng","i":"Dia sebenarnya sangat gugup."},
{"l":3,"z":"老师给我们分组讨论。","p":"lǎoshī gěi wǒmen fēnzǔ tǎolùn","i":"Guru membagi kami ke dalam kelompok untuk berdiskusi."},
{"l":3,"z":"月初我要去报到。","p":"yuèchū wǒ yào qù bào dào","i":"Awal bulan saya harus melapor."},
{"l":3,"z":"要好好利用时间。","p":"yào hǎohǎo lìyòng shíjiān","i":"Gunakan waktumu dengan baik."},
{"l":3,"z":"这家厂制造机器。","p":"zhè jiā chǎng zhìzào jīqì","i":"Pabrik ini membuat mesin."},
{"l":3,"z":"他的功夫很好。","p":"tā de gōngfu hěn hǎo","i":"Kung fu-nya sangat bagus."},
{"l":3,"z":"我们要加强训练。","p":"wǒmen yào jiāqiáng xùnliàn","i":"Kita perlu memperkuat latihan."},
{"l":3,"z":"这两个词有什么区别？","p":"zhè liǎng gè cí yǒu shénme qūbié","i":"Apa perbedaan antara kedua kata ini?"},
{"l":3,"z":"他及时赶到了现场。","p":"tā jíshí gǎndào liǎo xiànchǎng","i":"Dia tiba di tempat kejadian tepat pada waktunya."},
{"l":3,"z":"机器发出奇怪的声音。","p":"jīqì fāchū qíguài de shēngyīn","i":"Mesin mengeluarkan suara aneh."},
{"l":3,"z":"会上他第一个发言。","p":"huì shàng tā dì yī ge fāyán","i":"Dia orang pertama yang berbicara di rapat."},
{"l":3,"z":"他做事很可靠。","p":"tā zuò shì hěn kěkào","i":"Dia dapat diandalkan dalam pekerjaannya."},
{"l":3,"z":"这是合法的交易。","p":"zhè shì héfǎ de jiāoyì","i":"Ini transaksi legal."},
{"l":3,"z":"他们两个人吵架了。","p":"tāmen liǎng gè rén chǎojià le","i":"Mereka berdua bertengkar."},
{"l":3,"z":"我们是一个团结的集体。","p":"wǒmen shì yī ge tuánjié de jítǐ","i":"Kami adalah kolektif yang bersatu."},
{"l":3,"z":"这座城的东边有一条河。","p":"zhè zuò chéng de dōngbian yǒu yī tiáo hé","i":"Di timur kota ada sungai."},
{"l":3,"z":"他会三种外文。","p":"tā huì sān zhǒng wàiwén","i":"Dia bisa berbicara tiga bahasa asing."},
{"l":3,"z":"问题仍然存在。","p":"wèntí réngrán cúnzài","i":"Masalahnya masih ada."},
{"l":3,"z":"新办法明年实行。","p":"xīn bànfǎ míngnián shíxíng","i":"Metode baru akan diterapkan tahun depan."},
{"l":3,"z":"会议在三号会议室举行。","p":"huìyì zài sān hào huìyì shì jǔxíng","i":"Rapat diadakan di ruang rapat tiga."},
{"l":3,"z":"要认真对待工作。","p":"yào rènzhēn duìdài gōngzuò","i":"Tangani pekerjaanmu dengan serius."},
{"l":3,"z":"讨论慢慢展开了。","p":"tǎolùn mànmàn zhǎnkāi le","i":"Diskusi perlahan meluas."},
{"l":3,"z":"你干吗去？","p":"nǐ gànmá qù","i":"Mau ke mana?"},
{"l":3,"z":"我们应当节约用水。","p":"wǒmen yīngdāng jiéyuē yòng shuǐ","i":"Kita harus menghemat air."},
{"l":3,"z":"两个学校建立了联系。","p":"liǎng gè xuéxiào jiànlì le liánxì","i":"Dua sekolah menjalin hubungan."},
{"l":3,"z":"中午的阳光很强烈。","p":"zhōngwǔ de yángguāng hěn qiángliè","i":"Sinar matahari di siang hari sangat terik."},
{"l":3,"z":"活动的形式很多。","p":"huódòng de xíngshì hěn duō","i":"Jenis kegiatannya bermacam-macam."},
{"l":3,"z":"他从事影视工作。","p":"tā cóngshì yǐngshì gōngzuò","i":"Dia bekerja di industri film dan televisi."},
{"l":3,"z":"我的志愿是当医生。","p":"wǒ de zhìyuàn shì dāng yīshēng","i":"Cita-citaku menjadi dokter."},
{"l":3,"z":"总人数超过了一百。","p":"zǒng rénshù chāoguò le yì bǎi","i":"Jumlah total melebihi seratus."},
{"l":3,"z":"他取得了很大的成就。","p":"tā qǔdé le hěn dà de chéngjiù","i":"Dia meraih prestasi besar."},
{"l":3,"z":"我去打听一下消息。","p":"wǒ qù dǎting yī xià xiāoxi","i":"Saya akan mencari informasi."},
{"l":3,"z":"警察抓了那个坏人。","p":"jǐngchá zhuā le nà ge huàirén","i":"Polisi menangkap orang jahat itu."},
{"l":3,"z":"他指着地图给我看。","p":"tā zhǐzháo dìtú gěi wǒ kàn","i":"Dia menunjukkan peta itu kepadaku."},
{"l":3,"z":"我们队排名第一。","p":"wǒmen duì páimíng dì yī","i":"Tim kami menduduki peringkat pertama."},
{"l":3,"z":"工作在不断推进。","p":"gōngzuò zài bùduàn tuījìn","i":"Pekerjaan terus berjalan."},
{"l":3,"z":"这个停车场按小时收费。","p":"zhè ge tíngchēchǎng àn xiǎoshí shōufèi","i":"Parkiran ini mengenakan tarif per jam."},
{"l":3,"z":"医生救了他的生命。","p":"yīshēng jiù le tā de shēngmìng","i":"Dokter menyelamatkan hidupnya."},
{"l":3,"z":"中国文字很美。","p":"zhōngguó wénzì hěn měi","i":"Aksara Mandarin itu indah."},
{"l":3,"z":"这件衣服太旧了。","p":"zhè jiàn yīfu tài jiù le","i":"Baju ini terlalu usang."},
{"l":3,"z":"结果显示一切正常。","p":"jiēguǒ xiǎnshì yīqiè zhèngcháng","i":"Hasilnya menunjukkan semuanya baik-baik saja."},
{"l":3,"z":"别急，我有的是时间。","p":"bié jí wǒ yǒudeshì shíjiān","i":"Jangan khawatir, saya punya banyak waktu."},
{"l":3,"z":"会议正式开始。","p":"huìyì zhèngshì kāishǐ","i":"Rapat resmi dimulai."},
{"l":3,"z":"各民族要团结。","p":"gè mínzú yào tuánjié","i":"Semua suku bangsa harus bersatu."},
{"l":3,"z":"湖水很深。","p":"hú shuǐ hěn shēn","i":"Air danau itu sangat dalam."},
{"l":3,"z":"他演过一个警察。","p":"tā yǎn guò yī ge jǐngchá","i":"Dia berperan sebagai polisi."},
{"l":3,"z":"他今天状态很好。","p":"tā jīntiān zhuàngtài hěn hǎo","i":"Dia dalam kondisi yang baik hari ini."},
{"l":3,"z":"我们班级很团结。","p":"wǒmen bānjí hěn tuánjié","i":"Kelas kami sangat bersatu."},
{"l":3,"z":"这条路又直又平。","p":"zhè tiáo lù yòu zhí yòu píng","i":"Jalannya lurus dan datar."},
{"l":3,"z":"他看上去很亲切。","p":"tā kànshangqu hěn qīnqiè","i":"Dia tampak ramah."},
{"l":3,"z":"石油对工业非常重要。","p":"shíyóu duì gōngyè fēicháng zhòngyào","i":"Minyak bumi sangat penting bagi industri."},
{"l":3,"z":"时间还没有确定。","p":"shíjiān hái méiyǒu quèdìng","i":"Waktunya belum ditentukan."},
{"l":3,"z":"大家的积极性很高。","p":"dàjiā de jījíxìng hěn gāo","i":"Setiap orang sangat termotivasi."},
{"l":3,"z":"有空儿来我家做客。","p":"yǒu kòngr lái wǒ jiā zuòkè","i":"Kalau ada waktu, mampir ke rumahku."},
{"l":3,"z":"我白天没空儿，晚上可以。","p":"wǒ báitiān méi kòngr wǎnshang kěyǐ","i":"Siang saya tidak ada waktu, malam bisa."},
{"l":3,"z":"我们纪念这个重要的日子。","p":"wǒmen jìniàn zhè ge zhòngyào de rìzi","i":"Kami memperingati hari penting ini."},
{"l":3,"z":"会议下午五点结束。","p":"huìyì xiàwǔ wǔ diǎn jiéshù","i":"Rapat berakhir pada pukul 5 sore."},
{"l":3,"z":"这是一次大的考验。","p":"zhè shì yī cì dà de kǎoyàn","i":"Ini adalah ujian besar."},
{"l":3,"z":"请和我们联系。","p":"qǐng hé wǒmen liánxì","i":"Silakan hubungi kami."},
{"l":3,"z":"问题的范围很大。","p":"wèntí de fànwéi hěn dà","i":"Cakupan masalahnya sangat besar."},
{"l":3,"z":"他表明了自己的态度。","p":"tā biǎomíng liǎo zìjǐ de tàidu","i":"Dia memperjelas sikapnya."},
{"l":3,"z":"这件衬衣配这条裤子很好看。","p":"zhè jiàn chènyī pèi zhè tiáo kùzi hěn hǎokàn","i":"Kemeja ini terlihat bagus dengan celana ini."},
{"l":3,"z":"请计算一下这个月的水费。","p":"qǐng jìsuàn yī xià zhè ge yuè de shuǐ fèi","i":"Silakan hitung tagihan air bulan ini."},
{"l":3,"z":"请把会议内容记录下来。","p":"qǐng bǎ huìyì nèiróng jìlù xiàlai","i":"Tolong catat isi rapat."},
{"l":3,"z":"我们做了一个试验。","p":"wǒmen zuò le yī ge shìyàn","i":"Kami melakukan percobaan."},
{"l":3,"z":"我们谈了很久。","p":"wǒmen tán le hěn jiǔ","i":"Kami berbicara lama sekali."},
{"l":3,"z":"我要去赶火车。","p":"wǒ yào qù gǎn huǒchē","i":"Saya harus naik kereta."},
{"l":3,"z":"到路口向左转。","p":"dào lùkǒu xiàng zuǒ zhuǎn","i":"Belok kiri di persimpangan."},
{"l":3,"z":"我们达到了目标。","p":"wǒmen dádào liǎo mùbiāo","i":"Kami mencapai tujuan kami."},
{"l":3,"z":"工作有了新的进展。","p":"gōngzuò yǒu le xīn de jìnzhǎn","i":"Ada kemajuan baru dalam pekerjaan."},
{"l":3,"z":"我想退这张票。","p":"wǒ xiǎng tuì zhè zhāng piào","i":"Saya ingin mengembalikan tiket ini."},
{"l":3,"z":"这个方法很适用。","p":"zhè ge fāngfǎ hěn shìyòng","i":"Metode ini sangat praktis."},
{"l":3,"z":"大家配合得很好。","p":"dàjiā pèihé de hěn hǎo","i":"Semua orang bekerja sama dengan sangat baik."},
{"l":3,"z":"要长期坚持运动。","p":"yào chángqī jiānchí yùndòng","i":"Olahraga harus dilakukan secara konsisten dalam jangka panjang."},
{"l":3,"z":"上课要集中精神。","p":"shàngkè yào jízhōng jīngshén","i":"Berkonsentrasilah di kelas."},
{"l":3,"z":"我们队领先两分。","p":"wǒmen duì lǐngxiān liǎng fēn","i":"Tim kami unggul dua poin."},
{"l":3,"z":"经济在高速增长。","p":"jīngjì zài gāosù zēngzhǎng","i":"Perekonomian berkembang pesat."},
{"l":3,"z":"车站后面有一家小店。","p":"chēzhàn hòumian yǒu yī jiā xiǎo diàn","i":"Ada sebuah toko kecil di belakang stasiun."}
];

const HSK_WORDS = ["一路平安","一路顺风","不一会儿","不好意思","公共汽车","差一点儿","一会儿","一块儿","一家人","一点儿","一点点","一部分","下个月","中学生","中小学","为什么","事实上","交朋友","什么样","从来不","体育场","体育馆","信用卡","停车场","公交车","公务员","出租车","办公室","动物园","卫生间","图书馆","地铁站","大使馆","大多数","大学生","大自然","大部分","女孩儿","女朋友","好玩儿","实验室","对不起","小学生","小孩儿","小时候","小朋友","工程师","差不多","干什么","干活儿","开玩笑","快点儿","怎么办","怎么样","打电话","接下来","收音机","教学楼","方便面","早点儿","星期天","星期日","是不是","普通话","有意思","有时候","有点儿","有的是","服务员","比如说","没事儿","没什么","没关系","没想到","洗手间","洗衣机","电影院","电视机","男孩儿","男朋友","留学生","看上去","科学家","积极性","笔记本","老朋友","自行车","计算机","越来越","这时候","那会儿","银行卡","青少年","面条儿","音乐会","一些","一共","一切","一半","一定","一样","一生","一直","一般","一起","一边","上升","上午","上周","上学","上次","上班","上网","上衣","上课","上车","上面","下午","下周","下来","下次","下班","下课","下车","下边","下雨","下雪","不久","不但","不同","不够","不如","不少","不断","不满","不用","不行","不要","不见","不过","不通","不错","专业","专家","专门","世纪","东北","东南","东方","东西","东边","个子","中医","中午","中国","中学","中年","中心","中文","中级","中间","中餐","主人","主任","主动","主意","主要","举手","举行","乐观","乐队","也许","习惯","书包","书店","事件","事实","事情","交易","交给","交通","产生","亲切","人们","人口","人数","人民","人群","什么","仅仅","今后","今天","今年","介绍","仍然","从事","从小","他们","以上","以下","以为","以前","以后","以外","任何","任务","休假","休息","会员","会议","伤心","但是","住房","住院","体育","作业","作家","作文","作用","你们","使用","例如","例子","便宜","保持","保证","保险","信任","信号","信心","信息","假期","做到","做客","做法","做饭","停车","健康","儿子","先生","光明","克服","入口","全体","全国","全场","全家","全年","全身","全部","公司","公园","公平","公斤","公民","公路","公里","关上","关心","关机","关系","其中","其他","其实","具体","内容","内心","再见","写作","农村","冬天","决赛","准备","准确","凉快","出去","出发","出口","出国","出来","出现","出生","出租","出门","出院","分开","分数","分组","分钟","刚刚","刚才","创业","利用","别人","别的","到处","制造","前天","前年","前往","前边","办法","功夫","加强","加油","动作","动物","努力","包子","北京","北方","北边","区别","医生","医院","十分","千克","午睡","午餐","午饭","半夜","半天","半年","单位","南方","南边","卫生","印象","危险","原因","原来","去年","参加","参观","及时","友好","反对","发出","发现","发言","取得","受到","变成","句子","只好","只能","只要","叫作","可乐","可以","可怕","可是","可爱","可能","可靠","右边","司机","吃饭","各自","合法","合适","同事","同学","同时","同样","名单","名字","名称","后天","后来","后边","后面","否认","听写","听到","听力","听见","听讲","听说","吵架","告诉","周年","周末","味道","咱们","哥哥","哪些","哪儿","哪里","唱歌","商人","商品","商场","商店","商量","喜欢","回到","回去","回国","回家","回来","回答","因为","因此","团体","团结","困难","国外","国家","国庆","国际","图片","在家","地上","地图","地方","地点","地球","地铁","坏事","坏人","坏处","坚强","坚持","基本","增长","声音","复习","复印","夏天","外卖","外国","外地","外文","外语","外边","外面","多久","多么","多云","多少","多数","夜里","大事","大人","大声","大大","大学","大家","大小","大海","大衣","大量","大门","天上","天气","天空","太太","太阳","头发","头疼","奇怪","女人","女儿","女生","奶奶","她们","好久","好事","好人","好像","好吃","好听","好处","好多","好好","好看","如果","妈妈","妹妹","始终","姐姐","姓名","媒体","子女","字典","存在","学习","学期","学校","学生","学院","孩子","它们","安全","安静","完全","完成","实习","实在","实现","实行","实际","实验","客人","客气","家具","家庭","家里","家长","对待","对话","对面","小声","小姐","小学","小心","小时","小组","小说","少年","少数","就是","就要","展开","工业","工人","工作","工厂","左边","已经","市长","带来","带领","帮助","帮忙","常常","常用","常见","干净","干吗","干杯","平安","平常","平时","平等","年级","年轻","并且","广告","广场","广播","应当","应该","座位","建立","建议","开会","开始","开学","开心","开机","开车","弟弟","强烈","当中","当初","当时","当然","形式","影响","影片","影视","得出","得到","心中","心情","心里","必须","志愿","忘记","快乐","快要","快餐","忽然","态度","怎么","怎样","恐怕","情况","想法","想起","意思","意见","感到","感动","感受","感觉","感谢","愿意","慢慢","懂得","成为","成功","成就","成立","成绩","我们","或者","房东","房子","房租","房间","所以","所有","所长","手机","手表","才能","打印","打听","打工","打开","打球","打算","打车","找出","找到","护照","报名","报纸","报道","拿出","拿到","指着","按照","排名","排球","排队","接到","接受","接着","推进","提出","提到","提高","搬家","收入","收到","收听","收费","改变","放下","放假","放学","放心","故事","故意","效果","教学","教室","教师","教练","教育","数字","整个","整天","整整","文件","文字","文学","新年","新闻","方便","方向","方法","方面","旁边","旅客","旅游","旅行","日子","日报","日期","早上","早就","早晨","早餐","早饭","时代","时候","时间","明天","明年","明星","明白","星星","星期","春天","春节","昨天","显示","晚上","晚会","晚安","晚报","晚餐","晚饭","普通","普遍","景色","晴天","暖和","最后","最好","最近","月亮","月份","月初","有些","有人","有名","有用","朋友","服务","服装","本事","本子","机会","机器","机场","机票","条件","来到","来自","杯子","校园","校长","样子","桌子","检查","椅子","楼上","楼下","欢迎","歌迷","正在","正好","正常","正式","正是","正确","武术","母亲","比如","比较","民族","民间","气温","水平","水果","永远","汉字","汉语","汽车","沙子","没有","洗澡","活动","流利","流行","海边","消息","深刻","清楚","温度","温暖","游客","满意","漂亮","演出","火车","点头","热情","热烈","然后","照片","照相","照顾","爬山","爱人","爱好","爱心","爱情","父亲","父母","爷爷","爸爸","牌子","牛奶","特别","特点","状态","玩儿","玩具","现在","现场","班级","班长","球场","球迷","球队","球鞋","理想","理解","瓶子","生产","生命","生日","生气","生活","生病","生词","电影","电脑","电视","电话","男人","男生","画家","留下","病人","白天","白色","的话","目前","目标","目的","直接","相互","相信","相同","相当","相机","看到","看法","看病","看见","真正","真的","眼前","眼睛","睡觉","知识","知道","短信","石头","石油","确定","碰到","碰见","礼物","离开","秋天","科学","科技","空儿","空气","站住","笑话","笔记","第二","等于","等到","答应","筷子","篮球","米饭","精彩","精神","紧张","红色","红茶","纪念","练习","组成","组长","经常","经济","经理","经过","结束","结果","绿色","网上","网友","网球","网站","美丽","美好","美食","老人","老师","老年","考生","考试","考验","而且","联系","能够","自己","自由","自觉","舒服","节日","节目","节约","花园","英文","英语","范围","草地","药店","药水","药片","菜单","蓝色","虽然","行为","行人","行动","行李","衣服","表明","衬衣","裤子","西北","西医","西南","西方","西边","西餐","要是","要求","见到","见面","观众","观点","觉得","角度","警察","计划","计算","认为","认真","认识","讨论","训练","记住","记录","记得","讲话","许多","设备","证据","评价","词典","词语","试验","语言","说明","说话","请假","请坐","请客","请求","请问","读书","读音","课堂","课文","课本","谢谢","责任","费用","资格","走开","走路","走过","走进","赶到","赶快","起床","起来","起飞","超市","超过","路上","路口","路线","路边","身上","身体","身边","车上","车票","车站","车辆","达到","过去","过年","过来","运动","还是","还有","这么","这些","这儿","这时","这样","这边","这里","进入","进去","进展","进来","进步","进行","退休","送到","送给","适用","选手","通知","通过","速度","道理","道路","那么","那些","那儿","那时","那样","那边","那里","邮件","部分","配合","酒店","里头","里边","里面","重复","重新","重点","重要","重视","钱包","银行","长大","长期","门口","门票","问路","问题","队员","队长","阳光","阴天","院子","院长","随便","随时","难受","难听","难看","难过","难道","难题","集中","集体","零下","青年","非常","面前","面包","音乐","音节","顺利","顾客","预防","领先","颜色","飞机","食物","饭店","饭馆","饺子","首都","马上","马路","骑车","高中","高兴","高级","高速","鸡蛋","黄色","黑板","黑色","一","七","万","三","上","下","不","东","两","个","中","为","举","久","乐","九","也","书","买","了","事","二","云","五","交","亮","人","亿","从","他","付","们","件","任","份","会","传","但","位","低","住","你","信","倒","借","值","假","做","停","像","儿","元","先","克","全","八","六","关","养","再","写","冷","凉","几","出","分","刚","别","到","刻","前","办","加","动","包","北","区","十","千","半","卖","南","占","卡","厂","去","又","双","发","取","变","口","句","只","叫","号","吃","各","名","向","吗","吧","听","吹","呢","周","和","咱","响","哪","哭","唱","啊","喂","喊","喝","嘴","四","国","在","地","场","坏","坐","块","城","墙","多","夜","够","大","天","太","套","女","她","好","姓","字","学","它","完","室","家","对","封","小","少","就","层","山","岁","左","市","带","帮","常","平","年","床","店","度","座","开","弄","张","当","往","很","得","忘","忙","快","怕","急","总","您","想","慢","懂","成","我","或","所","手","才","打","找","把","抓","报","拉","拿","按","挺","换","掉","排","接","推","提","搬","支","收","改","放","救","教","数","斤","新","日","旧","早","是","晚","晴","更","最","月","有","朝","本","李","条","来","杯","查","树","楼","次","歌","段","每","比","毛","气","水","求","汤","没","河","油","洗","流","海","深","渴","湖","满","演","火","灯","点","热","熟","爬","爱","片","狗","猫","班","球","瓶","甜","生","用","电","男","画","留","疼","病","白","百","的","直","省","看","真","眼","着","睡","短","碗","碰","票","离","种","科","租","称","穿","站","笑","笔","第","等","算","篇","米","类","累","红","级","纸","练","组","给","绿","网","美","老","考","肉","背","能","脏","脚","脸","腿","船","节","花","茶","草","药","菜","蓝","蛋","行","街","表","装","西","要","见","角","让","记","讲","词","试","话","该","说","请","读","课","谁","谈","贵","费","走","赶","越","跑","跟","路","车","转","轻","辆","边","过","近","还","这","进","远","退","送","选","遍","道","那","都","配","酒","里","重","钟","钱","错","长","门","问","间","闻","队","阴","院","难","雨","雪","零","静","靠","面","鞋","页","顿","题","风","飞","饭","饱","饿","骑","高","鱼","鸟","鸡","黄","黑"];

const PY_SYLLABLES = new Set(["a","ba","bai","bian","biàn","bié","biān","biāo","biǎo","bu","bà","bàn","bào","bái","bèi","bì","bìng","bù","bú","bā","bān","bāng","bāo","bēi","běi","běn","bō","bǎ","bǎi","bǎn","bǎo","bǐ","chu","chuàng","chuán","chuáng","chuān","chuī","chà","chàng","chá","cháng","cháo","chèn","chén","chéng","chí","chóng","chù","chāo","chē","chēng","chī","chū","chūn","chǎn","chǎng","chǎo","chǔ","cuò","cài","cái","céng","cì","cí","cóng","cún","cān","cūn","cǎi","cǎo","cǐ","dao","de","di","diàn","diào","diǎn","diǎnr","du","duàn","duì","duō","duǎn","dà","dài","dàn","dào","dá","dé","dì","dìng","dòng","dù","dùn","dú","dā","dān","dāng","dēng","děng","dī","dōng","dōu","dū","dǎ","dǒng","er","fa","fang","fen","fu","fàn","fàng","fáng","fèi","fèn","fù","fú","fā","fāng","fēi","fēn","fēng","fǎ","fǎn","fǒu","gang","ge","gu","guài","guàn","guì","guò","guó","guān","guāng","guǎn","guǎng","guǒ","gàn","gào","gè","gèng","gé","gòng","gòu","gù","gāi","gān","gāng","gāo","gē","gēn","gěi","gōng","gǎi","gǎn","gǒu","hou","hua","huan","huo","huà","huài","huàn","huáng","huì","huìr","huí","huò","huó","huór","huā","huān","huǒ","hàn","hào","hái","háir","háng","hé","hòu","hóng","hù","hú","hē","hēi","hěn","hū","hǎi","hǎn","hǎo","jie","jing","jià","jiàn","jiào","jiè","jié","jiù","jiā","jiān","jiāo","jiē","jiě","jiǎ","jiǎn","jiǎng","jiǎo","jiǔ","jué","jì","jìn","jìng","jí","jù","jī","jīn","jīng","jǐ","jǐn","jǐng","jǔ","kan","kuai","kuài","kuàir","kuàng","kàn","kào","kè","kòngr","kù","kùn","kāi","kāng","kē","kě","kōng","kū","kǎ","kǎo","kǒng","kǒu","la","lai","le","li","liang","liàn","liàng","lián","liáng","liè","liù","liú","liǎn","liǎng","liǎo","là","lái","lán","lè","lèi","lì","lí","lín","líng","lóu","lù","lùn","lā","lěng","lǎo","lǐ","lǐng","lǚ","lǜ","ma","me","mei","men","mian","miàn","mài","màn","má","máng","máo","mèi","méi","mén","mìng","mí","mín","míng","mò","mù","mā","māo","měi","mǎ","mǎi","mǎn","mǐ","mǔ","nai","nan","ne","niàn","nián","niú","niǎo","nuǎn","nà","nàr","ná","nán","nèi","néng","nín","nòng","nóng","nǎ","nǎi","nǎo","nǎr","nǐ","nǔ","nǚ","piàn","piào","pián","piān","pà","pá","pái","páng","pèi","pèng","péng","píng","pǎo","pǐn","pǔ","qi","qing","qián","qiáng","qiè","qiú","qiān","qiě","qiū","qu","quán","què","qì","qìng","qí","qíng","qù","qún","qī","qīn","qīng","qū","qǐ","qǐng","qǔ","r","ren","ràng","rán","rè","rèn","rén","réng","rì","ròu","róng","rù","rú","shang","shao","sheng","shi","shuì","shuí","shuāng","shuō","shuǐ","shàng","shào","shè","shéi","shén","shì","shìr","shí","shòu","shù","shùn","shú","shā","shān","shāng","shāo","shēn","shēng","shěng","shī","shōu","shū","shǎo","shǐ","shǒu","si","suàn","suì","suí","suī","suǒ","sài","sè","sì","sòng","sù","sān","sī","tai","ting","tián","tiáo","tiáor","tiān","tiě","tou","tuán","tuì","tuī","tuǐ","tài","tào","tán","táng","tè","téng","tí","tíng","tóng","tóu","tú","tā","tāng","tīng","tōng","tǎo","tǐ","tǐng","wu","wài","wàn","wàng","wán","wánr","wèi","wèn","wéi","wén","wù","wēi","wēn","wǎn","wǎng","wǒ","wǔ","xi","xia","xie","xing","xià","xiàn","xiàng","xiào","xiè","xié","xiān","xiāng","xiāo","xiē","xiě","xiū","xiǎn","xiǎng","xiǎo","xué","xuě","xuǎn","xì","xìn","xìng","xí","xíng","xùn","xī","xīn","xīng","xū","xǐ","xǔ","ya","yang","ye","yi","ying","you","yuàn","yuán","yuè","yuē","yuǎn","yàn","yàng","yào","yán","yáng","yè","yé","yì","yìn","yí","yín","yíng","yòng","yòu","yóu","yù","yùn","yú","yún","yā","yāo","yě","yī","yīn","yīng","yǎn","yǎng","yǐ","yǐng","yǒng","yǒu","yǔ","zhe","zhu","zhuàng","zhuā","zhuān","zhuāng","zhuō","zhuǎn","zhàn","zhào","zháo","zhè","zhèng","zhèr","zhì","zhí","zhòng","zhù","zhāng","zhēn","zhě","zhěng","zhī","zhōng","zhōu","zhǎn","zhǎng","zhǎo","zhǐ","zhǒng","zhǔ","zhǔn","zi","zuì","zuò","zuó","zuǐ","zuǒ","zài","zào","zán","zé","zì","zú","zāng","zēng","zěn","zī","zū","zǎo","zǐ","zǒng","zǒu","zǔ","ài","àn","è","èr","ér","ān"]);

/* ============================================================
   Warna nada — auto-detect akritik
   ============================================================ */

const TONE_COLORS = {0:"t5",1:"t1",2:"t2",3:"t3",4:"t4",5:"t5"};

const TONES = {
 "ā":"1","á":"2","ǎ":"3","à":"4",
 "ē":"1","é":"2","ě":"3","è":"4",
 "ī":"1","í":"2","ǐ":"3","ì":"4",
 "ō":"1","ó":"2","ǒ":"3","ò":"4",
 "ū":"1","ú":"2","ǔ":"3","ù":"4",
 "ǖ":"1","ǘ":"2","ǚ":"3","ǜ":"4",
};

const WORD_DICT = [...new Set([
  ...HSK_WORDS,
  "电话号码","公交车票","服务员","火车站","红绿灯","不好意思","没关系","不客气",
  "我们","你们","他们","她们","你好","您好","大家","自己",
  "三点半","星期六","星期天","星期一","星期二","星期三","星期四","星期五",
  "多少钱","怎么样","为什么","每个人","每个月","一点点","一点儿","等一下",
  "听见","看见","生病","喝水","吃饭","米饭","面条","青菜","点菜","买单",
  "好吃","苹果","便宜","太贵","小号","那种","现金","开门","老板","光临",
  "头疼","发烧","医院","医生","吃药","休息","担心","别担心","天气","下雨",
  "症状","难过","睡觉","起床","一次","看看","好好","用餐","愉快","舒服",
  "下雪","车站","公交车","地铁","出租车","开车","走路","左转","右转","直走",
  "左边","右边","分钟","十分钟","五分钟","小时","现在","今天","明天","昨天",
  "早上","上午","中午","下午","晚上","时候","时间","星期","每天","同样",
  "汉语","中文","英语","学生","老师","学校","小学","大学","考试","学习",
  "爸爸","妈妈","哥哥","姐姐","弟弟","妹妹","女儿","儿子","家人","家里",
  "朋友","名字","高兴","认识","谢谢","对不起","再见","请问","加油","没问题",
  "问题","可以","应该","需要","觉得","知道","还是","因为","所以","但是",
  "可是","如果","已经","正在","只能","一起","一样","一下","一点","有点",
  "有点儿","有些","这个","那个","这些","那些","这儿","这里","那儿","那里","哪儿",
  "哪里","什么","怎么","多少","两个","一个","一百","三十","七十","一元",
  "一张","一起","一共","二十","十六","十块","块","元","钱","好","很","太",
  "也","都","就","才","只","再","又","还","最","更","真","非常","不","没",
  "别","在","有","是","会","能","要","想","去","来","回","吃","喝","买",
  "卖","看","听","说","学","做","等","给","对","从","离","向","把","被",
  "得","的","了","着","过","吗","呢","吧","啊","呀","和","跟","或者","次",
  "课","岁","口","人","家","里","上","下","前","后","水","茶","咖啡","辣",
  "饿","渴","累","热","冷","远","近","到","走","票","车","张","个","点",
  "分","半","月","年","天","叫","爱","开","用","买","多","少","高","大",
  "小","新","旧","忙","难","对","错","好","走","看","听"
])].sort((a,b)=>b.length-a.length);

const INTERVALS = [1,3,7,16,35,60];

/* ============================================================
   20 Tata Bahasa Terstruktur (Grammar Hub) HSK 1-4
   ============================================================ */
const GRAMMAR_RULES = [
  {
    "id": "g1_measure",
    "num": 1,
    "title": "Kata Bantu Bilangan (量词 - Measure Words)",
    "level": "HSK 1-2",
    "levelCode": 1,
    "formula": "Angka / 这 (zhè) / 那 (nà) / 哪 (nǎ) + 量词 (Liàngcí) + Kata Benda",
    "desc": "Dalam bahasa Mandarin, kata benda tidak bisa langsung ditempelkan dengan angka atau kata tunjuk (ini/itu). Harus ada kata bantu bilangan (measure word / classifier) di tengahnya.",
    "points": [
      "个 (gè): Penggolong umum untuk orang, benda abstrak, atau benda sehari-hari (一个人, 一个苹果).",
      "本 (běn): Khusus untuk buku, kamus, majalah, atau dokumen berjilid (一本书, 两本词典).",
      "张 (zhāng): Benda datar atau tipis: kertas, meja, tiket, foto, tempat tidur (一张纸, 一张桌子, 一张票).",
      "条 (tiáo): Benda panjang, lentur, atau berkelok: celana, jalan, ikan, sungai (一条裤子, 一条路, 一条鱼).",
      "件 (jiàn): Pakaian atasan, peristiwa/urusan, atau hadiah (一件衣服, 一件事).",
      "只 (zhī): Hewan kecil atau satu dari sepasang (一只猫, 一只鸟, 一只手).",
      "杯 (bēi) & 瓶 (píng): Wadah minuman: cangkir/gelas dan botol (一杯茶, 两瓶水).",
      "辆 (liàng) & 支 (zhī): Kendaraan beroda (一辆车) dan benda silindris seperti pena (一支笔)."
    ],
    "examples": [
      {
        "zh": "请给我一杯热咖啡和一张纸。",
        "py": "Qǐng gěi wǒ yì bēi rè kāfēi hé yì zhāng zhǐ.",
        "id": "Tolong beri saya secangkir kopi panas dan selembar kertas."
      },
      {
        "zh": "我在书店买了两本很有意思的汉语书。",
        "py": "Wǒ zài shūdiàn mǎi le liǎng běn hěn yǒu yìsi de hànyǔ shū.",
        "id": "Saya membeli dua buku Mandarin yang sangat menarik di toko buku."
      },
      {
        "zh": "这条裤子太贵了，那件衬衫很便宜。",
        "py": "Zhè tiáo kùzi tài guì le, nà jiàn chènshān hěn piányi.",
        "id": "Celana ini terlalu mahal, kemeja itu sangat murah."
      }
    ],
    "quiz": [
      {
        "q": "Pilihlah kata bantu bilangan yang tepat: 我想买一___词典。",
        "opts": [
          "本 (běn)",
          "张 (zhāng)",
          "条 (tiáo)",
          "个 (gè)"
        ],
        "ans": 0,
        "expl": "Benar! Kamus (词典) adalah buku/dokumen berjilid, sehingga memakai kata penggolong '本 (běn)'."
      },
      {
        "q": "Pilihlah kata bantu bilangan yang tepat: 桌子上有两___高铁票。",
        "opts": [
          "件 (jiàn)",
          "只 (zhī)",
          "张 (zhāng)",
          "辆 (liàng)"
        ],
        "ans": 2,
        "expl": "Benar! Tiket (票) adalah benda datar dan tipis, sehingga memakai '张 (zhāng)'."
      }
    ]
  },
  {
    "id": "g2_le",
    "num": 2,
    "title": "Partikel Aspek 了 (le) - Aksi Selesai & Perubahan Keadaan",
    "level": "HSK 1-2",
    "levelCode": 1,
    "formula": "Verb + 了 (Aksi selesai) / Kalimat + 了 (Perubahan situasi baru)",
    "desc": "Partikel 了 (le) adalah salah satu tata bahasa paling sering dipakai. Ada dua fungsi utama: (1) Menyatakan aksi telah selesai dilakukan (动态助词), dan (2) Menyatakan perubahan situasi baru yang sebelumnya tidak begitu (语气助词).",
    "points": [
      "Verb + 了: Aksi spesifik telah selesai. Contoh: 我吃了早饭 (Saya sudah makan sarapan).",
      "Kalimat + 了: Situasi berubah / 'sekarang sudah jadi begini'. Contoh: 下雨了 (Sekarang hujan / sudah turun hujan).",
      "太……了 (tài... le): Pola seruan 'terlalu...'. Contoh: 太好了! (Bagus sekali!), 太贵了! (Terlalu mahal!).",
      "快要……了 (kuài yào... le): Menyatakan aksi akan segera terjadi. Contoh: 我们快要毕业了 (Kita sebentar lagi akan lulus).",
      "Negasi: Jangan pakai 了 saat dinegasikan dengan 没有 (méiyǒu)! Katakan 我没有吃早饭 (Bukan: 我没有吃了早饭)."
    ],
    "examples": [
      {
        "zh": "我昨天买了一辆新自行车。",
        "py": "Wǒ zuótiān mǎi le yí liàng xīn zìxíngchē.",
        "id": "Kemarin saya membeli sebuah sepeda baru."
      },
      {
        "zh": "天黑了，我们回宿舍吧。",
        "py": "Tiān hēi le, wǒmen huí sùshè ba.",
        "id": "Hari sudah gelap (terjadi perubahan keadaan), mari kita pulang ke asrama."
      },
      {
        "zh": "我没去图书馆，因为生病了。",
        "py": "Wǒ méi qù túshūguǎn, yīnwèi shēngbìng le.",
        "id": "Saya tidak pergi ke perpustakaan karena jatuh sakit."
      }
    ],
    "quiz": [
      {
        "q": "Manakah kalimat negasi lampau yang tepat?",
        "opts": [
          "我昨天没看了电影。",
          "我昨天没看电影。",
          "我不看了电影昨天。",
          "我没看了那本小说。"
        ],
        "ans": 1,
        "expl": "Benar! Saat menggunakan '没(有)' untuk menepis perbuatan lampau, partikel '了' HARUS dihilangkan: 我昨天没看电影."
      }
    ]
  },
  {
    "id": "g3_guo",
    "num": 3,
    "title": "Partikel Aspek 过 (guo) - Pengalaman Pernah / Belum Pernah",
    "level": "HSK 2",
    "levelCode": 1,
    "formula": "Subjek + Verb + 过 + (Objek) | Negasi: 没(有) + Verb + 过",
    "desc": "Partikel 过 (guo) diletakkan tepat di belakang kata kerja untuk menyatakan bahwa subjek pernah mengalami atau melakukan aksi tersebut seumur hidupnya.",
    "points": [
      "Menekankan pengalaman lampau (pernah), bukan sekadar aksi tadi baru selesai (beda dengan 了).",
      "Bentuk negasi selalu memakai 没 (méi) atau 没有 (méiyǒu) sebelum kata kerja: 没 + V + 过 (belum pernah).",
      "Untuk bertanya: Subjek + Verb + 过 + Objek + 吗 / 没有？(你吃过北京烤鸭吗？)",
      "Perbedaan: '你去中国了吗？' (Apakah kamu sudah berangkat ke Tiongkok baru-baru ini?) vs '你去过中国吗？' (Pernahkah kamu ke Tiongkok seumur hidupmu?)."
    ],
    "examples": [
      {
        "zh": "我学过一年汉语，但是说得不太流利。",
        "py": "Wǒ xué guo yì nián hànyǔ, dànshì shuō de bú tài liúlì.",
        "id": "Saya pernah belajar Mandarin selama setahun, tetapi bicaranya belum begitu lancar."
      },
      {
        "zh": "你以前去过北京大学吗？",
        "py": "Nǐ yǐqián qù guo Běijīng Dàxué ma?",
        "id": "Apakah kamu sebelumnya pernah mengunjungi Universitas Peking?"
      },
      {
        "zh": "我从来没有吃过这么辣的四川火锅。",
        "py": "Wǒ cónglái méiyǒu chī guo zhème là de Sìchuān huǒguō.",
        "id": "Saya sama sekali belum pernah makan hotpot Sichuan yang sepedas ini."
      }
    ],
    "quiz": [
      {
        "q": "Bagaimana cara mengatakan 'Saya belum pernah naik kereta cepat'?",
        "opts": [
          "我不坐过高铁。",
          "我没坐过高铁。",
          "我坐不高 brute 铁。",
          "我没坐了高铁。"
        ],
        "ans": 1,
        "expl": "Benar! Negasi untuk '过' selalu memakai '没(有)' di depan kata kerja: 我没坐过高铁 (Wǒ méi zuò guo gāotiě)."
      }
    ]
  },
  {
    "id": "g4_zhe",
    "num": 4,
    "title": "Partikel Aspek 着 (zhe) - Keadaan yang Berlanjut (Continuous State)",
    "level": "HSK 2-3",
    "levelCode": 1,
    "formula": "Subjek + Verb + 着 + Objek / Status | V1 + 着 + (Objek) + V2",
    "desc": "Partikel 着 (zhe) menandakan kelanjutan dari suatu kondisi atau postur hasil dari suatu aksi (bukan sedang melakukan gerakannya, melainkan kondisinya tetap berlangsung).",
    "points": [
      "Kondisi tetap berlangsung: 门开着 (Pintu dalam keadaan terbuka), 他戴着眼镜 (Dia sedang memakai kacamata).",
      "V1 + 着 + V2: Melakukan aksi kedua (V2) sambil berada dalam keadaan atau cara aksi pertama (V1). Contoh: 老师站着上课 (Guru mengajar sambil berdiri).",
      "Perbedaan 在 (zài) vs 着 (zhe): 在 fokus pada proses gerak aksi (正在看书 sedang membaca), sedangkan 着 fokus pada kondisi stabil yang bertahan (拿着一本书 sedang memegang buku).",
      "Negasi: 没 + Verb + 着 (门没开着 Pintu tidak dalam keadaan terbuka)."
    ],
    "examples": [
      {
        "zh": "教室的门开着，同学们都在里面听讲。",
        "py": "Jiàoshì de mén kāi zhe, tóngxuémen dōu zài lǐmiàn tīngjiǎng.",
        "id": "Pintu ruang kelas terbuka, teman-teman sekelas semua sedang mendengarkan kuliah di dalam."
      },
      {
        "zh": "他手里拿着一本汉语词典。",
        "py": "Tā shǒu lǐ ná zhe yì běn hànyǔ cídiǎn.",
        "id": "Di tangannya sedang memegang sebuah kamus bahasa Mandarin."
      },
      {
        "zh": "请不要笑着说严肃的事情。",
        "py": "Qǐng bú yào xiào zhe shuō yánsù de shìqing.",
        "id": "Tolong jangan membicarakan hal serius sambil tertawa."
      }
    ],
    "quiz": [
      {
        "q": "Lengkapilah kalimat: 教授在讲台上___着讲课。",
        "opts": [
          "走",
          "站",
          "去",
          "到"
        ],
        "ans": 1,
        "expl": "Benar! '站着讲课' (zhàn zhe jiǎngkè) berarti mengajar dalam keadaan berdiri di atas podium."
      }
    ]
  },
  {
    "id": "g5_ba",
    "num": 5,
    "title": "Kalimat Disposisi 把 (bǎ字句) - Memanipulasi / Memindahkan Objek",
    "level": "HSK 3",
    "levelCode": 2,
    "formula": "Subjek + 把 + Objek Spesifik + Verb + Elemen Hasil / Arah / Posisi",
    "desc": "Kalimat 把 digunakan ketika subjek melakukan tindakan terhadap suatu objek tertentu sehingga kondisi, posisi, atau wujud objek tersebut mengalami perubahan atau dipindahkan.",
    "points": [
      "Objek harus definit (jelas/spesifik), lawan bicara sudah tahu objek apa yang dimaksud.",
      "Kata kerja TIDAK BISA berdiri sendiri! Harus ada buntutnya: komplemen hasil (完, 好), komplemen arah (来, 去), atau penempatan (在, 到, 给).",
      "Pola penempatan: 把 + Objek + 放/写/送 + 在/到/给 + Tempat/Orang (把书放在桌子上).",
      "Negasi (没) dan kata modal (想, 能, 应该) HARUS diletakkan SEBELUM 把: 我没把作业写完 (Bukan: 我把作业没写完)."
    ],
    "examples": [
      {
        "zh": "请大家把手机放在书包里。",
        "py": "Qǐng dàjiā bǎ shǒujī fàng zài shūbāo lǐ.",
        "id": "Harap semuanya menaruh ponsel ke dalam tas."
      },
      {
        "zh": "你把今天的作业做完了吗？",
        "py": "Nǐ bǎ jīntiān de zuòyè zuò wán le ma?",
        "id": "Apakah kamu sudah menyelesaikan PR hari ini?"
      },
      {
        "zh": "我还没把这份报告交给王教授。",
        "py": "Wǒ hái méi bǎ zhè fèn bàogào jiāo gěi Wáng jiàoshòu.",
        "id": "Saya belum menyerahkan laporan ini kepada Profesor Wang."
      }
    ],
    "quiz": [
      {
        "q": "Manakah susunan kalimat '把' yang paling benar?",
        "opts": [
          "我把作业没做完。",
          "我没把作业做完。",
          "做完我把作业了。",
          "我把没作业做完。"
        ],
        "ans": 1,
        "expl": "Benar! Negasi '没' wajib ditaruh di depan '把': 我没把作业做完."
      }
    ]
  },
  {
    "id": "g6_bei",
    "num": 6,
    "title": "Kalimat Pasif 被 (bèi字句) - Bentuk Pasif & Konsekuensi",
    "level": "HSK 3",
    "levelCode": 2,
    "formula": "Penerima Aksi + 被 (叫 / 让) + Pelaku + Verb + Hasil",
    "desc": "Kalimat 被 digunakan untuk menyatakan bentuk pasif (di- / terkena). Biasanya dipakai untuk kejadian yang merugikan, tidak diharapkan, atau perubahan keadaan drastis.",
    "points": [
      "Pelaku bisa disembunyikan jika memakai 被: 我的钱包被偷了 (Dompet saya dicuri).",
      "Dalam percakapan lisan santai, orang Tiongkok sering memakai 叫 (jiào) atau 让 (ràng) menggantikan 被, namun pelakunya wajib disebut: 苹果让弟弟吃了 (Apelnya dimakan adik).",
      "Kata kerja harus disertai komplemen hasil atau partikel 了 (tidak boleh kata kerja telanjang).",
      "Negasi (没) diletakkan SEBELUM 被: 自行车没被弄坏 (Sepeda tidak dirusak)."
    ],
    "examples": [
      {
        "zh": "我的雨伞被风吹坏了。",
        "py": "Wǒ de yǔsǎn bèi fēng chuī huài le.",
        "id": "Payung saya rusak ditiup angin."
      },
      {
        "zh": "桌子上的牛奶被小猫喝光了。",
        "py": "Zhuōzi shang de niúnǎi bèi xiǎomāo hē guāng le.",
        "id": "Susu di atas meja habis diminum oleh anak kucing."
      },
      {
        "zh": "不要担心，你的问题已经被解决了。",
        "py": "Bú yào dānxīn, nǐ de wèntí yǐjīng bèi jiějué le.",
        "id": "Jangan khawatir, masalahmu sudah diselesaikan."
      }
    ],
    "quiz": [
      {
        "q": "Lengkapilah kalimat pasif: 昨天的考试成绩___公布了。",
        "opts": [
          "把",
          "被",
          "跟",
          "对"
        ],
        "ans": 1,
        "expl": "Benar! Hasil ujian 'diumumkan' (bentuk pasif), sehingga menggunakan '被 (bèi)'."
      }
    ]
  },
  {
    "id": "g7_de_state",
    "num": 7,
    "title": "Komplemen Keadaan / Derajat 得 (de) - Menilai Kualitas Aksi",
    "level": "HSK 2-3",
    "levelCode": 1,
    "formula": "Kata Kerja + 得 + Adjektiva / Deskripsi | (V + O) + V + 得 + Adj",
    "desc": "Komplemen keadaan menggunakan partikel 双人得 (dé -> dibaca de netral) untuk memberikan evaluasi, komentar, atau penilaian terhadap seberapa baik, cepat, lancar, atau intens aksi dilakukan.",
    "points": [
      "Jika kata kerja tidak memiliki objek: Verb + 得 + Deskripsi. Contoh: 他跑得很快 (Dia larinya sangat cepat).",
      "Jika kata kerja memiliki objek, ulangi kata kerjanya: V + O + V + 得 + Adj. Contoh: 他说汉语说得非常流利 (Dia berbicara Mandarin dengan sangat lancar).",
      "Atau pindahkan objek ke depan: 汉语他说得很流利 (Mandarin dia bicaranya sangat lancar).",
      "Bentuk negasi: 不 diletakkan setelah 得! (他跑得不快 Dia larinya tidak cepat)."
    ],
    "examples": [
      {
        "zh": "小李昨晚睡得很香，今天精神很好。",
        "py": "Xiǎo Lǐ zuówǎn shuì de hěn xiāng, jīntiān jīngshen hěn hǎo.",
        "id": "Xiao Li tadi malam tidurnya sangat nyenyak, hari ini semangatnya sangat bagus."
      },
      {
        "zh": "王老师教课教得非常认真，同学们都很喜欢他。",
        "py": "Wáng lǎoshī jiāo kè jiāo de fēicháng rènzhēn, tóngxuémen dōu hěn xǐhuan tā.",
        "id": "Guru Wang mengajarnya sangat bersungguh-sungguh, semua murid sangat menyukainya."
      },
      {
        "zh": "我汉字写得不太漂亮，需要多练习。",
        "py": "Wǒ hànzì xiě de bú tài piàoliang, xūyào duō liànxí.",
        "id": "Tulisan hanzi saya tidak begitu bagus, perlu banyak berlatih."
      }
    ],
    "quiz": [
      {
        "q": "Manakah kalimat yang menyatakan penilaian cara memasak yang benar?",
        "opts": [
          "他做菜做得很香。",
          "他做菜很香做得。",
          "他得很香做菜。",
          "做菜他得真好。"
        ],
        "ans": 0,
        "expl": "Benar! Pola dengan objek adalah V + O + V + 得 + Deskripsi: 他做菜做得很香."
      }
    ]
  },
  {
    "id": "g8_result",
    "num": 8,
    "title": "Komplemen Hasil (结果补语 - Resultative Complements)",
    "level": "HSK 2-3",
    "levelCode": 1,
    "formula": "Kata Kerja + Kata Hasil (完, 懂, 见, 到, 好, 对, 错)",
    "desc": "Komplemen hasil menempel langsung di belakang kata kerja untuk menjelaskan hasil akhir atau dampak langsung dari dilakukannya tindakan tersebut.",
    "points": [
      "完 (wán): Habis / tuntas selesai. Contoh: 吃完 (selesai makan), 做完 (selesai mengerjakan).",
      "懂 (dǒng): Memahami lewat indra. Contoh: 听懂 (paham mendengar ucapan), 看懂 (paham membaca bacaan).",
      "见 (jiàn): Menjangkau indra penglihatan/pendengaran. Contoh: 看见 (melihat tampak), 听见 (terdengar jelas).",
      "到 (dào): Berhasil mencapai tujuan atau memperoleh sesuatu. Contoh: 买到 (berhasil membeli), 找到 (berhasil menemukan).",
      "好 (hǎo): Beres, siap sedia, atau memuaskan. Contoh: 准备好 (sudah siap), 穿好 (memakai dengan rapi).",
      "对 / 错 (duì / cuò): Benar / salah. Contoh: 做对 (menjawab benar), 听错 (salah dengar).",
      "Negasi: Selalu gunakan 没(有) di depan kata kerja: 我没听懂 (Saya tidak paham apa yang didengar)."
    ],
    "examples": [
      {
        "zh": "对不起，我刚才没听清楚你的名字。",
        "py": "Duìbuqǐ, wǒ gāngcái méi tīng qīngchu nǐ de míngzi.",
        "id": "Maaf, tadi saya tidak mendengar nama Anda dengan jelas."
      },
      {
        "zh": "你终于买到去上海的高铁票了吗？",
        "py": "Nǐ zhōngyú mǎi dào qù Shànghǎi de gāotiě piào le ma?",
        "id": "Apakah kamu akhirnya berhasil membeli tiket kereta cepat ke Shanghai?"
      },
      {
        "zh": "等我写完这封邮件，我们就去吃午饭。",
        "py": "Děng wǒ xiě wán zhè fēng yóujiàn, wǒmen jiù qù chī wǔfàn.",
        "id": "Tunggu saya selesai menulis email ini, kita langsung pergi makan siang."
      }
    ],
    "quiz": [
      {
        "q": "Lengkapilah kalimat: 老师的话我都听___了，非常明白。",
        "opts": [
          "完",
          "懂",
          "到",
          "错"
        ],
        "ans": 1,
        "expl": "Benar! '听懂' (tīngdǒng) berarti mendengar dan memahami maknanya."
      }
    ]
  },
  {
    "id": "g9_direction",
    "num": 9,
    "title": "Komplemen Arah (方向补语 - Directional Complements)",
    "level": "HSK 2-3",
    "levelCode": 2,
    "formula": "Kata Kerja + 来 (Mendekat ke pembicara) / 去 (Menjauh dari pembicara)",
    "desc": "Komplemen arah menjelaskan ke arah mana gerakan berlangsung, berpatokan pada posisi si pembicara berada saat berbicara.",
    "points": [
      "Patokan Emas: 来 (lái) = gerakan mendekati pembicara; 去 (qù) = gerakan menjauhi pembicara.",
      "Arah Tunggal: 上来/上去 (naik), 下来/下去 (turun), 进来/进去 (masuk), 出来/出去 (keluar), 回来/回去 (kembali/pulang), 过来/过去 (menyeberang/mendekat).",
      "Komplemen Majemuk: V + 起来 (mulai/bangkit: 站起来), V + 出来 (mengeluarkan: 拿出来, 想出来 ide terpikirkan).",
      "Jika ada Kata Tempat, tempat ditaruh SEBELUM 来/去: 进教室来 (masuk ke dalam kelas ke arah kita), 回家去 (pulang ke rumah menjauh dari kita)."
    ],
    "examples": [
      {
        "zh": "外面下雨了，快点进房间来吧！",
        "py": "Wàimiàn xiàyǔ le, kuài diǎn jìn fángjiān lái ba!",
        "id": "Di luar hujan, cepatlah masuk ke dalam kamar (pembicara ada di dalam kamar)!"
      },
      {
        "zh": "他从书包里拿出来了一本新笔记本。",
        "py": "Tā cóng shūbāo lǐ ná chūlái le yì běn xīn bǐjìběn.",
        "id": "Dia mengeluarkan sebuah buku catatan baru dari dalam tasnya."
      },
      {
        "zh": "时间不早了，同学们都走出图书馆回宿舍去了。",
        "py": "Shíjiān bù zǎo le, tóngxuémen dōu zǒu chū túshūguǎn huí sùshè qù le.",
        "id": "Hari sudah larut, mahasiswa semuanya keluar dari perpustakaan dan pulang ke asrama."
      }
    ],
    "quiz": [
      {
        "q": "Jika pembicara berada di lantai 2 dan meminta temannya yang di lantai 1 naik ke atas, manakah kata yang tepat?",
        "opts": [
          "你上来吧！",
          "你上去吧！",
          "你出来吧！",
          "你过去吧！"
        ],
        "ans": 0,
        "expl": "Benar! Karena teman bergerak naik mendekati pembicara yang ada di lantai 2, gunakan '上来 (shànglái)'."
      }
    ]
  },
  {
    "id": "g10_potential",
    "num": 10,
    "title": "Komplemen Potensial (可能补语 - Sanggup / Tidak Keburu)",
    "level": "HSK 3",
    "levelCode": 2,
    "formula": "Bisa: Verb + 得 + Hasil/Arah | Tidak bisa: Verb + 不 + Hasil/Arah",
    "desc": "Komplemen potensial menyatakan apakah seseorang secara fisik, mental, atau situasional sanggup atau tidak sanggup mencapai hasil atau arah suatu aksi.",
    "points": [
      "Positif: V + 得 + C (bisa menyelesaikan aksi tersebut hingga tercapai hasil).",
      "Negatif: V + 不 + C (kondisi tidak memungkinkan aksi tersebut selesai). Bentuk negatif ini jauh lebih sering digunakan dalam percakapan nyata!",
      "Pasangan Populer:",
      "- 看得懂 (bisa paham membacanya) vs 看不懂 (tidak paham membacanya)",
      "- 听得见 (bisa mendengar bunyinya) vs 听不见 (suara tak terdengar)",
      "- 做得完 (bisa kelar mengerjakannya) vs 做不完 (pekerjaan terlalu banyak, takkan keburu)",
      "- 吃得下 (sanggup menelan/menghabiskan) vs 吃不下 (tak nafsu/sudah begah)"
    ],
    "examples": [
      {
        "zh": "黑板上的字太小了，我看不清楚。",
        "py": "Hēibǎn shang de zì tài xiǎo le, wǒ kàn bu qīngchu.",
        "id": "Tulisan di papan tulis terlalu kecil, saya tidak bisa melihatnya dengan jelas."
      },
      {
        "zh": "这么多生词，你一天背得完吗？",
        "py": "Zhème duō shēngcí, nǐ yì tiān bèi de wán ma?",
        "id": "Begitu banyak kosakata baru, apakah kamu bisa menghafal semuanya dalam satu hari?"
      },
      {
        "zh": "声音太小了，坐在后面的同学听不见。",
        "py": "Shēngyīn tài xiǎo le, zuò zài hòumian de tóngxué tīng bu jiàn.",
        "id": "Suaranya terlalu pelan, mahasiswa yang duduk di belakang tidak bisa mendengar."
      }
    ],
    "quiz": [
      {
        "q": "Bagaimana menyatakan 'Saya tidak paham apa yang dibaca di koran ini'?",
        "opts": [
          "我没看懂。",
          "我看不懂。",
          "我不看懂。",
          "我不能看懂。"
        ],
        "ans": 1,
        "expl": "Benar! Untuk menyatakan ketidaksanggupan memahami teks secara umum/potensial, gunakan komplemen potensial '看不懂 (kàn bu dǒng)'."
      }
    ]
  },
  {
    "id": "g11_bi",
    "num": 11,
    "title": "Perbandingan dengan 比 (bǐ) - Lebih ... daripada ...",
    "level": "HSK 2",
    "levelCode": 1,
    "formula": "A + 比 + B + Adjektiva + (Selisih Derajat)",
    "desc": "Pola kalimat 比 digunakan untuk membandingkan dua subjek di mana subjek A memiliki tingkat sifat yang lebih tinggi daripada subjek B.",
    "points": [
      "Rumus dasar: A 比 B + Kata Sifat. Contoh: 他比我高 (Dia lebih tinggi daripada saya).",
      "Menyatakan selisih sedikit: A 比 B + Adj + 一点儿 / 一些 (今天比昨天冷一点儿 Hari ini sedikit lebih dingin dari kemarin).",
      "Menyatakan selisih jauh: A 比 B + Adj + 得多 / 多了 (高铁比普通火车快得多 Kereta cepat jauh lebih kencang daripada kereta biasa).",
      "Menyatakan angka selisih pasti: A 比 B + Adj + Angka (我比弟弟大三岁 Saya 3 tahun lebih tua dari adik).",
      "PANTANGAN: Jangan letakkan kata '很', '非常', atau '真' setelah 比! (SALAH: 他比我很高)."
    ],
    "examples": [
      {
        "zh": "今年的冬天下雪比去年多得多。",
        "py": "Jīnnián de dōngtiān xiàxuě bǐ qùnián duō de duō.",
        "id": "Musim dingin tahun ini turun salju jauh lebih banyak daripada tahun lalu."
      },
      {
        "zh": "坐地铁去机场比坐出租车便宜多了。",
        "py": "Zuò dìtiě qù jīchǎng bǐ zuò chūzūchē piányi duō le.",
        "id": "Naik MRT ke bandara jauh lebih murah daripada naik taksi."
      },
      {
        "zh": "大卫的汉语口语比我流利一点儿。",
        "py": "Dàwèi de hànyǔ kǒuyǔ bǐ wǒ liúlì yìdiǎnr.",
        "id": "Kemampuan lisan Mandarin David sedikit lebih lancar daripada saya."
      }
    ],
    "quiz": [
      {
        "q": "Manakah kalimat perbandingan '比' yang benar menurut tata bahasa?",
        "opts": [
          "他比我很聪明。",
          "他比我聪明得多。",
          "他很比我聪明。",
          "他比我非常聪明。"
        ],
        "ans": 1,
        "expl": "Benar! Dalam kalimat 比 tidak boleh memakai '很/非常'. Untuk menyatakan selisih besar, gunakan '得多' atau '多了' di akhir: 他比我聪明得多."
      }
    ]
  },
  {
    "id": "g12_yiyang",
    "num": 12,
    "title": "Perbandingan Kesetaraan 跟…一样 & Negasi 没有",
    "level": "HSK 2-3",
    "levelCode": 1,
    "formula": "Sama: A 跟/和 B 一样 (+ Adj) | Tidak se-: A 没有 B (+ 那么/这么) + Adj",
    "desc": "Untuk membandingkan dua hal yang derajatnya setara gunakan 跟…一样. Untuk menyatakan hal A kalah/tidak sebanding dengan B, gunakan 没有.",
    "points": [
      "Setara identik: A 跟 B 一样 (Ponsel saya sama persis dengan ponselmu).",
      "Setara dalam sifat tertentu: A 跟 B 一样 + Adj (妹妹跟姐姐一样漂亮 Adik perempuan sama cantiknya dengan kakak).",
      "Tidak setara: A 跟 B 不一样 (Karakter kami berdua tidak sama).",
      "Kalah / Tidak se-: A 没有 B (那么) + Adj (这个图书馆没有大学的图书馆那么大 Perpustakaan ini tidak sebesar perpustakaan universitas)."
    ],
    "examples": [
      {
        "zh": "我的爱好跟你的爱好完全一样，我也喜欢摄影。",
        "py": "Wǒ de àihào gēn nǐ de àihào wánquán yíyàng, wǒ yě xǐhuan shèyǐng.",
        "id": "Hobi saya benar-benar sama dengan hobimu, saya juga suka fotografi."
      },
      {
        "zh": "坐公交车没有坐地铁那么快，常常会堵车。",
        "py": "Zuò gōngjiāochē méiyǒu zuò dìtiě nàme kuài, chángcháng huì dǔchē.",
        "id": "Naik bus kota tidak secepat naik subway, sering macet di jalan."
      },
      {
        "zh": "这件羽绒服的颜色跟那件不一样。",
        "py": "Zhè jiàn yǔróngfú de yánsè gēn nà jiàn bù yíyàng.",
        "id": "Warna jaket bulu angsa ini tidak sama dengan yang itu."
      }
    ],
    "quiz": [
      {
        "q": "Bagaimana cara mengatakan 'Hari ini tidak sepanas kemarin'?",
        "opts": [
          "今天跟昨天不一样热。",
          "今天没有昨天那么热。",
          "今天不比昨天热得多。",
          "今天比昨天没有热。"
        ],
        "ans": 1,
        "expl": "Benar! Untuk menyatakan 'tidak se-' gunakan pola A 没有 B 那么 + Adj: 今天没有昨天那么热."
      }
    ]
  },
  {
    "id": "g13_three_de",
    "num": 13,
    "title": "Pembeda Tiga De: 的 (de), 地 (de), 得 (de)",
    "level": "HSK 2-3",
    "levelCode": 2,
    "formula": "Adj/N + 的 + Kata Benda | Adj + 地 + Kata Kerja | Kata Kerja + 得 + Adj",
    "desc": "Ketiga aksara ini sama-sama dilafalkan 'de' (nada netral), namun perannya dalam struktur kalimat sangat berbeda secara fundamental.",
    "points": [
      "白勺 的 (de): Di DEPAN Kata Benda (Noun). Menunjukkan kepemilikan atau modifikasi sifat kata benda. Contoh: 我的大学 (kampusku), 漂亮的风景 (pemandangan yang indah).",
      "土也 地 (de): Di DEPAN Kata Kerja (Verb). Mengubah kata sifat menjadi keterangan cara (Adverb). Contoh: 认真地复习 (mengulang pelajaran dengan sungguh-sungguh), 飞快地跑 (berlari dengan secepat kilat).",
      "双人 得 (de): Di BELAKANG Kata Kerja (Verb). Mengantarkan penilaian derajat atau hasil aksi. Contoh: 跑得很快 (berlari dengan sangat cepat), 考得不错 (ujiannya dikerjakan dengan cukup baik)."
    ],
    "examples": [
      {
        "zh": "同学们正在安静地在教室里看书。",
        "py": "Tóngxuémen zhèngzài ānjìng de zài jiàoshì lǐ kàn shū.",
        "id": "Para mahasiswa sedang membaca buku dengan tenang di dalam ruang kelas. (地 di depan verb 看书)"
      },
      {
        "zh": "这是我新买的笔记本电脑，用起来非常快。",
        "py": "Zhè shì wǒ xīn mǎi de bǐjìběn diànnǎo, yòng qǐlái fēicháng kuài.",
        "id": "Ini laptop yang baru saya beli, saat dipakai terasa sangat cepat. (的 di depan noun 电脑)"
      },
      {
        "zh": "这次期末考试，大家都准备得非常充分。",
        "py": "Zhè cì qīmò kǎoshì, dàjiā dōu zhǔnbèi de fēicháng chōngfèn.",
        "id": "Ujian akhir semester kali ini, semuanya mempersiapkannya dengan sangat matang. (得 di belakang verb 准备)"
      }
    ],
    "quiz": [
      {
        "q": "Pilihlah aksara 'de' yang tepat: 听到这个好消息，他高兴___笑了。",
        "opts": [
          "的",
          "地",
          "得",
          "底"
        ],
        "ans": 1,
        "expl": "Benar! Karena diletakkan sebelum kata kerja '笑 (tersenyum/tertawa)' untuk menerangkan cara tertawa, gunakan '地 (de)'."
      }
    ]
  },
  {
    "id": "g14_yinwei",
    "num": 14,
    "title": "Konjungsi Kausalitas: 因为…所以… (Karena… Maka…)",
    "level": "HSK 2",
    "levelCode": 1,
    "formula": "因为 + Alasan / Sebab, 所以 + Akibat / Tindakan",
    "desc": "Pasangan konjungsi ini digunakan untuk menjelaskan hubungan sebab-akibat yang logis. Dalam bahasa Mandarin, kedua kata penghubung ini biasa hadir berpasangan secara lengkap.",
    "points": [
      "Struktur klasik: 因为 (yīnwèi) + sebab, 所以 (suǒyǐ) + akibat.",
      "Dalam percakapan lisan santai, boleh memakai salah satunya saja: hanya 因为 di awal atau hanya 所以 di klausa kedua.",
      "Bisa dibalik untuk penekanan hasil lebih dulu: Hasil + 是因为 + Sebab (我今天迟到是因为路上堵车 Saya hari ini terlambat adalah karena macet di jalan)."
    ],
    "examples": [
      {
        "zh": "因为明天的课取消了，所以我们可以多睡一会儿。",
        "py": "Yīnwèi míngtiān de kè qǔxiāo le, suǒyǐ wǒmen kěyǐ duō shuì yíhuìr.",
        "id": "Karena kelas besok dibatalkan, maka kita bisa tidur sedikit lebih lama."
      },
      {
        "zh": "他因为努力学习，所以顺利通过了HSK三级考试。",
        "py": "Tā yīnwèi nǔlì xuéxí, suǒyǐ shùnlì tōngguò le HSK sān jí kǎoshì.",
        "id": "Karena dia rajin belajar, maka dia berhasil lulus ujian HSK Level 3 dengan lancar."
      },
      {
        "zh": "我们去这家餐厅吧，因为这里的麻婆豆腐最正宗。",
        "py": "Wǒmen qù zhè jiā cāntīng ba, yīnwèi zhèlǐ de mápó dòufu zuì zhèngzōng.",
        "id": "Mari kita pergi ke restoran ini, karena mapo tahu di sini paling autentik."
      }
    ],
    "quiz": [
      {
        "q": "Lengkapilah pasangan konjungsi: ___下大雪，___航班延误了。",
        "opts": [
          "虽然…但是…",
          "因为…所以…",
          "如果…就…",
          "不但…而且…"
        ],
        "ans": 1,
        "expl": "Benar! Turun salju lebat adalah penyebab (sebab), dan penerbangan tertunda adalah dampaknya (akibat), jadi pakai '因为…所以…'."
      }
    ]
  },
  {
    "id": "g15_suiran",
    "num": 15,
    "title": "Konjungsi Kontras: 虽然…但是/可是… (Meskipun… Tetapi…)",
    "level": "HSK 2-3",
    "levelCode": 1,
    "formula": "虽然 + Fakta A (Konsesi), 但是 / 可是 + Fakta B (Kontras)",
    "desc": "Digunakan untuk menyatakan pertentangan dua kenyataan di mana kenyataan kedua berlawanan atau melebihi ekspektasi dari kenyataan pertama.",
    "points": [
      "Meskipun A benar, namun kenyataannya B: 虽然 (suīrán) ... 但是 (dànshì) ...",
      "可是 (kěshì) memiliki makna sama persis dengan 但是, namun bernuansa lebih sering diucapkan dalam percakapan lisan.",
      "虽然 bisa ditaruh sebelum atau sesudah subjek pertama (虽然他很累 vs 他虽然很累)."
    ],
    "examples": [
      {
        "zh": "虽然汉字很难写，但是我对学中文很感兴趣。",
        "py": "Suīrán hànzì hěn nán xiě, dànshì wǒ duì xué zhōngwén hěn gǎn xìngqù.",
        "id": "Meskipun aksara Hanzi sangat sulit ditulis, tetapi saya sangat tertarik belajar bahasa Mandarin."
      },
      {
        "zh": "宿舍的房间虽然不大，但是设施非常齐全。",
        "py": "Sùshè de fángjiān suīrán bú dà, dànshì shèshī fēicháng qíquán.",
        "id": "Kamar asrama meskipun tidak besar, tetapi fasilitasnya sangat lengkap."
      },
      {
        "zh": "虽然下着小雨，同学们还是准时到了球场。",
        "py": "Suīrán xià zhe xiǎoyǔ, tóngxuémen háishì zhǔnshí dào le qiúchǎng.",
        "id": "Meskipun sedang turun hujan gerimis, teman-teman tetap tiba tepat waktu di lapangan."
      }
    ],
    "quiz": [
      {
        "q": "Lengkapilah kalimat: 这件羽绒服___很贵，___保暖效果非常好。",
        "opts": [
          "因为…所以…",
          "虽然…但是…",
          "如果…就…",
          "只要…就…"
        ],
        "ans": 1,
        "expl": "Benar! Kalimat ini membandingkan harga mahal dengan manfaat hangat yang didapat (hubungan kontras): 虽然…但是…."
      }
    ]
  },
  {
    "id": "g16_ruguo",
    "num": 16,
    "title": "Konjungsi Kondisional: 如果…就… / 只要…就…",
    "level": "HSK 2-3",
    "levelCode": 1,
    "formula": "Kalau: 如果 (要是) + Syarat, 就 + Tindakan | Asalkan: 只要 + Syarat Cukup, 就 + Hasil",
    "desc": "Digunakan untuk mengandaikan suatu kondisi atau menetapkan syarat tertentu yang jika terpenuhi akan menghasilkan tindakan atau akibat pada klausa berikutnya.",
    "points": [
      "如果 (rúguǒ) ... 就 (jiù) ... = Jika/Kalau ... maka ... (kalimat pengandaian umum).",
      "要是 (yàoshi) sering digunakan di ragam percakapan santai sebagai sinonim dari 如果.",
      "只要 (zhǐyào) ... 就 (jiù) ... = Asalkan ... pasti ... (menunjukkan syarat minimal yang sudah mencukupi tercapainya hasil).",
      "Posisi 就 (jiù) harus berada di depan kata kerja klausa kedua!"
    ],
    "examples": [
      {
        "zh": "如果你明天下午有空，我们就一起去图书馆复习。",
        "py": "Rúguǒ nǐ míngtiān xiàwǔ yǒu kòng, wǒmen jiù yìqǐ qù túshūguǎn fùxí.",
        "id": "Kalau besok sore kamu ada waktu luang, kita pergi ke perpustakaan bersama untuk mengulang materi."
      },
      {
        "zh": "只要每天坚持练习听力，你的汉语就一定会进步。",
        "py": "Zhǐyào měitiān jiānchí liànxí tīnglì, nǐ de hànyǔ jiù yídìng huì jìnbù.",
        "id": "Asalkan setiap hari konsisten berlatih menyimak, bahasa Mandarinmu pasti akan meningkat."
      },
      {
        "zh": "要是你找不到教学楼，就给我打电话。",
        "py": "Yàoshi nǐ zhǎo bu dào jiàoxuélóu, jiù gěi wǒ dǎ diànhuà.",
        "id": "Kalau kamu tidak berhasil menemukan gedung perkuliahan, telepon saja saya."
      }
    ],
    "quiz": [
      {
        "q": "Lengkapilah kalimat: ___你努力准备，___不用担心明天的面试。",
        "opts": [
          "只要…就…",
          "虽然…但是…",
          "因为…所以…",
          "不但…而且…"
        ],
        "ans": 0,
        "expl": "Benar! 'Asalkan kamu mempersiapkan diri dengan giat, maka tidak perlu cemas': 只要…就…."
      }
    ]
  },
  {
    "id": "g17_budan",
    "num": 17,
    "title": "Konjungsi Progresif: 不但…而且… (Bukan hanya… Tetapi juga…)",
    "level": "HSK 3",
    "levelCode": 2,
    "formula": "Subjek + 不但 + Kualitas 1, 而且 + Kualitas 2 Lebih Tinggi",
    "desc": "Digunakan untuk menyatakan penambahan derajat atau akumulasi kualitas yang selaras. Klausa kedua menambahkan informasi yang lebih jauh atau lebih mendalam dibanding klausa pertama.",
    "points": [
      "Satu Subjek: Subjek diletakkan SEBELUM 不但 (他不但会说汉语，而且说得非常流利).",
      "Dua Subjek Berbeda: 不但 diletakkan SEBELUM Subjek pertama (不但老师喜欢他，而且同学们也喜欢他 Bukan hanya guru menyukainya, murid-murid pun menyukainya).",
      "Sinonim: 不仅 (bùjǐn) ... 还 / 也 (hái / yě) ... sering menggantikan 不但 ... 而且 di tulisan formal/akademik."
    ],
    "examples": [
      {
        "zh": "学校食堂的饭菜不但便宜，而且味道很不错。",
        "py": "Xuéxiào shítáng de fàncài búdàn piányi, érqiě wèidào hěn búcuò.",
        "id": "Makanan di kantin kampus bukan hanya murah, melainkan rasanya juga sangat enak."
      },
      {
        "zh": "李教授不但学问很深，而且对学生特别耐心。",
        "py": "Lǐ jiàoshòu búdàn xuéwen hěn shēn, érqiě duì xuésheng tèbié nàixīn.",
        "id": "Profesor Li bukan hanya ilmunya sangat dalam, tetapi juga sangat sabar terhadap para mahasiswa."
      },
      {
        "zh": "这个手机应用不仅能查生词，还可以练习发音。",
        "py": "Zhè ge shǒujī yìngyòng bùjǐn néng chá shēngcí, hái kěyǐ liànxí fāyīn.",
        "id": "Aplikasi ponsel ini tidak hanya bisa mencari kosakata baru, melainkan juga bisa melatih pelafalan."
      }
    ],
    "quiz": [
      {
        "q": "Lengkapilah kalimat: 他___成绩优秀，___积极参加学校社团活动。",
        "opts": [
          "不但…而且…",
          "虽然…但是…",
          "因为…所以…",
          "如果…就…"
        ],
        "ans": 0,
        "expl": "Benar! Kalimat ini menambahkan dua keunggulan yang saling mendukung: 不但…而且… (bukan hanya... tetapi juga...)."
      }
    ]
  },
  {
    "id": "g18_shi_de",
    "num": 18,
    "title": "Struktur Penekanan 是…的 (shì... de) - Waktu, Tempat, Cara Lampau",
    "level": "HSK 2-3",
    "levelCode": 1,
    "formula": "Subjek + 是 + [Waktu / Tempat / Cara / Pelaku] + Verb + 的",
    "desc": "Digunakan ketika pendengar dan pembicara sama-sama SUDAH TAHU bahwa aksi tersebut pasti sudah terjadi, namun ingin menegaskan/menanyakan RINCIANNYA: kapan, di mana, naik apa, atau bersama siapa aksi itu terjadi.",
    "points": [
      "Penekanan Waktu: 我是昨天到北京的 (Saya datang ke Beijingnya itu kemarin lho).",
      "Penekanan Tempat: 我们是在大学图书馆认识的 (Kami kenalannya itu di perpustakaan kampus).",
      "Penekanan Cara: 你是怎么来的？我是坐高铁来的 (Kamu ke sininya naik apa? Saya naik kereta cepat).",
      "Dalam kalimat positif, kata '是' sering boleh dihilangkan dalam percakapan lisan: 我昨天来的.",
      "Namun dalam kalimat negatif, '不是' WAJIB ADA: 我不是一个人来的 (Saya datangnya bukan sendirian)."
    ],
    "examples": [
      {
        "zh": "这本汉语教材是我在网上买的，不是在书店买的。",
        "py": "Zhè běn hànyǔ jiàocái shì wǒ zài wǎngshang mǎi de, bú shì zài shūdiàn mǎi de.",
        "id": "Buku ajar Mandarin ini saya belinya secara online, bukan beli di toko buku fisik."
      },
      {
        "zh": "你们是什么时候决定去中国留学的？",
        "py": "Nǐmen shì shénme shíhou juédìng qù zhōngguó liúxué de?",
        "id": "Kapan kalian memutuskan untuk kuliah ke Tiongkok?"
      },
      {
        "zh": "这部电影是在上海拍摄的，风景非常漂亮。",
        "py": "Zhè bù diànyǐng shì zài Shànghǎi pāishè de, fēngjǐng fēicháng piàoliang.",
        "id": "Film ini syutingnya di Shanghai, pemandangannya sangat indah."
      }
    ],
    "quiz": [
      {
        "q": "Pertanyaan manakah yang menanyakan sarana transportasi lampau dengan pola '是…的'?",
        "opts": [
          "你是怎么来学校的？",
          "你什么时候来学校？",
          "你去不去学校？",
          "你在学校做吗？"
        ],
        "ans": 0,
        "expl": "Benar! '你是怎么来学校的？' (Nǐ shì zěnme lái xuéxiào de?) menanyakan sarana/cara kedatangan di masa lampau."
      }
    ]
  },
  {
    "id": "g19_lian_dou",
    "num": 19,
    "title": "Pola Ekstrem & Inklusif: 连…都/也… (Bahkan… Pun…)",
    "level": "HSK 3-4",
    "levelCode": 2,
    "formula": "Subjek + 连 + Hal Paling Dasar / Ekstrem + 都 / 也 + Predikat",
    "desc": "Digunakan untuk mengemukakan contoh ekstrem yang paling tak terduga atau paling mendasar untuk membuktikan bahwa situasi tersebut memang luar biasa atau sangat sulit.",
    "points": [
      "Konteks: 'Bahkan hal sejelas/semudah ini saja tidak bisa, apalagi hal lain!'",
      "Contoh: 这个问题太难了，连老师都不会 (Pertanyaan ini terlalu sulit, bahkan guru pun tidak bisa menjawabnya).",
      "Sering dipadukan dengan kata 都 (dōu) atau 也 (yě).",
      "Pola 连 + Satu Satuan + 都/也 + 没/不: 他连一分钱都没有 (Dia bahkan satu sen pun tidak punya)."
    ],
    "examples": [
      {
        "zh": "他今天太忙了，连午饭都没时间吃。",
        "py": "Tā jīntiān tài máng le, lián wǔfàn dōu méi shíjiān chī.",
        "id": "Dia hari ini terlalu sibuk, bahkan makan siang pun tidak sempat dimakan."
      },
      {
        "zh": "这个汉字太生僻了，连很多中国人都不认识。",
        "py": "Zhè ge hànzì tài shēngpì le, lián hěn duō zhōngguórén dōu bú rènshi.",
        "id": "Aksara Hanzi ini terlalu langka, bahkan banyak orang Tiongkok pun tidak mengenalinya."
      },
      {
        "zh": "刚来中国的时候，我连一句完整的句子都不会说。",
        "py": "Gāng lái zhōngguó de shíhou, wǒ lián yí jù wánzhěng de jùzi dōu bú huì shuō.",
        "id": "Saat pertama kali tiba di Tiongkok, saya bahkan satu kalimat utuh pun tidak bisa mengucapkannya."
      }
    ],
    "quiz": [
      {
        "q": "Lengkapilah kalimat: 这里的冬天太冷了，___湖水___结冰了。",
        "opts": [
          "连…都…",
          "虽然…但是…",
          "不但…而且…",
          "因为…所以…"
        ],
        "ans": 0,
        "expl": "Benar! Menyoroti contoh ekstrem (bahkan air danau pun membeku): 连…都…."
      }
    ]
  },
  {
    "id": "g20_yuelaiyue",
    "num": 20,
    "title": "Progresi Derajat: 越来越… / 越…越… (Semakin… Semakin…)",
    "level": "HSK 2-3",
    "levelCode": 1,
    "formula": "越来越 + Kata Sifat | 越 A 越 B (Semakin A, Semakin B)",
    "desc": "Digunakan untuk menggambarkan perubahan derajat atau sifat yang kian meningkat seiring berjalannya waktu atau seiring perubahan kondisi lain.",
    "points": [
      "越来越 + Adjektiva / Kata Kerja Perasaan: Perubahan bertahap dari waktu ke waktu (天气越来越冷 Cuaca semakin lama semakin dingin; 他的汉语越来越好 Bahasa Mandarinnya semakin hari semakin bagus).",
      "CATATAN: Jangan tambahkan '很' setelah 越来越! (SALAH: 越来越很好).",
      "越 A 越 B: Perubahan kondisi B dipicu oleh intensitas kondisi A (雨越下越大 Hujan semakin turun semakin lebat; 汉语越学越有意思 Bahasa Mandarin semakin dipelajari semakin menarik)."
    ],
    "examples": [
      {
        "zh": "临近期末考试，图书馆里的学生越来越多了。",
        "py": "Línjìn qīmò kǎoshì, túshūguǎn lǐ de xuésheng yuèláiyuè duō le.",
        "id": "Mendekati ujian akhir semester, mahasiswa di dalam perpustakaan semakin lama semakin bertambah banyak."
      },
      {
        "zh": "多和当地人交流，口语就会越说越流利。",
        "py": "Duō hé dāngdìrén jiāoliú, kǒuyǔ jiù huì yuè shuō yuè liúlì.",
        "id": "Banyaklah berkomunikasi dengan warga lokal, kemampuan berbicara lisanmu akan semakin diucapkan semakin lancar."
      },
      {
        "zh": "现代生活节奏加快，人们对电子支付越来越依赖了。",
        "py": "Xiàndài shēnghuó jiézòu jiākuài, rénmen duì diànzǐ zhīfù yuèláiyuè yīlài le.",
        "id": "Irama kehidupan modern semakin cepat, orang-orang semakin bergantung pada pembayaran digital."
      }
    ],
    "quiz": [
      {
        "q": "Manakah penggunaan '越来越' yang benar?",
        "opts": [
          "天气越来越很热。",
          "天气越来越热。",
          "天气很越来越热。",
          "天气越来越非常热。"
        ],
        "ans": 1,
        "expl": "Benar! Setelah '越来越' tidak boleh menggunakan kata penjelas derajat seperti '很' atau '非常': 天气越来越热."
      }
    ]
  }
];

/* ============================================================
   Bank Latihan Produktif (Sentence Scramble, Cloze, Dictation)
   ============================================================ */
const PRACTICE_BANK = {
  "scramble": [
    {
      "id": "s1",
      "zh": "我明天下午去图书馆借书。",
      "py": "wǒ míngtiān xiàwǔ qù túshūguǎn jiè shū",
      "id_trans": "Saya besok sore pergi ke perpustakaan untuk meminjam buku.",
      "tokens": [
        "我",
        "明天下午",
        "去",
        "图书馆",
        "借书"
      ],
      "tip": "Di Mandarin, keterangan waktu diletakkan sebelum kata kerja: Subjek + Waktu + Predikat."
    },
    {
      "id": "s2",
      "zh": "请把你的护照给我看一下。",
      "py": "qǐng bǎ nǐ de hùzhào gěi wǒ kàn yíxià",
      "id_trans": "Tolong berikan paspormu untuk saya lihat sebentar.",
      "tokens": [
        "请",
        "把",
        "你的护照",
        "给",
        "我",
        "看一下"
      ],
      "tip": "Pola kalimat disposisi 把: Subjek + 把 + Objek + Verb + Hasil / Penerima."
    },
    {
      "id": "s3",
      "zh": "他汉语说得非常流利。",
      "py": "tā hànyǔ shuō de fēicháng liúlì",
      "id_trans": "Bahasa Mandarin dia bicaranya sangat lancar.",
      "tokens": [
        "他",
        "汉语",
        "说得",
        "非常",
        "流利"
      ],
      "tip": "Evaluasi derajat kemampuan aksi menggunakan partikel 双人得: Verb + 得 + Deskripsi."
    },
    {
      "id": "s4",
      "zh": "坐高铁比坐大巴快得多。",
      "py": "zuò gāotiě bǐ zuò dàbā kuài de duō",
      "id_trans": "Naik kereta cepat jauh lebih cepat daripada naik bus antar-kota.",
      "tokens": [
        "坐高铁",
        "比",
        "坐大巴",
        "快得多"
      ],
      "tip": "Pola perbandingan 比: A 比 B + Adjektiva + 得多 (tidak boleh pakai 很 / 非常)."
    },
    {
      "id": "s5",
      "zh": "虽然汉字很难写，但是我喜欢学。",
      "py": "suīrán hànzì hěn nán xiě, dànshì wǒ xǐhuan xué",
      "id_trans": "Meskipun aksara Hanzi sulit ditulis, tetapi saya suka belajar.",
      "tokens": [
        "虽然",
        "汉字很难写，",
        "但是",
        "我喜欢学。"
      ],
      "tip": "Pasangan konjungsi kontras 虽然 (meskipun) ... 但是 (tetapi) ..."
    },
    {
      "id": "s6",
      "zh": "我们是在大学食堂认识的。",
      "py": "wǒmen shì zài dàxué shítáng rènshi de",
      "id_trans": "Kami kenalannya itu di kantin kampus.",
      "tokens": [
        "我们",
        "是在",
        "大学食堂",
        "认识的。"
      ],
      "tip": "Pola penekanan masa lampau: Subjek + 是 + Tempat + Verb + 的."
    },
    {
      "id": "s7",
      "zh": "请问可以用微信扫码支付吗？",
      "py": "qǐngwèn kěyǐ yòng Wēixìn sǎomǎ zhīfù ma",
      "id_trans": "Permisi apakah boleh bayar scan QR pakai WeChat?",
      "tokens": [
        "请问",
        "可以",
        "用微信",
        "扫码支付",
        "吗？"
      ],
      "tip": "Pola sarana/instrumen: 用 + Alat (微信) + Aksi (扫码支付)."
    },
    {
      "id": "s8",
      "zh": "我从来没去过那么远的地方。",
      "py": "wǒ cónglái méi qù guo nàme yuǎn de dìfang",
      "id_trans": "Saya sama sekali belum pernah pergi ke tempat sejauh itu.",
      "tokens": [
        "我",
        "从来",
        "没去过",
        "那么远的",
        "地方。"
      ],
      "tip": "Negasi pengalaman lampau selalu memakai 没 + Verb + 过."
    },
    {
      "id": "s9",
      "zh": "教室的前面挂着一张中国地图。",
      "py": "jiàoshì de qiánmian guà zhe yì zhāng Zhōngguó dìtú",
      "id_trans": "Di bagian depan kelas tergantung selembar peta Tiongkok.",
      "tokens": [
        "教室的前面",
        "挂着",
        "一张",
        "中国地图。"
      ],
      "tip": "Kalimat eksistensi keadaan tetap berlangsung: Tempat + Verb + 着 + Objek."
    },
    {
      "id": "s10",
      "zh": "如果你身体不舒服，就回宿舍休息吧。",
      "py": "rúguǒ nǐ shēntǐ bù shūfu, jiù huí sùshè xiūxi ba",
      "id_trans": "Kalau badanmu tidak enak, pulanglah ke asrama untuk istirahat.",
      "tokens": [
        "如果你",
        "身体不舒服，",
        "就回宿舍",
        "休息吧。"
      ],
      "tip": "Pola pengandaian: 如果 (kalau) ... 就 (maka) ..."
    },
    {
      "id": "s11",
      "zh": "学校食堂的饭菜不但便宜，而且很好吃。",
      "py": "xuéxiào shítáng de fàncài búdàn piányi, érqiě hěn hǎochī",
      "id_trans": "Makanan di kantin kampus bukan hanya murah, melainkan juga sangat enak.",
      "tokens": [
        "学校食堂的饭菜",
        "不但便宜，",
        "而且",
        "很好吃。"
      ],
      "tip": "Pola konjungsi bertingkat: 不但... 而且... (bukan hanya... tetapi juga...)"
    },
    {
      "id": "s12",
      "zh": "期末考试快到了，大家越来越紧张。",
      "py": "qīmò kǎoshì kuài dào le, dàjiā yuèláiyuè jǐnzhāng",
      "id_trans": "Ujian akhir semester hampir tiba, semua orang semakin tegang.",
      "tokens": [
        "期末考试",
        "快到了，",
        "大家",
        "越来越紧张。"
      ],
      "tip": "Pola progresi derajat bertahap: 越来越 + Kata Sifat (tidak boleh ditambah 很)."
    }
  ],
  "cloze": [
    {
      "id": "c1",
      "prompt": "我在图书馆借了两___专业书。",
      "pinyin": "Wǒ zài túshūguǎn jiè le liǎng ___ zhuānyè shū.",
      "id_trans": "Saya meminjam dua buah buku jurusan di perpustakaan.",
      "options": [
        "本",
        "张",
        "条",
        "个"
      ],
      "answer": 0,
      "expl": "本 (běn) adalah kata bantu bilangan khusus untuk buku, dokumen berjilid, dan kamus."
    },
    {
      "id": "c2",
      "prompt": "桌子上有两___去上海的高铁车票。",
      "pinyin": "Zhuōzi shang yǒu liǎng ___ qù Shànghǎi de gāotiě chēpiào.",
      "id_trans": "Di atas meja ada dua lembar tiket kereta cepat menuju Shanghai.",
      "options": [
        "条",
        "件",
        "张",
        "只"
      ],
      "answer": 2,
      "expl": "张 (zhāng) adalah kata penggolong khusus untuk benda tipis atau datar seperti kertas, tiket, dan foto."
    },
    {
      "id": "c3",
      "prompt": "路上太堵车了，我今天差点儿迟到___。",
      "pinyin": "Lùshang tài dǔchē le, wǒ jīntiān chàdiǎnr chídào ___.",
      "id_trans": "Di jalanan terlalu macet, saya hari ini hampir saja terlambat.",
      "options": [
        "了",
        "过",
        "着",
        "的"
      ],
      "answer": 0,
      "expl": "Pola '差点儿……了' menandakan hal buruk yang hampir terjadi tapi akhirnya tidak terjadi."
    },
    {
      "id": "c4",
      "prompt": "你以前去___北京大学的图书馆吗？",
      "pinyin": "Nǐ yǐqián qù ___ Běijīng Dàxué de túshūguǎn ma?",
      "id_trans": "Apakah kamu sebelumnya pernah mengunjungi perpustakaan Universitas Peking?",
      "options": [
        "过",
        "了",
        "着",
        "得"
      ],
      "answer": 0,
      "expl": "Partikel 过 (guo) digunakan setelah kata kerja untuk menanyakan pengalaman pernah/tidaknya seumur hidup."
    },
    {
      "id": "c5",
      "prompt": "外面风很大，教室的门一直开___，快关上吧。",
      "pinyin": "Wàimiàn fēng hěn dà, jiàoshì de mén yìzhí kāi ___, kuài guānshang ba.",
      "id_trans": "Di luar angin kencang, pintu kelas terus-menerus dalam keadaan terbuka, cepat tutup.",
      "options": [
        "着",
        "过",
        "了",
        "到"
      ],
      "answer": 0,
      "expl": "Partikel 着 (zhe) menandakan kondisi hasil aksi yang bertahan/berlanjut (pintu terbuka)."
    },
    {
      "id": "c6",
      "prompt": "请大家把手机___在书包里，现在开始考试。",
      "pinyin": "Qǐng dàjiā bǎ shǒujī ___ zài shūbāo lǐ, xiànzài kāishǐ kǎoshì.",
      "id_trans": "Harap semuanya menaruh ponsel ke dalam tas, sekarang ujian dimulai.",
      "options": [
        "放",
        "走",
        "买",
        "跑"
      ],
      "answer": 0,
      "expl": "Dalam pola kalimat 把, kata kerja penempatan posisi adalah 放 (fàng) diikuti 在 (zài) + tempat."
    },
    {
      "id": "c7",
      "prompt": "我的雨伞被大风吹___了，只能淋雨回宿舍。",
      "pinyin": "Wǒ de yǔsǎn bèi dàfēng chuī ___ le, zhǐ néng línyǔ huí sùshè.",
      "id_trans": "Payung saya rusak ditiup angin kencang, terpaksa hujan-hujanan pulang ke asrama.",
      "options": [
        "坏",
        "好",
        "对",
        "走"
      ],
      "answer": 0,
      "expl": "Komplemen hasil 坏 (huài) menyatakan kondisi rusak atau hancur: 吹坏了 (rusak tertiup angin)."
    },
    {
      "id": "c8",
      "prompt": "大卫的汉语说___非常流利，大家都听得懂。",
      "pinyin": "Dàwèi de hànyǔ shuō ___ fēicháng liúlì, dàjiā dōu tīng de dǒng.",
      "id_trans": "Bahasa Mandarin David bicaranya sangat lancar, semuanya bisa paham mendengarnya.",
      "options": [
        "得",
        "的",
        "地",
        "底"
      ],
      "answer": 0,
      "expl": "Untuk menghubungkan kata kerja 说 (berbicara) dengan penilaian kualitas 流利 (lancar), gunakan 双人得 (de)."
    },
    {
      "id": "c9",
      "prompt": "李教授的话我都听___了，记在了笔记本上。",
      "pinyin": "Lǐ jiàoshòu de huà wǒ dōu tīng ___ le, jì zài le bǐjìběn shang.",
      "id_trans": "Perkataan Profesor Li semuanya sudah saya dengar dan pahami, sudah dicatat di buku catatan.",
      "options": [
        "懂",
        "完",
        "到",
        "错"
      ],
      "answer": 0,
      "expl": "Komplemen hasil 懂 (dǒng) menyatakan mendengar sekaligus memahami maksud pembicara (听懂)."
    },
    {
      "id": "c10",
      "prompt": "外面下大雨了，你快进屋___吧！",
      "pinyin": "Wàimiàn xià dàyǔ le, nǐ kuài jìn wū ___ ba!",
      "id_trans": "Di luar hujan lebat, cepatlah masuk ke dalam rumah (pembicara di dalam)!",
      "options": [
        "来",
        "去",
        "着",
        "了"
      ],
      "answer": 0,
      "expl": "Karena gerakan masuk mendekati posisi pembicara yang ada di dalam rumah, gunakan komplemen arah '来 (lái)'."
    },
    {
      "id": "c11",
      "prompt": "黑板上的汉字太小了，坐在最后一排的同学看不___。",
      "pinyin": "Hēibǎn shang de hànzì tài xiǎo le, zuò zài zuìhòu yì pái de tóngxué kàn bu ___.",
      "id_trans": "Aksara Hanzi di papan tulis terlalu kecil, mahasiswa yang duduk di baris paling belakang tidak bisa melihat dengan jelas.",
      "options": [
        "清楚",
        "完",
        "懂",
        "好"
      ],
      "answer": 0,
      "expl": "Komplemen potensial 看不清楚 (kàn bu qīngchu) berarti tidak sanggup melihat dengan jelas."
    },
    {
      "id": "c12",
      "prompt": "坐高铁去上海比坐飞机便宜___。",
      "pinyin": "Zuò gāotiě qù Shànghǎi bǐ zuò fēijī piányi ___.",
      "id_trans": "Naik kereta cepat ke Shanghai jauh lebih murah daripada naik pesawat.",
      "options": [
        "得多",
        "很",
        "非常",
        "真"
      ],
      "answer": 0,
      "expl": "Dalam kalimat 比 tidak boleh memakai 很/非常. Selisih besar diungkapkan dengan '得多' atau '多了' di akhir."
    },
    {
      "id": "c13",
      "prompt": "同学们都在图书馆里安静___自习。",
      "pinyin": "Tóngxuémen dōu zài túshūguǎn lǐ ānjìng ___ zìxí.",
      "id_trans": "Para mahasiswa semuanya sedang belajar mandiri dengan tenang di dalam perpustakaan.",
      "options": [
        "地",
        "的",
        "得",
        "底"
      ],
      "answer": 0,
      "expl": "Gunakan 土也 地 (de) sebelum kata kerja 自习 (belajar mandiri) untuk membentuk keterangan cara (adverb)."
    },
    {
      "id": "c14",
      "prompt": "___明天下大雪，___学校的运动会取消了。",
      "pinyin": "___ míngtiān xià dàxuě, ___ xuéxiào de yùndònghuì qǔxiāo le.",
      "id_trans": "Karena besok turun salju lebat, maka festival olahraga sekolah dibatalkan.",
      "options": [
        "因为…所以…",
        "虽然…但是…",
        "如果…就…",
        "只要…就…"
      ],
      "answer": 0,
      "expl": "Hubungan sebab-akibat dinyatakan dengan pasangan konjungsi 因为 (karena) ... 所以 (maka) ..."
    },
    {
      "id": "c15",
      "prompt": "这本专业教材___很难读，___对我写论文很有帮助。",
      "pinyin": "Zhè běn zhuānyè jiàocái ___ hěn nán dú, ___ duì wǒ xiě lùnwén hěn yǒu bāngzhù.",
      "id_trans": "Buku ajar jurusan ini meskipun sulit dibaca, tetapi sangat membantu penulisan skripsi saya.",
      "options": [
        "虽然…但是…",
        "因为…所以…",
        "只要…就…",
        "不但…而且…"
      ],
      "answer": 0,
      "expl": "Hubungan kontras pertentangan memakai pasangan 虽然 (meskipun) ... 但是 (tetapi) ..."
    },
    {
      "id": "c16",
      "prompt": "___你每天坚持听半小时录音，听力___一定能提高。",
      "pinyin": "___ nǐ měitiān jiānchí tīng bàn xiǎoshí lùyīn, tīnglì ___ yídìng néng tígāo.",
      "id_trans": "Asalkan kamu setiap hari konsisten menyimak rekaman setengah jam, kemampuan listening pasti bisa meningkat.",
      "options": [
        "只要…就…",
        "虽然…但是…",
        "因为…所以…",
        "如果…才…"
      ],
      "answer": 0,
      "expl": "Syarat yang mencukupi untuk mencapai hasil pasti memakai 只要 (asalkan) ... 就 (pasti) ..."
    },
    {
      "id": "c17",
      "prompt": "小李不但成绩优秀，___在学校运动会上拿了第一名。",
      "pinyin": "Xiǎo Lǐ búdàn chéngjì yōuxiù, ___ zài xuéxiào yùndònghuì shang ná le dì yī míng.",
      "id_trans": "Xiao Li bukan hanya berprestasi bagus, melainkan juga meraih juara 1 di perlombaan atletik sekolah.",
      "options": [
        "而且",
        "但是",
        "所以",
        "如果"
      ],
      "answer": 0,
      "expl": "Pasangan untuk 不但 (bukan hanya) adalah 而且 (melainkan/tetapi juga)."
    },
    {
      "id": "c18",
      "prompt": "你是什么时候___北京大学报到的？",
      "pinyin": "Nǐ shì shénme shíhou ___ Běijīng Dàxué bàodào de?",
      "id_trans": "Kapan kamu datang melapor/mendaftar di Universitas Peking?",
      "options": [
        "来",
        "会",
        "要",
        "想"
      ],
      "answer": 0,
      "expl": "Dalam pola penekanan masa lampau 是…的, aksi kedatangan memakai kata kerja 来 (datang)."
    },
    {
      "id": "c19",
      "prompt": "期末考题太难了，连学霸___做不完。",
      "pinyin": "Qīmò kǎotí tài nán le, lián xuébà ___ zuò bu wán.",
      "id_trans": "Soal ujian akhir semester terlalu sulit, bahkan murid paling pintar pun tidak selesai mengerjakannya.",
      "options": [
        "都",
        "也",
        "还",
        "才"
      ],
      "answer": 0,
      "expl": "Pola ekstrem 连…都… menyatakan penekanan 'bahkan ... pun ...'."
    },
    {
      "id": "c20",
      "prompt": "随着期末临近，图书馆里的自习学生越来越___了。",
      "pinyin": "Suízhe qīmò línjìn, túshūguǎn lǐ de zìxí xuésheng yuèláiyuè ___ le.",
      "id_trans": "Seiring mendekatnya akhir semester, mahasiswa yang belajar mandiri di perpustakaan semakin banyak.",
      "options": [
        "多",
        "很多",
        "非常多",
        "极多"
      ],
      "answer": 0,
      "expl": "Setelah 越来越 tidak boleh menambahkan kata derajat seperti 很 atau 非常. Cukup 越来越多."
    }
  ],
  "dictation": [
    {
      "id": "d1",
      "zh": "明天早上八点在校门口集合。",
      "py": "míngtiān zǎoshang bā diǎn zài xiào ménkǒu jíhé",
      "id_trans": "Besok pagi pukul 8 kumpul di gerbang sekolah.",
      "tokens": [
        "明天早上",
        "八点",
        "在校门口",
        "集合。"
      ],
      "distractors": [
        "晚上",
        "散步"
      ]
    },
    {
      "id": "d2",
      "zh": "请问去国际学生宿舍怎么走？",
      "py": "qǐngwèn qù guójì xuésheng sùshè zěnme zǒu",
      "id_trans": "Permisi bagaimana jalan menuju asrama mahasiswa internasional?",
      "tokens": [
        "请问",
        "去",
        "国际学生宿舍",
        "怎么走？"
      ],
      "distractors": [
        "食堂",
        "坐车"
      ]
    },
    {
      "id": "d3",
      "zh": "我可以扫微信二维码支付吗？",
      "py": "wǒ kěyǐ sǎo Wēixìn èrwéimǎ zhīfù ma",
      "id_trans": "Bisakah saya scan QR code WeChat untuk membayar?",
      "tokens": [
        "我可以",
        "扫微信",
        "二维码",
        "支付吗？"
      ],
      "distractors": [
        "现金",
        "借书"
      ]
    },
    {
      "id": "d4",
      "zh": "大家把期末报告发到老师的邮箱。",
      "py": "dàjiā bǎ qīmò bàogào fā dào lǎoshī de yóuxiāng",
      "id_trans": "Semuanya kirimkan laporan akhir semester ke email guru.",
      "tokens": [
        "大家",
        "把期末报告",
        "发到",
        "老师的邮箱。"
      ],
      "distractors": [
        "作业",
        "带到"
      ]
    },
    {
      "id": "d5",
      "zh": "坐高铁从北京到上海只要四个多小时。",
      "py": "zuò gāotiě cóng Běijīng dào Shànghǎi zhǐ yào sì gè duō xiǎoshí",
      "id_trans": "Naik kereta cepat dari Beijing ke Shanghai hanya butuh 4 jam lebih.",
      "tokens": [
        "坐高铁",
        "从北京到上海",
        "只要",
        "四个多小时。"
      ],
      "distractors": [
        "飞机",
        "很久"
      ]
    },
    {
      "id": "d6",
      "zh": "你听懂刚才李教授说的话了吗？",
      "py": "nǐ tīngdǒng gāngcái Lǐ jiàoshòu shuō de huà le ma",
      "id_trans": "Apakah kamu paham perkataan Profesor Li tadi?",
      "tokens": [
        "你听懂",
        "刚才",
        "李教授",
        "说的话了吗？"
      ],
      "distractors": [
        "看懂",
        "写字"
      ]
    },
    {
      "id": "d7",
      "zh": "今天食堂的糖醋里脊非常正宗。",
      "py": "jīntiān shítáng de tángcù lǐji fēicháng zhèngzōng",
      "id_trans": "Babi asam manis di kantin hari ini sangat autentik.",
      "tokens": [
        "今天",
        "食堂的",
        "糖醋里脊",
        "非常正宗。"
      ],
      "distractors": [
        "面条",
        "不好吃"
      ]
    },
    {
      "id": "d8",
      "zh": "外面风很大，记得把窗户关好。",
      "py": "wàimiàn fēng hěn dà, jìde bǎ chuānghu guān hǎo",
      "id_trans": "Di luar angin kencang, ingat tutup jendela dengan rapat.",
      "tokens": [
        "外面风很大，",
        "记得",
        "把窗户",
        "关好。"
      ],
      "distractors": [
        "下雨",
        "打开"
      ]
    },
    {
      "id": "d9",
      "zh": "我打算下学期申请大学的奖学金。",
      "py": "wǒ dǎsuàn xià xuéqī shēnqǐng dàxué de jiǎngxuéjīn",
      "id_trans": "Saya berencana mengajukan beasiswa universitas semester depan.",
      "tokens": [
        "我打算",
        "下学期",
        "申请",
        "大学的奖学金。"
      ],
      "distractors": [
        "上学期",
        "休学"
      ]
    },
    {
      "id": "d10",
      "zh": "快递到了，请到菜鸟驿站取包裹。",
      "py": "kuàidì dào le, qǐng dào Càiniǎo yìzhàn qǔ bāoguǒ",
      "id_trans": "Paket kurir sudah sampai, silakan ambil di loker pos Cainiao.",
      "tokens": [
        "快递到了，",
        "请到",
        "菜鸟驿站",
        "取包裹。"
      ],
      "distractors": [
        "外卖",
        "寄信"
      ]
    }
  ]
};
