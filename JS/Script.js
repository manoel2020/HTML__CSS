function AbrirFecharMenu() {
  if (document.querySelector(".nav").classList.contains("active")) {
    document.querySelector(".nav").classList.remove("active");
  } else {
    document.querySelector(".nav").classList.add("active");
  }
}
