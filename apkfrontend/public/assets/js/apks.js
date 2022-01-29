let url = `https://admin.qubstore.com`;
let cate = {}
const dp = localStorage.getItem(`dp`);
const token = localStorage.getItem(`token`);
document.getElementById(`profile-picture`).src = dp;


const getAllCate = async () => {
    
    try {
      const { data } = await axios.get(`${url}/apk/getallcate`);
      console.log({ data });
      cate = data.data.map( cat => {


        document.getElementById(`category`).innerHTML += `<option value="${cat.category}">${cat.category}</option>`

        let subcate = cat.subCategory.map( sub => sub.name)

        return { category: cat.category, subCategory: subcate }

      })

      console.log(cate)
      
    } catch (error) {
      console.log(error);
    }
};

getAllCate();

const oncateSelect =  (e) => {

  let Cat = cate.find(cat => cat[`category`] === e.target.value)

  document.getElementById(`sub-category`).innerHTML = ``;

  Cat.subCategory.forEach(sub => {

    document.getElementById(`sub-category`).innerHTML += `<option value="${sub}">${sub}</option>`

  });

}

const addApk = async () => {
    console.log("we are adding apks");
    const developer = document.getElementById("developer-name").value;
    const trending = document.getElementById("trending").checked;
    const hot = document.getElementById("hot").checked;
    const top = document.getElementById("top").checked;
    const file = document.getElementById("apkfile").files[0];
    let g_category = document.getElementById("category").value;
    let g_subCategory = document.getElementById("sub-category").value;
  
    const version = document.getElementById("version").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("file-input").files[0];
    const files = document.getElementById("file-input1").files;
    const title = document.getElementById("title").value;
    const requirements = document.getElementById("requirements").value;
    const tags = document.getElementById("tags").value;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", g_category);
    formData.append("subCategory", g_subCategory);
    formData.append("developer", developer);
    formData.append("trending", trending);
    formData.append("requirements", requirements);
    formData.append("tags", tags);
    formData.append("hot", hot);
    formData.append("top", top);
    formData.append("description", description);
    formData.append("version", version);
    formData.append("image", image);

    let apkProgress = document.getElementById(`apkProgress`);
    let imgProgress = document.getElementById(`imageProgress`);
    const configImages = {
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        document.getElementById(`imageProgress`).style.width = `${percentCompleted}%`
      }, headers: {authorization: token}
    };
    const configApk = {
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        document.getElementById(`apkProgress`).style.width = `${percentCompleted}%`
      }, headers: {authorization: token}
    };
    try {
      
      // Adding apk
      const rs1 = await axios.post(`${url}/apk/addApk`, formData, {headers: {authorization: token}});
      console.log("rs1", { rs1 });
      const fd = new FormData();
      let ins = files.length;
      for (let x = 0; x < ins; x++) {
        fd.append("images", files[x]);
      }
      const rs2 = await axios.patch(
        `${url}/apk/addApkImages/${title}`,
        fd,
        configImages, 
      );
      console.log("res2", { rs2 });
      const fileData = new FormData();
      fileData.append("file", file);
      const rs3 = await axios.patch(
        `${url}/apk/addApkFile/${title}`,
        fileData,
        configApk,
      );
      console.log("res3", { rs3 });
      window.location = "/products.html";
    } catch (error) {
      console.log(error);
    }
}; 


document.getElementById(`publish`).addEventListener(`click`, addApk);


document.getElementById(`category`).addEventListener(`change`, (e)=> {
  oncateSelect(e);
})