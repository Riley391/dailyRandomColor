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
  const hueDec = parseInt(colorSeed.toString().substring(0, 3));
  const satDec = parseInt(colorSeed.toString().substring(3, 6));
  const litDec = parseInt(colorSeed.toString().substring(6, 9));
  const hue = Math.trunc((hueDec / 999) * 359);
  const sat = Math.trunc((satDec / 999) * 100);
  const lit = Math.trunc((litDec / 999) * 100);
  const result = `hsl(${hue}, ${sat}%, ${lit}%)`;
  return result;
};

const dailyColor = randomColorFromDate();

const body = document.querySelector("body");
body.style.backgroundColor = dailyColor;
