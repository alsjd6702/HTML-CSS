function logoopacity(){
    logo.classList.remove("on");
}
window.onscroll = function(){
    let ht = document.documentElement.scrollTop;
    let logo = document.querySelector(".intro .logo img");
    // console.log(ht);
    if(ht > 350){
        logo.classList.add("on");
    } if(ht > 550){                
        logo.classList.add("on2");
    } if(ht > 750){
        logo.classList.add("on3");
    }
}
let planned = document.querySelector("div.planned");
let decided = document.querySelector("div.decided");
let conInfo = document.querySelectorAll("div.per");
let classImg = document.querySelectorAll("div.class_img");