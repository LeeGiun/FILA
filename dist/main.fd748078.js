parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"F2HO":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".pop_up"),r=document.getElementById("pop_close");r.addEventListener("click",function(){r.checked&&(e.style.display="none",r.checked=!1)});var t=document.getElementById("QuickMenu"),n=document.querySelectorAll(".Q_txt"),o=document.querySelector(".QuickMenu_UP_Down");t.addEventListener("mouseover",function(){t.style.width="150px",o.style.width="150px",t.style.transition="0.3s",n.forEach(function(e){e.style.width="100px",e.style.opacity="1"})}),t.addEventListener("mouseout",function(){t.style.width="50px",o.style.width="50px",t.style.transition="0.3s",n.forEach(function(e){e.style.width="0px",e.style.opacity="0"})}),o.addEventListener("mouseover",function(){t.style.height="300px",o.style.width="150px",o.style.height="100px",o.style.lineHeight="50px",o.style.fontSize="32px",o.style.transition="0.3s",o.style.Color="#000"}),o.addEventListener("mouseout",function(){t.style.height="250px",o.style.height="50px",o.style.lineHeight="20px",o.style.fontSize="18px",o.style.Color="#777",o.style.transition="0.3s"}),window.addEventListener("load",function(){var e=localStorage.getItem("scrollY");document.querySelector(".slide_sub_img").style.opacity=e&&e>4e3?"0":"1"}),document.addEventListener("scroll",function(){localStorage.setItem("scrollY",window.scrollY),window.scrollY>4e3?document.querySelector(".slide_sub_img").style.opacity="0":document.querySelector(".slide_sub_img").style.opacity="1"});document.getElementById("header");var i=document.querySelector("#header .header_outer"),l=(document.querySelector(".header_box"),document.querySelector(".mainMenu")),u=(document.querySelector(".mainMenu_ul"),document.querySelector(".mainMenu_ul li a"),document.querySelector(".gnb"),document.querySelector(".logo"),document.querySelector(".mainMenu_Sheet")),c=document.querySelector(".main_menu_sht"),a=(document.querySelector(".each_menu_ul"),document.querySelectorAll(".each_menu_ul li")),s=document.querySelector(".Women_sheet_box"),d=document.querySelector(".Men_sheet_box"),p=document.querySelector(".Kids_sheet_box"),w=document.querySelector(".Brand_sheet_box"),m=document.querySelector(".each_menu_ul li:nth-child(4)"),S=[s,d,p,m,w];l.addEventListener("mouseover",function(){u.style.display="flex",c.style.display="flex",s.style.display="flex",d.style.display="none",p.style.display="none",w.style.display="none"}),a.forEach(function(e,r){e.addEventListener("mouseover",function(){S.forEach(function(e,t){e.style.display=r===t?"flex":"none"})})}),c.addEventListener("mouseleave",function(){u.style.display="none"}),document.addEventListener("scroll",function(){window.scrollY>=100?(i.classList.add("hd_fix"),i.style.top="-25px",i.style.height="80px"):i.classList.remove("hd_fix")}),new Swiper(".swiper_visual",{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},speed:500,touchRatio:.2,observer:!0,observeParents:!0,pagination:{el:".swiper_visual .swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper_visual .swiper-button-next",prevEl:".swiper_visual .swiper-button-prev"},scrollbar:{el:".swiper_visual .swiper-scrollbar"}});var _=[document.querySelector(".NewArrival_Swiper1"),document.querySelector(".NewArrival_Swiper2"),document.querySelector(".NewArrival_Swiper3"),document.querySelector(".NewArrival_Swiper4")],y=document.querySelectorAll(".NewSlideTap ul li");y.forEach(function(e,r){e.addEventListener("click",function(){for(var e=0;e<y.length;e++)_[e].style.display=e===r?"block":"none"})}),new Swiper(".NewArrival_Swiper1",{loop:!0,loopAdditionalSlides:1,slidesPerView:3,spaceBetween:10,centeredSlides:!0,pagination:{el:".NewArrival_Swiper1 .swiper-pagination",clickable:!0},navigation:{nextEl:".NewArrival_Swiper1 .swiper-button-next",prevEl:".NewArrival_Swiper1 .swiper-button-prev"}}),new Swiper(".NewArrival_Swiper2",{loop:!0,loopAdditionalSlides:1,slidesPerView:3,spaceBetween:10,centeredSlides:!0,pagination:{el:".NewArrival_Swiper2 .swiper-pagination",clickable:!0},navigation:{nextEl:".NewArrival_Swiper2 .swiper-button-next",prevEl:".NewArrival_Swiper2 .swiper-button-prev"}}),new Swiper(".NewArrival_Swiper3",{loop:!0,loopAdditionalSlides:1,slidesPerView:3,spaceBetween:10,centeredSlides:!0,pagination:{el:".NewArrival_Swiper3 .swiper-pagination",clickable:!0},navigation:{nextEl:".NewArrival_Swiper3 .swiper-button-next",prevEl:".NewArrival_Swiper3 .swiper-button-prev"}}),new Swiper(".NewArrival_Swiper4",{loop:!0,loopAdditionalSlides:1,slidesPerView:3,spaceBetween:10,centeredSlides:!0,pagination:{el:".NewArrival_Swiper4 .swiper-pagination",clickable:!0},navigation:{nextEl:".NewArrival_Swiper4 .swiper-button-next",prevEl:".NewArrival_Swiper4 .swiper-button-prev"}});var v=[document.querySelector(".NewArrival_Swiper1 .swiper-wrapper .slide1"),document.querySelector(".NewArrival_Swiper1 .swiper-wrapper .slide2"),document.querySelector(".NewArrival_Swiper1 .swiper-wrapper .slide3"),document.querySelector(".NewArrival_Swiper1 .swiper-wrapper .slide4"),document.querySelector(".NewArrival_Swiper1 .swiper-wrapper .slide5"),document.querySelector(".NewArrival_Swiper1 .swiper-wrapper .slide6")],q=[document.querySelector(".NewArrival_Swiper2 .swiper-wrapper .slide1"),document.querySelector(".NewArrival_Swiper2 .swiper-wrapper .slide2"),document.querySelector(".NewArrival_Swiper2 .swiper-wrapper .slide3"),document.querySelector(".NewArrival_Swiper2 .swiper-wrapper .slide4"),document.querySelector(".NewArrival_Swiper2 .swiper-wrapper .slide5"),document.querySelector(".NewArrival_Swiper2 .swiper-wrapper .slide6")],x=[document.querySelector(".NewArrival_Swiper3 .swiper-wrapper .slide1"),document.querySelector(".NewArrival_Swiper3 .swiper-wrapper .slide2"),document.querySelector(".NewArrival_Swiper3 .swiper-wrapper .slide3"),document.querySelector(".NewArrival_Swiper3 .swiper-wrapper .slide4"),document.querySelector(".NewArrival_Swiper3 .swiper-wrapper .slide5"),document.querySelector(".NewArrival_Swiper3 .swiper-wrapper .slide6")],g=[document.querySelector(".NewArrival_Swiper4 .swiper-wrapper .slide1"),document.querySelector(".NewArrival_Swiper4 .swiper-wrapper .slide2"),document.querySelector(".NewArrival_Swiper4 .swiper-wrapper .slide3"),document.querySelector(".NewArrival_Swiper4 .swiper-wrapper .slide4"),document.querySelector(".NewArrival_Swiper4 .swiper-wrapper .slide5"),document.querySelector(".NewArrival_Swiper4 .swiper-wrapper .slide6")],b=[document.querySelector(".NewArrival_Swiper1 .new_txt_outer1"),document.querySelector(".NewArrival_Swiper1 .new_txt_outer2"),document.querySelector(".NewArrival_Swiper1 .new_txt_outer3"),document.querySelector(".NewArrival_Swiper1 .new_txt_outer4"),document.querySelector(".NewArrival_Swiper1 .new_txt_outer5"),document.querySelector(".NewArrival_Swiper1 .new_txt_outer6")],A=[document.querySelector(".NewArrival_Swiper2 .new_txt_outer1"),document.querySelector(".NewArrival_Swiper2 .new_txt_outer2"),document.querySelector(".NewArrival_Swiper2 .new_txt_outer3"),document.querySelector(".NewArrival_Swiper2 .new_txt_outer4"),document.querySelector(".NewArrival_Swiper2 .new_txt_outer5"),document.querySelector(".NewArrival_Swiper2 .new_txt_outer6")],f=[document.querySelector(".NewArrival_Swiper3 .new_txt_outer1"),document.querySelector(".NewArrival_Swiper3 .new_txt_outer2"),document.querySelector(".NewArrival_Swiper3 .new_txt_outer3"),document.querySelector(".NewArrival_Swiper3 .new_txt_outer4"),document.querySelector(".NewArrival_Swiper3 .new_txt_outer5"),document.querySelector(".NewArrival_Swiper3 .new_txt_outer6")],N=[document.querySelector(".NewArrival_Swiper4 .new_txt_outer1"),document.querySelector(".NewArrival_Swiper4 .new_txt_outer2"),document.querySelector(".NewArrival_Swiper4 .new_txt_outer3"),document.querySelector(".NewArrival_Swiper4 .new_txt_outer4"),document.querySelector(".NewArrival_Swiper4 .new_txt_outer5"),document.querySelector(".NewArrival_Swiper4 .new_txt_outer6")],E=[0,0,0,0,0,0];v.forEach(function(e,r){e.addEventListener("mouseover",function(){0===E[r]&&(b[r].style.bottom="0px",E[r]=1)}),e.addEventListener("mouseout",function(){1===E[r]&&(b[r].style.bottom="-170px",E[r]=0)})}),q.forEach(function(e,r){e.addEventListener("mouseover",function(){0===E[r]&&(A[r].style.bottom="0px",E[r]=1)}),e.addEventListener("mouseout",function(){1===E[r]&&(A[r].style.bottom="-170px",E[r]=0)})}),x.forEach(function(e,r){e.addEventListener("mouseover",function(){0===E[r]&&(f[r].style.bottom="0px",E[r]=1)}),e.addEventListener("mouseout",function(){1===E[r]&&(f[r].style.bottom="-170px",E[r]=0)})}),g.forEach(function(e,r){e.addEventListener("mouseover",function(){0===E[r]&&(N[r].style.bottom="0px",E[r]=1)}),e.addEventListener("mouseout",function(){1===E[r]&&(N[r].style.bottom="-170px",E[r]=0)})}),new Swiper(".Magazine_Swiper",{slidesPerView:2.2,spaceBetween:20,pagination:{el:".Magazine_Swiper .swiper-pagination",clickable:!0}});var h=[document.querySelector(".Magazine_blur1"),document.querySelector(".Magazine_blur2"),document.querySelector(".Magazine_blur3"),document.querySelector(".Magazine_blur4"),document.querySelector(".Magazine_blur5")],k=[document.querySelector(".Magazine_blur1 .Magazine_txt"),document.querySelector(".Magazine_blur2 .Magazine_txt"),document.querySelector(".Magazine_blur3 .Magazine_txt"),document.querySelector(".Magazine_blur4 .Magazine_txt"),document.querySelector(".Magazine_blur5 .Magazine_txt")],M=[document.querySelector(".Magazine_blur1 label"),document.querySelector(".Magazine_blur2 label"),document.querySelector(".Magazine_blur3 label"),document.querySelector(".Magazine_blur4 label"),document.querySelector(".Magazine_blur5 label")];MagazineHoverOn=0,h.forEach(function(e,r){e.addEventListener("mouseover",function(){0===MagazineHoverOn&&(e.style.opacity="1",k[r].style.top="25vh",k[r].style.opacity="1",M[r].style.bottom="20vh",M[r].style.opacity="1",MagazineHoverOn=1)}),e.addEventListener("mouseout",function(){1===MagazineHoverOn&&(e.style.opacity="0",k[r].style.top="10vh",k[r].style.opacity="0",M[r].style.bottom="10vh",M[r].style.opacity="0",MagazineHoverOn=0)})}),new Swiper(".Recommend_Swiper",{slidesPerView:3,spaceBetween:20,pagination:{el:".Recommend_Swiper .swiper-pagination",clickable:!0}});var L,z=[document.querySelector(".recommend_plus1"),document.querySelector(".recommend_plus2"),document.querySelector(".recommend_plus3"),document.querySelector(".recommend_plus4"),document.querySelector(".recommend_plus5"),document.querySelector(".recommend_plus6"),document.querySelector(".recommend_plus7"),document.querySelector(".recommend_plus8"),document.querySelector(".recommend_plus9"),document.querySelector(".recommend_plus10"),document.querySelector(".recommend_plus11"),document.querySelector(".recommend_plus12"),document.querySelector(".recommend_plus13"),document.querySelector(".recommend_plus14"),document.querySelector(".recommend_plus15"),document.querySelector(".recommend_plus16"),document.querySelector(".recommend_plus17"),document.querySelector(".recommend_plus18"),document.querySelector(".recommend_plus19"),document.querySelector(".recommend_plus20"),document.querySelector(".recommend_plus21"),document.querySelector(".recommend_plus22"),document.querySelector(".recommend_plus23"),document.querySelector(".recommend_plus24"),document.querySelector(".recommend_plus25")],R=[document.querySelector(".recommend_txt1"),document.querySelector(".recommend_txt2"),document.querySelector(".recommend_txt3"),document.querySelector(".recommend_txt4"),document.querySelector(".recommend_txt5"),document.querySelector(".recommend_txt6"),document.querySelector(".recommend_txt7"),document.querySelector(".recommend_txt8"),document.querySelector(".recommend_txt9"),document.querySelector(".recommend_txt10"),document.querySelector(".recommend_txt11"),document.querySelector(".recommend_txt12"),document.querySelector(".recommend_txt13"),document.querySelector(".recommend_txt14"),document.querySelector(".recommend_txt15"),document.querySelector(".recommend_txt16"),document.querySelector(".recommend_txt17"),document.querySelector(".recommend_txt18"),document.querySelector(".recommend_txt19"),document.querySelector(".recommend_txt20"),document.querySelector(".recommend_txt21"),document.querySelector(".recommend_txt22"),document.querySelector(".recommend_txt23"),document.querySelector(".recommend_txt24"),document.querySelector(".recommend_txt25")],B=0,C=!1;z.forEach(function(e,r){e.addEventListener("click",function(){0===B&&(R[r].style.display="block",B=1)}),e.addEventListener("mouseleave",function(){L=setTimeout(function(){C||(R[r].style.display="none",B=0)},500)})}),R.forEach(function(e,r){e.addEventListener("mouseenter",function(){C=!0,clearTimeout(L)}),e.addEventListener("mouseleave",function(){C=!1,R[r].style.display="none",B=0})});var P=['<i class="fas fa-sort-up"></i>','<i class="fas fa-sort-down"></i>'];new Swiper(".SnsSwiper",{direction:"vertical",slidesPerView:1,spaceBetween:30,mousewheel:!0,pagination:{el:".SnsSwiper .swiper-pagination",clickable:!0,bulletClass:"SNS_custom_bullet",bulletActiveClass:"swiper-pagination-SNS-custom-bullet",renderBullet:function(e,r){return'<div class="'+r+'"><span>'+P[e]+"</span></div>"}}});var V=["1. 테니스 라이프 카라원피스","2. 테니스 라이프 카라 원피스","3. 테니스 카라 원피스","4. 테니스 라이프 니트 카라티셔츠","5. 테니스 퍼포먼스 헨리넥 반팔티셔츠","6. 베이직 리니어 반팔티"],H=["1. 레이플라이드 v2 (109)","2. 레이플라이드 v2 (896)","3. 레이플라이드 v2 (920)","4. 레이플라이드 (325)","5. 레이플라이드 (161)","6. 레이플라이드 (001)"],O=["1. Fila tennis 블럭 자켓","2. Fila tennis 블럭 하프넥 아노락","3. Sportslife 아치로고 맨투맨","4. Sportslife 긴팔 티셔츠","5. Fila essential 반팔티셔츠","6. Sportslife 아치로고 반팔티셔츠"],I=["1. 타르가 클래식 (100)","2. 타르가 클래식 (320)","3. 타르가 클럽 LT (112)","4. 타르가 클럽 LT (142)","5. 타르가 88/22","6. 타르가 클럽 (154)"];new Swiper(".swiper_Ranking2",{slidesPerView:3,spaceBetween:30,centeredSlides:!0,rewind:!0,autoplay:{delay:3e3},speed:500,pagination:{el:".swiper_Ranking2 .swiper-pagination",clickable:!0,bulletClass:"custom_bullet2",bulletActiveClass:"swiper-pagination-custom-bullet2",renderBullet:function(e,r){return'<div class="'+r+'"><span>'+H[e]+"</span></div>"}},navigation:{nextEl:".swiper_Ranking2 .swiper-button-next",prevEl:".swiper_Ranking2 .swiper-button-prev"}}),new Swiper(".swiper_Ranking3",{slidesPerView:3,spaceBetween:30,centeredSlides:!0,rewind:!0,autoplay:{delay:3e3},speed:500,pagination:{el:".swiper_Ranking3 .swiper-pagination",clickable:!0,bulletClass:"custom_bullet3",bulletActiveClass:"swiper-pagination-custom-bullet3",renderBullet:function(e,r){return'<div class="'+r+'"><span>'+O[e]+"</span></div>"}},navigation:{nextEl:".swiper_Ranking3 .swiper-button-next",prevEl:".swiper_Ranking3 .swiper-button-prev"}}),new Swiper(".swiper_Ranking4",{slidesPerView:3,spaceBetween:30,centeredSlides:!0,rewind:!0,autoplay:{delay:3e3},speed:500,pagination:{el:".swiper_Ranking4 .swiper-pagination",clickable:!0,bulletClass:"custom_bullet4",bulletActiveClass:"swiper-pagination-custom-bullet4",renderBullet:function(e,r){return'<div class="'+r+'"><span>'+I[e]+"</span></div>"}},navigation:{nextEl:".swiper_Ranking4 .swiper-button-next",prevEl:".swiper_Ranking4 .swiper-button-prev"}});var T=[document.querySelector(".swiper_Ranking1"),document.querySelector(".swiper_Ranking2"),document.querySelector(".swiper_Ranking3"),document.querySelector(".swiper_Ranking4")],Y=document.querySelectorAll(".Ranking_Tap li");Y.forEach(function(e,r){e.addEventListener("click",function(){for(var e=0;e<Y.length;e++)T[e].style.display=e===r?"block":"none"})}),new Swiper(".swiper_Ranking1",{slidesPerView:3,spaceBetween:30,centeredSlides:!0,rewind:!0,autoplay:{delay:3e3},speed:500,pagination:{el:".swiper_Ranking1 .swiper-pagination",clickable:!0,bulletClass:"custom_bullet1",bulletActiveClass:"swiper-pagination-custom-bullet1",renderBullet:function(e,r){return'<div class="'+r+'"><span>'+V[e]+"</span></div>"}},navigation:{nextEl:".swiper_Ranking1 .swiper-button-next",prevEl:".swiper_Ranking1 .swiper-button-prev"}})});
},{}]},{},["F2HO"], null)
//# sourceMappingURL=/main.fd748078.js.map