const assert = require('assert');
const ganache = require('ganache-cli');

// first letter is uppercase because this is Constructor function
// this is defined this way by convention
const Web3 = require('web3');

// having a constructor to create a separate instance
// allows us to connect to more than one ethereum network
// from the same project (though this isn't that common)
// lowercase first letter (w) because this is the instance
const web3 = new Web3(ganache.provider());

beforeEach(() => {
  // Get a list of all accounts
  web3.eth.getAccounts()
    .then(fetchedAccounts => {
      console.log(fetchedAccounts);
    }); // Returns a promise

  // Use one of those accounts to deploy the contract
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log('blah');
  });
});
// class Car {
//   park() {
//     return 'stopped';
//   }
//   drive() {
//     return 'vroom';
//   }
// }
// // Declare variable outside so we can use it for the "it" tests
// let car;
// beforeEach(() => {
//   car = new Car();
// });
// describe('Car', () => {
//   it('can park', () => {
//     assert.equal(car.park(), 'stopped');
//   });
//   it('can drive', () => {
//     assert.equal(car.drive(), 'vroom');
//   });
// });

