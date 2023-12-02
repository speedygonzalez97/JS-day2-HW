//Exercise #1: 

let person3 = 
{
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:
    [
        {
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
        }
    ]
}

console.log("My favorite pizzas are " + person3.pizza[0] + " and " + person3.pizza[1] + ".")

console.log("I like tacos as long they're " + person3.tacos + ".")

console.log("I love burgers from " + person3.burgers + ".")

console.log("My favorite ice creams are " + person3.ice_cream[0] + ", " + person3.ice_cream[1] + ", and " + person3.ice_cream[2] + ".")

console.log("My favorite shake parlors are " + Object.keys(person3.shakes[0]) + " and for each parlor respectively, I like " + Object.values(person3.shakes[0]) + " shakes.")


//Exercise #2:

function Person(name,age)
{
    this.name = name;
    this.age = age;

    this.printInfo = () =>
    {
        console.log(`This is ${this.name} and he's ${this.age} years old`);
    }

    this.addAge = (newAge) =>
    {
        this.age = newAge + 3;
    }
}

person_1 = new Person("Bryan", 26)
person_2 = new Person("Alex", 56)

console.log(person_1.printInfo())
console.log(person_2.printInfo())

person_1.addAge(person_1.age);

console.log(person_1.printInfo())

//Exercise #3:

let string_1 = "Hello, I'm Bryan";
let string_2 = "Hello?"

const longerThanten = (testString) => 
{
    return new Promise
    ( (resolve,reject) => 
    {
        if(testString.length >= 10)
        {
            resolve(true)
        } 
        
        else 
        {
            reject(false)
        }
    }
    )
}

longerThanten(string_1)
.then(() => 
{
    console.log(`Big word`)
}
)
.catch(() => 
{
    console.log(`Small Number`)
}
)

longerThanten(string_2)
.then(() => 
{
    console.log(`Big word`)
}
)
.catch(() => 
{
    console.log(`Small Number`)
}
)


//Codewars problems:


/*Problem #1: Write an algorithm that takes an array and moves 
all of the zeros to the end, preserving the order of the other elements.*/

testArr = [1, 0, 1, 2, 0, 1, 3];

function moveZeros(arr) {
    arr.forEach((item, index) => 
    {
        if(item === 0)
        {
            delete arr[index];
            arr.push(item);
        }
    }
    );
    arr = arr.filter(() => true);

    console.log(arr)
}

moveZeros(testArr)



//Problem #2: Find the mean (average) of a list of numbers in an array.

arr_num = [1,3,5,7];

function findAverage(nums) 
{
    let sum = 0;
    for (let i = 0; i < nums.length; i++) 
    {
      sum += nums[i];
    }
    console.log(sum / nums.length)
  }

  findAverage(arr_num)