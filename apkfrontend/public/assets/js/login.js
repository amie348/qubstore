let url = "https://admin.qubstore.com";
let error = false;



document.getElementById(`cmt-login-form`).addEventListener(`submit` , (e) => {

  e.preventDefault();

  let name = document.getElementById(`username`).value;
  let password = document.getElementById(`password`).value;

  if(!name){
    document.getElementById(`name-error`).innerHTML = `username is required`;
    error = true;
  }
  else{
    document.getElementById(`name-error`).innerHTML = ``;
    error = false;
  }
  if(!password || password.length < 8){
    document.getElementById(`password-error`).innerHTML = `Password must be atleast 8 characters`;
    error = true;
  }
  else{
    document.getElementById(`password-error`).innerHTML = ``;
    error = false;
  }

  if(error){
    return
  }

  axios.post(`${url}/user/signin`, {
    name,
    password
  })
  .then(response => {

    console.log(`response`, response);
    localStorage.setItem(`dp`, response.data.user.dp);
    localStorage.setItem(`name`, response.data.user.name);
    localStorage.setItem(`token`, response.data.token);
    window.location.replace(`https://qubstore.com/profilesetting.html`);
    
  })
  .catch(err => {

    console.log(err.response.data)
    document.getElementById(`error`).innerHTML = err.response.data.message;
    document.getElementById(`error-btn`).click();

  })

  


});