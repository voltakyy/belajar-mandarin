/* ============================================================
   WoXue Mandarinku - Application Engine
   Logika Pinyin Bernada, Text-to-Speech Web Speech API,
   Spaced Repetition System (SRS), Bank HSK, Tata Bahasa Hub,
   dan Latihan Produktif (Susun Kalimat, Isi Rumpang, Dikte).
   ============================================================ */

const PY_SEG_CACHE = new Map();
function splitPinyinRun(run){
  if(PY_SEG_CACHE.has(run)) return PY_SEG_CACHE.get(run);
  const n = run.length;
  const dp = new Array(n + 1).fill(null);
  dp[0] = [];
  for(let i = 0; i < n; i++){
    if(!dp[i]) continue;
    // Greedy dari potongan terpanjang; hasilnya selalu satu suku kata per span.
    for(let j = n; j > i; j--){
      const piece = run.slice(i, j);
      if(PY_SYLLABLES.has(piece.toLowerCase())){
        const cand = dp[i].concat(piece);
        if(!dp[j] || cand.length < dp[j].length) dp[j] = cand;
      }
    }
  }
  const res = dp[n] || [run];
  PY_SEG_CACHE.set(run, res);
  return res;
}
function toneOfSyllable(s){
  for(const ch of s){
    if(TONES[ch] !== undefined) return TONES[ch];
  }
  return 5;
}
function tonePinyinHTML(str){
  return str.replace(/[A-Za-züÜāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]+/g, run =>
    splitPinyinRun(run).map(s =>
      `<span class="${TONE_COLORS[toneOfSyllable(s)]}">${s}</span>`
    ).join("")
  );
}

/* ============================================================
   Render aksara: pecah per kata + warna lembut
   ============================================================ */

function splitHanRun(run){
  const out = [];
  let i = 0;
  while(i < run.length){
    let matched = null;
    for(const w of WORD_DICT){
      if(run.startsWith(w, i)){ matched = w; break; }
    }
    if(matched){ out.push({t:matched, w:true}); i += matched.length; }
    else { out.push({t:run[i], w:true}); i++; }
  }
  return out;
}

function zhHTML(text){
  const parts = text.match(/[\u3400-\u9fff]+|[^\u3400-\u9fff]+/g) || [text];
  const segs = [];
  for(const part of parts){
    if(/[\u3400-\u9fff]/.test(part)) segs.push(...splitHanRun(part));
    else segs.push(...[...part].map(ch => ({t:ch, w:false})));
  }
  let wi = 0;
  return segs.map(s => {
    if(!s.w) return `<span class="p">${s.t.replace(/ /g, "&nbsp;")}</span>`;
    const cls = "c" + ((wi++ % 5) + 1);
    const chars = [...s.t].map(ch => `<span class="hz-char" data-char="${ch}" title="Aksara: ${ch}">${ch}</span>`).join("");
    return `<span class="w ${cls}" data-word="${s.t}" title="Kata: ${s.t}">${chars}</span>`;
  }).join("");
}

function formatHanziInText(str){
  if(!str) return "";
  return str.replace(/[\u3400-\u9fff]+/g, m => `<span class="zh inline-zh">${zhHTML(m)}</span>`);
}

/* ============================================================
   Text-to-Speech
   ============================================================ */
let zhVoice = null;
let readSession = 0;
function pickVoice(){
  const vs = speechSynthesis.getVoices();
  zhVoice = vs.find(v=>/zh[-_](CN|cn|Hans)/.test(v.lang)) ||
            vs.find(v=>/^zh/i.test(v.lang)) || null;
}
speechSynthesis.onvoiceschanged = pickVoice;
pickVoice();
function speak(text, rate){
  if(rate === undefined || rate === null) rate = settings.rate;
  readSession++;
  clearReadHighlight();
  try{
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "zh-CN";
    if(zhVoice) u.voice = zhVoice;
    u.rate = rate;
    speechSynthesis.speak(u);
  }catch(e){ alert("Suara tidak didukung browser ini. Coba Chrome."); }
}

/* ============================================================
   Baca per kata (klik aksara) dengan sorotan berjalan
   ============================================================ */
function clearReadHighlight(){
  document.querySelectorAll(".zh .w.reading").forEach(w=>w.classList.remove("reading"));
}
function speakToken(text, done){
  try{
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "zh-CN";
    if(zhVoice) u.voice = zhVoice;
    u.rate = settings.rate;
    let advanced = false;
    const go = ()=>{ if(advanced) return; advanced = true; done(); };
    u.onend = go; u.onerror = go;
    speechSynthesis.speak(u);
    setTimeout(go, 3500); // jaring pengaman bila onend tidak terpanggil
  }catch(e){ done(); }
}
function speakWords(zhEl, startEl){
  const tokens = [...zhEl.querySelectorAll(".w")];
  if(!tokens.length) return;
  const session = ++readSession;
  try{ speechSynthesis.cancel(); }catch(e){}
  clearReadHighlight();
  let i = 0;
  if(startEl){
    const idx = tokens.indexOf(startEl.closest(".w"));
    if(idx > -1) i = idx;
  }
  const next = ()=>{
    if(session !== readSession) return;
    clearReadHighlight();
    if(i >= tokens.length){
      setTimeout(()=>{ if(session === readSession) clearReadHighlight(); }, 700);
      return;
    }
    const tok = tokens[i++];
    tok.classList.add("reading");
    speakToken(tok.textContent, ()=>setTimeout(next, 160));
  };
  next();
}
/* ============================================================
   KLIK AKSARA PER HURUF & PER KATA DI SELURUH APLIKASI
   ============================================================ */
document.addEventListener("click", e => {
  // 1. Abaikan elemen input teks / textarea
  if(e.target.closest("input, select, textarea")) return;

  // 2. Jika klik tepat di aksara per huruf (.hz-char)
  const hzChar = e.target.closest(".hz-char");
  if(hzChar){
    e.stopPropagation();
    clearReadHighlight();
    hzChar.classList.add("reading");
    const ch = hzChar.dataset.char || hzChar.textContent.trim();
    speakToken(ch, () => {
      setTimeout(() => hzChar.classList.remove("reading"), 400);
    });
    return;
  }

  // 3. Jika klik kata (.w)
  const word = e.target.closest(".w");
  if(word){
    e.stopPropagation();
    clearReadHighlight();
    word.classList.add("reading");
    const w = word.dataset.word || word.textContent.trim();
    speakToken(w, () => {
      setTimeout(() => word.classList.remove("reading"), 450);
    });
    return;
  }

  // 4. Jika klik kepingan kata (.word-chip) di latihan produktif
  const chip = e.target.closest(".word-chip");
  if(chip && /[\u3400-\u9fff]/.test(chip.textContent)){
    speakToken(chip.textContent.trim());
  }

  // 5. Jika klik tombol opsi di pilihan ganda yang ada Hanzi
  const optBtn = e.target.closest(".cloze-opt-btn, .gram-opt-btn");
  if(optBtn && /[\u3400-\u9fff]/.test(optBtn.textContent)){
    const match = optBtn.textContent.match(/[\u3400-\u9fff]+/);
    if(match) speakToken(match[0]);
  }

  // 6. Universal Fallback: klik teks Mandarin apapun yang beraksara
  const hanziTarget = e.target.closest(".hanzi-speak, .big");
  if(hanziTarget && /[\u3400-\u9fff]/.test(hanziTarget.textContent)){
    const match = hanziTarget.textContent.match(/[\u3400-\u9fff]+/);
    if(match){
      e.stopPropagation();
      hanziTarget.classList.add("reading");
      speakToken(match[0], () => {
        setTimeout(() => hanziTarget.classList.remove("reading"), 450);
      });
      return;
    }
  }

  // 7. Jika klik bubble/area kalimat (.zh) tapi bukan per huruf spesifik
  const zh = e.target.closest(".zh");
  if(zh && !e.target.closest(".btns, button")){
    e.stopPropagation();
    speakWords(zh);
  }
}, true);

