const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const sliderWrapper = document.querySelector('.slider-wrapper');
const widthOfSliderContainer = document.querySelector('.slider-main').offsetWidth;
const amountOfSlides = document.querySelectorAll('.slide').length
const slide = document.querySelector('.slide')

rightArrow.onclick = slideRight;
leftArrow.onclick = slideLeft;

function slideRight() {
	const position = +currentSliderPosition()
	const newPosition = position - widthOfSliderContainer
	if (-changeWidthOfsliderContainer() > newPosition) return false
	sliderWrapper.style.transform = `translateX(${newPosition}px)`

}

function slideLeft() {
	const position = +currentSliderPosition()
	if (position == 0) return false
	const newPosition = position + widthOfSliderContainer
	sliderWrapper.style.transform = `translateX(${newPosition}px)`
}

function currentSliderPosition() {
	const position = sliderWrapper.style.transform
	const arr = position.split('')
	return arr.filter(e => Number.isInteger(+e) || e === '-').join('')
}

function changeWidthOfsliderContainer() {
	const slideMargin = +getComputedStyle(slide).margin.replace(/\D/g, '') * 2
	const widthOfSlide = slide.offsetWidth + slideMargin
	const widthOfSliderContainer = (widthOfSlide * amountOfSlides) - widthOfSlide*4
	return widthOfSliderContainer
}