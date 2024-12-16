document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  const email = document.getElementById("email");
  const zip = document.getElementById("zip");
  const country = document.getElementById("country");
  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("passwordConfirm");

  zip.minLength = 5;


  email.select();

  const inputFields = [email, zip, country, password, passwordConfirm];

  email.addEventListener("input", () => {
    if (!email.checkValidity()) {
      showEror(email, "Please enter a valid email");
    } else clearErorr(email);
  });

  country.addEventListener("input", () => {
    if (country.value.trim() === "") {
      showEror(country, "Please enter a country");
    } else clearErorr(country);
  });

  zip.addEventListener("input", () => {
    if (!zip.checkValidity()) {
      showEror(zip, "Please enter a zip number");
    } else clearErorr(zip);
  });

  password.addEventListener("input", () => {
    if (password.value.length < 5) {
      password.setCustomValidity("Please enter atleast 5 characters")
      showEror(password, "Please enter atleast 5 characters");
    } else if (passwordConfirm.value.length>0 && passwordConfirm.value != password.value) {
      password.setCustomValidity("Please enter atleast 5 characters")
      passwordConfirm.setCustomValidity("Please enter atleast 5 characters")
      showEror(password, "Please enter a valid passowrd");
    }
    else {
      passwordConfirm.setCustomValidity("")
      password.setCustomValidity("");
      clearErorr(password);
      clearErorr(passwordConfirm);
    }
  });

  passwordConfirm.addEventListener("input", () => {
    if (passwordConfirm.value != password.value) {
      showEror(passwordConfirm, "Please enter a valid passowrd");
      passwordConfirm.setCustomValidity("Please enter atleast 5 characters")
    } else {
      clearErorr(passwordConfirm);
      clearErorr(password);
      passwordConfirm.setCustomValidity("")
      password.setCustomValidity("");
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      alert("Please don't be stupid");
    } else {
      alert("Nice job! Have a banana");
      inputFields.forEach((input) => {
        input.value = "";
      });
    }
  });
});

function showEror(input, message) {
  const erroSpan = document.getElementById(input.id + "Error");
  input.classList.add("invalid");
  erroSpan.textContent = message;
  erroSpan.style.display = "block";
  console.log("aaaa");
}

function clearErorr(input) {
  const erroSpan = document.getElementById(input.id + "Error");
  input.classList.remove("invalid");
  erroSpan.textContent = "";
  erroSpan.style.display = "none";
}
