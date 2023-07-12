const mainRating = document.querySelector('.main__rating'),
	mainSubmit = document.querySelector('.main__submit'),
	mainRequest = document.querySelector('.main__request'),
	mainThankyou = document.querySelector('.main__thankyou'),
	mainSelect = document.querySelector('.main__select');

let activeRating, activeList;

const getRatingValue = (ev) => {
	console.log(ev.target.textContent);
	activeRating = ev.target.textContent;

	const target = ev.target;

	if (target.matches('li')) {
		if (activeList) {
			(activeList.style.backgroundColor = ''), (activeList.style.color = '');
		}

		target.style.backgroundColor = 'green';
		target.style.color = 'white';
	}
};

const showThankYou = () => {
	mainSelect.textContent = activeRating;

	mainRequest.style.display = 'none';
	mainThankyou.style.display = 'block';
};

mainRating.addEventListener('click', getRatingValue);
mainSubmit.addEventListener('click', showThankYou);
