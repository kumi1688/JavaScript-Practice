// 리팩토링 하기 전
function removeItem(items, removable) {
  const updated = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] !== removable) updated.push(items[i]);
  }
  return updated;
}

// 리팩토링 버전 1 splice 사용
// splice는 메서드가 원본 배열을 조작한다
function removeItem1(items, removable) {
  const index = items.indexOf(removable);
  items.splice(index, 1);
  return items;
}

// slice 메서드는 원본 배열을 조작하지 않는다
function removeItem2(items, removable) {
  const index = items.indexOf(removable);
  return items.slice(0, index).concat(items.slice(index + 1));
}

// 펼침 연산자를 활용하면 간결한 표현식으로 전환할 수 있다
function removeItem3(items, removable) {
  const index = items.indexOf(removbale);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

const books = ["vim", "moby", "tower"];
const recent = removeItem2(books, "moby");
const novels = removeItem2(books, "vim");
console.log(recent, novels);
