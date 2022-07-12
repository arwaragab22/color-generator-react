function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function rgbtohex([red,green,blue]) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

export default rgbtohex;