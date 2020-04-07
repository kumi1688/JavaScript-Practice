const cart = [
  {
    name: "The Foundation Triology",
    price: 19.99,
    discount: false,
  },
  {
    name: "Godel, Escher, Bach",
    price: 15.99,
    discount: false,
  },
  {
    name: "Red Mars",
    price: 5.99,
    discount: true,
  },
];

const reward = {
  name: "Guide to Science Fiction",
  discount: true,
  price: 0,
};

// 할인 금액을 확인하고 할인 상품이 2개 이상이면 오류 객체를 반환한다
// 만약 오류가 없다면 상품을 많이 구매한 사람에게 사은품을 준다

// 새롭게 리팩토링한 코드
function addFreeGift(cart) {
  if (cart.length > 2) {
    return [...cart, reward];
  }
  return cart;
}

function summarizeCart(cart) {
  const discountable = cart.filter((item) => item.discount);
  if (discountable.length > 1) {
    return {
      error: "할인 상품은 하나만 주문할 수 있습니다",
    };
  }
  const cartWithReward = addFreeGift(cart);
  return {
    discounts: discountable.length,
    items: cartWithReward.length,
    cart: cartWithReward,
  };
}

// 첫번째 카트는 정상적으로 진행된다
console.log(summarizeCart(cart));
// 두번째 카트 역시 정상적으로 처리된다
console.log(summarizeCart(cart));

// 배열의 앞에 추가하기
const titles = ["moby", "white"];
titles.shift("mind");
// 배열의 앞에 추가하기 - 펼침 연산자 활용
const moreTitles = ["moby", "white"];
const evenMoreTitles = ["mind", ...moreTitles];

// 배열 복사하기
const toCopy = ["moby", "white"];
const copied = toCopy.slice();
// 배열 복사하기 - 펼침 연산자 활용
const moreCopies = ["moby", "white"];
const moreCopied = [...moreCopies];
