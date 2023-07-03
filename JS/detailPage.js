


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









// ===========================================
// ** QuickMenu Content  **
// ===========================================


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
  QuickMenuUpDown.style.Color = '#000'
})
QuickMenuUpDown.addEventListener('mouseout', function() {
  QuickMenu.style.height = '250px'
  QuickMenuUpDown.style.height = '50px'
  QuickMenuUpDown.style.lineHeight = '20px'
  QuickMenuUpDown.style.fontSize = '18px'
  QuickMenuUpDown.style.Color = '#777'
  QuickMenuUpDown.style.transition = '0.3s'
})


$(function() {
  const QuickUpA = $('.Up_btn a');

  QuickUpA.click(function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeOutQuint');
  });
});


$(function() {
  const QuickUpA = $('.Down_btn a');

  QuickUpA.click(function(event) {
    event.preventDefault();
    const scrollBottom = $(document).height() - $(window).height();
    $('html, body').animate({ scrollTop: scrollBottom }, 1500, 'easeOutQuint');
  });
});
  





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

      const imageUrl = `../CSS/BACK_IMG/detail${index + 1}.jpeg`;
      console.log(imageUrl);
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
    tap2.addEventListener('click', function () {
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
    tap2.addEventListener('click', function () {
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




  /* 작성하기 버튼 -> Size / 별점 선택 */  

  
  const scoreLabel1 = document.getElementById('starFive')
  const scoreLabel2 = document.getElementById('starFour')
  const scoreLabel3 = document.getElementById('starThree')
  const scoreLabel4 = document.getElementById('starTwo')
  const scoreLabel5 = document.getElementById('starOne')
  
  const scoreLabelAll = [
    scoreLabel1,
    scoreLabel2,
    scoreLabel3,
    scoreLabel4,
    scoreLabel5
  ]

  const SizeSelect1 = document.querySelector('label[for="size75_Label"]');
  const SizeSelect2 = document.querySelector('label[for="size80_Label"]');
  const SizeSelect3 = document.querySelector('label[for="size85_Label"]');
  const SizeSelect4 = document.querySelector('label[for="size90_Label"]');
  const SizeSelect5 = document.querySelector('label[for="size95_Label"]');
  const SizeSelect6 = document.querySelector('label[for="size100_Label"]');
  const SizeSelect7 = document.querySelector('label[for="size105_Label"]');
  const SizeSelect8 = document.querySelector('label[for="size110_Label"]');
  const SizeSelect9 = document.querySelector('label[for="size115_Label"]');


  const SizeSelectAll = [
    SizeSelect1,
    SizeSelect2,
    SizeSelect3,
    SizeSelect4,
    SizeSelect5,
    SizeSelect6,
    SizeSelect7,
    SizeSelect8,
    SizeSelect9
  ]

  // 별점 체크 CheckBox효과 -> Radio 효과
  scoreLabelAll.forEach((label) => {
    label.addEventListener('click', function() {
      scoreLabelAll.forEach((LabelClick) => {
        if (LabelClick !== this) {
          LabelClick.checked = false;
        }
      })
    })
  })

  // 사이즈 체크 CheckBox효과 -> Radio 효과
  SizeSelectAll.forEach((Size) => {
    Size.addEventListener('click', function() {
      SizeSelectAll.forEach((SizeClick) => {
        if (SizeClick !== this) {
          SizeClick.checked = false;
        }
      })
    })
  })

  // 사이즈 선택에 따라 버튼 색상변경
  SizeSelectAll.forEach((Size) => {
    Size.addEventListener('click', function() {
      this.style.backgroundColor = '#002053';
      this.style.border = '1px solid #002053';
      this.style.color = '#fff';
  
      SizeSelectAll.forEach((SizeClick) => {
        if (SizeClick !== this) {
          SizeClick.style.backgroundColor = '#fff';
          SizeClick.style.border = '1px soild #eee';
          SizeClick.style.color = '#002053';
        }
      })
    })
  })







  /* 리뷰 등록하기 버튼 */
  const AddReview = document.querySelector('.add_ReviewBox label')
  const closeBtn = document.querySelector('.close_ReviewBox label')

  ReviewBtn.addEventListener('click', function () {
    ReviewWrite.style.display = 'block'
  })
  closeBtn.addEventListener('click', function () {
    ReviewWrite.style.display = 'none'
  })
  AddReview.addEventListener('click', function () {
    ReviewWrite.style.display = 'none'
  })

// 리뷰 등록하기 << 버튼 누를경우 클릭 이벤트
  AddReview.addEventListener('click', function () {

    const RVwrite = document.querySelector('.RVwrite')
    const ReviewBtnContent = document.querySelector('.Review_Buttom_content')

    // div 생성
    let Create_divBox = document.createElement('div')

    // 클래스 지정
    Create_divBox.setAttribute('class', 
    'Review_Buttom_content_text')

    ReviewBtnContent.appendChild(Create_divBox)
    // HTML ReviewBtnContent >
    //  Create_divBox


    // 별점 체크 이벤트
    let Create_div1 = document.createElement('div')
    Create_div1.setAttribute('class', 'Review_btm_txtBox1')

    const star5score = document.getElementById('starFive')
    const star4score = document.getElementById('starFour')
    const star3score = document.getElementById('starThree')
    const star2score = document.getElementById('starTwo')
    const star1score = document.getElementById('starOne')

    let starResult = '별점 선택없음'


    if (star5score.checked) {
      starResult = star5score.value
    } else if (star4score.checked) {
      starResult = star4score.value
    } else if (star3score.checked) {
      starResult = star3score.value
    } else if (star2score.checked) {
      starResult = star2score.value
    } else if (star1score.checked) {
      starResult = star1score.value
    }
    
    

    let Create_P2 = document.createElement('p')
    let starTextNode1 = document.createTextNode(starResult)
    Create_P2.appendChild(starTextNode1)
    Create_div1.appendChild(Create_P2)



    // 사이즈 체크 이벤트
    let Create_div2 = document.createElement('div')
    Create_div2.setAttribute('class', 'Review_btm_txtBox2')
    
    const Size75Check = document.getElementById('size75_Label')
    const Size80Check = document.getElementById('size80_Label')
    const Size85Check = document.getElementById('size85_Label')
    const Size90Check = document.getElementById('size90_Label')
    const Size95Check = document.getElementById('size95_Label')
    const Size100Check = document.getElementById('size100_Label')
    const Size105Check = document.getElementById('size105_Label')
    const Size110Check = document.getElementById('size110_Label')
    const Size115Check = document.getElementById('size115_Label')
    
    const SizeCheckAll = [
      Size75Check,
      Size80Check,
      Size85Check,
      Size90Check,
      Size95Check,
      Size100Check,
      Size105Check,
      Size110Check,
      Size115Check,
    ]
    
    let SizeResult = '사이즈 선택없음'
    
    SizeCheckAll.forEach((SizeCheck) => {
      if (SizeCheck.checked) {
        SizeResult = SizeCheck.value
      }
    })
    
    let Create_P3 = document.createElement('p')
    let starTextNode2 = document.createTextNode(SizeResult)
    
    Create_P3.appendChild(starTextNode2)
    Create_div2.appendChild(Create_P3)
    
    
    // 닉네임 이벤트
    let Create_div3 = document.createElement('div')
    Create_div3.setAttribute('class', 'Review_btm_txtBox3')
    
    const name_name = document.getElementById('name_name')
    
    let NameResult = name_name.value || '닉네임없음'
    let NameTextNode3 = document.createTextNode(NameResult)
    
    let Create_P4 = document.createElement('p')
    Create_P4.appendChild(NameTextNode3)
    Create_div3.appendChild(Create_P4)
    


    let Create_div4 = document.createElement('div')
    Create_div4.setAttribute('class', 'Review_btm_txtBox4')


    Create_divBox.appendChild(Create_div1)
    Create_divBox.appendChild(Create_div2)
    Create_divBox.appendChild(Create_div3)
    Create_divBox.appendChild(Create_div4)
    // Create_divBox >
    //  Create_div1 = Create_div2 = Create_div 3



    let Create_P = document.createElement('p')
    let Create_Text = document.createTextNode(RVwrite.value)
    Create_P.appendChild(Create_Text)
    document.body.appendChild(Create_P)

    let Create_Span = document.createElement('span')
    let CloseText = document.createTextNode('[ 리뷰삭제 ]')

    Create_Span.appendChild(CloseText)
    Create_P.appendChild(Create_Span)
    Create_Span.setAttribute('class', 'Review_del')

    Create_div4.insertBefore(Create_P, Create_div4.children[0])
    Create_div4.appendChild(Create_P)
    // Create_div3 >
    //  Create_P > Create_Text
    //  Create_P > Create_Span > CloseText


    // 클릭 후 체크 초기화
    const starScores = [star5score, star4score, star3score, star2score, star1score];
    starScores.forEach(starScore => {
      if (starScore.checked) {
        starScore.checked = false;
      }
    });

    SizeCheckAll.forEach(sizeCheck => {
      if (sizeCheck.checked) {
        sizeCheck.checked = false;
      }
    });



    // 클릭 후 닉네임 초기화
    name_name.value = ''

    // 클릭 후 텍스트 박스 내용 초기화
    RVwrite.value = ''
    RVwrite.focus()

    let ReviewDel = document.querySelectorAll('.Review_del')

    for (let i = 0; i < ReviewDel.length; i++) {
      ReviewDel[i].addEventListener('click', function () {
        let ParentTag = this.parentNode.parentNode.parentNode;
        if (ParentTag && ParentTag.className === 'Review_Buttom_content_text') {
          ParentTag.parentNode.removeChild(ParentTag);
        }
      })
    }

    // function press(TextKey) {
    //   if (TextKey.keyCode == 13) {
    //     const formname = document.querySelector('form');
    //     formname.submit();
    //   }
    // }

  })

  // 리뷰 이벤트 등록하기 클릭 후 스타일 초기화
  AddReview.addEventListener('click', function() {
    SizeSelectAll.forEach((SizeClick) => {
      if (SizeClick !== this) {
        SizeClick.style.backgroundColor = '#fff';
        SizeClick.style.border = '1px soild #eee';
        SizeClick.style.color = '#002053';
      }
    })
  })






  /* Q&A */
  const QnABtnFirst = document.querySelector('label[for="QnA_btnLabel"]')
  const QnAText = document.querySelector('.QnA_Text')

  const QnACloseLabel = document.querySelector('label[for="QnACloseLabel"]')
  
  QnABtnFirst.addEventListener('click', function() {
    let QnAOn = 0
    if (QnAOn == 0) {
      QnAText.style.display = 'block'
      QnAOn = 1
    } 
    
    QnACloseLabel.addEventListener('click', function() {
      if (QnAOn == 1) {
      QnAText.style.display = 'none'
      QnAOn = 0
      }
    })
  })



  const QnABtnLast = document.querySelector('label[for="QnA_Button"]')

  QnABtnLast.addEventListener('click', function() {

    const QnAContentBox = document.querySelector('.QnA_Content_box')


    let Create_div_QnABox = document.createElement('div')
    Create_div_QnABox.setAttribute('class', 'Create_div_QnABox')


    let Create_div_QnA1 = document.createElement('div')
    let Create_div_QnA2 = document.createElement('div')
    let Create_div_QnA3 = document.createElement('div')
    Create_div_QnA1.setAttribute('class', 'Create_div_QnA1')
    Create_div_QnA2.setAttribute('class', 'Create_div_QnA2')
    Create_div_QnA3.setAttribute('class', 'Create_div_QnA3')


    let Create_P_QnA1 = document.createElement('p')
    let Create_P_QnA2 = document.createElement('p')
    let Create_P_QnA3 = document.createElement('p')
    Create_P_QnA1.setAttribute('class', 'Create_P_QnA1')
    Create_P_QnA2.setAttribute('class', 'Create_P_QnA2')
    Create_P_QnA3.setAttribute('class', 'Create_P_QnA3')



    Create_div_QnA1.appendChild(Create_P_QnA1)
    Create_div_QnA2.appendChild(Create_P_QnA2)
    Create_div_QnA3.appendChild(Create_P_QnA3)

    Create_div_QnABox.appendChild(Create_div_QnA1)
    Create_div_QnABox.appendChild(Create_div_QnA2)
    Create_div_QnABox.appendChild(Create_div_QnA3)


    let QAwrite = document.querySelector('.QAwrite')
    let QnAName = document.getElementById('QnA_Name')


    // 닉네임
    let QnAResult1 = QnAName.value || '닉네임 없음'
    let QnATextNode1 = document.createTextNode(QnAResult1)
    
    Create_P_QnA1.appendChild(QnATextNode1)
    Create_div_QnA1.appendChild(Create_P_QnA1)
    Create_div_QnABox.appendChild(Create_div_QnA1)


    // 연락처
    let QnAPhone = document.getElementById('QnA_Phone')

    let QnAResult2 = QnAPhone.value || '연락처없음'
    let QnATextNode2 = document.createTextNode(QnAResult2)
    
    Create_P_QnA2.appendChild(QnATextNode2)
    Create_div_QnA2.appendChild(Create_P_QnA2)
    Create_div_QnABox.appendChild(Create_div_QnA2)


    // 내용
    let QnAResult3 = QAwrite.value || '문의하신 내용이 없습니다. 다시 작성해주세요.'
    let QnATextNode3 = document.createTextNode(QnAResult3)
    
    Create_P_QnA3.appendChild(QnATextNode3)
    Create_div_QnA3.appendChild(Create_P_QnA3)
    Create_div_QnABox.appendChild(Create_div_QnA3)


    QnAPhone.value = ''
    QnAName.value = ''
    QAwrite.value = ''

    QnAContentBox.appendChild(Create_div_QnABox)
    QnAText.style.display = 'none'







    let QnADel_P = document.createElement('p')
    document.body.appendChild(QnADel_P)

    let QnADelSpan = document.createElement('span')
    let QnADelText = document.createTextNode('[ 문의삭제 ]')
    QnADelSpan.setAttribute('class', 'QnADel_del')

    QnADelSpan.appendChild(QnADelText)
    Create_div_QnA3.appendChild(QnADelSpan)

    let QnADel = document.querySelectorAll('.QnADel_del')

for (let i = 0; i < QnADel.length; i++) {
  QnADel[i].addEventListener('click', function () {
    let ParentTag = this.parentNode.parentNode;
    if (ParentTag && ParentTag.className === 'Create_div_QnABox') {
      ParentTag.parentNode.removeChild(ParentTag);
    }
  })
}
  })


})
