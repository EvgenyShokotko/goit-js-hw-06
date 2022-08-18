const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSentForm);

function onSentForm(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
    
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => { 
        // console.log(value);
    });

  console.log(`Email: ${email.value}, password: ${password.value}`);
  event.currentTarget.reset();
}