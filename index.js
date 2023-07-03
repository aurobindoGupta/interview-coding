(function () {
  let str = "aabbskhslfglljjjjw";
  let flag;
  for (let i = 0; i < str.length; i++) {
    let count = 0;

    if (str[i] !== flag) {
      for (let k = 0; k < str.length; k++) {
        if (str[i] === str[k]) {
          count += 1;
          if (count > 1) {
            flag = str[i];
           
          }
        }
      }

      console.log(str[i], "=", count);
    }
  }
})();
