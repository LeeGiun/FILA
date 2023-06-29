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
})({"JS/detailPage.js":[function(require,module,exports) {
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
    QuickMenuUpDown.style.color = '#777';
    QuickMenuUpDown.style.transition = '0.3s';
  });

  // -------------------------------------------
  // 수량 Up , Down 메뉴
  var numPlus = document.getElementById('num_Plus');
  var numMinus = document.getElementById('num_Minus');
  var inputNumber = document.querySelector('.Select_NumberBox input');
  var priceSpan = document.querySelector('.Right_Price span:last-child');
  numPlus.addEventListener('click', function () {
    return count('plus');
  });
  numMinus.addEventListener('click', function () {
    return count('minus');
  });
  function count(result) {
    var resultNum = parseInt(inputNumber.value);
    var price = parseInt(priceSpan.textContent.replace(/,/g, ''));
    if (isNaN(resultNum)) {
      resultNum = 0;
    }
    if (result === 'plus') {
      resultNum += 1;
      price += 119000;
    } else if (result === 'minus') {
      resultNum -= 1;
      price -= 119000;
    }
    if (resultNum < 1) {
      resultNum = 1;
      price = 119000;
    } else if (resultNum > 9) {
      resultNum = 9;
      price = 119000 * 9;
    }
    inputNumber.value = resultNum;
    priceSpan.textContent = price.toLocaleString() + '원';
  }

  // -------------------------------------------
  // 사이즈 선택시 색상 변경

  var SizeLabel1 = document.querySelector('.Right_ProductSize ul li:nth-child(1) label');
  var SizeLabel2 = document.querySelector('.Right_ProductSize ul li:nth-child(2) label');
  var SizeLabel3 = document.querySelector('.Right_ProductSize ul li:nth-child(3) label');
  var SizeLabelAll = [SizeLabel1, SizeLabel2, SizeLabel3];
  SizeLabelAll.forEach(function (label) {
    label.addEventListener('click', function () {
      SizeLabelAll.forEach(function (element) {
        if (element === label) {
          element.style.backgroundColor = '#002053';
          element.style.border = '1px solid #002053';
          element.style.color = '#fff';
          element.style.transition = '0.3s';
        } else {
          element.style.color = '#000';
          element.style.backgroundColor = '#fff';
          element.style.border = '1px solid #000';
          element.style.transition = '0.3s';
        }
      });
    });
  });

  // =====================================
  // 사이즈 선택시 색상 변경

  var ProductFineGreen = document.querySelector('.Product_FineGreen label');
  var ProductHighRed = document.querySelector('.Product_HighRed label');
  var ColorSelectAll = [ProductFineGreen, ProductHighRed];
  ColorSelectAll.forEach(function (label) {
    label.addEventListener('click', function () {
      SizeLabelAll.forEach(function (element) {
        if (element === label) {
          element.style.backgroundColor = '#002053';
          element.style.border = '1px solid #002053';
          element.style.color = '#fff';
          element.style.transition = '0.3s';
        } else {
          element.style.color = '#000';
          element.style.backgroundColor = '#fff';
          element.style.border = '1px solid #000';
          element.style.transition = '0.3s';
        }
      });
    });
  });

  // -------------------------------------------
  // 썸네일 이미지 변경

  var ThumbIMG = document.querySelectorAll('.Thumb_ImgBox div');
  var DetailThumbIMG = document.querySelector('.detail_Thumb_Img_Right');
  DetailThumbIMG.style.transition = 'background-image 0.3s';
  ThumbIMG.forEach(function (element, index) {
    element.addEventListener('click', function () {
      var imageUrl = "../CSS/BACK_IMG/detail".concat(index + 1, ".jpeg");
      console.log(imageUrl);
      DetailThumbIMG.style.backgroundImage = "url(./BACK_IMG/detail".concat(index + 1, ".jpeg)");
      // DetailThumbIMG.style.backgroundImage = `url(../CSS/BACK_IMG/detail${index + 1}.jpeg)`
    }); // Git에 올릴때는 아래 // parcel-bundler로 할때는 위 사용
  });

  // -------------------------------------------
  // 상품정보 TAP 메뉴

  var TapAll = document.querySelectorAll('.Tap_All ul li');
  var ProductInfomation = document.querySelector('.Product_Infomation');
  var ExchangeReturn = document.querySelector('.Exchange_Return');
  var deliveryInfo = document.querySelector('.delivery_Info');
  var TapElement = [ProductInfomation, ExchangeReturn, deliveryInfo];
  TapAll.forEach(function (tap, index) {
    tap.addEventListener('click', function () {
      TapElement.forEach(function (element, i) {
        if (i === index) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    });
  });
  TapAll.forEach(function (tap, index) {
    tap.addEventListener('click', function () {
      TapAll.forEach(function (element, i) {
        if (i === index) {
          element.style.color = '#fff';
          element.style.backgroundColor = '#002053';
          element.style.fontWeight = 'bold';
        } else {
          element.style.color = '#000';
          element.style.backgroundColor = '#fff';
        }
      });
    });
  });

  // -------------------------------------------
  // 리뷰 & QnA  TAP 메뉴
  var TapAll2 = document.querySelectorAll('.Tap_All2 ul li');
  var Review = document.querySelector('.Review');
  var QnA = document.querySelector('.QnA');
  var TapElement2 = [Review, QnA];
  TapAll2.forEach(function (tap2, index2) {
    tap2.addEventListener('click', function () {
      TapElement2.forEach(function (element2, j) {
        if (j === index2) {
          element2.style.display = 'block';
        } else {
          element2.style.display = 'none';
        }
      });
    });
  });
  TapAll2.forEach(function (tap2, index2) {
    tap2.addEventListener('click', function () {
      TapAll2.forEach(function (element2, j) {
        if (j === index2) {
          element2.style.color = '#fff';
          element2.style.backgroundColor = '#002053';
          element2.style.fontWeight = 'bold';
        } else {
          element2.style.color = '#000';
          element2.style.backgroundColor = '#fff';
        }
      });
    });
  });

  /* 작성하기 버튼 -> 리뷰 등록창 열림 */
  var ReviewBtn = document.getElementById('Review_btn');
  var ReviewWrite = document.querySelector('.Review_write');

  /* 작성하기 버튼 -> Size / 별점 선택 */

  var scoreLabel1 = document.getElementById('starFive');
  var scoreLabel2 = document.getElementById('starFour');
  var scoreLabel3 = document.getElementById('starThree');
  var scoreLabel4 = document.getElementById('starTwo');
  var scoreLabel5 = document.getElementById('starOne');
  var scoreLabelAll = [scoreLabel1, scoreLabel2, scoreLabel3, scoreLabel4, scoreLabel5];
  var SizeSelect1 = document.querySelector('label[for="size75_Label"]');
  var SizeSelect2 = document.querySelector('label[for="size80_Label"]');
  var SizeSelect3 = document.querySelector('label[for="size85_Label"]');
  var SizeSelect4 = document.querySelector('label[for="size90_Label"]');
  var SizeSelect5 = document.querySelector('label[for="size95_Label"]');
  var SizeSelect6 = document.querySelector('label[for="size100_Label"]');
  var SizeSelect7 = document.querySelector('label[for="size105_Label"]');
  var SizeSelect8 = document.querySelector('label[for="size110_Label"]');
  var SizeSelect9 = document.querySelector('label[for="size115_Label"]');
  var SizeSelectAll = [SizeSelect1, SizeSelect2, SizeSelect3, SizeSelect4, SizeSelect5, SizeSelect6, SizeSelect7, SizeSelect8, SizeSelect9];

  // 별점 체크 CheckBox효과 -> Radio 효과
  scoreLabelAll.forEach(function (label) {
    label.addEventListener('click', function () {
      var _this = this;
      scoreLabelAll.forEach(function (LabelClick) {
        if (LabelClick !== _this) {
          LabelClick.checked = false;
        }
      });
    });
  });

  // 사이즈 체크 CheckBox효과 -> Radio 효과
  SizeSelectAll.forEach(function (Size) {
    Size.addEventListener('click', function () {
      var _this2 = this;
      SizeSelectAll.forEach(function (SizeClick) {
        if (SizeClick !== _this2) {
          SizeClick.checked = false;
        }
      });
    });
  });

  // 사이즈 선택에 따라 버튼 색상변경
  SizeSelectAll.forEach(function (Size) {
    Size.addEventListener('click', function () {
      var _this3 = this;
      this.style.backgroundColor = '#002053';
      this.style.border = '1px solid #002053';
      this.style.color = '#fff';
      SizeSelectAll.forEach(function (SizeClick) {
        if (SizeClick !== _this3) {
          SizeClick.style.backgroundColor = '#fff';
          SizeClick.style.border = '1px soild #eee';
          SizeClick.style.color = '#002053';
        }
      });
    });
  });

  /* 리뷰 등록하기 버튼 */
  var AddReview = document.querySelector('.add_ReviewBox label');
  var closeBtn = document.querySelector('.close_ReviewBox label');
  ReviewBtn.addEventListener('click', function () {
    ReviewWrite.style.display = 'block';
  });
  closeBtn.addEventListener('click', function () {
    ReviewWrite.style.display = 'none';
  });
  AddReview.addEventListener('click', function () {
    ReviewWrite.style.display = 'none';
  });

  // 리뷰 등록하기 << 버튼 누를경우 클릭 이벤트
  AddReview.addEventListener('click', function () {
    var RVwrite = document.querySelector('.RVwrite');
    var ReviewBtnContent = document.querySelector('.Review_Buttom_content');

    // div 생성
    var Create_divBox = document.createElement('div');

    // 클래스 지정
    Create_divBox.setAttribute('class', 'Review_Buttom_content_text');
    ReviewBtnContent.appendChild(Create_divBox);
    // HTML ReviewBtnContent >
    //  Create_divBox

    // 별점 체크 이벤트
    var Create_div1 = document.createElement('div');
    Create_div1.setAttribute('class', 'Review_btm_txtBox1');
    var star5score = document.getElementById('starFive');
    var star4score = document.getElementById('starFour');
    var star3score = document.getElementById('starThree');
    var star2score = document.getElementById('starTwo');
    var star1score = document.getElementById('starOne');
    var starResult = '별점 선택없음';
    if (star5score.checked) {
      starResult = star5score.value;
    } else if (star4score.checked) {
      starResult = star4score.value;
    } else if (star3score.checked) {
      starResult = star3score.value;
    } else if (star2score.checked) {
      starResult = star2score.value;
    } else if (star1score.checked) {
      starResult = star1score.value;
    }
    var Create_P2 = document.createElement('p');
    var starTextNode1 = document.createTextNode(starResult);
    Create_P2.appendChild(starTextNode1);
    Create_div1.appendChild(Create_P2);

    // 사이즈 체크 이벤트
    var Create_div2 = document.createElement('div');
    Create_div2.setAttribute('class', 'Review_btm_txtBox2');
    var Size75Check = document.getElementById('size75_Label');
    var Size80Check = document.getElementById('size80_Label');
    var Size85Check = document.getElementById('size85_Label');
    var Size90Check = document.getElementById('size90_Label');
    var Size95Check = document.getElementById('size95_Label');
    var Size100Check = document.getElementById('size100_Label');
    var Size105Check = document.getElementById('size105_Label');
    var Size110Check = document.getElementById('size110_Label');
    var Size115Check = document.getElementById('size115_Label');
    var SizeCheckAll = [Size75Check, Size80Check, Size85Check, Size90Check, Size95Check, Size100Check, Size105Check, Size110Check, Size115Check];
    var SizeResult = '사이즈 선택없음';
    SizeCheckAll.forEach(function (SizeCheck) {
      if (SizeCheck.checked) {
        SizeResult = SizeCheck.value;
      }
    });
    var Create_P3 = document.createElement('p');
    var starTextNode2 = document.createTextNode(SizeResult);
    Create_P3.appendChild(starTextNode2);
    Create_div2.appendChild(Create_P3);

    // 닉네임 이벤트
    var Create_div3 = document.createElement('div');
    Create_div3.setAttribute('class', 'Review_btm_txtBox3');
    var name_name = document.getElementById('name_name');
    var NameResult = name_name.value || '닉네임없음';
    var NameTextNode3 = document.createTextNode(NameResult);
    var Create_P4 = document.createElement('p');
    Create_P4.appendChild(NameTextNode3);
    Create_div3.appendChild(Create_P4);
    var Create_div4 = document.createElement('div');
    Create_div4.setAttribute('class', 'Review_btm_txtBox4');
    Create_divBox.appendChild(Create_div1);
    Create_divBox.appendChild(Create_div2);
    Create_divBox.appendChild(Create_div3);
    Create_divBox.appendChild(Create_div4);
    // Create_divBox >
    //  Create_div1 = Create_div2 = Create_div 3

    var Create_P = document.createElement('p');
    var Create_Text = document.createTextNode(RVwrite.value);
    Create_P.appendChild(Create_Text);
    document.body.appendChild(Create_P);
    var Create_Span = document.createElement('span');
    var CloseText = document.createTextNode('[ 리뷰삭제 ]');
    Create_Span.appendChild(CloseText);
    Create_P.appendChild(Create_Span);
    Create_Span.setAttribute('class', 'Review_del');
    Create_div4.insertBefore(Create_P, Create_div4.children[0]);
    Create_div4.appendChild(Create_P);
    // Create_div3 >
    //  Create_P > Create_Text
    //  Create_P > Create_Span > CloseText

    // 클릭 후 체크 초기화
    var starScores = [star5score, star4score, star3score, star2score, star1score];
    starScores.forEach(function (starScore) {
      if (starScore.checked) {
        starScore.checked = false;
      }
    });
    SizeCheckAll.forEach(function (sizeCheck) {
      if (sizeCheck.checked) {
        sizeCheck.checked = false;
      }
    });

    // 클릭 후 닉네임 초기화
    name_name.value = '';

    // 클릭 후 텍스트 박스 내용 초기화
    RVwrite.value = '';
    RVwrite.focus();
    var ReviewDel = document.querySelectorAll('.Review_del');
    for (var i = 0; i < ReviewDel.length; i++) {
      ReviewDel[i].addEventListener('click', function () {
        var ParentTag = this.parentNode.parentNode.parentNode;
        if (ParentTag && ParentTag.className === 'Review_Buttom_content_text') {
          ParentTag.parentNode.removeChild(ParentTag);
        }
      });
    }
    function press(TextKey) {
      if (TextKey.keyCode == 13) {
        var formname = document.querySelector('form');
        formname.submit();
      }
    }
  });

  // 리뷰 이벤트 등록하기 클릭 후 스타일 초기화
  AddReview.addEventListener('click', function () {
    var _this4 = this;
    SizeSelectAll.forEach(function (SizeClick) {
      if (SizeClick !== _this4) {
        SizeClick.style.backgroundColor = '#fff';
        SizeClick.style.border = '1px soild #eee';
        SizeClick.style.color = '#002053';
      }
    });
  });

  /* Q&A */
  var QnABtnFirst = document.querySelector('label[for="QnA_btnLabel"]');
  var QnAText = document.querySelector('.QnA_Text');
  var QnACloseLabel = document.querySelector('label[for="QnACloseLabel"]');
  QnABtnFirst.addEventListener('click', function () {
    var QnAOn = 0;
    if (QnAOn == 0) {
      QnAText.style.display = 'block';
      QnAOn = 1;
    }
    QnACloseLabel.addEventListener('click', function () {
      if (QnAOn == 1) {
        QnAText.style.display = 'none';
        QnAOn = 0;
      }
    });
  });
  var QnABtnLast = document.querySelector('label[for="QnA_Button"]');
  QnABtnLast.addEventListener('click', function () {
    var QnAContentBox = document.querySelector('.QnA_Content_box');
    var Create_div_QnABox = document.createElement('div');
    Create_div_QnABox.setAttribute('class', 'Create_div_QnABox');
    var Create_div_QnA1 = document.createElement('div');
    var Create_div_QnA2 = document.createElement('div');
    var Create_div_QnA3 = document.createElement('div');
    Create_div_QnA1.setAttribute('class', 'Create_div_QnA1');
    Create_div_QnA2.setAttribute('class', 'Create_div_QnA2');
    Create_div_QnA3.setAttribute('class', 'Create_div_QnA3');
    var Create_P_QnA1 = document.createElement('p');
    var Create_P_QnA2 = document.createElement('p');
    var Create_P_QnA3 = document.createElement('p');
    Create_P_QnA1.setAttribute('class', 'Create_P_QnA1');
    Create_P_QnA2.setAttribute('class', 'Create_P_QnA2');
    Create_P_QnA3.setAttribute('class', 'Create_P_QnA3');
    Create_div_QnA1.appendChild(Create_P_QnA1);
    Create_div_QnA2.appendChild(Create_P_QnA2);
    Create_div_QnA3.appendChild(Create_P_QnA3);
    Create_div_QnABox.appendChild(Create_div_QnA1);
    Create_div_QnABox.appendChild(Create_div_QnA2);
    Create_div_QnABox.appendChild(Create_div_QnA3);
    var QAwrite = document.querySelector('.QAwrite');
    var QnAName = document.getElementById('QnA_Name');

    // 닉네임
    var QnAResult1 = QnAName.value || '닉네임 없음';
    var QnATextNode1 = document.createTextNode(QnAResult1);
    Create_P_QnA1.appendChild(QnATextNode1);
    Create_div_QnA1.appendChild(Create_P_QnA1);
    Create_div_QnABox.appendChild(Create_div_QnA1);

    // 연락처
    var QnAPhone = document.getElementById('QnA_Phone');
    var QnAResult2 = QnAPhone.value || '연락처없음';
    var QnATextNode2 = document.createTextNode(QnAResult2);
    Create_P_QnA2.appendChild(QnATextNode2);
    Create_div_QnA2.appendChild(Create_P_QnA2);
    Create_div_QnABox.appendChild(Create_div_QnA2);

    // 내용
    var QnAResult3 = QAwrite.value || '문의하신 내용이 없습니다. 다시 작성해주세요.';
    var QnATextNode3 = document.createTextNode(QnAResult3);
    Create_P_QnA3.appendChild(QnATextNode3);
    Create_div_QnA3.appendChild(Create_P_QnA3);
    Create_div_QnABox.appendChild(Create_div_QnA3);
    QnAPhone.value = '';
    QnAName.value = '';
    QAwrite.value = '';
    QnAContentBox.appendChild(Create_div_QnABox);
    QnAText.style.display = 'none';
    var QnADel_P = document.createElement('p');
    document.body.appendChild(QnADel_P);
    var QnADelSpan = document.createElement('span');
    var QnADelText = document.createTextNode('[ 문의삭제 ]');
    QnADelSpan.setAttribute('class', 'QnADel_del');
    QnADelSpan.appendChild(QnADelText);
    Create_div_QnA3.appendChild(QnADelSpan);
    var QnADel = document.querySelectorAll('.QnADel_del');
    for (var i = 0; i < QnADel.length; i++) {
      QnADel[i].addEventListener('click', function () {
        var ParentTag = this.parentNode.parentNode;
        if (ParentTag && ParentTag.className === 'Create_div_QnABox') {
          ParentTag.parentNode.removeChild(ParentTag);
        }
      });
    }
  });
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57926" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","JS/detailPage.js"], null)
//# sourceMappingURL=/detailPage.ab95887f.js.map