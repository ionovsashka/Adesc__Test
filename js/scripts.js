// Custom Scripts
//Checking the device
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}

// Бургер

const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	})
}

// FAQ

const faqContainer = document.querySelector('.faq__container')
const faqAnswerCollection = document.querySelectorAll('.faq__answer') // Данная переменная предназначена для реализации функционала при котором при клике на любой вопрос закрываются все, кроме него

if(faqContainer){
	faqContainer.addEventListener("click", (e) => {
		if(e.target.closest('.faq__question')){
			if(e.target.matches('active')){
				e.target.classList.remove('active')
				return
			}
			const faqAsk = e.target.parentNode
			const faqAnswer = faqAsk.querySelector('.faq__answer')
			if(faqAnswer.classList.contains('active')){
				console.log('active');
				faqAnswer.classList.remove('active')
				return
			}
			// faqAnswerCollection.forEach((item) => { // Данный кусок кода относиться к функционалу переменной faqAnswerCollection
			// 	item.classList.remove('active')
			// })
			faqAnswer.classList.toggle('active')
		}
	})
}


