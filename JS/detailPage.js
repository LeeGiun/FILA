document.addEventListener("DOMContentLoaded", function () {

  /* HEADER 메뉴 영역 HOVER 시 MENU FULL DWON --------- */
  // 일반 HEADER 영역
  const Header = document.querySelector("#header");
  const HeaderOuter = document.querySelector("#header .header_outer");
  const headerBox = document.querySelector(".header_box");

  // HEADER MENU
  const MainMenu = document.querySelector(".mainMenu");
  const mainMenuUL = document.querySelector(".mainMenu_ul");
  const mainMenuLI = document.querySelector(".mainMenu_ul li");

  const GNB = document.querySelector(".gnb");
  const LOGO = document.querySelector(".logo");

  // SHEET 영역 Sheet - 전체 / sht 50vh 영역
  const mainMenuSheet = document.querySelector(".mainMenu_Sheet");
  const mainMenuSht = document.querySelector(".main_menu_sht");

  // SHEET MENU 영역
  const eachMenuUL = document.querySelector(".each_menu_ul");
  const eachMenuLI = document.querySelectorAll(".each_menu_ul li");

  // SHHET DIV 영역
  const WomenSheetBox = document.querySelector(".Women_sheet_box");
  const MenSheetBox = document.querySelector(".Men_sheet_box");
  const KidsSheetBox = document.querySelector(".Kids_sheet_box");
  const BrandSheetBox = document.querySelector(".Brand_sheet_box");
  const NULLSheetBox = document.querySelector(".each_menu_ul li:nth-child(4)");

  // Sheet DIV 영역 각각 배열생성
  const Sheets = [
    WomenSheetBox,
    MenSheetBox,
    KidsSheetBox,
    NULLSheetBox,
    BrandSheetBox,
  ];

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

  const mainMenuA = document.querySelectorAll(".mainMenu_ul li a");

  const FixLogo = document.querySelector(".logo img");

  const FixGnbMap = document.querySelector(".gnb_Menu_map img");
  const FixGnbSearch = document.querySelector(".gnb_Menu_search img");
  const FixGnbMy = document.querySelector(".gnb_Menu_my img");
  const FixGnbCart = document.querySelector(".gnb_Menu_cart img");

  document.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      HeaderOuter.classList.add("hd_fix");
      HeaderOuter.style.top = "-25px";
      HeaderOuter.style.height = "80px";
      mainMenuA.forEach((index, element) => {
        mainMenuA[element].style.color = "#fff";
      });
      FixGnbMap.setAttribute("src", "./images/GNB_map1.svg");
      FixGnbSearch.setAttribute("src", "./images/GNB_search1.svg");
      FixGnbMy.setAttribute("src", "./images/GNB_my1.svg");
      FixGnbCart.setAttribute("src", "./images/GNB_cart1.svg");
      FixLogo.setAttribute("src", "./images/FILA LOGO_1.svg");
      document.querySelector(".mainMenu_ul li:nth-child(4)").style.borderRight =
        "1px solid #fff";
    } else {
      HeaderOuter.classList.remove("hd_fix");
      mainMenuA.forEach((index, element) => {
        mainMenuA[element].style.color = "#000";
      });
      FixGnbMap.setAttribute("src", "./images/GNB_map2.svg");
      FixGnbSearch.setAttribute("src", "./images/GNB_search2.svg");
      FixGnbMy.setAttribute("src", "./images/GNB_my2.svg");
      FixGnbCart.setAttribute("src", "./images/GNB_cart2.svg");
      FixLogo.setAttribute("src", "./images/FILA LOGO_2.svg");
      document.querySelector(".mainMenu_ul li:nth-child(4)").style.borderRight =
        "1px solid #000";
    }
  });






  // QuickMenu ---------------------------

  const QuickMenu = document.getElementById('QuickMenu')
  const QTxt = document.querySelectorAll('.Q_txt')
  const QuickMenuUpDown = document.querySelector('.QuickMenu_UP_Down')



  // 퀵메뉴 마우스 오버
  QuickMenu.addEventListener('mouseover', function() {
    QuickMenu.style.width = '150px'
    QuickMenuUpDown.style.width = '150px'
    QuickMenu.style.transition = '0.3s'

    QTxt.forEach((element) => {
      element.style.width = '100px'
      element.style.opacity = '1'
    })
  })

  QuickMenu.addEventListener('mouseout', function() {
    QuickMenu.style.width = '50px'
    QuickMenuUpDown.style.width = '50px'
    QuickMenu.style.transition = '0.3s'

    QTxt.forEach((element) => {
      element.style.width = '0px'
      element.style.opacity = '0'
    })
  })



  // 퀵메뉴 Up,Down 메뉴 마우스 오버
  QuickMenuUpDown.addEventListener('mouseover', function() {
    QuickMenu.style.height = '300px'
    QuickMenuUpDown.style.width = '150px'
    QuickMenuUpDown.style.height = '100px'
    QuickMenuUpDown.style.lineHeight = '50px'
    QuickMenuUpDown.style.fontSize = '32px'
    QuickMenuUpDown.style.transition = '0.3s'
    QuickMenuUpDown.style.color = '#000'
  })

  QuickMenuUpDown.addEventListener('mouseout', function() {
    QuickMenu.style.height = '250px'
    QuickMenuUpDown.style.height = '50px'
    QuickMenuUpDown.style.lineHeight = '20px'
    QuickMenuUpDown.style.fontSize = '18px'
    QuickMenuUpDown.style.color = '#777'
    QuickMenuUpDown.style.transition = '0.3s'
  })





