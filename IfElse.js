//If Statement
let a = 10
if (a > 10) {
    console.log(a)
}
//If-Else Statement

//Leap Year
var year = 2025
if (year % 4 == 0) {
    console.log('2025 is Leap Year')
} else {
    console.log('2025 is not a Leap Year ')
}

//Voting 
var age = 18
if (age >= 18) {
    console.log('You Are Eligible for Voting')
}
else {
    console.log('You are not Eligible for voting')
}

//Nested If
let num = 80
if (num > 50) {
    if (num < 100) {
        console.log('Num is Greater than 50 and Less than 100')
    } else {
        console.log('Num is Greater than 100')
    }
} else {
    console.log('Num is Less than 50')
}

//Else if
let time = 'Morning'
if (time == 'Morning') {
    console.log('Good Morning')
} else if (time == 'Afternoon') {
    console.log('Good Afternoon')
} else if (time == 'Evening') {
    console.log('Good Evening')
} else {
    console.log('Good Night')
}