//google tranlator
let clickedOnButton = true
let link = ``;

function loadGoogleTranslate() {
    
    new google.translate.TranslateElement("google_element")
}

function copyshare(element) {

    document.getElementById(`shareBtn`).click();

    clickedOnButton = false;
    link = element.id
    console.log(link)

}

document.getElementById(`facebook`).addEventListener(`click`, () => {

    let value = document.getElementById(`myInput`).value;
    console.log(link, clickedOnButton)
    if(link && !clickedOnButton){
        value = link
    }
    else if(!value){
        value = window.location.href;
    }


    window.open(`https://facebook.com/sharer.php?u=${value}`);
    link = ``;
    clickedOnButton = true;

})

document.getElementById(`twitter`).addEventListener(`click`, () => {


    let value = document.getElementById(`myInput`).value;
    console.log(link, clickedOnButton)
    if(link && !clickedOnButton){
        value = link
    }
    else if(!value){
        value = window.location.href;
    }

    console.log(`value`, value);
    window.open(`https://twitter.com/intent/tweet?text=${value}`)
    link = ``;
    clickedOnButton = true;
})

document.getElementById(`whatsapp`).addEventListener(`click`, () => {

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    console.log(isMobile)

    let value = document.getElementById(`myInput`).value;
    if(link && !clickedOnButton){
        value = link
    }
    else if(!value){
        value = window.location.href;
    }

    console.log(`value`, value);
    if(isMobile){
        window.open(`whatsapp://send?text=${value}`)
    } else {
        window.open(`https://web.whatsapp.com://send?text=${value}`)

    }
    link = ``;
    clickedOnButton = true;

})

document.getElementById(`messenger`).addEventListener(`click`, () => {


    let value = document.getElementById(`myInput`).value;
    if(link && !clickedOnButton){
        value = link
    }
    else if(!value){
        value = window.location.href;
    }

    console.log(`value`, value);

    window.open(`http://www.facebook.com/dialog/send?link=${value}`)
    link = ``;
    clickedOnButton = true;

})

document.getElementById(`discord`).addEventListener(`click`, () => {


    let value = document.getElementById(`myInput`).value;
    if(link && !clickedOnButton){
        value = link
    }
    else if(!value){
        value = window.location.href;
    }

    console.log(`value`, value);
    link = ``;
    clickedOnButton = true;

})

document.getElementById(`wechat`).addEventListener(`click`, () => {


    let value = document.getElementById(`myInput`).value;
    if(link && !clickedOnButton){
        value = link
    }
    else if(!value){
        value = window.location.href;
    }

    console.log(`value`, value);
    link = ``;
    clickedOnButton = true;

})

document.getElementById(`telegram`).addEventListener(`click`, () => {


    let value = document.getElementById(`myInput`).value;
    if(link && !clickedOnButton){
        value = link
    }
    else if(!value){
        value = window.location.href;
    }

    console.log(`value`, value);
    link = ``;
    clickedOnButton = true;

})

document.getElementById(`redidit`).addEventListener(`click`, () => {


    let value = document.getElementById(`myInput`).value;
    if(link && !clickedOnButton){
        value = link
    }
    else if(!value){
        value = window.location.href;
    }

    console.log(`value`, value);
    link = ``;
    clickedOnButton = true;

})