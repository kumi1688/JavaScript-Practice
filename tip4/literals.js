function greet(name) {
  return `Hi, ${name.toUpperCase()}`;
}

function leapYearConverter(age) {
  return `윤년에 태어났다면 ${Math.floor(age / 4)} 살이야`;
}

function generateLink(image, width) {
  return `https://${getProvider()}/${image}?width=${parseInt(width, 10)}`;
}

console.log(greet("Neo"));
console.log(leapYearConverter(12));
