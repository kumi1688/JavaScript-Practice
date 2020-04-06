//var은 함수의 유효범위를 따른다. 따라서 함수에서 변수에 마지막으로 할당된 값을 참조한다
function addClick(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].onClick = function() {
      return i;
    };
  }
  return items;
}

const example = [{}, {}];
const clickSet = addClick(example);
console.log(clickSet[0].onClick());
