// function sidebar(e) {
//   let list = document.querySelector("ul");
//   if (e.name === "menu-outline") {
//     e.name = "close-outline";
//     list.classList.add("top-[80px]");
//     list.classList.remove("top-[-400px]");
//     list.classList.add("opacity-100");
//   } else {
//     e.name = "menu-outline";
//     list.classList.remove("top-[80px]");
//     list.classList.add("top-[-400px]");
//     list.classList.remove("opacity-100");
//   }
// }

function sidebar(icon) {
  const list = document.querySelector("nav ul");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
    list.classList.add("top-[80px]", "opacity-100");
    list.classList.remove("top-[-400px]");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
    list.classList.remove("top-[80px]", "opacity-100");
    list.classList.add("top-[-400px]");
  }
}
