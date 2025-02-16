/*
TODO:
make default colors for certain dates (i.e. pink for valentine's day, green for st. patty's day etc.)
*/

const genDateString = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return day + month + year;
};

const randomColorFromDate = () => {
  const colorSeed = genDateString();

  /*
  declare hexString as "#"
  get two random numbers from colorSeed
  redPercent = divide those numbers by 31
  make sure redPercent is between 0 and 1
  redNumber = multiply redPercent by 256
  convert redNumber to hexCode
  add redNumber to hexString
  repeat for green and blue
  */
};

console.log("Hello World"[4]);
