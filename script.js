const movies = [
  {
    title: "Agent Sai Srinivasa Athreya",
    genre: "Comedy, Thriller",
    description: "A small-time detective gets involved in a complex case that challenges his investigative skills.",
    rating: 8.4,
    poster: "https://m.media-amazon.com/images/M/MV5BOTljNDVhYTUtMzMyNi00NzEzLTgxYjQtODVlZDc1MGU3ZmMyXkEyXkFqcGc@.V1.jpg"
  },
  {
    title: "Pelli Choopulu",
    genre: "Comedy, Drama, Romance",
    description: "A boy and girl meet during a matchmaking event and pursue their dreams together.",
    rating: 8.2,
    poster: "https://cinemachaat.com/wp-content/uploads/2016/07/pellichoopulu-poster.jpg"
  },
  {
    title: "Jathi Ratnalu",
    genre: "Comedy, Drama",
    description: "Three naive friends from a small town move to the city and get caught in a political conspiracy.",
    rating: 7.3,
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jathi-ratnalu-et00305719-23-02-2021-02-59-47.jpg"
  },
  {
    title: "Ante Sundaraniki",
    genre: "Romantic,Comedy",
    description: "An interfaith couple devises a plan to convince their families for marriage.",
    rating: 7.6,
    poster: "https://telugu.samayam.com/thumb/92636670/ante-sundaraniki-92636670.jpg"
  },
  {
    title: "Mathu Vadalara",
    genre: "Comedy, Thriller",
    description: "A delivery boy's side hustle leads him into a mess of confusion and crime.",
    rating: 8.2,
    poster: "https://images.filmibeat.com/img/popcorn/movie_posters/mathuvadalara-20191227094302-18888.jpg"
  },
  {
    title: "Ready",
    genre: "Action, Comedy, Drama",
    description: "A man helps his friend elope, leading to comedic and action-packed chaos.",
    rating: 7.3,
    poster: "https://m.media-amazon.com/images/M/MV5BNmJmOWMzOGItNjQxZi00YjU5LTliMWItMTYwYzdmNWQ0ZGQyXkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Brochevarevarura",
    genre: "Comedy, Crime,Thriller",
    description: "Three friends get entangled in a kidnapping plot gone wrong.",
    rating: 8.0,
    poster: "https://m.media-amazon.com/images/M/MV5BNGI2OTM3N2YtMmE1ZS00ZTEyLThiMzEtNjAwMmQ4N2ZhYTFkXkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Bhale Bhale Magadivoy",
    genre: "Romantic, Comedy",
    description: "An absent-minded botanist tries to hide his forgetfulness from his lover.",
    rating: 7.7,
    poster: "https://sasikanth.me/wp-content/uploads/2015/09/Bale-Bale-Magadivoy.jpg"
  },
  {
    title: "Venky",
    genre: "Comedy, Crime, Thriller",
    description: "A man on a train journey becomes a suspect in a murder investigation.",
    rating: 7.8,
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6a/Venky_Poster.jpg"
  },
  {
    title: "Nuvvu Naaku Nachav",
    genre: "Comedy, Family",
    description: "Venky falls in love with an engaged woman, resulting in hilarious situations.",
    rating: 8.8,
    poster: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/2829/552829-h"
  },
  {
    title: "Manmadhudu",
    genre: "Romantic, Comedy",
    description: "A misogynistic ad agency manager is forced to work with a woman, changing his view on love.",
    rating: 8.3,
    poster: "https://www.dishadaily.com/h-upload/2023/08/29/254185-n.webp"
  },
  {
    title: "Malliswari",
    genre: "Romantic ,Comedy",
    description: "A wealthy heiress in hiding falls in love with a banker.",
    rating: 7.8,
    poster: "https://upload.wikimedia.org/wikipedia/en/8/8c/Malliswari_poster.jpg"
  },
  {
    title: "Athadu",
    genre: "Action, Thriller",
    description: "A professional killer is framed for murder and assumes a new identity to evade the law.",
    rating: 8.2,
    poster: "https://cinemachaat.com/wp-content/uploads/2010/09/athadu.jpg"
  },
  {
    title: "Dhee",
    genre: "Action, Comedy",
    description: "A man joins a local don’s gang and falls in love with the don's sister, causing chaos.",
    rating: 7.2,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/199b2d25285820aed77d67a7ffde30b4cc130bf33eb583c3f513d194fdf95ecf.jpg"
  },
  {
    title: "Ashta Chamma",
    genre: "Comedy, Romance",
    description: "A girl obsessed with Mahesh Babu looks for a man with the same name.",
    rating: 7.4,
    poster: "https://diey8xpfs90ha.cloudfront.net/wp-content/uploads/2024/03/ashta-chamma-1024x576.jpg"
  },
  {
    title: "Maryada Ramanna",
    genre: "Action, Comedy",
    description: "A man visits his ancestral home unaware that the family wants revenge on him.",
    rating: 7.4,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/b57f07e998eebaf936a638dd329431a507655919d2a144314722e09a5cb9b90c.jpg"
  },
  {
    title: "Julayi",
    genre: "Action, Comedy",
    description: "A witty guy thwarts a bank robbery and gets into a cat-and-mouse game with a criminal.",
    rating: 7.2,
    poster: "https://i.ytimg.com/vi/YzmjCwPiLbk/hq720.jpg"
  },
  {
    title: "Oohalu Gusagusalade",
    genre: "Romantic, Comedy",
    description: "A man ghostwrites for his boss to woo a girl who turns out to be his ex-lover.",
    rating: 7.6,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/6709ec20afefe7a25fbab680df31961e9951d143918e47a4b90995fdcd27ca44.jpg"
  },
  {
    title: "Sontham",
    genre: "Comedy, Drama",
    description: "Friends navigate through love and fun after graduation.",
    rating: 7.4,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/b2375b6d347fa144ca73a2a2102d4505b2823b4555eb198d937c68e4cbc45eea._SX1080_FMjpg_.jpg"
  },
  {
    title: "Ami Thumi",
    genre: "Comedy, Romance",
    description: "A romantic confusion between couples leads to humorous consequences.",
    rating: 7.0,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMnUL2Hb41_zzlVDGnPb4Q4NAW9piro6dcg&s"
  },
  {
    title: "Eedo Rakam Aado Rakam",
    genre: "Comedy, Romance",
    description: "Two friends lie to their girlfriends and end up marrying each other's sisters.",
    rating: 6.8,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKL3GG0u3rPdmzmBMDJkjJUoU8ylVrSroIHg&s"
  },
  {
    title: "Sudigadu",
    genre: "Comedy, Action",
    description: "A spoof movie mocking all popular Telugu movie clichés.",
    rating: 7.3,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYrN_yPQhaJhsAhi5fWpCG-A50jXcN6IgHg&s"
  }
];
movies.push(
  {
    title: "Gunde Jaari Gallanthayyinde",
    genre: "Romantic Comedy",
    description: "A love story that begins with a wrong number and unfolds into chaos.",
    rating: 7.2,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/2c59c103a8dd5334bc90a41db5ae100852d2af401448a3764363d0c69c31c346.png"
  },
  {
    title: "Manchi Rojulochaie",
    genre: "Comedy, Drama",
    description: "A man navigates love, relationships, and society’s expectations.",
    rating: 6.9,
    poster: "https://content.tupaki.com/twdata/2021/1121/news/Manchi-Rojulu-Vachayi-Movie-Review-1635998363-1497.jpg"
  },
  {
    title: "Cinema Choopistha Mava",
    genre: "Romantic, Comedy",
    description: "A boy tries to win over his girlfriend’s strict father.",
    rating: 6.8,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHVApmYQ3e5irFnO7q00PsLb3y5mdsIpAGQ&s"
  },
  {
    title: "Okkadu",
    genre: "Action, Drama, Romance",
    description: "A Kabbadi player rescues a young woman from an unwanted marriage and hides her in his home.",
    rating: 8.0,
    poster: "https://sund-images.sunnxt.com/10645/1000x1500_Okkadu_10645_9207d5db-01d0-4930-981a-e7da4e777cd3.jpg"
  },
  {
    title: "1: Nenokkadine",
    genre: "Action, Thriller",
    description: "A rock star must overcome his psychological inhibitions to seek revenge for his parents' death.",
    rating: 8.0,
    poster: "https://jiotvimages.cdn.jio.com/imagespublic/96/77/29d7757e054a50e3a89652872e8d8ed8_1703283633619_l_medium.jpg"
  },
  {
    title: "Goodachari",
    genre: "Action, Thriller",
    description: "An intelligence officer embarks on a mission to uncover the truth about his father's death.",
    rating: 7.8,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/abc07da34427f951671503171ce9ad4d0256f4d4d90198fabdb5111f6bdd8654.jpg"
  },
  {
    title: "Magadheera",
    genre: "Action, Drama, Fantasy,Historical",
    description: "A warrior reincarnates after 400 years to fulfill his promise to his lover and avenge his death.",
    rating: 7.7,
    poster: "https://in.bmscdn.com/events/moviecard/ET00003498.jpg"
  },
  {
    title: "Simha",
    genre: "Action, Drama",
    description: "A professor with a violent past returns home to protect his family from a ruthless villain.",
    rating: 6.8,
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/simha-et00004652-1678085861.jpg"
  },
  {
    title: "Pokiri",
    genre: "Action, Crime, Thriller",
    description: "An undercover cop infiltrates a mafia gang to end their illegal activities.",
    rating: 7.9,
    poster: "https://tracktollywood.com/wp-content/smush-webp/2020/04/test_pic1538735138946.jpg.webp"
  },
  {
    title: "Eega",
    genre: "Action, Comedy, Fantasy",
    description: "A murdered man is reincarnated as a housefly and seeks revenge on his killer.",
    rating: 7.7,
    poster: "https://m.media-amazon.com/images/M/MV5BMTA0MDFmMDMtMTE5OC00YWQ0LWIwZTUtOWIwMjk4Yjc3NGY1XkEyXkFqcGc@.V1.jpg"
  },
  {
    title: "Baahubali: The Beginning",
    genre: "Action, Drama,Historical",
    description: "A young man discovers his royal heritage and sets out to reclaim his kingdom.",
    rating: 8.0,
    poster: "https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/041019031925bahubali.jpg"
  },
  {
    title: "Baahubali 2: The Conclusion",
    genre: "Action, Drama,Historical",
    description: "The son of a slain prince continues his quest to avenge his father's death and restore the kingdom.",
    rating: 8.2,
    poster: "https://www.moople.in/blog/wp-content/uploads/2018/02/bah-28.jpg"
  },
  {
    title: "Rangasthalam",
    genre: "Action, Drama,Love,Brother sentiment",
    description: "Set in the 1980s, a hearing-impaired man stands against a tyrannical village president to bring justice.",
    rating: 8.4,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/798fa523a1729f4f2e81ef55f51d91c8b12c4ddd7feede2219be3fe611433e95.jpg"
  },
  {
    title: "Janatha Garage",
    genre: "Action, Drama",
    description: "An environmental activist joins a family-run garage that operates as a vigilante group.",
    rating: 7.3,
    poster: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00042076-chgglgwkcu-portrait.jpg"
  },
  {
    title: "Gabbar Singh",
    genre: "Action, Comedy,Love",
    description: "A rebellious police officer takes on a notorious criminal in his town.",
    rating: 7.1,
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gabbar-singh-telugu-et00007159-1665126274.jpg"
  },
  {
    title: "Dhruva",
    genre: "Action, Thriller,Love",
    description: "An IPS officer sets out to take down a corrupt scientist involved in illegal activities.",
    rating: 7.9,
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dhruva-et00043013-17-04-2017-17-57-44.jpg"
  },
  {
    title: "Manam",
    genre: "Comedy, Drama, Fantasy , Family,Emotion",
    description: "A magical tale where a family discovers the mysteries of reincarnation and eternal love.",
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/original/lE9abet9ezwSUXZf0UV6dk0NT0e.jpg"
  },
  {
    title: "Happy Days",
    genre: "Drama, Musical, Romance",
    description: "Chronicles the lives of eight friends through their college years, capturing the essence of youth.",
    rating: 7.8,
    poster: "https://m.media-amazon.com/images/M/MV5BNzUzMmM1YWQtZGEyNi00M2RjLTg2MzYtYTBlNjM2NzYwNzBmXkEyXkFqcGc@.V1.jpg"
  },
  {
    title: "Prasthanam",
    genre: "Action, Drama",
    description: "A political drama exploring the complex dynamics of power, loyalty, and betrayal within a family.",
    rating: 8.2,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRoQ-CtnRpmURlaIUOg6KXTjSIcu0e6gAfw&s"
  },
  {
    title: "Leader",
    genre: "Drama",
    description: "An idealistic young man enters politics to fulfill his father's dying wish and confronts deep-rooted corruption.",
    rating: 8.0,
    poster: "https://content.tupaki.com/en/feeds/2023/09/14/157431-cvvbs7ub.webp"
  }
);

