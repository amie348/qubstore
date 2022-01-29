var page = 1
var offset = 4;

let url = "https://admin.qubstore.com";
let url1 = "https://admin.qubstore.com";

let reviewFalg = false;


const params = new URLSearchParams(window.location.search);
const apkId = params.get(`apkId`);
const Token = params.get(`token`);
const userId = params.get(`userId`);
const token = localStorage.getItem(`token`);
var title = ``;


function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


axios.get(`${url}/apk/getApk/${apkId}`).then(response => {


  
  const apk = response.data.data;
  const {Rating_Count, Rating_ratio, average_rating, average_ratio,  total_reviews, size} = response.data;
document.getElementById("d_image").src = `${url}/img/${apk.image}`;
document.getElementById("d_title").innerHTML = apk.title;
document.getElementById("bread_name").innerHTML = apk.title;
title = apk.title

document.getElementById("date").title = moment(apk.createdAt).format("MMM Do YY");
document.getElementById("downloads").innerText = apk.downloads;
document.getElementById("size").innerHTML = formatBytes(size);
document.getElementById("d-btn").innerHTML = `Download ${apk.title} <span>${formatBytes(size)}</span>`
document.getElementById("update-date").innerHTML = moment(apk.updatedAt).format("MMM Do YY");
document.getElementById("app-title").innerHTML = apk.title;
document.getElementById('requirements').innerHTML = apk.requirements;
document.getElementById('description').innerHTML = apk.description;
//   document.getElementById("tag").innerHTML = `${apk.title} Tags`;

document.getElementById("category").innerHTML = apk.category;
document.getElementById("category-bred").innerHTML = apk.category;
document.getElementById("Category").innerHTML = apk.category;


  if(apk.subCategory){
    // document.getElementById("subcate").innerHTML = apk.subCategory;
    document.getElementById(`sub-category-bred`).innerHTML = apk.subCategory;
    document.getElementById(`sub-category-bred`).display = "block";
  }
  document.getElementById("version").innerHTML = apk.version
document.getElementById("creator").innerHTML = apk.developer ? apk.developer : apk.user.name;;
document.getElementById(`developerr`).innerHTML = apk.developer ? apk.developer : apk.user.name;


document.getElementById("average_rating").innerHTML = apk.average_rating;
//   document.getElementById("average-rating-1").innerHTML = average_rating;

document.getElementById("average-2").style.width = `${average_ratio}%`;
document.getElementById("average-1").style.width = `${average_ratio}%`;
document.getElementById("comment-count").innerHTML = `${total_reviews} Reviews`;

document.getElementById("one").style.width = `${Rating_ratio.one}%`;
document.getElementById("two").style.width = `${Rating_ratio.two}%`;
document.getElementById("three").style.width = `${Rating_ratio.three}%`;
document.getElementById("four").style.width = `${Rating_ratio.four}%`;
document.getElementById("five").style.width = `${Rating_ratio.five}%`;


if(apk.images.length > 3){

  document.getElementById("C-2").classList.add(`carousel-item`);

} 
  let id = ``
apk.images.forEach((image, index) => {
 
  if(index < 3){
    id="carousel-1"
  }else if( index < 6) {
    id="carousel-2";
  }

  document.getElementById(id).innerHTML += `<div class="col-4">
  <img src="${url}/img/${image}" height="400px" width="250px" class="mb-1" alt="..." />
  </div>`

});


document.getElementById(`loader`).style.display = 'none';
document.getElementById(`product-content`).style.display = 'block';




}).catch()

