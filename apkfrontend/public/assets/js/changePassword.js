let url = "https://admin.qubstore.com"
let token = localStorage.getItem(`token`);


function getMe(params) {
  axios
    .get(`${url}/user/me`, {headers:{
      authorization : token
    }})
    .then(
      (response) => {
        const me = response.data.data;
        console.log({ me });
        document.getElementById('username_heading').innerHTML = me.name;
        document.getElementById(`my_picture_1`).src = me.dp;
      },
      (error) => {
      
        alert(`error occured`)
        console.log(error);
      
      }
    );


};
getMe();

document.getElementById('change_password').addEventListener('click', e => {
  e.preventDefault();
  updatePassword();
});

function updatePassword() {
  const passwordCurrent = document.getElementById('currentPassword').value;
  const password = document.getElementById('newPassword').value;
  const passwordConfirm = document.getElementById('confirmPassword').value;

  console.log(`passwordCurrent`, passwordCurrent);
  console.log(`password`, password);
  console.log(`passwordConfirm`, passwordConfirm);

  axios
    .patch(`${url}/user/updatePassword`,
      {
        passwordCurrent,
        password,
        passwordConfirm
      }
      ,{ headers: {
        authorization: token
      }})
    .then(
      (response) => {
        // console.log(`response`, response)
        const me = response.data.data;
        window.location = `https://qubstore.com/profilesetting.html`;
      },
      (error) => {
        console.log("Your are not logged in");
        console.log(error);
      }
    );


};