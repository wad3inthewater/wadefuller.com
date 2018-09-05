export default (text = "yo wade!") => {

  const div = document.createElement("p");
  div.innerHTML = text;
  return div;
}
