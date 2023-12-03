console.log("script running..........");

const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const nav = document.querySelector(".navbar");

bar.addEventListener("click", () => {
  nav.classList.add("active");
});

close.addEventListener("click", () => {
  nav.classList.remove("active");
});

// shop ------------------- >>>>>>>>>>>>>>>> sproduct

const MainImg = document.querySelector("#MainImg");
const smallImg = document.querySelectorAll(".small-img");

smallImg.forEach((img) => {
  img.addEventListener("click", (e) => {
    MainImg.src = img.src;
  });
});
