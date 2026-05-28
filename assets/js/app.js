const personalnumberinput = document.querySelector("#personal_number");
const mobilenumberinput = document.querySelector("#mobile_number");
const loginForm = document.querySelector("#login-form");
const personalnumberPattern = /^\d{11}$/;
const mobilenumberPattern = /^\d{11}$/;
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

  let isformvalid = true;
  const personalnumberValue = personalnumberinput.value;
  const mobilenumberValue = mobilenumberinput.value;

  //   const personalnumberValue = /^\d{11}$/.test(input);

  if (personalnumberValue.trim() === "") {
    personalnumberinput.closest(".input-group").classList.add("error");
    personalnumberinput
      .closest(".input-group")
      .querySelector(".message").textContent = "Personal numberi is required!";
    isformvalid = false;
  } else if (!personalnumberPattern.test(personalnumberValue)) {
    personalnumberinput.closest(".input-group").classList.add("error");
    personalnumberinput
      .closest(".input-group")
      .querySelector(".message").textContent = "Must contain 11 digits!";
    isformvalid = false;
  } else {
    personalnumberinput.closest(".input-group").classList.add("error");
    personalnumberinput
      .closest(".input-group")
      .querySelector(".message").textContent = "";
  }

  if (mobilenumberValue.trim() === "") {
    mobilenumberinput.closest(".input-group").classList.add("error");
    mobilenumberinput
      .closest(".input-group")
      .querySelector(".message").textContent = "Mobile numberi is required!";
    isformvalid = false;
  } else if (!mobilenumberPattern.test(mobilenumberValue)) {
    mobilenumberinput.closest(".input-group").classList.add("error");
    mobilenumberinput
      .closest(".input-group")
      .querySelector(".message").textContent = "Must contain 9 digits!";
    isformvalid = false;
  } else {
    mobilenumberinput.closest(".input-group").classList.add("error");
    mobilenumberinput
      .closest(".input-group")
      .querySelector(".message").textContent = "";
  }

  console.log("Form valid:", isformvalid);
  if (isformvalid) {
    console.log("Form submitted successfully");
    // loginForm.submit()
  }
});
