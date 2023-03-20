const sliderDiv = document.querySelector(".slider");
const images = document.querySelectorAll("img");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
let currentImage = 0;

images.forEach(function (image) {
  image.style.display = "none";
});

const updateImage = function () {
  images[currentImage].style.display = "inline-block";
};

prevBtn.addEventListener("click", () => {
  prevImage();
});

nextBtn.addEventListener("click", () => {
  nextImage();
});

const prevImage = function () {
  images[currentImage].classList.add("fade-right");
  setTimeout(() => {
    images[currentImage].style.display = "none";
    if (currentImage === 0) {
      images[currentImage].classList.remove("fade-right");
      currentImage = 9;
      updateImage();
    } else {
      images[currentImage].classList.remove("fade-right");

      currentImage -= 1;
      updateImage();
    }
  }, 500);
};

const nextImage = function () {
  images[currentImage].classList.add("fade-left");
  setTimeout(() => {
    images[currentImage].style.display = "none";
    //   images[currentImage].classList.remove("fade-right");
    if (currentImage === 9) {
      images[currentImage].classList.remove("fade-left");
      currentImage = 0;
      updateImage();
    } else {
      images[currentImage].classList.remove("fade-left");

      currentImage += 1;
      updateImage();
    }
  }, 500);
};

updateImage();