movies.push(
  {
    title: "Srimanthudu",
    genre: "Action, Drama",
    description: "A wealthy businessman adopts a village to bring about developmental changes, facing numerous challenges.",
    rating: 7.5,
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/srimanthudu-et00031158-01-12-2019-04-10-00.jpg"
  },
  {
    title: "Seethamma Vakitlo Sirimalle Chettu",
    genre: "Drama, Family,Brother sentiment",
    description: "A heartwarming tale of two brothers navigating love and family values in a traditional household.",
    rating: 7.5,
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/seethamma-vakitlo-sirimalle-chettu-et00010088-24-03-2017-19-47-54.jpg"
  },
  {
    title: "Sita Ramam",
    genre: "Drama, Mystery, Romance",
    description: "An orphaned soldier's life changes when he receives a letter from a woman named Sita.",
    rating: 8.5,
    poster: "https://bollyspice.com/wp-content/uploads/2022/08/48AED85D-15A7-4604-B854-81FD54DBDA18.jpeg"
  },
  {
    title: "Arjun Reddy",
    genre: "Action, Drama, Romance ,Love",
    description: "A hot-headed surgeon's life spirals out of control after his girlfriend is forced to marry someone else.",
    rating: 7.9,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/79a8a69e853daef866c405bcf2b1253df311463f1bd246cafccda81f173d8fba.jpg"
  },
  {
    title: "Fidaa",
    genre: "Drama, Romance,Love",
    description: "An NRI falls in love with a village girl, leading to cultural clashes and personal challenges.",
    rating: 7.4,
    poster: "https://i.ytimg.com/vi/yiiGeMjCY7c/maxresdefault.jpg"
  },
  {
    title: "Orange",
    genre: "Drama, Romance,Love",
    description: "A man who doesn't believe in everlasting love pursues a romantic woman, leading to conflicts.",
    rating: 6.7,
    poster: "https://i.pinimg.com/736x/e8/e0/eb/e8e0eb5d61e9902c5fcc0837ac7a61f4.jpg"
  },
  {
    title: "Arya",
    genre: "Action, Comedy, Romance",
    description: "A free-spirited man relentlessly pursues a woman who is already in a relationship.",
    rating: 7.8,
    poster: "https://sund-images.sunnxt.com/9915/1000x1500_d6b3b3dd-1ee2-4af6-8f22-3b64d4956c52.jpg"
  },
  {
    title: "100% Love",
    genre: "Comedy, Drama, Romance",
    description: "Cross-cousins Balu and Mahalakshmi share a love-hate relationship filled with competitiveness.",
    rating: 7.6,
    poster: "https://suryasrikanth68.wordpress.com/wp-content/uploads/2011/08/100_love_usa.jpg"
  },
  {
    title: "Ye Maaya Chesave",
    genre: "Drama, Romance",
    description: "An aspiring filmmaker falls in love with a woman from a strict family, leading to complications.",
    rating: 7.7,
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ye-maaya-chesaave-et00004321-24-03-2017-19-43-09.jpg"
  },
  {
    title: "Geethanjali",
    genre: "Drama, Romance",
    description: "A terminally ill man falls in love with a woman who shares his fate, leading to a poignant romance.",
    rating: 8.3,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRZ_iDZ2ETOt5bID2niKBAqytib7Rwzhj5A&s"
  },
  {
    title: "Karthikeya",
    genre: "Mystery, Thriller",
    description: "A curious medico investigates mysterious events surrounding a closed temple in a village.",
    rating: 7.4,
    poster: "https://m.media-amazon.com/images/M/MV5BZTE4Y2NmYTMtZDFkNi00NDBhLTk0OGQtNjMzYzgwNWVkNzhiXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg"
  },
  {
    title: "Drushyam",
    genre: "Crime, Drama, Thriller",
    description: "A cable TV operator's family becomes the prime suspect when a police officer's son goes missing.",
    rating: 8.3,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfWvD_5CJ_QDGqmlGTVqlRvdBXYD9XLNdyg"
  },
  {
    title: "Anukokunda Oka Roju",
    genre: "Mystery, Thriller",
    description: "A woman experiences strange occurrences and realizes she has lost a day in her life.",
    rating: 7.9,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5PUjHWzQv2dLw8ZoIQyLU178LjvzLmaAuw"
  },
  {
    title: "Evaru",
    genre: "Crime, Drama, Mystery",
    description: "A corrupt cop investigates a woman's self-defense claim in the murder of a high-ranking officer.",
    rating: 8.1,
    poster: "https://resizing.flixster.com/PuttOi5dUx5LbqpC6nT1VWUokrg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17231490_v_h9_ab.jpg"
  },
  {
    title: "16 Every Detail Counts",
    genre: "Crime, Thriller",
    description: "An investigation into a missing case intertwines multiple stories, revealing unexpected connections.",
    rating: 8.2,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/8485ffab1db3f8aa49d66a7da60575b61cea9eb3717b73698b85d83c6111b5bb.jpg"
  },
  {
    title: "Kshanam",
    genre: "Mystery, Thriller",
    description: "A man returns from the USA to help his ex-girlfriend find her kidnapped daughter.",
    rating: 8.3,
    poster: "https://sund-images.sunnxt.com/7759/1920x1080_Kshanam_7759_0079999a-b3ea-4831-ab59-9d255410f4e1.jpg"
  },
  {
    title: "Rakshasudu",
    genre: "Action, Crime, Thriller",
    description: "A newly appointed police officer tracks down a notorious serial killer targeting young girls.",
    rating: 8.0,
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rakshasudu-et00101842-30-04-2019-06-19-17.jpg"
  },
  {
    title: "Drushyam 2",
    genre: "Crime, Drama, Thriller",
    description: "The sequel follows Rambabu as he faces new challenges to protect his family from the law.",
    rating: 8.4,
    poster: "https://cdn.telugu360.com/wp-content/uploads/2021/11/Drushyam2-1.jpg"
  }
);
movies.push(
  {
    title: "Arundhati",
    genre: "Horror, Mystery, Thriller",
    description: "A brave queen battles an evil mystic. Generations later, he returns to haunt her descendants.",
    rating: 7.4,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5pMTxln7CHjsvhSyqsbNZa00yAM7jc45ibA&s"
  },
  {
    title: "Masooda",
    genre: "Horror, Thriller",
    description: "A single mother and her daughter confront an evil force with the help of their neighbor.",
    rating: 7.2,
    poster: "https://pbs.twimg.com/media/Fk0Jo_yakAEVmYC.jpg"
  },
  {
    title: "Virupaksha",
    genre: "Action, Drama, Horror",
    description: "Mysterious deaths occur in a village due to occult practices, instilling fear among the residents.",
    rating: 7.2,
    poster: "https://cdn.gulte.com/wp-content/uploads/2023/04/SDT.jpg"
  },
  {
    title: "Prema Katha Chitram",
    genre: "Drama, Horror",
    description: "Three friends and a stranger plan to commit suicide in a house, only to realize it's haunted.",
    rating: 7.1,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/4487da0d232fb5e07879be3b313d2f30f32b9962b7518561b013c82e570723a6.jpg"
  },
  {
    title: "Bhaagamathie",
    genre: "Thriller, Horror",
    description: "An IAS officer is imprisoned in a haunted house while being interrogated in a corruption case.",
    rating: 7.0,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/7084098310296869ca404e7cc59376c9de0cc724412680f14c852f54e4d7c1b9.jpg"
  },
  {
    title: "Anando Brahma",
    genre: "Comedy, Horror",
    description: "To sell a haunted house, its owner challenges four men to spend a night there, leading to unexpected events.",
    rating: 6.7,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToAch9nSP3_J_twvL5qidMm30bcTMUtGZFAw&s"
  },
  {
    title: "Kanchana",
    genre: "Horror, Comedy",
    description: "A man becomes possessed by a vengeful transgender ghost seeking justice.",
    rating: 6.6,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1gJPslD0jKIPRh3TvIs_X-oFn45l4hAbEA&s"
  },
  {
    title: "Ekkadiki Pothavu Chinnavada",
    genre: "Romance, Thriller",
    description: "A man's life turns chaotic when he encounters a spirit seeking closure.",
    rating: 7.0,
    poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13466086_p_v10_aa.jpg"
  },
  {
    title: "Avunu",
    genre: "Horror, Thriller",
    description: "A newlywed couple's life turns nightmarish when they realize their house is haunted by a spirit.",
    rating: 6.2,
    poster: "https://m.media-amazon.com/images/M/MV5BMTcyNDczNjA2MF5BMl5BanBnXkFtZTgwNjEwMTg3NjE@.V1.jpg"
  }
);

