const prev = document.querySelector(".btn-prev"),
  next = document.querySelector(".btn-next"),
  slides = document.querySelectorAll("#img"),
  dots = document.querySelectorAll(".dot"),
  caruselWrapper = document.querySelectorAll("#slider");

//   const sliderInfo = document.querySelector(".slider__info");
// slides.forEach((slide) => {
//   if (slide.classList.contains("active")) {
//     sliderInfo.style.display = "block";
//   }
// });

function Slider(leftControl, rightControl, indicator, displayer, data) {
  this.lctrl = leftControl;
  this.rctrl = rightControl;
  this.ind = indicator;
  this.display = displayer;
  this.current = 0;
  this.data = data;
  let that = this;
  this.drawIndicator = () => {
    that.ind.innerHTML =
      '<span class="dot active">' +
      (that.current + 1 + "").padStart(2, "0") +
      "</span>/" +
      (that.data.length + "").padStart(2, "0");
  };
  this.rctrl.addEventListener("click", () => {
    that.display.children[that.current].classList.remove("active");
    if (that.current == that.data.length - 1) {
      that.current = 0;
    } else {
      that.current++;
    }
    that.display.children[that.current].classList.add("active");
    that.drawIndicator();
  });
  this.lctrl.addEventListener("click", () => {
    that.display.children[that.current].classList.remove("active");
    if (that.current == 0) {
      that.current = that.data.length - 1;
    } else {
      that.current--;
    }
    that.display.children[that.current].classList.add("active");
    that.drawIndicator();
  });
  this.drawIndicator();
}

let headerSlider = new Slider(
  prev,
  next,
  dots[0].parentNode,
  caruselWrapper[0],
  [1, 2, 3]
);



const menuButton = document.getElementById("menuBtn");
const nav = document.querySelector(".navigation");
const shopBtn = document.getElementById('shopBtn')
const shopWindow = document.querySelector('.shop-window')
const closeBtn = document.querySelector(".navigation__head-close");

menuButton.onclick = () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
};

closeBtn.onclick = () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  }
};

shopBtn.onclick = () => {
  if (shopWindow.classList.contains("active")) {
    shopWindow.classList.remove("active");
  } else {
    shopWindow.classList.add("active");
  }
};