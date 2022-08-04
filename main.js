// WHEN HOVER ARROW IN HEADER THE ITEMS SHOW
const otherlinks=()=>{
    document.querySelector(".itemsINhead").addEventListener("mouseover", () => {
    document.querySelector("#items").style.display="block"
});
document.querySelector(".itemsINhead").addEventListener("mouseout", () => {
    document.querySelector("#items").style.display=""
});
}
otherlinks()
// _______________________________________________
// AUTO WRITTING
let i=1;
const mo=document.getElementById('auto');
const autowrite=()=>{
    const title="Mohamed ShalaSh        "
    mo.innerText=title.slice(0,i);
    i++;
    if(title.length<i){
        i=1;
    }
};
const stop=setInterval(autowrite,600)
// ____________________________________________________________
// WHEN CLICK BUTTON MORE IN MAIN PAGE
document.querySelector("#btnSHOWmore").addEventListener("click", () => {
    document.querySelector(".btn-more").classList.toggle("btn-more-show");
});
// close more
document.querySelector("#closeMore").addEventListener("click", () => {
    document.querySelector(".btn-more").classList.toggle("btn-more-show");
});
// WHEN CLICK BTNS IN OFFER PAGE
const product=document.getElementById('product')
document.querySelector("#p1").addEventListener("click", () => {
    product.style.zIndex="500"
    product.style.opacity="1"
});
document.querySelector("#close2").addEventListener("click", () => {
    product.style.zIndex=""
    product.style.opacity=""
});
document.querySelector("#p2").addEventListener("click", () => {
    visual.style.zIndex="500"
    visual.style.opacity="1"
});
document.querySelector("#close3").addEventListener("click", () => {
    visual.style.zIndex=""
    visual.style.opacity=""
});
document.querySelector("#p3").addEventListener("click", () => {
    ui.style.zIndex="500"
    ui.style.opacity="1"
});
document.querySelector("#close4").addEventListener("click", () => {
    ui.style.zIndex=""
    ui.style.opacity=""
});
// =========== ARROW UP ========ANIMATION===========
let up=document.querySelector('.up');
let experience=document.getElementById('experience');
let offer=document.getElementById('offer');
let cont=document.getElementById('contact')
let vw=document.querySelectorAll('.progress-bar')
window.onscroll=function(){
    // ARROW TO GO UP 
    if(scrollY >= 400){
        up.style.display="block"
            up.onclick=function(){
        scrollTo(0,0)
        }
    }else{
        up.style.display="none"
    }
    // EXPERINCE
    if(scrollY >= experience.offsetTop - 640){
        vw.forEach((e)=>{
            e.style.width=e.dataset.width;
        })
    }
    else{
        vw.forEach((e)=>{
            e.style.width="0%";
        })
    }
    // OFFER
    if(scrollY >= offer.offsetTop - 400){
        offer.classList.add("offer-show")
    }
    // CONTACT
    if(scrollY >= cont.offsetTop - 400){
        cont.classList.add("contact-show")
    }
}
// ____________________________________________________________
// FORM IN CONTACT
let contact=()=>{
    let textArea=document.getElementById('textarea');
let count=document.getElementById('count');
let progress=document.getElementById('progressArea');
let maxlentgh=textArea.getAttribute('maxlength');
count.innerHTML=maxlentgh
textArea.oninput=function(){
    count.innerHTML= `${maxlentgh - textArea.value.length}`;
    count.innerHTML == 0 ? count.style.color="red" : count.style.color="" ;
    progress.style.width=`${((textArea.value.length * 100 ) / maxlentgh)}%`
}
}
contact()
// _______________________________________________________________
