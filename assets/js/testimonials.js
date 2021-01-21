/*Testimonial Section */

export default function testimonials() {

    const testimonialsSection = document.querySelector('.testimonials__content');
    const testimonialContainer = testimonialsSection.querySelector('.testimonials__list')
    const nextBtn = testimonialsSection.querySelector('.btn__testimonials__next');
    const prevBtn = testimonialsSection.querySelector('.btn__testimonials__prev');

    const testimonials = testimonialContainer.querySelectorAll('.testimonial')
    let testimonialIndex = 0;
    const gridGap = 25;
    const testimonialsWidth = testimonialContainer.clientWidth;
    const testimonialWidth = testimonials[testimonialIndex].clientWidth + gridGap

    const testimonialCountPerWrap = testimonialsWidth / testimonialWidth
    let nextLimit = Math.floor(testimonials.length - testimonialCountPerWrap)
    console.log(nextLimit)

    const checkButtonStatus = () => {
        if (nextLimit == 0) {
            nextBtn.classList.add('disable');
        }
    }


    const isContinue = (args) => {
        if (args.direction) {
            if (testimonialIndex < nextLimit) {
                if (testimonialIndex + 1 < nextLimit) {
                    nextBtn.classList.remove('disable');
                } else {
                    nextBtn.classList.add('disable');
                }
                prevBtn.classList.remove('disable');
                return true;
            } else {
                nextBtn.classList.add('disable');
                if (nextLimit != 0) {
                    prevBtn.classList.remove('disable');
                }
                return false;
            }
        } else {
            if (testimonialIndex > 0) {
                if (testimonialIndex - 1 > 0) {
                    prevBtn.classList.remove('disable');
                } else {
                    prevBtn.classList.add('disable');
                }
                nextBtn.classList.remove('disable');
                return true;
            } else {
                prevBtn.classList.add('disable');
                if (nextLimit != 0) {
                    nextBtn.classList.remove('disable');
                }
                return false;
            }
        }
    }
    const moveToNextSlide = () => {
        if (!isContinue({ direction: true })) return;
        testimonialIndex++;
        testimonialContainer.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`
        testimonialContainer.style.transition = ".7s"
    }
    const moveToPrevSlide = () => {
        if (!isContinue({ direction: false })) return;
        testimonialIndex--;
        testimonialContainer.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`
        testimonialContainer.style.transition = ".7s"
    }


    nextBtn.addEventListener('click', moveToNextSlide)
    prevBtn.addEventListener('click', moveToPrevSlide)
    checkButtonStatus()
};


/*End Testimonial Section */