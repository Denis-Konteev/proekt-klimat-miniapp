import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Send,
  ExternalLink,
  ChevronDown,
  Check,
  Coffee,
  Globe2,
  Lock,
} from "lucide-react";

/* ---------------------------------------------------------
   ПРОЕКТ КЛИМАТ — кликабельный прототип Telegram Mini App
   Design tokens:
   page bg #FFFFFF / card bg #EEF3F8 / border #D8E3EC
   text primary #16324F | text secondary #5C7996 | text body #33506E
   amber #F0A93E | bulb-accent #B8791E | teal #4FC1A6
   Display: Space Grotesk / Body: IBM Plex Sans / Mono: IBM Plex Mono
--------------------------------------------------------- */

const LOGO_DATA_URI = "data:image/jpeg;base64,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";

const AQUATHERM_LOGO = "data:image/jpeg;base64,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";

const T = {
  ru: {
    tab1: "Главная",
    tab2: "ИИ‑помощник",
    tabNorms: "Нормы",
    tab3: "О проекте",
    tab4: "Кабинет",
    emptyBanner: "Тут может быть ваша реклама",
    aiTitle: "ИИ-помощник",
    aiSub: "Напишите вопрос — ИИ найдёт ответ в стандартах",
    soonStamp: "СКОРО",
    watermark: "В РАЗРАБОТКЕ",
    left: "Осталось сегодня",
    of: "из",
    askPlaceholder: "Спросите про стандарт…",
    source: "источник",
    upgrade: "Безлимит в Продвинутом",
    aboutTitle: "О проекте",
    aboutText:
      "PROEKT KLIMAT UZ — канал об инженерии зданий как единой системе. Изучайте новости отрасли, обзоры оборудования и строительные стандарты на практике.",
    services: "Услуги",
    srv1: "Проектирование",
    srv2: "Консультация",
    srv3: "Аудит",
    srv4: "Обучение",
    srv1d:
      "Разработка проектной документации инженерных систем здания — от концепции до рабочих чертежей. Расчёты, подбор оборудования, соответствие стандартам.",
    srv2d:
      "Экспертная помощь на любом этапе — от выбора решения до разбора спорных технических вопросов. Быстрый и практичный ответ без лишней бюрократии.",
    srv3d:
      "Проверка существующих инженерных систем или проектной документации на соответствие нормам, эффективность и ошибки. Итог — заключение с конкретными рекомендациями.",
    srv4d:
      "Практическое обучение BIM-софту для проектирования и строительства инженерных систем. От базовых команд до реальных рабочих кейсов — чтобы не просто чертить, а проектировать здание как единую систему.",
    sendMsg: "Отправить сообщение",
    sent: "Сообщение отправлено автору в Telegram.",
    channel: "Перейти в Telegram‑канал",
    cabTitle: "Личный кабинет",
    fromTelegram: "Данные из Telegram",
    verified: "Верифицировано",
    notVerified: "Не верифицировано",
    editReal: "Изменить ФИО и фото",
    addReal: "Указать ФИО и фото",
    realFirstPh: "Имя",
    realLastPh: "Фамилия",
    uploadPhoto: "Загрузить фото",
    photoChosen: "Фото выбрано ✓",
    privacyNote: "Все данные хранятся в Telegram и не передаются третьим лицам.",
    saveVerify: "Сохранить и верифицировать",
    saveErrorGeneric: "Не удалось сохранить — проверьте связь и попробуйте ещё раз.",
    saveErrorNotVerified: "Сохранено, но не все условия для верификации выполнены — проверьте, что заполнены все поля и выбрано фото.",
    saveErrorPhoto: "Не получилось обработать фото — попробуйте выбрать другое.",
    positionLabel: "Профессия / должность",
    positionPh: "например, Инженер ОВК",
    companyLabel: "Компания",
    companyPh: "необязательно",
    sharePhone: "Поделиться номером",
    phonePending: "Запрос отправлен — ожидаем подтверждения в Telegram",
    pointsTitle: "Баллы",
    pointsDesc: "Копите баллы за активность в приложении и обменивайте на Продвинутый статус.",
    checkIn: "Отметиться",
    checkedIn: "Отмечено сегодня",
    checkInNote: "+1 балл в день · обновление в 8:00 по будням",
    weekendNote: "Доступно в будние дни (пн–пт)",
    redeem: "Обменять на Продвинутый",
    redeemLocked: "Чтобы тратить баллы, укажите ФИО и фото — так мы понимаем, кто пользуется сервисом.",
    status: "Статус",
    basic: "Базовый",
    pro: "Продвинутый",
    basicCond: "3 вопроса ИИ в день · базовая лента · без приоритета",
    proBenefit: "Преимущества Продвинутого:",
    proList: [
      "Безлимитные вопросы ИИ‑помощнику",
      "Приоритетный доступ к базе стандартов",
      "Ранний доступ к вебинарам",
    ],
    buyPremium: "Купить Продвинутый",
    inviteDesc: "Пригласите друга — за каждого, кто пройдёт верификацию, вы получите +10 баллов.",
    inviteBtn: "Пригласить друзей",
    inviteShareText: "Присоединяйся к PROEKT KLIMAT UZ — мини-приложение об инженерии зданий, стандартах и ИИ-помощнике",
    inviteStats: "Верифицированных друзей",
    donate: "Поддержать автора",
    langLabel: "Язык",
  },
  en: {
    tab1: "Home",
    tab2: "AI Assistant",
    tabNorms: "Codes",
    tab3: "About",
    tab4: "Account",
    emptyBanner: "Your ad could be here",
    aiTitle: "AI Assistant",
    aiSub: "Ask a question — AI finds the answer in the standards",
    soonStamp: "SOON",
    watermark: "IN DEVELOPMENT",
    left: "Left today",
    of: "of",
    askPlaceholder: "Ask about a standard…",
    source: "source",
    upgrade: "Unlimited with Pro",
    aboutTitle: "About",
    aboutText:
      "PROEKT KLIMAT UZ is a channel about building engineering as a single system. Explore industry news, equipment reviews, and construction standards in practice.",
    services: "Services",
    srv1: "Design",
    srv2: "Consultation",
    srv3: "Audit",
    srv4: "Training",
    srv1d:
      "Development of design documentation for building engineering systems — from concept to working drawings. Calculations, equipment selection, standards compliance.",
    srv2d:
      "Expert help at any stage — from choosing a solution to resolving disputed technical questions. Fast, practical answers without red tape.",
    srv3d:
      "Review of existing engineering systems or design documentation for compliance, efficiency, and errors. Result: a report with concrete recommendations.",
    srv4d:
      "Hands-on training in BIM software for designing and building engineering systems. From basic commands to real working cases — so you don't just draw, but design the building as a single system.",
    sendMsg: "Send message",
    sent: "Message sent to the author on Telegram.",
    channel: "Open Telegram channel",
    cabTitle: "Account",
    fromTelegram: "From Telegram",
    verified: "Verified",
    notVerified: "Not verified",
    editReal: "Edit real name and photo",
    addReal: "Add real name and photo",
    realFirstPh: "First name (real)",
    realLastPh: "Last name (real)",
    uploadPhoto: "Upload photo",
    photoChosen: "Photo selected ✓",
    privacyNote: "All data is stored in Telegram and never shared with third parties.",
    saveVerify: "Save and verify",
    saveErrorGeneric: "Couldn't save — check your connection and try again.",
    saveErrorNotVerified: "Saved, but not all verification conditions are met yet — check that every field is filled in and a photo is selected.",
    saveErrorPhoto: "Couldn't process that photo — try a different one.",
    positionLabel: "Profession / role",
    positionPh: "e.g. HVAC Engineer",
    companyLabel: "Company",
    companyPh: "optional",
    sharePhone: "Share phone number",
    phonePending: "Request sent — waiting for confirmation in Telegram",
    pointsTitle: "Points",
    pointsDesc: "Earn points for activity in the app and redeem them for Pro status.",
    checkIn: "Check in",
    checkedIn: "Checked in today",
    checkInNote: "+1 point per day · resets at 8:00 on weekdays",
    weekendNote: "Available on weekdays (Mon–Fri)",
    redeem: "Redeem for Pro",
    redeemLocked: "To redeem points, add your real name and photo — this helps us know who's using the service.",
    status: "Status",
    basic: "Basic",
    pro: "Pro",
    basicCond: "3 AI questions/day · basic feed · no priority",
    proBenefit: "Pro benefits:",
    proList: [
      "Unlimited AI assistant questions",
      "Priority access to standards library",
      "Early access to webinars",
    ],
    buyPremium: "Upgrade to Pro",
    inviteDesc: "Invite a friend — for each one who completes verification, you get +10 points.",
    inviteBtn: "Invite friends",
    inviteShareText: "Join PROEKT KLIMAT UZ — a mini app about building engineering, standards, and an AI assistant",
    inviteStats: "Verified friends",
    donate: "Support the author",
    langLabel: "Language",
  },
  uz: {
    tab1: "Bosh sahifa",
    tab2: "AI yordamchi",
    tabNorms: "Me'yorlar",
    tab3: "Loyiha haqida",
    tab4: "Kabinet",
    emptyBanner: "Bu yerda sizning reklamangiz bo'lishi mumkin",
    aiTitle: "AI yordamchi",
    aiSub: "Savol yozing — AI standartlardan javob topadi",
    soonStamp: "TEZDA",
    watermark: "ISHLAB CHIQILMOQDA",
    left: "Bugun qoldi",
    of: "dan",
    askPlaceholder: "Standart haqida so'rang…",
    source: "manba",
    upgrade: "Pro tarifda cheksiz",
    aboutTitle: "Loyiha haqida",
    aboutText:
      "PROEKT KLIMAT UZ — binolar muhandisligi haqida yagona tizim sifatida so'zlaydigan kanal. Soha yangiliklari, uskunalar sharhi va amaliyotdagi qurilish standartlari bilan tanishing.",
    services: "Xizmatlar",
    srv1: "Loyihalash",
    srv2: "Konsultatsiya",
    srv3: "Audit",
    srv4: "O'qitish",
    srv1d:
      "Bino muhandislik tizimlari uchun loyiha hujjatlarini ishlab chiqish — kontseptsiyadan ishchi chizmalargacha. Hisob-kitoblar, uskunalarni tanlash, standartlarga muvofiqlik.",
    srv2d:
      "Har qanday bosqichda ekspert yordami — yechim tanlashdan bahsli texnik masalalarni hal qilishgacha. Ortiqcha byurokratiyasiz tez va amaliy javob.",
    srv3d:
      "Mavjud muhandislik tizimlari yoki loyiha hujjatlarini me'yorlarga muvofiqligi, samaradorligi va xatolar bo'yicha tekshirish. Natija — aniq tavsiyalar bilan xulosa.",
    srv4d:
      "Muhandislik tizimlarini loyihalash va qurish uchun BIM dasturlari bo'yicha amaliy o'qitish. Oddiy buyruqlardan real ish keyslarigacha — shunchaki chizish emas, balki binoni yagona tizim sifatida loyihalash uchun.",
    sendMsg: "Xabar yuborish",
    sent: "Xabar muallifga Telegramda yuborildi.",
    channel: "Telegram kanalga o'tish",
    cabTitle: "Shaxsiy kabinet",
    fromTelegram: "Telegram'dan olingan",
    verified: "Tasdiqlangan",
    notVerified: "Tasdiqlanmagan",
    editReal: "Haqiqiy F.I.Sh va rasmni o'zgartirish",
    addReal: "Haqiqiy F.I.Sh va rasm qo'shish",
    realFirstPh: "Ism (haqiqiy)",
    realLastPh: "Familiya (haqiqiy)",
    uploadPhoto: "Rasm yuklash",
    photoChosen: "Rasm tanlandi ✓",
    privacyNote: "Barcha ma'lumotlar Telegramda saqlanadi va uchinchi shaxslarga berilmaydi.",
    saveVerify: "Saqlash va tasdiqlash",
    saveErrorGeneric: "Saqlab bo'lmadi — aloqani tekshirib, qayta urinib ko'ring.",
    saveErrorNotVerified: "Saqlandi, lekin tasdiqlash uchun barcha shartlar bajarilmagan — barcha maydonlar to'ldirilgani va rasm tanlanganini tekshiring.",
    saveErrorPhoto: "Rasmni qayta ishlab bo'lmadi — boshqasini tanlang.",
    positionLabel: "Kasb / lavozim",
    positionPh: "masalan, OVK muhandisi",
    companyLabel: "Kompaniya",
    companyPh: "ixtiyoriy",
    sharePhone: "Raqamni ulashish",
    phonePending: "So'rov yuborildi — Telegramda tasdiqlashni kuting",
    pointsTitle: "Ballar",
    pointsDesc: "Ilovadagi faollik uchun ball to'plang va ularni Pro statusga almashtiring.",
    checkIn: "Belgilash",
    checkedIn: "Bugun belgilandi",
    checkInNote: "Kuniga +1 ball · ish kunlarida soat 8:00da yangilanadi",
    weekendNote: "Ish kunlarida mavjud (Dush–Juma)",
    redeem: "Pro statusga almashtirish",
    redeemLocked: "Ballarni sarflash uchun haqiqiy F.I.Sh va rasmingizni qo'shing — shu orqali xizmatdan kim foydalanayotganini bilamiz.",
    status: "Status",
    basic: "Bazaviy",
    pro: "Pro",
    basicCond: "Kuniga 3 ta AI savol · oddiy lenta · ustuvorliksiz",
    proBenefit: "Pro afzalliklari:",
    proList: [
      "AI yordamchiga cheksiz savollar",
      "Standartlar bazasiga ustuvor kirish",
      "Vebinarlarga erta kirish",
    ],
    buyPremium: "Pro sotib olish",
    inviteDesc: "Do'stingizni taklif qiling — tasdiqlashdan o'tgan har bir do'st uchun +10 ball olasiz.",
    inviteBtn: "Do'stlarni taklif qilish",
    inviteShareText: "PROEKT KLIMAT UZ'ga qo'shiling — bino muhandisligi, standartlar va AI yordamchi haqida mini ilova",
    inviteStats: "Tasdiqlangan do'stlar",
    donate: "Muallifni qo'llab-quvvatlash",
    langLabel: "Til",
  },
};

