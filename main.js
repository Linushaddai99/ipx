const reviewsGrid = document.querySelector('.reviews-grid');
const answers = document.querySelectorAll('.answers');
const question = document.querySelectorAll('.question-container');
const services = document.querySelectorAll('.service');
const serviceDescription = document.querySelectorAll('.service-description');
const callBtn = document.querySelector('.call-now');
const callDropDown = document.querySelector('.call-dropdown');
const body = document.querySelector('body');
const mobileService = document.querySelectorAll('.mobile-service-display');
const previous = document.querySelector('.left');
const next = document.querySelector('.right');
const fastRead = document.querySelector('.faq-fastread');
const hamburgerMenu = document.querySelector('.menu-bar');
const popup = document.querySelector('.popup-wrapper');



callBtn.addEventListener('click', (e) => {
  e.preventDefault()
  callDropDown.classList.toggle('show');
})


const copyDiv = document.querySelectorAll('.copy-div');
console.log(copyDiv);
copyDiv.forEach(div => {
  div.querySelector('button').addEventListener('click', ()=> {
   let input = div.querySelector('input')
    console.log(input.value);
    input.select();
    navigator.clipboard.writeText(input.value);
  })
  // let input = div;
  // div.querySelector('button').addEventListener('click', () => {
  //   let input = div.querySelector('input');
  //   console.log(input)
  //   let copied = input;
  //   console.log(copied)
  //   // copied.select();
  //   // navigator.clipboard.writeText(copied);
  //   // copyDiv.classList.add('active')
  // })
  
})
function reviews(name, url, review) {
  
    let html = `<div class="review">
    <p>${review}</p>
    <div class="reviewer">
      <img class="reviewer_img" src=${url} alt="">
      <small>${name}</small>
    </div>
  </div>`

  reviewsGrid.innerHTML += html;
}

const revealAnswers = (item) => {
  let ans = item.children[1];
  let arrow = item.children[0].children[1]
  ans.classList.toggle('hide');
  arrow.classList.toggle('fa-angle-up');
}

question.forEach(item => {
  item.addEventListener('click', e => {
    revealAnswers(item, e)
  })
})

// console.log(serviceDescription)

function Description(item){
  console.log(item.classList)
  for(let a of serviceDescription){
    if(a.id === item) {
      a.classList.remove('hide')
    } else {
      a.classList.add('hide')
    }
  }
}

function selected(arr, item) {
  arr.filter(items => items != item)
     .map(items => items.classList.remove('service-focus'))
}


const serviceList = [];

services.forEach(service => {
  serviceList.push(service);
  service.addEventListener('click', e => {
    service.classList.add('service-focus')
  selected(serviceList, service);
  Description(service.id)
  })
})

// const element = document.querySelector('.internet-solution-section');
// const position = element.getBoundingClientRect();
// const x = position.left;
// const y = position.top;
// console.log(x, y)

const countValues = document.querySelectorAll('.internet-num');


  const callCount = (item, value) => {

    if(value > 1000) {
      let output = 50;
        const timer = setInterval(() => {
        item.textContent = `${output}`;
        if (output === value) {
            clearInterval(timer);
        } else{
            output += 50;
        }
    }, 100)
    } else{let output = 2;
      const timer = setInterval(() => {
      item.textContent = `${output}`;
      if (output === value) {
          clearInterval(timer);
      } else{
          output+=2;
      }
  }, 100)

    }
  };

    let happened = false;
    $(window).scroll(function() {
      var hT = $('.internet-solution-section').offset().top,
          hH = $('.internet-solution-section').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop();
      if (wS > (hT+hH-wH) && !happened){
        countValues.forEach(num => {
          callCount(num, Number(num.id));
          happened = true;
        })
      }
   });




let current = 0;
  function reset(){
  for(let i = 0; i < mobileService.length; i++) {
      mobileService[i].style.display = 'none';
  }
}

  // initialize slider
function startSlide(){
    reset();
    mobileService[0].style.display = 'block';

}

// show previous
function slideLeft() {
    reset();
    mobileService[current - 1].style.display = 'block';
    current--
}
previous.addEventListener('click', () => {
    if(current === 0) {
        current = mobileService.length;
    }
    slideLeft();
})

// show next 
function slideRight() {
    reset()
    mobileService[current + 1].style.display = 'block';
    current++
}

next.addEventListener('click', () => {
    if(current === mobileService.length - 1){
        current = -1;
    }
    slideRight();
})

startSlide();


hamburgerMenu.addEventListener('click', ()=> {
  popup.classList.toggle('hide');
})

popup.addEventListener('click', () => {
  popup.classList.add('hide');
})



































reviews('Isreal James', 'https://randomuser.me/api/portraits/men/10.jpg', 'The Wifi service is fast and unlimited. Thanks to Waave Network!')
reviews('Brendan Bassey', 'https://randomuser.me/api/portraits/women/10.jpg', 'The Wifi is reliable and dependable. It is also very affordable unlike some networks that would demand you to break the bank.')
reviews('Sandra Moore', 'https://randomuser.me/api/portraits/men/11.jpg', 'Waave network is the best internet service company service with quality services. I use your services in my studio and its been great.')
reviews('Simpul Photos', 'https://randomuser.me/api/portraits/women/11.jpg', 'The technical support is highly professional and efficient')
reviews('Lois Johnson', 'https://randomuser.me/api/portraits/men/12.jpg', 'Waave network is an internet service company you can simply rely on. I use it to work from home and it’s been amazing so far.')
reviews('Joshua Ikpoko', 'https://randomuser.me/api/portraits/women/12.jpg', 'I’ve been using the service for over 2 years and i can that i love their service and packages. Nice customer service too.')
reviews('Sopuruchi Maduforo', 'https://randomuser.me/api/portraits/men/13.jpg', 'With waave network, you should expect nothing but excellence')
reviews('Jonathan Blake', 'https://randomuser.me/api/portraits/women/13.jpg', 'I really enjoy every bit of the service. it is reliable and steady')
reviews('Abisola Seyi', 'https://randomuser.me/api/portraits/men/14.jpg', 'Great customer service. ')
reviews('Nengi Benstowe', 'https://randomuser.me/api/portraits/women/14.jpg', 'I recommed Waave network for any private or business use. The internet speed is amazing. Thank you, Waavenet')
reviews('Eneanwan Andem', 'https://randomuser.me/api/portraits/men/15.jpg', 'With waave network, theres never a dull moment.No glitches at fun times.')
reviews('Bisong Bisong', 'https://randomuser.me/api/portraits/women/15.jpg', 'Excellent customers relationship services.')

