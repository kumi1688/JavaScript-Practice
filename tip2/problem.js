// let은 재할당 할 수 있다 하지만 block scope이다

// 다음은 가장 저렴한 상품을 찾는 코드
// 최저가를 찾기 위해 간닪나 세가지 검사를 거칩니다
// 1. 재고가 없으면 0을 반환
// 2. 어떤 상품이 할인 중이고 재고가 있다면 할인 가격을 반환
// 3. 어떤 상품이 할인 중이 아니거나 할인 중이라도 할인 상품의 재고가 없다면 정상 가격을 반환

// 다음은 테스트 케이스
// 0을 반환
const item1 = {
  inventory: 0,
  price: 3,
  salePrice: 0,
  saleInventory: 0
};

// 할인 가격 반환
const item2 = {
  inventory: 3,
  price: 3,
  salePrice: 2,
  saleInventory: 1
};

// 정상 가격 반환
const item3 = {
  inventory: 3,
  price: 3,
  salePrice: 2,
  saleInventory: 0
};

console.log(getLowestPrice(item1));
console.log(getLowestPrice(item2));
console.log(getLowestPrice(item3));
