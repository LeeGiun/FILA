import ItemList from "./Date_sub.js"
console.log(ItemList)











document.addEventListener("DOMContentLoaded", function () {
  /* HEADER 메뉴 영역 HOVER 시 MENU FULL DWON --------- */
  // 일반 HEADER 영역
  const Header = document.querySelector("#header")
  const HeaderOuter = document.querySelector("#header .header_outer")
  const headerBox = document.querySelector(".header_box")

  // HEADER MENU
  const MainMenu = document.querySelector(".mainMenu")
  const mainMenuUL = document.querySelector(".mainMenu_ul")
  const mainMenuLI = document.querySelector(".mainMenu_ul li")

  const GNB = document.querySelector(".gnb")
  const LOGO = document.querySelector(".logo")

  // SHEET 영역 Sheet - 전체 / sht 50vh 영역
  const mainMenuSheet = document.querySelector(".mainMenu_Sheet")
  const mainMenuSht = document.querySelector(".main_menu_sht")

  // SHEET MENU 영역
  const eachMenuUL = document.querySelector(".each_menu_ul")
  const eachMenuLI = document.querySelectorAll(".each_menu_ul li")

  // SHHET DIV 영역
  const WomenSheetBox = document.querySelector(".Women_sheet_box")
  const MenSheetBox = document.querySelector(".Men_sheet_box")
  const KidsSheetBox = document.querySelector(".Kids_sheet_box")
  const BrandSheetBox = document.querySelector(".Brand_sheet_box")
  const NULLSheetBox = document.querySelector(".each_menu_ul li:nth-child(4)")

  // Sheet DIV 영역 각각 배열생성
  const Sheets = [
    WomenSheetBox,
    MenSheetBox,
    KidsSheetBox,
    NULLSheetBox,
    BrandSheetBox,
  ]

  // MAIN MENU 마우스 오버시 SHEET ON
  // Main Menu Hover -> Sheet 열림
  // -> (블러처리된 전체영역, sheets 겉 50vh 영역)
  MainMenu.addEventListener("mouseover", SheetOpen)

  function SheetOpen() {
    mainMenuSheet.style.display = "flex"
    mainMenuSht.style.display = "flex"

    WomenSheetBox.style.display = "flex"
    MenSheetBox.style.display = "none"
    KidsSheetBox.style.display = "none"
    BrandSheetBox.style.display = "none"
  }

  // forEach 이용하여 각 배열 생성된 Sheets를
  // index값 사용 후 Sheet open
  // li -> Mouse over -> 각각의 sheet open
  eachMenuLI.forEach(function (li, liIndex) {
    li.addEventListener("mouseover", function () {
      Sheets.forEach(function (sheet, sheetIndex) {
        if (liIndex === sheetIndex) {
          sheet.style.display = "flex"
        } else {
          sheet.style.display = "none"
        }
      })
    })
  })

  // Sheets 겉 50vh mouse벗어날 경우 SHEET 전체 OFF
  mainMenuSht.addEventListener("mouseleave", function () {
    mainMenuSheet.style.display = "none"
  })

  const mainMenuA = document.querySelectorAll(".mainMenu_ul li a")

  const FixLogo = document.querySelector(".logo img")

  const FixGnbMap = document.querySelector(".gnb_Menu_map img")
  const FixGnbSearch = document.querySelector(".gnb_Menu_search img")
  const FixGnbMy = document.querySelector(".gnb_Menu_my img")
  const FixGnbCart = document.querySelector(".gnb_Menu_cart img")

  document.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      HeaderOuter.classList.add("hd_fix")
      HeaderOuter.style.top = "-25px"
      HeaderOuter.style.height = "80px"
      mainMenuA.forEach((index, element) => {
        mainMenuA[element].style.color = "#fff"
      })
      FixGnbMap.setAttribute("src", "./images/GNB_map1.svg")
      FixGnbSearch.setAttribute("src", "./images/GNB_search1.svg")
      FixGnbMy.setAttribute("src", "./images/GNB_my1.svg")
      FixGnbCart.setAttribute("src", "./images/GNB_cart1.svg")
      FixLogo.setAttribute("src", "./images/FILA LOGO_1.svg")
      document.querySelector(".mainMenu_ul li:nth-child(4)").style.borderRight =
        "1px solid #fff"
    } else {
      HeaderOuter.classList.remove("hd_fix")
      mainMenuA.forEach((index, element) => {
        mainMenuA[element].style.color = "#000"
      })
      FixGnbMap.setAttribute("src", "./images/GNB_map2.svg")
      FixGnbSearch.setAttribute("src", "./images/GNB_search2.svg")
      FixGnbMy.setAttribute("src", "./images/GNB_my2.svg")
      FixGnbCart.setAttribute("src", "./images/GNB_cart2.svg")
      FixLogo.setAttribute("src", "./images/FILA LOGO_2.svg")
      document.querySelector(".mainMenu_ul li:nth-child(4)").style.borderRight =
        "1px solid #000"
    }
  })

  /* ------------------------------------------------- */

  //필터 메뉴 풀다운

  const FilterBlock1 = document.querySelector(".filterSide_block1")
  const FilterBlock2 = document.querySelector(".filterSide_block2")
  const filterMenuDown = document.querySelector(".filter_menuDown")

  FilterBlock1.addEventListener("click", function () {
    filterMenuDown.style.height = "520px"
    filterMenuDown.style.transition = "0.5s"
    filterMenuDown.style.opacity = "1"
    FilterBlock1.style.display = "none"
    FilterBlock2.style.display = "block"
  })
  FilterBlock2.addEventListener("click", function () {
    filterMenuDown.style.height = "0px"
    filterMenuDown.style.opacity = "0"
    FilterBlock1.style.display = "block"
    FilterBlock2.style.display = "none"
  })

  // 필터 [전체] Click시 색상 고정

  const FilterAllLI = document.querySelectorAll(".Filter_ALL ul li")
  let prevElement = null // 이전에 선택된 요소를 추적하는 변수

  FilterAllLI.forEach((element, index) => {
    let ColorON = 0 // ColorON 변수 선언 및 초기값 설정

    element.addEventListener("click", function () {
      if (prevElement) {
        // 이전에 선택된 요소가 있으면 스타일을 변경
        prevElement.style.color = "#000"
        prevElement.style.fontWeight = "unset"
        ColorON = 0
      }

      if (ColorON == 0) {
        element.style.color = "#002053"
        element.style.fontWeight = "bold"
        ColorON = 1 // ColorON 변수의 값을 변경
      } else if (ColorON == 1) {
        element.style.color = "#000"
        element.style.fontWeight = "unset"
        ColorON = 0 // ColorON 변수의 값을 변경
      }

      prevElement = element // 이전에 선택된 요소를 업데이트
    })
  })

  // 필터 [스포츠] Click시 색상 고정
  const FilterSportsInput = document.querySelectorAll(
    ".Filter_Sports ul li input"
  )
  const FilterSportsLabel = document.querySelectorAll(
    ".Filter_Sports ul li Label"
  )

  FilterSportsInput.forEach((input) => {
    input.addEventListener("click", function () {
      if (input.checked) {
        FilterSportsLabel.forEach((element, index) => {
          element.style.color = "#002053"
          element.style.fontWeight = "bold"
        })
      } else {
        FilterSportsLabel.forEach((element, index) => {
          element.style.color = "#000"
          element.style.fontWeight = "unset"
        })
      }
    })
  })


  /* ------------------------------------------------- */

  // 정렬 기능 이미지 변경
  const Array2 = document.querySelector(".two_array img")
  const Array4 = document.querySelector(".four_array img")

  const itemArr = []
  for (let i = 1; i <= 24; i++) {
    itemArr.push(document.querySelector(`.item_Array_${i}`))
  }

  const labelArr = []
  for (let i = 1; i <= 24; i++) {
    labelArr.push(document.querySelector(`.btm_btn_${i} label`))
  }

  const btmTxt = document.querySelector(".btm_txt")

  let on = 1

  Array2.addEventListener("click", function () {
    if (on == 1) {
      Array2.setAttribute("src", "./images/two_button2.png")
      Array4.setAttribute("src", "./images/four_button1.png")
      itemArr.forEach(function (element) {
        element.style.width = "460px"
        element.style.height = "580px"
      })
      labelArr.forEach(function (element) {
        element.style.width = "125px"
      })
      on = 0
    }
  })

  Array4.addEventListener("click", function () {
    if (on == 0) {
      Array2.setAttribute("src", "./images/two_button1.png")
      Array4.setAttribute("src", "./images/four_button2.png")
      itemArr.forEach(function (element) {
        element.style.width = "340px"
        element.style.height = "460px"
        btmTxt.style.height = "120px"
      })
      labelArr.forEach(function (element) {
        element.style.width = "90px"
      })
      on = 1
    }
  })

  /* Item에 이미지 넣기 */
  const ItemArray = [
    document.querySelector(".item_Array_1"),
    document.querySelector(".item_Array_2"),
    document.querySelector(".item_Array_3"),
    document.querySelector(".item_Array_4"),
    document.querySelector(".item_Array_5"),
    document.querySelector(".item_Array_6"),
    document.querySelector(".item_Array_7"),
    document.querySelector(".item_Array_8"),
    document.querySelector(".item_Array_9"),
    document.querySelector(".item_Array_10"),
    document.querySelector(".item_Array_11"),
    document.querySelector(".item_Array_12"),
    document.querySelector(".item_Array_13"),
    document.querySelector(".item_Array_14"),
    document.querySelector(".item_Array_15"),
    document.querySelector(".item_Array_16"),
    document.querySelector(".item_Array_17"),
    document.querySelector(".item_Array_18"),
    document.querySelector(".item_Array_19"),
    document.querySelector(".item_Array_20"),
    document.querySelector(".item_Array_21"),
    document.querySelector(".item_Array_22"),
    document.querySelector(".item_Array_23"),
    document.querySelector(".item_Array_24"),
  ]

  ItemArray.forEach((Element, index) => {
    const ItemIMG = document.createElement("img")
    const ItemImgA = document.createElement("a")
    ItemImgA.setAttribute("href", "#!")

    ItemIMG.setAttribute("src", ItemList[index].src)
    Element.appendChild(ItemImgA)
    ItemImgA.appendChild(ItemIMG)
  })

  const ItemImgAChange = document.querySelector(".item_Array_1 a")
  ItemImgAChange.setAttribute("href", "./detailPage.html")

  /* Item 카테고리 넣기 */

  const btmTxtArr = []
  for (let i = 1; i <= 24; i++) {
    btmTxtArr.push(document.querySelector(`.btm_txt_${i}`))
  }

  btmTxtArr.forEach((element, index) => {
    const p = document.createElement("p")
    const h3 = document.createElement("h3")
    const h4 = document.createElement("h4")

    p.textContent = ItemList[index].category.join(' ')
    h3.textContent = ItemList[index].itemName
    h4.textContent = ItemList[index].price

    element.appendChild(p)
    element.appendChild(h3)
    element.appendChild(h4)
  })






