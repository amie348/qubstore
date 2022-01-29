let url = "https://admin.qubstore.com";
var USERname = localStorage.getItem("username");
let token = localStorage.getItem(`token`);
let id = ``;
const dp = localStorage.getItem(`dp`);
document.getElementById(`my_picture_1`).src = dp;


axios.get(`${url}/apk/get/apks`, {headers: {
  authorization: token
}})
.then(response => {
      response.data.products.forEach((apk, index) => {
        

      document.getElementById("table-body").innerHTML += `<tr>
      <td class="column1">${index + 1}</td>
      <td class="column2">${apk.title}</td>
      <td class="column3">${apk.category}</td>
      <td class="column4">${apk.downloads}</td>
      <td class="column5">${apk.verified ? apk.remaining: `-`}</td>
      <td class="column6">
        <div class="btn-group ">
          <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Options
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" style="cursor: pointer;" id="${apk._id}" onclick="openSubscription(this)" >Buy Subscription</a>
              ${apk.isPremium && !apk.verified?
                `<a class="dropdown-item" id="${apk._id}" style="cursor: pointer;" onclick="verifyTransection(this)">Start Premium</a>`
                :``
              }

          </div>
        </div>
      </td>
    </tr>`
    });
    document.getElementById(`loader`).style.display = `none`;
    document.getElementById(`myTable_wrapper`).style.display=`block`;

    
  })
.catch(err => {

  console.log(`err`, err);

})

function openSubscription(element){

  id = element.id;
  document.getElementById(`subscription-btn`).click();

}

function createReference(element){

  if(id == ``)
  {
    return;
  }

  let offer = element.id;
 

  axios.post(`${url}/apk/paystack/create-reference`,
  {_id: id, offer}, {headers: {authorization: token}}).then((response) => {
  
    console.log(`response.data`, response.data);
  
    window.open(response.data.data.data.authorization_url);

  }).catch(err=>{
    console.log(err.response.data)
  })
  
}

function verifyTransection(element){
  
  let _id = element.id;



  axios.post(`${url}/apk/paystack/verify-reference`,
  {_id}, {headers: {authorization: token}}).then((response) => {
  
    window.location.reload();
  
  }).catch(err=>{
    console.log(err.response.data)
  })
  
}