/* Custom icon for tab 1: incomplete ring + dot-and-stroke, per hand sketch */
function HomeGlyph({ active }) {
  const color = active ? "#0B4C82" : "#5C7996";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke={color}
        strokeWidth="1.8"
      />
      <path
        d="M8.3 12.3l2.4 2.4 5-5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function BulbGlyph({ active }) {
  const color = active ? "#B8791E" : "#5C7996";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.8 1 .8 1.7v.3h5.6v-.3c0-.7.3-1.3.8-1.7A6 6 0 0 0 12 3Z"
        stroke={color}
        strokeWidth="1.7"
        fill={active ? "#F0A93E22" : "none"}
      />
      <line x1="9.5" y1="18.3" x2="14.5" y2="18.3" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <line x1="10" y1="20.4" x2="14" y2="20.4" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

// n8n webhooks — receive app events/profile data and write them to Supabase.
// Every one of these must be paired, on the n8n side, with an initData
// signature check — see the "Валидация initData" step. The frontend's job
// is only to always attach initData; it must never be trusted on its own.
const EVENTS_WEBHOOK_URL = "https://nifty-beluga.pikapod.net/webhook/log-event";
const PROFILE_GET_URL = "https://nifty-beluga.pikapod.net/webhook/get-profile";
const PROFILE_SAVE_URL = "https://nifty-beluga.pikapod.net/webhook/save-profile";
const CHECKIN_URL = "https://nifty-beluga.pikapod.net/webhook/checkin";
// Public channel feed — unlike the others above, this is not user-specific,
// so it intentionally carries no initData signature; it's the same read for
// every visitor. Expected response: an array of { image?, ru:{title,body},
// en:{title,body}, uz:{title,body} } objects, newest first.
const POSTS_GET_URL = "https://nifty-beluga.pikapod.net/webhook/get-posts";

export default function App() {
  const [tab, setTab] = useState(0);
  const [lang, setLang] = useState("ru");
  const [langOpen, setLangOpen] = useState(false);
  const [status, setStatus] = useState("basic"); // basic | pro — pro switches on once real payment is wired up
  const [aiLeft, setAiLeft] = useState(3);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const [msgClicked, setMsgClicked] = useState(false);
  const [openService, setOpenService] = useState(null);
  const [profile, setProfile] = useState({
    firstName: "Гость",
    lastName: "",
    username: "guest",
    position: "",
    company: "",
    phone: null,
    verified: false,
    realFirstName: "",
    realLastName: "",
    photoDataUrl: null,
    points: 0,
    referralsVerified: 0,
  });
  const [editingProfile, setEditingProfile] = useState(false);
  const [phoneRequestSent, setPhoneRequestSent] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [checkedInToday, setCheckedInToday] = useState(false);
  const [posts, setPosts] = useState(null); // null = loading, [] = loaded but empty, [...] = has posts
  const fileInputRef = useRef(null);
  const dayOfWeek = new Date().getDay(); // 0 = Sunday, 6 = Saturday
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const scrollRef = useRef(null);

  const t = T[lang];

  // No real Telegram user detected yet — null on purpose. A previous version
  // defaulted this to a real telegram_id (Denis's own account) as a "demo"
  // stand-in for testing outside Telegram. That was a privacy bug: if the
  // Telegram client was ever slow to hand over initDataUnsafe.user, the app
  // would silently keep querying and displaying that real person's verified
  // profile to whoever else had it open. Null forces an explicit "not ready"
  // state instead of ever fetching or showing a stranger's real data.
  const [telegramId, setTelegramId] = useState(null);
  // Raw signed initData string — this, not telegramId, is what proves to the
  // backend who's actually asking. telegramId above is only used for the
  // debug "ID: {telegramId}" label in the UI, never sent as the source of
  // truth for a write.
  const [initData, setInitData] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return; // opened in a plain browser — keep demo id, no initData
    tg.ready();
    tg.expand();
    if (tg.initData) setInitData(tg.initData);
    const tgUser = tg.initDataUnsafe?.user;
    if (tgUser?.id) {
      setTelegramId(tgUser.id);
      setProfile((p) => ({
        ...p,
        firstName: tgUser.first_name || p.firstName,
        username: tgUser.username || p.username,
      }));
    }
  }, []);

  // Public channel feed — no auth needed, so this runs independently of
  // telegramId/initData being ready. Fails silently into an empty feed;
  // the Home tab just renders nothing until posts exist.
  useEffect(() => {
    fetch(POSTS_GET_URL)
      .then((r) => { if (!r.ok) throw new Error("bad response"); return r.json(); })
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]));
  }, []);

  // Sends an event to the n8n webhook, which writes it into Supabase.
  // Fails silently — a missed stat write should never break the UI.
  // Every payload carries initData; the backend re-derives telegram_id from
  // it instead of trusting the telegram_id field below (kept only so the
  // request is readable in n8n's execution log).
  function logEvent(eventType, meta) {
    if (!telegramId) return; // no real user yet — nothing safe to log against
    fetch(EVENTS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ telegram_id: telegramId, init_data: initData, event_type: eventType, meta }),
    }).catch(() => {});
  }

  useEffect(() => {
    logEvent("visit");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pull in whatever was already saved for this person (phone, verification,
  // real name/position/company) so they don't have to re-enter it every visit.
  function fetchProfile() {
    // Never fetch with a missing id — there is nothing safe to default to
    // here (see the telegramId state comment above). Until Telegram hands
    // over a real user id, the app simply shows nothing rather than risk
    // querying or displaying the wrong person's data.
    if (!telegramId) return;
    // initData goes in a header since this is a GET — the n8n webhook node
    // reads it from headers, validates it, and only then looks up the row
    // for the telegram_id it derived from the signature (not from the query
    // string, which a client could edit freely).
    fetch(`${PROFILE_GET_URL}?telegram_id=${telegramId}`, {
      headers: initData ? { "X-Telegram-Init-Data": initData } : {},
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        // n8n's Supabase "Get a row" node returns an array with 0 or 1 item.
        const row = Array.isArray(data) ? data[0] : data;
        if (!row) return;
        setProfile((p) => ({
          ...p,
          phone: row.phone || p.phone,
          verified: !!row.is_verified,
          realFirstName: row.real_first_name || p.realFirstName,
          realLastName: row.real_last_name || p.realLastName,
          position: row.position || p.position,
          company: row.company || p.company,
          points: typeof row.points === "number" ? row.points : p.points,
          referralsVerified:
            typeof row.referrals_verified === "number" ? row.referrals_verified : p.referralsVerified,
          // Photo is stored as a base64 data URI directly in the
          // photo_path column (no separate Storage bucket), so this is
          // that data URI itself — not a signed link to anything.
          photoUrl: row.photo_path || row.photo_url || null,
        }));
        // The server is the source of truth for "already checked in today",
        // computed from today's events — not from client-side local state
        // that resets whenever the app is reopened.
        if (typeof row.checked_in_today === "boolean") {
          setCheckedInToday(row.checked_in_today);
        }
      })
      .catch(() => {}); // no saved profile yet, or offline — keep local defaults
  }

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [telegramId, initData]);

  // Saves the real name / position / company / photo to Supabase so it
  // persists across sessions. The server — not this function's caller —
  // decides is_verified: it only flips to true once it has all four fields
  // on its side, so a tampered client can't just claim verified: true.
  function saveProfileToBackend(updated) {
    if (!telegramId) return Promise.resolve(); // no real user yet — refuse to save
    setSaveError(null);
    return fetch(PROFILE_SAVE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        telegram_id: telegramId,
        init_data: initData,
        real_first_name: updated.realFirstName,
        real_last_name: updated.realLastName,
        position: updated.position,
        company: updated.company,
        // Sent only when the user picked a new photo this session; the
        // backend uploads it to private Storage and swaps in a photo_url.
        photo_base64: updated.photoDataUrl || undefined,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          setSaveError(t.saveErrorGeneric);
          return null;
        }
        return res.json();
      })
      .then((data) => {
        // Reflect the server's verdict (is_verified, points if a referral
        // bonus just fired) instead of assuming our own optimistic update.
        // n8n's Supabase "Update a row" node returns an array with 0 or 1
        // item, same as "Get a row" — unwrap it the same way fetchProfile
        // does, or data.is_verified is always undefined on the raw array.
        const row = Array.isArray(data) ? data[0] : data;
        if (row) {
          if (!row.is_verified) setSaveError(t.saveErrorNotVerified);
          setProfile((p) => ({
            ...p,
            verified: !!row.is_verified,
            photoUrl: row.photo_path || row.photo_url || p.photoUrl,
            points: typeof row.points === "number" ? row.points : p.points,
          }));
        }
      })
      .catch(() => setSaveError(t.saveErrorGeneric));
  }

  // Checkin now round-trips to the server: it decides whether today's
  // checkin is still allowed (weekday, not already done, valid initData)
  // and returns the authoritative new point total. The client never adds
  // points to its own state.
  // Resizes and re-compresses a picked photo down to a small JPEG before it
  // ever gets held in state or sent anywhere. Phone camera photos routinely
  // land at several megabytes — as base64 that overshoots the backend's 2MB
  // guard easily, and the failure used to be silent. Capping the longest
  // side at 800px and re-encoding at moderate JPEG quality reliably lands
  // well under the limit while still looking fine as a small avatar.
  function compressImageFile(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Could not read file"));
      reader.onload = () => {
        img.onerror = () => reject(new Error("Could not decode image"));
        img.onload = () => {
          const maxSide = 800;
          const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
          const canvas = document.createElement("canvas");
          canvas.width = Math.round(img.width * scale);
          canvas.height = Math.round(img.height * scale);
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/jpeg", 0.7));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function checkinToBackend() {
    if (checkedInToday || !telegramId) return;
    fetch(CHECKIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ telegram_id: telegramId, init_data: initData }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        // Same shape as save-profile: n8n's Supabase "Update a row" node
        // returns an array with 0 or 1 item, not a flat object.
        const row = Array.isArray(data) ? data[0] : data;
        setCheckedInToday(true);
        if (row && typeof row.points === "number") {
          setProfile((p) => ({ ...p, points: row.points }));
        }
      })
      .catch(() => {
        // Server refused (already checked in today, weekend, or invalid
        // initData) — re-sync from get-profile instead of guessing.
        fetchProfile();
      });
  }

  useEffect(() => {
    setChat([]);
  }, [lang]);

  const NAV_ACTIVE = "#0B4C82";
  const NAV_INACTIVE = "#5C7996";

  function SoonStamp() {
    return (
      <div
        style={{
          position: "absolute",
          top: -9,
          left: "50%",
          transform: "translateX(-50%) rotate(-8deg)",
          border: "1px solid #C4231F",
          borderRadius: 2,
          padding: "0.5px 3px",
          background: "#FFFFFF",
          lineHeight: 1,
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 5.5,
            fontWeight: 700,
            color: "#C4231F",
            letterSpacing: 0.3,
            whiteSpace: "nowrap",
          }}
        >
          {t.soonStamp}
        </span>
      </div>
    );
  }

  function IconBox({ children }) {
    return (
      <div style={{ width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", flexShrink: 0 }}>
        {children}
      </div>
    );
  }

  const LOCKED_TABS = ["ai"];

  const tabs = [
    { key: "home", label: t.tab1, icon: (a) => <IconBox><HomeGlyph active={a} /></IconBox> },
    {
      key: "ai",
      label: t.tab2,
      icon: (a) => (
        <IconBox>
          <BulbGlyph active={a} />
          <SoonStamp />
        </IconBox>
      ),
    },
    {
      key: "about",
      label: t.tab3,
      icon: (a) => (
        <IconBox>
          <img
            src={LOGO_DATA_URI}
            alt="logo"
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              objectFit: "cover",
              border: a ? `1.5px solid ${NAV_ACTIVE}` : "1.5px solid #C7D3DE",
              opacity: a ? 1 : 0.85,
            }}
          />
        </IconBox>
      ),
    },
  ];

  function askAI() {
    if (!input.trim()) return;
    if (status === "basic" && (isWeekend || aiLeft <= 0)) return;
    const q = input.trim();
    setChat((c) => [...c, { role: "user", text: q }]);
    setInput("");
    setTimeout(() => {
      setChat((c) => [
        ...c,
        {
          role: "ai",
          text:
            lang === "ru"
              ? "Данный раздел в разработке. Релиз состоится 1 октября."
              : lang === "en"
              ? "This section is under development. Launch on October 1."
              : "Ushbu bo'lim ishlab chiqilmoqda. Ishga tushirish 1-oktyabrda.",
          src: "Proekt Klimat Uz",
        },
      ]);
    }, 550);
  }

  return (
    <div
      style={{
        height: "100dvh",
        width: "100%",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'IBM Plex Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        html, body, #root { height: 100%; margin: 0; }
        ::-webkit-scrollbar { width: 0px; height: 0px; }
        .tapscale:active { transform: scale(0.96); }
        .fadein { animation: fadein .25s ease both; }
        @keyframes fadein { from { opacity:0; transform: translateY(4px);} to {opacity:1; transform:none;} }
      `}</style>

      {/* Top spacer so language switcher has room; app has no title bar — Telegram provides its own */}
      <div style={{ paddingTop: 10, flexShrink: 0 }} />

      {/* Side language switcher */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 14,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
          {langOpen && (
            <div
              className="fadein"
              style={{
                background: "#FFFFFF",
                border: "1px solid #D8E3EC",
                borderRight: "none",
                borderRadius: "10px 0 0 10px",
                marginBottom: 6,
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(22,50,79,0.12)",
              }}
            >
              {["ru", "en", "uz"].map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setLangOpen(false);
                  }}
                  className="tapscale"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "8px 14px",
                    background: lang === l ? "#1060A0" : "transparent",
                    border: "none",
                    color: lang === l ? "#FFFFFF" : "#16324F",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 12,
                    fontWeight: 500,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          )}
          <button
            onClick={() => setLangOpen((o) => !o)}
            className="tapscale"
            style={{
              background: "#FFFFFF",
              border: "1px solid #D8E3EC",
              borderRight: "none",
              borderRadius: "10px 0 0 10px",
              padding: "10px 8px",
              color: "#3D6FA0",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              boxShadow: "0 2px 8px rgba(22,50,79,0.08)",
            }}
            title={t.langLabel}
          >
            <Globe2 size={16} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }}>
              {lang.toUpperCase()}
            </span>
          </button>
        </div>

        {/* Content */}
        <div
          ref={scrollRef}
          style={{
            position: "relative",
            zIndex: 2,
            flex: 1,
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            padding: "4px 16px 16px",
          }}
        >
          {tab === 0 && (
            <div className="fadein">
              {posts === null && (
                <div style={{ textAlign: "center", padding: "50px 10px", color: "#5C7996", fontSize: 12.5 }}>
                  {lang === "ru" ? "Загрузка…" : lang === "en" ? "Loading…" : "Yuklanmoqda…"}
                </div>
              )}
              {posts && posts.map((post, i) => {
                const p = post[lang] || post.ru || {};
                return (
                  <div
                    key={i}
                    style={{
                      background: "#EEF3F8",
                      border: "1px solid #D8E3EC",
                      borderRadius: 10,
                      padding: 14,
                      marginBottom: 10,
                    }}
                  >
                    {post.image && (
                      <img
                        src={post.image}
                        alt=""
                        style={{ width: "100%", borderRadius: 8, marginBottom: 10, display: "block" }}
                      />
                    )}
                    {p.title && (
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13.5, color: "#16324F", marginBottom: 5 }}>
                        {p.title}
                      </div>
                    )}
                    {p.body && (
                      <div style={{ fontSize: 12.5, color: "#33506E", lineHeight: 1.55 }}>{p.body}</div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {tab === 1 && (
            <div className="fadein" style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "38%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(-24deg)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 30,
                  letterSpacing: 2,
                  color: "rgba(22,50,79,0.08)",
                  border: "3px solid rgba(22,50,79,0.08)",
                  padding: "6px 18px",
                  borderRadius: 8,
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  zIndex: 5,
                }}
              >
                {t.watermark}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: "#FFF3D6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BulbGlyph active />
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, color: "#16324F" }}>
                    {t.aiTitle}
                  </div>
                  <div style={{ fontSize: 10.5, color: "#5C7996" }}>{t.aiSub}</div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  padding: "8px 10px",
                  borderRadius: 10,
                  background: status === "basic" ? "#EAF1F8" : "#E3F5EE",
                  border: `1px solid ${status === "basic" ? "#D2E2F0" : "#BFE3D3"}`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 11.5,
                }}
              >
                <span style={{ color: "#33506E" }}>
                  {status === "basic"
                    ? isWeekend
                      ? t.weekendNote
                      : `${t.left}: ${aiLeft} ${t.of} 3`
                    : `${t.pro} · 24/7`}
                </span>
                {status === "basic" && !isWeekend && (
                  <span style={{ color: "#B8791E", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }}>
                    {t.upgrade}
                  </span>
                )}
              </div>

              <div
                style={{
                  height: 380,
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  paddingRight: 2,
                }}
              >
                {chat.length === 0 && (
                  <div style={{ fontSize: 12, color: "#8299B3", padding: "20px 4px" }}>
                    {lang === "ru"
                      ? "Задайте вопрос по градостроительным нормам и стандартам КМК/ШНК."
                      : lang === "en"
                      ? "Ask about urban planning norms and KMK/ShNK standards."
                      : "Shaharsozlik me'yorlari va QMQ/ShNQ standartlari bo'yicha savol bering."}
                  </div>
                )}
                {chat.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                      maxWidth: "85%",
                      background: m.role === "user" ? "#DCEAF7" : "#EEF3F8",
                      border: m.role === "ai" ? "1px solid #D8E3EC" : "none",
                      borderRadius: 12,
                      padding: "8px 11px",
                      fontSize: 12.5,
                      color: "#16324F",
                    }}
                  >
                    {m.text}
                    {m.src && (
                      <div
                        style={{
                          marginTop: 6,
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: 9.5,
                          color: "#B8791E",
                        }}
                      >
                        {t.source}: {m.src}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && askAI()}
                  placeholder={t.askPlaceholder}
                  disabled={status === "basic" && (isWeekend || aiLeft <= 0)}
                  style={{
                    flex: 1,
                    background: "#F4F7FA",
                    border: "1px solid #D8E3EC",
                    borderRadius: 10,
                    padding: "9px 11px",
                    color: "#16324F",
                    fontSize: 12.5,
                    outline: "none",
                  }}
                />
                <button
                  onClick={askAI}
                  className="tapscale"
                  disabled={status === "basic" && (isWeekend || aiLeft <= 0)}
                  style={{
                    background: "#FFD84D",
                    border: "none",
                    borderRadius: 10,
                    width: 38,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    opacity: status === "basic" && (isWeekend || aiLeft <= 0) ? 0.4 : 1,
                  }}
                >
                  <Send size={15} color="#1B2E48" />
                </button>
              </div>
            </div>
          )}

          {tab === 2 && (
            <div className="fadein">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "1px solid #D8E3EC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                  }}
                >
                  <img
                    src={LOGO_DATA_URI}
                    alt="Proekt Klimat logo"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#16324F" }}>
                  {t.aboutTitle}
                </div>
              </div>
              <p style={{ fontSize: 12.5, color: "#33506E", lineHeight: 1.6, marginBottom: 16 }}>
                {t.aboutText}
              </p>

              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  color: "#5C7996",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {t.services}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 18 }}>
                {[
                  { name: t.srv1, desc: t.srv1d },
                  { name: t.srv2, desc: t.srv2d },
                  { name: t.srv3, desc: t.srv3d },
                  { name: t.srv4, desc: t.srv4d },
                ].map((s, i) => {
                  const isOpen = openService === i;
                  return (
                    <div
                      key={i}
                      style={{
                        background: "#EEF3F8",
                        border: "1px solid #D8E3EC",
                        borderRadius: 10,
                        overflow: "hidden",
                      }}
                    >
                      <button
                        onClick={() => setOpenService(isOpen ? null : i)}
                        className="tapscale"
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          background: "none",
                          border: "none",
                          padding: "10px 12px",
                          fontSize: 12.5,
                          color: "#16324F",
                          cursor: "pointer",
                          textAlign: "left",
                          fontFamily: "inherit",
                        }}
                      >
                        {s.name}
                        <ChevronDown
                          size={15}
                          color={isOpen ? "#1060A0" : "#7A93AC"}
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform .2s ease",
                            flexShrink: 0,
                          }}
                        />
                      </button>
                      {isOpen && (
                        <div
                          className="fadein"
                          style={{
                            padding: "0 12px 12px",
                            fontSize: 11.5,
                            lineHeight: 1.55,
                            color: "#33506E",
                            borderTop: "1px solid #D8E3EC",
                            paddingTop: 9,
                          }}
                        >
                          {s.desc}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  setMsgClicked(true);
                  logEvent("contact_click");
                  window.open("https://t.me/proektklimatuz?direct", "_blank");
                }}
                className="tapscale"
                style={{
                  width: "100%",
                  background: "#FFD84D",
                  border: "none",
                  borderRadius: 12,
                  padding: "13px 0",
                  color: "#1B2E48",
                  fontWeight: 700,
                  fontSize: 13.5,
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  marginBottom: 8,
                  boxShadow: "0 6px 18px -6px rgba(255,216,77,0.65)",
                }}
              >
                <Send size={15} /> {t.sendMsg}
              </button>
              {msgClicked && (
                <div
                  className="fadein"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#E3F5EE",
                    border: "1px solid #BFE3D3",
                    borderRadius: 10,
                    padding: "9px 12px",
                    fontSize: 11.5,
                    color: "#218267",
                    marginBottom: 14,
                  }}
                >
                  <Check size={14} /> {t.sent}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Bottom nav — always pinned, safe-area aware for notch phones */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            flexShrink: 0,
            display: "flex",
            borderTop: "1px solid #E2E8EE",
            background: "#FFFFFF",
            padding: "8px 4px calc(10px + env(safe-area-inset-bottom))",
          }}
        >
          {tabs.map((tb, i) => {
            const locked = LOCKED_TABS.includes(tb.key);
            return (
              <button
                key={tb.key}
                onClick={() => { if (!locked) setTab(i); }}
                className="tapscale"
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  cursor: locked ? "default" : "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                  padding: "4px 0",
                }}
              >
                {tb.icon(tab === i)}
                <span
                  style={{
                    fontSize: 9.5,
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    lineHeight: 1.2,
                    color: tab === i ? NAV_ACTIVE : NAV_INACTIVE,
                    fontWeight: tab === i ? 600 : 400,
                  }}
                >
                  {tb.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
  );
}
