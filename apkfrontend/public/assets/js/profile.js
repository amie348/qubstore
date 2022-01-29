
let url = "https://admin.qubstore.com"
let dp = "";
let token = localStorage.getItem(`token`)
console.log(`token`, typeof token);

function getMe(params) {
  axios
    .get(`${url}/user/me`, {headers: {
      authorization: token 
    }})
    .then(
      (response) => {
        const me = response.data.data;
        console.log({ me });
        document.getElementById('username_heading').innerHTML = me.name;
        document.getElementById('username1').value = me.name;
        document.getElementById('email').value = me.email;
        document.getElementById(`my_picture_1`).src = me.dp;
        document.getElementById(`my_picture_2`).src = me.dp;
        dp = me.dp;
      },
      (error) => {
        console.log("Your are not logged in");
        console.log(error);
      }
    );


};
getMe();



document.getElementById(`dp_select`).addEventListener(`click`, () => {

  document.getElementById(`dp`).click();

});

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

document.getElementById(`dp`).addEventListener(`change`, (e) => {
  
  let img = e.target.files[0];
  getBase64(img).then( data => {
    console.log(`data`, data)
    dp = data;
    document.getElementById(`my_picture_2`).src = dp;
  });

});

document.getElementById(`save-btn`).addEventListener(`click`, () => {

  let email = document.getElementById(`email`).value;

  axios.patch(`${url}/user/update`, {dp, email, dob,},  {headers: {authorization: token}}).then( (response) => {

    window.location.reload();

  }).catch(err => {

    console.log(`err while updating`, err);

  })

});