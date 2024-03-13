// fixed navbar
let nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled")
    }
}

//navbar collapse onclick
let navbar=document.querySelectorAll(".nav-link");
let navcollapse=document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function (a){
  a.addEventListener("click",function(){
    navcollapse.classList.remove("show");

  })
})

// Night Mode
let change = document.querySelector("#mode");
let body = document.querySelector("body");
let curMode = "white";
change.addEventListener("click", () => {
    if (curMode === "white") {
      curMode = "black";
      body.classList.add("black");
      body.classList.remove("white");
    } else {
      curMode = "white";
      body.classList.add("white");
      body.classList.remove("black");
    }
  });