/* ============================================================
   Progress / SRS state
   ============================================================ */
const KEY = "mandarinku_srs_v1";
let state = JSON.parse(localStorage.getItem(KEY) || "{}");
const DKEY = "mandarinku_due_v1";
let schedule = JSON.parse(localStorage.getItem(DKEY) || "{}");
function save(){ localStorage.setItem(KEY, JSON.stringify(state)); }
function saveSchedule(){ localStorage.setItem(DKEY, JSON.stringify(schedule)); }
function gradeOf(id, def=0){ return state[id] ?? def; }

/* ===== Render Kartu Percakapan ===== */
let curCat = "all";
let curLevel = 0;
let query = "";
function phraseIdx(){ // flatten
  let list = PHRASES.map((p,i)=>({...p, _i:i}));
  if(curCat!=="all") list = list.filter(p=>p.cat===curCat);
  if(curLevel){
    list = list.filter(p=>{
      const l = hskLevelOf(p._i);
      return curLevel === 3 ? l >= 3 : l === curLevel;
    });
  }
  if(query){
    const q = query.toLowerCase();
    list = list.filter(p=> p.zh.includes(query) || p.py.toLowerCase().includes(q) || p.id.toLowerCase().includes(q));
  }
  return list;
}
function renderCats(){
  const el = document.getElementById("cats");
  const mk = (key,label)=>{
    let seen = 0, done = 0;
    PHRASES.forEach(p=>{ if(key==="all"||p.cat===key){ seen++; if(gradeOf("p"+(PHRASES.indexOf(p)))===2) done++; }});
    const c = document.createElement("button");
    c.textContent = `${label} ${done}/${seen}`;
    c.className = key===curCat ? "catbtn active" : "catbtn";
    c.onclick = ()=>{curCat=key;renderCats();renderPhrases();};
    el.appendChild(c);
  };
  el.innerHTML = "";
  mk("all","Semua");
  for(const [k,label] of Object.entries(CATS)) mk(k,label);
}
function renderLevels(){
  const el = document.getElementById("levels");
  if(!el) return;
  const count = {0:PHRASES.length, 1:0, 2:0, 3:0};
  HSK_LEVELS.forEach(l=>{ count[l>=3?3:l]++; });
  const opts = [[0,"Semua level"],[1,"HSK 1"],[2,"HSK 2"],[3,"HSK 3+"]];
  el.innerHTML = "";
  for(const [key,label] of opts){
    const b = document.createElement("button");
    b.textContent = `${label} ${count[key]}`;
    b.className = key===curLevel ? "catbtn active" : "catbtn";
    b.setAttribute("aria-pressed", key===curLevel ? "true" : "false");
    b.onclick = ()=>{ curLevel = key; renderLevels(); renderPhrases(); };
    el.appendChild(b);
  }
}
function renderPhrases(){
  const el = document.getElementById("phraseList");
  const list = phraseIdx();
  if(!list.length){
    const filters = [];
    if(query) filters.push(`“${query}”`);
    if(curCat !== "all") filters.push("kategori ini");
    if(curLevel) filters.push(curLevel===3 ? "HSK 3+" : "HSK "+curLevel);
    el.innerHTML = `<div class="empty">Tidak ada kartu yang cocok${filters.length ? " untuk " + filters.join(" · ") : ""} 😢</div>`;
    return;
  }
  el.innerHTML = list.map(p=>{
    const idx = (p._i !== undefined) ? p._i : PHRASES.indexOf(p);
    const gi = "p"+idx;
    const done = gradeOf(gi)===2;
    const n = idx+1;
    const lvl = hskLevelOf(idx);
    return `<div class="card ${done?'done':''}" id="card-${gi}">
      <span class="hskbadge" title="Perkiraan level HSK 2.0">HSK ${lvl}</span><span class="num">${n}</span><span class="check">✔ hafal</span>
      <div class="zh">${zhHTML(p.zh)}</div>
      <div class="py">${tonePinyinHTML(p.py)}</div>
      <div class="idn">${p.id}</div>
      ${p.note?`<div class="note">※ ${p.note}</div>`:""}
      <div class="btns">
        <button class="speak" onclick='speak(${JSON.stringify(p.zh.split("，").join(",").replace(/[?！。]/g,""))})'>🔊 Suara</button>
        <button onclick="toggleDone('${gi}')">${done?"↩️ Batal":"✅ Sudah Hafal"}</button>
      </div>
    </div>`;
  }).join("");
}
function toggleDone(gi){
  const wasDone = gradeOf(gi) === 2;
  if(wasDone){
    state[gi] = 0;
    delete schedule[gi];
  }else{
    state[gi] = 2;
    schedule[gi] = { n:4, d: Date.now() + 16*86400000 };
  }
  save(); saveSchedule();
  // update kartu ini saja (tanpa render ulang seluruh daftar → tidak lompat)
  const card = document.getElementById("card-" + gi);
  if(card){
    card.classList.toggle("done", !wasDone);
    const btn = card.querySelector(".btns button:last-child");
    if(btn) btn.textContent = !wasDone ? "↩️ Batal" : "✅ Sudah Hafal";
  }
  renderStats(); renderCats();
}

/* ===== Render Dialog ===== */
function renderDialogs(){
  const el = document.getElementById("dialogList");
  el.innerHTML = DIALOGS.map(d=>`
    <div class="dialog">
      <h3>${d.title}</h3>
      ${d.lines.map(l=>`
        <div class="line ${l[0].toLowerCase()}" onclick='speak(${JSON.stringify(l[1].replace(/[?！。，]/g," "))})'>
          <div class="who">${l[0]==="A"?"Orang A":"Orang B"}</div>
          <div class="bubble">
            <div class="zh" style="font-size:21px">${zhHTML(l[1])}</div>
            <div class="py" style="font-size:15.5px">${tonePinyinHTML(l[2])}</div>
            <div class="idn" style="font-size:14px">${l[3]}</div>
          </div>
        </div>`).join("")}
    </div>`).join("");
}

/* ============================================================
   Kuis SRS — ulangan berjeda (1 → 3 → 7 → 16 → 35 → 60 hari)
   Sesi maksimal 20 kartu: yang jatuh tempo dulu, lalu 10 kartu baru.
   ============================================================ */

