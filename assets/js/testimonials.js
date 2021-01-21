/*Testimonial Section */

export default function testimonials() {

    const testimonialsSection = document.querySelector('.testimonials__content');
    const testimonialContainer = testimonialsSection.querySelector('.testimonials__list')
    const nextBtn = testimonialsSection.querySelector('.btn__testimonials__next');
    const prevBtn = testimonialsSection.querySelector('.btn__testimonials__prev');

    const testimonials = testimonialContainer.querySelectorAll('.testimonial')
    let testimonialsWidth, testimonialWidth;
    let testimonialIndex = 0;
    const gridGap = 25;
    let limit = getLimit();


    window.addEventListener("resize", () => {
        limit = getLimit();
    })
    checkLimitForBtnStatus()
    nextBtn.addEventListener('click', moveToNextSlide)
    prevBtn.addEventListener('click', moveToPrevSlide)


    function moveToNextSlide() {
        if (!isContinue({ direction: true })) return;
        testimonialIndex++;
        testimonialContainer.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`
        testimonialContainer.style.transition = ".7s"
    }

    function moveToPrevSlide() {
        if (!isContinue({ direction: false })) return;
        testimonialIndex--;
        testimonialContainer.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`
        testimonialContainer.style.transition = ".7s"
    }

    const isContinue = (args) => {
        if (args.direction) {
            if (testimonialIndex < limit) {
                checkTestimonialFinish(args.direction, nextBtn, prevBtn)
                return true;
            } else {
                updateBtnStatus(nextBtn, true)
                updateBtnStatusByLimit(prevBtn)
                return false;
            }
        } else {
            if (testimonialIndex > 0) {
                checkTestimonialFinish(args.direction, prevBtn, nextBtn)
                return true;
            } else {
                updateBtnStatus(prevBtn, true)
                updateBtnStatusByLimit(nextBtn)
                return false;
            }
        }
    }

    function getElementsWidth() {
        return [testimonialContainer.clientWidth,
            testimonials[testimonialIndex].clientWidth + gridGap
        ]
    }

    function getLimit() {
        [testimonialsWidth, testimonialWidth] = getElementsWidth();
        let testimonialCountPerWrap = testimonialsWidth / testimonialWidth
        return Math.round(testimonials.length - testimonialCountPerWrap)
    }

    function checkLimitForBtnStatus() {
        if (limit == 0) {
            nextBtn.classList.add('disable');
        }
    }

    function updateBtnStatus(btn, status) {
        if (status) {
            btn.classList.add('disable')
        } else {
            btn.classList.remove('disable')
        }
    }

    function checkTestimonialFinish(direction, btn1, btn2) {
        const status = direction ? (testimonialIndex + 1 < limit) : (testimonialIndex - 1 > 0)
        if (status) {
            updateBtnStatus(btn1, false)
        } else {
            updateBtnStatus(btn1, true)
        }
        updateBtnStatus(btn2, false)
    }

    function updateBtnStatusByLimit(btn) {
        if (limit != 0) {
            updateBtnStatus(btn, false)
        }
    }
};


/*End Testimonial Section */