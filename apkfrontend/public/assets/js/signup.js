let url = "https://admin.qubstore.com";
let codeId = ``;
let error = false;


document.getElementById(`cmt-register-form`).addEventListener(`submit`, async (e) =>{

  e.preventDefault();

  console.log("Sign up")

  let username = document.getElementById(`username`).value;
  let email = document.getElementById(`email`).value;
  let password = document.getElementById(`password`).value;
  let passwordConfirm = document.getElementById(`confirmPassword`).value;

  if(!username){
    document.getElementById(`error-username`).innerHTML = `username is required`;
    error = true
  } else {
    document.getElementById(`error-username`).innerHTML = ``;
    error = error ? true : false
  }
  if(!email){
    document.getElementById(`error-email`).innerHTML = `email is required`;
    error = true
  } else {
    document.getElementById(`error-email`).innerHTML = ``;
    error = error ? true : false
  }
  if(!password || password.length < 8){
    document.getElementById(`error-password`).innerHTML = `Password must be atleast 8 characters`;
    error = true;
  } else {
    document.getElementById(`error-password`).innerHTML = ``;
    error = error ? true : false
  } 
  if(password != passwordConfirm){
    document.getElementById(`error-confirm-password`).innerHTML = `password and confirm password do not match`;
    error = true;
  } else {
    document.getElementById(`error-confirm-password`).innerHTML = ``;
    error = error ? true : false
  }

  if(error){
    return
  }

  document.getElementById(`sign-up-btn`).disabled = true;

  await axios.post(`${url}/user/sendCode`, { name: username, email })
  .then(response => {
    console.log(`response`, response);
    codeId = response.data.codeId;
    document.getElementById(`verify-modal-btn`).click();
  })
  .catch(err => {
    alert(err.response.data.message);
    console.log(err.response)
  });
  document.getElementById(`sign-up-btn`).disabled = false;
});


document.getElementById(`send-code-btn`).addEventListener(`click`, async() => {

  let code = document.getElementById(`code`).value;
  if(!code){
    return
  }

  let username = document.getElementById(`username`).value;
  let email = document.getElementById(`email`).value;
  let password = document.getElementById(`password`).value;
  let passwordConfirm = document.getElementById(`confirmPassword`).value;

  if(!username){
    document.getElementById(`error-username`).innerHTML = `username is required`;
    error = true
  } else {
    document.getElementById(`error-username`).innerHTML = ``;
    error = error ? true : false
  }
  if(!email){
    document.getElementById(`error-email`).innerHTML = `email is required`;
    error = true
  } else {
    document.getElementById(`error-email`).innerHTML = ``;
    error = error ? true : false
  }
  if(!password || password.length < 8){
    document.getElementById(`error-password`).innerHTML = `Password must be atleast 8 characters`;
    error = true;
  } else {
    document.getElementById(`error-password`).innerHTML = ``;
    error = error ? true : false
  } 
  if(password != passwordConfirm){
    document.getElementById(`error-confirm-password`).innerHTML = `password and confirm password do not match`;
    error = true;
  } else {
    document.getElementById(`error-confirm-password`).innerHTML = ``;
    error = error ? true : false
  }

  if(error){
    return
  }

  
  await axios.post(`${url}/user/signup`, {
    name: username,
    email,
    password,
    passwordConfirm,
    codeId,
    code
  })
  .then( response => {

    console.log(response)

    localStorage.setItem(`name`, response.data.user.name);
    localStorage.setItem(`dp`, response.data.user.dp);
    localStorage.setItem(`token`, response.data.token)
    window.location.replace(`home.html`);

  })
  .catch(err => {

    console.log(err.response);

  })

});