// ================================================================
// ============================ Filter ============================
// ================================================================




  const noFilter = document.querySelector('.noFilter')
  const filterReset = document.getElementById('filterReset')

  const FilterAllarr = document.getElementById('Filter_ALL_1')
  const Filter_All1 = document.getElementById('Filter_ALL_2')
  const Filter_All2 = document.getElementById('Filter_ALL_3')
  const Filter_All3 = document.getElementById('Filter_ALL_4')
  const Filter_All4 = document.getElementById('Filter_ALL_5')
  const Filter_All5 = document.getElementById('Filter_ALL_6')
  const Filter_All6 = document.getElementById('Filter_ALL_7')
  const Filter_All7 = document.getElementById('Filter_ALL_8')
  const Filter_All8 = document.getElementById('Filter_ALL_9')


// ====== 필터 전체 버튼 =======
  FilterAllarr.addEventListener('click', function() {
    sportsBtn.forEach(checkbox => {
      checkbox.element.checked = false
    })

    colorBtn.forEach(checkbox => {
      checkbox.element.checked = false
    })

    sizeBtn.forEach(checkbox => {
      checkbox.element.checked = false
    })

    genderBtn.forEach(checkbox => {
      checkbox.element.checked = false
    })

    priceBtn.forEach(checkbox => {
      checkbox.element.checked = false
    })


    SizeFt.forEach(back => {
      back.element.style.backgroundColor = '#fff'
      back.element.style.color = '#000'
      back.element.style.border = '1px solid #ccc'
      back.element.style.boxSizing = 'border-Box'
    })


    ColorFt.forEach(border => {
      border.element.style.border = '3px solid #fff'
      border.element.style.boxSizing = 'border-Box'
    })

    

    ItemList.forEach((item, index) => {
      const itemElement = document.querySelector(`.item_Array_${index + 1}`)
      itemElement.style.display = 'block'
    })
  })



