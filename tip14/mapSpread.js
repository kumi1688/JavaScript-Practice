function sortByKey(a, b) {
  //오름차순
  return a[0] > b[0] ? 1 : -1;
}
function getSortedAppliedFilters(filters) {
  const applied = [...filters] // 맵을 배열로 변환
    .sort(sortByKey) // 배열을 정렬
    .map(([key, value]) => {
      // 배열에 담긴 키-값 쌍을 '키:값' 형식의 문자열로 변환
      return `${key}:${value}`;
    })
    .join(", "); // 배열의 항목을 연결해서 문자열을 만듬
  return `선택한 조건은 ${applied} 입니다`; // 템플릿 리터럴을 이용해서 다른 정보와 함께 문자열로 병합한다
}

function getAppliedFilters(filters) {
  const applied = [...filters].map(([key, value]) => {
    return `${key}:${value}`;
  });
  return `선택한 조건은 ${applied.join(", ")} 입니다`;
}

module.exports = {
  getAppliedFilters,
  getSortedAppliedFilters,
};
