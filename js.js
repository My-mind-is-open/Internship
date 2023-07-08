
let hederBtnmenu = document.querySelector('.header__btn-phone');
let nav = document.querySelector('.nav');
let navClose = document.querySelector('.nav__btn-close');








hederBtnmenu.addEventListener('click', () => {
	nav.style.display = "flex";
})
navClose.addEventListener('click', () => {
	nav.style.display = "none";
})