// ======== 초기화 버튼 ========
  filterReset.addEventListener('click', function() {
    sportsBtn.forEach(checkbox => {
      checkbox.element.checked = false
    })

    colorBtn.forEach(checkbox => {
      checkbox.element.checked = false
    })

    sizeBtn.forEach(checkbox => {
      checkbox.element.checked = false
    })

    genderBtn.forEach(checkbox => {
      checkbox.element.checked = false
    })

    priceBtn.forEach(checkbox => {
      checkbox.element.checked = false
    })


    SizeFt.forEach(back => {
      back.element.style.backgroundColor = '#fff'
      back.element.style.color = '#000'
      back.element.style.border = '1px solid #ccc'
      back.element.style.boxSizing = 'border-Box'
    })


    ColorFt.forEach(border => {
      border.element.style.border = '3px solid #fff'
      border.element.style.boxSizing = 'border-Box'
    })

    ItemList.forEach((item, index) => {
      const itemElement = document.querySelector(`.item_Array_${index + 1}`)
      itemElement.style.display = 'block'
    })
  })




// ======== 첫번째 대분류 카테고리 필터 ========
  Filter_All1.addEventListener('click', function () {
    ItemList.forEach((item1, index) => {
      const itemElement = document.querySelector(`.item_Array_${index + 1}`)
      if (item1.cateAll.includes('wind')) {
        itemElement.style.display = 'block'
      } else {
        itemElement.style.display = 'none'
      }
    })
  })



  function filterItems(filterElement, filterValues) {
    filterElement.addEventListener('click', function () {
      let result = false

      ItemList.forEach((item, index) => {
        const itemElement = document.querySelector(`.item_Array_${index + 1}`)
        if (filterValues.some(value => item.cateAll.includes(value))) {
          itemElement.style.display = 'block'
          result = true
        } else {
          itemElement.style.display = 'none'
        }
      })

      if (!result) {
        noFilter.style.display = 'block'
      } else {
        noFilter.style.display = 'none'
      }
    })
  }
  
  filterItems(Filter_All1, ['wind'])
  filterItems(Filter_All2, ['hood', 'manTOman'])
  filterItems(Filter_All3, ['trainingSet'])
  filterItems(Filter_All4, ['knit', 'sweater'])
  filterItems(Filter_All5, ['T_shirt'])
  filterItems(Filter_All6, ['pants'])
  filterItems(Filter_All7, ['down', 'fleece'])
  filterItems(Filter_All8, ['Online'])







