let url = `https://admin.qubstore.com`;
let offset = 24;
let page = 1;
let search = ``;

//  -----   getting Activer sliders ----------
axios.get(`${url}/apk/activesliders`)
  .then(response => {


    document.getElementById(`Sliders`).innerHTML = '';

    response.data.data.forEach((slider, index) => {

      if (!index) {

        document.getElementById(`Sliders`).innerHTML += `
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="https://admin.qubstore.com/img/${slider.image}" class="d-block w-100" alt="${slider.title}" />  
        </div>`

      } else if (index == 1) {

        document.getElementById(`Sliders`).innerHTML += `
      <div class="carousel-item" data-bs-interval="2000">
        <img src="https://admin.qubstore.com/img/${slider.image}" class="d-block w-100" alt="${slider.title}" />  
        </div>`

      } else {

        document.getElementById(`Sliders`).innerHTML += `
      <div class="carousel-item">
        <img src="https://admin.qubstore.com/img/${slider.image}" class="d-block w-100" alt="${slider.title}" />  
        </div>`

      }

    })

  }).catch(err => {

    console.log(err)

  });
// ----- end of getting active sliders --------

// ----- getting Rhapsody Apks ---------------
axios.post(`${url}/apk/category-vise-apks`, { category: "Rhapsody Languages", offset:24, page, search })
  .then(response => {


    if (response.data.apks.length > 6) {
      document.getElementById(`p-desktop-RL-2`).classList.add(`carousel-item`);
    }
    if (response.data.apks.length > 12) {
      document.getElementById(`p-desktop-RL-3`).classList.add(`carousel-item`);
    }
    if (response.data.apks.length > 18) {
      document.getElementById(`p-desktop-RL-4`).classList.add(`carousel-item`);
    }

    document.getElementById(`mobile-RL`).innerHTML = '';
    document.getElementById(`desktop-RL-1`).innerHTML = '';

    response.data.apks.forEach((apk, index) => {

      if (index < 6) {
        document.getElementById(`desktop-RL-1`).innerHTML += `
    <div class="col-2">
    <div class="card text-start" style="width: 9.5rem" id="${apk._id}" onclick="GoToApk(this)">
      <img src="${url}/img/${apk.image}" height="70px" width="70px" class="mb-1" alt="..." />
     
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
      } else if (index < 12) {
        document.getElementById(`desktop-RL-2`).innerHTML += `
    <div class="col-2">
    <div class="card text-start" style="width: 9.5rem" id="${apk._id}" onclick="GoToApk(this)">
      <img src="${url}/img/${apk.image}" height="70px" width="70px" class="mb-1" alt="..." />
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
  </div>`
      } else if (index < 18) {
        document.getElementById(`desktop-RL-3`).innerHTML += `
    <div class="col-2">
    <div class="card text-start" style="width: 9.5rem" id="${apk._id}" onclick="GoToApk(this)">
      <img src="${url}/img/${apk.image}" height="70px" width="70px" class="mb-1" alt="..." />
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
  </div>`
      } else {
        document.getElementById(`desktop-RL-4`).innerHTML += `
    <div class="col-2">
    <div class="card text-start" style="width: 9.5rem" id="${apk._id}" onclick="GoToApk(this)">
      <img src="${url}/img/${apk.image}" height="70px" width="70px" class="mb-1" alt="..." />
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
  </div>`
      }


      document.getElementById(`mobile-RL`).innerHTML += ` 
  <div id="${apk._id}" onclick="GoToApk(this)">
    <img src="${url}/img/${apk.image}" height="100px" width="100px" alt="${apk.title}" />
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
  </div>`
    });

  })
  .catch(err => {

    console.log(`error`, err);

  });
// ----- end of getting Rhapsody Apks -------

// ----- getting Discover Games Apks ---------------
axios.post(`${url}/apk/category-vise-apks`, { category: "Games", offset:24, page, search})
  .then(response => {

    console.log(`response`, response.data);



    document.getElementById(`mobile-DG`).innerHTML = '';
    document.getElementById(`mobile-G`).innerHTML = '';
    document.getElementById(`desktop-game-1`).innerHTML = '';
    document.getElementById(`p-dekstop-DG-1`).innerHTML = '';

    if (response.data.apks.length > 8) {
      document.getElementById(`P-desktop-2`).classList.add(`carousel-item`);
    }
    if (response.data.apks.length > 16) {
      document.getElementById(`P-desktop-3`).classList.add(`carousel-item`);
    }

    let ID = `p-dekstop-DG-1`;
    let ID1;

    response.data.apks.forEach((apk, index) => {


      if (index % 2 == 0) {

        if (index < 8) {
          ID = `p-dekstop-DG-1`;
        } else if (index < 16) {
          ID = `p-dekstop-DG-2`;
        }
        else {
          ID = `p-dekstop-DG-3`;
        }


        document.getElementById(ID).innerHTML += `
      <div class="row" id="D-R-${index + 1}">
        <div class="col-6">
          <div class="card text-start" style="width: 16.1rem" id="${apk._id}" onclick="GoToApk(this)">
            <div class="container-fluid">
              <div class="row">
                <div class="col-4">
                  <img src="${url}/img/${apk.image}" height="70px" width="70px" class="mb-1"
                    alt="..." />
                </div>
                <div class="col-8">
                    <div class="ratings">
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="count">${apk.downloads}</div>
                  <div class="pro_titile">${apk.title}</div>
                  <a href="#" class="down_Link">Download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
      }
      else {
        document.getElementById(`D-R-${index}`).innerHTML += `
      <div class="col-6">
        <div class="card text-start" style="width: 16.1rem" id="${apk._id}" onclick="GoToApk(this)">
          <div class="container-fluid">
            <div class="row">
              <div class="col-4">
                <img src="${url}/img/${apk.image}" height="70px" width="70px" class="mb-1"
                  alt="..." />
              </div>
              <div class="col-8">
                  <div class="ratings">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="count">${apk.downloads}</div>
                <div class="pro_titile">${apk.title}</div>
                <a href="#" class="down_Link">Download</a>
              </div>
            </div>
          </div>
        </div>
        </div>`
      }


      document.getElementById(`mobile-DG`).innerHTML += ` 
  <div id="${apk._id}" onclick="GoToApk(this)">
    <img src="${url}/img/${apk.image}" height="100px" width="100px" alt="${apk.title}" />
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
  </div>`



      if (index < 6) {
        ID1 = `desktop-game-1`;
      } else if (index < 12) {
        ID1 = `desktop-game-2`;
      } else {
        ID1 = 0;
      }

      if (ID1) {
        document.getElementById(ID1).innerHTML += `
  <div class="col-2">
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
      }

      document.getElementById(`mobile-G`).innerHTML += ` 
  <div id="${apk._id}" onclick="GoToApk(this)">
    <img src="${url}/img/${apk.image}" height="100px" width="100px" alt="${apk.title}" />
    <div class="d-flex rat_count justify-content-between">
    <div class="ratings">
      <i class="fa fa-star rating-color"></i>
      <i class="fa fa-star rating-color"></i>
      <i class="fa fa-star rating-color"></i>
      <i class="fa fa-star rating-color"></i>
      <i class="fa fa-star"></i>
    </div>
    </div>
    <div class="count">${apk.downloads}</div>
    <div class="pro_titile">${apk.title}</div>
    <button class="btn Down_btn">Download</button>
  </div>`

    });

  })
  .catch(err => {

    console.log(`error`, err);

  });
// ----- end of Discover Games Apks -------

// ----- getting App Apks ---------------
axios.post(`${url}/apk/category-vise-apks`, { category: "Apps", offset:12, page, search })
  .then(response => {


    document.getElementById(`mobile-APP`).innerHTML = '';
    document.getElementById(`desktop-app-1`).innerHTML = '';

    let ID;

    response.data.apks.forEach((apk, index) => {

      if (index < 6) {
        ID = `desktop-app-1`;
      } else if (index < 12) {
        ID = `desktop-app-2`;
      } else {
        ID = 0;
      }

      if (ID) {
        document.getElementById(ID).innerHTML += `
    <div class="col-2">
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
      }

      document.getElementById(`mobile-APP`).innerHTML += ` 
  <div id="${apk._id}" onclick="GoToApk(this)">
    <img src="${url}/img/${apk.image}" height="100px" width="100px" alt="${apk.title}" />
    <div class="d-flex rat_count justify-content-between">
    <div class="ratings">
      <i class="fa fa-star rating-color"></i>
      <i class="fa fa-star rating-color"></i>
      <i class="fa fa-star rating-color"></i>
      <i class="fa fa-star rating-color"></i>
      <i class="fa fa-star"></i>
    </div>
    <div class="count">${apk.downloads}</div>
    <div>
    <div class="pro_titile">${apk.title}</div>
    <button class="btn Down_btn">Download</button>
  </div>`

    });

  })
  .catch(err => {

    console.log(`error`, err);

  });