// -------------------------------------------
// 수량 Up , Down 메뉴
const numPlus = document.getElementById('num_Plus')
const numMinus = document.getElementById('num_Minus')
const inputNumber = document.querySelector('.Select_NumberBox input')
const priceSpan = document.querySelector('.Right_Price span:last-child')

numPlus.addEventListener('click', () => count('plus'))
numMinus.addEventListener('click', () => count('minus'))

function count(result) {
  let resultNum = parseInt(inputNumber.value)
  let price = parseInt(priceSpan.textContent.replace(/,/g, ''))

  if (isNaN(resultNum)) {
    resultNum = 0
  }

  if (result === 'plus') {
    resultNum += 1
    price += 119000
  } else if (result === 'minus') {
    resultNum -= 1
    price -= 119000
  }

  if (resultNum < 1) {
    resultNum = 1
    price = 119000
  } else if (resultNum > 9) {
    resultNum = 9
    price = 119000 * 9
  }

  inputNumber.value = resultNum
  priceSpan.textContent = price.toLocaleString() + '원'
}


// -------------------------------------------
// 사이즈 선택시 색상 변경


const SizeLabel1 = document.querySelector('.Right_ProductSize ul li:nth-child(1) label')
const SizeLabel2 = document.querySelector('.Right_ProductSize ul li:nth-child(2) label')
const SizeLabel3 = document.querySelector('.Right_ProductSize ul li:nth-child(3) label')

const SizeLabelAll = [
  SizeLabel1,
  SizeLabel2,
  SizeLabel3
]

SizeLabelAll.forEach(label => {
  label.addEventListener('click', function() {
    SizeLabelAll.forEach(element => {
      if (element === label) {
        element.style.backgroundColor = '#002053'
        element.style.border = '1px solid #002053'
        element.style.color = '#fff'
        element.style.transition = '0.3s'
      } else {
        element.style.color = '#000'
        element.style.backgroundColor = '#fff'
        element.style.border = '1px solid #000'
        element.style.transition = '0.3s'
      }
    })
  })
})



// =====================================
// 사이즈 선택시 색상 변경


const ProductFineGreen = document.querySelector('.Product_FineGreen label')
const ProductHighRed = document.querySelector('.Product_HighRed label')

