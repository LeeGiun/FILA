parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uGG1":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",function(){document.querySelector("#header");var e=document.querySelector("#header .header_outer"),t=(document.querySelector(".header_box"),document.querySelector(".mainMenu")),n=(document.querySelector(".mainMenu_ul"),document.querySelector(".mainMenu_ul li"),document.querySelector(".gnb"),document.querySelector(".logo"),document.querySelector(".mainMenu_Sheet")),o=document.querySelector(".main_menu_sht"),l=(document.querySelector(".each_menu_ul"),document.querySelectorAll(".each_menu_ul li")),c=document.querySelector(".Women_sheet_box"),r=document.querySelector(".Men_sheet_box"),u=document.querySelector(".Kids_sheet_box"),i=document.querySelector(".Brand_sheet_box"),s=document.querySelector(".each_menu_ul li:nth-child(4)"),d=[c,r,u,s,i];t.addEventListener("mouseover",function(){n.style.display="flex",o.style.display="flex",c.style.display="flex",r.style.display="none",u.style.display="none",i.style.display="none"}),l.forEach(function(e,t){e.addEventListener("mouseover",function(){d.forEach(function(e,n){e.style.display=t===n?"flex":"none"})})}),o.addEventListener("mouseleave",function(){n.style.display="none"});var a=document.querySelectorAll(".mainMenu_ul li a"),y=document.querySelector(".logo img"),m=document.querySelector(".gnb_Menu_map img"),f=document.querySelector(".gnb_Menu_search img"),h=document.querySelector(".gnb_Menu_my img"),_=document.querySelector(".gnb_Menu_cart img");document.addEventListener("scroll",function(){window.scrollY>=100?(e.classList.add("hd_fix"),e.style.top="-25px",e.style.height="80px",a.forEach(function(e,t){a[t].style.color="#fff"}),m.setAttribute("src","./images/GNB_map1.svg"),f.setAttribute("src","./images/GNB_search1.svg"),h.setAttribute("src","./images/GNB_my1.svg"),_.setAttribute("src","./images/GNB_cart1.svg"),y.setAttribute("src","./images/FILA LOGO_1.svg"),document.querySelector(".mainMenu_ul li:nth-child(4)").style.borderRight="1px solid #fff"):(e.classList.remove("hd_fix"),a.forEach(function(e,t){a[t].style.color="#000"}),m.setAttribute("src","./images/GNB_map2.svg"),f.setAttribute("src","./images/GNB_search2.svg"),h.setAttribute("src","./images/GNB_my2.svg"),_.setAttribute("src","./images/GNB_cart2.svg"),y.setAttribute("src","./images/FILA LOGO_2.svg"),document.querySelector(".mainMenu_ul li:nth-child(4)").style.borderRight="1px solid #000")});var g=document.getElementById("QuickMenu"),S=document.querySelectorAll(".Q_txt"),b=document.querySelector(".QuickMenu_UP_Down");g.addEventListener("mouseover",function(){g.style.width="150px",b.style.width="150px",g.style.transition="0.3s",S.forEach(function(e){e.style.width="100px",e.style.opacity="1"})}),g.addEventListener("mouseout",function(){g.style.width="50px",b.style.width="50px",g.style.transition="0.3s",S.forEach(function(e){e.style.width="0px",e.style.opacity="0"})}),b.addEventListener("mouseover",function(){g.style.height="300px",b.style.width="150px",b.style.height="100px",b.style.lineHeight="50px",b.style.fontSize="32px",b.style.transition="0.3s",b.style.color="#000"}),b.addEventListener("mouseout",function(){g.style.height="250px",b.style.height="50px",b.style.lineHeight="20px",b.style.fontSize="18px",b.style.color="#777",b.style.transition="0.3s"});var v=document.getElementById("num_Plus"),p=document.getElementById("num_Minus"),q=document.querySelector(".Select_NumberBox input"),E=document.querySelector(".Right_Price span:last-child");function x(e){var t=parseInt(q.value),n=parseInt(E.textContent.replace(/,/g,""));isNaN(t)&&(t=0),"plus"===e?(t+=1,n+=119e3):"minus"===e&&(t-=1,n-=119e3),t<1?(t=1,n=119e3):t>9&&(t=9,n=1071e3),q.value=t,E.textContent=n.toLocaleString()+"원"}v.addEventListener("click",function(){return x("plus")}),p.addEventListener("click",function(){return x("minus")});var L=[document.querySelector(".Right_ProductSize ul li:nth-child(1) label"),document.querySelector(".Right_ProductSize ul li:nth-child(2) label"),document.querySelector(".Right_ProductSize ul li:nth-child(3) label")];L.forEach(function(e){e.addEventListener("click",function(){L.forEach(function(t){t===e?(t.style.backgroundColor="#002053",t.style.border="1px solid #002053",t.style.color="#fff",t.style.transition="0.3s"):(t.style.color="#000",t.style.backgroundColor="#fff",t.style.border="1px solid #000",t.style.transition="0.3s")})})}),[document.querySelector(".Product_FineGreen label"),document.querySelector(".Product_HighRed label")].forEach(function(e){e.addEventListener("click",function(){L.forEach(function(t){t===e?(t.style.backgroundColor="#002053",t.style.border="1px solid #002053",t.style.color="#fff",t.style.transition="0.3s"):(t.style.color="#000",t.style.backgroundColor="#fff",t.style.border="1px solid #000",t.style.transition="0.3s")})})});var k=document.querySelectorAll(".Thumb_ImgBox div"),A=document.querySelector(".detail_Thumb_Img_Right");A.style.transition="background-image 0.3s",k.forEach(function(e,t){e.addEventListener("click",function(){A.style.backgroundImage="url(../CSS/BACK_IMG/detail".concat(t+1,".jpeg)")})});var w=document.querySelectorAll(".Tap_All ul li"),M=[document.querySelector(".Product_Infomation"),document.querySelector(".Exchange_Return"),document.querySelector(".delivery_Info")];w.forEach(function(e,t){e.addEventListener("click",function(){M.forEach(function(e,n){e.style.display=n===t?"block":"none"})})}),w.forEach(function(e,t){e.addEventListener("click",function(){w.forEach(function(e,n){n===t?(e.style.color="#fff",e.style.backgroundColor="#002053",e.style.fontWeight="bold"):(e.style.color="#000",e.style.backgroundColor="#fff")})})});var B=document.querySelectorAll(".Tap_All2 ul li"),I=[document.querySelector(".Review"),document.querySelector(".QnA")];B.forEach(function(e,t){e.addEventListener("click",function(){I.forEach(function(e,n){e.style.display=n===t?"block":"none"})})}),B.forEach(function(e,t){e.addEventListener("click",function(){B.forEach(function(e,n){n===t?(e.style.color="#fff",e.style.backgroundColor="#002053",e.style.fontWeight="bold"):(e.style.color="#000",e.style.backgroundColor="#fff")})})});var R=document.getElementById("Review_btn"),C=document.querySelector(".Review_write"),G=document.querySelector("#RVwrite_btn + label"),N=document.querySelector(".Review_write_box #close_btn + label");R.addEventListener("click",function(){C.style.display="block"}),N.addEventListener("click",function(){C.style.display="none"}),G.addEventListener("click",function(){C.style.display="none"})});
},{}]},{},["uGG1"], null)
//# sourceMappingURL=/detailPage.062e8a8d.js.map