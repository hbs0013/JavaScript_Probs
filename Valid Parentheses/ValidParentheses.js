/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const charArray = [...s];
    let i = 0;
    let stack = [];
    while(i < charArray.length) {
        if (charArray[i] !== ')' && charArray[i] !== '}' && charArray[i] !== ']') {
            stack.push(charArray[i]);
        } else if(charArray[i] === ')' && stack.indexOf('(') !== -1 && stack[stack.length -1] === '(') {
            stack.splice(stack.length -1,1);
        } else if(charArray[i] === '}' && stack.indexOf('{') !== -1 && stack[stack.length -1] === '{') {
            stack.splice(stack.length -1,1);
        } else if(charArray[i] === ']' && stack.indexOf('[') !== -1 && stack[stack.length -1] === '[') {
            stack.splice(stack.length -1,1);
        } else {
            stack.push(charArray[i]);
        }
        i++;
        console.log(stack);
    }
    return stack.length > 0 ? false : true;
};