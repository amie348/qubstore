let url = `https://admin.qubstore.com`;
let error = false;
let resetCall = false;



document.getElementById(`send_code`).addEventListener(`click` , async (e)=> {

  e.preventDefault();

  let email = document.getElementById(`email`).value;


  if(!email){
    document.getElementById(`error-email`).innerHTML = `Email is required`;
    return
  } else {
    document.getElementById(`error-email`).innerHTML = ``;
  }

  // document.getElementById(`send-code`).disabled = true;

  await axios.post(`${url}/user/resetCode`, {
    email
  }).
  then(response => {
    console.log(`response`, response);
    document.getElementById(`code-btn`).click();
  })
  .catch(err => {
    console.log(err.response);
  });

});


document.getElementById(`reset`).addEventListener(`click`, async () => {

  if(resetCall){
    return;
  }

  let email = document.getElementById(`email`).value;
  let password = document.getElementById(`password`).value;
  let passwordConfirm = document.getElementById(`confirm_password`).value;
  let code = document.getElementById(`verification_code`).value;

  if(!email){
    document.getElementById(`error-email`).innerHTML = `email is required`;
    error = true
  } else {
    document.getElementById(`error-email`).innerHTML = ``;
    error = error ? true : false
  }
  if(!password || password.length < 8){
    document.getElementById(`error-password`).innerHTML = `Password must be atleast 8 characters`;
    error = true
  } else {
    document.getElementById(`error-password`).innerHTML = ``;
    error = error ? true : false
  }
  if(password != passwordConfirm){
    document.getElementById(`error-confirm-password`).innerHTML = `Password DO not match`;
    error = true
  } else {
    document.getElementById(`error-confirm-password`).innerHTML = ``;
    error = error ? true : false
  }
  if(!code){
    document.getElementById(`error-send-code`).innerHTML = `Verification code is required`;
    error = true
  } else {
    document.getElementById(`error-send-code`).innerHTML = ``;
    error = error ? true : false
  }

  if(error){
    return
  }

  resetCall = true;
  axios.post(`${url}/user/ResetPassword`, {
    email, newPassword: password, code
  })
  .then(response => {

    console.log(response.data);
    document.getElementById(`success-btn`).click();

  })
  .catch(err => {

    if(err.response.Code == 401){
      document.getElementById(`error-send-code`).innerHTML = `Incorrect Code`
    }
    else{
      console.log(err.response);
    }

  })
  

});

document.getElementById(`close-1`).addEventListener(`click`, ()=> {

  window.location = `https://qubstore.com/login.html`;

})


document.getElementById(`close-2`).addEventListener(`click`, ()=> {

  window.location = `https://qubstore.com/login.html`;

})