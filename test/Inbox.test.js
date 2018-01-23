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

let accounts;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(accounts);
  });
});