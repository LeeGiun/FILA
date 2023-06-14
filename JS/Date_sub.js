const ItemList = [

/* filter */

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
  },
  {
    id: "item_arr_img2",
    category: ["공용"],
    itemName: "컴포트핏 인터내셔널 반팔 카라티",
    price: "69,000원",
    src: "./images/Item_Arr/2.jpeg",
    color: ["beige"],
    cateAll: ["T_shirt"],
    sports: ["lifestyle"],
    size: ["95S", "100S", "105S",],
    gender: ["unisex"]
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },

]

export default ItemList