const ORDER_NOW_VIDEOS = [
  'shakes.mp4',
  'salad.mp4', 
  'tarta.mp4'
];

const NEXT_BTN = document.getElementById('next-btn')
const PREV_BTN = document.getElementById('prev-btn')
const PLAY_BTN = document.getElementById('ordnow-media-play-btn')

const MEDIA_CTROLS = document.querySelector('.order-now-media-ctrols');
const ORD_NOW_MEDIA = document.querySelector('.ordnow-media');

let i = 0;

function nextSlide() {
  if(i >= ORDER_NOW_VIDEOS.length -1) {
    i = 0;
    return setVideoSource(i)
  }

  i = i + 1;

  return setVideoSource(i)
}

function prevSlide() {
  if(i <= 0) {
    i = ORDER_NOW_VIDEOS.length -1;
    return setVideoSource(i)
  }

  i = i - 1;

  return setVideoSource(i)
}

ORD_NOW_MEDIA.onloadstart = function(e) {
  e.preventDefault()
  PLAY_BTN.style.display = 'block';
}
function playMedia() {
  return ORD_NOW_MEDIA.play()
}
ORD_NOW_MEDIA.addEventListener('play', (e) => {
  e.preventDefault()
  PLAY_BTN.style.display = 'none';
})
ORD_NOW_MEDIA.addEventListener('pause', (e) => {
  PLAY_BTN.style.display = 'block';
})
ORD_NOW_MEDIA.addEventListener('ended', (e) => {
  nextSlide();
})


function setElementAttribute(element, attribute, value) {
  element.setAttribute(attribute, value)
};

function setElementChild (parentElement, childElement) {
  parentElement.appendChild(childElement)
}

function setVideoSource(videoIndex) {
  const SOURCE = document.createElement('source');

  const PREV_SOURCE = document.getElementsByClassName('ordnow-media-source')[0];
  
  if(typeof(PREV_SOURCE) !== "undefined") {
    PREV_SOURCE.remove()
  }
  
  setElementAttribute(SOURCE, 'class', 'ordnow-media-source');
  setElementAttribute(SOURCE, 'src', `./assets/videos/${ORDER_NOW_VIDEOS[videoIndex]}`);
  setElementAttribute(SOURCE, 'alt', 'video de muestra de la cocina de un restaurante');
  
  setElementChild(ORD_NOW_MEDIA, SOURCE)
  
  ORD_NOW_MEDIA.load()
}

