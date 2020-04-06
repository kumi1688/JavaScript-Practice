const sections = ["shipping"];

// 해당 문제는 shipping을 포함하고 있지만 실제 반환되는 index는 0이기 때문에 거짓 값을 반환하게 된다
function displayShipping(sections) {
  if (sections.indexOf("shipping")) {
    return true;
  }
  return false;
}
console.log(displayShipping(sections));
