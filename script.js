let yearnow = document.querySelector(".year");
addEventListener("click", function () {
  yearnow.textContent = new Date().getFullYear();
});

const btnEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".main-header");
// console.log(headerEl);
btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
// only for scrolling purpose in safari
const allLink = document.querySelectorAll("a:Link");
allLink.forEach(function (Link) {
  Link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = Link.getAttribute("href");
    console.log(href);
    if (href == "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const elementsec = document.querySelector(href);
      elementsec.scrollIntoView({ behavior: "smooth" });
    }
    if (Link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
///for sticky nav top//////
const sectHero = document.querySelector(".section-hero");

const obss = new IntersectionObserver(
  function (entries) {
    const entity = entries[0];

    if (entity.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (entity.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obss.observe(sectHero);

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
console.log("hello worl");
let x = 0;
let y = true;

console.log(`fwkvv${y ? (x = 4) : (x = 0)}`);
