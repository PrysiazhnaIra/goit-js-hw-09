const form = document.querySelector(".feedback-form");

const email = form.elements.email;
const textarea = form.elements.message;

let formData = { 
    email: "", 
    message: "",
    reset() {
        this.email = "";
        this.message = "";
    },
};

const localStorageKey = "feedback-form-state";

const formDataString = localStorage.getItem(localStorageKey);

if(formDataString) {
    formData = JSON.parse(formDataString);
    email.value = formData.email;
    textarea.value = formData.message;
}

form.addEventListener("input", (evt) => {
    if (evt.target == evt.currentTarget.elements.email) {
       formData.email = evt.target.value.trim();
    } else {
        formData.message = evt.target.value.trim();
    }
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    if(!formData.email || !formData.message){
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        form.reset();
        formData.reset();
    }
});