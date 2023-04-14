require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("@nomicfoundation/hardhat-toolbox");
const key1='xxx'
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
    },
    bsctestnet: {
      url: "https://bsc-testnet.nodereal.io/v1/95a42231a53c476c8eb0de4412ad6934",
      accounts: [ key1 ,]
    }
  },
};
