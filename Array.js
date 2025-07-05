//Array of Numbers
const Numbers = [1, 2, 3, 4, 5, 6]

//Array of Strings
const Fruits1 = ['Mango', 'Apple', 'Banana', 'Guava', 'Pineapple']

console.log(Numbers)
console.log(Numbers.length)
console.log(Numbers[4])

console.log(Fruits1)
console.log(Fruits1.length)
console.log(Fruits1[2])

//Array of Arrays 
const Emp = [
    ['John', 20],
    ['Elvish', 11],
    ['Priya', 12],
    ['Reem', 17],
]

console.log(Emp)
console.log(Emp[1][1])
console.log(Emp[2][0])

//Tasks 1:Nested Arrays 
const student = [
    ['Riya', '12', 'Jaysingpur'],
    ['Priya', '12', 'Jaysingpur'],
    ['Siya', '12', 'Jaysingpur'],
    ['Jiya', '12', 'Jaysingpur'],
    ['Piya', '12', 'Jaysingpur'],
]
console.log('Complete Information of Students')
console.log('Student 1:', student[0])
console.log('Student 2:', student[1])
console.log('Student 3:', student[1])

//Task 2:Try to upadate Mannualy values of Arrays
const Fruits = ['Mango', 'Apple', 'Banana', 'Guava', 'Pineapple']
console.log(Fruits)
console.log(Fruits[0])
Fruits[0] = 'Grapes'
console.log(Fruits[0])

//Sort Method
console.log(Fruits.sort())

//New Element Can be Added using Push
Fruits.push("Lemon");
console.log(Fruits)

//New element can be added using Length Function
Fruits[Fruits.length] = "Kivi";
console.log(Fruits)


//Create an array with 40 undefined elements:
const points = new Array(40);
console.log(points)
