const book = ["Reasons and Persons", "Derek Parfit", 19.99];
function formatBook(title, author, price) {
  return `${title} by ${author} $${price}`;
}

// 함수에 어떻게 정보를 전달할 수 있을까?
// 기본적인 방법
console.log(formatBook(book[0], book[1], book[2]));

// 두번째 방법
// 매개변수는 인수의 목록이므로 펼침 연산자를 활용하면 배열을 인수 목록으로 빠르고 쉽게 변환할 수 있다
// 책에 대한 정보의 양이 바뀌었을 때에도 코드를 고치지 않아도 된다
console.log(formatBook(...book));

// 전개 구문을 이용하면 인수 여러개를 하나의 변수에 담을 수 있다.
