"use strict";

/*
let x = 25;
let n = 'Anna';
let 2userName = 'Bob';
let user-age = 30;
let User_First_Name = 'Charlie';
let імʼяКористувача = 'Дмитро';
let a1 = 100000;
let userdata = { age: 20 };
*/

// insufficient  information about variable
let number = 25;
let name = "Anna";

// Wrong variable definition: begins with number
let userName = "Bob";

// Wrong variable definition: kebab case used
let userAge = 30;

// In definition of variable used snake case with first uppercased letter
let userFirstName = "Charlie";

// In definition of variable used cyrilic symbols
let nameOfUser = "Дмитро";

// does not reveal the essence of the variable
let hundredThousend = 100_000;

// better to use camelCase
let userData = { age:20 };