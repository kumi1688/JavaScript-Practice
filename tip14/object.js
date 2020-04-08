const filters = {
  색상: "검정색",
  견종: "래브라도레트리버",
};

function getAppliedFilters(filters) {
  // 객체의 key를 배열로 변환
  const keys = Object.keys(filters);
  const applied = [];
  //for문으로 key를 순회함
  for (const key of keys) {
    applied.push(`${key}:${filters[key]}`);
  }
  //   console.log(applied);
  return `선택한 조건은 ${applied.join(", ")} 입니다`;
}

function getSortedAppliedFilters(filters) {
  const keys = Object.keys(filters);
  keys.sort(compare);
  const applied = [];
  for (const key of keys) {
    applied.push(`${key}:${filters[key]}`);
  }
  return `선택한 조건은 ${applied.join(", ")} 입니다`;
}

function compare(a, b) {
  if (a === b) return 0;
  // 오름차순
  return a > b ? 1 : -1;
  // 내림차순
  //   return a < b ? 1 : -1;
}

module.exports = {
  getAppliedFilters,
  getSortedAppliedFilters,
};
