const headerPrev = document.querySelector(".btn-prev"),
  headerNext = document.querySelector(".btn-next"),
  slides = document.querySelectorAll("#img"),
  dots = document.querySelectorAll(".dot"),
  caruselWrapper = document.querySelectorAll("#slider");

const sliderFooter = document.getElementById("slider-footer"),
  footerPrev = document.getElementById("btn-prev"),
  footerNext = document.getElementById("btn-next"),
  dotsFooter = document.querySelectorAll(".footer-dot");

const sliderService = document.querySelectorAll(".services__list"),
  servicePrev = document.getElementById("service-btn-next"),
  serviceNext = document.getElementById("service-btn-prev"),
  dotsService = document.querySelectorAll(".service-dot");

const menuButton = document.getElementById("menuBtn"),
  nav = document.querySelector(".navigation"),
  shopBtn = document.getElementById("shopBtn"),
  shopWindow = document.querySelector(".shop-window"),
  closeBtn = document.querySelector(".navigation__head-close");

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
  headerPrev,
  headerNext,
  dots[0].parentNode,
  caruselWrapper[0],
  [1, 2, 3]
);

let footerSlider = new Slider(
  footerPrev,
  footerNext,
  dotsFooter[0].parentNode,
  sliderFooter,
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
);

let serviceSlider = new Slider(
  serviceNext,
  servicePrev,
  dotsService[0].parentNode,
  sliderService[0],
  [1, 2, 3, 4, 5, 6]
);
