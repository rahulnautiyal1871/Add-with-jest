function Add(str) {
  if (typeof str === "string") {
    const Arr = str.split(",");
    let l = Arr.length;
    let total = 0;
    if (l !== 2) {
      return 0;
    }
    try {
      Arr.forEach((data) => {
        let newArr = data.split("\n");
        let sum = 0;
        let newl = newArr.length;

        for (let i = 0; i < newl; i++) {
          let val = parseInt(newArr[i]);
          if (!isNaN(val)) {
            if (val < 0) {
              throw new Error("negatives not allowed");
            }
            total += val;
          }
        }
      });
    } catch (e) {
      console.log("Exception: ", e);
    }
    return total;
  } else {
    return "Invalid Parameter";
  }
}

function isString(str) {
  if (typeof str === "string") {
    return;
  }
  return 0;
}

module.exports = Add;