// ======== 스포츠 카테고리 필터 ========
const Filter_Sports1 = document.getElementById('Filter_Sports_btn1')
const Filter_Sports2 = document.getElementById('Filter_Sports_btn2')
const Filter_Sports3 = document.getElementById('Filter_Sports_btn3')
const Filter_Sports4 = document.getElementById('Filter_Sports_btn4')
const Filter_Sports5 = document.getElementById('Filter_Sports_btn5')

  const sportsBtn = [
    { element: Filter_Sports1, value: 'tennis' },
    { element: Filter_Sports2, value: 'running' },
    { element: Filter_Sports3, value: 'lifestyle' },
    { element: Filter_Sports4, value: 'training' },
    { element: Filter_Sports5, value: 'golf' }
  ]

  function filterSports() {
    const checkedValues = sportsBtn
      .filter(checkbox => checkbox.element.checked)
      .map(checkbox => checkbox.value)

    let result = false
    ItemList.forEach((item, index) => {
      const itemElement = document.querySelector(`.item_Array_${index + 1}`)
      if (checkedValues.length === 0 || checkedValues.some(value => item.sports.includes(value))) {
        itemElement.style.display = 'block'
        result = true
      } else {
        itemElement.style.display = 'none'
      }
    })

    if (!result) {
      noFilter.style.display = 'block'
    } else {
      noFilter.style.display = 'none'
    }

  }

  sportsBtn.forEach(checkbox => {
    checkbox.element.addEventListener('change', filterSports)
  })






