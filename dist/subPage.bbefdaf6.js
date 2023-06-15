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
})({"JS/Date_sub.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var ItemList = [/* filter */

/* 전체 */
// 바람막이, 아노락 : wind, anorak
// 후드티, 맨투맨 : hood, manTOman
// 트레이닝세트 : trainingSet
// 니트, 스웨터 : knit, sweater
// 티셔츠 : T_shirt
// 팬츠 : pants
// 다운, 플리스 : down, fleece
// 온라인단독 : Online

// ------------------------------

/* 스포츠 */
// 테니스 : tennis
// 러닝 : running
// 라이프스타일 : lifestyle
// 트레이닝 : training
// 골프 : Golf

// ------------------------------

/* 색상 */
// 빨강 : red
// 파랑 : blue
// 초록 : green
// 노랑 : yellow

// ------------------------------
/* Size */
// 75_Size : 75S
// 80_Size : 80S
// 82_Size : 82S
// 85_Size : 85S
// 86_Size : 86S
// 90_Size : 90S
// 94_Size : 94S
// 95_Size : 95S
// 100_Size : 100S
// 105_Size : 105S
// 110_Size : 110S
// 115_Size : 115S

// ------------------------------
/* Price */
// 39,000원 이하 : 39P
// 39,000원 ~ 49,000원 : 3949P
// 49,000원 ~ 59,000원 : 4959P
// 59,000원 ~ 79,000원 : 5979P
// 79,000원 초과 : 79P

// ------------------------------
/* Gender */
// 남성 : men
// 여성 : women
// 공용 : genderAll

{
  id: "item_arr_img1",
  category: ["공용", "라이프스타일"],
  itemName: "컴포트핏 인터내셔널 우븐 후드티",
  price: "119,000원",
  src: "./images/Item_Arr/1.jpeg",
  color: ["green"],
  cateAll: ["wind", "hood"],
  sports: ["lifestyle"],
  size: ["95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img2",
  category: ["공용"],
  itemName: "컴포트핏 인터내셔널 반팔 카라티",
  price: "69,000원",
  src: "./images/Item_Arr/2.jpeg",
  color: ["beige"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img3",
  category: ["공용"],
  itemName: "세미 배기슬림숏츠",
  price: "41,300원",
  beforePrice: "59,000원",
  sale: "30%",
  src: "./images/Item_Arr/3.jpeg",
  color: ["black"],
  cateAll: ["pants"],
  sports: ["lifestyle"],
  size: ["85S", "90S", "95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img4",
  category: ["공용"],
  itemName: "세미 배기슬림숏츠",
  price: "41,300원",
  beforePrice: "59,000원",
  sale: "30%",
  src: "./images/Item_Arr/4.jpeg",
  color: ["black"],
  cateAll: ["pants"],
  sports: ["lifestyle"],
  size: ["85S", "90S", "95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img5",
  category: ["공용"],
  itemName: "썸머 배색 러닝 바람막이 자켓",
  price: "97,300원",
  beforePrice: "139,000원",
  sale: "30%",
  src: "./images/Item_Arr/5.jpeg",
  color: ["black", "white"],
  cateAll: ["wind", "trainingSet"],
  sports: ["training"],
  size: ["90S", "95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img6",
  category: ["공용"],
  itemName: '스타터 썸머 경량 러닝 바람막이 자켓',
  price: "69,300원",
  beforePrice: "99,000원",
  sale: "30%",
  src: "./images/Item_Arr/6.jpeg",
  color: ["black"],
  cateAll: ["wind", "trainingSet"],
  sports: ["training"],
  size: ["90S", "95S", "100S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img7",
  category: ["공용"],
  itemName: "레트로 컬러 배색자켓",
  price: "97,300원",
  beforePrice: "139,000원",
  sale: "30%",
  src: "./images/Item_Arr/7.jpeg",
  color: ["green"],
  cateAll: ["wind", "trainingSet"],
  sports: ["training"],
  size: ["95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img8",
  category: ["공용", "컴포트핏", "라이프스타일"],
  itemName: "인터내셔널 반팔 카라티",
  price: "69,000원",
  src: "./images/Item_Arr/8.jpeg",
  color: ["blue"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img9",
  category: ["공용", "컴포트핏", "라이프스타일"],
  itemName: "스포츠 인터내셔널 로고 반팔티",
  price: "49,000원",
  src: "./images/Item_Arr/9.jpeg",
  color: ["white"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img10",
  category: ["공용", "컴포트핏", "라이프스타일"],
  itemName: "스포츠 인터내셔널 로고 반팔티",
  price: "49,000원",
  src: "./images/Item_Arr/10.jpeg",
  color: ["green"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img11",
  category: ["공용", "컴포트핏", "라이프스타일"],
  itemName: "스포츠 인터내셔널 로고 반팔티",
  price: "49,000원",
  src: "./images/Item_Arr/11.jpeg",
  color: ["red"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img12",
  category: ["공용", "컴포트핏", "라이프스타일"],
  itemName: "인터내셔널 그래픽 반팔티",
  price: "49,000원",
  src: "./images/Item_Arr/12.jpeg",
  color: ["white"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["90S", "95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img13",
  category: ["공용", "오버핏", "라이프스타일"],
  itemName: "인터내셔널 그래픽 반팔티",
  price: "49,000원",
  src: "./images/Item_Arr/13.jpeg",
  color: ["yellow"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["90S", "95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img14",
  category: ["공용", "오버핏", "라이프스타일"],
  itemName: "인터내셔널 그래픽 반팔티",
  price: "49,000원",
  src: "./images/Item_Arr/14.jpeg",
  color: ["black"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["90S", "95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img15",
  category: ["남성", "라이프스타일"],
  itemName: "핫써머 Joyful 나시티",
  price: "45,000원",
  src: "./images/Item_Arr/15.jpeg",
  color: ["black"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["95S", "100S", "105S"],
  gender: ["men"]
}, {
  id: "item_arr_img16",
  category: ["남성", "컴포트핏", "라이프스타일"],
  itemName: "핫써머 Fila festa 나시티",
  price: "39,000원",
  src: "./images/Item_Arr/16.jpeg",
  color: ["blue"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["95S", "100S", "105S"],
  gender: ["men"]
}, {
  id: "item_arr_img17",
  category: ["공용", "레귤러핏", "라이프스타일"],
  itemName: "페스타 그래픽 티셔츠",
  price: "49,000원",
  src: "./images/Item_Arr/17.jpeg",
  color: ["red"],
  cateAll: ["T_shirt", "Online"],
  sports: ["lifestyle"],
  size: ["90S", "95S", "100S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img18",
  category: ["공용", "레귤러핏", "라이프스타일"],
  itemName: "페스타 그래픽 티셔츠",
  price: "49,000원",
  src: "./images/Item_Arr/18.jpeg",
  color: ["green"],
  cateAll: ["T_shirt", "Online"],
  sports: ["lifestyle"],
  size: ["90S", "95S", "100S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img19",
  category: ["공용", "컴포트핏", "라이프스타일"],
  itemName: "인터내셔널 스몰 로고 반팔티",
  price: "39,000원",
  src: "./images/Item_Arr/19.jpeg",
  color: ["Gray"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["90S", "95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img20",
  category: ["공용", "라이프스타일"],
  itemName: "컴포트핏 인터내셔널 6부 반바지",
  price: "59,000원",
  src: "./images/Item_Arr/20.jpeg",
  color: ["blue"],
  cateAll: ["pants"],
  sports: ["lifestyle"],
  size: ["80S", "85S", "90S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img21",
  category: ["공용", "라이프스타일"],
  itemName: "컴포트핏 인터내셔널 6부 반바지",
  price: "59,000원",
  src: "./images/Item_Arr/21.jpeg",
  color: ["beige"],
  cateAll: ["pants"],
  sports: ["lifestyle"],
  size: ["80S", "85S", "90S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img22",
  category: ["공용", "컴포트핏", "라이프스타일"],
  itemName: "레터링 그래픽 티셔츠",
  price: "49,000원",
  src: "./images/Item_Arr/22.jpeg",
  color: ["Gray"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["90S", "95S", "100S", "105S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img23",
  category: ["공용", "컴포트핏", "라이프스타일"],
  itemName: "레코드 그래픽 티셔츠",
  price: "59,000원",
  src: "./images/Item_Arr/23.jpeg",
  color: ["white"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["90S", "95S", "100S", "105S", "110S"],
  gender: ["unisex"]
}, {
  id: "item_arr_img24",
  category: ["공용", "컴포트핏", "라이프스타일"],
  itemName: "레코드 그래픽 티셔츠",
  price: "59,000원",
  src: "./images/Item_Arr/24.jpeg",
  color: ["black"],
  cateAll: ["T_shirt"],
  sports: ["lifestyle"],
  size: ["90S", "95S", "100S", "105S", "110S"],
  gender: ["unisex"]
}];
var _default = ItemList;
exports.default = _default;
},{}],"JS/subPage.js":[function(require,module,exports) {
"use strict";

var _Date_sub = _interopRequireDefault(require("./Date_sub.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
console.log(_Date_sub.default);
document.addEventListener("DOMContentLoaded", function () {
  /* HEADER 메뉴 영역 HOVER 시 MENU FULL DWON --------- */
  // 일반 HEADER 영역
  var Header = document.querySelector("#header");
  var HeaderOuter = document.querySelector("#header .header_outer");
  var headerBox = document.querySelector(".header_box");

  // HEADER MENU
  var MainMenu = document.querySelector(".mainMenu");
  var mainMenuUL = document.querySelector(".mainMenu_ul");
  var mainMenuLI = document.querySelector(".mainMenu_ul li");
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
  var mainMenuA = document.querySelectorAll(".mainMenu_ul li a");
  var FixLogo = document.querySelector(".logo img");
  var FixGnbMap = document.querySelector(".gnb_Menu_map img");
  var FixGnbSearch = document.querySelector(".gnb_Menu_search img");
  var FixGnbMy = document.querySelector(".gnb_Menu_my img");
  var FixGnbCart = document.querySelector(".gnb_Menu_cart img");
  document.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      HeaderOuter.classList.add("hd_fix");
      HeaderOuter.style.top = "-25px";
      HeaderOuter.style.height = "80px";
      mainMenuA.forEach(function (index, element) {
        mainMenuA[element].style.color = "#fff";
      });
      FixGnbMap.setAttribute("src", "./images/GNB_map1.svg");
      FixGnbSearch.setAttribute("src", "./images/GNB_search1.svg");
      FixGnbMy.setAttribute("src", "./images/GNB_my1.svg");
      FixGnbCart.setAttribute("src", "./images/GNB_cart1.svg");
      FixLogo.setAttribute("src", "./images/FILA LOGO_1.svg");
      document.querySelector(".mainMenu_ul li:nth-child(4)").style.borderRight = "1px solid #fff";
    } else {
      HeaderOuter.classList.remove("hd_fix");
      mainMenuA.forEach(function (index, element) {
        mainMenuA[element].style.color = "#000";
      });
      FixGnbMap.setAttribute("src", "./images/GNB_map2.svg");
      FixGnbSearch.setAttribute("src", "./images/GNB_search2.svg");
      FixGnbMy.setAttribute("src", "./images/GNB_my2.svg");
      FixGnbCart.setAttribute("src", "./images/GNB_cart2.svg");
      FixLogo.setAttribute("src", "./images/FILA LOGO_2.svg");
      document.querySelector(".mainMenu_ul li:nth-child(4)").style.borderRight = "1px solid #000";
    }
  });

  /* ------------------------------------------------- */

  //필터 메뉴 풀다운

  var FilterBlock1 = document.querySelector(".filterSide_block1");
  var FilterBlock2 = document.querySelector(".filterSide_block2");
  var filterMenuDown = document.querySelector(".filter_menuDown");
  FilterBlock1.addEventListener("click", function () {
    filterMenuDown.style.height = "520px";
    filterMenuDown.style.transition = "0.5s";
    filterMenuDown.style.opacity = "1";
    FilterBlock1.style.display = "none";
    FilterBlock2.style.display = "block";
  });
  FilterBlock2.addEventListener("click", function () {
    filterMenuDown.style.height = "0px";
    filterMenuDown.style.opacity = "0";
    FilterBlock1.style.display = "block";
    FilterBlock2.style.display = "none";
  });

  // 필터 [전체] Click시 색상 고정

  var FilterAllLI = document.querySelectorAll(".Filter_ALL ul li");
  var prevElement = null; // 이전에 선택된 요소를 추적하는 변수

  FilterAllLI.forEach(function (element, index) {
    var ColorON = 0; // ColorON 변수 선언 및 초기값 설정

    element.addEventListener("click", function () {
      if (prevElement) {
        // 이전에 선택된 요소가 있으면 스타일을 변경
        prevElement.style.color = "#000";
        prevElement.style.fontWeight = "unset";
        ColorON = 0;
      }
      if (ColorON == 0) {
        element.style.color = "#002053";
        element.style.fontWeight = "bold";
        ColorON = 1; // ColorON 변수의 값을 변경
      } else if (ColorON == 1) {
        element.style.color = "#000";
        element.style.fontWeight = "unset";
        ColorON = 0; // ColorON 변수의 값을 변경
      }

      prevElement = element; // 이전에 선택된 요소를 업데이트
    });
  });

  // 필터 [스포츠] Click시 색상 고정
  var FilterSportsInput = document.querySelectorAll(".Filter_Sports ul li input");
  var FilterSportsLabel = document.querySelectorAll(".Filter_Sports ul li Label");
  FilterSportsInput.forEach(function (input) {
    input.addEventListener("click", function () {
      if (input.checked) {
        FilterSportsLabel.forEach(function (element, index) {
          element.style.color = "#002053";
          element.style.fontWeight = "bold";
        });
      } else {
        FilterSportsLabel.forEach(function (element, index) {
          element.style.color = "#000";
          element.style.fontWeight = "unset";
        });
      }
    });
  });

  /* ------------------------------------------------- */

  // 정렬 기능 이미지 변경
  var Array2 = document.querySelector(".two_array img");
  var Array4 = document.querySelector(".four_array img");
  var itemArr = [];
  for (var i = 1; i <= 24; i++) {
    itemArr.push(document.querySelector(".item_Array_".concat(i)));
  }
  var labelArr = [];
  for (var _i = 1; _i <= 24; _i++) {
    labelArr.push(document.querySelector(".btm_btn_".concat(_i, " label")));
  }
  var btmTxt = document.querySelector(".btm_txt");
  var on = 1;
  Array2.addEventListener("click", function () {
    if (on == 1) {
      Array2.setAttribute("src", "./images/two_button2.png");
      Array4.setAttribute("src", "./images/four_button1.png");
      itemArr.forEach(function (element) {
        element.style.width = "460px";
        element.style.height = "580px";
      });
      labelArr.forEach(function (element) {
        element.style.width = "125px";
      });
      on = 0;
    }
  });
  Array4.addEventListener("click", function () {
    if (on == 0) {
      Array2.setAttribute("src", "./images/two_button1.png");
      Array4.setAttribute("src", "./images/four_button2.png");
      itemArr.forEach(function (element) {
        element.style.width = "340px";
        element.style.height = "460px";
        btmTxt.style.height = "120px";
      });
      labelArr.forEach(function (element) {
        element.style.width = "90px";
      });
      on = 1;
    }
  });

  /* Item에 이미지 넣기 */
  var ItemArray = [document.querySelector(".item_Array_1"), document.querySelector(".item_Array_2"), document.querySelector(".item_Array_3"), document.querySelector(".item_Array_4"), document.querySelector(".item_Array_5"), document.querySelector(".item_Array_6"), document.querySelector(".item_Array_7"), document.querySelector(".item_Array_8"), document.querySelector(".item_Array_9"), document.querySelector(".item_Array_10"), document.querySelector(".item_Array_11"), document.querySelector(".item_Array_12"), document.querySelector(".item_Array_13"), document.querySelector(".item_Array_14"), document.querySelector(".item_Array_15"), document.querySelector(".item_Array_16"), document.querySelector(".item_Array_17"), document.querySelector(".item_Array_18"), document.querySelector(".item_Array_19"), document.querySelector(".item_Array_20"), document.querySelector(".item_Array_21"), document.querySelector(".item_Array_22"), document.querySelector(".item_Array_23"), document.querySelector(".item_Array_24")];
  ItemArray.forEach(function (Element, index) {
    var ItemIMG = document.createElement("img");
    var ItemImgA = document.createElement("a");
    ItemImgA.setAttribute("href", "#!");
    ItemIMG.setAttribute("src", _Date_sub.default[index].src);
    Element.appendChild(ItemImgA);
    ItemImgA.appendChild(ItemIMG);
  });
  var ItemImgAChange = document.querySelector(".item_Array_1 a");
  ItemImgAChange.setAttribute("href", "./detailPage.html");

  /* Item 카테고리 넣기 */

  var btmTxtArr = [];
  for (var _i2 = 1; _i2 <= 24; _i2++) {
    btmTxtArr.push(document.querySelector(".btm_txt_".concat(_i2)));
  }
  btmTxtArr.forEach(function (element, index) {
    var p = document.createElement("p");
    var h3 = document.createElement("h3");
    var h4 = document.createElement("h4");
    p.textContent = _Date_sub.default[index].category.join(' ');
    h3.textContent = _Date_sub.default[index].itemName;
    h4.textContent = _Date_sub.default[index].price;
    element.appendChild(p);
    element.appendChild(h3);
    element.appendChild(h4);
  });

  // ================================================================
  // ============================ Filter ============================
  // ================================================================

  var noFilter = document.querySelector('.noFilter');
  var filterReset = document.getElementById('filterReset');
  var FilterAllarr = document.getElementById('Filter_ALL_1');
  var Filter_All1 = document.getElementById('Filter_ALL_2');
  var Filter_All2 = document.getElementById('Filter_ALL_3');
  var Filter_All3 = document.getElementById('Filter_ALL_4');
  var Filter_All4 = document.getElementById('Filter_ALL_5');
  var Filter_All5 = document.getElementById('Filter_ALL_6');
  var Filter_All6 = document.getElementById('Filter_ALL_7');
  var Filter_All7 = document.getElementById('Filter_ALL_8');
  var Filter_All8 = document.getElementById('Filter_ALL_9');

  // ====== 필터 전체 버튼 =======
  FilterAllarr.addEventListener('click', function () {
    sportsBtn.forEach(function (checkbox) {
      checkbox.element.checked = false;
    });
    colorBtn.forEach(function (checkbox) {
      checkbox.element.checked = false;
    });
    sizeBtn.forEach(function (checkbox) {
      checkbox.element.checked = false;
    });
    genderBtn.forEach(function (checkbox) {
      checkbox.element.checked = false;
    });
    priceBtn.forEach(function (checkbox) {
      checkbox.element.checked = false;
    });
    SizeFt.forEach(function (back) {
      back.element.style.backgroundColor = '#fff';
      back.element.style.color = '#000';
      back.element.style.border = '1px solid #ccc';
      back.element.style.boxSizing = 'border-Box';
    });
    ColorFt.forEach(function (border) {
      border.element.style.border = '3px solid #fff';
      border.element.style.boxSizing = 'border-Box';
    });
    _Date_sub.default.forEach(function (item, index) {
      var itemElement = document.querySelector(".item_Array_".concat(index + 1));
      itemElement.style.display = 'block';
    });
  });

  // ======== 초기화 버튼 ========
  filterReset.addEventListener('click', function () {
    sportsBtn.forEach(function (checkbox) {
      checkbox.element.checked = false;
    });
    colorBtn.forEach(function (checkbox) {
      checkbox.element.checked = false;
    });
    sizeBtn.forEach(function (checkbox) {
      checkbox.element.checked = false;
    });
    genderBtn.forEach(function (checkbox) {
      checkbox.element.checked = false;
    });
    priceBtn.forEach(function (checkbox) {
      checkbox.element.checked = false;
    });
    SizeFt.forEach(function (back) {
      back.element.style.backgroundColor = '#fff';
      back.element.style.color = '#000';
      back.element.style.border = '1px solid #ccc';
      back.element.style.boxSizing = 'border-Box';
    });
    ColorFt.forEach(function (border) {
      border.element.style.border = '3px solid #fff';
      border.element.style.boxSizing = 'border-Box';
    });
    _Date_sub.default.forEach(function (item, index) {
      var itemElement = document.querySelector(".item_Array_".concat(index + 1));
      itemElement.style.display = 'block';
    });
  });

  // ======== 첫번째 대분류 카테고리 필터 ========
  Filter_All1.addEventListener('click', function () {
    _Date_sub.default.forEach(function (item1, index) {
      var itemElement = document.querySelector(".item_Array_".concat(index + 1));
      if (item1.cateAll.includes('wind')) {
        itemElement.style.display = 'block';
      } else {
        itemElement.style.display = 'none';
      }
    });
  });
  function filterItems(filterElement, filterValues) {
    filterElement.addEventListener('click', function () {
      var result = false;
      _Date_sub.default.forEach(function (item, index) {
        var itemElement = document.querySelector(".item_Array_".concat(index + 1));
        if (filterValues.some(function (value) {
          return item.cateAll.includes(value);
        })) {
          itemElement.style.display = 'block';
          result = true;
        } else {
          itemElement.style.display = 'none';
        }
      });
      if (!result) {
        noFilter.style.display = 'block';
      } else {
        noFilter.style.display = 'none';
      }
    });
  }
  filterItems(Filter_All1, ['wind']);
  filterItems(Filter_All2, ['hood', 'manTOman']);
  filterItems(Filter_All3, ['trainingSet']);
  filterItems(Filter_All4, ['knit', 'sweater']);
  filterItems(Filter_All5, ['T_shirt']);
  filterItems(Filter_All6, ['pants']);
  filterItems(Filter_All7, ['down', 'fleece']);
  filterItems(Filter_All8, ['Online']);

  // ======== 스포츠 카테고리 필터 ========
  var Filter_Sports1 = document.getElementById('Filter_Sports_btn1');
  var Filter_Sports2 = document.getElementById('Filter_Sports_btn2');
  var Filter_Sports3 = document.getElementById('Filter_Sports_btn3');
  var Filter_Sports4 = document.getElementById('Filter_Sports_btn4');
  var Filter_Sports5 = document.getElementById('Filter_Sports_btn5');
  var sportsBtn = [{
    element: Filter_Sports1,
    value: 'tennis'
  }, {
    element: Filter_Sports2,
    value: 'running'
  }, {
    element: Filter_Sports3,
    value: 'lifestyle'
  }, {
    element: Filter_Sports4,
    value: 'training'
  }, {
    element: Filter_Sports5,
    value: 'golf'
  }];
  function filterSports() {
    var checkedValues = sportsBtn.filter(function (checkbox) {
      return checkbox.element.checked;
    }).map(function (checkbox) {
      return checkbox.value;
    });
    var result = false;
    _Date_sub.default.forEach(function (item, index) {
      var itemElement = document.querySelector(".item_Array_".concat(index + 1));
      if (checkedValues.length === 0 || checkedValues.some(function (value) {
        return item.sports.includes(value);
      })) {
        itemElement.style.display = 'block';
        result = true;
      } else {
        itemElement.style.display = 'none';
      }
    });
    if (!result) {
      noFilter.style.display = 'block';
    } else {
      noFilter.style.display = 'none';
    }
  }
  sportsBtn.forEach(function (checkbox) {
    checkbox.element.addEventListener('change', filterSports);
  });

  // ======== 색상 카테고리 필터 ========
  var Filter_Color1 = document.getElementById('Filter_Color1');
  var Filter_Color2 = document.getElementById('Filter_Color2');
  var Filter_Color3 = document.getElementById('Filter_Color3');
  var Filter_Color4 = document.getElementById('Filter_Color4');
  var colorBtn = [{
    element: Filter_Color1,
    value: 'red'
  }, {
    element: Filter_Color2,
    value: 'blue'
  }, {
    element: Filter_Color3,
    value: 'green'
  }, {
    element: Filter_Color4,
    value: 'yellow'
  }];
  function filterColors() {
    var checkedValues = colorBtn.filter(function (checkbox) {
      return checkbox.element.checked;
    }).map(function (checkbox) {
      return checkbox.value;
    });
    var result = false;
    _Date_sub.default.forEach(function (item, index) {
      var itemElement = document.querySelector(".item_Array_".concat(index + 1));
      if (checkedValues.length === 0 || checkedValues.some(function (value) {
        return item.color.includes(value);
      })) {
        itemElement.style.display = 'block';
        result = true;
      } else {
        itemElement.style.display = 'none';
      }
    });
    if (!result) {
      noFilter.style.display = 'block';
    } else {
      noFilter.style.display = 'none';
    }
  }
  colorBtn.forEach(function (checkbox) {
    checkbox.element.addEventListener('change', filterColors);
  });

  // ======== 컬러 카테고리 필터 선택시 border 효과 ========
  var ColorFt = [{
    element: document.querySelector('label[for="Filter_Color1"]'),
    checkbox: document.getElementById('Filter_Color1')
  }, {
    element: document.querySelector('label[for="Filter_Color2"]'),
    checkbox: document.getElementById('Filter_Color2')
  }, {
    element: document.querySelector('label[for="Filter_Color3"]'),
    checkbox: document.getElementById('Filter_Color3')
  }, {
    element: document.querySelector('label[for="Filter_Color4"]'),
    checkbox: document.getElementById('Filter_Color4')
  }];
  ColorFt.forEach(function (border) {
    border.checkbox.addEventListener('change', function () {
      if (border.checkbox.checked) {
        border.element.style.border = '3px solid #000';
        border.element.style.boxSizing = 'border-Box';
      } else {
        border.element.style.border = '3px solid #fff';
        border.element.style.boxSizing = 'border-Box';
      }
    });
  });

  // ======== 사이즈 카테고리 필터 ========
  var Filter_Size1 = document.getElementById('Filter_Size1');
  var Filter_Size2 = document.getElementById('Filter_Size2');
  var Filter_Size3 = document.getElementById('Filter_Size3');
  var Filter_Size4 = document.getElementById('Filter_Size4');
  var Filter_Size5 = document.getElementById('Filter_Size5');
  var Filter_Size6 = document.getElementById('Filter_Size6');
  var Filter_Size7 = document.getElementById('Filter_Size7');
  var Filter_Size8 = document.getElementById('Filter_Size8');
  var Filter_Size9 = document.getElementById('Filter_Size9');
  var sizeBtn = [{
    element: Filter_Size1,
    value: '75S'
  }, {
    element: Filter_Size2,
    value: '80S'
  }, {
    element: Filter_Size3,
    value: '85S'
  }, {
    element: Filter_Size4,
    value: '90S'
  }, {
    element: Filter_Size5,
    value: '95S'
  }, {
    element: Filter_Size6,
    value: '100S'
  }, {
    element: Filter_Size7,
    value: '105S'
  }, {
    element: Filter_Size8,
    value: '110S'
  }, {
    element: Filter_Size9,
    value: '115S'
  }];
  function filterSize() {
    var checkedValues = sizeBtn.filter(function (checkbox) {
      return checkbox.element.checked;
    }).map(function (checkbox) {
      return checkbox.value;
    });
    var result = false;
    _Date_sub.default.forEach(function (item, index) {
      var itemElement = document.querySelector(".item_Array_".concat(index + 1));
      if (checkedValues.length === 0 || checkedValues.some(function (value) {
        return item.size.includes(value);
      })) {
        itemElement.style.display = 'block';
        result = true;
      } else {
        itemElement.style.display = 'none';
      }
    });
    if (!result) {
      noFilter.style.display = 'block';
    } else {
      noFilter.style.display = 'none';
    }
  }
  sizeBtn.forEach(function (checkbox) {
    checkbox.element.addEventListener('change', filterSize);
  });

  // ======== 컬러 카테고리 필터 선택시 border 효과 ========
  var SizeFt = [{
    element: document.querySelector('label[for="Filter_Size1"]'),
    checkbox: document.getElementById('Filter_Size1')
  }, {
    element: document.querySelector('label[for="Filter_Size2"]'),
    checkbox: document.getElementById('Filter_Size2')
  }, {
    element: document.querySelector('label[for="Filter_Size3"]'),
    checkbox: document.getElementById('Filter_Size3')
  }, {
    element: document.querySelector('label[for="Filter_Size4"]'),
    checkbox: document.getElementById('Filter_Size4')
  }, {
    element: document.querySelector('label[for="Filter_Size5"]'),
    checkbox: document.getElementById('Filter_Size5')
  }, {
    element: document.querySelector('label[for="Filter_Size6"]'),
    checkbox: document.getElementById('Filter_Size6')
  }, {
    element: document.querySelector('label[for="Filter_Size7"]'),
    checkbox: document.getElementById('Filter_Size7')
  }, {
    element: document.querySelector('label[for="Filter_Size8"]'),
    checkbox: document.getElementById('Filter_Size8')
  }, {
    element: document.querySelector('label[for="Filter_Size9"]'),
    checkbox: document.getElementById('Filter_Size9')
  }];
  SizeFt.forEach(function (back) {
    back.checkbox.addEventListener('change', function () {
      if (back.checkbox.checked) {
        back.element.style.backgroundColor = '#002053';
        back.element.style.color = '#fff';
        back.element.style.border = '1px solid #002053';
        back.element.style.boxSizing = 'border-Box';
      } else {
        back.element.style.backgroundColor = '#fff';
        back.element.style.color = '#000';
        back.element.style.border = '1px solid #ccc';
        back.element.style.boxSizing = 'border-Box';
      }
    });
  });

  // ======== 가격 카테고리 필터 ========
  var Filter_Price1 = document.getElementById('Price39');
  var Filter_Price2 = document.getElementById('Price39n49');
  var Filter_Price3 = document.getElementById('Price49n59');
  var Filter_Price4 = document.getElementById('Price59n79');
  var Filter_Price5 = document.getElementById('Price79');
  var priceBtn = [{
    element: Filter_Price1,
    min: 0,
    max: 39000
  }, {
    element: Filter_Price2,
    min: 39000,
    max: 49000
  }, {
    element: Filter_Price3,
    min: 49000,
    max: 59000
  }, {
    element: Filter_Price4,
    min: 59000,
    max: 79000
  }, {
    element: Filter_Price5,
    min: 79000,
    max: Infinity
  }];
  function filterPrice() {
    var checkedValues = priceBtn.filter(function (checkbox) {
      return checkbox.element.checked;
    }).map(function (checkbox) {
      return {
        min: checkbox.min,
        max: checkbox.max
      };
    });
    var result = false;
    _Date_sub.default.forEach(function (item, index) {
      var itemElement = document.querySelector(".item_Array_".concat(index + 1));
      var price = Number(item.price.replace(/[^0-9]/g, ''));
      if (checkedValues.length === 0 || checkedValues.some(function (value) {
        return price >= value.min && price < value.max;
      })) {
        itemElement.style.display = 'block';
        result = true;
      } else {
        itemElement.style.display = 'none';
      }
    });
    if (!result) {
      noFilter.style.display = 'block';
    } else {
      noFilter.style.display = 'none';
    }
  }
  priceBtn.forEach(function (checkbox) {
    checkbox.element.addEventListener('change', filterPrice);
  });

  // ======== 성별 카테고리 필터 ========
  var GenderMen = document.getElementById('Gender_Men');
  var GenderWomen = document.getElementById('Gender_Women');
  var Unisex = document.getElementById('Gender_unisex');
  var genderBtn = [{
    element: GenderMen,
    value: 'men'
  }, {
    element: GenderWomen,
    value: 'women'
  }, {
    element: Unisex,
    value: 'unisex'
  }];
  function filtergenders() {
    var checkedValues = genderBtn.filter(function (checkbox) {
      return checkbox.element.checked;
    }).map(function (checkbox) {
      return checkbox.value;
    });
    var result = false;
    _Date_sub.default.forEach(function (item, index) {
      var itemElement = document.querySelector(".item_Array_".concat(index + 1));
      if (checkedValues.length === 0 || checkedValues.every(function (value) {
        return item.gender.includes(value);
      })) {
        itemElement.style.display = 'block';
        result = true;
      } else {
        itemElement.style.display = 'none';
      }
    });
    if (!result) {
      noFilter.style.display = 'block';
    } else {
      noFilter.style.display = 'none';
    }
  }
  genderBtn.forEach(function (checkbox) {
    checkbox.element.addEventListener('change', filtergenders);
  });

  // QuickMenu ---------------------------

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
    QuickMenuUpDown.style.color = '#000';
  });
  QuickMenuUpDown.addEventListener('mouseout', function () {
    QuickMenu.style.height = '250px';
    QuickMenuUpDown.style.height = '50px';
    QuickMenuUpDown.style.lineHeight = '20px';
    QuickMenuUpDown.style.fontSize = '18px';
    QuickMenuUpDown.style.transition = '0.3s';
    QuickMenuUpDown.style.color = '#777';
  });
});
},{"./Date_sub.js":"JS/Date_sub.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60783" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","JS/subPage.js"], null)
//# sourceMappingURL=/subPage.bbefdaf6.js.map