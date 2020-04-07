const staff = [
  {
    name: "Joe",
    years: 10,
  },
  {
    name: "Theo",
    years: 5,
  },
  {
    name: "Dyan",
    years: 15,
  },
];

function sortByYears(a, b) {
  if (a.years === b.years) return 0;
  return a.years < b.years ? 1 : -1;
}

function sortByName(a, b) {
  // 같으면 정렬 x
  if (a.name === b.name) return 0;
  // 만약 값이 양수면 오름차순, 음수면 내림차순으로 정렬
  return a.name > b.name ? 1 : -1;
}

// 아래의 함수는 배열을 정렬하긴 하지만 원본을 조작하므로 매번 정렬할 때 마다 정렬 결과가 다를 수 있다
console.log(staff.sort(sortByYears));
console.log(staff.sort(sortByName));

// 아래의 함수는 배열의 사본을 정렬하므로 원본을 조작하지 않아 정렬의 결과가 항상 동일하다
console.log([...staff].sort(sortByYears));
console.log([...staff].sort(sortByName));
