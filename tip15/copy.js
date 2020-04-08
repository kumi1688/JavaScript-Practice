// 맵의 사본을 검색해서 만약 기본값에 적용된 키가 없다면 추가 적용한다
function applyDefaults(map, defaults) {
  const copy = new Map([...map]);
  for (const [key, value] of defaults) {
    if (!copy.has[key]) {
      copy.set(key, value);
    }
  }
  return copy;
}

module.exports = {
  applyDefaults,
};
