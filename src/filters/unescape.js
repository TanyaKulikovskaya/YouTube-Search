export default function unescape(str) {
  return str.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
}
