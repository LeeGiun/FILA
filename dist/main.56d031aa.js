// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"JS/main.js":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", function () {
  var popUp = document.querySelector('.pop_up');
  var popChk = document.getElementById('pop_close');
  popChk.addEventListener('click', function () {
    if (popChk.checked) {
      popUp.style.display = 'none';
      popChk.checked = false;
    }
  });

  // ===========================================
  // ** QuickMenu Content  **
  // ===========================================

  var QuickMenu = document.getElementById('QuickMenu');
  var QTxt = document.querySelectorAll('.Q_txt');
  var QuickMenuUpDown = document.querySelector('.QuickMenu_UP_Down');

  // 퀵메뉴 마우스 오버
  QuickMenu.addEventListener('mouseover', function () {
    QuickMenu.style.width = '150px';
    QuickMenuUpDown.style.width = '150px';
    QuickMenu.style.transition = '0.3s';
    QTxt.forEach(function (element) {
      element.style.width = '100px';
      element.style.opacity = '1';
    });
  });
  QuickMenu.addEventListener('mouseout', function () {
    QuickMenu.style.width = '50px';
    QuickMenuUpDown.style.width = '50px';
    QuickMenu.style.transition = '0.3s';
    QTxt.forEach(function (element) {
      element.style.width = '0px';
      element.style.opacity = '0';
    });
  });

  // 퀵메뉴 Up,Down 메뉴 마우스 오버
  QuickMenuUpDown.addEventListener('mouseover', function () {
    QuickMenu.style.height = '300px';
    QuickMenuUpDown.style.width = '150px';
    QuickMenuUpDown.style.height = '100px';
    QuickMenuUpDown.style.lineHeight = '50px';
    QuickMenuUpDown.style.fontSize = '32px';
    QuickMenuUpDown.style.transition = '0.3s';
    QuickMenuUpDown.style.Color = '#000';
  });
  QuickMenuUpDown.addEventListener('mouseout', function () {
    QuickMenu.style.height = '250px';
    QuickMenuUpDown.style.height = '50px';
    QuickMenuUpDown.style.lineHeight = '20px';
    QuickMenuUpDown.style.fontSize = '18px';
    QuickMenuUpDown.style.Color = '#777';
    QuickMenuUpDown.style.transition = '0.3s';
  });

  // ===========================================
  // ** Sub Img Content  **
  // ===========================================

  // slide_sub_img section영역이 겹쳐짐. 스크롤이벤트로 일정 높이 지날경우 사라지게끔 설정
  window.addEventListener("load", function () {
    var scrollY = localStorage.getItem("scrollY");
    if (scrollY && scrollY > 4000) {
      document.querySelector('.slide_sub_img').style.opacity = "0";
    } else {
      document.querySelector('.slide_sub_img').style.opacity = "1";
    }
  });
  document.addEventListener("scroll", function () {
    localStorage.setItem("scrollY", window.scrollY);
    if (window.scrollY > 4000) {
      document.querySelector('.slide_sub_img').style.opacity = "0";
    } else {
      document.querySelector('.slide_sub_img').style.opacity = "1";
    }
  });

  // ===========================================
  // ** Header Menu Pull Down Content  **
  // ===========================================

  /* HEADER 메뉴 영역 HOVER 시 MENU PULL DWON --------- */
  // 일반 HEADER 영역
  var Header = document.getElementById("header");
  var HeaderOuter = document.querySelector("#header .header_outer");
  var headerBox = document.querySelector(".header_box");

  // HEADER MENU
  var MainMenu = document.querySelector(".mainMenu");
  var mainMenuUL = document.querySelector(".mainMenu_ul");
  var mainMenuLiA = document.querySelector(".mainMenu_ul li a");
  var GNB = document.querySelector(".gnb");
  var LOGO = document.querySelector(".logo");

  // SHEET 영역 Sheet - 전체 / sht 50vh 영역
  var mainMenuSheet = document.querySelector(".mainMenu_Sheet");
  var mainMenuSht = document.querySelector(".main_menu_sht");

  // SHEET MENU 영역
  var eachMenuUL = document.querySelector(".each_menu_ul");
  var eachMenuLI = document.querySelectorAll(".each_menu_ul li");

  // SHHET DIV 영역
  var WomenSheetBox = document.querySelector(".Women_sheet_box");
  var MenSheetBox = document.querySelector(".Men_sheet_box");
  var KidsSheetBox = document.querySelector(".Kids_sheet_box");
  var BrandSheetBox = document.querySelector(".Brand_sheet_box");
  var NULLSheetBox = document.querySelector(".each_menu_ul li:nth-child(4)");

  // Sheet DIV 영역 각각 배열생성
  var Sheets = [WomenSheetBox, MenSheetBox, KidsSheetBox, NULLSheetBox, BrandSheetBox];

  // MAIN MENU 마우스 오버시 SHEET ON
  // Main Menu Hover -> Sheet 열림
  // -> (블러처리된 전체영역, sheets 겉 50vh 영역)
  MainMenu.addEventListener("mouseover", SheetOpen);
  function SheetOpen() {
    mainMenuSheet.style.display = "flex";
    mainMenuSht.style.display = "flex";
    WomenSheetBox.style.display = "flex";
    MenSheetBox.style.display = "none";
    KidsSheetBox.style.display = "none";
    BrandSheetBox.style.display = "none";
  }

  // forEach 이용하여 각 배열 생성된 Sheets를
  // index값 사용 후 Sheet open
  // li -> Mouse over -> 각각의 sheet open
  eachMenuLI.forEach(function (li, liIndex) {
    li.addEventListener("mouseover", function () {
      Sheets.forEach(function (sheet, sheetIndex) {
        if (liIndex === sheetIndex) {
          sheet.style.display = "flex";
        } else {
          sheet.style.display = "none";
        }
      });
    });
  });

  // Sheets 겉 50vh mouse벗어날 경우 SHEET 전체 OFF
  mainMenuSht.addEventListener("mouseleave", function () {
    mainMenuSheet.style.display = "none";
  });
  document.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      HeaderOuter.classList.add("hd_fix");
      HeaderOuter.style.top = "-25px";
      HeaderOuter.style.height = "80px";
    } else {
      HeaderOuter.classList.remove("hd_fix");
    }
  });

  // ===========================================
  // ** Visual main Content Swiper  **
  // ===========================================

  /*   const VisualSwiper = document.getElementById('visual_main_swiper') */

  function VisualSWP() {
    var swiper = new Swiper(".swiper_visual", {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      speed: 500,
      touchRatio: 0.2,
      observer: true,
      observeParents: true,
      pagination: {
        el: ".swiper_visual .swiper-pagination",
        type: "fraction"
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper_visual .swiper-button-next",
        prevEl: ".swiper_visual .swiper-button-prev"
      },
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper_visual .swiper-scrollbar"
      }
    });
  }
  VisualSWP();

  // ===========================================
  // ** NewArrival Content Swiper  **
  // ===========================================

  var NewArrSwiper1 = document.querySelector('.NewArrival_Swiper1');
  var NewArrSwiper2 = document.querySelector('.NewArrival_Swiper2');
  var NewArrSwiper3 = document.querySelector('.NewArrival_Swiper3');
  var NewArrSwiper4 = document.querySelector('.NewArrival_Swiper4');
  var NewArrSwiperALL = [NewArrSwiper1, NewArrSwiper2, NewArrSwiper3, NewArrSwiper4];
  var NewSlideTap = document.querySelectorAll(".NewSlideTap ul li");
  NewSlideTap.forEach(function (li, index) {
    li.addEventListener('click', function () {
      for (var i = 0; i < NewSlideTap.length; i++) {
        if (i === index) {
          NewArrSwiperALL[i].style.display = "block";
        } else {
          NewArrSwiperALL[i].style.display = "none";
        }
      }
    });
  });
  function NewArrivalSWP1() {
    var swiper = new Swiper(".NewArrival_Swiper1", {
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
      pagination: {
        el: ".NewArrival_Swiper1 .swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".NewArrival_Swiper1 .swiper-button-next",
        prevEl: ".NewArrival_Swiper1 .swiper-button-prev"
      }
    });
  }
  NewArrivalSWP1();
  function NewArrivalSWP2() {
    var swiper = new Swiper(".NewArrival_Swiper2", {
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
      pagination: {
        el: ".NewArrival_Swiper2 .swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".NewArrival_Swiper2 .swiper-button-next",
        prevEl: ".NewArrival_Swiper2 .swiper-button-prev"
      }
    });
  }
  NewArrivalSWP2();
  function NewArrivalSWP3() {
    var swiper = new Swiper(".NewArrival_Swiper3", {
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
      pagination: {
        el: ".NewArrival_Swiper3 .swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".NewArrival_Swiper3 .swiper-button-next",
        prevEl: ".NewArrival_Swiper3 .swiper-button-prev"
      }
    });
  }
  NewArrivalSWP3();
  function NewArrivalSWP4() {
    var swiper = new Swiper(".NewArrival_Swiper4", {
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
      pagination: {
        el: ".NewArrival_Swiper4 .swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".NewArrival_Swiper4 .swiper-button-next",
        prevEl: ".NewArrival_Swiper4 .swiper-button-prev"
      }
    });
  }
  NewArrivalSWP4();

  /* 각 스와이퍼의 슬라이드 마우스 오버/아웃 효과 */
  var NewArrivalSliderAll_1 = [document.querySelector('.NewArrival_Swiper1 .swiper-wrapper .slide1'), document.querySelector('.NewArrival_Swiper1 .swiper-wrapper .slide2'), document.querySelector('.NewArrival_Swiper1 .swiper-wrapper .slide3'), document.querySelector('.NewArrival_Swiper1 .swiper-wrapper .slide4'), document.querySelector('.NewArrival_Swiper1 .swiper-wrapper .slide5'), document.querySelector('.NewArrival_Swiper1 .swiper-wrapper .slide6')];
  var NewArrivalSliderAll_2 = [document.querySelector('.NewArrival_Swiper2 .swiper-wrapper .slide1'), document.querySelector('.NewArrival_Swiper2 .swiper-wrapper .slide2'), document.querySelector('.NewArrival_Swiper2 .swiper-wrapper .slide3'), document.querySelector('.NewArrival_Swiper2 .swiper-wrapper .slide4'), document.querySelector('.NewArrival_Swiper2 .swiper-wrapper .slide5'), document.querySelector('.NewArrival_Swiper2 .swiper-wrapper .slide6')];
  var NewArrivalSliderAll_3 = [document.querySelector('.NewArrival_Swiper3 .swiper-wrapper .slide1'), document.querySelector('.NewArrival_Swiper3 .swiper-wrapper .slide2'), document.querySelector('.NewArrival_Swiper3 .swiper-wrapper .slide3'), document.querySelector('.NewArrival_Swiper3 .swiper-wrapper .slide4'), document.querySelector('.NewArrival_Swiper3 .swiper-wrapper .slide5'), document.querySelector('.NewArrival_Swiper3 .swiper-wrapper .slide6')];
  var NewArrivalSliderAll_4 = [document.querySelector('.NewArrival_Swiper4 .swiper-wrapper .slide1'), document.querySelector('.NewArrival_Swiper4 .swiper-wrapper .slide2'), document.querySelector('.NewArrival_Swiper4 .swiper-wrapper .slide3'), document.querySelector('.NewArrival_Swiper4 .swiper-wrapper .slide4'), document.querySelector('.NewArrival_Swiper4 .swiper-wrapper .slide5'), document.querySelector('.NewArrival_Swiper4 .swiper-wrapper .slide6')];
  var OuterAll_1 = [document.querySelector('.NewArrival_Swiper1 .new_txt_outer1'), document.querySelector('.NewArrival_Swiper1 .new_txt_outer2'), document.querySelector('.NewArrival_Swiper1 .new_txt_outer3'), document.querySelector('.NewArrival_Swiper1 .new_txt_outer4'), document.querySelector('.NewArrival_Swiper1 .new_txt_outer5'), document.querySelector('.NewArrival_Swiper1 .new_txt_outer6')];
  var OuterAll_2 = [document.querySelector('.NewArrival_Swiper2 .new_txt_outer1'), document.querySelector('.NewArrival_Swiper2 .new_txt_outer2'), document.querySelector('.NewArrival_Swiper2 .new_txt_outer3'), document.querySelector('.NewArrival_Swiper2 .new_txt_outer4'), document.querySelector('.NewArrival_Swiper2 .new_txt_outer5'), document.querySelector('.NewArrival_Swiper2 .new_txt_outer6')];
  var OuterAll_3 = [document.querySelector('.NewArrival_Swiper3 .new_txt_outer1'), document.querySelector('.NewArrival_Swiper3 .new_txt_outer2'), document.querySelector('.NewArrival_Swiper3 .new_txt_outer3'), document.querySelector('.NewArrival_Swiper3 .new_txt_outer4'), document.querySelector('.NewArrival_Swiper3 .new_txt_outer5'), document.querySelector('.NewArrival_Swiper3 .new_txt_outer6')];
  var OuterAll_4 = [document.querySelector('.NewArrival_Swiper4 .new_txt_outer1'), document.querySelector('.NewArrival_Swiper4 .new_txt_outer2'), document.querySelector('.NewArrival_Swiper4 .new_txt_outer3'), document.querySelector('.NewArrival_Swiper4 .new_txt_outer4'), document.querySelector('.NewArrival_Swiper4 .new_txt_outer5'), document.querySelector('.NewArrival_Swiper4 .new_txt_outer6')];
  var newHoverOn = [0, 0, 0, 0, 0, 0];

  // 1번 스와이퍼 슬라이더
  NewArrivalSliderAll_1.forEach(function (slider, index) {
    slider.addEventListener('mouseover', function () {
      if (newHoverOn[index] === 0) {
        OuterAll_1[index].style.bottom = '0px';
        newHoverOn[index] = 1;
      }
    });
    slider.addEventListener('mouseout', function () {
      if (newHoverOn[index] === 1) {
        OuterAll_1[index].style.bottom = '-170px';
        newHoverOn[index] = 0;
      }
    });
  });

  // 2번 스와이퍼 슬라이더
  NewArrivalSliderAll_2.forEach(function (slider, index) {
    slider.addEventListener('mouseover', function () {
      if (newHoverOn[index] === 0) {
        OuterAll_2[index].style.bottom = '0px';
        newHoverOn[index] = 1;
      }
    });
    slider.addEventListener('mouseout', function () {
      if (newHoverOn[index] === 1) {
        OuterAll_2[index].style.bottom = '-170px';
        newHoverOn[index] = 0;
      }
    });
  });

  // 3번 스와이퍼 슬라이더
  NewArrivalSliderAll_3.forEach(function (slider, index) {
    slider.addEventListener('mouseover', function () {
      if (newHoverOn[index] === 0) {
        OuterAll_3[index].style.bottom = '0px';
        newHoverOn[index] = 1;
      }
    });
    slider.addEventListener('mouseout', function () {
      if (newHoverOn[index] === 1) {
        OuterAll_3[index].style.bottom = '-170px';
        newHoverOn[index] = 0;
      }
    });
  });

  // 4번 스와이퍼 슬라이더
  NewArrivalSliderAll_4.forEach(function (slider, index) {
    slider.addEventListener('mouseover', function () {
      if (newHoverOn[index] === 0) {
        OuterAll_4[index].style.bottom = '0px';
        newHoverOn[index] = 1;
      }
    });
    slider.addEventListener('mouseout', function () {
      if (newHoverOn[index] === 1) {
        OuterAll_4[index].style.bottom = '-170px';
        newHoverOn[index] = 0;
      }
    });
  });

  // ===========================================
  // ** Magazine Content Swiper  **
  // ===========================================

  function MagazineSWP() {
    var swiper = new Swiper(".Magazine_Swiper", {
      slidesPerView: 2.2,
      spaceBetween: 20,
      pagination: {
        el: ".Magazine_Swiper .swiper-pagination",
        clickable: true
      }
    });
  }
  MagazineSWP();
  var MagazineBlur1 = document.querySelector('.Magazine_blur1');
  var MagazineBlur2 = document.querySelector('.Magazine_blur2');
  var MagazineBlur3 = document.querySelector('.Magazine_blur3');
  var MagazineBlur4 = document.querySelector('.Magazine_blur4');
  var MagazineBlur5 = document.querySelector('.Magazine_blur5');
  var MagazineBlurAll = [MagazineBlur1, MagazineBlur2, MagazineBlur3, MagazineBlur4, MagazineBlur5];
  var MagazineTXTAll = [document.querySelector('.Magazine_blur1 .Magazine_txt'), document.querySelector('.Magazine_blur2 .Magazine_txt'), document.querySelector('.Magazine_blur3 .Magazine_txt'), document.querySelector('.Magazine_blur4 .Magazine_txt'), document.querySelector('.Magazine_blur5 .Magazine_txt')];
  var MagazineLabelAll = [document.querySelector('.Magazine_blur1 label'), document.querySelector('.Magazine_blur2 label'), document.querySelector('.Magazine_blur3 label'), document.querySelector('.Magazine_blur4 label'), document.querySelector('.Magazine_blur5 label')];
  MagazineHoverOn = 0;
  MagazineBlurAll.forEach(function (blur, index) {
    blur.addEventListener('mouseover', function () {
      if (MagazineHoverOn === 0) {
        blur.style.opacity = '1';
        MagazineTXTAll[index].style.top = '25vh';
        MagazineTXTAll[index].style.opacity = '1';
        MagazineLabelAll[index].style.bottom = '20vh';
        MagazineLabelAll[index].style.opacity = '1';
        MagazineHoverOn = 1;
      }
    });
    blur.addEventListener('mouseout', function () {
      if (MagazineHoverOn === 1) {
        blur.style.opacity = '0';
        MagazineTXTAll[index].style.top = '10vh';
        MagazineTXTAll[index].style.opacity = '0';
        MagazineLabelAll[index].style.bottom = '10vh';
        MagazineLabelAll[index].style.opacity = '0';
        MagazineHoverOn = 0;
      }
    });
  });

  // ===========================================
  // ** Recommend Content Swiper **
  // ===========================================

  function RecommendSWP() {
    var swiper = new Swiper(".Recommend_Swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".Recommend_Swiper .swiper-pagination",
        clickable: true
      }
    });
  }
  RecommendSWP();

  // ===========================================
  // ** Recommend Content  **
  // ===========================================

  var PlusHOVER = [document.querySelector(".recommend_plus1"), document.querySelector(".recommend_plus2"), document.querySelector(".recommend_plus3"), document.querySelector(".recommend_plus4"), document.querySelector(".recommend_plus5"), document.querySelector(".recommend_plus6"), document.querySelector(".recommend_plus7"), document.querySelector(".recommend_plus8"), document.querySelector(".recommend_plus9"), document.querySelector(".recommend_plus10"), document.querySelector(".recommend_plus11"), document.querySelector(".recommend_plus12"), document.querySelector(".recommend_plus13"), document.querySelector(".recommend_plus14"), document.querySelector(".recommend_plus15"), document.querySelector(".recommend_plus16"), document.querySelector(".recommend_plus17"), document.querySelector(".recommend_plus18"), document.querySelector(".recommend_plus19"), document.querySelector(".recommend_plus20"), document.querySelector(".recommend_plus21"), document.querySelector(".recommend_plus22"), document.querySelector(".recommend_plus23"), document.querySelector(".recommend_plus24"), document.querySelector(".recommend_plus25")];
  var PlusTextHOVER = [document.querySelector(".recommend_txt1"), document.querySelector(".recommend_txt2"), document.querySelector(".recommend_txt3"), document.querySelector(".recommend_txt4"), document.querySelector(".recommend_txt5"), document.querySelector(".recommend_txt6"), document.querySelector(".recommend_txt7"), document.querySelector(".recommend_txt8"), document.querySelector(".recommend_txt9"), document.querySelector(".recommend_txt10"), document.querySelector(".recommend_txt11"), document.querySelector(".recommend_txt12"), document.querySelector(".recommend_txt13"), document.querySelector(".recommend_txt14"), document.querySelector(".recommend_txt15"), document.querySelector(".recommend_txt16"), document.querySelector(".recommend_txt17"), document.querySelector(".recommend_txt18"), document.querySelector(".recommend_txt19"), document.querySelector(".recommend_txt20"), document.querySelector(".recommend_txt21"), document.querySelector(".recommend_txt22"), document.querySelector(".recommend_txt23"), document.querySelector(".recommend_txt24"), document.querySelector(".recommend_txt25")];
  var hoverOn = 0;

  // PlusHOVER.forEach((element, index) => {
  //   element.addEventListener('click', () => {
  //     if (hoverOn === 0) {
  //       PlusTextHOVER[index].style.display = 'block';
  //       hoverOn = 1
  //     }
  //   })
  // })
  // PlusTextHOVER.forEach((element, index) => {
  //   element.addEventListener('mouseleave', () => {
  //     // if (hoverOn === 1) {
  //       if (hoverOn === 1 && !PlusHOVER[index].matches(':hover')) {
  //       PlusTextHOVER[index].style.display = 'none';
  //       hoverOn = 0
  //     }
  //   })
  // })

  var OnPlusTextHOVER = false;
  var timeout;
  PlusHOVER.forEach(function (element, index) {
    element.addEventListener("click", function () {
      if (hoverOn === 0) {
        PlusTextHOVER[index].style.display = "block";
        hoverOn = 1;
      }
    });
    element.addEventListener("mouseleave", function () {
      timeout = setTimeout(function () {
        if (!OnPlusTextHOVER) {
          PlusTextHOVER[index].style.display = "none";
          hoverOn = 0;
        }
      }, 500);
    });
  });
  PlusTextHOVER.forEach(function (element, index) {
    element.addEventListener("mouseenter", function () {
      OnPlusTextHOVER = true;
      clearTimeout(timeout);
    });
    element.addEventListener("mouseleave", function () {
      OnPlusTextHOVER = false;
      PlusTextHOVER[index].style.display = "none";
      hoverOn = 0;
    });
  });
  var SNS_Arrow = ['<i class="fas fa-sort-up"></i>', '<i class="fas fa-sort-down"></i>'];
  function SnsSWP() {
    var swiper = new Swiper(".SnsSwiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".SnsSwiper .swiper-pagination",
        clickable: true,
        bulletClass: "SNS_custom_bullet",
        bulletActiveClass: "swiper-pagination-SNS-custom-bullet",
        renderBullet: function renderBullet(index, className) {
          return '<div class="' + className + '"><span>' + SNS_Arrow[index] + "</span></div>";
        }
      }
    });
  }
  SnsSWP();

  // ===========================================
  // ** Ranking Content Swiper **
  // ===========================================

  var custom_bullet1 = ["1. 테니스 라이프 카라원피스", "2. 테니스 라이프 카라 원피스", "3. 테니스 카라 원피스", "4. 테니스 라이프 니트 카라티셔츠", "5. 테니스 퍼포먼스 헨리넥 반팔티셔츠", "6. 베이직 리니어 반팔티"];
  var custom_bullet2 = ["1. 레이플라이드 v2 (109)", "2. 레이플라이드 v2 (896)", "3. 레이플라이드 v2 (920)", "4. 레이플라이드 (325)", "5. 레이플라이드 (161)", "6. 레이플라이드 (001)"];
  var custom_bullet3 = ["1. Fila tennis 블럭 자켓", "2. Fila tennis 블럭 하프넥 아노락", "3. Sportslife 아치로고 맨투맨", "4. Sportslife 긴팔 티셔츠", "5. Fila essential 반팔티셔츠", "6. Sportslife 아치로고 반팔티셔츠"];
  var custom_bullet4 = ["1. 타르가 클래식 (100)", "2. 타르가 클래식 (320)", "3. 타르가 클럽 LT (112)", "4. 타르가 클럽 LT (142)", "5. 타르가 88/22", "6. 타르가 클럽 (154)"];
  function RankingSWP2() {
    var swiper = new Swiper(".swiper_Ranking2", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      rewind: true,
      // loop: true,
      // loopAdditionalSlides: 2,
      autoplay: {
        delay: 3000
      },
      speed: 500,
      pagination: {
        el: ".swiper_Ranking2 .swiper-pagination",
        clickable: true,
        bulletClass: "custom_bullet2",
        bulletActiveClass: "swiper-pagination-custom-bullet2",
        renderBullet: function renderBullet(index, className) {
          return '<div class="' + className + '"><span>' + custom_bullet2[index] + '</span></div>';
        }
      },
      navigation: {
        nextEl: ".swiper_Ranking2 .swiper-button-next",
        prevEl: ".swiper_Ranking2 .swiper-button-prev"
      }
    });
  }
  RankingSWP2();
  function RankingSWP3() {
    var swiper = new Swiper(".swiper_Ranking3", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      rewind: true,
      // loop: true,
      // loopAdditionalSlides: 2,
      autoplay: {
        delay: 3000
      },
      speed: 500,
      pagination: {
        el: ".swiper_Ranking3 .swiper-pagination",
        clickable: true,
        bulletClass: "custom_bullet3",
        bulletActiveClass: "swiper-pagination-custom-bullet3",
        renderBullet: function renderBullet(index, className) {
          return '<div class="' + className + '"><span>' + custom_bullet3[index] + '</span></div>';
        }
      },
      navigation: {
        nextEl: ".swiper_Ranking3 .swiper-button-next",
        prevEl: ".swiper_Ranking3 .swiper-button-prev"
      }
    });
  }
  RankingSWP3();
  function RankingSWP4() {
    var swiper = new Swiper(".swiper_Ranking4", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      rewind: true,
      // loop: true,
      // loopAdditionalSlides: 2,
      autoplay: {
        delay: 3000
      },
      speed: 500,
      pagination: {
        el: ".swiper_Ranking4 .swiper-pagination",
        clickable: true,
        bulletClass: "custom_bullet4",
        bulletActiveClass: "swiper-pagination-custom-bullet4",
        renderBullet: function renderBullet(index, className) {
          return '<div class="' + className + '"><span>' + custom_bullet4[index] + '</span></div>';
        }
      },
      navigation: {
        nextEl: ".swiper_Ranking4 .swiper-button-next",
        prevEl: ".swiper_Ranking4 .swiper-button-prev"
      }
    });
  }
  RankingSWP4();

  // ==================================

  /* 
    const text5_1 = [
      "1. 휠라 스피드서브 T9 화이트 라인",
      "2. 휠라 스피드서브 T9",
      "3. 휠라 스피드서브 T9 US",
      "4. 휠라 엑실러스 2 T9 RG",
      "5. 테니스 라이프 컴포트핏 니트 카라티셔츠",
      "6. 테니스 라이프 티핑 크롭 니트 카라티셔츠",
    ]
  
    const text6_1 = [
      "1. 휠라 RGB 플렉스 2.0 (100)",
      "2. 휠라 RGB 플렉스 2.0 (923)",
      "3. 휠라 RGB 플렉스 2.0 (155)",
      "4. 휠라 RGB 피어 2.0 (001)",
      "5. 휠라 RGB 피어 2.0 (920)",
      "6. 휠라 RGB 피어 2.0 (100)",
    ]
   */

  var Swiper1 = document.querySelector('.swiper_Ranking1');
  var Swiper2 = document.querySelector('.swiper_Ranking2');
  var Swiper3 = document.querySelector('.swiper_Ranking3');
  var Swiper4 = document.querySelector('.swiper_Ranking4');
  var SwiperAll = [Swiper1, Swiper2, Swiper3, Swiper4];
  var RankingTapLI = document.querySelectorAll(".Ranking_Tap li");
  RankingTapLI.forEach(function (li, index) {
    li.addEventListener('click', function () {
      for (var i = 0; i < RankingTapLI.length; i++) {
        if (i === index) {
          SwiperAll[i].style.display = "block";
        } else {
          SwiperAll[i].style.display = "none";
        }
      }
    });
  });
  function RankingSWP1() {
    var swiper = new Swiper(".swiper_Ranking1", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      // loop: true,
      // loopAdditionalSlides: 2,
      rewind: true,
      autoplay: {
        delay: 3000
      },
      speed: 500,
      pagination: {
        el: ".swiper_Ranking1 .swiper-pagination",
        clickable: true,
        bulletClass: "custom_bullet1",
        bulletActiveClass: "swiper-pagination-custom-bullet1",
        renderBullet: function renderBullet(index, className) {
          return '<div class="' + className + '"><span>' + custom_bullet1[index] + '</span></div>';
        }
      },
      navigation: {
        nextEl: ".swiper_Ranking1 .swiper-button-next",
        prevEl: ".swiper_Ranking1 .swiper-button-prev"
      }
    });
  }
  RankingSWP1();

  // =================
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64492" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","JS/main.js"], null)
//# sourceMappingURL=/main.56d031aa.js.map