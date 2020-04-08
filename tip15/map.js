// 맵은 객체와 마찬가지로 하나의 키를 한 번만 사용할 수 있다
// 만약 같은 키를 추가하면 마지막에 추가된 키를 최종적으로 사용하게 된다
function applyDefaults(map, defaults) {
  return new Map([...defaults, ...map]);
}

module.exports = {
  applyDefaults,
};
