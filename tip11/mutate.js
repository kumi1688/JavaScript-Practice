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

// problem.js 해답편
// const newBook = Object.assign(defaults, book);
// console.log(newBook);

// Object.assign은 원본 객체를 조작한다
// console.log(defaults);

// 해결법은 Object.assign 의 첫번째 인수에 빈 객체를 집어넣는 것이다
console.log(Object.assign({}, defaults, book));
console.log(defaults);
