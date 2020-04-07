//기본값을 설정하면서 원래의 데이터를 유지하는 새로운 객체를 생성
// 부수 효과나 조작은 발생하지 않아야 한다

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

function addBookDefaults(book, defaults) {
  const fields = Object.keys(defaults);
  const updated = {};
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    updated[field] = book[field] || defaults[field];
  }
  return updated;
}

console.log(addBookDefaults(book, defaults));
