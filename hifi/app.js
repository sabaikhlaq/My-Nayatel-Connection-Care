/* Connection Care — hi-fi prototype flow.
   Everything shown is sample data; nothing talks to a backend. */

(function () {
  "use strict";

  /* ---------------- icons (24px grid, 1.75 stroke) ---------------- */

  const P = {
    back: '<path d="M15 5l-7 7 7 7"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 1.5h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
    menu: '<path d="M4 6.5h16M8 12h12M4 17.5h16"/>',
    dashboard: '<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/>',
    billing: '<path d="M6 3.5h8.5L19 8v12.5H6z"/><path d="M14 3.5V8h5"/><rect x="9" y="11.5" width="7" height="5" rx="1"/><path d="M9 14h7"/>',
    services: '<path d="M3.5 16.5l4-1.5h4.5a1.5 1.5 0 0 1 0 3H9"/><path d="M12 18l6.2-4.4a1.6 1.6 0 0 1 2 2.4L14 20.5H3.5"/><path d="M14 4v6M11 7h6"/>',
    support: '<path d="M5 13v-1.5a7 7 0 0 1 14 0V13"/><rect x="3.5" y="13" width="3.5" height="5.5" rx="1.5"/><rect x="17" y="13" width="3.5" height="5.5" rx="1.5"/><path d="M19 18.5c0 1.5-1.5 2.5-4 2.5h-2"/>',
    more: '<circle cx="5.5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="18.5" cy="12" r="1.2"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    checkCircle: '<circle cx="12" cy="12" r="8.5"/><path d="M8.2 12.3l2.6 2.6 5-5.2"/>',
    alert: '<path d="M12 4l9 15.5H3z"/><path d="M12 10v4.2"/><circle cx="12" cy="16.9" r="0.4"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    refresh: '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4h-4"/>',
    spinner: '<path d="M12 3.5a8.5 8.5 0 1 1-8.5 8.5"/>',
    tower: '<path d="M12 10.5v10M8.5 20.5L12 10.5l3.5 10"/><circle cx="12" cy="9" r="1.5"/><path d="M8 5.5a5.5 5.5 0 0 0 0 7M16 5.5a5.5 5.5 0 0 1 0 7"/>',
    fibre: '<path d="M3.5 17c3 0 4-2.5 6-5s3-5 6-5h5"/><path d="M3.5 12h3M17.5 17h3"/><circle cx="20" cy="7" r="0.6"/>',
    router: '<rect x="3.5" y="12.5" width="17" height="6" rx="2"/><path d="M7 15.5h.01M10 15.5h.01"/><path d="M8 12.5L6.5 6M16 12.5l1.5-6.5"/>',
    wifi: '<path d="M4 9.5a12 12 0 0 1 16 0"/><path d="M7 13a7.5 7.5 0 0 1 10 0"/><path d="M10 16.4a3 3 0 0 1 4 0"/><circle cx="12" cy="19" r="0.5"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.4 3.5 5.3 3.5 8.5s-1 6.1-3.5 8.5c-2.5-2.4-3.5-5.3-3.5-8.5s1-6.1 3.5-8.5z"/>',
    gauge: '<path d="M4.5 17a8 8 0 1 1 15 0"/><path d="M12 13l3.5-4"/><circle cx="12" cy="13.5" r="1"/>',
    list: '<path d="M9 6.5h11M9 12h11M9 17.5h11"/><circle cx="4.5" cy="6.5" r="0.8"/><circle cx="4.5" cy="12" r="0.8"/><circle cx="4.5" cy="17.5" r="0.8"/>',
    arrowRight: '<path d="M4 12h15M13.5 6.5L19 12l-5.5 5.5"/>',
    arrowUp: '<path d="M12 20V5M6.5 10.5L12 5l5.5 5.5"/>',
    phone: '<path d="M6.5 3.5h3l1.5 4.5-2 1.5a10 10 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2z"/>',
    hotspot: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10.5 18.5h3"/><path d="M9.5 9.5a3.5 3.5 0 0 1 5 0M10.9 11.4a1.5 1.5 0 0 1 2.2 0"/>',
    x: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
    star: '<path d="M12 3.8l2.5 5.2 5.7.8-4.1 4 1 5.7L12 16.8l-5.1 2.7 1-5.7-4.1-4 5.7-.8z"/>',
    pencil: '<path d="M4.5 19.5l1-4L16 5a2 2 0 0 1 3 3L8.5 18.5z"/>',
    person: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
    receipt: '<path d="M6 3.5h12v17l-3-2-3 2-3-2-3 2z"/><path d="M9 8.5h6M9 12h6"/>',
    chevron: '<path d="M9.5 6l6 6-6 6"/>',
    calendar: '<rect x="4" y="5.5" width="16" height="15" rx="2"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r="0.4"/>',
    tv: '<rect x="3.5" y="5" width="17" height="11.5" rx="2"/><path d="M8.5 20h7"/>',
    landline: '<path d="M4 9.5a12 12 0 0 1 16 0l-1.5 2.5-3-1V9a8 8 0 0 0-7 0v2l-3 1z"/><rect x="6.5" y="13" width="11" height="7" rx="2"/><circle cx="12" cy="16.5" r="1.3"/>',
    account: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="10" r="2.8"/><path d="M7 18a6 6 0 0 1 10 0"/>',
    network: '<circle cx="7" cy="7" r="2.2"/><circle cx="17" cy="9" r="2.2"/><circle cx="10" cy="17.5" r="2.2"/><path d="M9 8l6 .8M8 9l1.6 6.4M15.5 10.7l-4 5.2"/>',
    headset: '<circle cx="12" cy="10" r="3.5"/><path d="M6 19a6 6 0 0 1 12 0"/><path d="M5.5 10a6.5 6.5 0 0 1 13 0"/>',
    history: '<rect x="5" y="6" width="3" height="12" rx="1"/><rect x="10.5" y="6" width="8.5" height="12" rx="4"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    play: '<rect x="3.5" y="5" width="17" height="11.5" rx="2"/><path d="M10.5 8.5l4 2.3-4 2.3z"/><path d="M6 19.5h12"/>',
  };
  const FILLED = new Set(["star"]);
  function icon(name, cls) {
    const fill = FILLED.has(name) ? 'fill="currentColor"' : 'fill="none"';
    return `<svg class="${cls || ""}" viewBox="0 0 24 24" ${fill} stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name]}</svg>`;
  }
  const arcs = (cls) =>
    `<svg class="${cls}" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="18" aria-hidden="true"><circle cx="100" cy="100" r="30"/><circle cx="100" cy="100" r="62"/><circle cx="100" cy="100" r="94"/></svg>`;

  /* ---------------- copy: English + Roman Urdu ---------------- */

  const S = {
    back: ["Back", "Wapas"],
    langEN: ["EN", "EN"],
    langUR: ["UR", "UR"],

    // support entry
    healthTitle: ["Connection health", "Connection ki halat"],
    healthIdle: ["Internet not working? We'll check your area, fibre line and router in about 30 seconds.", "Internet nahi chal raha? Hum taqreeban 30 second mein aap ka area, fibre line aur router check karein ge."],
    healthLastRouter: ["Your router wasn't responding.", "Aap ka router jawab nahi de raha tha."],
    healthLastOutage: ["Outage in your area. We're fixing it.", "Aap ke area mein outage hai. Hum theek kar rahe hain."],
    healthLastOk: ["Everything is working.", "Sab kuch theek chal raha hai."],
    checkNow: ["Check my connection", "Mera connection check karein"],
    seeResult: ["See result", "Result dekhein"],
    checkedAt: ["Checked {t}", "{t} par check kiya"],
    notChecked: ["Not checked yet", "Abhi check nahi hua"],

    // check
    checkTitle: ["Connection check", "Connection check"],
    checkingH: ["Checking your connection…", "Aap ka connection check ho raha hai…"],
    checkingP: ["From Nayatel's network to your router, one step at a time. Keep this screen open.", "Nayatel ke network se aap ke router tak, ek ek qadam. Yeh screen khuli rakhein."],
    routerH: ["Your router isn't responding", "Aap ka router jawab nahi de raha"],
    routerP: ["Nayatel's network and your fibre line are working. The problem is most likely your router.", "Nayatel ka network aur aap ki fibre line theek chal rahi hain. Masla ghaliban aap ke router mein hai."],
    outageH: ["Outage in your area", "Aap ke area mein outage hai"],
    outageP: ["A fibre cable was damaged near {area}. Our team is fixing it. Nothing is wrong at your home.", "{area} ke qareeb fibre cable kharab ho gayi hai. Hamari team isay theek kar rahi hai. Aap ke ghar mein koi kharabi nahi."],
    expectedBack: ["Expected back by", "Wapas aane ka andaza"],
    nextUpdate: ["Next update by", "Agli update"],
    healthRows: ["From Nayatel to your home", "Nayatel se aap ke ghar tak"],
    recheck: ["Check again", "Dobara check karein"],
    area: ["Area network", "Area ka network"],
    areaSub: ["{area}", "{area}"],
    line: ["Fibre line to your home", "Ghar tak fibre line"],
    lineSub: ["Street to your router", "Gali se router tak"],
    router: ["Your router", "Aap ka router"],
    routerSub: ["Inside your home", "Ghar ke andar"],
    stWorking: ["Working", "Chal raha hai"],
    stNot: ["Not responding", "Jawab nahi de raha"],
    stOutage: ["Outage", "Outage"],
    stAfter: ["Checked after restore", "Bahali ke baad check hoga"],
    stChecking: ["Checking", "Check ho raha hai"],
    stWaiting: ["Waiting", "Intezar"],
    fixSteps: ["Fix it step by step · about 5 min", "Qadam ba qadam theek karein · 5 min"],
    reportInstead: ["Report a problem instead", "Is ke bajaye shikayat darj karein"],
    notifyMe: ["Notify me when it's back", "Wapas aane par mujhe batayein"],
    notifyOn: ["We'll notify you when it's back", "Wapas aane par hum aap ko bata dein ge"],
    noNeed: ["No need to report it. We already know.", "Shikayat ki zaroorat nahi. Humein pehle se maloom hai."],
    hotspotH: ["Need to be online now?", "Abhi online hona zaroori hai?"],
    hotspotP: ["Turn on your phone's hotspot for classes or exams.", "Class ya exam ke liye apne phone ka hotspot on kar lein."],

    // guided fix
    fixTitle: ["Fix your connection", "Connection theek karein"],
    stepOf: ["Step {n} of 3", "Qadam {n} / 3"],
    minutesLeft: ["about {m} min left", "taqreeban {m} min baqi"],
    stepDoneNote: ["Done. Didn't fix it.", "Kar liya. Masla hal nahi hua."],
    s1Title: ["Restart your router", "Apna router restart karein"],
    s1a: ["Press the {ON/OFF} button on the back of the router to switch it off.", "Router ke peeche {ON/OFF} button daba kar isay band karein."],
    s1b: ["Wait 30 seconds.", "30 second intezar karein."],
    s1c: ["Press it again and give the router 2 minutes to start.", "Dobara dabayein aur router ko start hone ke liye 2 minute dein."],
    s1See: ["{POWER} light on and {PON} light steady.", "{POWER} light on aur {PON} light ruki hui (blink nahi)."],
    s1Cap: ["Back of router: ON/OFF button", "Router ka peechla hissa: ON/OFF button"],
    s2Title: ["Check the fibre cable", "Fibre cable check karein"],
    s2a: ["Find the thin cable going into the port marked {PON} or {Fibre}.", "Woh patli cable dhoondein jo {PON} ya {Fibre} likhe port mein lagi hai."],
    s2b: ["Push it in until it clicks. Make sure it isn't bent sharply.", "Isay andar dabayein jab tak click na ho. Dekhein ke cable zyada mur na rahi ho."],
    s2c: ["Wait 1 minute, then look at the lights.", "1 minute intezar karein, phir lights dekhein."],
    s2See: ["{LOS} light off and {PON} light steady. If LOS is blinking red, tap Still not working.", "{LOS} light band aur {PON} light ruki hui. Agar LOS laal blink kar rahi hai to \"Ab bhi band hai\" dabayein."],
    s2Cap: ["Back of router: fibre port and LOS light circled", "Router ka peechla hissa: fibre port aur LOS light"],
    s3Title: ["Check power and cables", "Bijli aur cables check karein"],
    s3a: ["Make sure the power adapter is firmly in the wall socket and the switch is on.", "Dekhein ke power adapter wall socket mein theek se laga hai aur switch on hai."],
    s3b: ["Push the small round plug into the {POWER} socket on the router.", "Chhota gol plug router ke {POWER} socket mein achhi tarah lagayein."],
    s3c: ["If you use a cable to your computer, push it into a {LAN} port until it clicks.", "Agar computer tak cable lagi hai to usay {LAN} port mein click hone tak dabayein."],
    s3See: ["{POWER} light on. If no lights come on at all, tap Still not working.", "{POWER} light on. Agar koi light na jale to \"Ab bhi band hai\" dabayein."],
    s3Cap: ["Back of router: POWER socket and LAN ports", "Router ka peechla hissa: POWER socket aur LAN ports"],
    whatSee: ["What you should see", "Aap ko kya nazar aana chahiye"],
    didFix: ["Did this fix it?", "Kya is se masla hal hua?"],
    fixed: ["Fixed", "Theek ho gaya"],
    stillNot: ["Still not working", "Ab bhi band hai"],
    skipReport: ["Skip and report a problem", "Chhorein aur shikayat darj karein"],
    fixedH: ["You're back online", "Aap dobara online hain"],
    fixedP: ["Restarting your router fixed it. We checked again and everything is working.", "Router restart karne se masla hal ho gaya. Hum ne dobara check kiya, sab theek chal raha hai."],
    fixedPn: ["Step {n} fixed it. We checked again and everything is working.", "Qadam {n} se masla hal ho gaya. Hum ne dobara check kiya, sab theek chal raha hai."],
    fixedNote: ["Nothing to report. If it drops again, run the check from Support.", "Shikayat ki zaroorat nahi. Agar dobara band ho to Support se check chalayein."],
    done: ["Done", "Theek hai"],

    // complaint
    reportTitle: ["Report a problem", "Shikayat darj karein"],
    reportIntro: ["We've filled this in from your connection check. Pick a visit time and send.", "Hum ne yeh aap ke connection check se bhar diya hai. Visit ka waqt chunein aur bhej dein."],
    problem: ["Problem", "Masla"],
    autoFilled: ["Auto-filled", "Khud bhar gaya"],
    probRouter: ["No internet · Router not responding", "Internet nahi · Router jawab nahi de raha"],
    probFound: ["Found by connection check, {d} {t}. Area and line working.", "Connection check ne {d} {t} ko pakra. Area aur line theek hain."],
    tried: ["Already tried", "Pehle se kar chuke"],
    edit: ["Edit", "Badlein"],
    doneEdit: ["Done", "Mukammal"],
    tRestart: ["Restarted router", "Router restart kiya"],
    tFibre: ["Checked fibre cable (LOS light blinking)", "Fibre cable check ki (LOS light blink kar rahi thi)"],
    tPower: ["Checked power and cables", "Bijli aur cables check kin"],
    triedNone: ["Nothing tried yet. That's fine, the technician will start from the check result.", "Abhi kuch nahi kiya. Koi baat nahi, technician check ke result se shuru karega."],
    remove: ["Remove", "Hatayein"],
    whenVisit: ["When can a technician visit?", "Technician kab aa sakta hai?"],
    adult: ["Someone 18+ needs to be home.", "Ghar par koi 18 saal se bara mojood hona chahiye."],
    charges: ["Visit charges", "Visit charges"],
    chargesLink: ["See policy", "Policy dekhein"],
    contact: ["Contact number", "Rabtay ka number"],
    contactHint: ["The technician will call this number.", "Technician isi number par call karega."],
    send: ["Send request", "Request bhejein"],
    pickSlot: ["Pick a visit time to send", "Bhejne ke liye visit ka waqt chunein"],

    // sent
    sentTitle: ["Request sent", "Request bhej di gayi"],
    sentH: ["Request sent", "Request bhej di gayi"],
    sentP: ["We'll assign a technician and tell you who's coming by {t}.", "Hum technician muqarrar kar ke {t} tak bata dein ge ke kaun aa raha hai."],
    refLabel: ["Ref", "Ref"],
    sumProblem: ["Problem", "Masla"],
    sumVisit: ["Visit", "Visit"],
    sumTried: ["Steps attached", "Shamil qadam"],
    sumTriedN: ["{n} of 3", "{n} / 3"],
    sumContact: ["Contact", "Rabta"],
    track: ["Track request", "Request track karein"],
    backSupport: ["Back to Support", "Support par wapas"],

    // tracker
    yourRequest: ["Your request", "Aap ki request"],
    reqRef: ["Ref {ref} · Router not responding", "Ref {ref} · Router jawab nahi de raha"],
    onWayH: ["Technician on the way", "Technician raste mein hai"],
    arriving: ["Arriving today", "Aaj pohanch raha hai"],
    nextUpd: ["Next update by {t}", "Agli update {t} tak"],
    techRole: ["Field technician · Nayatel", "Field technician · Nayatel"],
    call: ["Call", "Call"],
    callName: ["Call {name}", "{name} ko call karein"],
    progress: ["Progress", "Ab tak kya hua"],
    tlReceived: ["Received", "Mosool hui"],
    tlReceivedW: ["Tue 7:52 PM · Check results and {n} steps tried attached", "Mangal 7:52 PM · Check ka result aur {n} qadam shamil"],
    tlAssigned: ["Technician assigned", "Technician muqarrar"],
    tlAssignedW: ["Tue 8:30 PM · Visit booked Wed 10 AM–12 PM", "Mangal 8:30 PM · Budh 10 AM–12 PM visit book"],
    tlOnWay: ["On the way", "Raste mein"],
    tlOnWayW: ["Wed 10:12 AM · Now", "Budh 10:12 AM · Abhi"],
    tlOnWayNext: ["We'll tell you when {name} leaves", "{name} ke nikalte hi hum bata dein ge"],
    tlResolved: ["Resolved", "Hal ho gaya"],
    tlResolvedW: ["You'll confirm it's working", "Aap tasdeeq karein ge ke chal raha hai"],
    changeTime: ["Change time", "Waqt badlein"],
    viewDetails: ["View details", "Tafseel dekhein"],
    reschedH: ["Visit rescheduled", "Visit ka waqt badal gaya"],
    newTime: ["New time · Wednesday", "Naya waqt · Budh"],
    changedAt: ["changed at 9:40 AM", "9:40 AM par badla"],
    why: ["Why", "Wajah"],
    whyP: ["An earlier repair in your area is taking longer than planned. {name} is still your technician.", "Aap ke area mein pichli repair andaze se zyada waqt le rahi hai. {name} hi aap ke technician hain."],
    tlReschedW: ["Rescheduled Wed 9:40 AM · new time 2–4 PM", "Budh 9:40 AM ko badla · naya waqt 2–4 PM"],
    keepTime: ["Keep new time", "Naya waqt rakhein"],
    pickAnother: ["Pick another", "Koi aur waqt"],
    keptToast: ["New time confirmed: Wed 2:00–4:00 PM", "Naya waqt pakka: Budh 2:00–4:00 PM"],
    reopenH: ["Request reopened", "Request dobara khul gayi"],
    reopenP: ["{name} is coming back. You don't need to fill anything in again.", "{name} wapas aa rahe hain. Aap ko kuch dobara bharne ki zaroorat nahi."],
    reopenTime: ["Return visit", "Wapsi visit"],
    tlReopenedW: ["Wed 11:31 AM · You said it's not working yet", "Budh 11:31 AM · Aap ne bataya abhi nahi chal raha"],
    tlReopened: ["Reopened", "Dobara khuli"],
    tlSameTech: ["Same technician · Today 3:00–4:00 PM", "Wohi technician · Aaj 3:00–4:00 PM"],

    // resolved
    visitDone: ["Visit complete", "Visit mukammal"],
    visitDoneP: ["{name} replaced your faulty router", "{name} ne aap ka kharab router badal diya"],
    visitDoneT: ["Wed 11:20 AM", "Budh 11:20 AM"],
    areaShort: ["Area", "Area"],
    lineShort: ["Line", "Line"],
    routerShort: ["Router", "Router"],
    isWorking: ["Is your internet working now?", "Kya ab aap ka internet chal raha hai?"],
    yesWorking: ["Yes, it's working", "Haan, chal raha hai"],
    notYet: ["Not yet", "Abhi nahi"],
    notYetNote: ["\"Not yet\" reopens this request with the same technician. Nothing to fill in again.", "\"Abhi nahi\" se yeh request wohi technician ke sath dobara khul jaye gi. Kuch dobara bharna nahi."],
    howVisit: ["How was the visit?", "Visit kaisi rahi?"],
    rateLabel: ["Rate {n} out of 5", "5 mein se {n}"],
    tagOnTime: ["On time", "Waqt par"],
    tagExplained: ["Explained the fix", "Hal samjhaya"],
    tagPolite: ["Polite", "Ikhlaq se pesh aaye"],
    closedToast: ["Request closed. Thanks for confirming.", "Request band ho gayi. Tasdeeq ka shukriya."],
    thanksH: ["Thanks for confirming", "Tasdeeq ka shukriya"],
  };

  /* ---------------- sample data ---------------- */

  const SAMPLE = {
    user: "sample.user",
    area: "Satellite Town",
    checkDay: { en: "Tue", ur: "Mangal" },
    checkTime: "7:41 PM",
    ref: "NT-24-01873",
    tech: "Imran A.",
    techFirst: "Imran",
    phone: "0300 1234567",
    assignBy: "8:30 PM",
    slots: [
      { id: "w1", d: ["Wed", "Budh"], t: "10 AM–12 PM" },
      { id: "w2", d: ["Wed", "Budh"], t: "2–4 PM" },
      { id: "t1", d: ["Thu", "Jumeraat"], t: "10 AM–12 PM" },
      { id: "t2", d: ["Thu", "Jumeraat"], t: "4–6 PM" },
    ],
  };

  /* ---------------- state ---------------- */

  const initial = () => ({
    lang: "en",
    screen: "support",
    scenario: "router", // router | outage
    check: "idle", // idle | running | done
    resolvedRows: 0,
    hold: false,
    step: 1,
    stepsTried: [], // "restart" | "fibre" | "power"
    fixedAt: null,
    editingTried: false,
    tried: [],
    slot: null,
    phone: SAMPLE.phone,
    notify: false,
    tracker: "onway", // onway | rescheduled | reopened
    rating: 0,
    tags: [],
    confirmed: false,
    closed: false,
    toast: null,
  });
  let st = initial();
  let stack = [];
  let timers = [];

  const L = () => (st.lang === "ur" ? 1 : 0);
  function t(key, vars) {
    let s = (S[key] || [key, key])[L()];
    if (vars) for (const k in vars) s = s.split("{" + k + "}").join(vars[k]);
    return s;
  }
  // inline port/light labels: {PON} -> chip
  const ports = (s) => s.replace(/\{([A-Z/a-z]+)\}/g, '<span class="port">$1</span>');
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------------- shared pieces ---------------- */

  const statusbar = `<div class="statusbar" aria-hidden="true"><span>9:41</span><svg viewBox="0 0 54 12" fill="currentColor"><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="5" y="5" width="3" height="7" rx="1"/><rect x="10" y="2.5" width="3" height="9.5" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/><rect x="26" y="1" width="23" height="10" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="28" y="3" width="15" height="6" rx="1.5"/><rect x="50.5" y="4" width="1.8" height="4" rx="0.9"/></svg></div>`;

  function tabbar(active) {
    const tabs = [
      ["dashboard", "Dashboard", "dashboard"],
      ["billing", "Billing", "billing"],
      ["services", "Services", "services"],
      ["support", "Support", "support"],
      ["more", "More", "more"],
    ];
    return `<nav class="tabbar" aria-label="Main">${tabs
      .map(([id, label, ic]) => {
        const cur = id === active ? ' aria-current="page"' : "";
        const go = id === "dashboard" || id === "support" ? ` data-go="${id}" data-root` : ' data-noop';
        const badge = id === "more" ? '<span class="new">New</span>' : "";
        return `<a href="#${id}"${cur}${go}>${badge}${icon(ic)}<span>${label}</span></a>`;
      })
      .join("")}</nav>`;
  }

  const appIcons = `<div class="topbar__icons"><button class="icon-btn" type="button" aria-label="Search" data-noop>${icon("search")}</button><button class="icon-btn" type="button" aria-label="Notifications" data-noop>${icon("bell")}</button><button class="icon-btn" type="button" aria-label="Menu" data-noop>${icon("menu")}</button></div>`;

  function langToggle() {
    return `<div class="lang" role="group" aria-label="Language"><button type="button" data-lang="en" aria-pressed="${st.lang === "en"}">EN</button><button type="button" data-lang="ur" aria-pressed="${st.lang === "ur"}" aria-label="Roman Urdu">UR</button></div>`;
  }
  function subbar(title) {
    return `<header class="subbar"><button class="icon-btn" type="button" data-back aria-label="${t("back")}">${icon("back")}</button><h1 class="subbar__title">${title}</h1>${langToggle()}</header>`;
  }

  function hotspot() {
    return `<div class="tip">${icon("hotspot")}<div><strong>${t("hotspotH")}</strong><p>${t("hotspotP")}</p></div></div>`;
  }

  function statusChip(kind) {
    const map = {
      ok: ["status--ok", "checkCircle", "stWorking"],
      bad: ["status--bad", "alert", "stNot"],
      outage: ["status--bad", "alert", "stOutage"],
      after: ["status--wait", "clock", "stAfter"],
      checking: ["status--checking", "spinner", "stChecking"],
      waiting: ["status--wait", "clock", "stWaiting"],
    };
    const [c, ic, k] = map[kind];
    return `<span class="status ${c}">${icon(ic)}${t(k)}</span>`;
  }

  // final status per row for the active scenario
  function rowResults() {
    if (st.fixedAt) return ["ok", "ok", "ok"];
    return st.scenario === "outage" ? ["outage", "after", "after"] : ["ok", "ok", "bad"];
  }
  function rowStatus(i) {
    const res = rowResults();
    if (st.check === "done") return res[i];
    if (i < st.resolvedRows) return res[i];
    if (i === st.resolvedRows) return "checking";
    return "waiting";
  }

  function healthCard(opts) {
    const rows = [
      ["tower", "area", t("areaSub", { area: SAMPLE.area })],
      ["fibre", "line", t("lineSub")],
      ["router", "router", t("routerSub")],
    ];
    const head = opts && opts.head
      ? `<div class="health__head"><h2 class="card-title">${t("healthRows")}</h2><button class="btn-text" type="button" data-act="recheck">${icon("refresh")}${t("recheck")}</button></div>`
      : `<div class="health__head"><h2 class="card-title">${t("healthRows")}</h2></div>`;
    return `<section class="card health" aria-label="${t("healthTitle")}">${head}${rows
      .map(([ic, key, sub], i) => {
        const s = rowStatus(i);
        const cls = s === "ok" ? "is-ok" : s === "bad" || s === "outage" ? "is-bad" : "";
        const just = (st.check === "running" && i === st.resolvedRows - 1 ? " is-resolved" : "") + (s === "after" ? " hrow--stack" : "");
        return `<div class="hrow ${cls}${just}"><span class="hrow__node">${icon(ic)}</span><span class="hrow__name">${t(key)}<small>${sub}</small></span>${statusChip(s)}</div>`;
      })
      .join("")}</section>`;
  }

  /* ---------------- router diagram ---------------- */

  function routerFigure(focus) {
    const hl = (on) => (on ? "var(--orange)" : "none");
    const lights = [
      ["POWER", 64, "#2e9a52", false],
      ["PON", 110, "#2e9a52", false],
      ["LOS", 156, focus === "fibre" ? "#d23b2f" : "#c9d3e2", false],
      ["LAN", 202, "#2e9a52", false],
      ["WLAN", 248, "#2e9a52", false],
    ];
    const lightRing = focus === "power" ? [40, 136] : focus === "fibre" ? [86, 182] : focus === "cables" ? [40, 88] : null;
    return `<svg viewBox="0 0 320 190" role="img" aria-label="${esc(t(focus === "power" ? "s1Cap" : focus === "fibre" ? "s2Cap" : "s3Cap"))}">
      <g font-family="Roboto, system-ui, sans-serif" font-size="9" font-weight="600" fill="#4a5566" text-anchor="middle">
        <text x="160" y="11" font-size="8.5" fill="#6b7686" letter-spacing=".08em">FRONT LIGHTS</text>
        <rect x="30" y="18" width="260" height="38" rx="9" fill="#fff" stroke="#284f94" stroke-width="1.5"/>
        ${lights
          .map(([n, x, c]) => {
            const blink = n === "LOS" && focus === "fibre" ? `<animate attributeName="opacity" values="1;.25;1" dur="1.1s" repeatCount="indefinite"/>` : "";
            return `<circle cx="${x}" cy="31" r="4.5" fill="${c}">${blink}</circle><text x="${x}" y="49">${n}</text>`;
          })
          .join("")}
        ${lightRing ? `<rect x="${lightRing[0]}" y="21" width="${lightRing[1] - lightRing[0]}" height="32" rx="8" fill="none" stroke="var(--orange)" stroke-width="2.2"/>` : ""}

        <text x="160" y="79" font-size="8.5" fill="#6b7686" letter-spacing=".08em">BACK PANEL</text>
        <rect x="10" y="86" width="300" height="70" rx="10" fill="#fff" stroke="#284f94" stroke-width="1.5"/>
        <!-- port labels sit above the ports so cables never cross them -->
        <text x="41" y="99">PON</text>
        ${[1, 2, 3, 4].map((n, i) => `<text x="${93 + i * 38}" y="99">LAN${n}</text>`).join("")}
        <text x="244" y="99">POWER</text>
        <text x="284" y="99">ON/OFF</text>
        <g transform="translate(0 10)">
          <!-- PON / fibre -->
          <rect x="24" y="96" width="34" height="26" rx="4" fill="#e5eeff" stroke="#284f94" stroke-width="1.4"/>
          <rect x="35" y="102" width="12" height="14" rx="2" fill="#2e9a52"/>
          <path d="M41 116 C41 146 34 164 22 182" fill="none" stroke="#e0a800" stroke-width="3.2" stroke-linecap="round"/>
          <!-- LAN 1-4 -->
          ${[1, 2, 3, 4]
            .map((n, i) => {
              const x = 78 + i * 38;
              return `<rect x="${x}" y="97" width="30" height="24" rx="3" fill="#f3f6fb" stroke="#284f94" stroke-width="1.4"/><path d="M${x + 8} 105h14v10h-14z" fill="#284f94" opacity=".85"/>`;
            })
            .join("")}
          ${focus === "cables" ? `<path d="M93 121 C93 146 100 166 112 182" fill="none" stroke="#4a6fb5" stroke-width="3.2" stroke-linecap="round"/>` : ""}
          <!-- power socket -->
          <circle cx="244" cy="109" r="11" fill="#f3f6fb" stroke="#284f94" stroke-width="1.4"/>
          <circle cx="244" cy="109" r="3.4" fill="#284f94"/>
          ${focus === "cables" ? `<path d="M244 120 C244 148 252 166 262 182" fill="none" stroke="#1b1d22" stroke-width="3.2" stroke-linecap="round"/>` : ""}
          <!-- on/off -->
          <rect x="274" y="100" width="20" height="18" rx="3" fill="#f3f6fb" stroke="#284f94" stroke-width="1.4"/>
          <rect x="280" y="104" width="8" height="10" rx="1.5" fill="#284f94"/>
        </g>
        <rect x="16" y="89" width="50" height="62" rx="8" fill="none" stroke="${hl(focus === "fibre")}" stroke-width="2.4"/>
        <rect x="72" y="89" width="42" height="62" rx="8" fill="none" stroke="${hl(focus === "cables")}" stroke-width="2.4"/>
        <rect x="222" y="89" width="44" height="62" rx="8" fill="none" stroke="${hl(focus === "cables")}" stroke-width="2.4"/>
        <rect x="264" y="89" width="41" height="62" rx="8" fill="none" stroke="${hl(focus === "power")}" stroke-width="2.4"/>
      </g>
    </svg>`;
  }

  /* ---------------- screens ---------------- */

  const screens = {};

  // EXISTING — Dashboard (unchanged layout; sample values)
  screens.dashboard = () => `
    <div class="screen screen--white">
      ${statusbar}
      <header class="topbar"><div class="topbar__user">${icon("account")}<span>${SAMPLE.user}</span></div>${appIcons}</header>
      <div class="scroll"><div class="content">
        <section class="wifi-hero">${arcs("wifi-hero__arcs")}
          <button class="start" type="button" data-noop>START</button>
          <div><h2>Optimize your Wi-Fi</h2><ul>
            <li>${icon("wifi")}WiFi Interference</li><li>${icon("wifi")}WiFi Signal Strength</li><li>${icon("globe")}WiFi Utilization</li></ul></div>
        </section>
        <div class="tiles">
          <div class="tile"><div class="tile__body">${icon("gauge")}<span class="tile__k">Speed</span><span class="tile__v">30 Mbps</span></div><span class="tile__cta">${icon("arrowUp")}Upgrade Package</span></div>
          <div class="tile"><div class="tile__body">${icon("list")}<span class="tile__k">Remaining</span><span class="tile__v">1250.0 GB</span></div></div>
          <div class="tile"><div class="tile__body">${icon("arrowRight")}<span class="tile__k">Carry Forward</span><span class="tile__v">0.0 GB</span></div></div>
        </div>
        <section class="pay"><div class="pay__body"><h2 class="pay__title">PAYMENT</h2><div class="pay__grid">
          <div><div class="pay__v">Rs.3650</div><div class="pay__k">Net Payable</div></div>
          <div><div class="pay__v">OCT 06</div><div class="pay__k">Payment Date</div></div>
          <div><div class="pay__v pay__v--ok">PAID</div><div class="pay__k">Payment Status</div></div>
        </div></div><button class="pay__bar" type="button" data-noop>PAY BILL ONLINE</button></section>
        <h2 class="section-title">Get Help</h2>
        <div class="help-row">
          <button class="help-item is-hinted" type="button" data-go="support">${helpArt("complaint")}<span>Launch Complaint</span></button>
          <button class="help-item" type="button" data-noop>${helpArt("chat")}<span>Whatsapp</span></button>
          <button class="help-item" type="button" data-noop>${helpArt("tour")}<span>App Tour</span></button>
        </div>
        <h2 class="section-title">Recommended Services</h2>
        <div class="help-row">${[["#2f7fd6", "Plus"], ["#e87b1e", "Extreme"], ["#8a3fd1", "Ultra"]]
          .map(([c, n]) => `<button class="help-item" type="button" data-noop>${bundleArt(c)}<span>Unlimited Bundle ${n}</span></button>`)
          .join("")}</div>
      </div></div>
      ${tabbar("dashboard")}
    </div>`;

  // generic stand-in for the app's bundle artwork (third-party logos left out)
  function bundleArt(c) {
    return `<svg viewBox="0 0 56 56" aria-hidden="true"><path d="M28 32c-5-6-9-9-13-9a7 7 0 0 0 0 14c4 0 8-3 13-9zm0 0c5 6 9 9 13 9a7 7 0 0 0 0-14c-4 0-8 3-13 9z" fill="none" stroke="${c}" stroke-width="5.5" stroke-linejoin="round"/><rect x="14" y="7" width="9" height="9" rx="2.5" fill="#d93a3a"/><rect x="24" y="4" width="9" height="9" rx="2.5" fill="#d64fa0"/><rect x="34" y="7" width="9" height="9" rx="2.5" fill="#3b6fd4"/></svg>`;
  }

  function helpArt(kind) {
    if (kind === "complaint")
      return `<svg viewBox="0 0 56 56" aria-hidden="true"><path d="M12 30v-4a16 16 0 0 1 32 0v4" fill="none" stroke="#e87b1e" stroke-width="4"/><rect x="7" y="27" width="9" height="14" rx="4" fill="#e87b1e"/><rect x="40" y="27" width="9" height="14" rx="4" fill="#e87b1e"/><circle cx="28" cy="30" r="11" fill="#284f94"/><circle cx="23.5" cy="30" r="1.6" fill="#fff"/><circle cx="28" cy="30" r="1.6" fill="#fff"/><circle cx="32.5" cy="30" r="1.6" fill="#fff"/><path d="M44 41c0 5-4 7-10 7" fill="none" stroke="#e87b1e" stroke-width="3"/></svg>`;
    if (kind === "chat")
      return `<svg viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="27" r="19" fill="#2fb34f"/><path d="M14 46l3-9" stroke="#2fb34f" stroke-width="5" stroke-linecap="round"/><path d="M22 19h3l2 5-2 2a11 11 0 0 0 5 5l2-2 5 2v3a2 2 0 0 1-2 2 15 15 0 0 1-15-15 2 2 0 0 1 2-2z" fill="#fff"/></svg>`;
    return `<svg viewBox="0 0 56 56" aria-hidden="true"><rect x="8" y="12" width="40" height="26" rx="3" fill="#284f94"/><path d="M25 19l9 6-9 6z" fill="#fff"/><path d="M10 45h36" stroke="#e87b1e" stroke-width="3" stroke-linecap="round"/><circle cx="18" cy="45" r="4" fill="#e87b1e"/></svg>`;
  }

  // EXISTING — Support, with the NEW Connection health card added on top
  screens.support = () => {
    const lastKey = st.closed || st.fixedAt ? "healthLastOk" : st.check === "done" ? (st.scenario === "outage" ? "healthLastOutage" : "healthLastRouter") : null;
    const okAll = lastKey === "healthLastOk";
    const mini = [["tower", "area"], ["fibre", "line"], ["router", "router"]];
    const res = okAll ? ["ok", "ok", "ok"] : rowResults();
    const rowsHtml = lastKey
      ? `<div class="health-entry__rows">${mini
          .map(([ic, k], i) => `<div class="mini-row ${res[i] === "ok" ? "is-ok" : ""}">${icon(res[i] === "ok" ? "checkCircle" : res[i] === "after" ? "clock" : "alert")}<span>${t(k)}</span><span>${t(res[i] === "ok" ? "stWorking" : res[i] === "after" ? "stAfter" : res[i] === "outage" ? "stOutage" : "stNot")}</span></div>`)
          .join("")}</div>`
      : "";
    const time = lastKey ? t("checkedAt", { t: okAll && st.closed ? "11:24 AM" : SAMPLE.checkTime }) : t("notChecked");
    const cats = [
      ["Internet", "globe", "blue"], ["Video", "tv", "orange"], ["Phone", "landline", "orange"], ["Account", "account", "blue"],
      ["Billing and Payments", "receipt", "blue"], ["Network Management", "network", "orange"], ["Other Services", "headset", "orange"],
    ];
    return `
    <div class="screen">
      ${statusbar}
      <header class="topbar"><h1 class="topbar__title">Support</h1>${appIcons}</header>
      <div class="scroll"><div class="content">
        <section class="health-entry" aria-labelledby="he-title">${arcs("health-entry__arcs")}
          <div class="health-entry__head"><h2 id="he-title">${t("healthTitle")}</h2><span class="health-entry__time">${time}</span></div>
          <p>${lastKey ? t(lastKey) : t("healthIdle")}</p>
          ${rowsHtml}
          <button class="btn btn--primary" type="button" data-act="${lastKey && !okAll ? "open-result" : "start-check"}">${lastKey && !okAll ? t("seeResult") : t("checkNow")}${icon("arrowRight")}</button>
        </section>
        <p class="muted" style="margin-top:6px">Based on your recent activities</p>
        <div class="chips">
          <button class="chip" type="button" data-noop>Slow Internet - WiFi</button>
          <button class="chip" type="button" data-act="start-check">No Internet - WiFi</button>
          <button class="chip" type="button" data-noop>Gaming Console - Latency Issues</button>
          <button class="chip" type="button" data-noop>AP/ WiFi extender Password change</button>
        </div>
        <h2 class="section-title">Choose support category</h2>
        <div class="cat-grid">${cats
          .map(([n, ic, c]) => `<button class="cat" type="button" data-noop><span class="icon-badge icon-badge--${c}">${icon(ic)}</span>${n}</button>`)
          .join("")}</div>
        <h2 class="section-title">Choose other support category</h2>
        <div class="cat-grid">
          <button class="cat" type="button" data-noop><span class="icon-badge icon-badge--orange">${icon("history")}</span>Complaint History</button>
          <button class="cat" type="button" data-noop><span class="icon-badge icon-badge--orange">${icon("play")}</span>Tutorials</button>
        </div>
      </div></div>
      ${st.toast ? `<div class="toast" role="status">${icon("checkCircle")}${st.toast}</div>` : ""}
      ${tabbar("support")}
    </div>`;
  };

  // NEW — S1 connection check (running → router issue | area outage)
  screens.check = () => {
    let verdict, dock = "";
    if (st.check !== "done") {
      verdict = `<section class="verdict verdict--checking">${arcs("verdict__arcs")}<div class="verdict__icon">${icon("refresh")}</div><h2>${t("checkingH")}</h2><p>${t("checkingP")}</p></section>`;
    } else if (st.scenario === "outage") {
      verdict = `<section class="verdict is-landing" aria-live="polite">${arcs("verdict__arcs")}<div class="verdict__icon">${icon("tower")}</div><h2>${t("outageH")}</h2><p>${t("outageP", { area: SAMPLE.area })}</p>
        <div class="verdict__facts"><div><div class="k">${t("expectedBack")}</div><div class="v">9:15 PM</div></div><div><div class="k">${t("nextUpdate")}</div><div class="v">8:15 PM</div></div></div></section>`;
      dock = `<div class="dock"><button class="btn ${st.notify ? "btn--outline" : "btn--primary"} btn--block" type="button" data-act="notify" aria-pressed="${st.notify}">${st.notify ? icon("check") + t("notifyOn") : icon("bell") + t("notifyMe")}</button><p class="dock__hint">${t("noNeed")}</p></div>`;
    } else {
      verdict = `<section class="verdict is-landing" aria-live="polite">${arcs("verdict__arcs")}<div class="verdict__icon">${icon("router")}</div><h2>${t("routerH")}</h2><p>${t("routerP")}</p></section>`;
      dock = `<div class="dock"><button class="btn btn--primary btn--block" type="button" data-go="fix">${t("fixSteps")}</button><button class="btn-text btn-text--center" type="button" data-act="report">${t("reportInstead")}</button></div>`;
    }
    const meta = st.check === "done" ? `<p class="reqline">${t("checkedAt", { t: SAMPLE.checkTime })}</p>` : "";
    return `
    <div class="screen">
      ${statusbar}${subbar(t("checkTitle"))}
      <div class="scroll"><div class="content">
        ${verdict}
        ${healthCard({ head: st.check === "done" })}
        ${meta}
        ${st.check === "done" && st.scenario === "outage" ? hotspot() : ""}
      </div></div>
      ${dock}
    </div>`;
  };

  // NEW — S2 guided fix
  const STEPS = [
    { key: "restart", title: "s1Title", items: ["s1a", "s1b", "s1c"], see: "s1See", focus: "power", cap: "s1Cap", min: 5 },
    { key: "fibre", title: "s2Title", items: ["s2a", "s2b", "s2c"], see: "s2See", focus: "fibre", cap: "s2Cap", min: 3 },
    { key: "power", title: "s3Title", items: ["s3a", "s3b", "s3c"], see: "s3See", focus: "cables", cap: "s3Cap", min: 2 },
  ];
  screens.fix = () => {
    const s = STEPS[st.step - 1];
    const meter = [1, 2, 3].map((n) => `<span class="${n < st.step ? "is-done" : n === st.step ? "is-current" : ""}"></span>`).join("");
    const doneList = st.step > 1
      ? `<p class="done-line">${icon("checkCircle")}<span>${STEPS.slice(0, st.step - 1).map((d) => t(d.title)).join(" · ")}<br><span class="muted">${t("stepDoneNote")}</span></span></p>`
      : "";
    return `
    <div class="screen">
      ${statusbar}${subbar(t("fixTitle"))}
      <div class="scroll"><div class="content">
        <div><div class="steps-meter" aria-hidden="true">${meter}</div>
          <div class="steps-label"><span>${t("stepOf", { n: st.step })}</span><span>${t("minutesLeft", { m: s.min })}</span></div></div>
        ${doneList}
        <article class="card stepcard">
          <figure class="figure" style="margin:0">${routerFigure(s.focus)}<figcaption>${t(s.cap)}</figcaption></figure>
          <div class="stepcard__body">
            <h2>${t(s.title)}</h2>
            <ol class="instr">${s.items.map((k) => `<li><span>${ports(t(k))}</span></li>`).join("")}</ol>
            <div class="expect">${icon("eye")}<div><strong>${t("whatSee")}</strong><p>${ports(t(s.see))}</p></div></div>
          </div>
        </article>
      </div></div>
      <div class="dock">
        <p class="ask">${t("didFix")}</p>
        <div class="dock__row"><button class="btn btn--outline" type="button" data-act="still">${t("stillNot")}</button><button class="btn btn--primary" type="button" data-act="fixed">${icon("check")}${t("fixed")}</button></div>
        <button class="btn-text btn-text--center" type="button" data-act="report">${t("skipReport")}</button>
      </div>
    </div>`;
  };

  screens.fixed = () => `
    <div class="screen">
      ${statusbar}${subbar(t("fixTitle"))}
      <div class="scroll"><div class="content">
        <div class="celebrate"><div class="celebrate__mark">${icon("check")}</div><h2>${t("fixedH")}</h2>
          <p>${st.fixedAt === 1 ? t("fixedP") : t("fixedPn", { n: st.fixedAt })}</p></div>
        ${healthCard()}
        <p class="fineprint">${t("fixedNote")}</p>
      </div></div>
      <div class="dock"><button class="btn btn--primary btn--block" type="button" data-act="finish-fixed">${t("done")}</button></div>
    </div>`;

  // NEW — S3 complaint, pre-filled
  const TRIED_LABEL = { restart: "tRestart", fibre: "tFibre", power: "tPower" };
  screens.complaint = () => {
    const triedHtml = st.tried.length
      ? `<ul class="tried">${st.tried
          .map((k) => `<li>${icon("check")}<span>${t(TRIED_LABEL[k])}</span>${st.editingTried ? `<button class="remove" type="button" data-remove="${k}" aria-label="${t("remove")}: ${esc(t(TRIED_LABEL[k]))}">${icon("x")}</button>` : ""}</li>`)
          .join("")}</ul>`
      : `<p class="tried-empty">${t("triedNone")}</p>`;
    return `
    <div class="screen">
      ${statusbar}${subbar(t("reportTitle"))}
      <div class="scroll"><div class="content">
        <p class="muted">${t("reportIntro")}</p>
        <section class="card card--pad field problem">
          <div class="field__head"><h2 class="card-title">${t("problem")}</h2><span class="badge badge--auto">${icon("check")}${t("autoFilled")}</span></div>
          <div><strong>${t("probRouter")}</strong><p>${t("probFound", { d: SAMPLE.checkDay[st.lang], t: SAMPLE.checkTime })}</p></div>
        </section>
        <section class="card card--pad field">
          <div class="field__head"><h2 class="card-title">${t("tried")}</h2>${st.tried.length || st.editingTried ? `<button class="btn-text" type="button" data-act="edit-tried" style="padding:4px">${st.editingTried ? t("doneEdit") : icon("pencil").replace('class=""', 'class="" style="width:16px;height:16px;vertical-align:-3px;margin-right:4px"') + t("edit")}</button>` : ""}</div>
          ${triedHtml}
        </section>
        <section class="field" aria-labelledby="slot-q">
          <h2 class="section-title" id="slot-q">${t("whenVisit")}</h2>
          <div class="slots" role="radiogroup" aria-labelledby="slot-q">${SAMPLE.slots
            .map((s) => `<button class="slot" type="button" role="radio" aria-checked="${st.slot === s.id}" data-slot="${s.id}"><span class="d">${s.d[L()]}</span><span class="t">${s.t}</span></button>`)
            .join("")}</div>
          <div class="notes"><div>${icon("person")}<span>${t("adult")}</span></div><div>${icon("info")}<span>${t("charges")}: <a href="#" data-noop>${t("chargesLink")}</a></span></div></div>
        </section>
        <section class="field">
          <label class="section-title" for="phone">${t("contact")}</label>
          <input class="input" id="phone" type="tel" inputmode="tel" autocomplete="tel" value="${esc(st.phone)}" aria-describedby="phone-hint">
          <p class="small muted" id="phone-hint">${t("contactHint")}</p>
        </section>
        ${hotspot()}
      </div></div>
      <div class="dock">
        <button class="btn btn--primary btn--block" type="button" data-act="send" ${st.slot ? "" : "disabled aria-describedby=\"send-hint\""}>${t("send")}</button>
        ${st.slot ? "" : `<p class="dock__hint" id="send-hint">${t("pickSlot")}</p>`}
      </div>
    </div>`;
  };

  function slotText() {
    const s = SAMPLE.slots.find((x) => x.id === st.slot) || SAMPLE.slots[0];
    return `${s.d[L()]} ${s.t}`;
  }

  screens.sent = () => `
    <div class="screen">
      ${statusbar}${subbar(t("sentTitle"))}
      <div class="scroll"><div class="content">
        <div class="celebrate"><div class="celebrate__mark">${icon("check")}</div><h2>${t("sentH")}</h2>
          <p>${t("sentP", { t: SAMPLE.assignBy })}</p><span class="ref">${t("refLabel")} ${SAMPLE.ref}</span></div>
        <dl class="card card--pad summary">
          <div><dt>${t("sumProblem")}</dt><dd>${t("probRouter")}</dd></div>
          <div><dt>${t("sumVisit")}</dt><dd>${slotText()}</dd></div>
          <div><dt>${t("sumTried")}</dt><dd>${t("sumTriedN", { n: st.tried.length })}</dd></div>
          <div><dt>${t("sumContact")}</dt><dd>${esc(st.phone)}</dd></div>
        </dl>
        ${hotspot()}
      </div></div>
      <div class="dock"><button class="btn btn--primary btn--block" type="button" data-go="tracker">${t("track")}</button><button class="btn-text btn-text--center" type="button" data-act="to-support">${t("backSupport")}</button></div>
    </div>`;

  // NEW — S4 tracker (on the way | rescheduled | reopened)
  function techCard(withCall) {
    return `<section class="card card--pad tech"><span class="avatar" aria-hidden="true">IA</span><div class="tech__name"><strong>${SAMPLE.tech}</strong><span>${t("techRole")}</span></div>${withCall ? `<a class="call" href="tel:00000000000" data-noop>${icon("phone")}${t("call")}</a>` : ""}</section>`;
  }
  function timeline(variant) {
    const n = st.tried.length || 3;
    const name = SAMPLE.techFirst;
    const items =
      variant === "reopened"
        ? [
            ["is-done", "tlReceived", t("tlReceivedW", { n })],
            ["is-done", "tlAssigned", t("tlAssignedW")],
            ["is-done", "tlOnWay", "Wed 10:12 AM"],
            ["is-now", "tlReopened", t("tlReopenedW")],
            ["is-next", "tlResolved", t("tlResolvedW")],
          ]
        : [
            ["is-done", "tlReceived", t("tlReceivedW", { n })],
            variant === "rescheduled" ? ["is-now", "tlAssigned", t("tlReschedW")] : ["is-done", "tlAssigned", t("tlAssignedW")],
            variant === "rescheduled" ? ["is-next", "tlOnWay", t("tlOnWayNext", { name })] : ["is-now", "tlOnWay", t("tlOnWayW")],
            ["is-next", "tlResolved", t("tlResolvedW")],
          ];
    return `<section class="card card--pad"><h2 class="card-title" style="margin-bottom:12px">${t("progress")}</h2><ol class="timeline">${items
      .map(([c, k, w]) => `<li class="${c}"><span class="dot">${c === "is-done" ? icon("check") : ""}</span><div><strong>${t(k)}</strong><span class="when">${w}</span></div></li>`)
      .join("")}</ol></section>`;
  }

  screens.tracker = () => {
    const v = st.tracker;
    let hero, actions;
    if (v === "rescheduled") {
      hero = `<section class="verdict">${arcs("verdict__arcs")}<div class="verdict__icon">${icon("calendar")}</div><h2>${t("reschedH")}</h2>
        <p>${t("newTime")}</p><div class="eta">2:00–4:00 PM</div><div class="eta-old"><span class="sr-only">Was </span>10 AM–12 PM</div><span class="next">${icon("clock")}${t("changedAt")}</span></section>
        <section class="card why"><p>${t("whyP", { name: SAMPLE.techFirst })}</p></section>`;
      actions = `<div class="dock"><div class="dock__row"><button class="btn btn--outline" type="button" data-act="pick-another">${t("pickAnother")}</button><button class="btn btn--primary" type="button" data-act="keep-time">${t("keepTime")}</button></div></div>`;
    } else if (v === "reopened") {
      hero = `<section class="verdict">${arcs("verdict__arcs")}<div class="verdict__icon">${icon("refresh")}</div><h2>${t("reopenH")}</h2>
        <p>${t("reopenP", { name: SAMPLE.techFirst })}</p><div class="verdict__facts"><div><div class="k">${t("reopenTime")}</div><div class="v">3:00–4:00 PM</div></div><div><div class="k">${t("nextUpdate")}</div><div class="v">12:30 PM</div></div></div></section>`;
      actions = `<div class="dock"><a class="btn btn--primary btn--block" href="tel:00000000000" data-noop>${icon("phone")}${t("callName", { name: SAMPLE.techFirst })}</a><div class="link-row"><button class="btn-text" type="button" data-act="pick-another">${t("changeTime")}</button><button class="btn-text" type="button" data-noop>${t("viewDetails")}</button></div></div>`;
    } else {
      hero = `<section class="verdict">${arcs("verdict__arcs")}<div class="verdict__icon">${icon("arrowRight")}</div><h2>${t("onWayH")}</h2>
        <p>${t("arriving")}</p><div class="eta">10:30–11:00 AM</div><span class="next">${icon("clock")}${t("nextUpd", { t: "10:45 AM" })}</span></section>`;
      actions = `<div class="dock"><a class="btn btn--primary btn--block" href="tel:00000000000" data-noop>${icon("phone")}${t("callName", { name: SAMPLE.techFirst })}</a><div class="link-row"><button class="btn-text" type="button" data-act="pick-another">${t("changeTime")}</button><button class="btn-text" type="button" data-noop>${t("viewDetails")}</button></div></div>`;
    }
    return `
    <div class="screen">
      ${statusbar}${subbar(t("yourRequest"))}
      <div class="scroll"><div class="content">
        <p class="reqline">${t("reqRef", { ref: `<b>${SAMPLE.ref}</b>` })}</p>
        ${hero}
        ${techCard(v === "rescheduled")}
        ${timeline(v)}
        ${hotspot()}
      </div></div>
      ${actions}
      ${st.toast ? `<div class="toast" role="status" style="bottom:96px">${icon("checkCircle")}${st.toast}</div>` : ""}
    </div>`;
  };

  // NEW — S5 resolved: confirm and rate
  screens.resolved = () => {
    const trio = [["areaShort"], ["lineShort"], ["routerShort"]]
      .map(([k]) => `<span class="status status--ok">${icon("checkCircle")}${t(k)}</span>`)
      .join("");
    const rateBlock = st.confirmed
      ? `<section class="card card--pad field" style="align-items:center">
          <h2 class="question" style="margin:0">${t("howVisit")}</h2>
          <div class="stars" role="radiogroup" aria-label="${t("howVisit")}">${[1, 2, 3, 4, 5]
            .map((n) => `<button type="button" role="radio" aria-checked="${st.rating === n}" class="${n <= st.rating ? "is-lit" : ""}" data-rate="${n}" aria-label="${t("rateLabel", { n })}">${icon("star")}</button>`)
            .join("")}</div>
          <div class="tagset">${["tagOnTime", "tagExplained", "tagPolite"]
            .map((k) => `<button type="button" aria-pressed="${st.tags.includes(k)}" data-tag="${k}">${t(k)}</button>`)
            .join("")}</div>
        </section>`
      : "";
    const dock = st.confirmed
      ? `<div class="dock"><button class="btn btn--primary btn--block" type="button" data-act="close-request">${t("done")}</button></div>`
      : `<div class="dock"><div class="dock__row"><button class="btn btn--outline" type="button" data-act="not-yet">${t("notYet")}</button><button class="btn btn--primary" type="button" data-act="yes-working">${t("yesWorking")}</button></div></div>`;
    return `
    <div class="screen">
      ${statusbar}${subbar(t("yourRequest"))}
      <div class="scroll"><div class="content">
        <p class="reqline">${t("reqRef", { ref: `<b>${SAMPLE.ref}</b>` })}</p>
        <section class="card card--pad">
          <div class="complete"><span class="icon-badge">${icon("check")}</span><div><strong>${t("visitDone")}</strong><p>${t("visitDoneP", { name: SAMPLE.techFirst })} · ${t("visitDoneT")}</p></div></div>
          <div class="trio">${trio}</div>
        </section>
        ${st.confirmed ? "" : `<h2 class="question">${t("isWorking")}</h2><p class="fineprint">${t("notYetNote")}</p>`}
        ${rateBlock}
      </div></div>
      ${dock}
    </div>`;
  };

  /* ---------------- flow actions ---------------- */

  function clearTimers() { timers.forEach(clearTimeout); timers = []; }

  function runCheck() {
    clearTimers();
    st.check = "running";
    st.resolvedRows = 0;
    st.fixedAt = null;
    st.hold = false;
    const stepMs = matchMedia("(prefers-reduced-motion: reduce)").matches ? 450 : 1000;
    const total = 3;
    for (let i = 1; i <= total; i++) {
      timers.push(setTimeout(() => { st.resolvedRows = i; render(false); }, stepMs * i));
    }
    timers.push(setTimeout(() => { st.check = "done"; render(false); }, stepMs * total + 350));
  }

  function go(screen, opts) {
    if (!(opts && opts.replace)) stack.push(st.screen);
    st.screen = screen;
    st.toast = null;
    render(true);
  }
  function back() {
    clearTimers();
    const prev = stack.pop() || (st.screen === "support" ? "dashboard" : "support");
    if (st.check === "running") st.check = "idle";
    st.screen = prev;
    st.toast = null;
    render(true);
  }
  function toRoot(screen) {
    clearTimers();
    if (st.check === "running") st.check = "idle";
    stack = screen === "support" ? ["dashboard"] : [];
    st.screen = screen;
    render(true);
  }
  function toast(msg) {
    st.toast = msg;
    render(false);
    timers.push(setTimeout(() => { st.toast = null; }, 4000));
  }

  const actions = {
    "start-check": () => { st.scenario = st.scenario || "router"; go("check"); runCheck(); },
    "open-result": () => go("check"),
    recheck: () => { runCheck(); render(false); },
    report: () => {
      st.tried = st.stepsTried.slice();
      go("complaint");
    },
    notify: () => { st.notify = !st.notify; render(false); },
    still: () => {
      const s = STEPS[st.step - 1];
      if (!st.stepsTried.includes(s.key)) st.stepsTried.push(s.key);
      if (st.step < 3) { st.step += 1; render(true, true); }
      else { st.tried = st.stepsTried.slice(); go("complaint"); }
    },
    fixed: () => {
      st.fixedAt = st.step;
      const s = STEPS[st.step - 1];
      if (!st.stepsTried.includes(s.key)) st.stepsTried.push(s.key);
      go("fixed");
    },
    "finish-fixed": () => { stack = ["dashboard"]; st.screen = "support"; render(true); },
    "edit-tried": () => { st.editingTried = !st.editingTried; render(false); },
    send: () => {
      const input = document.getElementById("phone");
      if (input) st.phone = input.value.trim() || SAMPLE.phone;
      st.tracker = "onway";
      go("sent", { replace: true });
    },
    "to-support": () => toRoot("support"),
    "keep-time": () => toast(t("keptToast")),
    "pick-another": () => { stack.push("tracker"); st.screen = "complaint"; st.tried = st.tried.length ? st.tried : ["restart", "fibre", "power"]; render(true); },
    "yes-working": () => { st.confirmed = true; render(false); },
    "not-yet": () => { st.tracker = "reopened"; st.confirmed = false; go("tracker", { replace: true }); },
    "close-request": () => {
      st.closed = true;
      st.check = "done";
      stack = ["dashboard"];
      st.screen = "support";
      st.toast = t("closedToast");
      render(true);
    },
  };

  /* ---------------- reviewer presets ---------------- */

  const PRESETS = [
    { group: "Entry", items: [
      { id: "dashboard", label: "Dashboard", tag: "existing" },
      { id: "support", label: "Support + Connection health", tag: "added" },
    ] },
    { group: "Diagnose", items: [
      { id: "check-running", label: "Check running" },
      { id: "check-router", label: "S1 · Router not responding" },
      { id: "check-outage", label: "S1 · Outage in your area" },
    ] },
    { group: "Guided fix", items: [
      { id: "fix-1", label: "S2 · Step 1, restart router" },
      { id: "fix-2", label: "S2 · Step 2, fibre cable" },
      { id: "fix-3", label: "S2 · Step 3, power and cables" },
      { id: "fixed", label: "Fixed, back online" },
    ] },
    { group: "Report", items: [
      { id: "complaint", label: "S3 · Complaint, pre-filled" },
      { id: "sent", label: "Request sent" },
    ] },
    { group: "Track", items: [
      { id: "tracker", label: "S4 · Technician on the way" },
      { id: "rescheduled", label: "S4 · Visit rescheduled" },
    ] },
    { group: "Close the loop", items: [
      { id: "resolved", label: "S5 · Confirm it's working" },
      { id: "rate", label: "S5 · Rate the visit" },
      { id: "reopened", label: "\"Not yet\" reopens request" },
    ] },
  ];

  function preset(id) {
    clearTimers();
    const lang = st.lang;
    st = initial();
    st.lang = lang;
    const routerDone = () => { st.scenario = "router"; st.check = "done"; };
    const allTried = () => { st.stepsTried = ["restart", "fibre", "power"]; st.tried = st.stepsTried.slice(); st.slot = "w1"; };
    switch (id) {
      case "dashboard": stack = []; st.screen = "dashboard"; break;
      case "support": stack = ["dashboard"]; st.screen = "support"; break;
      case "check-running": stack = ["dashboard", "support"]; st.screen = "check"; st.check = "running"; st.resolvedRows = 1; st.hold = true; break;
      case "check-router": stack = ["dashboard", "support"]; st.screen = "check"; routerDone(); break;
      case "check-outage": stack = ["dashboard", "support"]; st.screen = "check"; st.scenario = "outage"; st.check = "done"; break;
      case "fix-1": case "fix-2": case "fix-3":
        routerDone(); stack = ["dashboard", "support", "check"]; st.screen = "fix"; st.step = +id.slice(-1);
        st.stepsTried = ["restart", "fibre"].slice(0, st.step - 1); break;
      case "fixed": routerDone(); stack = ["dashboard", "support", "check"]; st.screen = "fixed"; st.fixedAt = 1; st.stepsTried = ["restart"]; break;
      case "complaint": routerDone(); allTried(); st.slot = null; stack = ["dashboard", "support", "check", "fix"]; st.step = 3; st.screen = "complaint"; break;
      case "sent": routerDone(); allTried(); stack = ["dashboard", "support"]; st.screen = "sent"; break;
      case "tracker": routerDone(); allTried(); stack = ["dashboard", "support"]; st.screen = "tracker"; break;
      case "rescheduled": routerDone(); allTried(); stack = ["dashboard", "support"]; st.screen = "tracker"; st.tracker = "rescheduled"; break;
      case "resolved": routerDone(); allTried(); stack = ["dashboard", "support"]; st.screen = "resolved"; break;
      case "rate": routerDone(); allTried(); stack = ["dashboard", "support"]; st.screen = "resolved"; st.confirmed = true; st.rating = 5; st.tags = ["tagOnTime", "tagExplained"]; break;
      case "reopened": routerDone(); allTried(); stack = ["dashboard", "support", "resolved"]; st.screen = "tracker"; st.tracker = "reopened"; break;
    }
    currentPreset = id;
    render(true);
  }
  let currentPreset = "support";

  function renderReview() {
    const nav = document.getElementById("review-states");
    nav.innerHTML = PRESETS.map(
      (g) => `<div class="review__group"><h2>${g.group}</h2><ul>${g.items
        .map((i) => `<li><button type="button" data-preset="${i.id}" aria-current="${i.id === currentPreset}">${i.label}${i.tag ? `<span class="tag">${i.tag}</span>` : ""}</button></li>`)
        .join("")}</ul></div>`
    ).join("");
    document.querySelectorAll(".review__lang [data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === st.lang)));
  }

  /* ---------------- render + events ---------------- */

  const app = document.getElementById("app");
  let lastScreen = null;
  function render(animate, keepScroll) {
    const prevScroll = app.querySelector(".scroll");
    const top = prevScroll && !animate ? prevScroll.scrollTop : 0;
    app.innerHTML = screens[st.screen]();
    document.documentElement.lang = st.lang === "ur" ? "ur-Latn" : "en";
    const scr = app.querySelector(".screen");
    if (animate && lastScreen !== null && (lastScreen !== st.screen || keepScroll)) scr.classList.add("is-entering");
    const sc = app.querySelector(".scroll");
    if (sc) sc.scrollTop = top;
    lastScreen = st.screen;
    renderReview();
    if (currentPreset) try { history.replaceState(null, "", "#" + currentPreset); } catch (e) { /* file:// */ }
  }

  document.addEventListener("click", (e) => {
    const el = e.target.closest("button, a");
    if (!el) return;
    const d = el.dataset;
    if (d.preset) { preset(d.preset); closeReview(); return; }
    if (!d.lang && !("noop" in d) && el.closest("#app")) currentPreset = null;
    if (d.lang) { st.lang = d.lang; render(false); return; }
    if ("noop" in d) { e.preventDefault(); return; }
    if ("back" in d) { back(); return; }
    if (d.go) {
      e.preventDefault();
      if ("root" in d) { toRoot(d.go); return; }
      if (d.go === "fix") { st.step = 1; st.stepsTried = []; }
      go(d.go);
      return;
    }
    if (d.act && actions[d.act]) { actions[d.act](); return; }
    if (d.slot) { st.slot = d.slot; render(false); return; }
    if (d.remove) { st.tried = st.tried.filter((k) => k !== d.remove); render(false); return; }
    if (d.rate) { st.rating = +d.rate; render(false); return; }
    if (d.tag) { st.tags = st.tags.includes(d.tag) ? st.tags.filter((x) => x !== d.tag) : st.tags.concat(d.tag); render(false); return; }
  });
  document.addEventListener("input", (e) => { if (e.target.id === "phone") st.phone = e.target.value; });

  // reviewer sheet on phones
  const review = document.getElementById("review");
  const toggle = document.getElementById("review-toggle");
  function closeReview() { review.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
  toggle.addEventListener("click", () => {
    const open = !review.classList.contains("is-open");
    review.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeReview(); });

  if (/[?&]lang=ur\b/.test(location.search)) st.lang = "ur";
  const fromHash = (location.hash || "").slice(1);
  const known = PRESETS.some((g) => g.items.some((i) => i.id === fromHash));
  preset(known ? fromHash : "support");
})();
