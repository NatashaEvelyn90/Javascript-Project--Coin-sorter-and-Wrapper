//TODO Create and define variables to store the number of each coin
//* These are the actual coin values
let penny = .01;
let nickel = .05;
let dime = .10;
let quarter = .25;

let coinAmt = prompt("How many coins do you have that need wrapping today?"); 
//! 200 is the number given to us by our instructor to use
//* However, if you would like to, you can put whatever amount of coins  in the prompt and it will tell you an answer. 

//TODO Calculate the total value of the coins
let pennies = penny * coinAmt;
// console.log(`$${pennies.toFixed(2)} total`);
let nickels = nickel * coinAmt;
// console.log(`$${nickels.toFixed(2)} total`);
let dimes = dime * coinAmt;
// console.log(`$${dimes.toFixed(2)} total`);
let quarters = quarter * coinAmt;
// console.log(`$${quarters.toFixed(2)} total`);

//TODO calculate the combined total value of all coins
let moneyPlease = pennies + nickels + dimes + quarters;


//TODO create a coin sorter and see how many wrappers are needed.
//! These are how many coins are needed PER wrapper. 
let wrapper = {
    pen: 50,
    nic: 40,
    dim: 50,
    qua: 40,
};

//TODO Calculate the number of wrappers needed for each type of coin
let pennyWrap = Math.floor(coinAmt / wrapper.pen);
let nickelWrap = Math.floor(coinAmt / wrapper.nic);
let dimeWrap = Math.floor(coinAmt / wrapper.dim);
let quarterWrap = Math.floor(coinAmt / wrapper.qua);

//TODO calculate the remaining coins that do not fill a wrapper
let pennyRemainder = coinAmt % wrapper.pen;
let nickelRemainder = coinAmt % wrapper.nic;
let dimeRemainder = coinAmt % wrapper.dim;
let quarterRemainder = coinAmt % wrapper.qua;

//TODO Ouput Results
console.log(`The total amount in my wallet is $${moneyPlease.toFixed(2)}`);

console.log(`Wrapper amounts needed are as follows:
    Pennies: ${pennyWrap} wrappers with ${pennyRemainder} coins remaining
    Nickels: ${nickelWrap} wrappers with ${nickelRemainder} coins remaining
    Dimes: ${dimeWrap} wrappers with ${dimeRemainder} coins remaining
    Quarters: ${quarterWrap} wrappers with ${quarterRemainder} coins remaining`);

