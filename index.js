// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
// a is not an array. b is an array

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0;i<a.length;i++) {
    a[i] *=2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
switch(n){
    case 1:
        console.log('Red Green White Black');
        break;
    case 2:
        console.log('Red+Green+White+Black');
        break;
    case 3:
        console.log('Red,Green,White,Black');
        break;
    default:
        continue;
}


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var sorted = a.sort((a, b) => {  
  return b - a;
})
console.log(sorted);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var b = {};
var item;
for(var i=0; i<a.length; i++){
    if(b[a[i]] == undefined){
        b[a[i]] = 0;
    }
    b[a[i]]+=1;
}
var freq,max=0;
for (item in b){
    if(b[item] > max){
        freq = item;
    }
}
console.log(freq);
