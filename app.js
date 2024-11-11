const btn = document.querySelector("#btntoggle");
const txt = document.querySelector("#container");
const concel = document.querySelector("#concel");

btn.addEventListener("click", () => {
  txt.classList.remove("hidden");
  txt.classList.add("animate-slideDown");
});

concel.addEventListener("click", () => {
  txt.classList.add("hidden");
});
removes.addEventListener("click", () => {
  txt.classList.add("hidden");
});
