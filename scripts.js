/*
TODO:
make default colors for certain dates (i.e. pink for valentine's day, green for st. patty's day etc.)
make text always stand out
*/

const genDateString = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return day + month + year;
};

const randomColorFromDate = () => {
  let colorSeed = genDateString();
  colorSeed = (colorSeed * 1664525 + 1013904223) | 0;
  colorSeed = colorSeed >>> 0;
  while (colorSeed.toString().length < 10) {
    colorSeed *= 10;
  }
  const redDec = parseInt(colorSeed.toString().substring(0, 3));
  const greenDec = parseInt(colorSeed.toString().substring(3, 6));
  const blueDec = parseInt(colorSeed.toString().substring(6, 9));
  const redHex = Math.trunc((redDec / 999) * 255).toString(16);
  const greenHex = Math.trunc((greenDec / 999) * 255).toString(16);
  const blueHex = Math.trunc((blueDec / 999) * 255).toString(16);
  const result = "#" + redHex + greenHex + blueHex;
  return result;
};

const body = document.querySelector("body");
body.style.backgroundColor = randomColorFromDate();
