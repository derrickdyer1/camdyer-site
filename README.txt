CAM DYER WEBSITE — HOW TO PUBLISH AND UPDATE
============================================

GO LIVE (one time, about 5 minutes)
1. Unzip this folder.
2. Go to https://app.netlify.com/drop and drag the whole "camsite" folder onto the page.
3. Netlify gives you a live link right away. Create a free account to claim the site
   so it stays up (otherwise it expires).
4. Optional: in Netlify, Domain management > Add a domain to buy or connect something
   like camdyer.com.
5. Feedback messages show up in Netlify under Forms. Turn on email notifications there
   so you get each message in your inbox.

UPDATE THE SITE
- Everything you change lives in config.js (links, YouTube channel, amount raised,
  scores, vlogs, shout-outs). Open it in any text editor (Notepad / TextEdit).
- Then in Netlify open the site > Deploys and drag the folder onto the drop area.

ONCE CAM HAS A YOUTUBE CHANNEL (easiest long-term)
- Put his channel ID (starts with UC...) in config.js under youtubeChannelId.
- From then on Cam just uploads to YouTube. The site shows his latest videos
  automatically - no more editing or re-uploading.
- To feature a specific YouTube video as a gameday vlog card, add it to "vlogs" with
  youtube: "VIDEO_ID" (the part after watch?v= or shorts/).

1,000-POINT WATCH
- After each game, update seniorPoints and seniorGames in config.js (from
  gobrockport.com > Men's Basketball > Stats) and re-drag the folder.
- When Cam's career total reaches 1,000, the gold "Certified Bucket" banner and seal
  turn on at the top of the site by themselves.
- To preview the badge any time, add #bucket-preview to the end of the site address.

SHARE PREVIEW (how the link looks on Facebook/Instagram/texts)
- After the site is live, open index.html and change content="share.jpg" in the
  og:image line to the full address, e.g. content="https://camdyer.com/share.jpg".

ADDING NEW STUFF (the easy way)
- VIDEOS: once the YouTube channel is connected, Cam just uploads to YouTube. Done.
- PHOTOS: copy the photo into the "photos" folder and add one line under "photos" in
  config.js, then re-drag the folder onto Netlify. Or send the photos to Claude and get
  an updated folder back.
- STATS / SCORES / AMOUNT RAISED: edit config.js (seniorPoints, seniorGames, results,
  raised) and re-drag the folder.
See YOUTUBE-SETUP.txt to start the channel.


ADS & SPONSORS
- Sell an ad: put the ad image in photos/ and add a line under "ads" in config.js
  (slots: top, mid, lower). Empty slots stay hidden.
- Sponsor logos go under "sponsors"; the "Your business here" card is always shown.
- Google AdSense: once approved, put your ca-pub ID and ad unit IDs under "adsense".
