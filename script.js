const slides = document.querySelectorAll('.slide'),
   dots = document.querySelectorAll('.dot'),
   prev = document.querySelector('.prev'),
   next = document.querySelector('.next');
let index = 0;

const activeSlide = s => {
   for (slide of slides) {
      slide.classList.remove('active')
   }
   slides[s].classList.add('active');
}


const activeDot = d => {
   for (dot of dots) {
      dot.classList.remove('active');
   }
   dots[d].classList.add('active');
}

dots.forEach((item, indexDot) => {
   item.addEventListener('click', () => {
      index = indexDot;
      prepareCurrentSlide(index);
   })
});


const prepareCurrentSlide = (ind) => {
   activeSlide(ind);
   activeDot(ind);
}

const nextslide = () => {
   if (index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
   } else {
      index++;
      prepareCurrentSlide(index);
   }
}

const prevslide = () => {
   if (index == 0) {
      index = slides.length - 1
      prepareCurrentSlide(index);
   } else {
      index--;
      prepareCurrentSlide(index);
   }
}



next.addEventListener('click', nextslide);
prev.addEventListener('click', prevslide);

setInterval(nextslide, 3000);
