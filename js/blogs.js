/*navbar*/

let navbar = document.getElementById("navbar");
let nav_button = document.querySelector(".nav_button");


// window.onscroll = function (){
//     let value = scrollY + "px";

//     if(value > 350 + "px"){
//         // navbar.style.backgroundColor = "white"
//         // navbar.style.position = "fixed" ;
//         nav_button.style.padding = "15px 12px"
//         nav_button.style.transition = "0.5s"
//     }

//      else{
//         // navbar.style.backgroundColor = "transparent" ;
  
//         nav_button.style.padding = "15px 30px"
//         nav_button.style.transition = "0.5s"
//      }

// }



/*Start Navbar */

    let navbar_menu = document.getElementById("navbar-menu")
    let mobile_menu = document.getElementById("mobile-menu");
    let navclose = document.getElementById("navclose");

    mobile_menu.addEventListener("click",function (){
        navbar_menu.classList.add("activemenu");
    });
    
    navclose.addEventListener("click",function (){
        navbar_menu.classList.remove("activemenu");
    });


/*End Navbar */


/*Start Header */
    let form = document.getElementById("form");
    let formclose = document.getElementById("formclose");
    let btnformsearch = document.getElementById("btnformsearch");

    btnformsearch.addEventListener("click",function (){
        form.classList.add("activeform");
    });
    
    formclose.addEventListener("click",function (){
        form.classList.remove("activeform");
    });

/*End Header*/



/*Start Section One */
// let counts1=setInterval(updated1,30) ;
// let upto1=0;

// function updated1(){
//       var count1= document.getElementById("counter1");
//       count1.innerHTML=++upto1;

//       if(upto1 === 300) {
//           clearInterval(counts1);
//       } 
//   }

//   function fadeIn(){
//     setTimeout(updated1,1000); 
//   }

//   window.onload = () => { 
//     fadeIn() 
//   }

//   let counts2=setInterval(updated2,.01) ;
//   let upto2=0;

// function updated2(){
//       var count2= document.getElementById("counter2");
//       count2.innerHTML=++upto2;

//       if(upto2 === 24000) {
//           clearInterval(counts2);
//       } 
//   }

//   function fadeIn(){
//     setTimeout(updated2,.01); 
//   }

//   window.onload = () => { 
//     fadeIn() 
//   }

//   let counts3=setInterval(updated3,30) ;
//   let upto3=0;

// function updated3(){
//       var count3= document.getElementById("counter3");
//       count3.innerHTML=++upto3;

//       if(upto3 === 200) {
//           clearInterval(counts3);
//       } 
//   }

//   function fadeIn(){
//     setTimeout(updated3,1000); 
//   }

//   window.onload = () => { 
//     fadeIn() 
//   }

/*End Section One */



/*Start Section Five */


// var swiper = new Swiper(".feedback-slider", {
//     spaceBetween: 10,
//     GrabCursor:true,
//     loop:true,
//     centeredSlides: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
//   });

/*End Section Five */



/*Start Loading*/

function loader (){
    document.querySelector(".loader-container").classList.add("activenoneplay"); /*هنا جبت اللوود وفعلت عدم التشغيل */
  }
  function fadeOut(){
    setTimeout(loader,2000); /* هنا قولت خلي عدم التشغيل يوقف لمدة 2 ثانية لحد ما الصفحة تحمل*/
  }

  window.onload = () => { /* هنا قولت نفذ معادلة عدم التشغيل بعد تحميل الصفحة*/
    fadeOut() 

  }

/*End Loadind*/