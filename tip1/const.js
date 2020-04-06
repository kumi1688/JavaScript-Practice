// const 를 활용하는 경우 개발자는 해당 항목이 상수임을 알려줄 수 있다.
function getTotalTax_const() {
  const taxRate = 0.1;
  const total = 100 + 100 * taxRate;
  return `구매 금액은 ${total} 입니다`;
}

// let을 활용하는 경우 개발자는 해당 항목이 변경될 수 있다는 것을 파악하고 추가적인 확인작업을 해야한다
function getTotalTax_let() {
  let taxRate = 0.1;
  let total = 100 + 100 * taxRate;
  return `구매 금액은 ${total} 입니다`;
}

const discountable = [];
// 아래 함수는 완벽하게 작동한다 그러니 배열을 const로 선언해도 내용이 바뀔 수 있다
function getTotalTax_constCanBeMutable(cart) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].discountAvailable) {
      discountable.push(cart[i]);
    }
  }
}
