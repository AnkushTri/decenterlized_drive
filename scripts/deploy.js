const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();
  await upload.deployed();

  // console.log(
  //   `Upload with ${ethers.utils.formatEther(
  //     uploadedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${upload.address}`
  // );
  console.log("Library deployed to:", upload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});