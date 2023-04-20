const hamburguer = document.querySelector('.hamburguer');
const navMain = document.querySelector('.nav-main');
const main = document.querySelector('main');
const logoHome = document.getElementById('logo-home');
const aboutButton = document.getElementById('about');
const footer = document.querySelector('.footer');

const artists = [
  {
    name: 'METALLICA',
    image: 'images/band1_logo.png',
    date: 'TRASH METAL USA WILL BE ON 17-10-2023',
    description: "Metallica is an American heavy metal band that developed the subgenre of speed metal in the early and mid-1980s. The band released their first album, Kill 'Em All, in 1983, followed by Ride the Lightning in 1984.",
  },
  {
    name: 'SCORPIONS',
    image: 'images/band2_logo.png',
    date: 'HARD ROCK GERMAN WILL BE ON 17-10-2023',
    description: 'Scorpions are arachnids and have eight legs like their cousins—spiders, mites, and ticks. They can quickly grab an insect with their pincers and whip their telson, the poisonous tip of their tail forward and sting their prey. They use their poison to kill prey and to defend against predators.',
  },
  {
    name: 'AC DC',
    image: 'images/band3_logo.png',
    date: 'HARD ROCK BRITISH/AUSTRALIAN WILL BE ON 16-10-2023',
    description: 'Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm (rhythm guitar) and Angus Young (lead guitar).',
  },
  {
    name: "GUNS N' ROSES",
    image: 'images/band4_logo.png',
    date: 'HARD ROCK USA WILL BE ON 16-10-2023',
    description: "Guns N' Roses is an American hard rock band from Los Angeles, California, formed in 1985. The lineup, when first signed to Geffen Records in 1986, consisted of vocalist Axl Rose, lead guitarist Slash, rhythm guitarist Izzy Stradlin, bassist Duff McKagan, and drummer Steven Adler.",
  },
  {
    name: 'IRON MAINDEN',
    image: 'images/band5_logo.png',
    date: 'HEAVY METAL BRITISH WILL BE ON 15-10-2023',
    description: 'Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris.',
  },
  {
    name: 'AEROSMITH',
    image: 'images/band6_logo.png',
    date: 'HARD ROCK USA WILL BE ON 15-10-2023',
    description: 'American rock band formed in Boston in 1970. The group consists of Steven Tyler (lead vocals, harmonica, piano), Joe Perry (guitar), Tom Hamilton (bass), Joey Kramer (drums) and Brad Whitford (guitar).',
  },
];

const homeView = `
<div class="home">
<section class="main-info">
  <div class="main-content">
        
    <h2 class="main-subtitle fire">"Hello! Rockers!"</h2>
    <h1 class="title fire">Rock & Roll 2023    XXX EDITION</h1>
    <p class="paragraph-main">“We have realized that our weapons to make the world a little better are music and the festival. This is what We know how to do well.”</p>
    <h2 class="main-date">OCTOBER 15 ~ 17 - 2023</h2>
    <h2 class="main-location">Potosi - Bolivia, Second Avenue to the Stadion Victor Agustin Ugarte</h2>
  </div>
</section>
<section class="main-program">
    <h2 class="program-title">Main Activities</h2>
    <span class="underline"></span>
    <div class="program">
        <div class="card-program">
            <img class="program-card-image" src="images/icon_drinks.png" alt="card-logo">
            <h3 class="program-card-title">Free Drinks</h3>
            <p class="card-program-paragraph">No Alcoholic drinks are included along the festival.</p>
        </div>
        <div class="card-program">
            <img class="program-card-image" src="images/icon_live.png" alt="card-logo">
            <h3 class="program-card-title">Live Music</h3>
            <p class="card-program-paragraph">While you are waiting the main artists, there are band who will play awsome music live.</p>
        </div>
        <div class="card-program">
            <img class="program-card-image" src="images/icon_merchandicing.png" alt="card-logo">
            <h3 class="program-card-title">Merchandise</h3>
            <p class="card-program-paragraph">During the festival there will be a lot of merchandicing from the main artists.</p>
        </div>
        <div class="card-program">
            <img class="program-card-image" src="images/icon_prizes.png" alt="card-logo">
            <h3 class="program-card-title">Prizes</h3>
            <p class="card-program-paragraph">There will be a lot of challenges and prizes for the most fun people.</p>
        </div>
        <div class="card-program">
            <img class="program-card-image" src="images/icon_surround.png" alt="card-logo">
            <h3 class="program-card-title">Games</h3>
            <p class="card-program-paragraph">A lot of activities to spend time with frind or meet people with the same interest.</p>
        </div>
    </div>
    <a class="button" href="">SEE THE WHOLE PROGRAM</a>
</section>
<section class="artists-container">
    <h2 class="title-artist">Artists</h2>
    <span class="underline"></span> 
    <div class="artists">
        
        
    </div>
</section>
<section class="sponsors" >
    <h2 class="sponsors-title">Sponsors</h2>
    <span class="underline"></span>
    <div class="sponsors-images">
        <img class="image-sponsor" src="images/sponsor1.png" alt="sponsor 1">
        <img class="image-sponsor" src="images/sponsor2.png" alt="sponsor 2">
        <img class="image-sponsor" src="images/sponsor3.png" alt="sponsor 3">
        <img class="image-sponsor" src="images/sponsor4.png" alt="sponsor 4">
    
    </div>
</section>
</div>
`;

