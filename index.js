/*
Says Hello to the person with the name you specify
*/
function sayHello(name) {
    var message = "Hello " + name;
    return message;
}
/*
console.log(
    "sayHello('Tyler') =",
    sayHello('Tyler')
);
console.log(
    "sayHello('Jake') =",
    sayHello('Jake')
);
*/


/* Write a function that says goodbye to someone */
function sayGoodbye(name) {
  var message = "Goodbye " + name;
  return message;
}


/*
say hello, but only if the persons name is Jake
*/
function onlySayHiToJake(name) {
    if( name == 'Jake') {
        // do this code if true
        var m = sayHello('Jake')
        return m;
    } else {
        var x = ""
        return x;
    }
}
/*
console.log(
    "onlySayHiToJake('Tyler') =",
    onlySayHiToJake('Tyler')
);
console.log(
    "onlySayHiToJake('Jake') =",
    onlySayHiToJake('Jake')
);
*/

/*
Compute the sum of all numbers up to the number you specify 

sumNumbersUpTo(3) == 6
sumNumbersUpTo(3) == 6 == 1 + 2 + 3
sumNumbersUpTo(10) == 55 == 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
*/
function sumNumbersUpTo(num) {
    var addnum = 0
    for(var x = 0; x <= num; x += 1) 
    {
        addnum += x;
    }
      return addnum
}
/*
console.log(
    "sumNumbersUpTo(3) =",
    sumNumbersUpTo(3)
);
console.log(
    "sumNumbersUpTo(10) =",
    sumNumbersUpTo(10)
);
*/

/*
Does the point (1, 9) satisfy the equation y = x
Does the point (3, 1) satisfy the equation y = x
Does the point ?????? satisfy the equation y = x


Does the point (5, 4) satisfy the equation y = 8x
Does the point ?????? satisfy the equation y = 8x
*/
function isXEqualToY(x, y) {
   // Does the point passed in make this equation true
    return y == 8 * x
}

function whichXMakesThisTrue() {
    // Find the value of x that makes this true
    //40 == 8 * x
    
    for(var x = 0; true; x += 1) {
        if(isXEqualToY(x, 40)) {
            return x
        }
    }
    return x
}

console.log('test: ', whichXMakesThisTrue());

/*
Print the largest item in the list provided

largestItemInList([1, 2, 3, 4]) == 4
largestItemInList([10, 100, 20, 4]) == 100
*/
function largestItemInList(list) {

}
/*
console.log(
    "largestItemInList([1, 2, 3, 4]) =",
    largestItemInList([1, 2, 3, 4])
);
console.log(
    "largestItemInList([10, 100, 20, 4]) =",
    largestItemInList([10, 100, 20, 4])
);
*/

/*
Is the number you specify in the list you specify?

isItemInList([1, 2, 3, 4], 10) == false
isItemInList([1, 2, 3, 4], 1) == true
*/
function isItemInList(list, item) {

}
/*
console.log(
    "isItemInList([1, 2, 3, 4], 10) =",
    isItemInList([1, 2, 3, 4], 10)
);
console.log(
    "isItemInList([1, 2, 3, 4], 1) =",
    isItemInList([1, 2, 3, 4], 1)
);
*/

/*
Return two lists combined together

combineLists([1, 2, 3], [4, 5, 6]) == [1, 2, 3, 4, 5, 6]
*/
function combineLists(listOne, listTwo) {

}
/*
console.log(
    "combineLists([1, 2, 3], [4, 5, 6]) =",
    combineLists([1, 2, 3], [4, 5, 6])
);
*/

/*
Translate the sentence to pig translateToPigLatin

translateToPigLatin('Hello My Name Is Tyler') == 'elloHay yMay ameNay sIay ylerTay'
*/
function translateToPigLatin(sentence) {

}
/*
console.log(
    "translateToPigLatin('Hello My Name Is Tyler') =",
    translateToPigLatin('Hello My Name Is Tyler')
);
*/

/*
Is the number passed in an even number?

isEven(100) == true
isEven(3) == false
*/
function isEven(number) {
}
/*
console.log(
    "isEven(100) =",
    isEven(100)
);
console.log(
    "isEven(3) =",
    isEven(3)
);
*/