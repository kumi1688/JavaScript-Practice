// 앞의 problem.js 의 해결 방법 1
const sections = ["contact", "shipping"];

function displayShipping(sections) {
  return sections.indexOf("shipping") > -1;
}

console.log(displayShipping(sections));

// 앞의 problem.js 의 해결 방법 2
// include는 값이 배열에 존재하는지 여부를 확인해서 boolean 값으로 true 또는 false 값으로 반환한다
function displayShipping2(sections) {
  return sections.includes("shipping");
}

console.log(displayShipping2(sections));
