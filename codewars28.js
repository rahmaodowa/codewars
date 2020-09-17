/*Write a function that rearranges an integer into its largest possible value.

superSize(123456) //654321
superSize(105) // 510
superSize(12) // 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.*/


function superSize(num){
    var a = num.toString().split("");
    a.sort(function(x, y) {if (parseInt(x) > parseInt(y)) {return 1;} return -1;});
    a.reverse()
    return parseInt(a.join(""))
}
