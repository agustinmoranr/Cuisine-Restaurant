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
    ORD_NOW_MEDIA.style.opacity = '0.7';
  }
  function playMedia() {
    return ORD_NOW_MEDIA.play()
  }
  ORD_NOW_MEDIA.addEventListener('play', (e) => {
    e.preventDefault()
    PLAY_BTN.style.display = 'none';
    ORD_NOW_MEDIA.style.opacity = '1';

  })
  ORD_NOW_MEDIA.addEventListener('pause', (e) => {
    PLAY_BTN.style.display = 'block';
    ORD_NOW_MEDIA.style.opacity = '0.7';
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





/* --------order-now section start-------- */
const MENU = {
  'breakfast': [
    {
      id: 0,
      cards: [
        {
          id:0,
          img: 'breakfast/berry-cereal.webp',
          price: "$49",
          name: "Berry Cereal"
        },
        {
          id:1,
          img: 'breakfast/hcakes.jpg',
          price: "$49",
          name: "Hot Cakes"
        },
      ]
    },
    {
      id: 1,
      cards: [
        {
          id:0,
          img: 'breakfast/eggs.jpg',
          price: "$49",
          name: "Eggs"
        },
        {
          id:1,
          img: 'breakfast/sandwich.jpg',
          price: "$39",
          name: "Sandwich"
        },
      ]
    },
    {
      id: 2,
      cards: [
        {
          id:0,
          img: 'breakfast/spaguetti.jpg',
          price: "$89",
          name: "Spaguetti"
        },
        {
          id:1,
          img: 'breakfast/coditos.jpg',
          price: "$89",
          name: "Coditos"
        }
      ]
    }
  ],
  'lunch': [
    {
      id: 0,
      cards: [
        {
          id:0,
          img: 'lunch/mojarra.jpg',
          price: "$139",
          name: "Mojarra"
        },
        {
          id:1,
          img: 'lunch/meal.jpg',
          price: "$119",
          name: "Barbecue tenderloin"
        },
      ]
    },
    {
      id: 1,
      cards: [
        {
          id:0,
          img: 'lunch/hamburger.jpg',
          price: "$99",
          name: "Hamburger"
        },
        {
          id:1,
          img: 'lunch/burritos.jpg',
          price: "$99",
          name: "Burritos"
        },
      ]
    },
    {
      id: 2,
      cards: [
        {
          id:0,
          img: 'lunch/pizza.jpg',
          price: "$179",
          name: "Pizza Grande"
        },
        {
          id:1,
          img: 'lunch/fideo-soup.jpg',
          price: "$49",
          name: "Fideo Soup"
        }
      ]
    }
  ],
  'dinner': [
    {
      id: 0,
      cards: [
        {
          id:0,
          img: 'dinner/salmon.jpg',
          price: "$149",
          name: "Salmón"
        },
        {
          id:1,
          img: 'dinner/brocheta.jpg',
          price: "$109",
          name: "Meat Skewer"
        },
      ]
    },
    {
      id: 1,
      cards: [
        {
          id:0,
          img: 'dinner/albondigas.jpg',
          price: "$89",
          name: "Meatloaf"
        },
        {
          id:1,
          img: 'dinner/chicken.jpg',
          price: "$99",
          name: "Chicken Breast"
        },
      ]
    },
    {
      id: 2,
      cards: [
        {
          id:0,
          img: 'dinner/tacos.jpg',
          price: "$69",
          name: "Tacos"
        },
        {
          id:1,
          img: 'dinner/bistec.jpg',
          price: "$89",
          name: "Steak"
        }
      ]
    }
  ],
  'dessert': [
    {
      id: 0,
      cards: [
        {
          id:0,
          img: 'dessert/cake.jpg',
          price: "$59",
          name: "Cake"
        },
        {
          id:1,
          img: 'dessert/cupcake.jpg',
          price: "$59",
          name: "Cupcake"
        },
      ]
    },
    {
      id: 1,
      cards: [
        {
          id:0,
          img: 'dessert/ice-cream.jpg',
          price: "$49",
          name: "Ice Cream"
        },
        {
          id:1,
          img: 'dessert/popsicle.jpg',
          price: "$49",
          name: "Popsicle"
        },
      ]
    },
  ],
  'shakes': [
    {
      id: 0,
      cards: [
        {
          id:0,
          img: 'shakes/candy-frappe.jpg',
          price: "$59",
          name: "Candy Frappe"
        },
        {
          id:1,
          img: 'shakes/frappuchino-coffe.jpg',
          price: "$59",
          name: "Frappuchino Coffee"
        },
      ]
    },
    {
      id: 1,
      cards: [
        {
          id:0,
          img: 'shakes/strawberry-milkshake.jpg',
          price: "$49",
          name: "Strawberry Milkshake"
        },
        {
          id:1,
          img: 'shakes/choco-milkshake.jpg',
          price: "$49",
          name: "Choco Milkshake"
        },
      ]
    },
    
  ],
}

const MENU_SLIDER = document.querySelector("#menu").querySelector('.slider')
const MENU_SLIDE = MENU_SLIDER.querySelector('.slide')
const MENU_SLIDES_CTROLS = MENU_SLIDER.querySelector('.manual-ctrls')

const ARR_FIRST_CARDS_IMG = Array.from(MENU_SLIDE.getElementsByClassName('first-img'))
const ARR_FIRST_CARDS_PRICES = Array.from(MENU_SLIDE.getElementsByClassName('first-price'))
const ARR_FIRST_CARDS_NAMES = Array.from(MENU_SLIDE.getElementsByClassName('first-name'))

const ARR_SECOND_CARDS_IMG = Array.from(MENU_SLIDE.getElementsByClassName('second-img'))
const ARR_SECOND_CARDS_PRICES = Array.from(MENU_SLIDE.getElementsByClassName('second-price'))
const ARR_SECOND_CARDS_NAMES = Array.from(MENU_SLIDE.getElementsByClassName('second-name'))


function HandleMenuSlide(data, id) {
  const CARDS_FIRST = data[id].cards[0]
  const CARDS_FIRST_IMG = `./assets/img/menu/${CARDS_FIRST.img}`
  const CARDS_SECOND = data[id].cards[1]
  const CARDS_SECOND_IMG = `./assets/img/menu/${CARDS_SECOND.img}`

  HandleCardInfo(ARR_SECOND_CARDS_IMG, 'setAttribute', 'src', CARDS_SECOND_IMG)
  HandleCardInfo(ARR_SECOND_CARDS_PRICES, 'innerText', '', CARDS_SECOND.price)
  HandleCardInfo(ARR_SECOND_CARDS_NAMES, 'innerText', '', CARDS_SECOND.name)

  HandleCardInfo(ARR_FIRST_CARDS_IMG, 'setAttribute', 'src', CARDS_FIRST_IMG)
  HandleCardInfo(ARR_FIRST_CARDS_PRICES, 'innerText', '', CARDS_FIRST.price)
  HandleCardInfo(ARR_FIRST_CARDS_NAMES, 'innerText', '', CARDS_FIRST.name)
}


function HandleCardInfo(array, metodo, attribute, newValue) {
  switch (metodo) {
    case 'innerText': 
      array.forEach(element => element.innerText = newValue)
    break;
    case 'setAttribute': 
      array.forEach(element => setElementAttribute(element, attribute, newValue))
  }
}

function handleMenuCategory(category) {
  MENU_SLIDES_CTROLS.innerHTML = ''
  MENU_SLIDER.querySelectorAll('.slider-selector').forEach(selector => selector.remove());

  createSliderControls(MENU, 'menu', MENU_SLIDER, MENU_SLIDES_CTROLS, category)

  HandleMenuSlide(MENU[category], 0)
}

function handleAddToCart(element) {
  const button = element.querySelector('.card-buy-btn')
  
    button.innerText = 'Added Succesfully'
    button.style.backgroundColor = 'green'

    setTimeout(() => {
      button.innerText = 'Order Now'
      button.style.backgroundColor = '#ff8800'
    }, 2000)
}
/* --------order-now section end-------- */









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

  function createSliderControls(elementArray, section, inputsParentEl, labelsParentEl, menuCategory) {
    let MockAPI;
    menuCategory? MockAPI = elementArray[menuCategory]
    : MockAPI = elementArray

    MockAPI.forEach(async element => {
      //create input
      let newInput = document.createElement('input')
      //define position and id
      let id = element.id
      let inputId = `slide-${section}-${id}`

      let extraInfo = {
        'blog': ['radio', 'blog-select-slide', `changeBlogData(REVIEWS, ${id})`],
        'menu': ['radio', 'menu-select-slide', `HandleMenuSlide(MENU['${menuCategory}'], ${id})`],
      }
      let inputType = extraInfo[section][0]
      let inputName = extraInfo[section][1]
      let inputHandler = extraInfo[section][2]
      
      //first input should-be checked by default 
      if(id === 0) {
        setElementAttribute(newInput, 'checked', '')
      }

      //define all its attributes
      setElementAttribute(newInput, 'type', inputType)
      setElementAttribute(newInput, 'name', inputName)
      setElementAttribute(newInput, 'id', inputId)
      setElementAttribute(newInput, 'class', 'slider-selector')
      setElementAttribute(newInput, 'onclick', inputHandler)

      //Set inputs into blog
      setElementChildBefore(inputsParentEl, newInput);

      //Set labels into section controls
      createLabelsHandlers(labelsParentEl, inputId)
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

  function changeBlogData (arrayData, id, interval) {
    if(typeof(interval) === 'undefined') clearInterval(timerId)
    const REVIEWER_IMG = REVIEWS_SLIDER.querySelector('.reviewer-img-ctr').children[0]
    const REVIEWER_NAME = REVIEWS_SLIDER.querySelector('.reviewer-name')
    const REVIEWER_PROFESION = REVIEWS_SLIDER.querySelector('.reviewer-profesion')

    const DATA = arrayData.find(element => element.id === id)

    setElementAttribute(REVIEWER_IMG, 'src', `./assets/img/blog/${DATA.img}`)

    REVIEWER_NAME.innerText = DATA.name
    REVIEWER_PROFESION.innerText = DATA.profesion
  }


  function handleNavMenu() {
    const inputBtn = document.getElementById('btn-menu')

    setTimeout(() => {
      inputBtn.checked = false
    }, 500)
  }


  window.onload = createSliderControls(REVIEWS, 'blog', BLOG, BLOG_SLIDER_CTROLS, '')
  window.onload = createSliderControls(MENU, 'menu', MENU_SLIDER, MENU_SLIDES_CTROLS, 'breakfast')
// blog section end

  // const BLOG = document.getElementById("menu");
  const BLOG_INPT = BLOG.querySelectorAll('input')
  let count = REVIEWS.length -1;
  let countData = 0
  let timerId = setInterval(() => {
    // debugger
    count <= 0? count = REVIEWS.length -1
    :count --
    countData >= REVIEWS.length -1? countData = 0
    :countData ++
    BLOG_INPT[count].checked = true 
    changeBlogData(REVIEWS, countData, true)
  }, 5000)
  // console.log(timerId)