// ======== 색상 카테고리 필터 ========
const Filter_Color1 = document.getElementById('Filter_Color1')
const Filter_Color2 = document.getElementById('Filter_Color2')
const Filter_Color3 = document.getElementById('Filter_Color3')
const Filter_Color4 = document.getElementById('Filter_Color4')

  const colorBtn = [
    { element: Filter_Color1, value: 'red' },
    { element: Filter_Color2, value: 'blue' },
    { element: Filter_Color3, value: 'green' },
    { element: Filter_Color4, value: 'yellow' },
  ]

  function filterColors() {
    const checkedValues = colorBtn
      .filter(checkbox => checkbox.element.checked)
      .map(checkbox => checkbox.value)

    let result = false
    ItemList.forEach((item, index) => {
      const itemElement = document.querySelector(`.item_Array_${index + 1}`)
      if (checkedValues.length === 0 || checkedValues.some(value => item.color.includes(value))) {
        itemElement.style.display = 'block'
        result = true
      } else {
        itemElement.style.display = 'none'
      }
    })

    
    if (!result) {
      noFilter.style.display = 'block'
    } else {
      noFilter.style.display = 'none'
    }

  }

  colorBtn.forEach(checkbox => {
    checkbox.element.addEventListener('change', filterColors)
  })

  



// ======== 컬러 카테고리 필터 선택시 border 효과 ========
  const ColorFt = [
    { element: document.querySelector('label[for="Filter_Color1"]'), checkbox: document.getElementById('Filter_Color1') },
    { element: document.querySelector('label[for="Filter_Color2"]'), checkbox: document.getElementById('Filter_Color2') },
    { element: document.querySelector('label[for="Filter_Color3"]'), checkbox: document.getElementById('Filter_Color3') },
    { element: document.querySelector('label[for="Filter_Color4"]'), checkbox: document.getElementById('Filter_Color4') }
  ]
  
  ColorFt.forEach(border => {
    border.checkbox.addEventListener('change', function() {
      if (border.checkbox.checked) {
        border.element.style.border = '3px solid #000'
        border.element.style.boxSizing = 'border-Box'
      } else {
        border.element.style.border = '3px solid #fff'
        border.element.style.boxSizing = 'border-Box'
      }
    })
  })





// ======== 사이즈 카테고리 필터 ========
const Filter_Size1 = document.getElementById('Filter_Size1')
const Filter_Size2 = document.getElementById('Filter_Size2')
const Filter_Size3 = document.getElementById('Filter_Size3')
const Filter_Size4 = document.getElementById('Filter_Size4')
const Filter_Size5 = document.getElementById('Filter_Size5')
const Filter_Size6 = document.getElementById('Filter_Size6')
const Filter_Size7 = document.getElementById('Filter_Size7')
const Filter_Size8 = document.getElementById('Filter_Size8')
const Filter_Size9 = document.getElementById('Filter_Size9')

  const sizeBtn = [
    { element: Filter_Size1, value: '75S' },
    { element: Filter_Size2, value: '80S' },
    { element: Filter_Size3, value: '85S' },
    { element: Filter_Size4, value: '90S' },
    { element: Filter_Size5, value: '95S' },
    { element: Filter_Size6, value: '100S' },
    { element: Filter_Size7, value: '105S' },
    { element: Filter_Size8, value: '110S' },
    { element: Filter_Size9, value: '115S' },
  ]

  function filterSize() {
    const checkedValues = sizeBtn
      .filter(checkbox => checkbox.element.checked)
      .map(checkbox => checkbox.value)

    let result = false
    ItemList.forEach((item, index) => {
      const itemElement = document.querySelector(`.item_Array_${index + 1}`)
      if (checkedValues.length === 0 || checkedValues.some(value => item.size.includes(value))) {
        itemElement.style.display = 'block'
        result = true
      } else {
        itemElement.style.display = 'none'
      }
    })

    if (!result) {
      noFilter.style.display = 'block'
    } else {
      noFilter.style.display = 'none'
    }

  }

  sizeBtn.forEach(checkbox => {
    checkbox.element.addEventListener('change', filterSize)
  })






  