// ----- end of App Apks -------

// ----- getting Top Free Apks ---------------
axios.post(`${url}/apk/category-vise-apks`, { type: "top", offset:24, page, search })
  .then(response => {


    if (response.data.apks.length > 6) {
      document.getElementById(`p-top-app-2`).classList.add(`carousel-item`);
    }
    if (response.data.apks.length > 12) {
      document.getElementById(`p-top-app-3`).classList.add(`carousel-item`);
    }
    if (response.data.apks.length > 18) {
      document.getElementById(`p-top-app-4`).classList.add(`carousel-item`);
    }

    document.getElementById(`top-app-1`).innerHTML = '';

    let ID;

    response.data.apks.forEach((apk, index) => {


      if (index < 6) {
        ID = `top-app-1`
      } else if (index < 12) {
        ID = `top-app-2`
      } else if (index < 18) {
        ID = `top-app-3`
      } else if (index < 24) {
        ID = `top-app-4`
      } else {
        return
      }

      document.getElementById(ID).innerHTML += `
    <div class="col-2" id="${apk._id}" onclick="GoToApk(this)">
      <img src="${url}/img/${apk.image}" height="100px" width="100px" alt="..." />
    </div>`

    });
  })
  .catch(err => {

    console.log(`error`, err);

  });
// ----- end of Top Free Apks -------

