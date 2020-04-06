// 전통적인 문자열 조합
function generateLink(image, width) {
  const widthInt = parseInt(width, 10);
  return "https://" + getProvider() + "/" + image + "?width=" + widthInt;
}
