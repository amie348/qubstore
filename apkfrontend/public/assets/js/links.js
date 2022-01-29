
let Url = "https://admin.qubstore.com";
var apks = [];
var requiredApk = [];
let totalAmount = -1;
let amountFlag = true;
let accountFlag = true;
let amount = 0;
let account = ``;
const token = localStorage.getItem(`token`);
const dp = localStorage.getItem(`dp`);
document.getElementById(`my_picture_1`).src = dp;


function copyToClipboard(element) {

  let text = element.id;

  navigator.clipboard.writeText(text);


}



axios.get(`${Url}/user/links/`, { headers: { authorization: token } }).then(
  response => {
    apks = [...response.data.apks]

    apks.forEach((apk, index) => {
      let op = `<label class="ps-3 "><input class="mx-2 mt-1 " type="checkbox" id=${index} />${apk.title}</label>`;
      document.getElementById(`checkBoxes`).innerHTML += op;
    });

    document.getElementById("downloads").innerHTML = response.data.user.downlaods;
    document.getElementById("ppd").innerHTML = `$` + response.data.user.pricePerDownlaod;
    document.getElementById("total").innerHTML = `$` + response.data.user.totalPrice;
    document.getElementById("pending").innerHTML = `$` + response.data.user.pending;
    totalAmount = response.data.user.totalPrice;
    document.getElementById("invite-link").innerHTML = `https://qubstore.com/signup.html?inviteId=${response.data.user._id}`
    response.data.user.links.forEach((individual, index) => {

      document.getElementById("table-body").innerHTML += `<tr>
            
            <td class="center" >
              <span style="width: 7%;" >${index + 1}</span>
            </td>
            <td  >
              <span style="width: 65%; cursor: pointer;" >${individual.link}</span>
            </td>
            <td class="center" >
              <span style="width: 18%;">${individual.apk}</span>
            </td>
            <td class="center" >
              <span style="width: 10%;">${individual.downloads ? individual.downloads : 0}</span>
            </td>
            <td class="column6">
              <div class="btn-group ">
                <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Options
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" style="cursor: pointer;" id="${individual.link}"  onclick="copyshare(this)" >Share</a>
                  
                  <a class="dropdown-item" style="cursor: pointer;" id="${individual.link}"  onclick="copyToClipboard(this)" >Copy</a>
                </div>
              </div>
            </td>
            
            </tr>`

    });


  }
)
  .catch(err => {
    console.log(err)
  })



document.getElementById(`create`).addEventListener(`click`, (e) => {

  e.preventDefault();

  apks.forEach((apk, count) => {
    let flag = document.getElementById(count.toString())?.checked;
    if (flag) {

      requiredApk.push(apks[count].title)

    }
  });

  if (requiredApk.length) {

    console.log(`requiredApk`, requiredApk)

    axios.post(`${Url}/user/createLinks`,
      { name, requiredApk }, { headers: { authorization: token } }).then(response => {
        console.log(response.data)

        if (response.data.hasError) {
          alert(`error occured`);
        }
        window.location.reload()
      }).catch(error => {
        console.log(error.response.data)
        alert(`error occured`);
      })
  }
})

document.getElementById(`withdraw`).addEventListener(`click`, () => {

  if (totalAmount < 0) {

    return;
  }

  document.getElementById(`ask-amount-btn`).click();

});

document.getElementById(`amount`).addEventListener(`change`, (e) => {



  if (e.target.value > totalAmount) {

    document.getElementById(`msg-amount`).innerHTML = `Insufficient amount`;
    amountFlag = true

  }
  else {

    amountFlag = false;
    document.getElementById(`msg-amount`).innerHTML = ``;
    amount = e.target.value;
    console.log(e.target.value, amount)

  }

});

document.getElementById(`request`).addEventListener(`click`, () => {



  console.log(amountFlag, amount)

  if (amountFlag || !amount) {
    return
  }



  axios.post(`${Url}/transection/make-request`, { amount }, { headers: { authorization: token } })
    .then(response => {

      if (response.data.account == false) {
        document.getElementById(`close-amount-modal`).click();
        return document.getElementById(`ask-account-btn`).click();
      }
      else {
        window.location.reload();
      }

    }).catch(err => {
      console.log(err)
    });


});

document.getElementById(`account_number`).addEventListener(`change`, (e) => {

  if (e.target.value.length < 14) {

    document.getElementById(`msg-account`).innerHTML = `Invalid Account Number`;
    accountFlag = true;

  }
  else {

    document.getElementById(`msg-account`).innerHTML = ``;
    accountFlag = false;
    account = e.target.value;

  }

});

document.getElementById(`Send`).addEventListener(`click`, () => {

  if (accountFlag || !account || account.length != 14) {
    return
  }

  axios.patch(`${Url}/user/addAccount`, { account }, { headers: { authorization: token } })
    .then(response => {

      if (!response.data.hasError) {
        window.location.reload();
      }

    }).catch(err => {
      console.log(err);
    })

});

var expand = false;
function showCheckBoxes() {
  var checkBoxes = document.getElementById("checkBoxes");
  if (!expand) {
    checkBoxes.style.display = "block";
    expand = true;
  }
  else {
    checkBoxes.style.display = "none";
    expand = false;
  }
}