function getReviews(){

  document.getElementById(`see-more-btn`).style.display = `none`;
  
  axios.post(`${url}/apk/get-reviews/${apkId}`,{
    page,
    offset
  }).then(response => {
  
    const {possibleDataDrawings, reviews} = response.data;
  
    console.log(`possibleDataDrawings`, possibleDataDrawings, `reviews`, reviews);
      
    if (!reviews) {
      
      return
  
    }
  
    reviews.forEach(review => {
  
      console.log(review)

      if(review){
                let Review = `<div class="row mb-3">
                <div class="col-lg-1 col-md-2 col-sm-2">
                  <div class="Users_dp  ">
                    <img src="${review.comment.user.dp}"
                      class="img-thumbnail" />
                  </div>
                </div>
                <div class="col-lg-11 col-md-10 col-sm-10 ">
                  <div class="d-flex">
                    <h6 class="user_name ">${review.comment.user.name}</h6>
                    <h6 class=" mx-2 date">${moment(review.comment.time).format("MMM Do YY")}</h6>
                  </div>
                  <p class="comment_of_users">${review.comment.text} </p>
                  <div class="d-flex">
                    <div class="outerstars">
                      <div class="innerstars" style="width: ${review.rating * 20}%"></div>
                    </div>
                  </div>
                </div>
              </div>
              ${review.reply.text ? `
              <div class="row mb-3 ms-5">
              <div class="col-lg-1 col-md-2 col-sm-2">
                <div class="Users_dp  ">
                  <img src="${review.reply.user.dp}"
                    class="img-thumbnail" />
                </div>
              </div>
              <div class="col-lg-11 col-md-10 col-sm-10 ">
                <div class="d-flex">
                  <h6 class="user_name">${review.reply.user.name}</h6>
                  <h6 class=" mx-2 date">${moment(review.reply.time).format("MMM Do YY")}</h6>
                </div>
                <p class="comment_of_users ">${review.reply.text}</p>
                <div class="d-flex">
                </div>
              </div>
            </div>
            <hr/>
            ` : 
            `<hr/>`
        }`

        document.getElementById("reviews").innerHTML += Review;

      }

      
    })
  
    
    if(possibleDataDrawings === 1  || !(possibleDataDrawings/page > 1)) {
      reviewFalg = true
      document.getElementById(`see-more-btn`).style.display = `none`;
    }
    else{
      page += 1
      document.getElementById(`see-more-btn`).style.display = `block`;
    }
  
  }).catch(err => {
  
    console.log("Error", err);
    alert("error while getting reviews");
  
  })

}

getReviews()

const element = document.getElementById('d-btn');

const Downloads = () => {

  axios.post(`${url}/apk/download/${apkId}`,
    { Token }, {headers: { authorization: token}}).then((response) => {

      if (response.data.message === "your download link is expired") {

        document.getElementById("Message").innerHTML = "your download link is expired"
        document.getElementById("Title").innerHTML = "Expires"
        document.getElementById("modal-btn").click()
      }
      else {
        console.log("response",response.data);
        const URL = `${url}/apk/${response.data.link}`
        const link = document.createElement('a');
        link.href = URL;
        link.setAttribute('download', `${title}.apk`); //or any other extension
        document.body.appendChild(link);
        link.click();
        document.getElementById("Message").innerHTML = "When your download finishes, install your application"
        document.getElementById("Title").innerHTML = "Success"
        document.getElementById("modal-btn").click()
        element.innerHTML = "Downloading... "
      }


    }).catch(error => {
      console.log("error",error.response)
      // document.getElementById("Message").innerHTML = error.response.statusText
      // document.getElementById("Title").innerHTML = "Error"
      // document.getElementById("modal-btn").click()

    })
}

function Add(element) {
  let rating = 0;
  let token = null;
  token = localStorage.getItem("token");
  if (!token) {
    window.location.replace("/login.html");
  }
  else {
    if (document.getElementById("one-star").checked) {
      rating = 1;
    }
    else if (document.getElementById("two-star").checked) {
      rating = 2;
    }
    else if (document.getElementById("three-star").checked) {
      rating = 3;
    }
    else if (document.getElementById("four-star").checked) {
      rating = 4;
    }
    else if (document.getElementById("five-star").checked) {
      rating = 5;
    }

    let text = document.getElementById("comment").value;

    if (text && rating && token) {
      axios.patch(`${url}/apk/comment/${apkId}`,
        { text, rating }, {headers : {authorization: token}}
      ).then(response => {
        window.location.reload();
      }).catch(err => {
        console.log(err);
      })
    }

  }
}

const sendDownloadLink = async (token, username, email) => {
  if(Token){
    return
  }
  
  await axios.post(`${url1}/apk/sendDownloadLink/${apkId}`,
    { username, email }, { headers: { authorization: token } }
  ).then(response => {

    document.getElementById("Message").innerHTML = response.data.message
    document.getElementById("Title").innerHTML = "Sent"
    document.getElementById("modal-btn").click()

  }).catch(err => {

    console.log(`err`, err);
    document.getElementById("Message").innerHTML = response.data.message;
    document.getElementById("Title").innerHTML = "Sent";
    document.getElementById("modal-btn").click();
  
  })
}

if (element) {
  element.addEventListener('click', async e => {
    e.preventDefault();
    let text = "";
    let token = null;
    token = localStorage.getItem("token");
    if (!token) {
      document.getElementById(`askEmail`).click();
    }
    else {
      sendDownloadLink( token, null , null)
    }
  }
  )

}

if (Token) {
  Downloads()
}

document.getElementById("ask-mail-btn").addEventListener("click", () => {
  
  let email = document.getElementById("mail").value
  if(email){
  
    sendDownloadLink( null, `user`, email)
  
  }

})

document.getElementById(`see-more-btn`).addEventListener(`click`, ()=> {

  if(!reviewFalg){

    getReviews()    

  }

});