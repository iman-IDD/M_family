// ===============================
// البيانات الأساسية
// ===============================

// أفراد العائلة (كل شخص وصوره الخاصة)
const FAMILY = [
  {
    name: "خالتي مريم",
    age: 42,
    img: "h1.jpg",
    poem: "يا خالتي أنتِ الحنانُ إذا سرى … في القلبِ فاض بموجهِ يتكسّرُ",
    saying: "الأمُّ وإن بَعُدت، والخالةُ إن قَرُبت، كلاهما نبعُ الرحمةِ في الحياة."
  },
  {
    name: "خالتي مريم",
    age: 42,
    img: "h2.jpg",
    poem: "أنتِ الدعاءُ إذا ادلهمّ الليلُ … وأنتِ الرجاءُ إذا اشتدّ الظلامُ",
    saying: "دعاءُ الخالةِ يبلغُ حيث لا تبلغُ الخطى."
  },
  {
    name: "خالتي مريم",
    age: 42,
    img: "h3.jpg",
    poem: "في ضحكتِكِ الدفءُ الذي أحتاجهُ … وفي حضورِكِ راحةٌ لا تُشترى",
    saying: "بيتُ الخالةِ بيتٌ لا يعرفُ الغربة."
  },
  {
    name: "غادة",
    age: 16,
    img: "h4.jpg",
    poem: "غادةٌ كاسمِها في الحُسنِ آيةٌ … وفي القلبِ نجمٌ ساطعٌ لا يخبو",
    saying: "شبابُ اليومِ زهرةٌ، وغدُهُ ثمرةٌ، فاسقيه بالجدِّ والإيمان."
  },
  {
    name: "غادة",
    age: 16,
    img: "h5.jpg",
    poem: "تكبرينَ يا غادةُ والقلبُ فرحٌ … بكِ الأملُ الجميلُ يزدهرُ",
    saying: "أجملُ ما في السادسةَ عشرةَ أنها بدايةُ حلمٍ لا نهايةَ له."
  },
  {
    name: "عبد الرحيم",
    age: 13,
    img: "h6.jpg",
    poem: "يا عبدَ الرحيمِ يا فتى الأملِ … خُذ من دعائي زادَ رحلتِكَ الطويلة",
    saying: "الفتى الحقُّ من قال: ها أنا، لا من قال: كان أبي."
  },
  {
    name: "عبد الرحيم",
    age: 13,
    img: "h7.jpg",
    poem: "في عينَيكَ مستقبلٌ يُرى … ومن قلبِكَ الطيبِ يُبنى الغدُ",
    saying: "زَرعُ الطفولةِ الطيبةِ يُثمرُ رجالًا في المستقبل."
  },
  {
    name: "نسرين",
    age: 12,
    img: "h8.jpg",
    poem: "نسرينُ زهرةُ بيتِنا العطرى … وضحكتُها في الروحِ تنتشرُ",
    saying: "أصغرُ العائلةِ أكبرُهم في القلوب."
  },
  {
    name: "نسرين",
    age: 12,
    img: "h9.jpg",
    poem: "كبرتِ يا نسرينُ في عينِ الهوى … ولكِ في القلبِ مكانٌ لا يُنسى",
    saying: "الطفولةُ لحظةٌ… فاجعلوها ذكرى جميلةً تدومُ."
  }
];

// مواضع النجوم لتشكيل قلب
const HEART_POSITIONS = [
  { top: "8%",  left: "28%" },
  { top: "8%",  left: "58%" },
  { top: "22%", left: "12%" },
  { top: "22%", left: "44%" },
  { top: "22%", left: "72%" },
  { top: "42%", left: "22%" },
  { top: "42%", left: "62%" },
  { top: "62%", left: "36%" },
  { top: "80%", left: "44%" }
];

// التهاني (لكل شخص)
const WISHES = [
  {
    name: "خالتي مريم",
    text: "خالتي الغالية، أنتِ أكثر من مجرد قريبة… أنتِ الأم الثانية، والقلب الكبير الذي يتّسع لنا جميعًا. كل عام وأنتِ نور بيتنا، وسندنا الذي لا يتزعزع. أطال الله في عمرِكِ على طاعته."
  },
  {
    name: "غادة",
    text: "غادة الحبيبة، في عمرِكِ هذا تُفتح أبواب الحياة على مصراعيها… فكوني كاسمِكِ: جميلة الروح، قوية القلب، ثابتة الخطى. كل عام وأنتِ تكبرين نحو أحلامِكِ."
  },
  {
    name: "عبد الرحيم",
    text: "عبد الرحيم، يا فتى المستقبل، في هذه السنّ تُبنى الشخصية وتُغرس القيم. كن كما نتمنى: صالحًا، طموحًا، شجاعًا. كل عام وأنت رجلٌ في تكوينه، وقلبٌ نفخر به."
  },
  {
    name: "نسرين",
    text: "نسرين الصغيرة، يا فرحة البيت وضحكته… كبري يا حبيبتي في عافية، واملئي أيامنا بالبهجة كما تعوّدتِ. كل عام وأنتِ الزهرةُ الأجمل بيننا."
  }
];

