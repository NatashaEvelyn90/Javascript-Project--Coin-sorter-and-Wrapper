//TODO Create variables to store the number of each coin
let penny = .01;
let nickel = .05;
let dime = .10;
let quarter = .25;
let coinAmt = 200;

//TODO Calculate the total value of the coins
let pennies = penny * coinAmt;
console.log(`$${pennies} total`);
let nickels = nickel * coinAmt;
console.log(`$${nickels} total`);
let dimes = dime * coinAmt;
console.log(`$${dimes} total`);
let quarters = quarter * coinAmt;
console.log(`$${quarters} total`);

//TODO calculate the combined total value of all coins
let moneyPlease = pennies + nickels + dimes + quarters;
console.log(`The total amount in my wallet is $${moneyPlease}`);


//TODO create a coin sorter and see how many wrappers are needed.
let coins = prompt("How many coins do you have?");

let wrapper = [50, 40,];

let pennyWrap;
let nickelWrap;
let dimeWrap;
let quarterWrap;

for (let i = 0; i < wrapper.length; i++) {
    console.log(wrapper[i]);
    if (wrapper[i] === wrapper[0]) {
         pennyWrap = coins / wrapper[0];
    } else if (wrapper[i] === wrapper[1]) {
        nickelWrap = coins / wrapper[1];
    } else if (wrapper[i] === wrapper[0]) {
        dimeWrap = coins / wrapper [0];
    } else if (wrapper [i] === wrapper[1]) {
        quarterWrap = coins / wrapper [1];
    }
}

console.log(`penny wrappers: ${pennyWrap}, nickel wrappers: ${nickelWrap}, dime wrappers: ${dimeWrap}, quarter wrappers: ${quarterWrap}!`);