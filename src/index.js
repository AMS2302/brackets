module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let bracketsPairs = {};
  bracketsConfig.forEach(element => {
    openBrackets.push(element[0]);
    bracketsPairs[element[1]] = element[0];
  });
  function checkStr(str) {
    let array = str.split('');
    let stack = [];
    for (let index = 0; index < array.length; index++) {
      const item = array[index];
      if (openBrackets.includes(item) && bracketsPairs[item] !== item) {
        stack.push(item);
      } else if (bracketsPairs[item] === item && !stack.includes(item)) {
        stack.push(item);
      } else {
        if (stack.length === 0) {
          return false;
        }
        let top = stack[stack.length - 1];
        if (bracketsPairs[item] === top) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  return checkStr(str);
}
