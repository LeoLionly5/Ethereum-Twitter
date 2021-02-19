// const Migrations = artifacts.require("Migrations");

// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };

const Contract = artifacts.require("./TwitterFactory.sol");

module.exports = function (deployer) {
  deployer.deploy(Contract);
};