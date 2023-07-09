(function () {
  let str = "abbslkhslfglajjjjw";
  let flag = {};
  for (let i = 0; i < str.length; i++) {
    let count = 0; 
    if (flag[str[i]]) {
      flag[str[i]] = flag[str[i]] + 1;
    } else {
      flag[str[i]] = 1;
    }
    

  }
  console.log({flag});
})();
