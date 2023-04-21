const hamburguer = document.querySelector('.hamburguer');
const navMain = document.querySelector('.nav-main');

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

function loadHomePage() {
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
