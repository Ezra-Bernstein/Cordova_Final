function redirect() {
  var rl = document.getElementById("loc").checked;
  var sent = document.getElementById("struct").checked;
  var newLink = "ImageScrewing/newind.html?topbottom=" + rl + "&struct=" + sent;
  window.location.href = newLink;
}