const nav = document.querySelector(".nav");

document.querySelector("#menu-btn").onclick = () => {
  nav.classList.toggle("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};

const cartItem = document.querySelector(".cart-items-cont");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  nav.classList.remove("active");
  searchForm.classList.remove("active");
};

const searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  nav.classList.remove("active");
  cartItem.classList.remove("active");
};

window.onscroll = () => {
  nav.classList.remove("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};
