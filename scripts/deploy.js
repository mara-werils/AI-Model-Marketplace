const hre = require("hardhat");

async function main() {
  console.log("Deploying contract...");

  const AIModelMarketplace = await hre.ethers.getContractFactory("AIModelMarketplace");
  
  const marketplace = await AIModelMarketplace.deploy();

  await marketplace.deployTransaction.wait();

  console.log("AIModelMarketplace deployed to:", marketplace.address);
}

main().catch((error) => {
  console.error("Error in deployment:", error);
  process.exitCode = 1;
});
