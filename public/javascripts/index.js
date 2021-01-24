
var lastScrollTop=0;
header= document.getElementById('header');
window.addEventListener("scroll",function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
     
        header.style.top = "-180px";
    } if(scrollTop<lastScrollTop){
        header.style.top = "0";
    }
   

    lastScrollTop = scrollTop;
})