let quizQueue = [];
let curQ = null;
let revealed = false;
let quizStarted = false;

function buildQuiz(){
  const now = Date.now();
  const all = PHRASES.map((p,i)=>({...p, gi:"p"+i}));
  const due = all
    .filter(p => schedule[p.gi] && schedule[p.gi].d <= now)
    .sort((a,b) => schedule[a.gi].d - schedule[b.gi].d);
  const fresh = all
    .filter(p => !schedule[p.gi] && gradeOf(p.gi) !== 2)
    .sort(()=>Math.random()-0.5)
    .slice(0,10);
  quizQueue = [...due, ...fresh].slice(0,20).sort(()=>Math.random()-0.5);
  curQ = null; revealed = false;
  quizStarted = quizQueue.length > 0;
  if(quizStarted) nextQuestion(); else renderQuiz();
}
function nextQuestion(){
  revealed = false;
  if(!quizQueue.length){
    curQ = null;
    quizStarted = false;
    renderQuiz();
    return;
  }
  curQ = quizQueue.shift();
  renderQuiz();
}
function renderQuiz(){
  const card = document.getElementById("quizCard");
  const act  = document.getElementById("quizActions");
  if(!curQ){
    const upcoming = Object.values(schedule).map(s=>s.d).filter(d => d > Date.now());
    const next = upcoming.length ? Math.min(...upcoming) : 0;
    const nextTxt = next ? `Ulangan berikutnya jatuh tempo ${new Date(next).toLocaleDateString("id-ID",{day:"numeric",month:"long"})}.` : "";
    card.innerHTML = `<div class="empty">🎉 Tidak ada kartu yang perlu diulang sekarang.<br>${nextTxt}<br><br>Kamu bisa mengulang membaca kartu di tab Percakapan, atau kembali saat jadwalnya tiba.</div>`;
    act.innerHTML = "";
    updateProg();
    return;
  }
  const left = quizQueue.length + 1;
  card.innerHTML = `
    <div class="numtag">${revealed ? "Cek jawabanmu 👇" : "Apa arti kalimat ini?"} · sisa ${left}</div>
    <div class="zh">${zhHTML(curQ.zh)}</div>
    ${revealed ? `
      <div class="py">${tonePinyinHTML(curQ.py)}</div>
      <div class="idn">${curQ.id}</div>
      ${curQ.note ? `<div class="note">※ ${curQ.note}</div>` : ""}
      <div class="btns" style="width:100%"><button class="speak" onclick='speak(${JSON.stringify(curQ.zh.replace(/[?！。，]/g," "))})'>🔊 Dengarkan pelafalan</button></div>
    ` : ""}
  `;
  act.innerHTML = revealed ? `
    <div class="grades">
      <button class="g1" onclick="gradeCur(1)">😵 Salah / lupa</button>
      <button class="g2" onclick="gradeCur(2)">🤔 Ragu-ragu</button>
      <button class="g3" onclick="gradeCur(3)">😎 Lancar!</button>
    </div>` : `
    <button id="revealBtn" onclick="revealAns()">👁️ Tunjukkan pinyin & arti</button>`;
  updateProg();
}
function revealAns(){ revealed = true; renderQuiz(); }
function gradeCur(g){
  const gi = curQ.gi;
  const prev = schedule[gi] || {n:0};
  const DAY = 86400000;
  const rest = quizQueue.filter(x => x.gi !== gi); // buang duplikat lama kartu ini
  if(g === 1){
    state[gi] = 0;
    schedule[gi] = {n:0, d:Date.now()};
    quizQueue = [...rest, curQ, curQ];   // muncul lagi 2× di sesi ini
  }else if(g === 2){
    state[gi] = 1;
    schedule[gi] = {n: Math.max(1, prev.n || 1), d: Date.now() + DAY};
    quizQueue = [...rest, curQ];         // muncul sekali lagi sesi ini
  }else{
    state[gi] = 2;
    const n = Math.min((prev.n || 0) + 1, 6);
    schedule[gi] = {n, d: Date.now() + INTERVALS[n-1] * DAY};
    quizQueue = rest;                    // kartu ini selesai untuk sesi ini
  }
  save(); saveSchedule();
  renderStats(); renderCats(); renderPhrases();
  nextQuestion();
}
function updateProg(){
  const total = PHRASES.length;
  const mastered = Object.values(state).filter(v=>v===2).length;
  const learning = Object.values(state).filter(v=>v===1).length;
  document.getElementById("progBar").style.width = (mastered/total*100)+"%";
  document.getElementById("progText").textContent = `🎯 ${mastered} hafal · 🤔 ${learning} hampir · 📚 ${total-mastered-learning} baru — dari ${total} kartu`;
}

/* ============================================================
   Halaman HSK — latihan listening 10 soal
   ============================================================ */
const HKEY = "mandarinku_hsk_best_v1";
let hskBest = JSON.parse(localStorage.getItem(HKEY) || "{}");
let hskLevel = 1;
let hsk = null;

function hskAllCards(){
  // gi memakai prefix "h" supaya tidak bertabrakan dengan kartu PHRASES ("p").
  return HSK_BANK.map((p,i)=>({zh:p.z, py:p.p, id:p.i, gi:"h"+i, lvl:p.l}));
}
function hskCardsFor(level){
  return hskAllCards().filter(p => p.lvl === level);
}
function hskPool(level){
  return hskCardsFor(level);
}
function hskShuffle(arr){ return arr.slice().sort(()=>Math.random()-0.5); }

