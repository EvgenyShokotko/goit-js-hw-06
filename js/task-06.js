const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur(event) {
  const { dataset, value, classList } = event.currentTarget;
  // console.log("Потерял фокус");
  // console.log(Number(dataset.length));
  if (value.length === Number(dataset.length))   {
    if (classList.contains("invalid")) {
      classList.remove("invalid")
    }
    classList.add("valid");
    return;
  }
  if (classList.contains("valid")) {
    classList.remove("valid")
  }
  classList.add("invalid");
}
  
// {
//     classList.toggle("valid");
//   } classList.toggle("invalid");
// }