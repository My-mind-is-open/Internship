
let hederBtnmenu = document.querySelector('.header__btn-phone');
let nav = document.querySelector('.nav');
let navClose = document.querySelector('.nav__btn-close');
let btnForm = document.querySelectorAll('.btn');
const form = document.querySelector('.form');
const fullform = document.querySelector('.fullform');
const closeBtnForm = document.querySelector('.fullform__close');
const formSize = document.querySelector('.fullform__container')
const inputsContainers = document.querySelector('.inputs ');
// cookies
const cookies = document.querySelector('.cookies');
const cookiesBtnAccept = document.querySelector('.cookies__btn-accept');
const cookiesBtnDecline = document.querySelector('.cookies__btn-decline');
const cookiesBtnClose = document.querySelector('.cookies__btn-close');
// inputRequired
const boxInputName = document.querySelector('.box-input__name')
const boxInputEmail = document.querySelector('.box-input__email');
const boxInputPhone = document.querySelector('.box-input__phone');

const closeSucceedForm = document.querySelector('.successful-Form__close');
const succeedForm = document.querySelector('.successful-Form');
const successfulFormBtn = document.querySelector('.successful-Form__btn');
let label = true;

let inputName = document.querySelector('.req1');
let inputEmail = document.querySelector('.req2');
let inputPhone = document.querySelector('.req3');





hederBtnmenu.addEventListener('click', () => {
	nav.style.display = "flex";
})
navClose.addEventListener('click', () => {
	nav.style.display = "none";
})
// cockiesAction
cookiesBtnAccept.addEventListener('click', () => {
	cookies.style.display = 'none';
})
cookiesBtnDecline.addEventListener('click', () => {
	cookies.style.display = 'none';
})
cookiesBtnClose.addEventListener('click', () => {
	cookies.style.display = 'none';
})

// form

closeSucceedForm.addEventListener('click', () => {
	fullform.style.display = 'none';
});
successfulFormBtn.addEventListener('click', () => {
	fullform.style.display = 'none';
});

for (let i = 0; i < btnForm.length; i++) {
	btnForm[i].addEventListener('click', () => {
		fullform.style.display = "block";
	})
}


closeBtnForm.addEventListener('click', () => {
	fullform.style.display = "none";
})

function retrieveFormValue(event) {
	event.preventDefault();
	const fields = document.querySelectorAll(".req");

	const values = {};
	fields.forEach(field => {
		const { name, value } = field;
		values[name] = value;

	});


	if (inputName.value == '') {
		if (boxInputName.children.length < 3) {
			inputName.classList.add('error-value');
			boxInputName.classList.add('error-box');
			let errorLead = document.createElement('p');
			errorLead.innerText = 'This field is required.';
			errorLead.classList.add('error-lead')
			boxInputName.appendChild(errorLead);
			// formSize.style.height = '699' + 'px';
			if (window.innerWidth > 375) {
				formSize.style.height = '699' + 'px';
			} else {
				formSize.style.height = '659' + 'px';
				formSize.style.top = '2' + '%';
				formSize.style.transform = 'translate(-50%, -2%)'

			}

		}


	} else {
		let errorBox = document.querySelector('.error-box');
		if (errorBox) {
			inputName.classList.remove('error-value');
			boxInputName.lastElementChild.remove();
			errorBox.classList.remove('error-box');

		}


	}

	if (inputEmail.value == '') {
		if (boxInputEmail.children.length < 3) {
			inputEmail.classList.add('error-value');
			boxInputEmail.classList.add('error-box2');
			let errorLead = document.createElement('p');
			errorLead.innerText = 'This field is required.';
			errorLead.classList.add('error-lead');
			boxInputEmail.appendChild(errorLead);

			if (window.innerWidth > 375) {
				formSize.style.height = '699' + 'px';
			} else {
				formSize.style.height = '659' + 'px';
				formSize.style.top = '2' + '%';
				formSize.style.transform = 'translate(-50%, -2%)'

			}

		}

	} else {
		let errorBox2 = document.querySelector('.error-box2');

		if (errorBox2) {
			inputEmail.classList.remove('error-value');
			boxInputEmail.lastElementChild.remove();

			errorBox2.classList.remove('error-box2');
		}

	}

	if (inputPhone.value == '') {
		if (boxInputPhone.children.length < 3) {
			inputPhone.classList.add('error-value');
			boxInputPhone.classList.add('error-box3');
			let errorLead = document.createElement('p');
			errorLead.innerText = 'This field is required.';
			errorLead.classList.add('error-lead');
			boxInputPhone.appendChild(errorLead);
			// formSize.style.height = '699' + 'px';
			if (window.innerWidth > 375) {
				formSize.style.height = '699' + 'px';
			} else {
				formSize.style.height = '659' + 'px';
				formSize.style.top = '2' + '%';
				formSize.style.transform = 'translate(-50%, -2%)'

			}
		}

	} else {

		let errorBox3 = document.querySelector('.error-box3');
		if (errorBox3) {
			inputPhone.classList.remove('error-value');
			boxInputPhone.lastElementChild.remove();

			if (errorBox3) {
				errorBox3.classList.remove('error-box3');
			}

		}


	}
	if ((inputName.value == '' || inputEmail.value == '' || inputPhone.value == '') && label) {
		let errorText = document.createElement('span');
		errorText.innerText = 'Please fill in all required fields'
		errorText.classList.add('error-text');
		inputsContainers.appendChild(errorText);
		label = false;
		console.log(label)

	}
	if (inputName.value !== '' && inputEmail.value !== '' && inputPhone.value !== '') {
		formSize.style.display = 'none';
		succeedForm.style.display = 'block';
		console.log(values)
	}

}
form.addEventListener('submit', retrieveFormValue);
