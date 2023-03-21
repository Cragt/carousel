const sliderDiv = document.querySelector(".slider");
const images = document.querySelectorAll("img");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const dots = document.getElementById("nav");
let currentImage = 0;
let intervalId;

images.forEach(function (image, index) {
  image.style.display = "none";
  const circle = document.createElement("div");
  circle.classList.add("circle");
  // circle.setAttribute("data", image)
  dots.appendChild(circle);

  circle.addEventListener("click", () => {
    images[currentImage].style.display = "none";
    currentImage = index;
    updateImage();

    const circles = document.querySelectorAll(".circle");
    circles.forEach((c) => c.classList.remove("filled"));
    circle.classList.add("filled");
  });
  return circle;
});

const updateImage = function () {
  images[currentImage].style.display = "inline-block";
  const circles = document.querySelectorAll(".circle");
  circles.forEach((c) => c.classList.remove("filled"));

  const circle = document.getElementsByClassName("circle");

  circle[currentImage].classList.add("filled");
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

const startSlideshow = function () {
  intervalId = setInterval(() => {
    nextImage();
  }, 5000);
};

const stopSlideshow = function () {
  clearInterval(intervalId);
};

// add event listeners to the slideshow container
sliderDiv.addEventListener("mouseover", () => {
  stopSlideshow();
});

sliderDiv.addEventListener("mouseout", () => {
  startSlideshow();
});

// call the startSlideshow() function to begin the slideshow
startSlideshow();

updateImage();
