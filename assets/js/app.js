const personalnumberinput = document.querySelector("#personal_number");
const mobilenumberinput = document.querySelector("#mobile_number");
const loginForm = document.querySelector("#login-form");
const personalnumberPattern = /^\d{11}$/;
// personalnumberinput.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(
    "Form submitted",
    personalnumberinput.value,
    mobilenumberinput.value,
  );
  const personalnumberValue = personalnumberinput.value;
  const mobilenumbeValue = mobilenumberinput.value;

  //   const personalnumberValue = /^\d{11}$/.test(input);

  if (personalnumberValue.trim() === "") {
    personalnumberinput.closest(".input-group").classList.add("error");
    personalnumberinput
      .closest(".input-group")
      .querySelector(".message").textContent = "Personal numberi is required!";
  } else if (!personalnumberPattern.test(personalnumberValue)) {
    personalnumberinput.closest(".input-group").classList.add("error");
    personalnumberinput
      .closest(".input-group")
      .querySelector(".message").textContent = "Must contain 11 digits!";
  } else {
    personalnumberinput.closest(".input-group").classList.add("error");
    personalnumberinput
      .closest(".input-group")
      .querySelector(".message").textContent = "";
  }
});
