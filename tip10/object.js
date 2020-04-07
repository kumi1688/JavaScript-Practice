// 객체는 정적인 데이터를 표현하기 적합하다
// 계속해서 갱신, 반복, 대체, 정렬해야 할 정보에는 적절하지 않다
const colors = {
  red: "#d10202",
  green: "#19d836",
  blue: "#0e33d8",
};

// 데이터를 매번 같은 방식으로 설정하고 사용하는 것
// 객체를 전달 받는 함수가 객체의 구조를 미리 알고 있다면 쓰기 편하다

function getBill(item) {
  return {
    name: item.name,
    due: twoWeeksFromNow(),
    total: calculateTotal(item.price),
  };
}

const bill = getBill({
  name: "객실 청소",
  price: 30,
});

function displayBill(bill) {
  return `${bill.name} 비용은 ${bill.total} 달러이며 납부일은 ${bill.due} 입니다`;
}
