// return if the size passed on input results in a landscape or portrait
function isLandscape(w, h) {
  return w < h ? console.log("portrait") : console.log("landscape");
}

isLandscape(2160, 1080);
