const plusSigns = document.querySelectorAll('.card-imgs .icon');

plusSigns.forEach(sign => {
    sign.addEventListener('click', (e) => {
        e.target.classList.add('icon-click-animate');
    });
});