movies.push(
{
    title: "Bommarillu",
    genre: "Family,Love",
    description: "A young man struggles to assert his independence from his overbearing father, leading to a journey of self-discovery.",
    rating: 8.0,
    poster: "https://lh5.googleusercontent.com/proxy/v4rTr_gI27-HKoBfoQ8W-lp9aLDKU0pJw76wgP-OwlEGSKO9fYS3Cmzo4r0cM3ztEhqAzDn3DMJbrOvIbGq76nikbYWYo2GV5NZwwvcxE3KBYeMOzzXX"
},
{
    title: "Eega",
    genre: "Family,Love,Revenge",
    description: "After being murdered by a ruthless businessman, a man is reincarnated as a housefly and seeks revenge.",
    rating: 7.7,
    poster: "https://m.media-amazon.com/images/M/MV5BMTA0MDFmMDMtMTE5OC00YWQ0LWIwZTUtOWIwMjk4Yjc3NGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    title: "Attarintiki Daredi",
    genre: "Family,comedy,Love",
    description: "A grandson embarks on a journey to reconcile with his estranged grandmother, while dealing with family secrets and relationships.",
    rating: 7.9,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_COUVFpFiquVR8pfi6HOApPllchRs0ELDw&s"
},
{
    title: "Sye",
    genre: "Family",
    description: "Two students from rival colleges come together to play rugby and bring about change in their lives and their respective colleges.",
    rating: 7.7,
    poster: "https://upload.wikimedia.org/wikipedia/en/c/ca/Sye_2004_poster.jpg"
},
{
    title: "Nuvvu Nenu",
    genre: "Family",
    description: "The life of a young couple, exploring their struggles, challenges, and journey through different phases of their relationship.",
    rating: 7.6,
    poster: "https://cinemasonly.com/public/uploads_big/pF9vCN0Uue13K6xWCRuE27xwvtx00h6SKulpaV9F.jpeg"
},
{
    title: "Jalsa",
    genre: "Family,Love",
    description: "A man who has a carefree life is forced to face a series of challenges when his estranged father’s problems spill into his life.",
    rating: 7.6,
    poster: "https://sund-images.sunnxt.com/113648/1920x1080_Jalsa_113648_6b5193e5-b877-4997-8fd3-1c0c2a4daa3f.jpg"
},
{
    title: "Uppena",
    genre: "Family,Love,Romance",
    description: "A love story that explores caste differences, family expectations, and the sacrifices one has to make for true love.",
    rating: 7.4,
    poster: "https://popcornreviewss.com/wp-content/uploads/2021/04/Uppena-2021-Telugu-Romantic-Movie-review.jpg"
},
{
    title: "F2: Fun and Frustration",
    genre: "Family",
    description: "A hilarious take on the problems faced by married men, balancing work, relationships, and personal aspirations.",
    rating: 7.3,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/97fadd85bf9fb1773df366d8db49cbc2dd24618e0adad53fcfcd6584d45a1ab7.jpg"
},
{
    title: "S/O Satyamurthy",
    genre: "Family",
    description: "A family drama where a man must take over his father’s responsibilities while dealing with the expectations and issues of his own family.",
    rating: 7.6,
    poster: "https://content.tupaki.com/twdata/2015/0415/news/Movie-Review--S-o-Satyamurthy--By-Hapra--113.jpg"
}
);

