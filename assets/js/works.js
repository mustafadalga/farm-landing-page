/* How To Works Section */

export default function works() {
    const worksSection = document.querySelector('.works__content');
    const progressbar = worksSection.querySelector('.form_progressbar');
    const progressbarSteps = progressbar.querySelectorAll('.progressbar__step')
    const firstStep = worksSection.querySelector('.first_step')

    progressbar.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName == "LI") {
            const dataStep = event.target.getAttribute('data-step');
            for (let index = dataStep - 1; index < progressbarSteps.length; index++) {
                progressbarSteps[index].classList.remove('active');
            }
            for (let index = dataStep - 1; index > 0; index--) {
                progressbarSteps[index].classList.add('active');
            }
            event.target.classList.add('active')
            firstStep.style.marginLeft = `-${(dataStep-1)*100}%`
        }
    });
}


/* End How To Works Section */