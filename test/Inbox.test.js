const assert = require('assert');
const ganache = require('ganache-cli');

// first letter is uppercase because this is Constructor function
// this is defined this way by convention
const Web3 = require('web3');

const provider = ganache.provider();

// having a constructor to create a separate instance
// allows us to connect to more than one ethereum network
// from the same project (though this isn't that common)
// lowercase first letter (w) because this is the instance
const web3 = new Web3(provider);

const { interface, bytecode} = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['hello world'] })
    .send({ from: accounts[0], gas: '1000000' });

  inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    // validates that we get an address
    // which indicates this contract was deployed
    assert.ok(inbox.options.address);
  });
});