movies.push(
  {
    title: "Jersey",
    genre: "Sports,Drama,Emotion",
    description: "A failed cricketer decides to return to the sport in his late 30s for his son's wish, leading to an emotional journey of redemption and fatherhood.",
    rating: 8.5,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTPyGblgbUcR4DjtF_i7bzcywf1m0690j4Q&s"
},
{
    title: "Malli Raava",
    genre: "Romantic,Drama",
    description: "A tale of childhood sweethearts who drift apart and reunite, exploring the complexities of love and timing.",
    rating: 7.6,
    poster: "https://sund-images.sunnxt.com/72206/1000x1500_MalliRaava_72206_b0b178e6-d015-47db-a23a-618b939b3ae5.jpg"
},
{
    title: "Ninnu Kori",
    genre: "Romantic, Drama,Emotion",
    description: "A story about love, sacrifice, and moving on, as a man grapples with his past relationship after his ex-girlfriend marries someone else.",
    rating: 7.6,
    poster: "https://telugu.filmibeat.com/img/2017/07/ninnu-kori-review-680-07-1499433320.jpg"
},
{
    title: "Hi Nanna",
    genre: "Family, Drama,Emotion",
    description: "A touching narrative focusing on the bond between a father and his daughter, delving into themes of love and loss.",
    rating: 7.5,
    poster: "https://www.fridaywall.com/wp-content/uploads/2023/12/Hi-Nanna-1.webp"
},
{
    title: "Malli Malli Idi Rani Roju",
    genre: "Romantic, Drama",
    description: "A romantic saga that spans decades, highlighting the enduring nature of true love amidst life's challenges.",
    rating: 7.6,
    poster: "https://i.ytimg.com/vi/VG0yKubtGuE/maxresdefault.jpg"
},
{
    title: "Tholi Prema",
    genre: "Romantic, Drama",
    description: "A young man's journey through love and self-discovery, dealing with the highs and lows of a passionate relationship.",
    rating: 7.2,
    poster: "https://sund-images.sunnxt.com/72211/640x360_TholiPrema_72211_8d3a9a5a-8b53-4dbe-aeb5-66ec631f6937.jpg"
},
{
    title: "Balagam",
    genre: "Family ,Drama",
    description: "Set in rural Telangana, the film portrays family dynamics and traditions following the death of a patriarch, emphasizing emotional connections and community.",
    rating: 7.8,
    poster: "https://sund-images.sunnxt.com/201605/1920x1080_BalagamTrailer_201605_04a652a9-f9f4-456b-abbd-c8cbdcdb7bfb.jpg"
},
{
    title: "Vedam",
    genre: "Drama",
    description: "An anthology of interconnected stories, each depicting different facets of society, culminating in a powerful climax.",
    rating: 8.1,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfnRucMdJzWvYE8qgJQNRb-mXOum66zE-sA&s"
},
{
  title: "Bhadrachalam",
  genre: "Sports ,Action",
  description: "A strong and capable man is trained in Taekwondo by a coach to become a champion, overcoming personal and societal challenges.",
  rating: 7.2,
  poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Bhadrachalam_%28film%29.jpg/250px-Bhadrachalam_%28film%29.jpg"
},
{
  title: "Seetimaarr",
  genre: "Sports, Drama",
  description: "A bank manager coaches a women's Kabaddi team to fulfill his father's dream of opening a sports academy, facing numerous challenges along the way.",
  rating: 6.9,
  poster: "https://assets-in.bmscdn.com/discovery-catalog/events/et00124885-agrzfgtfrx-landscape.jpg"
},
{
  title: "A1 Express",
  genre: "Sports, Drama",
  description: "A former hockey player fights against corruption and nepotism in sports to save a local ground from corporate exploitation.",
  rating: 6.7,
  poster: "https://sund-images.sunnxt.com/117166/1600x1200_A1Express_117166_b7e81427-e570-40c1-9ddf-c981f9410a34.jpg"
},
{
  title: "Thammudu",
  genre: "Sports ,Action",
  description: "A carefree youth transforms into a kickboxing champion to avenge his brother's defeat and win the love of his life.",
  rating: 7.5,
  poster: "https://i.ytimg.com/vi/mka9f5I5eSU/maxresdefault.jpg"
},
{
  title: "Nannaku Prematho",
  genre: "Action, Drama,Father sentiment ",
  description: "A son embarks on a strategic mission to avenge his terminally ill father's past betrayal, navigating complex emotions and corporate warfare.",
  rating: 7.6,
  poster: "https://cdn.telugu360.com/wp-content/uploads/2015/11/NannakuPrematho.jpg"
},
{
  title: "Sathamanam Bhavati",
  genre: "Family, Drama,Village,Father Sentiment",
  description: "An elderly couple's desire to reunite their children during a festival leads to reflections on tradition, technology, and family values.",
  rating: 7.3,
  poster: "https://akamaividz2.zee5.com/image/upload/w_480,h_270,c_scale,f_webp,q_auto:eco/resources/0-0-2712/list/sathamanambhavathi740x416.jpg"
},
{
  title: "Entha Manchivaadavuraa",
  genre: "Family, Action,Father Sentiment",
  description: "A compassionate man provides emotional support to those in need, highlighting the essence of relationships and the significance of fatherly love.",
  rating: 6.5,
  poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/entha-manchivaadavuraa-et00114153-09-10-2019-02-31-20.jpg"
},
{
  title: "Rangamarthanda",
  genre: "Drama,Father Sentiment",
  description: "A retired theater artist divides his wealth among his children, only to face neglect, shedding light on the complexities of familial relationships.",
  rating: 8.2,
  poster: "https://cdn.gulte.com/wp-content/uploads/2023/03/%E0%B1%80%E0%B1%8B%E0%B0%B2%E0%B1%81%E0%B1%8B%E0%B0%B8%E0%B1%8B%E0%B1%80%E0%B1%82%E0%B0%AA%E0%B1%8B%E0%B0%B2%E0%B1%8D%E0%B1%8B.jpg"
},
{
  title: "Surya S/o Krishnan",
  genre: "Drama,Father Sentiment",
  description: "A son's journey through life, influenced profoundly by his father's values and teachings, highlighting their unbreakable bond.",
  rating: 8.2,
  poster: "https://assets-in.bmscdn.com/discovery-catalog/events/et00002203-znrjyklbys-landscape.jpg"
},
{
  title: "Bichagadu",
  genre: "Drama,Mother Sentiment",
  description: "A wealthy businessman undertakes a 48-day journey as a beggar to save his ailing mother, showcasing the depths of a son's love and sacrifice.",
  rating: 7.6,
  poster: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201607/bicha_647_070416125857.jpg?VersionId=D4DXNvOX0eTwKM.BWE1EtIGyBHzhwuiw"
},
{
  title: "Amma Cheppindi",
  genre: "Drama,Mother Sentiment",
  description: "A mentally challenged young man, guided by his mother's love, makes the ultimate sacrifice to save his community from a terrorist threat.",
  rating: 7.5,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVk5BH0Urn4_jZeN-eAGJC4V2QqbQItzZOdA&s"
},
{
  title: "Amma Nanna O Tamila Ammayi",
  genre: "Drama, Sports,Mother Sentiment",
  description: "After his mother's death, a young kickboxer seeks out his estranged father, navigating the complexities of family and identity.",
  rating: 7.3,
  poster: "https://sund-images.sunnxt.com/189150/640x360_AmmaNannaOTamilaAmmayi_189150_7596a7aa-afc9-467e-acdf-d6fad2c38570.jpg"
},
{
  title: "Chatrapathi",
  genre: "Action, Drama,Mother Sentiment",
  description: "Separated from his mother during childhood, a young man rises to become a leader while yearning for a reunion with his beloved mother.",
  rating: 7.4,
  poster: "https://i.ytimg.com/vi/28T8cSA6FGY/maxresdefault.jpg"
},
{
  title: "Itlu Amma",
  genre: "Drama, Crime,Mother Sentiment",
  description: "A mother's relentless pursuit of justice after her son's tragic death showcases her strength and determination.",
  rating: 8.3,
  poster: "https://www.sakshi.com/styles/webp/s3/article_images/2021/10/8/itlu%20amma.jpg.webp?itok=7OxfZv6R"
},
{
  title: "Raghuvaran B.Tech",
  genre: "Drama,Mother Sentiment",
  description: "An unemployed engineer's journey to success is deeply influenced by his mother's unwavering support and guidance.",
  rating: 7.6,
  poster: "https://assets-in.bmscdn.com/discovery-catalog/events/et00027172-pqqwjczeyf-landscape.jpg"
},
{
  title: "Naani",
  genre: "Fantasy, Drama,Mother Sentiment",
  description: "A mischievous boy transformed into an adult learns the value of his mother's love and strives to reunite with her.",
  rating: 6.8,
  poster: "https://upload.wikimedia.org/wikipedia/te/a/a8/Naani_%28movie_poster%29.jpg"
},
{
  title: "Yogi",
  genre: "Action, Drama,Mother sentiment",
  description: "A young man's quest for a better life leads to unintended consequences, culminating in a poignant tale of a mother's love and loss.",
  rating: 6.5,
  poster: "https://daex9l847wg3n.cloudfront.net/shemoutputimages/Yogi/65afc11dc47b719c10089490/large_16_9_1705908951.webp"
},
{
  title: "Aditya 369",
  genre: "Science Fiction, Adventure",
  description: "A time-travel adventure where a scientist and a young boy journey through different eras, including the future and the past, to prevent a nuclear disaster.",
  rating: 8.1,
  poster: "https://etv-win-image.akamaized.net/etvwin/telugumovies/aditya369/42733/aditya-369-Aditya_369_Movie-320x240.jpg"
},
{
  title: "Kalki 2898 AD",
  genre: "Science Fiction, Mythological",
  description: "Set in a dystopian future, the film follows the journey of a modern-day avatar of Vishnu, who descends to Earth to protect the world from evil forces.",
  rating: 7.0,
  poster: "https://static.toiimg.com/thumb/msid-111551523,imgsize-54724,width-400,resizemode-4/111551523.jpg"
},
{
  title: "Oke Oka Jeevitham",
  genre: "Science Fiction, Drama",
  description: "Three friends travel back in time to fix their past mistakes, leading to emotional revelations and self-discovery.",
  rating: 7.8,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmeLSLcWeihD0bYNRVo276_LioKejeNsZ9w&s"
},
{
  title: "Okka Kshanam",
  genre: "Science Fiction, Thriller",
  description: "A man discovers that his life is mirroring another couple's tragic fate and races against time to change destiny.",
  rating: 7.0,
  poster: "https://m.media-amazon.com/images/M/MV5BMDVlNWQzNmYtNjZlZC00MmY5LWFkMWMtMzllZThmNTE0NDFkXkEyXkFqcGc@._V1_.jpg"
},
{
  title: "Antariksham 9000 KMPH",
  genre: "Science Fiction, Adventure",
  description: "India's first space film, where a former astronaut is called back to prevent a satellite from crashing, risking his life to save the nation.",
  rating: 6.7,
  poster: "https://upload.wikimedia.org/wikipedia/en/8/87/Antariksham_9000_KMPH.jpeg"
},
{
  title: "Taxiwaala",
  genre: "Science Fiction, Thriller",
  description: "A young man becomes a cab driver, only to discover that his car is possessed by a spirit seeking revenge.",
  rating: 7.0,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKahfs8Z6F1j4B16zK1WJBGxeicVDJFvzdyQ&s"
},
{
  title: "iSmart Shankar",
  genre: "Science Fiction, Action",
  description: "A contract killer gains access to a slain cop's memories through a chip implant, leading him on a quest for justice.",
  rating: 6.5,
  poster: "https://static.toiimg.com/thumb/msid-76994538,width-1280,height-720,resizemode-4/76994538.jpg"
},
{
  title: "Project Z",
  genre: "Science Fiction, Thriller",
  description: "A scientist's experiment on time travel leads to unexpected consequences, intertwining multiple timelines.",
  rating: 6.5,
  poster: "https://image-resizer-cloud-api.akamaized.net/image/8C01C489-48A1-4A4C-BF5E-0FB4A5240598/0-16x9.jpg?width=1920&updatedTime=2025-02-11T05:15:42Z&dt=Web"
},
{
  title: "7th Sense",
  genre: "Science Fiction, Action",
  description: "A genetic engineering student discovers that a circus performer has the DNA of a legendary warrior and must protect him from a deadly assassin.",
  rating: 6.1,
  poster: "https://upload.wikimedia.org/wikipedia/en/7/72/7_Aum_Arivu.jpg"
},
{
  title: "24",
  genre: "Science Fiction, Thriller",
  description: "A scientist invents a time-traveling watch, leading to a battle across timelines with his evil twin brother.",
  rating: 7.9,
  poster: "https://content.tupaki.com/twdata/2016/0516/reviews/24-Movie-Review-1462538440-1077.jpg"
}
);




function searchMovies() {
const input = document.getElementById("searchInput").value.toLowerCase();
const resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "";

const matched = movies
  .filter(movie =>
    movie.genre.toLowerCase().includes(input)
  )
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 20);

if (matched.length === 0) {
  resultsDiv.innerHTML = "<p>No movies found.</p>";
  return;
}

matched.forEach(movie => {
  const movieCard = `
    <div class="movie">
      <img src="${movie.poster}" alt="${movie.title} Poster" />
      <h2>${movie.title}</h2>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p><strong>Description:</strong> ${movie.description}</p>
      <p><strong>IMDb Rating:</strong> ${movie.rating}</p>
    </div>
  `;
  resultsDiv.innerHTML += movieCard;
});
}
