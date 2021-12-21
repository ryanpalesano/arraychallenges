// Array Reverse
// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


//! below is how the solution video solved this challenge.

// function reverse(arr) {
//     var left = 0;
//     var right = arr.length - 1;
//     while(left < right) {
//         var temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
//     return arr;
// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]