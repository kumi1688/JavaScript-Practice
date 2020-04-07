const book = {
  author: "Kang Sung Hwan",
  title: "Simplifying JavaScript",
};

// 객체 펼침 연산자는 키-값 쌍을 목록에 있는 것처럼 반환한다
// 객체 펼침 연산자는 배열  펼침 연산자와 마찬가지로 독립적으로 사용할 수 없고 객체에
// 펼쳐지게 해야한다
const update = { ...book, year: 1984 };

// 동일한 키에 서로 다른 값을  추가하면 마지막에 선언된 값을 사용한다
const update2 = { ...book, title: "Reasons & Persons" };

const defaults = {
  author: "",
  title: "",
  year: 2020,
  rating: null,
};

const book = {
  author: "Kang Sung Hwan",
  title: "Simplifying JavaScript",
};

const bookWithDefaults = { ...defaults, ...book };
