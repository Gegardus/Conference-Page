const speakersSection = document.querySelector('#featured-speakers .container-fluid');
const speakersArray = [{
  name: 'Janie Orlean',
  status: 'The President of the United States of America',
  desc: 'The national leader who happened to be at the helm of power at the fateful hour for the planet',  
  image: 'assets/images/jan.jpeg',
  class: 'speaker1',
},
{
  name: 'Kate Dibiasky',
  status: 'A Michigan State University graduate',
  desc: 'A talented young scientist who discovered a comet that threatens the existence of the Earth',
  image: 'assets/images/Kat.png',
  class: 'speaker2',
},
{
  name: 'Yule',
  status: 'A skater punk',
  desc: 'At first glance, an ordinary teenager turned out to be a sincere Christian',
  image: 'assets/images/Yule.png',
  class: 'speaker3',
},
{
  name: 'Peter Isherwell',
  status: 'The founder and CEO of «Bash» tech corporation',
  desc: 'A person convinced that technological progress is capable of solving all the problems of mankind, even to the point of regaining eternal life',
  image: 'assets/images/Pete.png',
  class: 'speaker4',
},
{
  name: 'Dr. Randall Mindy',
  status: 'A professor at Michigan State University',
  desc: 'A dedicated scientist who finds himself in a whirlpool of political events as a result of the fateful discovery of his student',
  image: 'assets/images/Randall.png',
  class: 'speaker5',
},
{
  name: 'Dr. Teddy Oglethrope',
  status: 'The Head of the Planetary Defense Coordination Office',
  desc: 'A scientist occupying an important administrative position in the government, but unable to exercise his powers',  
  image: 'assets/images/Teddy.jpg',
  class: 'speaker6',
},
];

function createSpeakers(profile) {
  speakersSection.innerHTML += `
  <article class="${profile.class} speaker">
  <div class="featured-speakers__img">
      <img src="${profile.image}" alt="">
  </div>
  <div class="featured-speakers__desc">
      <h3>${profile.name}</h3>
      <h4>${profile.status}</h4>
      <hr>
      <p>${profile.desc}</p>
  </div>
</article>`;
}

function createSpeakersSection() {
  for (let i = 0; i < speakersArray.length; i++) {
    createSpeakers(speakersArray[i]);
    if (i > 1) {
      document.querySelector(`.speaker${i + 1}`).classList.add('toggle');
    }
  }
  speakersSection.innerHTML += '<div id="more">MORE<a href="#featured-speakers"><i class="fas fa-chevron-down"></i></a></div>';
}

createSpeakersSection();

// More 
const more = document.querySelector('#more a');
const speaker = document.querySelectorAll('.speaker');

more.addEventListener('click', () => {
  for (let i = 2; i < speaker.length; i++) {
    speaker[i].classList.toggle('toggle');
  }
  if (speaker[2].classList.contains('toggle')) {
    more.innerHTML = "<i class='fas fa-chevron-down'></i>";
  } else {
    more.innerHTML = "<i class='fas fa-chevron-up'></i>";
  }
});

// Nav Menu
const openMenu = document.querySelector('.navbar-main__toggler');
const closeMenu = document.querySelector('.navbar-button__close');
const menu = document.querySelector('.navbar-main__nav');
const menuLinks = document.querySelectorAll('.navbar-main__list li');

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('collapse');
});

openMenu.addEventListener('click', () => {
  menu.classList.toggle('collapse');
});

menuLinks.forEach((li) => {
  li.addEventListener('click', () => {
    menu.classList.toggle('collapse');
  });
});

