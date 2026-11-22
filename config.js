/* ============================================================
   CAM DYER SITE SETTINGS — this is the only file you edit.
   After editing, drag the whole folder onto your Netlify
   project's "Deploys" page to publish the update.
   ============================================================ */
window.SITE = {
  // Links (paste the full https:// address between the quotes)
  gofundme:  "https://gofund.me/92f08a1c0",
  instagram: "https://www.instagram.com/whytheyhatec/",
  tiktok:    "https://www.tiktok.com/@whytheyhatecj",
  facebook:  "",   // e.g. "https://www.facebook.com/camdyer"

  // YouTube: paste Cam's channel ID (starts with "UC...").
  // Once it's here, every video Cam uploads shows on the site automatically.
  youtube: "https://www.youtube.com/@camdyer8",
  youtubeChannelId: "UClAGJx7ALWgqb3xagr3TpMw",

  // 1,000-POINT WATCH: Cam's points and games THIS season (2026-27).
  // Update after every game. When his career total hits 1,000 the
  // "Certified Bucket" badge turns on at the top of the site automatically.
  seniorPoints: 44,
  seniorGames: 3,


  // PRO PROFILE: email scouts/agents should use (leave "" to hide)
  contactEmail: "",

  // FUNDRAISING STEPS shown under the donate button: [amount, "what it pays for"]
  // A step gets a green check once "raised" reaches it. Change to the real costs.
  milestones: [
    [1000, "Roster spot deposit for Portugal"],
    [3000, "Portugal trip & flights"],
    [4500, "Pro tryouts & exposure camps"],
    [6000, "Game film, tape & travel after graduation"],
  ],

  // WORDS OF SUPPORT from GoFundMe donors (section stays hidden until you add one)
  quotes: [
    // { name: "Aunt Lisa", text: "So proud of you Cam — go get it!" },
  ],

  // EXTRA PHOTOS: copy the photo into the photos folder, then add a line.
  // era is one of: "brockport", "niagara", "uprep", "summer"
  // Add  hero: true  to also put a solo photo of Cam in the rotating top image.
  // { file: "photos/new-pic.jpg", era: "brockport", caption: "Senior night", hero: true },
  photos: [
    // { file: "photos/senior-night.jpg", era: "brockport", caption: "Senior night" },
  ],


  // ===== ADVERTISING =====
  // Direct ads you sell yourself. slot is where it shows:
  //   "top"   = wide banner under the main photo      (best size 1940x250 or 970x125)
  //   "mid"   = wide banner above the schedule         (same size)
  //   "lower" = banner above the message wall         (wide, or size:"square" for 672x560)
  // Put the ad image in the photos folder, then add a line like:
  // { slot: "top", image: "photos/ad-joes-pizza.jpg", link: "https://joespizza.com", sponsor: "Joe's Pizza" },
  ads: [
  ],

  // Google AdSense (optional, after Google approves the site). Any slot without a
  // direct ad above shows an AdSense ad instead.
  adsense: {
    client: "",          // e.g. "ca-pub-1234567890123456"
    slots: {             // ad unit IDs from your AdSense account
      // top: "1111111111", mid: "2222222222", lower: "3333333333",
    },
  },

  // SPONSORS wall near the bottom of the page
  sponsorEmail: "",      // where businesses reach you about sponsoring
  sponsors: [
    // { name: "Joe's Pizza", logo: "photos/sponsor-joes.png", link: "https://joespizza.com", tier: "Gold" },
  ],

  // Amount raised on GoFundMe so far (number only, 0 hides the progress bar)
  raised: 1600,

  // GoFundMe goal (number only)
  goal: 6000,

  // CAM'S STATS + BOX SCORE for each game (shows next to the score on the schedule).
  // Cam's senior points/games for the 1,000 countdown are added up from here automatically.
  games: {
    g01: { pts: 13, reb: 2, ast: 2, box: "https://gobrockport.com/sports/mens-basketball/stats/2026-2027/suny-delhi/boxscore/12853" },
    g02: { pts: 16, reb: 6, ast: 1, box: "https://gobrockport.com/sports/mens-basketball/stats/2026-2027/suny-canton/boxscore/12854" },
    g03: { pts: 15, reb: 5, ast: 2, box: "https://gobrockport.com/sports/mens-basketball/stats/2026-2027/buffalo-state/boxscore/12855" },
  },

  // Final scores. Game numbers match the schedule (g01 = first game).
  results: {
    g01: "W 80-67",
    g02: "W 92-76",
    g03: "W 72-68",
  },

  // Vlogs hosted on this site. Newest games show first automatically.
  // For a YouTube video use:  youtube: "VIDEO_ID"  instead of file/poster.
  // Highlight reels on the Pro Profile, grouped by school.
  // school: "brockport" | "niagara" | "redrock" | "dixie" | "aau" | "uprep"
  // Use ONE of: file: "photos/clip.mp4" | youtube: "VIDEO_ID" | facebook: "https://www.facebook.com/.../videos/123/" | instagram: "REEL_CODE"
  // thumb is optional (an image in photos/).  Example:
  // { school: "dixie", title: "Dixie High senior highlights", youtube: "abc123", thumb: "dixie-8.jpg" },
  reels: [
  ],

  // ---------- MERCH / SHOP ----------
  // store: link to the whole store (Fourthwall etc.). Leave "" until the store is live —
  // buttons then say "Coming soon · Get notified". Give an item its own url to link it directly.
  store: "",
  merch: [
    { name: "Road to Overseas Hoodie", price: "$55", tag: "New",
      photo: "photos/merch/hoodie-front.jpg", photo2: "photos/merch/hoodie-back.jpg",
      desc: "Gold #8 on the chest, every stop of Cam's journey on the back, Certified Bucket down the sleeve. Heavyweight and warm.",
      sizes: ["S","M","L","XL","2XL","3XL"], url: "" },
    { name: "Dyer 8 Tee", price: "$30",
      photo: "photos/merch/tee-front.jpg", photo2: "photos/merch/tee-back.jpg",
      desc: "DYER and the gold #8 across the chest, the full Rochester-to-Portugal route on the back. Soft cotton.",
      sizes: ["S","M","L","XL","2XL","3XL"], url: "" },
    { name: "Certified Bucket 1K Tee", price: "$30", tag: "1K Club",
      photo: "photos/merch/bucket-front.jpg",
      desc: "The gold Certified Bucket seal for Cam's 1,000 college career points. Clean white tee.",
      sizes: ["S","M","L","XL","2XL","3XL"], url: "" },
    { name: "#8 Dyer Dad Hat", price: "$30",
      photo: "photos/merch/hat-front.jpg",
      desc: "Gold #8 badge and DYER embroidered on a black adjustable dad hat. One size fits most.",
      sizes: ["One size"], url: "" },
    { name: "Road to Overseas Sticker", price: "$5",
      photo: "photos/merch/sticker.jpg",
      desc: "Waterproof 3\" die-cut vinyl for your laptop, bottle or gym bag.",
      url: "" }
  ],

  vlogs: [
    { game: "g01", title: "Road to Overseas — Day 1",
      caption: "Season opener at SUNY Delhi: the drive, the locker room, warmups and the first W of senior year.",
      file: "videos/day1.mp4", poster: "videos/day1.jpg" },
    { game: "g02", title: "Road to Overseas — Day 2",
      caption: "Suited up on the bus to Canton — pregame meal, getting ready, and then it's game time.",
      file: "videos/day2.mp4", poster: "videos/day2.jpg" },
  ],

  // Favorite messages from the feedback form to show on the Hype Wall
  shoutouts: [
    // { name: "Coach Mike", react: "🔥", text: "Proud of you, keep grinding!" },
  ],
};
