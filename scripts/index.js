const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const textEncodeing = require('text-encoding');
const hre = require("hardhat");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/he', async(req, res) => {
    console.log("#### inside /hello ####");

    try{
        const SimpleContract = await hre.ethers.getContractFactory("UserRegistration");

        const contractAddress = "0xc0ED63E3A70BfCB003452B1Cc083db822e1f23e1";
        const contract = await SimpleContract.attach(contractAddress);

        await contract.registerUser("om");
        console.log("user register!!!");
    }catch(error){
        console.error(error);
        process.exit(1);
    }
});

app.listen(5001, () => {
    console.log("Listning on port 5001");
})