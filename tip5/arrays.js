// 배열은 순서를 갖기 때문에 이를 기준으로 값을 추가하거나 제거할 수 있고 모든 위치에 값이 있는지 확인할 수 있다
// 또한 배열을 정렬하여 순서를 새로 지정할 수도 있다
const team = ["Joe", "Dyan", "Bea", "Theo"];
function alphabetizeTeam(team) {
  return [...team].sort();
}
console.log(alphabetizeTeam(team));

const game1 = {
  player: "Jim Jonas",
  hits: 2,
  runs: 1,
  errors: 0
};
const game2 = {
  player: "Jim Jonas",
  hits: 3,
  runs: 0,
  errors: 1
};
const total = {};
// game1의 속성을 값으로 갖는 배열을 반환
const stats = Object.keys(game1);
// console.log(stats);
for (let i = 0; i < stats.length; i++) {
  const stat = stats[i];
  if (stat !== "player") {
    total[stat] = game1[stat] + game2[stat];
  }
}
console.log(total);

const dogPair = [
  ["name", "Don"],
  ["color", "black"]
];
function getName(dog) {
  return dog.find(attribute => {
    return attribute[0] === "name";
  })[1];
}
