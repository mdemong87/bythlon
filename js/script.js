// 3D model implemention code here
window.addEventListener('scroll', onScroll);

var ThreeModel = document.querySelector(".herobgProduct");

function onScroll() {

  

  // Get the scroll position of the page
  const scrollY = window.scrollY;

  // Calculate the rotation amount based on the scroll position
  const rotationX = Math.PI * scrollY / 100;
  scene.rotation.z = 0

  // Apply the rotation to the object
  scene.rotation.x =rotationX/2;
  

  if (scrollY > 300) {
    scene.rotation.x =0;
    scene.rotation.z=190;
    scene.rotation.y=50;//50
    ThreeModel.style.transform = "translate(20%)";
    ThreeModel.style.transition = "1s";
  }else{
    scene.rotation.z=0;
    scene.rotation.y=0;
    ThreeModel.style.transform = "translate(0px)";
  }

  // Render the scene with the updated rotation
  renderer.render(scene, camera);
}




// Create a scene
var scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(255, 242, 242)");


// Create a camera
var camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 170;

// Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('model-viewer').appendChild(renderer.domElement);


const keyLight = new THREE.DirectionalLight(1.0);
keyLight.position.set(100, 0, -100);

const fillLight = new THREE.DirectionalLight(0,75);
fillLight.position.set(-100, 0, 100);


const backLight = new THREE.DirectionalLight('rgb(105,105,105)', 1.0);
backLight.position.set(100, 0, -100);

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);


// Load the OBJ model
var loader = new THREE.OBJLoader();
loader.load(
  './assest/vedio/pro.obj',
  function (object) {
    object.position = 60;
    scene.add(object);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);



// Animation loop
function animate() {
  requestAnimationFrame(animate);
  scene.rotation.z += 0.0020
  renderer.render(scene, camera);
}

animate();
onScroll();




//swiper js implementation code here

//this is just for what makes bythlon batter
var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  noSwipingClass: 'noswipe',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//text click to slide
function one1() {
  swiper[0].slideTo(0, 1000, false);
  swiper[1].slideTo(0, 1000, false)
}


function two1() {
  swiper[0].slideTo(1, 1000, false);
  swiper[1].slideTo(1, 1000, false);
}


function three1() {
  swiper[0].slideTo(2, 1000, false);
  swiper[1].slideTo(2, 1000, false);
}

function one2() {
  swiper[0].slideTo(0, 1000, false);
  swiper[1].slideTo(0, 1000, false)
}


function two2() {
  swiper[0].slideTo(1, 1000, false);
  swiper[1].slideTo(1, 1000, false);
}


function three2() {
  swiper[0].slideTo(2, 1000, false);
  swiper[1].slideTo(2, 1000, false);
}


function one3() {
  swiper[0].slideTo(0, 1000, false);
  swiper[1].slideTo(0, 1000, false)
}


function two3() {
  swiper[0].slideTo(1, 1000, false);
  swiper[1].slideTo(1, 1000, false);
}


function three3() {
  swiper[0].slideTo(2, 1000, false);
  swiper[1].slideTo(2, 1000, false);
}

function one4() {
  swiper[0].slideTo(1, 1000, false);
  swiper[1].slideTo(1, 1000, false)
}


function two4() {
  swiper[0].slideTo(2, 1000, false);
  swiper[1].slideTo(2, 1000, false);
}


function three4() {
  swiper[0].slideTo(3, 1000, false);
  swiper[1].slideTo(3, 1000, false);
}




//slide js implemention here
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 4,
    gap: 10,
    pagination: false,
    arrows: false,
    breakpoints: {
      640: {
        perPage: 1,
  
      },
      767: {
        perPage: 2,
    
      },
      1024: {
        perPage: 3,
       
      },
    },
  });
  splide.mount();
});




// faq implemention script add here

// Add active class to clicked accordion and toggle panel visibility
var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;

    // Close all other answers
    for (var j = 0; j < panels.length; j++) {
      if (panels[j] !== panel) {
        panels[j].style.maxHeight = null;
        acc[j].classList.remove("active");
      }
    }

    this.classList.toggle("active");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}





//review section view image when hover javascript code here
const splide__slide1 = document.querySelector(".r1");
const splide__slide2 = document.querySelector(".r2");
const splide__slide3 = document.querySelector(".r3");
const splide__slide4 = document.querySelector(".r4");
const splide__slide5 = document.querySelector(".r5");
const splide__slide6 = document.querySelector(".r6");
const slideimage = document.querySelector(".slideimage");


//for 1
splide__slide1.addEventListener("mouseover", () => {
  slideimage.style.visibility = "visible";
  slideimage.src = "./assest/img/slideImage1.jpg";
})

splide__slide1.addEventListener("mouseout", () => {
  slideimage.style.visibility = "hidden";
})

//for 2
splide__slide2.addEventListener("mouseover", () => {
  slideimage.style.visibility = "visible";
  slideimage.src = "./assest/img/slideImage2.jpg";
})

splide__slide2.addEventListener("mouseout", () => {
  slideimage.style.visibility = "hidden";
})

//for 3
splide__slide3.addEventListener("mouseover", () => {
  slideimage.style.visibility = "visible";
  slideimage.src = "./assest/img/slideImage3.jpg";
})

splide__slide3.addEventListener("mouseout", () => {
  slideimage.style.visibility = "hidden";
})

//for 4
splide__slide4.addEventListener("mouseover", () => {
  slideimage.style.visibility = "visible";
  slideimage.src = "./assest/img/slideImage4.jpg";
})

splide__slide4.addEventListener("mouseout", () => {
  slideimage.style.visibility = "hidden";
})

//for 5
splide__slide5.addEventListener("mouseover", () => {
  slideimage.style.visibility = "visible";
  slideimage.src = "./assest/img/slideImage5.jpg";
})

splide__slide5.addEventListener("mouseout", () => {
  slideimage.style.visibility = "hidden";
})

//for 6
splide__slide6.addEventListener("mouseover", () => {
  slideimage.style.visibility = "visible";
  slideimage.src = "./assest/img/slideImage6.jpg";
})

splide__slide6.addEventListener("mouseout", () => {
  slideimage.style.visibility = "hidden";
})






//navber script here
const navber=document.querySelector(".berJustshowmobile");
const navaside=document.querySelector(".noneformobile");

navber.addEventListener("click",()=>{

  if (navaside.style.display === "none") {
    navaside.style.display = "block";
  } else {
    navaside.style.display = "none";
  }
});

window.addEventListener("resize",()=>{
  if( window.innerWidth > "768"){
    navaside.style.display = "block";
  }else{
    navaside.style.display = "none";
  }
})