// ======== 컬러 카테고리 필터 선택시 border 효과 ========
const SizeFt = [
  { element: document.querySelector('label[for="Filter_Size1"]'), checkbox: document.getElementById('Filter_Size1') },
  { element: document.querySelector('label[for="Filter_Size2"]'), checkbox: document.getElementById('Filter_Size2') },
  { element: document.querySelector('label[for="Filter_Size3"]'), checkbox: document.getElementById('Filter_Size3') },
  { element: document.querySelector('label[for="Filter_Size4"]'), checkbox: document.getElementById('Filter_Size4') },
  { element: document.querySelector('label[for="Filter_Size5"]'), checkbox: document.getElementById('Filter_Size5') },
  { element: document.querySelector('label[for="Filter_Size6"]'), checkbox: document.getElementById('Filter_Size6') },
  { element: document.querySelector('label[for="Filter_Size7"]'), checkbox: document.getElementById('Filter_Size7') },
  { element: document.querySelector('label[for="Filter_Size8"]'), checkbox: document.getElementById('Filter_Size8') },
  { element: document.querySelector('label[for="Filter_Size9"]'), checkbox: document.getElementById('Filter_Size9') },
]

SizeFt.forEach(back => {
  back.checkbox.addEventListener('change', function() {
    if (back.checkbox.checked) {
      back.element.style.backgroundColor = '#002053'
      back.element.style.color = '#fff'
      back.element.style.border = '1px solid #002053'
      back.element.style.boxSizing = 'border-Box'
    } else {
      back.element.style.backgroundColor = '#fff'
      back.element.style.color = '#000'
      back.element.style.border = '1px solid #ccc'
      back.element.style.boxSizing = 'border-Box'
    }
  })
})









// ======== 가격 카테고리 필터 ========
const Filter_Price1 = document.getElementById('Price39')
const Filter_Price2 = document.getElementById('Price39n49')
const Filter_Price3 = document.getElementById('Price49n59')
const Filter_Price4 = document.getElementById('Price59n79')
const Filter_Price5 = document.getElementById('Price79')

const priceBtn = [
  { element: Filter_Price1, min: 0, max: 39000 },
  { element: Filter_Price2, min: 39000, max: 49000 },
  { element: Filter_Price3, min: 49000, max: 59000 },
  { element: Filter_Price4, min: 59000, max: 79000 },
  { element: Filter_Price5, min: 79000, max: Infinity }
]

function filterPrice() {
  const checkedValues = priceBtn
    .filter(checkbox => checkbox.element.checked)
    .map(checkbox => ({ min: checkbox.min, max: checkbox.max }))

  let result = false
  ItemList.forEach((item, index) => {
    const itemElement = document.querySelector(`.item_Array_${index + 1}`)
    const price = Number(item.price.replace(/[^0-9]/g, ''))
    if (checkedValues.length === 0 || checkedValues.some(value => price >= value.min && price < value.max)) {
      itemElement.style.display = 'block'
      result = true
    } else {
      itemElement.style.display = 'none'
    }
  })

  if (!result) {
    noFilter.style.display = 'block'
  } else {
    noFilter.style.display = 'none'
  }
}

priceBtn.forEach(checkbox => {
  checkbox.element.addEventListener('change', filterPrice)
})





// ======== 성별 카테고리 필터 ========
const GenderMen = document.getElementById('Gender_Men')
const GenderWomen = document.getElementById('Gender_Women')
const Unisex = document.getElementById('Gender_unisex')


const genderBtn = [
  { element: GenderMen, value: 'men' },
  { element: GenderWomen, value: 'women' },
  { element: Unisex, value: 'unisex' },
]

function filtergenders() {
  const checkedValues = genderBtn
    .filter(checkbox => checkbox.element.checked)
    .map(checkbox => checkbox.value)

  let result = false
  ItemList.forEach((item, index) => {
    const itemElement = document.querySelector(`.item_Array_${index + 1}`)
    if (checkedValues.length === 0 || checkedValues.every(value => item.gender.includes(value))) {
      itemElement.style.display = 'block'
      result = true
    } else {
      itemElement.style.display = 'none'
    }
  })

  if (!result) {
    noFilter.style.display = 'block'
  } else {
    noFilter.style.display = 'none'
  }

}

genderBtn.forEach(checkbox => {
  checkbox.element.addEventListener('change', filtergenders)
})











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
    QuickMenuUpDown.style.transition = '0.3s'
    QuickMenuUpDown.style.color = '#777'
  })

  



})
