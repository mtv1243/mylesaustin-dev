
const bodyEl = document.querySelector('body');
const navEl = document.querySelector('nav');
const iconEl = document.querySelector('.icon');
const moreButtonEl = document.querySelector('.more-button');

const $ulWrapper = $('.ul-wrapper');

bodyEl.addEventListener('click', (e)=> {
    // const target = e.target;
    const icon = e.target.closest('.icon');
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
        iconEl.classList.remove('clicked');
        $ulWrapper.slideUp(300);
    }
});

// preserve menu if user resizes window
window.addEventListener('resize', (e) => {
    if(window.innerWidth > 768 ) {
        // console.log('desktop');
        $ulWrapper.slideDown(10);
        iconEl.classList.remove('clicked');
    } else if (window.innerWidth <= 768) {
        // console.log('mobile');
        $ulWrapper.slideUp(10);
        iconEl.classList.remove('clicked');
    }
})

// Intersection Observer
let ioOptions = {
    root: null,
    rootMargin: '0px',
    threshold: .25
}

const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {

        if(entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        }

        // console.log(`${entry.target.classList.value} is in view: ${entry.isIntersecting}`);
    }
}, ioOptions);

document.querySelectorAll('.project')
    .forEach(element => {io.observe(element)});


console.log(`
#                (           )    *                
#   (  (         )\\ )  (  ( /(  (  \`               
#   )\\))(   '(  (()/(  )\\ )\\()) )\\))(  (           
#  ((_)()\\ ) )\\  /(_)(((_((_)\\ ((_)()\\ )\\     __   
#  _(())\\_)(((_)(_)) )\\___ ((_)(_()((_((_)   _\\ \\  
#  \\ \\((_)/ | __| | ((/ __/ _ \\|  \\/  | __| (_)| | 
#   \\ \\/\\/ /| _|| |__| (_| (_) | |\\/| | _|   _ | | 
#    \\_/\\_/ |___|____|\\___\\___/|_|  |_|___| (_/_/  
#                                                  
`)

