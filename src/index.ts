// 請介紹兩個字串方法跟數字方法

//字串 I
//localeCompare()方法返回一個數字，該數字指示參考字符串在排序順序之前還是之後或與給定字符串相同。
var a = 'réservé'; // with accents, lowercase
var b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, 'en', {sensitivity: 'base'}));
// expected output: 0

//字串 II
//padEnd()方法使用給定的字符串（如果需要，重複）填充當前字符串，以使結果字符串達到給定的長度。從當前字符串的末尾開始應用填充。
const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));
// expected output: "200  "

//數字 I
//toExponential() method 用來將數字轉成「科學記數法」格式。
var numObj = 77.1234;

console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1

//數字 II
//toFixed() 方法會使用定點小數表示法（fixed-point notation）來格式化數字。
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  
  console.log(financial(123.456));
  // expected output: "123.46"
  
  console.log(financial(0.004));
  // expected output: "0.00"
  
  console.log(financial('1.23e+5'));
  // expected output: "123000.00"
  

// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money < 40000) {
    console.log('要哭窮');
} else {
   (limit > 500000)
    console.log('快叫幾聲乾爹聽聽');
}