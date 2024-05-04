const hre = require("hardhat");

async function main() {
  try{
    console.log("Deploying UserRegistration contract...");
    const UserRegistrationContract = await hre.ethers.getContractFactory("UserRegistration");
    const contractUser = await UserRegistrationContract.deploy();
    console.log(`UserRegistration Contract deployed to: ${contractUser.target}`);

    console.log("Deploying DocumentStorage contract...");
    const DocumentStorageContract = await hre.ethers.getContractFactory("DocumentStorage");
    const contractDocument = await DocumentStorageContract.deploy();
    console.log(`DocumentStorage Contract deployed to: ${contractDocument.target}`);

  }catch(error){
    console.error(error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
