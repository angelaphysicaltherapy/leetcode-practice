/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    //map roman numerals to integers
    const values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }


    //start a sum with the last roman numeral
    //sum each character, unless next character is of greater value, then subtract 
    let sum = values[s[s.length - 1]];
    if(!s.split("").every(el=>Object.keys(values).includes(el))){
        return "Not valid roman input."
    }
    if(s.length===0){
        return ""
    }
    for (let i = 0; i < s.length - 1; i++) {
        const current = values[s[i]];
        const next = values[s[i + 1]];
        if (current >= next) {
            sum += current;
        }
        else {
            sum -= current;
        }
    }

    return sum;
};

console.log(romanToInt(""))