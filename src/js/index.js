// order now section start
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

// handlers for DOM manipulation
function setElementAttribute(element, attribute, value) {
  element.setAttribute(attribute, value)
};
function setElementChild (parentElement, childElement,) {
  parentElement.append(childElement)
}
function setElementChildBefore (parentElement, childElement) {
  parentElement.prepend(childElement)
}

// video source Handler
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
// order now section end


// blog section start
const REVIEWS = [
  {
    id:0,
    img: 'user-pic.jpg',
    name: 'Mr Agustin Moran',
    profesion: 'Frontend Developer'
  },
  {
    id: 1,
    img: 'emily.jpg',
    name: 'Ms Emily Garlan',
    profesion: 'Backend Developer'
  },
  {
    id: 2,
    img: 'angel.jpg',
    name: 'Mr Ángel Vega',
    profesion: 'UX Designer'
  },
  {
    id: 3,
    img: 'niñita.jpg',
    name: 'Niñita',
    profesion: 'Senior Frontend Developer Expert'
  },
];

const REVIEWS_SLIDER = document.querySelector(".reviews-slider")
const BLOG = document.querySelector(".blog")
const BLOG_SLIDER_CTROLS =  REVIEWS_SLIDER.querySelector('.blog-ctrols')

function createSliderCrtols(elementArray, section, inputsParentEl, labelsParentEl) {

  elementArray.forEach(async element => {
    //create input
    let inputHandler = document.createElement('input')
    //define position and id
    let id = element.id
    let inputId = `slide-${section}-${id}`
    
    //first input should-be checked by default 
    if(id === 0) {
      setElementAttribute(inputHandler, 'checked', '')
    }

    //define all its attributes
    setElementAttribute(inputHandler, 'type', 'radio')
    setElementAttribute(inputHandler, 'name', 'blog-select-slider')
    setElementAttribute(inputHandler, 'id', inputId)
    setElementAttribute(inputHandler, 'class', 'slider-selector')
    setElementAttribute(inputHandler, 'onclick',`changeBlogData(REVIEWS, ${id})`)

    //Set inputs into blog
    setElementChildBefore(inputsParentEl, inputHandler);

    //Set labels into section controls
    createLabelsHandlers(labelsParentEl, inputId)

    const BLOG_INPUT = BLOG.getElementsByClassName('slider-selector')[id]
    console.log(BLOG_INPUT)

    BLOG_INPUT.addEventListener('input', (e) => {
      console.log(e)
      console.log(e.target)
      e.target.style.background = '#ff8800';
      BLOG_INPUT.style.opacity = '1';
      BLOG_INPUT.style.width = '20px';
      BLOG_INPUT.style.height = '20px';
    })
  });
}

function createLabelsHandlers (parentElement, id, labelContent) {
  //create label
  const LABEL_HANDLER = document.createElement('label')

  //set attributes
  setElementAttribute(LABEL_HANDLER, 'for', id)
  setElementAttribute(LABEL_HANDLER, 'class', 'manual-btn')

  //set to into parent element
  setElementChild(parentElement, LABEL_HANDLER)

  //add content
  LABEL_HANDLER.innerText = labelContent || ''
}

function changeBlogData (arrayData, id) {
  const REVIEWER_IMG = REVIEWS_SLIDER.querySelector('.reviewer-img-ctr').children[0]
  const REVIEWER_NAME = REVIEWS_SLIDER.querySelector('.reviewer-name')
  const REVIEWER_PROFESION = REVIEWS_SLIDER.querySelector('.reviewer-profesion')
  const BLOG_INPUT = REVIEWS_SLIDER.getElementsByClassName('manual-btn')[id]

  const DATA = arrayData.find(element => element.id === id)

  setElementAttribute(REVIEWER_IMG, 'src', `./assets/img/blog/${DATA.img}`)

  REVIEWER_NAME.innerText = DATA.name
  REVIEWER_PROFESION.innerText = DATA.profesion

  // BLOG_INPUT.style.background = '#ff8800';
  // BLOG_INPUT.style.opacity = '1';
  // BLOG_INPUT.style.width = '20px';
  // BLOG_INPUT.style.height = '20px';
}

window.onload = createSliderCrtols(REVIEWS, 'blog', BLOG, BLOG_SLIDER_CTROLS)
// blog section end