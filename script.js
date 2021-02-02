
const bodyEl = document.querySelector('body');
const navEl = document.querySelector('nav');
const iconEl = document.querySelector('.icon');
const $ulWrapper = $('.ul-wrapper');

bodyEl.addEventListener('click', (e)=> {
    // const target = e.target;
    const icon = e.target.closest('.icon');
    console.log(icon);
    // if click is inside icon
    if(icon) {
        // if icon has class 'clicked'
        if(iconEl.classList.value.includes('clicked')) {
            iconEl.classList.remove('clicked');
            $ulWrapper.slideToggle(300);
        // if icon des not have class 'clicked'
        } else if(!iconEl.classList.value.includes('clicked')) {
            iconEl.classList.add('clicked');
            $ulWrapper.slideToggle(300);
        }
    // if click is outside icon
    } else if(!icon && iconEl.classList.value.includes('clicked')) {
        console.log('not icon');
        iconEl.classList.remove('clicked');
        $ulWrapper.slideUp(300);
    }
});

window.addEventListener('resize', (e) => {
    if(window.innerWidth > 768 ) {
        $ulWrapper.slideDown(10);
        // iconEl.classList.remove('clicked');
    } else if (window.innerWidth <= 768) {
        $ulWrapper.slideUp(10);
    }
})