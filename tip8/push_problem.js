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
function addFreeGift(cart) {
  if (cart.length > 2) {
    cart.push(reward);
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
// 두번째 카트는 이미 cart 원본이 조작되었으므로 할인 상품이 적용되지 않는다
console.log(summarizeCart(cart));
