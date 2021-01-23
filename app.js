

// nav-slide
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
} 



// ---------------------------------------Scroll---------------------------------
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {

    const triggerBottom = window.innerHeight / 5 * 7
    // const triggerBottom = window.innerHeight / 5 * 4 use this if not working
    boxes.forEach(box => {

        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {

            box.classList.add('show')

        } else {

            box.classList.remove('show')

        }
    })
   
    boxes.forEach(box => {

      const boxTop = box.getBoundingClientRect().bottom

      if(boxTop < triggerBottom) {

          box.classList.add('show')

      } else {

          box.classList.remove('show')

      }
  })
}





// --------------------------------SLIDER-----------------------------
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-side');
const slideLeft = document.querySelector('.left-side');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slideLength = slideRight.querySelectorAll('div').length;
console.log(slideLength)
let activeSlideIndex = 0


slideLeft.style.top = `-${(slideLength -1 ) * 30}rem`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if(direction === 'up'){
    activeSlideIndex++ 
    if(activeSlideIndex > slideLength - 1){
      activeSlideIndex = 0
    }
  }else if(direction === 'down'){
    activeSlideIndex-- 
    if(activeSlideIndex < 0){
      activeSlideIndex = slideLength - 1
  }
  }
slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`

slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}


// ---------------------------------TIMER------------------------------------
const countDate = new Date('2/10/2021').getTime();

function countdown(){
  const currentDate = new Date().getTime();
  const gap = countDate - currentDate;
  

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / (day));
  const h = Math.floor((gap % (day)) / (hour));
  const m = Math.floor((gap % (hour)) / (minute));
  const s = Math.floor((gap % (minute)) / (second));

 document.querySelector('#days').innerHTML = d; 
 document.querySelector('#hours').innerHTML = h; 
 document.querySelector('#mins').innerHTML = m; 
 document.querySelector('#seconds').innerHTML = s; 
  
}

setInterval(function(){
  countdown();
}, 1000)




// ---------------------------Linux Glimpses-------------------------
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 45.5}rem)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

