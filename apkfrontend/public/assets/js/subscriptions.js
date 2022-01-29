let Url = `https://admin.qubstore.com`;
let id = ``;

// /paystack/create-reference


function openSubscription(element){

  console.log(`123423`);

  id = element.id;
  document.getElementById(`subscribe_btn`).click();


}


function createReference(element){

  if(id == ``)
  {
    console.log(`empty id`);
    return;
  }
  let offer = element.name;

  axios.post(`${Url}/apk/paystack/create-reference`,
  {_id: id, offer}).then((response) => {
  
  
  
    console.log(`response.data`, response.data);
  
    window.open(response.data.data.data.authorization_url);

  
  }).catch(err=>{
    console.log(err.response.data)
  })
  
}

function verifyTransection(element){

  
  let _id = element.id;

  axios.post(`${Url}/apk/paystack/verify-reference`,
  {_id}).then((response) => {
  
  
    window.location.reload();

    // console.log(`response.data`, response.data);
  
  
  }).catch(err=>{
    console.log(err.response.data)
  })
  
}