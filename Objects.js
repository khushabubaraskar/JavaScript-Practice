//Normal Object
const person = {
    name: 'Khushabu',
    age: 17,
    city: 'Jaysingpur'
}
console.log('Name:', person.name)
console.log('Age:', person.age)
console.log('City:', person.city)
console.log('Name:', person.name, 'Age:', person.age, 'City:', person.city)

//Array Object
const student = [
    {
        name: 'Khushabu',
        age: 17,
        city: 'Jaysingpur'
    },
    {
        name: 'Mahek',
        age: 13,
        city: 'Mumbai'
    },
    {
        name: 'Aradhya',
        age: 20,
        city: 'Delhi'
    },
]
console.log('Name 2:', student[1].name)
console.log(student.length)

//Nested Objects
const person1 = {
    name: 'Khushabu Baraskar',
    department: {
        name: 'IT',
        location: '2nd Floor'
    }
};
console.log('Location:', person1.department.location)

const key = 'name';
const Value = 'Khushabu Baraskar'
const obj = {
    [key]: Value
}
console.log('Value:', obj)

//Nested Objects
const college = [
    {
        name: 'SIT',
        Deparment: {
            name: 'Computer',
            Intake: 180
        }
    },
    {
        name: 'DYP',
        Deparment: {
            name: 'Electrical',
            Intake: 120
        }
    },
    {
        name: 'Goverment clg Kolhapur',
        Deparment: {
            name: 'Civil',
            Intake: 60
        }
    }
]
console.log('Department from DYP:', college[1].Deparment.name)

//Task 1:Objects in Arrays in Objects
const College = {
    person: ['Student', 'Teachers'],
    Departments: [
        {
            name: 'Computer',
            Intake: '180'
        },
        {
            name: 'Electrical',
            Intake: '200'
        },
        {
            name: 'Mechanical',
            Intake: '60'
        },
        {
            name: 'Civil',
            Intake: '100'
        },
        {
            name: 'AIML',
            Intake: '200'
        }
    ]
}

console.log('Intake of Mechanical Departments:', College.Departments[2].Intake)

//Task 2: Objects in Arrays
const Product = [
    {
        name: 'Shirt',
        price: 500
    },
    {
        name: 'Trouser',
        price: 600
    }
]
console.log('Price of Truser:', Product[1].price)