const ColorSelectAll = [
  ProductFineGreen,
  ProductHighRed
]

ColorSelectAll.forEach(label => {
  label.addEventListener('click', function() {
    SizeLabelAll.forEach(element => {
      if (element === label) {
        element.style.backgroundColor = '#002053'
        element.style.border = '1px solid #002053'
        element.style.color = '#fff'
        element.style.transition = '0.3s'
      } else {
        element.style.color = '#000'
        element.style.backgroundColor = '#fff'
        element.style.border = '1px solid #000'
        element.style.transition = '0.3s'
      }
    })
  })
})




// -------------------------------------------
// 썸네일 이미지 변경

  const ThumbIMG = document.querySelectorAll('.Thumb_ImgBox div')
  const DetailThumbIMG = document.querySelector('.detail_Thumb_Img_Right')

  DetailThumbIMG.style.transition = 'background-image 0.3s'

  
  ThumbIMG.forEach((element, index) => {
    element.addEventListener('click', function() {
      DetailThumbIMG.style.backgroundImage = `url(./BACK_IMG/detail${index + 1}.jpeg)`
    })
  })





// -------------------------------------------
// 상품정보 TAP 메뉴

  const TapAll = document.querySelectorAll('.Tap_All ul li')
  const ProductInfomation = document.querySelector('.Product_Infomation')
  const ExchangeReturn = document.querySelector('.Exchange_Return')
  const deliveryInfo = document.querySelector('.delivery_Info')

  const TapElement = [
    ProductInfomation,
    ExchangeReturn,
    deliveryInfo
  ]

  TapAll.forEach((tap, index) => {
    tap.addEventListener('click', function () {
      TapElement.forEach((element, i) => {
        if (i === index) {
          element.style.display = 'block'
        } else {
          element.style.display = 'none'
        }
      })
    })
  })

  TapAll.forEach((tap, index) => {
    tap.addEventListener('click', function () {
      TapAll.forEach((element, i) => {
        if (i === index) {
          element.style.color = '#fff'
          element.style.backgroundColor = '#002053'
          element.style.fontWeight = 'bold'
        } else {
          element.style.color = '#000'
          element.style.backgroundColor = '#fff'
        }
      })
    })
  })



// -------------------------------------------
// 리뷰 & QnA  TAP 메뉴
  
const TapAll2 = document.querySelectorAll('.Tap_All2 ul li')

const Review = document.querySelector('.Review')
const QnA = document.querySelector('.QnA')
const TapElement2 = [Review, QnA]

TapAll2.forEach((tap2, index2) => {
  tap2.addEventListener('click', function() {
    TapElement2.forEach((element2, j) => {
      if (j === index2) {
        element2.style.display = 'block'
      } else {
        element2.style.display = 'none'
      }
    })
  })
})

TapAll2.forEach((tap2, index2) => {
  tap2.addEventListener('click', function() {
    TapAll2.forEach((element2, j) => {
      if (j === index2) {
        element2.style.color = '#fff'
        element2.style.backgroundColor = '#002053'
        element2.style.fontWeight = 'bold'
      } else {
        element2.style.color = '#000'
        element2.style.backgroundColor = '#fff'
      }
    })
  })
})

/* 작성하기 버튼 -> 리뷰 등록창 열림 */
const ReviewBtn = document.getElementById('Review_btn')
const ReviewWrite = document.querySelector('.Review_write')

/* 리뷰 등록하기 버튼 */
const RVwrite = document.querySelector('#RVwrite_btn + label')



const closeBtn = document.querySelector('.Review_write_box #close_btn + label')

ReviewBtn.addEventListener('click', function() {
  ReviewWrite.style.display = 'block'
})

closeBtn.addEventListener('click', function () {
  ReviewWrite.style.display = 'none'
})

RVwrite.addEventListener('click', function() {
  ReviewWrite.style.display = 'none'
})






})
