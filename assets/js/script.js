document.addEventListener('DOMContentLoaded', function () {
	const descriptions = { 0: 'desc1', 1: 'desc2', 2: 'desc3' };
	const techStacks = { 0: 'techStack1', 1: 'techStack2', 2: 'techStack3' };
	(function () {
		// https://dashboard.emailjs.com/admin/account
		emailjs.init('pJeHqFE3nlAgVDeR1');
	})();
	document
		.getElementById('contact-form')
		.addEventListener('submit', function (event) {
			event.preventDefault();
			// generate a five digit number for the contact_number variable
			this.contact_number.value = (Math.random() * 100000) | 0;
			// these IDs from the previous steps
			emailjs.sendForm('contact_service', 'contact_form', this).then(
				function () {
					console.log('SUCCESS!');
					window.location.href = '/portfolio';
				},
				function (error) {
					console.log('FAILED...', error);
				}
			);
		});
	const slides = document.querySelectorAll('.slide');

	// loop through slides and set each slides translateX property to index * 100%
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${indx * 100}%)`;
	});

	// select next slide button
	const nextSlide = document.querySelector('.btn-next');

	// current slide counter
	let curSlide = 0;
	const curSlideDesc = document.querySelector('#description');
	const curSlideTechStack = document.querySelector('#tech-stack');
	curSlideDesc.innerHTML = `<p>${descriptions[curSlide]}</p>`;
	curSlideTechStack.innerHTML = `<p>${techStacks[curSlide]}</p>`;
	// maximum number of slides
	let maxSlide = slides.length - 1;
	// add event listener and navigation functionality
	nextSlide.addEventListener('click', function () {
		// check if current slide is the last and reset current slide
		if (curSlide === maxSlide) {
			curSlide = 0;
			curSlideDesc.innerHTML = `<p>${descriptions[curSlide]}</p>`;
			curSlideTechStack.innerHTML = `<p>${techStacks[curSlide]}</p>`;
		} else {
			curSlide++;
			curSlideDesc.innerHTML = `<p>${descriptions[curSlide]}</p>`;
			curSlideTechStack.innerHTML = `<p>${techStacks[curSlide]}</p>`;
		}
		slides.forEach((slide, indx) => {
			slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
		});
	});
	// select prev slide button
	const prevSlide = document.querySelector('.btn-prev');

	// add event listener and navigation functionality
	prevSlide.addEventListener('click', function () {
		// check if current slide is the first and reset current slide to last
		if (curSlide === 0) {
			curSlide = maxSlide;
			curSlideDesc.innerHTML = `<p>${descriptions[curSlide]}</p>`;
			curSlideTechStack.innerHTML = `<p>${techStacks[curSlide]}</p>`;
		} else {
			curSlide--;
			curSlideDesc.innerHTML = `<p>${descriptions[curSlide]}</p>`;
			curSlideTechStack.innerHTML = `<p>${techStacks[curSlide]}</p>`;
		}

		//   move slide by 100%
		slides.forEach((slide, indx) => {
			slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
		});
	});
});
