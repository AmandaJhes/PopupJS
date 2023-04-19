const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
    popup.style.display = 'block';
});

popup.addEventListener('click', (event) => {
    const classNameOfClikedElement = event.target.classList[0];
    const classNames = ["popup-link", "popup-wrapper", "popup-close"];
    const shouldClosePopup = classNames.some(className => className === classNameOfClikedElement)

    if (shouldClosePopup) {
        popup.style.display = 'none';
    }
})

