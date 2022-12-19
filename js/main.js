class FormHandler {
  constructor(formId, property) {
    this.formId = formId;
    this.property = property;
  }

  onSubmit(event) {
    event.preventDefault();
    alert(
      `Form "${this.formId}" was submitted by ${this.property}`
    );
  }

  onToolbarClick(event) {
    event.preventDefault();
    alert(
      `Button "${event.target.innerHTML}" was clicked by ${this.property}`
    );
  }
}

const formHandler = new FormHandler("form1", "Test User");
const form = document.querySelector(".form");
form.addEventListener("submit", formHandler.onSubmit.bind(formHandler));

const buttons = document.querySelectorAll(".toolbar button");
buttons.forEach((button) => {
  button.addEventListener(
    "click",
    formHandler.onToolbarClick.bind(formHandler)
  );
});
