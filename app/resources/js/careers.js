class CareersPage {

    constructor() {
        this.initialized = false;
        this.careerOpenings = [];
    }

    init(pageName) {
        let isCareersPage = pageName === 'careers';
        if (isCareersPage) {
            this.careerOpenings = document.getElementsByClassName("careers-headline");

            if (this.careerOpenings.length > 0) {
                for (let i = 0; i < this.careerOpenings.length; i++) {
                    this.careerOpenings[i].addEventListener("click", this.careerOpeningsHandler);
                }

                this.initialized = true;
            }
        }
    }

    careerOpeningsHandler() {
        this.classList.toggle("careers-headline--active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

    destroy() {
        if (this.initialized) {
            for (var i = 0; i < this.careerOpenings.length; i++) {
                this.careerOpenings[i].removeEventListener("click", this.careerOpeningsHandler)
            }
            this.initialized = false;
        }
    }
}

let careersPageScript = null;
export default function () {
    if (!careersPageScript) careersPageScript = new CareersPage();
    return careersPageScript;
}