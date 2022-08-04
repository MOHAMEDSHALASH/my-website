// // SEARCH IN ALL PROJECTS PAGE
document.querySelector('.searchIcon').addEventListener("click",() =>{
    document.querySelector('.search').classList.toggle("search-show")
})
let up2=document.querySelector('.up2');
window.onscroll=function(){
    // ARROW TO GO UP 
    if(scrollY >= 400){
        up2.style.display="block"
            up2.onclick=function(){
        scrollTo(0,0)
        }
    }else{
        up2.style.display="none"
    }
}

