const personalnumberinput = document.querySelector("#personal_number");

personalnumberinput.addEventListener("input", (e) => {
  console.log(e.target.value);
});
