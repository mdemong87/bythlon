// 3D model implemention code here
window.addEventListener('scroll', onScroll);

var ThreeModel = document.querySelector(".herobgProduct");

function onScroll() {
  // Get the scroll position of the page
  const scrollY = window.scrollY;

  // Calculate the rotation amount based on the scroll position
  const rotationZ = Math.PI * scrollY / 100;

  // Apply the rotation to the object
  camera.rotation.z = rotationZ;


  if (scrollY > 300) {
    camera.rotation.z = 0;
    camera.rotation.x = scrollY * 0.0001;
    camera.rotation.y = scrollY * 0.0001;
    ThreeModel.style.transform = "translate(150px)";
  }
  if (scrollY < 300) {
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
  45,
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
keyLight.position.set(-100, 0, 100);

const fillLight = new THREE.DirectionalLight(0.75);
fillLight.position.set(-100, 0, 100);


const backLight = new THREE.DirectionalLight(0xffffff, 1.0);
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
  camera.rotation.z -= 0.0020
  renderer.render(scene, camera);
}

animate();
onScroll();










//swiper js implementation code here

//this is just for what makes bythlon batter
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

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



//slide js implemention here
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 4,
    gap: 10,
    pagination: false,
    arrows: false
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