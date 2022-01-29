let authorizationToken = localStorage.getItem(`token`);
if(authorizationToken){
  window.location.replace(`https://qubstore.com/profilesetting.html`)
}