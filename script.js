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
    genre: "Romantic Comedy",
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
    genre: "Comedy, Crime",
    description: "Three friends get entangled in a kidnapping plot gone wrong.",
    rating: 8.0,
    poster: "https://m.media-amazon.com/images/M/MV5BNGI2OTM3N2YtMmE1ZS00ZTEyLThiMzEtNjAwMmQ4N2ZhYTFkXkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Bhale Bhale Magadivoy",
    genre: "Romantic Comedy",
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
    genre: "Romantic Comedy",
    description: "A misogynistic ad agency manager is forced to work with a woman, changing his view on love.",
    rating: 8.3,
    poster: "https://www.dishadaily.com/h-upload/2023/08/29/254185-n.webp"
  },
  {
    title: "Malliswari",
    genre: "Romantic Comedy",
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
    genre: "Romantic Comedy",
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
    genre: "Romantic Comedy",
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
    genre: "Action, Drama, Fantasy",
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
    genre: "Action, Drama",
    description: "A young man discovers his royal heritage and sets out to reclaim his kingdom.",
    rating: 8.0,
    poster: "https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/041019031925bahubali.jpg"
  },
  {
    title: "Baahubali 2: The Conclusion",
    genre: "Action, Drama",
    description: "The son of a slain prince continues his quest to avenge his father's death and restore the kingdom.",
    rating: 8.2,
    poster: "https://www.moople.in/blog/wp-content/uploads/2018/02/bah-28.jpg"
  },
  {
    title: "Rangasthalam",
    genre: "Action, Drama",
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
    genre: "Action, Comedy",
    description: "A rebellious police officer takes on a notorious criminal in his town.",
    rating: 7.1,
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gabbar-singh-telugu-et00007159-1665126274.jpg"
  },
  {
    title: "Dhruva",
    genre: "Action, Thriller",
    description: "An IPS officer sets out to take down a corrupt scientist involved in illegal activities.",
    rating: 7.9,
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dhruva-et00043013-17-04-2017-17-57-44.jpg"
  },
  {
    title: "Manam",
    genre: "Comedy, Drama, Fantasy",
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
    genre: "Drama, Family",
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
    genre: "Action, Drama, Romance",
    description: "A hot-headed surgeon's life spirals out of control after his girlfriend is forced to marry someone else.",
    rating: 7.9,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/79a8a69e853daef866c405bcf2b1253df311463f1bd246cafccda81f173d8fba.jpg"
  },
  {
    title: "Fidaa",
    genre: "Drama, Romance",
    description: "An NRI falls in love with a village girl, leading to cultural clashes and personal challenges.",
    rating: 7.4,
    poster: "https://i.ytimg.com/vi/yiiGeMjCY7c/maxresdefault.jpg"
  },
  {
    title: "Orange",
    genre: "Drama, Romance",
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


function searchMovies() {
const input = document.getElementById("searchInput").value.toLowerCase();
const resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "";

const matched = movies
  .filter(movie =>
    movie.genre.toLowerCase().includes(input) ||
    movie.description.toLowerCase().includes(input)
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