
let nav = document.querySelector("nav")

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 15) {
    nav.classList.add("navbar-scroll")
  } else {
    nav.classList.remove("navbar-scroll")
  }
})