const aboutView = `<div class="about">
<section class="main-info main-info-about">
    <div class="about-content">
        <h2 class="main-subtitle about-subtitle">"Hello! Rockers!"</h2>
        <h1 class="title title-about fire">Rock & Roll 2023 XXX EDITION</h1>
        <span class="underline"></span>
        <p class="paragraph-main paragraph-about">Hello, ladies and gentlemen. It is my pleasure to introduce to you the creative mind behind one of the most popular rock festivals in the country. This individual has spent years honing their craft, working tirelessly to bring together some of the most incredible musical acts in the world, all under one roof.</p>
        <h5 class="main-location">Please contact us per email for any further question about the Rock & Roll Festival</h5>
        <a class="main-location email" href="">contact@RokAndRollFestival.com</a>
    </div>
</section>
<section class="aditional-info">
    <h2>ROCK & ROLL FESTIVAL</h2>
    <span class="underline"></span>
    <p class="paragraph-about-aditional">
    This festival creator has a passion for music that is unmatched by anyone else in the industry. They have spent countless hours listening to new and emerging artists, scouring the internet for the latest and greatest in the world of rock music. Their knowledge of the genre is encyclopedic, and they have a keen ear for discovering new talent.
    
    Over the years, this festival creator has established themselves as a true visionary in the industry. They have a talent for spotting trends and identifying the next big thing in music. Their ability to curate lineups that are both diverse and cohesive is unparalleled, and their festivals have become a mecca for music lovers from around the world.
    But this festival creator is more than just a master of curation. They are also a master of logistics. Putting together a festival of this magnitude is no small feat, and it takes a team of dedicated professionals to make it all happen. But this individual has a knack for bringing together the right people and making sure that everything runs smoothly.
    Perhaps most importantly, this festival creator is passionate about giving back to the community. They understand the power of music to bring people together and to create positive change in the world. That's why they work tirelessly to make sure that their festivals are not just a great time, but also a force for good.
    In short, this festival creator is a true rock star in their own right. They have dedicated their life to the pursuit of great music and have brought joy to countless fans around the world. We are lucky to have them in our midst, and we can't wait to see what they have in store for us in the years to come. Thank you.</p>
    <img src="images/logo.png" alt="logo">
</section>
<section class="past-versions">
    <h2>PAST VERSIONS</h2>
    <span class="underline"></span>
    <p>Our last two versions:</p>
    <div class="past-versions-cards">
        <div class="past-versions-card past1">
            <h1 class="past-version-title">2022</h1>
            <p>MADRID</p>
        </div>
        <div class="past-versions-card past2">
            <h1 class="past-version-title">2021</h1>
            <p>NEY YORK</p>
        </div>
    </div>
</section>
</div>`;
function loadHomePage() {
  main.innerHTML = homeView;
  artists.forEach((artist) => {
    document.querySelector('.artists').innerHTML += `
    <div class="artist-card">
      <img class="artist-image" src="${artist.image}" alt="${artist.name}">
      <div class="artist-card-content">
        <h4 class="artist-name">${artist.name}</h4>
        <h5 class="artist-subtitle"><em>${artist.date}</em></h5>
        <span class="line-artist"></span>
        <p class="artist-information">${artist.description}</p>
      </div>
    </div>`;
  });
  footer.classList.remove('footer-dark');
}
loadHomePage();

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMain.classList.toggle('menu_active');
});

navMain.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMain.classList.toggle('menu_active');
});

aboutButton.addEventListener('click', () => {
  footer.classList.toggle('footer-dark');
  main.innerHTML = aboutView;
});

logoHome.addEventListener('click', () => {
  main.innerHTML = homeView;
  loadHomePage();
});