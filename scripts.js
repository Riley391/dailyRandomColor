/*
TODO:
make default colors for certain dates (i.e. pink for valentine's day, green for st. patty's day etc.)
Valentine's Day - Pink
St. Patrick's Day - Green
Christmas - Red
Halloween - Orange
April Fool's Day - True Random Color
*/

const trueRandomColor = () => {
  let result = "#";
  for (let i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * 256).toString(16);
    while (color.length < 2) {
      color = "0" + color;
    }
    result += color;
  }
  return result;
};

const defaultDates = {
  1402: "#fc71a2",
  1703: "#62e23b",
  2512: "#b70000",
  3110: "#fc71a2",
};

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
  return [hue, sat, lit];
};

const genContrastingLit = (lit) => (lit > 50 ? 25 : 75);

const dailyColorValues = randomColorFromDate();
const dailyColor = `hsl(${dailyColorValues[0]}, ${dailyColorValues[1]}%, ${dailyColorValues[2]}%)`;

const body = document.querySelector("body");
body.style.backgroundColor = dailyColor;

const colorTexts = [
  document.querySelector("#hue-text"),
  document.querySelector("#sat-text"),
  document.querySelector("#lit-text"),
];

for (const el of colorTexts) {
  el.style.color = `hsl(${dailyColorValues[0]}, ${
    dailyColorValues[1]
  }%, ${genContrastingLit(dailyColorValues[2])}%)`;
}

colorTexts[0].textContent = `Hue: ${dailyColorValues[0]}`;
colorTexts[1].textContent = `Saturation: ${dailyColorValues[1]}%`;
colorTexts[2].textContent = `Lightness: ${dailyColorValues[2]}%`;

const colorBox = document.querySelector("#color-box");
colorBox.style.boxShadow = `5px 7px hsl(${dailyColorValues[0]}, ${
  dailyColorValues[1]
}%, ${genContrastingLit(dailyColorValues[2])}%)`;
