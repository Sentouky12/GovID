// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  wallet = await ethers.getSigners();


  const TheId= await ethers.getContractFactory('EIPCreatorBadge');
  console.log('Deploying EIPCreatorBadge. . .');
  const ID=await TheId.deploy();
  await ID.deployed();
  console.log('EIPCreatorBadge deployed to: ', ID.address);
     




}
//npx hardhat run --network localhost scripts/Deploy.js
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
