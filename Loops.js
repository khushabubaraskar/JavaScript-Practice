//For Loop
var Names = ['Khushabu', 'Sara', 'Mansi']
for (let i = 0; i < Names.length; i++) {
    console.log('For Loop (Name):', Names[i])
}
var Cities = ['Jaysingpur', 'Sangli', 'Kolhapur']
for (let i = 0; i < Cities.length; i++) {
    console.log('For Loop (City):', Cities[i])
}

//While Loop
let i = 1
while (i <= 5) {
    console.log('While Loop:', i)
    i++
}
let k = 10
while (k <=20) {
    console.log('While Loop:', k)
    k++
}

//Do While Loop
let f = 1
do {
    console.log('Do While Loop :', f)
    f++
} while (f < 5)

//For....of Loop
const fruits = ['Mango', 'Apple', 'Banana', 'Guava']
for (const frru of fruits) {
    console.log('For of Loop:', frru)
}
//For ....in loop
const person = {
    name: 'Khushabu',
    age: 18,
    city: 'Jaysingpur'
}
for (const key in person) {
    console.log('For in Loop :', key + ':' + person[key])
}
//ForEach Loop
const Fruits = ['Mango', 'Apple', 'Banana', 'Guava', 'Pineapple']
Fruits.forEach((fruit) => {
    console.log('ForEach Loop:', fruit)
})

//Patterns
for (let m=1;m<=5;m++){
    let stars='';
    for(let n=1;n<=m;n++){
        stars+='*'
    }
    console.log(stars)
}


//
let rows=8;
for(let p=1;p<=rows;p++){
    let space='';
    let stars='';
    //Add Space
    for(let q=1;q<=rows-p;q++){
        space+=" "
    }
    //Add Statrs
    for(let l=1;l<=p;l++){
        stars+="*"
    }
    console.log(space+stars)
}

//
let n = 5;
for (let i = 1; i <= n; i++) {
    let str = '';
    let count = 1;
    for (let j = 1; j <= 2 * n; ++j) {
        if (i + j >= n + 1 && (i >= j - n + 1)) {
            // Add a space after each number
            str += count.toString() + ' ';
            count++;
        } else {
            // Add two spaces for the gap
            str += '  ';
        }
    }

    console.log(str);
}


//
let c = 5;
for (let i = 1; i <= c; i++) {
    let str = "* ";
    let space = '  ';
    console.log(space.repeat((n - i)) + str.repeat(i* 2 - 1));
}


//
let num = 5;
let pattern = "";    //pattern string
if (num > 1) {      //no star pattern for 0 or negative numbers.
    for (let i = 1; i <= num; i++) {     //first 'for loop' for horizontal lines
        for (let j = 1; j <= (num - i); j++) {    //second 'for loop' to add 'spaces' before pattern
            pattern += "  ";
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {      //third 'for loop' to add * to pattern string
            pattern += "* ";
        }
        pattern += "\n";    //new line after row completion
    }
    console.log(pattern);   //printing star to console
}
else {
    pattern = "Number must be greater than 1 to print star pattern.";
}


//
let g= 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    let space = '  ';
    console.log(space.repeat((g - i)) + str.repeat(g * 2 - 1));
}


//piramid
let row = 5;

for (let m = 0; m < row; m++) {
    let str = '';

    // spaces
    for (let n = 0; n < row - m - 1; n++) {
        str += ' ';
    }

    // stars
    for (let k = 0; k < 2 * m + 1; k++) {
        str += '*';
    }

    console.log(str);
}