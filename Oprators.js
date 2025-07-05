//Arithematic Oprators
var a=10;
var b=20;
console.log('Arithematic Oprators')
console.log('Value of A:',a)
console.log('Value of B:',b)
console.log('Addition:',a+b)
console.log('Substraction :',a-b)
console.log('Multiplication:',a*b)
console.log('Division:',a/b)
console.log('Modulus (Remainder):',a%b)
console.log('Increment of A:',++a)
console.log('Decrement of B:',--b)
console.log('Exponentiation(Power):',a**b)

//Assignment Oprators
var c=50;
console.log('Assignment  Oprators')
console.log('Value of C:',c)
console.log('Addition assignment :',c+=10)
console.log('Subtraction assignment:',c-=10)
console.log('Multiplication assignment:',c*=3)
console.log('Division assignment :',c/=5) //
console.log('Modulus assignment:',c%=5) //
console.log('Exponentiation assignment:',c**=2)//

//Comparision Oprators
var d=10;
const e=20;
let age =20
let result=(age>=18)?'Adult':'Minor'
console.log('Result:',result)
console.log('Compariision Oprators')
console.log('Value of D:',d)
console.log('Value of E:',e)
console.log('Equal to (d==e)',d==e)
console.log('Strict equal to (d===e)',d===e)
console.log('Not equal to (d!=e)',d!=e)
console.log('Strict not equal to (d!==e)',d!==e)
console.log('Greater than (d>e)',d>e)
console.log('Less than (d<e)',d<e)
console.log('Greater than or equal to (d>=e)',d>=e)
console.log('Less than or equal to (d<=e)',d<=e)

//Logical Oprators
var f=10
var g=100
console.log('Logical Oprators')
console.log('Value of F:',f)
console.log('Value of G:',g)
console.log('F is Greater than or Equals to 10 And less than G(Logical And):',f>=10 && f<g)
console.log('F is Greater than or Equals to 10 Or less than G(Logical OR):',f>=10 ||f<g)
console.log('G is Not Less Than f(Logical Not):',!g<f)

//BitWise Operators
var h=10
console.log('Bitwise Oprators')
console.log('Value of H:',h)
console.log('Bitwise AND',h&2)
console.log('Bitwise Or',h|2)
console.log('Bitwise Not',~h)
console.log('Bitwise XOR',h^2)
console.log('Bitwise Left Shift',h<<1)
console.log('Bitwise Right Shift',h>>1)
console.log('Bitwise Zero Fill Right Shift',h>>>1)

// String Operators
var string1='Khushabu'
var string2='Baraskar'
console.log('String Oprators')
console.log('String 1:',string1)
console.log('String 2:',string2)
console.log('Concatnation:',string1+string2)
console.log('Concatenation assignment',string1+=string2)


// Ternary Operator (Conditional Operator)
var i=10
console.log('Ternary Oprators')
console.log('Value of I:',i)
console.log('I is 10 :',i==10?'True':'False')
console.log('I is 60 :',i==60?'True':'False')

//Type Oprators
var num=17
let name='Khushabu'
console.log('Type Operators')
console.log('Num:',num)
console.log('Name:',name)
console.log('Type of Num:',typeof num)
console.log('Type of Name:',typeof name)


//Task 1: Calculating Salary with Bonus 
var bonus=10000
var Salary=80000
console.log('Your Salary with Bonus:',bonus+Salary)

//Task 2: Calculate Percentage with Bonus
var totalMarks=800
var marks =600
var Percentage=(100*marks)/totalMarks
console.log('Percentage:',Percentage)