// الأدعية والرسائل الختامية
const PRAYERS = [
  {
    name: "خالتي مريم",
    dua: "اللهم احفظ خالتي مريم، وأدم عليها الصحةَ والعافية، واجعل أيامها كلها فرحًا ورضًا، وبارك لها في أهلها وذريتها.",
    msg: "خالتي، أنتِ في القلب دائمًا، وسأظل مدينةً لكِ بكل حبٍ ودعاء."
  },
  {
    name: "غادة",
    dua: "اللهم وفّق غادة في دراستها ومسيرتها، وارزقها من الخير أوسعه، ومن العلم أنفعه، ومن الحياة أجملها.",
    msg: "غادة، أنتِ أختٌ لي قبل أن تكوني ابنة خالتي… كل عام وأنتِ تلمعين أكثر."
  },
  {
    name: "عبد الرحيم",
    dua: "اللهم اجعل عبد الرحيم من الصالحين، ووفّقه في دنياه وآخرته، وارزقه الفهم والعلم والخُلق الحسن.",
    msg: "عبد الرحيم، أنت فخرنا الصغير الذي سيكبر ليصبح فخرًا كبيرًا بإذن الله."
  },
  {
    name: "نسرين",
    dua: "اللهم احفظ نسرين من كل سوء، واجعل حياتها كلها فرحًا وصحةً، وأنبتها نباتًا حسنًا.",
    msg: "نسرين، ضحكتُكِ هدية لا تُشترى… لا تتوقفي عن إسعادنا يا صغيرتي."
  }
];

// ===============================
// العناصر
// ===============================
const welcomeScreen = document.getElementById("welcomeScreen");
const enterBtn = document.getElementById("enterBtn");
const app = document.getElementById("app");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const goldDust = document.getElementById("goldDust");

const homeHeart = document.getElementById("homeHeart");
const starsHeart = document.getElementById("starsHeart");
const galleryGrid = document.getElementById("galleryGrid");
const wishesGrid = document.getElementById("wishesGrid");
const prayersList = document.getElementById("prayersList");

const starModal = document.getElementById("starModal");
const closeStar = document.getElementById("closeStar");
const starImg = document.getElementById("starImg");
const starName = document.getElementById("starName");
const starPoem = document.getElementById("starPoem");
const starSaying = document.getElementById("starSaying");

const startGameBtn = document.getElementById("startGame");
const gameArea = document.getElementById("gameArea");
const gTime = document.getElementById("gTime");
const gScore = document.getElementById("gScore");
const gameMsg = document.getElementById("gameMsg");

// ===============================
// متغيرات التشغيل
// ===============================
let initialized = false;
let musicStarted = false;
let dustInterval = null;

let gameRunning = false;
let gameCaught = 0;
let gameTime = 20;
let gameInterval = null;

// ===============================
// بداية الغبار الذهبي
// ===============================
startGoldDust();

function startGoldDust() {
  if (dustInterval) return;

  dustInterval = setInterval(() => {
    const p = document.createElement("span");
    p.className = "dust-p";
    p.style.left = `${Math.random() * 100}%`;
    p.style.bottom = `-10px`;
    p.style.width = `${4 + Math.random() * 6}px`;
    p.style.height = p.style.width;
    p.style.animationDuration = `${9 + Math.random() * 7}s`;
    p.style.opacity = `${0.2 + Math.random() * 0.5}`;
    goldDust.appendChild(p);

    setTimeout(() => p.remove(), 18000);
  }, 260);
}

// ===============================
// زر الاستقبال
// ===============================
enterBtn.addEventListener("click", () => {
  welcomeScreen.style.transition = "opacity 0.8s ease";
  welcomeScreen.style.opacity = "0";

  setTimeout(() => {
    welcomeScreen.classList.add("hidden");
    app.classList.remove("hidden");

    if (!initialized) {
      initSite();
      initialized = true;
    }

    startMusic();
  }, 800);
});

// ===============================
// الموسيقى
// ===============================
function startMusic() {
  if (musicStarted && !bgMusic.paused) return;

  bgMusic.volume = 0.05;
  bgMusic.play().then(() => {
    musicStarted = true;
    musicBtn.textContent = "إيقاف الموسيقى";

    // fade in
    const fade = setInterval(() => {
      if (bgMusic.volume < 0.4) {
        bgMusic.volume = Math.min(bgMusic.volume + 0.03, 0.4);
      } else {
        clearInterval(fade);
      }
    }, 150);
  }).catch(() => {
    musicBtn.textContent = "تشغيل الموسيقى";
  });
}

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    startMusic();
  } else {
    bgMusic.pause();
    musicBtn.textContent = "تشغيل الموسيقى";
  }
});