function renderHskPage(){
  const counts = {1:0, 2:0, 3:0};
  HSK_BANK.forEach(p=>counts[p.l]++);
  const s1 = document.getElementById("hskStat1");
  if(!s1) return;
  s1.textContent = counts[1];
  document.getElementById("hskStat2").textContent = counts[2];
  document.getElementById("hskStat3").textContent = counts[3];
  document.querySelectorAll("#hskLevels button").forEach(b=>{
    const on = +b.dataset.level === hskLevel;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  const pool = hskCardsFor(hskLevel);
  const best = hskBest[hskLevel] || 0;
  document.getElementById("hskLevelInfo").textContent =
    `${pool.length} kalimat siap diuji · skor terbaik ${best ? best+"/10" : "—"}`;
  document.getElementById("hskSeeCards").textContent =
    `📖 Buka bank HSK ${hskLevel} ↓`;
}

/* ===== Bank 1.000 kalimat HSK ===== */
let hskBankLevel = 1;
let hskBankLimit = 24;
let hskBankQuery = "";

function renderHskBank(){
  const list = document.getElementById("hskBankList");
  if(!list) return;
  const q = hskBankQuery.trim().toLowerCase();
  const qNorm = q.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
  const rows = HSK_BANK.map((p,i)=>({...p, gi:"h"+i})).filter(p=>{
    if(hskBankLevel && p.l !== hskBankLevel) return false;
    if(!q) return true;
    const pyn = p.p.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "").toLowerCase();
    return p.z.includes(q) || pyn.includes(qNorm) || p.i.toLowerCase().includes(q);
  });
  document.querySelectorAll("#hskBankLevels button").forEach(b=>{
    const on = +b.dataset.level === hskBankLevel;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  const shown = rows.slice(0, hskBankLimit);
  const levelLabel = hskBankLevel ? "HSK "+hskBankLevel : "semua level";
  document.getElementById("hskBankInfo").textContent =
    `${rows.length} kalimat ditemukan · ${levelLabel}${q ? ` · pencarian “${hskBankQuery.trim()}”` : ""}`;
  if(!rows.length){
    list.innerHTML = `<div class="empty">Tidak ada kalimat yang cocok. Coba kata lain atau pilih Semua.</div>`;
  }else{
    list.innerHTML = shown.map(p=>`
      <div class="card bankcard" id="bank-${p.gi}">
        <div class="bankhead">
          <span class="bankbadge">HSK ${p.l}</span>
          <span class="banknum">#${p.gi.slice(1)}</span>
        </div>
        <div class="zh">${zhHTML(p.z)}</div>
        <div class="py">${tonePinyinHTML(p.p)}</div>
        <div class="idn">${p.i}</div>
        <div class="btns"><button class="speak" onclick='speak(${JSON.stringify(p.z.replace(/[？！。，]/g," "))})'>🔊 Suara</button></div>
      </div>`).join("");
  }
  const more = document.getElementById("hskLoadMore");
  const rest = rows.length - shown.length;
  more.style.display = rest > 0 ? "block" : "none";
  more.textContent = `Muat ${Math.min(24, rest)} kalimat lagi`;
}

function startHskQuiz(){
  const pool = hskShuffle(hskPool(hskLevel));
  if(pool.length < 4) return;
  hsk = {
    level: hskLevel,
    queue: pool.slice(0, 10),
    idx: 0,
    score: 0,
    answered: false,
    options: [],
    picked: -1,
    lastCorrect: false,
    wrong: [],
    hint: false
  };
  document.getElementById("hskSetup").style.display = "none";
  document.getElementById("hskQuizWrap").style.display = "block";
  renderHskQuiz(true);
}

function hskMakeOptions(cur){
  const sameLevel = hskShuffle(
    hskCardsFor(hsk.level).filter(p => p.gi !== cur.gi && p.id !== cur.id)
  );
  const otherLevel = hskShuffle(
    hskAllCards().filter(p => p.gi !== cur.gi && p.id !== cur.id && p.lvl !== hsk.level)
  );
  const used = new Set([cur.id]);
  const picks = [];
  for(const p of [...sameLevel, ...otherLevel]){
    if(picks.length >= 3) break;
    if(used.has(p.id)) continue;
    used.add(p.id);
    picks.push({gi:p.gi, text:p.id});
  }
  return hskShuffle([...picks, {gi:cur.gi, text:cur.id}]);
}

function renderHskQuiz(autoplay){
  if(!hsk) return;
  const card = document.getElementById("hskQuizCard");
  const act = document.getElementById("hskQuizActions");
  const bar = document.getElementById("hskBar");
  const ptext = document.getElementById("hskProgressText");
  if(hsk.idx >= hsk.queue.length){ renderHskResult(); return; }
  const cur = hsk.queue[hsk.idx];
  const total = hsk.queue.length;
  const n = hsk.idx + 1;
  if(!hsk.options.length) hsk.options = hskMakeOptions(cur);
  const doneCount = hsk.idx + (hsk.answered ? 1 : 0);
  bar.style.width = (doneCount / total * 100) + "%";
  ptext.textContent = hsk.answered
    ? `Soal ${n} dari ${total} · benar ${hsk.score}`
    : `Soal ${n} dari ${total} · dengarkan dulu`;
  if(hsk.answered){
    card.innerHTML = `
      <div class="numtag">Soal ${n}/${total} · ${hsk.lastCorrect ? "✅ Benar" : "❌ Belum tepat"}</div>
      <div class="zh">${zhHTML(cur.zh)}</div>
      <div class="py">${tonePinyinHTML(cur.py)}</div>
      <div class="idn">${cur.id}</div>
      <div class="btns" style="width:100%"><button class="speak" onclick="hskReplay()">🔊 Dengar lagi</button></div>
    `;
    act.innerHTML = `
      <div class="hskopts">${hsk.options.map((o,k)=>{
        const cls = o.gi === cur.gi ? "correct" : (k === hsk.picked ? "wrong" : "");
        return `<button class="hskopt ${cls}" disabled><span class="letter">${"ABCD"[k]}</span><span>${o.text}</span></button>`;
      }).join("")}</div>
      <button class="hsknext" onclick="hskNext()">${n < total ? "Soal berikutnya →" : "Lihat hasil →"}</button>`;
  }else{
    card.innerHTML = `
      <div class="numtag">Soal ${n}/${total} · 🎧 Listening</div>
      <button class="hskplay" onclick="hskReplay()">🔊 Putar suara</button>
      <p class="hskquiet">Dengarkan kalimatnya, lalu pilih arti yang paling tepat. Aksara dan arti disembunyikan sampai kamu menjawab.</p>
      ${hsk.hint ? `<div class="zh" style="margin-top:16px;font-size:28px">${zhHTML(cur.zh)}</div>` : ""}
      <button class="hskshow" onclick="hskHintToggle()">${hsk.hint ? "Sembunyikan aksara" : "Tidak terdengar? Tampilkan aksara"}</button>
    `;
    act.innerHTML = `<div class="hskopts">${hsk.options.map((o,k)=>
      `<button class="hskopt" onclick="hskChoose(${k})"><span class="letter">${"ABCD"[k]}</span><span>${o.text}</span></button>`
    ).join("")}</div>`;
  }
  if(autoplay && !hsk.answered) hskReplay();
}

function hskReplay(){
  if(!hsk || hsk.idx >= hsk.queue.length) return;
  const cur = hsk.queue[hsk.idx];
  speak(cur.zh.replace(/[_/…]/g, " "));
}
function hskChoose(k){
  if(!hsk || hsk.answered) return;
  const cur = hsk.queue[hsk.idx];
  const pick = hsk.options[k];
  if(!pick) return;
  hsk.picked = k;
  // Bandingkan teks, bukan gi: ada beberapa kalimat berbeda dengan arti yang sama.
  hsk.lastCorrect = pick.text === cur.id;
  if(hsk.lastCorrect) hsk.score++;
  else hsk.wrong.push(cur);
  hsk.answered = true;
  renderHskQuiz(false);
}
function hskHintToggle(){
  if(!hsk || hsk.answered) return;
  hsk.hint = !hsk.hint;
  renderHskQuiz(false);
}
function hskNext(){
  if(!hsk || !hsk.answered) return;
  hsk.idx++;
  hsk.answered = false;
  hsk.options = [];
  hsk.picked = -1;
  hsk.lastCorrect = false;
  hsk.hint = false;
  renderHskQuiz(true);
}
function renderHskResult(){
  const card = document.getElementById("hskQuizCard");
  const act = document.getElementById("hskQuizActions");
  const bar = document.getElementById("hskBar");
  const ptext = document.getElementById("hskProgressText");
  const total = hsk.queue.length;
  const score = hsk.score;
  const level = hsk.level;
  const prev = hskBest[level] || 0;
  const newBest = score > prev;
  if(newBest){
    hskBest[level] = score;
    localStorage.setItem(HKEY, JSON.stringify(hskBest));
  }
  const best = Math.max(prev, score);
  const msg = score >= 9 ? "Hampir sempurna — telingamu sudah terbiasa dengan pola HSK 1–3."
    : score >= 7 ? "Bagus. Tinggal rapikan beberapa kalimat yang tadi meleset."
    : score >= 5 ? "Fondasi cukup. Ulangi level ini sekali lagi, lalu baca pembahasannya."
    : "Masih perlu pemanasan. Putar ulang tiap kalimat dan baca pinyin-nya sebelum mencoba lagi.";
  card.innerHTML = `
    <div class="numtag">Selesai · HSK ${level}</div>
    <div class="hskbig">${score}<span>/${total}</span></div>
    <p class="hskresmsg">${msg}</p>
    <p class="hskresmeta">Skor terbaik level ini: ${best}/${total}${newBest ? " · rekor baru!" : " · bisa dicoba lagi kapan saja."}</p>
    ${hsk.wrong.length ? `
      <details class="hskmiss">
        <summary>Lihat ${hsk.wrong.length} kalimat yang perlu diulang</summary>
        ${hsk.wrong.map(p=>`<div class="hskmissItem"><b>${p.zh}</b><br><span>${p.py} · ${p.id}</span></div>`).join("")}
      </details>` : ""}
  `;
  act.innerHTML = `
    <button class="hsknext" onclick="startHskQuiz()">🔁 Ulangi level ini</button>
    <button class="hskback" onclick="endHskQuiz()">← Pilih level</button>`;
  bar.style.width = "100%";
  ptext.textContent = `Selesai · ${score}/${total} benar · skor terbaik ${best}/${total}`;
}
function endHskQuiz(){
  hsk = null;
  document.getElementById("hskQuizWrap").style.display = "none";
  document.getElementById("hskSetup").style.display = "block";
  renderHskPage();
}
function showHskCards(){
  hskBankLevel = hskLevel;
  hskBankQuery = "";
  hskBankLimit = 24;
  const search = document.getElementById("hskSearch");
  if(search) search.value = "";
  renderHskBank();
  const bank = document.getElementById("hskBank");
  if(bank) bank.scrollIntoView({behavior:"smooth", block:"start"});
}

document.querySelectorAll("#hskLevels button").forEach(b=>{
  b.onclick = ()=>{
    hskLevel = +b.dataset.level;
    if(hsk) endHskQuiz();
    renderHskPage();
  };
});
document.getElementById("hskStart").onclick = startHskQuiz;
document.getElementById("hskSeeCards").onclick = showHskCards;

document.getElementById("hskSearch").addEventListener("input", e=>{
  hskBankQuery = e.target.value;
  hskBankLimit = 24;
  renderHskBank();
});
document.getElementById("hskBankLevels").addEventListener("click", e=>{
  const b = e.target.closest("button[data-level]");
  if(!b) return;
  hskBankLevel = +b.dataset.level;
  hskBankLimit = 24;
  renderHskBank();
});
document.getElementById("hskLoadMore").onclick = ()=>{
  hskBankLimit += 24;
  renderHskBank();
};

/* ===== Stats header ===== */
function renderStats(){
  const total = PHRASES.length;
  const m = Object.values(state).filter(v=>v===2).length;
  document.getElementById("statLearned").textContent = `🎯 ${m} hafal`;
  document.getElementById("statReview").textContent = `📚 ${total-m} tersisa`;
}

/* ===== Pengaturan ===== */
const SKEY = "mandarinku_settings_v1";
let settings = Object.assign(
  {rate:0.65, size:"m", tone:"on"},
  JSON.parse(localStorage.getItem(SKEY) || "{}")
);
function saveSettings(){ localStorage.setItem(SKEY, JSON.stringify(settings)); }
function applySettings(){
  document.body.classList.toggle("hanzi-large", settings.size === "l");
  document.body.classList.toggle("no-tone", settings.tone === "off");
  document.querySelectorAll("#speedOpts button").forEach(b=>{
    b.classList.toggle("active", parseFloat(b.dataset.rate) === settings.rate);
  });
  document.querySelectorAll("#sizeOpts button").forEach(b=>{
    b.classList.toggle("active", b.dataset.size === settings.size);
  });
  document.querySelectorAll("#toneOpts button").forEach(b=>{
    b.classList.toggle("active", b.dataset.tone === settings.tone);
  });
}
document.querySelectorAll("#speedOpts button").forEach(b=>{
  b.onclick = ()=>{ settings.rate = parseFloat(b.dataset.rate); saveSettings(); applySettings(); };
});
document.querySelectorAll("#sizeOpts button").forEach(b=>{
  b.onclick = ()=>{ settings.size = b.dataset.size; saveSettings(); applySettings(); };
});
document.querySelectorAll("#toneOpts button").forEach(b=>{
  b.onclick = ()=>{ settings.tone = b.dataset.tone; saveSettings(); applySettings(); };
});
function resetProgress(){
  if(!confirm("Hapus semua progres hafalan, riwayat kuis, dan skor HSK? Tindakan ini tidak bisa dibatalkan.")) return;
  state = {};
  schedule = {};
  quizQueue = [];
  curQ = null;
  quizStarted = false;
  revealed = false;
  hskBest = {};
  localStorage.removeItem(HKEY);
  hsk = null;
  document.getElementById("hskQuizWrap").style.display = "none";
  document.getElementById("hskSetup").style.display = "block";
  save(); saveSchedule();
  renderStats(); renderCats(); renderPhrases(); updateProg(); renderQuiz(); renderHskPage(); renderHskBank();
}


/* ============================================================
   TATA BAHASA (GRAMMAR HUB) ENGINE - 20 ATURAN LENGKAP
   ============================================================ */
let curGrammarLevel = 'all';
let grammarQuery = '';

function renderGrammar(){
  const container = document.getElementById('grammarList');
  if(!container) return;

  const q = grammarQuery.toLowerCase().trim();
  const filtered = GRAMMAR_RULES.filter(r => {
    const matchLevel = (curGrammarLevel === 'all') ||
      (curGrammarLevel === 'hsk1' && r.level.includes('1')) ||
      (curGrammarLevel === 'hsk2' && r.level.includes('2')) ||
      (curGrammarLevel === 'hsk3' && (r.level.includes('3') || r.level.includes('4')));
    
    if(!matchLevel) return false;
    if(!q) return true;
    return r.title.toLowerCase().includes(q) ||
           r.formula.toLowerCase().includes(q) ||
           r.desc.toLowerCase().includes(q) ||
           r.examples.some(ex => ex.zh.includes(q) || ex.py.toLowerCase().includes(q) || ex.id.toLowerCase().includes(q));
  });

  if(filtered.length === 0){
    container.innerHTML = `<div class="card" style="text-align:center;padding:30px;color:var(--muted)">Tidak ada tata bahasa yang cocok dengan pencarian "<b>${q}</b>".</div>`;
    return;
  }

  container.innerHTML = filtered.map(rule => {
    const badgeClass = rule.level.includes('3') ? 'hsk3' : (rule.level.includes('2') ? 'hsk2' : '');
    
    // Points list
    const pointsHTML = rule.points && rule.points.length ? `
      <ul class="gram-points">
        ${rule.points.map(pt => `<li>${formatHanziInText(pt)}</li>`).join('')}
      </ul>
    ` : '';

    // Examples list
    const examplesHTML = rule.examples.map(ex => `
      <div class="gram-example-row">
        <div class="gram-example-text">
          <div class="zh gram-ex-zh" style="font-size:18px">${zhHTML(ex.zh)}</div>
          <div class="gram-ex-py">${tonePinyinHTML(ex.py)}</div>
          <div class="gram-ex-id">${ex.id}</div>
        </div>
        <button class="speak-sm" onclick="speak('${ex.zh.replace(/'/g, "\'")}')" title="Dengarkan pengucapan">🔊 Dengar</button>
      </div>
    `).join('');

    // Mini-Quiz
    const quizHTML = rule.quiz && rule.quiz.length ? `
      <div class="gram-quiz-box" id="gquiz_${rule.id}">
        <div class="gram-examples-title">✍️ Uji Pemahaman Cepat</div>
        ${rule.quiz.map((qz, qIdx) => `
          <div style="margin-top:10px">
            <div class="gram-quiz-q">${qIdx + 1}. ${formatHanziInText(qz.q)}</div>
            <div class="gram-opts-grid">
              ${qz.opts.map((opt, optIdx) => `
                <button class="gram-opt-btn" id="gbtn_${rule.id}_${qIdx}_${optIdx}" onclick="answerGrammarQuiz('${rule.id}', ${qIdx}, ${optIdx})">${formatHanziInText(opt)}</button>
              `).join('')}
            </div>
            <div class="gram-quiz-feedback" id="gfb_${rule.id}_${qIdx}"></div>
          </div>
        `).join('')}
      </div>
    ` : '';

    return `
      <article class="gram-card" id="rule-${rule.id}">
        <div class="gram-head">
          <h3 class="gram-title">${rule.title}</h3>
          <span class="gram-badge ${badgeClass}">${rule.level}</span>
        </div>
        <div class="gram-formula">📝 Pola: ${formatHanziInText(rule.formula)}</div>
        <div class="gram-desc">${rule.desc}</div>
        ${pointsHTML}
        <div class="gram-examples-title">💡 Contoh Penggunaan Nyata</div>
        ${examplesHTML}
        ${quizHTML}
      </article>
    `;
  }).join('');
}

function answerGrammarQuiz(ruleId, qIdx, chosenIdx){
  const rule = GRAMMAR_RULES.find(r => r.id === ruleId);
  if(!rule || !rule.quiz || !rule.quiz[qIdx]) return;
  const qz = rule.quiz[qIdx];
  const fb = document.getElementById(`gfb_${ruleId}_${qIdx}`);
  if(!fb) return;

  // disable further clicks on this question
  qz.opts.forEach((_, optIdx) => {
    const btn = document.getElementById(`gbtn_${ruleId}_${qIdx}_${optIdx}`);
    if(btn){
      btn.onclick = null;
      if(optIdx === qz.ans) btn.classList.add('correct');
      else if(optIdx === chosenIdx) btn.classList.add('wrong');
    }
  });

  const isCorrect = (chosenIdx === qz.ans);
  fb.className = 'gram-quiz-feedback ' + (isCorrect ? 'show-ok' : 'show-err');
  fb.innerHTML = (isCorrect ? '🎉 <b>Tepat sekali!</b> ' : '❌ <b>Kurang tepat.</b> ') + qz.expl;
}

/* ============================================================
   LATIHAN PRODUKTIF HUB (SUSUN KALIMAT, ISI RUMPANG, DIKTE)
   ============================================================ */
let currentPracticeMode = 'scramble'; // 'scramble' | 'cloze' | 'dictation'
let scrambleIndex = 0;
let scrambleSelectedTokens = [];
let scramblePool = [];
let scrambleChecked = false;

let clozeIndex = 0;
let clozeAnswered = false;

let dictationIndex = 0;
let dictationSelectedTokens = [];
let dictationPool = [];
let dictationChecked = false;

function initPracticeHub(){
  const tab = document.getElementById('tab-practice');
  if(!tab) return;
  renderPracticeHeader();
  renderPracticeCurrentMode();
}

function renderPracticeHeader(){
  const container = document.getElementById('practiceModes');
  if(!container) return;
  container.innerHTML = `
    <button class="${currentPracticeMode==='scramble'?'active':''}" onclick="setPracticeMode('scramble')">🧩 Susun Kalimat</button>
    <button class="${currentPracticeMode==='cloze'?'active':''}" onclick="setPracticeMode('cloze')">✏️ Isi Rumpang</button>
    <button class="${currentPracticeMode==='dictation'?'active':''}" onclick="setPracticeMode('dictation')">🎧 Dikte Audio</button>
  `;
}

function setPracticeMode(mode){
  currentPracticeMode = mode;
  renderPracticeHeader();
  renderPracticeCurrentMode();
  try{ speechSynthesis.cancel(); }catch(e){}
}

function renderPracticeCurrentMode(){
  const container = document.getElementById('practiceContainer');
  if(!container) return;

  if(currentPracticeMode === 'scramble'){
    renderScrambleMode(container);
  } else if(currentPracticeMode === 'cloze'){
    renderClozeMode(container);
  } else if(currentPracticeMode === 'dictation'){
    renderDictationMode(container);
  }
}

/* 1. Susun Kalimat */
function renderScrambleMode(container){
  const bank = PRACTICE_BANK.scramble;
  if(scrambleIndex >= bank.length) scrambleIndex = 0;
  const item = bank[scrambleIndex];

  // init pool if fresh
  if(!scramblePool || scramblePool.length === 0 || scramblePool.item_id !== item.id){
    scramblePool = item.tokens.map((tok, idx) => ({id: idx, text: tok, used: false}));
    scramblePool.item_id = item.id;
    // shuffle
    scramblePool.sort(() => Math.random() - 0.5);
    scrambleSelectedTokens = [];
    scrambleChecked = false;
  }

  const slotChips = scrambleSelectedTokens.map((tObj, slotIdx) => `
    <div class="word-chip in-slot" onclick="unpickScrambleToken(${slotIdx})">${tObj.text}</div>
  `).join('');

  const poolChips = scramblePool.map(tObj => `
    <div class="word-chip ${tObj.used ? 'used' : ''}" onclick="pickScrambleToken(${tObj.id})">${tObj.text}</div>
  `).join('');

  container.innerHTML = `
    <div class="practice-card">
      <div class="practice-header">
        <span>SOAL ${scrambleIndex + 1} / ${bank.length}</span>
        <span>🧩 SUSUN KATA MANDARIN</span>
      </div>

      <div class="practice-target-box">
        <div class="target-idn">"${item.id_trans}"</div>
        <div class="target-hint">Klik kata-kata di bawah sesuai urutan tata bahasa yang benar.</div>
      </div>

      <div class="scramble-slot ${scrambleSelectedTokens.length > 0 ? 'active-slot' : ''}">
        ${scrambleSelectedTokens.length > 0 ? slotChips : '<span class="scramble-slot-empty">Susunan kalimatmu akan muncul di sini...</span>'}
      </div>

      <div class="scramble-pool">
        ${poolChips}
      </div>

      <div class="practice-actions">
        <button class="practice-btn" onclick="resetScrambleTokens()">🔄 Atur Ulang</button>
        <button class="practice-btn primary" onclick="checkScramble()">✅ Periksa Susunan</button>
      </div>

      <div class="practice-feedback" id="scrambleFeedback"></div>
    </div>
  `;
}

function pickScrambleToken(poolId){
  if(scrambleChecked) return;
  const token = scramblePool.find(t => t.id === poolId);
  if(!token || token.used) return;
  token.used = true;
  scrambleSelectedTokens.push(token);
  renderPracticeCurrentMode();
}

function unpickScrambleToken(slotIdx){
  if(scrambleChecked) return;
  const token = scrambleSelectedTokens[slotIdx];
  if(!token) return;
  token.used = false;
  scrambleSelectedTokens.splice(slotIdx, 1);
  renderPracticeCurrentMode();
}

function resetScrambleTokens(){
  scramblePool.forEach(t => t.used = false);
  scrambleSelectedTokens = [];
  scrambleChecked = false;
  renderPracticeCurrentMode();
}

function checkScramble(){
  const item = PRACTICE_BANK.scramble[scrambleIndex];
  const fb = document.getElementById('scrambleFeedback');
  if(!fb) return;

  const userSentence = scrambleSelectedTokens.map(t => t.text).join('').replace(/[，。？！\s]/g, '');
  const correctSentence = item.zh.replace(/[，。？！\s]/g, '');

  if(userSentence === correctSentence){
    scrambleChecked = true;
    fb.className = 'practice-feedback show-success';
    fb.innerHTML = `
      <div class="practice-rationale-title">🎉 Benar Sekali! Kalimat Sempurna:</div>
      <div class="zh" style="font-size:22px;margin:8px 0">${zhHTML(item.zh)}</div>
      <div style="font-size:13px;color:var(--warm);margin-bottom:8px">${tonePinyinHTML(item.py)}</div>
      <div class="practice-rationale-body">💡 <b>Aturan Tata Bahasa:</b> ${item.tip}</div>
      <div style="margin-top:14px;display:flex;gap:10px">
        <button class="practice-btn" onclick="speak('${item.zh.replace(/'/g, "\'")}')">🔊 Dengarkan</button>
        <button class="practice-btn primary" onclick="nextScramble()">Lanjut Soal Berikutnya ➔</button>
      </div>
    `;
    speak(item.zh);
  } else {
    fb.className = 'practice-feedback show-error';
    fb.innerHTML = `
      <div class="practice-rationale-title">❌ Susunan belum tepat</div>
      <div class="practice-rationale-body">Perhatikan posisi keterangan waktu, partikel, atau kata bantu bilangan. Silakan atur ulang dan coba lagi!</div>
    `;
  }
}

function nextScramble(){
  scrambleIndex = (scrambleIndex + 1) % PRACTICE_BANK.scramble.length;
  scramblePool = [];
  scrambleSelectedTokens = [];
  scrambleChecked = false;
  renderPracticeCurrentMode();
}

/* 2. Isi Rumpang */
function renderClozeMode(container){
  const bank = PRACTICE_BANK.cloze;
  if(clozeIndex >= bank.length) clozeIndex = 0;
  const item = bank[clozeIndex];
  clozeAnswered = false;

  const formattedPrompt = item.prompt.replace('___', '<span class="cloze-blank" id="clozeBlankSpot">___</span>');

  const optionsHTML = item.options.map((opt, optIdx) => `
    <button class="cloze-opt-btn" id="clozeOpt_${optIdx}" onclick="chooseClozeOpt(${optIdx})">${opt}</button>
  `).join('');

  container.innerHTML = `
    <div class="practice-card">
      <div class="practice-header">
        <span>SOAL ${clozeIndex + 1} / ${bank.length}</span>
        <span>✏️ ISI RUMPANG (TATA BAHASA & KATA BANTU)</span>
      </div>

      <div class="cloze-sentence-card">
        <div class="zh cloze-zh" style="font-size:24px">${zhHTML(item.prompt).replace("___", '<span class="cloze-blank" id="clozeBlankSpot">___</span>')}</div>
        <div class="cloze-py">${tonePinyinHTML(item.pinyin)}</div>
        <div class="cloze-id">${item.id_trans}</div>
      </div>

      <div class="cloze-options-grid">
        ${optionsHTML}
      </div>

      <div class="practice-feedback" id="clozeFeedback"></div>
    </div>
  `;
}

function chooseClozeOpt(chosenIdx){
  if(clozeAnswered) return;
  clozeAnswered = true;
  const item = PRACTICE_BANK.cloze[clozeIndex];
  const fb = document.getElementById('clozeFeedback');
  const blank = document.getElementById('clozeBlankSpot');
  if(!fb) return;

  item.options.forEach((opt, idx) => {
    const btn = document.getElementById(`clozeOpt_${idx}`);
    if(btn){
      btn.onclick = null;
      if(idx === item.answer) btn.classList.add('correct');
      else if(idx === chosenIdx) btn.classList.add('wrong');
    }
  });

  if(blank){
    blank.textContent = item.options[item.answer];
    blank.classList.add('filled');
  }

  const isCorrect = (chosenIdx === item.answer);
  fb.className = 'practice-feedback ' + (isCorrect ? 'show-success' : 'show-error');
  fb.innerHTML = `
    <div class="practice-rationale-title">${isCorrect ? '🎉 Jawaban Tepat!' : '❌ Jawaban Kurang Tepat'}</div>
    <div class="practice-rationale-body">${item.expl}</div>
    <div style="margin-top:14px;display:flex;gap:10px">
      <button class="practice-btn" onclick="speak('${item.prompt.replace('___', item.options[item.answer]).replace(/'/g, "\'")}')">🔊 Dengarkan Kalimat Utuh</button>
      <button class="practice-btn primary" onclick="nextCloze()">Lanjut Soal Berikutnya ➔</button>
    </div>
  `;
  speak(item.prompt.replace('___', item.options[item.answer]));
}

function nextCloze(){
  clozeIndex = (clozeIndex + 1) % PRACTICE_BANK.cloze.length;
  renderPracticeCurrentMode();
}

/* 3. Dikte Audio */
function renderDictationMode(container){
  const bank = PRACTICE_BANK.dictation;
  if(dictationIndex >= bank.length) dictationIndex = 0;
  const item = bank[dictationIndex];

  if(!dictationPool || dictationPool.length === 0 || dictationPool.item_id !== item.id){
    const allTokens = [...item.tokens, ...(item.distractors || [])];
    dictationPool = allTokens.map((tok, idx) => ({id: idx, text: tok, used: false}));
    dictationPool.item_id = item.id;
    dictationPool.sort(() => Math.random() - 0.5);
    dictationSelectedTokens = [];
    dictationChecked = false;
  }

  const slotChips = dictationSelectedTokens.map((tObj, slotIdx) => `
    <div class="word-chip in-slot" onclick="unpickDictationToken(${slotIdx})">${tObj.text}</div>
  `).join('');

  const poolChips = dictationPool.map(tObj => `
    <div class="word-chip ${tObj.used ? 'used' : ''}" onclick="pickDictationToken(${tObj.id})">${tObj.text}</div>
  `).join('');

  container.innerHTML = `
    <div class="practice-card">
      <div class="practice-header">
        <span>SOAL ${dictationIndex + 1} / ${bank.length}</span>
        <span>🎧 DIKTE & SUSUN DENGARAN AUDIO</span>
      </div>

      <div class="dictation-audio-center">
        <button class="dictation-play-btn" onclick="speakDictation(1.0)">🔊 Dengarkan Suara</button>
        <button class="dictation-slow-btn" onclick="speakDictation(0.55)">🐢 Lambat (0.55×)</button>
      </div>

      <div class="scramble-slot ${dictationSelectedTokens.length > 0 ? 'active-slot' : ''}">
        ${dictationSelectedTokens.length > 0 ? slotChips : '<span class="scramble-slot-empty">Dengarkan audio, lalu susun kata yang kamu dengar di sini...</span>'}
      </div>

      <div class="scramble-pool">
        ${poolChips}
      </div>

      <div class="practice-actions">
        <button class="practice-btn" onclick="resetDictationTokens()">🔄 Atur Ulang</button>
        <button class="practice-btn primary" onclick="checkDictation()">✅ Periksa Dikte</button>
      </div>

      <div class="practice-feedback" id="dictationFeedback"></div>
    </div>
  `;

  // Autoplay voice
  setTimeout(() => speakDictation(1.0), 350);
}

function speakDictation(rateMult){
  const item = PRACTICE_BANK.dictation[dictationIndex];
  if(item) speak(item.zh, (settings.rate || 0.65) * rateMult);
}

function pickDictationToken(poolId){
  if(dictationChecked) return;
  const token = dictationPool.find(t => t.id === poolId);
  if(!token || token.used) return;
  token.used = true;
  dictationSelectedTokens.push(token);
  renderPracticeCurrentMode();
}

function unpickDictationToken(slotIdx){
  if(dictationChecked) return;
  const token = dictationSelectedTokens[slotIdx];
  if(!token) return;
  token.used = false;
  dictationSelectedTokens.splice(slotIdx, 1);
  renderPracticeCurrentMode();
}

function resetDictationTokens(){
  dictationPool.forEach(t => t.used = false);
  dictationSelectedTokens = [];
  dictationChecked = false;
  renderPracticeCurrentMode();
}

function checkDictation(){
  const item = PRACTICE_BANK.dictation[dictationIndex];
  const fb = document.getElementById('dictationFeedback');
  if(!fb) return;

  const userSentence = dictationSelectedTokens.map(t => t.text).join('').replace(/[，。？！\s]/g, '');
  const correctSentence = item.zh.replace(/[，。？！\s]/g, '');

  if(userSentence === correctSentence){
    dictationChecked = true;
    fb.className = 'practice-feedback show-success';
    fb.innerHTML = `
      <div class="practice-rationale-title">🎉 Dikte Sempurna! Pendengaranmu Sangat Tajam:</div>
      <div class="zh" style="font-size:22px;margin:8px 0">${zhHTML(item.zh)}</div>
      <div style="font-size:13.5px;color:var(--warm);margin-bottom:6px">${tonePinyinHTML(item.py)}</div>
      <div style="font-size:14px;color:#D3E3FD">🇮🇩 "${item.id_trans}"</div>
      <div style="margin-top:14px;display:flex;gap:10px">
        <button class="practice-btn" onclick="speak('${item.zh.replace(/'/g, "\'")}')">🔊 Putar Ulang</button>
        <button class="practice-btn primary" onclick="nextDictation()">Lanjut Soal Berikutnya ➔</button>
      </div>
    `;
    speak(item.zh);
  } else {
    fb.className = 'practice-feedback show-error';
    fb.innerHTML = `
      <div class="practice-rationale-title">❌ Ada kata yang keliru atau urutannya belum pas</div>
      <div class="practice-rationale-body">Gunakan tombol 🐢 Lambat untuk mendengarkan kembali kata per kata secara perlahan.</div>
    `;
  }
}

function nextDictation(){
  dictationIndex = (dictationIndex + 1) % PRACTICE_BANK.dictation.length;
  dictationPool = [];
  dictationSelectedTokens = [];
  dictationChecked = false;
  renderPracticeCurrentMode();
}



/* ===== Tabs Routing ===== */
document.querySelectorAll("nav button").forEach(b => {
  b.onclick = () => {
    document.querySelectorAll("nav button").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    document.querySelectorAll("section.panel").forEach(s => s.classList.remove("show"));
    const targetSection = document.getElementById("tab-" + b.dataset.tab);
    if(targetSection) targetSection.classList.add("show");
    
    if(b.dataset.tab === "quiz" && !quizStarted) buildQuiz();
    if(b.dataset.tab === "hsk"){ renderHskPage(); renderHskBank(); }
    if(b.dataset.tab === "grammar"){ renderGrammar(); }
    if(b.dataset.tab === "practice"){ initPracticeHub(); }
    
    try{ speechSynthesis.cancel(); readSession++; clearReadHighlight(); }catch(e){}
    window.scrollTo({top:0});
  };
});

/* ===== Search ===== */
document.getElementById("search").addEventListener("input", e => {
  query = e.target.value.trim();
  renderPhrases();
});

const gramSearchInput = document.getElementById("searchGrammar");
if(gramSearchInput){
  gramSearchInput.addEventListener("input", e => {
    grammarQuery = e.target.value.trim();
    renderGrammar();
  });
}

function setGrammarFilter(lvl){
  curGrammarLevel = lvl;
  document.querySelectorAll("#grammarLevels button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lvl === lvl);
  });
  renderGrammar();
}

/* ===== Init & Migration ===== */
/* Bersihkan kunci lama yang tidak valid */
Object.keys(state).forEach(k => {
  const m = k.match(/^p(\d+)$/);
  if(!m || +m[1] >= PHRASES.length) delete state[k];
});
Object.keys(schedule).forEach(k => {
  const m = k.match(/^p(\d+)$/);
  if(!m || +m[1] >= PHRASES.length) delete schedule[k];
});
/* Migrasi: kartu yang sudah hafal di versi lama diberi jadwal ulangan */
PHRASES.forEach((p, i) => {
  const gi = "p" + i;
  if(gradeOf(gi) === 2 && !schedule[gi]) schedule[gi] = {n:4, d:Date.now() + 16*86400000};
});
save(); saveSchedule();

renderCats();
renderLevels();
renderPhrases();
renderDialogs();
renderStats();
renderHskPage();
renderHskBank();
renderGrammar();
initPracticeHub();
applySettings();

