

// for (let i = 1; i <= 100; i++ ) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i)
//     }
// }


// objects uses {}

// const myobj =  {}

// const myarry = [] this is how arrys are written

// const myObj = {
//     'apples': {
//         'gala': 7,
//         'red Del': 6,
//     },
//     'bananas': 7,
//     'pears': 6,
// }
// myObj.mangos = 20

// console.log(myObj)
// console.log(myObj['apples'].gala)

// ['apples'] this evaluates out to the entire apples catagory 
// if there is a space in the name you have to use the ['red Del']
//delete.myObj.mangos to delete a thing in the object


// for (let fruit in myObj) {
//     console.log(fruit)        // callse each name
//     console.log(myObj[fruit])  // calls each number of each iteam
// }

// (...myObj) is how you use the spread array it makes a copy of the array or object you place it infront of

// deconstruction of an array or object allows you to access what you change to become its own variable

// let {bananas} = myObj
// console.log(bananas)

// arrays and objects can be nested into eachother

let robot = {
    'health': 100,
    'attack': 15,
    'shield': 10,
    'laserAttack':50,
};

let bobert = {...robot}

bobert.health = 75
bobert. attack = 25
bobert. shield = 5
delete bobert.laserAttack

bobert.empAttack = 75

function attack(robo1, robo2){
    robo2.health -= robo1.attack - robo2.shield
}

while (robot.health > 0 && bobert.health > 0){
    attack(bobert, robot)
    attack(robot, bobert)
    console.log(bobert.health, robot.health)
}

console.log(robot)
console.log(bobert)
