const overlay = document.getElementById("overlay");
const links_container = document.getElementById("links-container");
const open_menu = document.getElementById("open-menu-icon");
const close_menu = document.getElementById("close-menu-icon");

// When open menu icon is clicked:
open_menu.addEventListener("click", () => {
	overlay.style.display = "block";
	links_container.style.display = "flex";
	links_container.style.right = "0";
});

// When close menu icon is clicked:
close_menu.addEventListener("click", () => {
	overlay.style.display = "none";
	links_container.style.display = "none";
	links_container.style.right = "-70vw";
});
