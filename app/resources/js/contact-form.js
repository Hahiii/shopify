// import axios from 'axios';
//
// class ContactForm {
//     constructor() {
//         this.initialized = false;
//         this.contactForm = null;
//     }
//
//     init() {
//         this.contactForm = document.getElementById('js__contact-form');
//         if (this.contactForm) {
//             this.contactForm.addEventListener('submit', this.submitHandler);
//             this.initialized = true;
//         }
//     }
//
//     destroy() {
//         if (this.initialized) {
//             this.contactForm.removeEventListener('submit', this.submitHandler);
//             this.initialized = false;
//         }
//     }
//
//     submitHandler(event) {
//         event.preventDefault();
//         let inputs = this.elements;
//
//         // Iterate over the form controls
//         let formParams = {}
//         for (let input of inputs) {
//             if (input.nodeName === "INPUT" && input.type === "text") {
//                 // Update text input
//                 formParams[input.name] = input.value;
//             }
//         }
//
//         axios.post(this.getAttribute('action'), formParams)
//             .then(res => {
//             })
//             .catch(error => {
//             });
//     }
// }
//
// let contactFormScript = null;
// export default function () {
//     if (!contactFormScript) contactFormScript = new ContactForm();
//     return contactFormScript;
// }
