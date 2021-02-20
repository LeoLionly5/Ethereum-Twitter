Ethereum Twitter

Shengyi Zhou, Mengwei Yang, Yan Zhang, Zhimin Wang



steps & command:

npm install -g truffle@v5.1.65

npm install

truffle test (Or "truffle develop" then "test")

truffle migrate --reset --network ropsten




Contracts:
The contract is in the ./contract/TwitterFactory.sol, the functions including: 
creat, getTwitter(s), update, delete

Unit tests:
The unit tests are in the ./test/TwitterFactory.test.js
When testing, I tried directly truffle test, but I got some network issus. Then I turned to use “truffle develop” and then “test”.

We’ve created 4 tests including: creat, getTwitter, update, delete. And all of them passed.

 
 
 
 

Ropsten:
On the infura.io, we can simply defined our Ropsten. And copy the link to the truffle config file, in order to deploy the contract to the Ropsten. 
After executing “migrate --reset --network ropsten” in truffle develop, we can see that the contract have been deployed on the Ropsten sucessfully.
 
 