// editorChoice
axios.post(`${url}/apk/category-vise-apks`, { type: "editorChoice", offset:24, page, search })
  .then(response => {


    if (response.data.apks.length > 6) {
      document.getElementById(`p-desktop-EC-2`).classList.add(`carousel-item`);
    }
    if (response.data.apks.length > 12) {
      document.getElementById(`p-desktop-EC-3`).classList.add(`carousel-item`);
    }
    if (response.data.apks.length > 18) {
      document.getElementById(`p-desktop-EC-4`).classList.add(`carousel-item`);
    }
    document.getElementById(`mobile-EC`).innerHTML = '';
    document.getElementById(`desktop-EC-1`).innerHTML = '';

    let ID;

    response.data.apks.forEach((apk, index) => {


      if (index < 6) {
        ID = `desktop-EC-1`
      } else if (index < 12) {
        ID = `desktop-EC-2`
      } else if (index < 18) {
        ID = `desktop-EC-3`
      } else if (index < 24) {
        ID = `desktop-EC-4`
      } else {
        return
      }

      document.getElementById(ID).innerHTML += `
    <div class="col-2">
    <div class="card text-start" style="width: 9.5rem" id="${apk._id}" onclick="GoToApk(this)">
      <img src="${url}/img/${apk.image}" height="70px" width="70px" class="mb-1" alt="..." />
     
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

      document.getElementById(`mobile-EC`).innerHTML += ` 
    <div id="${apk._id}" onclick="GoToApk(this)">
      <img src="${url}/img/${apk.image}" height="100px" width="100px" alt="${apk.title}" />
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
    </div>`

    });
  })
  .catch(err => {

    console.log(`error`, err);

  });

// ----- getting Pre register Apks ---------------
axios.post(`${url}/apk/category-vise-apks`, { category: "Pre register", offset:24, page, search })
  .then(response => {


    if (response.data.apks.length > 6) {
      document.getElementById(`p-desktop-PR-2`).classList.add(`carousel-item`);
    }
    if (response.data.apks.length > 12) {
      document.getElementById(`p-desktop-PR-3`).classList.add(`carousel-item`);
    }
    if (response.data.apks.length > 18) {
      document.getElementById(`p-desktop-PR-4`).classList.add(`carousel-item`);
    }

    document.getElementById(`mobile-PR`).innerHTML = '';
    document.getElementById(`desktop-PR-1`).innerHTML = '';

    let ID;

    response.data.apks.forEach((apk, index) => {

      if (index < 6) {
        ID = `desktop-PR-1`
      } else if (index < 12) {
        ID = `desktop-PR-2`
      } else if (index < 18) {
        ID = `desktop-PR-3`
      } else if (index < 24) {
        ID = `desktop-PR-4`
      } else {
        return
      }

      document.getElementById(ID).innerHTML += `
    <div class="col-2">
    <div class="card text-start" style="width: 9.5rem" id="${apk._id}" onclick="GoToApk(this)">
      <img src="${url}/img/${apk.image}" height="70px" width="70px" class="mb-1" alt="..." />
    
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

      document.getElementById(`mobile-PR`).innerHTML += ` 
    <div id="${apk._id}" onclick="GoToApk(this)">
      <img src="${url}/img/${apk.image}" height="100px" width="100px" alt="${apk.title}" />
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
    </div>`

    });
  })
  .catch(err => {

    console.log(`error`, err);

  });
// ----- end of Pre register Apks -------

// ----- getting Apps Categories ---------------
axios.post(`${url}/apk/category`, { category: "Apps" })
  .then(response => {

    console.log(response.data.category);

    document.getElementById(`app-cat`).innerHTML = '';

    response.data.category.forEach((category, index) => {

      document.getElementById(`app-cat`).innerHTML += ` 
    <div class="cat_img_title justify-content-strat mb-1" style="cursor: pointer;" onclick="GoToCategoryWiseApp(this)">
      <img src="${url}/img/${category.image}" height="40px" width="40px" class="mb-1" alt="..." />
      <h4 class="Categories_title">${category.name}</h4>
    </div>`;

    });
  })
  .catch(err => {

    console.log(`error`, err);

  });
// ----- end of getting Apps Categories -------

// ----- getting Game Categories ---------------
axios.post(`${url}/apk/category`, { category: "Games"})
  .then(response => {

    console.log(response.data.category);

    document.getElementById(`game-cat`).innerHTML = '';

    response.data.category.forEach((category, index) => {

      document.getElementById(`game-cat`).innerHTML += ` 
    <div class="cat_img_title justify-content-strat mb-1" onclick="GoToCategoryWiseGame(this)">
      <img src="${url}/img/${category.image}" height="40px" width="40px" class="mb-1" alt="..." />
      <h4 class="Categories_title">${category.name}</h4>
    </div>`;

    });
  })
  .catch(err => {

    console.log(`error`, err);

  });
// ----- end of getting Game Categories -------
