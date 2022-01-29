let authorizationToken = localStorage.getItem(`token`);
if(!authorizationToken){

  window.location.replace(`https://qubstore.com/login.html`);

}
const Name = localStorage.getItem(`name`);
document.getElementById(`username_heading`).innerHTML = Name;

document.getElementById(`log-out`).addEventListener(`click`, ()=> {

  localStorage.clear();
  window.location.replace(`https://qubstore.com`)

})