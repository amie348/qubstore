let url = `https://admin.qubstore.com`;

// ----- getting Games Categories ---------------
axios.post(`${url}/apk/category`, { category: "Games", limit: 24 })
  .then(response => {


    document.getElementById(`desktop-game-cat`).innerHTML = '';
    document.getElementById(`mobile-game-cat`).innerHTML = '';

    response.data.category.forEach((category, index) => {

      document.getElementById(`mobile-game-cat`).innerHTML += ` 
    <div class="cat_img_title justify-content-strat mb-1" onclick="GoToCategoryWiseGame(this)">
      <img src="${url}/img/${category.image}" height="30px" width="30px" class="mb-1" alt="..." />
      <h4 class="Categories_title">
      ${category.name}
      </h4>
    </div> `;

      document.getElementById(`desktop-game-cat`).innerHTML += ` 
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
axios.post(`${url}/apk/category-vise-apks`, { category: "Games", limit: 12 })
  .then(response => {


    document.getElementById(`desktop-games`).innerHTML = '';
    document.getElementById(`mobile-games`).innerHTML = '';


    response.data.apks.forEach((apk, index) => {

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

      document.getElementById(`desktop-games`).innerHTML += ` 
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
// ----- end of Games Apks -------

// ----- getting Apps Categories ---------------
axios.post(`${url}/apk/category`, { category: "Apps", limit: 24 })
  .then(response => {

    document.getElementById(`desktop-apps-cat`).innerHTML = '';
    document.getElementById(`mobile-app-cat`).innerHTML = '';

    response.data.category.forEach((category, index) => {

      document.getElementById(`mobile-app-cat`).innerHTML += ` 
    <div class="cat_img_title justify-content-strat mb-1" onclick="GoToCategoryWiseApp(this)">
      <img src="${url}/img/${category.image}" height="30px" width="30px" class="mb-1" alt="..." />
      <h4 class="Categories_title">${category.name}</h4>
    </div> `;

      document.getElementById(`desktop-apps-cat`).innerHTML += ` 
    <div class="col-6 ">
      <div class="cat_img_title justify-content-strat mb-1" onclick="GoToCategoryWiseApp(this)">
        <img src="${url}/img/${category.image}" height="30px" width="30px" class="mb-1" alt="..." />
        <h4 class="Categories_title">${category.name}</h4>
      </div>
    </div>`;

    });

  })
  .catch(err => {

    console.log(`error`, err);

  });
// ----- end of getting Apps Categories -------

// ----- getting App Apks ---------------
axios.post(`${url}/apk/category-vise-apks`, { category: "Apps", limit: 12 })
  .then(response => {


    document.getElementById(`desktop-apps`).innerHTML = '';
    document.getElementById(`mobile-apps`).innerHTML = '';


    response.data.apks.forEach((apk, index) => {

      document.getElementById(`mobile-apps`).innerHTML += `
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

      document.getElementById(`desktop-apps`).innerHTML += ` 
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
// ----- end of App Apks -------