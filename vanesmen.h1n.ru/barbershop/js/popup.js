var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login"); // в переменную storage сохраняем то значение, которое сейчас находится в нашем хранилище под ключом login
var overlay = document.querySelector(".modal-overlay");
var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

link.addEventListener("click", function(event) {
	event.preventDefault(); // Отменяет действие по умолчанию
	popup.classList.add("modal-content-show");
	overlay.classList.add("modal-overlay-show");

	if (storage) { // если значение внутри переменной storage существует
		login.value = storage; // мы в свойство value переменную login устанавливаем значение, которое находится в переменной storage 
		password.focus(); // ставим фокус на поле пароля
	} else {
		login.focus(); //  ставим фокус на поле логина
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
	overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function(event) {
	if (!login.value || !password.value) { // если пользователь не заполнил или логин или пароль
		event.preventDefault(); // то мы отменяем действие по умолчанию
		//console.log("Нужно ввести логин и пароль");
		popup.classList.add("modal-error");
	} else { // иначе мы сохраняем то, что ввел пользователь в поле логин в localStorage
		localStorage.setItem("login", login.value); //в localStorage сохраняем в ключе login текущее значение, которое находится в поле login
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) { // если та клавиша, которую нажал пользователь равна 27
		overlay.classList.remove("modal-overlay-show");
		popup.classList.remove("modal-error");
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
		}
	}
});

overlay.addEventListener("click", function(event) {
	popup.classList.remove("modal-content-show");
	mapPopup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
	overlay.classList.remove("modal-overlay-show");
});


mapOpen.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
	overlay.classList.add("modal-overlay-show");
});

mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) { // если та клавиша, которую нажал пользователь равна 27
		overlay.classList.remove("modal-overlay-show");
		//popup.classList.remove("modal-error");
		if (mapPopup.classList.contains("modal-content-show")) {
			mapPopup.classList.remove("modal-content-show");
		}
	}
});


