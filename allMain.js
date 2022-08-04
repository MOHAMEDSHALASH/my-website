// LOADING 
let moo = setInterval(()=>{
    let loaad =document.getElementById('loading');
    loaad.style.display="none"
},4000)
// _______________________________________________
// When click menu Icon Showw AND hide BAR
document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector("#bar").classList.toggle("bar-show")
    menu.style.display="none"
    closeBar.style.display="block"
    if(window.innerWidth>=930){
            WIDTHSMALL.style.width="calc(100% - 8cm)";
            WIDTHSMALL2.style.width="calc(100% - 8cm)";
    }
    else{
        WIDTHSMALL.style.width="";
        WIDTHSMALL2.style.width="";
    }
});
document.querySelector(".closeBar").addEventListener("click", () => {
    document.querySelector("#bar").classList.toggle("bar-show")
    menu.style.display="block"
    closeBar.style.display="none"
    WIDTHSMALL.style.width=""
    WIDTHSMALL2.style.width=""
});
// ___________________________________________________________________________
// CLOCK
let hour = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");
let clock  =setInterval(()=>{
    let h =new Date().getHours();
    let m =new Date().getMinutes();
    let s =new Date().getSeconds();
    //Hours
    if(h > 12){
        h =`${h-12}`;
        ampm.innerText="AM"
    }
    else{
        h =h;
        ampm.innerText="PM"
    }
    if(h < 10){
        h = `0${h}`; 
    }
    if(h == 0){
        h = "12";
    }
    hour.innerHTML=`${h}`;
    //Minutes
    if(m < 10){
        m =`0${m}`
    }
    minutes.innerHTML=`${m}`;
    // seconds
    if(s < 10){
        s =`0${s}`
    }
    seconds.innerHTML=`${s}`;
    ball3.style.transform=`rotate(${s * 6}deg)`
    ball2.style.transform=`rotate(${m * 6}deg)`
    ball1.style.transform=`rotate(${h * 6}deg)`
})
// ____________________________________________________________
// SETTING IN BAR WHEN CLICK SETTING HIDE AND SHOW
document.querySelector("#btnSetting").addEventListener("click", () => {
    document.querySelector(".setting").classList.toggle("setting-show");
});
// BUTTON DARK MODE IN SETTING
let btnSCROLL =document.querySelectorAll(".btndark");
    if(localStorage.getItem("dark")){
        console.log('mohamed')
        document.querySelector(".body").classList.add(localStorage.getItem("dark"))
    }
    // localStorage.clear()
    btnSCROLL.forEach((li)=>{
        li.addEventListener("click", (eo) => {
            document.querySelector(".btnScroll").classList.toggle("btnScroll-show");
            document.querySelector(".m").classList.toggle("m-show");
            document.querySelector('.m-open').classList.toggle("m-close")
            document.querySelector(".body").classList.add(eo.target.dataset.dark);
            console.log(eo.target.dataset.dark)
            // SET local storge store dark mode
        localStorage.setItem("dark",eo.target.dataset.dark);
    })
});
/* what about dark ? <= msg */
document.querySelector('.what-about-dark-mode').addEventListener("mouseover",()=>{
    document.querySelector('.what-about-dark-mode-msg').classList.toggle("what-about-dark-mode-msg-show")
})
document.querySelector('.what-about-dark-mode').addEventListener("mouseout",()=>{
    document.querySelector('.what-about-dark-mode-msg').classList.toggle("what-about-dark-mode-msg-show")
})
// ____________________________________________________________
//Change colors in page
let colors=document.querySelectorAll('.colors-in-page ul p');
if(localStorage.getItem("color-option")){
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color-option"));
            // REMOVE CLASS ACTIVE
            colors.forEach((li)=>{
                li.classList.remove("active-color");
            });
    // Add active in local
    document.querySelector(`[data-color="${localStorage.getItem("color-option")}"]`).classList.add("active-color")
}
colors.forEach((li)=>{
    li.addEventListener("click",(eo)=>{
        // console.log(eo.target.dataset.color)
        // REMOVE CLASS ACTIVE
        colors.forEach((li)=>{
            li.classList.remove("active-color");
        })
        // add active 
        li.classList.add("active-color")
        document.documentElement.style.setProperty("--main-color",eo.target.dataset.color);
        // Set Local Storage
        localStorage.setItem("color-option",eo.target.dataset.color)
    })
})