const defatuls = new Map()
  .set("색상", "갈색")
  .set("견종", "비글")
  .set("지역", "캔자스");

const filters = new Map().set("색상", "검정색");

// 부수 효과를 신경쓰지 않으면 맵에 has() 메서드를 사용해 키가 존재하는지 확인한다
function applyDefaults(map, defaults) {
  for (const [key, value] of defaults) {
    if (!map.has[key]) {
      map.set(key, value);
    }
  }
}

module.exports = {
  applyDefaults,
};
