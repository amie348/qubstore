let url = `https://admin.qubstore.com`;
let offset = 16;
let page = 1;
let search = ``;
const params = new URLSearchParams(window.location.search);
let subCategory = params.get(`subCategory`);

if(subCategory){
  
  subCategory = subCategory.replaceAll(`_`, ` `);
  subCategory = subCategory.replaceAll(`.`, `&`)
  console.log(subCategory)
  document.getElementById(`subCat`).innerHTML = subCategory;
  document.getElementById(`d-subCate`).innerHTML = subCategory;

}

// ----- getting Games Categories ---------------
axios.post(`${url}/apk/category`, {category: "Games", limit: 100})
.then(response => {
  
  document.getElementById(`categories`).innerHTML = '';
  document.getElementById(`mobile-cat`).innerHTML ='';

  response.data.category.forEach((category, index)=> {

    document.getElementById(`mobile-cat`).innerHTML +=` 
    <div class="cat_img_title justify-content-strat mb-1" onclick="GoToCategoryWiseGame(this)">
      <img src="${url}/img/${category.image}" height="30px" width="30px" class="mb-1" alt="..." />
      <h4 class="Categories_title">${category.name}</h4>
    </div> `;

    document.getElementById(`categories`).innerHTML +=` 
    <div class="col-6 ">
      <div class="cat_img_title justify-content-strat mb-1" onclick="GoToCategoryWiseGame(this)">
        <img src="${url}/img/${category.image}" height="30px" width="30px" class="mb-1" alt="..." />
        <h4 class="Categories_title">${category.name}</h4>
      </div>
    </div>`;
  
  });

})
.catch(err => {

  console.log(`error`, err);

});
// ----- end of getting Games Categories -------

// ----- getting Games Apks ---------------
function getGames(){

  axios.post(`${url}/apk/category-vise-apks`, {category: "Games", offset, page, search, subCategory})
  .then(response => {


    const {apks, possibleDataDrawings} = response.data

    document.getElementById(`desktop-games`).innerHTML = '';
    document.getElementById(`mobile-games`).innerHTML = '';
    document.getElementById(`pagination`).style.display = `block`;
    
    
    for(let i=0; i < possibleDataDrawings ; i++){
      console.log(i)
      document.getElementById(`paginatoin-btns`).innerHTML +=`
      <li class="page-item"><a class="page-link" id=${i+1} onclick="getPaginated(this)">${i+1}</a></li>`
    }

    apks.forEach((apk, index)=> {

    document.getElementById(`mobile-games`).innerHTML += `
    <div class="col-3 ">
      <div class="card text-start" style="width: 8rem" id="${apk._id}" onclick="GoToApk(this)">
          <img src="${url}/img/${apk.image}" height="60px" width="60px" class="mb-1" alt="..." />
          <div class="d-flex rat_count justify-content-between">
              <div class="ratings">
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star"></i>
              </div>
              <div class="count">${apk.downloads}</div>
          </div>
          <div class="pro_titile">${apk.title}</div>
          <button class="btn Down_btn">Download</button>
      </div>
    </div>`;

    document.getElementById(`desktop-games`).innerHTML +=` 
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card text-start" style="width: 10rem" id="${apk._id}" onclick="GoToApk(this)">
          <img src="${url}/img/${apk.image}" height="100px" width="100px" class="mb-1"
              alt="..." />
          <div class="d-flex justify-content-between">
              <div class="ratings">
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star"></i>
              </div>
              <div class="count">${apk.downloads}</div>
          </div>
          <div class="pro_titile">${apk.title}</div>
          <button class="btn Down_btn">Download</button>
      </div>
    </div> `
    
    });

  })
  .catch(err => {

    console.log(`error`, err);

  });

}

getGames();

function getPaginated(element){

  document.getElementById(`desktop-games`).innerHTML = `
    <div class="d-block w-100" style="padding-left: 16rem; padding-top: 12rem; display: flex; justify-content: center;">
      <div class="spinner-border text-primary" style="height: 13rem; width: 13rem;"
        role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>`;

    document.getElementById(`mobile-games`).innerHTML = `
    <div style="height: 38.6rem;">
      <div style="padding-top: 5rem;">
        <div class="spinner-border text-light" style="width: 6rem; height: 6rem;"
          role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>`;
    
    page = parseInt(element.id);

    document.getElementById(`pagination`).style.display = `none`;
    document.getElementById(`paginatoin-btns`).innerHTML = ``;


    getGames();

}
// ----- end of Games Apks -------