// ===============================
// تهيئة الموقع
// ===============================
function initSite() {
  renderStars();
  renderGallery();
  renderWishes();
  renderPrayers();
  initGame();
}

// ===============================
// نجوم العائلة (تشكل قلب)
// ===============================
function renderStars() {
  starsHeart.innerHTML = "";

  FAMILY.forEach((person, i) => {
    const star = document.createElement("div");
    star.className = "star-node";
    star.style.top = HEART_POSITIONS[i].top;
    star.style.left = HEART_POSITIONS[i].left;
    star.style.animationDelay = `${i * 0.25}s`;
    star.innerHTML = `<img src="${person.img}" alt="${person.name}">`;

    star.addEventListener("click", () => {
      starImg.src = person.img;
      starName.textContent = person.name;
      starPoem.textContent = person.poem;
      starSaying.textContent = person.saying;
      starModal.classList.remove("hidden");
    });

    starsHeart.appendChild(star);
  });
}

closeStar.addEventListener("click", () => starModal.classList.add("hidden"));
starModal.addEventListener("click", (e) => {
  if (e.target === starModal) starModal.classList.add("hidden");
});

// ===============================
// المعرض
// ===============================
function renderGallery() {
  galleryGrid.innerHTML = "";

  FAMILY.forEach(person => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <img src="${person.img}" alt="${person.name}">
      <p>${person.name}</p>
    `;
    galleryGrid.appendChild(item);
  });
}

// ===============================
// التهاني
// ===============================
function renderWishes() {
  wishesGrid.innerHTML = "";

  WISHES.forEach(w => {
    const card = document.createElement("div");
    card.className = "wish-card";
    card.innerHTML = `
      <h3>${w.name}</h3>
      <p class="wish-hint">✦ اضغط لقراءة الرسالة</p>
      <p class="wish-text">${w.text}</p>
    `;
    card.addEventListener("click", () => card.classList.toggle("open"));
    wishesGrid.appendChild(card);
  });
}

// ===============================
// الأدعية
// ===============================
function renderPrayers() {
  prayersList.innerHTML = "";

  PRAYERS.forEach(p => {
    const card = document.createElement("div");
    card.className = "prayer-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p class="dua">${p.dua}</p>
      <p class="personal-msg">${p.msg}</p>
    `;
    prayersList.appendChild(card);
  });
}

// ===============================
// اللعبة
// ===============================
function initGame() {
  startGameBtn.addEventListener("click", startGame);
}

function startGame() {
  if (gameRunning) return;

  gameRunning = true;
  gameCaught = 0;
  gameTime = 20;
  gameArea.innerHTML = "";
  gameMsg.textContent = "";
  gScore.textContent = "✦ 0 / 9";
  gTime.textContent = "⏳ 20";

  spawnStars();

  gameInterval = setInterval(() => {
    gameTime--;
    gTime.textContent = `⏳ ${gameTime}`;
    if (gameTime <= 0) endGame(false);
  }, 1000);
}

function spawnStars() {
  const names = ["مريم", "غادة", "عبد الرحيم", "نسرين", "مريم", "غادة", "عبد الرحيم", "نسرين", "مريم"];

  names.forEach((name, i) => {
    const star = document.createElement("span");
    star.className = "game-star";
    star.textContent = "✦";
    star.title = name;
    star.style.left = `${Math.random() * 88}%`;
    star.style.animationDuration = `${3.5 + Math.random() * 4}s`;
    star.style.animationDelay = `${Math.random() * 10}s`;
    star.style.color = i % 2 === 0 ? "#f2d98a" : "#c4a8e8";

    star.addEventListener("click", () => {
      if (!gameRunning || star.dataset.done === "1") return;
      star.dataset.done = "1";
      star.remove();
      gameCaught++;
      gScore.textContent = `✦ ${gameCaught} / 9`;
      if (gameCaught >= 9) endGame(true);
    });

    gameArea.appendChild(star);
  });
}

function endGame(win) {
  if (!gameRunning) return;
  clearInterval(gameInterval);
  gameRunning = false;

  if (win) {
    gameMsg.textContent = "✦ جمعتِ كل نجوم العائلة… لأنهم لا يكتملون إلا ببعضهم ✦";
  } else {
    gameMsg.textContent = "العائلة لا تحتاج فوزًا… يكفي أنهم معكِ دائمًا 💛";
  }
   }
