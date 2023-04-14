// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0x0E83E9221ed04eb3BFf7A322c5a2C394F9671763', BoxV2);
  console.log('Box upgraded');
}

main();