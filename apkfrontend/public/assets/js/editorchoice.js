let url = `https://admin.qubstore.com`;
let offset = 24;
let page = 1;
let search = ``;



function getEditorChoice(){

  axios.post(`${url}/apk/category-vise-apks`, {type: "editorChoice", offset, page, search})
  .then(response => {


    const {apks, possibleDataDrawings} = response.data

    document.getElementById(`desktop-apks`).innerHTML = '';
    document.getElementById(`mobile-apks`).innerHTML = '';
    document.getElementById(`pagination`).style.display = `block`;
    document.getElementById(`mobile-pagination`).style.display = `block`;
    
    
    
    for(let i=0; i < possibleDataDrawings ; i++){
    
      document.getElementById(`paginatoin-btns`).innerHTML +=`
      <li class="page-item"><a class="page-link" id=${i+1} onclick="getPaginated(this)">${i+1}</a></li>`
    
      document.getElementById(`mobile-paginatoin-btns`).innerHTML +=`
      <li class="page-item"><a class="page-link" id=${i+1} onclick="getPaginated(this)">${i+1}</a></li>`
    
    }

    apks.forEach((apk, index)=> {

      document.getElementById(`mobile-apks`).innerHTML += `
      <div class="col-3 ">
        <div class="card text-start" style="width: 8rem" id="${apk._id}" onclick="GoToApk(this)">
            <img src="${url}/img/${apk.image}" height="60px" width="60px" class="mb-1" alt="..." />
                        <div class="ratings">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="count">${apk.downloads}</div>
            
            <div class="pro_titile">${apk.title}</div>
            <button class="btn Down_btn">Download</button>
        </div>
      </div>`;
    
      document.getElementById(`desktop-apks`).innerHTML += `
    <div class="col-lg-2 col-md-3">
      <div class="card text-start" style="width: 10rem" id="${apk._id}" onclick="GoToApk(this)">
        <img src="${url}/img/${apk.image}" height="100px" width="100px" class="mb-1" alt="..." />
      
          <div class="ratings">
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star"></i>
          </div>
          <div class="count">${apk.downloads}</div>
        
        <div class="pro_titile">${apk.title}</div>
        <button class="btn Down_btn">Download</button>
      </div>
      </div>`
    
    });

  })
  .catch(err => {

    console.log(`error`, err);

  });

}

getEditorChoice();

function getPaginated(element){

  document.getElementById(`desktop-apks`).innerHTML = `
  <div class="d-block w-100" style="padding-left: 43%; padding-top: 12rem; padding-bottom: 12rem; display: flex; justify-content: center;">
    <div class="spinner-border text-primary" style="height: 12rem; width: 12rem;" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>`;

    document.getElementById(`mobile-apks`).innerHTML = `
    <div class="d-block w-100"
      style="padding-left: 8%; padding-top: 8rem; display: flex; justify-content: center;">
      <div class="spinner-border text-primary" style="height: 6rem; width: 6rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>`;
    
    page = parseInt(element.id);

    document.getElementById(`pagination`).style.display = `none`;
    document.getElementById(`mobile-pagination`).style.display = `none`;
    document.getElementById(`paginatoin-btns`).innerHTML = ``;
    document.getElementById(`mobile-paginatoin-btns`).innerHTML = ``;


    getEditorChoice();

}