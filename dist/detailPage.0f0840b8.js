parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uGG1":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",function(){document.querySelector("#header");var e=document.querySelector("#header .header_outer"),t=(document.querySelector(".header_box"),document.querySelector(".mainMenu")),o=(document.querySelector(".mainMenu_ul"),document.querySelector(".mainMenu_ul li"),document.querySelector(".gnb"),document.querySelector(".logo"),document.querySelector(".mainMenu_Sheet")),n=document.querySelector(".main_menu_sht"),l=(document.querySelector(".each_menu_ul"),document.querySelectorAll(".each_menu_ul li")),r=document.querySelector(".Women_sheet_box"),c=document.querySelector(".Men_sheet_box"),u=document.querySelector(".Kids_sheet_box"),i=document.querySelector(".Brand_sheet_box"),s=document.querySelector(".each_menu_ul li:nth-child(4)"),d=[r,c,u,s,i];t.addEventListener("mouseover",function(){o.style.display="flex",n.style.display="flex",r.style.display="flex",c.style.display="none",u.style.display="none",i.style.display="none"}),l.forEach(function(e,t){e.addEventListener("mouseover",function(){d.forEach(function(e,o){e.style.display=t===o?"flex":"none"})})}),n.addEventListener("mouseleave",function(){o.style.display="none"});var a=document.querySelectorAll(".mainMenu_ul li a"),y=document.querySelector(".logo img"),m=document.querySelector(".gnb_Menu_map img"),f=document.querySelector(".gnb_Menu_search img"),h=document.querySelector(".gnb_Menu_my img"),g=document.querySelector(".gnb_Menu_cart img");document.addEventListener("scroll",function(){window.scrollY>=100?(e.classList.add("hd_fix"),e.style.top="-25px",e.style.height="80px",a.forEach(function(e,t){a[t].style.color="#fff"}),m.setAttribute("src","./images/GNB_map1.svg"),f.setAttribute("src","./images/GNB_search1.svg"),h.setAttribute("src","./images/GNB_my1.svg"),g.setAttribute("src","./images/GNB_cart1.svg"),y.setAttribute("src","./images/FILA LOGO_1.svg"),document.querySelector(".mainMenu_ul li:nth-child(4)").style.borderRight="1px solid #fff"):(e.classList.remove("hd_fix"),a.forEach(function(e,t){a[t].style.color="#000"}),m.setAttribute("src","./images/GNB_map2.svg"),f.setAttribute("src","./images/GNB_search2.svg"),h.setAttribute("src","./images/GNB_my2.svg"),g.setAttribute("src","./images/GNB_cart2.svg"),y.setAttribute("src","./images/FILA LOGO_2.svg"),document.querySelector(".mainMenu_ul li:nth-child(4)").style.borderRight="1px solid #000")});var _=document.getElementById("QuickMenu"),S=document.querySelectorAll(".Q_txt"),p=document.querySelector(".QuickMenu_UP_Down");_.addEventListener("mouseover",function(){_.style.width="150px",p.style.width="150px",_.style.transition="0.3s",S.forEach(function(e){e.style.width="100px",e.style.opacity="1"})}),_.addEventListener("mouseout",function(){_.style.width="50px",p.style.width="50px",_.style.transition="0.3s",S.forEach(function(e){e.style.width="0px",e.style.opacity="0"})}),p.addEventListener("mouseover",function(){_.style.height="300px",p.style.width="150px",p.style.height="100px",p.style.lineHeight="50px",p.style.fontSize="32px",p.style.transition="0.3s",p.style.color="#000"}),p.addEventListener("mouseout",function(){_.style.height="250px",p.style.height="50px",p.style.lineHeight="20px",p.style.fontSize="18px",p.style.color="#777",p.style.transition="0.3s"});var b=document.getElementById("num_Plus"),v=document.getElementById("num_Minus"),q=document.querySelector(".Select_NumberBox input"),E=document.querySelector(".Right_Price span:last-child");function x(e){var t=parseInt(q.value),o=parseInt(E.textContent.replace(/,/g,""));isNaN(t)&&(t=0),"plus"===e?(t+=1,o+=119e3):"minus"===e&&(t-=1,o-=119e3),t<1?(t=1,o=119e3):t>9&&(t=9,o=1071e3),q.value=t,E.textContent=o.toLocaleString()+"원"}b.addEventListener("click",function(){return x("plus")}),v.addEventListener("click",function(){return x("minus")});var L=[document.querySelector(".Right_ProductSize ul li:nth-child(1) label"),document.querySelector(".Right_ProductSize ul li:nth-child(2) label"),document.querySelector(".Right_ProductSize ul li:nth-child(3) label")];L.forEach(function(e){e.addEventListener("click",function(){L.forEach(function(t){t===e?(t.style.backgroundColor="#002053",t.style.border="1px solid #002053",t.style.color="#fff",t.style.transition="0.3s"):(t.style.color="#000",t.style.backgroundColor="#fff",t.style.border="1px solid #000",t.style.transition="0.3s")})})}),[document.querySelector(".Product_FineGreen label"),document.querySelector(".Product_HighRed label")].forEach(function(e){e.addEventListener("click",function(){L.forEach(function(t){t===e?(t.style.backgroundColor="#002053",t.style.border="1px solid #002053",t.style.color="#fff",t.style.transition="0.3s"):(t.style.color="#000",t.style.backgroundColor="#fff",t.style.border="1px solid #000",t.style.transition="0.3s")})})});var k=document.querySelectorAll(".Thumb_ImgBox div"),A=document.querySelector(".detail_Thumb_Img_Right");A.style.transition="background-image 0.3s",k.forEach(function(e,t){e.addEventListener("click",function(){A.style.backgroundImage="url(././BACK_IMG/detail".concat(t+1,".jpeg)")})});var M=document.querySelectorAll(".Tap_All ul li"),B=[document.querySelector(".Product_Infomation"),document.querySelector(".Exchange_Return"),document.querySelector(".delivery_Info")];M.forEach(function(e,t){e.addEventListener("click",function(){B.forEach(function(e,o){e.style.display=o===t?"block":"none"})})}),M.forEach(function(e,t){e.addEventListener("click",function(){M.forEach(function(e,o){o===t?(e.style.color="#fff",e.style.backgroundColor="#002053",e.style.fontWeight="bold"):(e.style.color="#000",e.style.backgroundColor="#fff")})})});var I=document.querySelectorAll(".Tap_All2 ul li"),C=[document.querySelector(".Review"),document.querySelector(".QnA")];I.forEach(function(e,t){e.addEventListener("click",function(){C.forEach(function(e,o){e.style.display=o===t?"block":"none"})})}),I.forEach(function(e,t){e.addEventListener("click",function(){I.forEach(function(e,o){o===t?(e.style.color="#fff",e.style.backgroundColor="#002053",e.style.fontWeight="bold"):(e.style.color="#000",e.style.backgroundColor="#fff")})})})});
},{}]},{},["uGG1"], null)
//# sourceMappingURL=/detailPage.0f0840b8.js.map