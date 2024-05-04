const hre = require("hardhat");

async function main(){
    try{
        const SimpleContract = await hre.ethers.getContractFactory("UserRegistration");

        const contractAddress = "0x2Ae4226fC69e875987fFba2fCcFEf0D2239F380A";
        const contract = await SimpleContract.attach(contractAddress);

        await contract.registerUser("Prem");
        console.log("user register!!!");
    }catch(error){
        console.error(error);
        process.exit(1);
    }
}

main();
