const { ethers } = require("hardhat");

// Create a new event listener
const eventListener = async () => {
  // Get the contract ABI
//   const abi = await ethers.getContractFactory("UserRegistration").then(factory => factory.abi);

  const factory = await ethers.getContractFactory("UserRegistration");
  const abi = factory.abi;

  const contractAddress = "0x605ceeD3E79b151D3E6eCEab3b199C8A8134F88e";
  // Create a new contract instance
//   const contract = new ethers.Contract(contractAddress, abi);
  const contract = new ethers.Contract(contractAddress, abi, signer || provider); // Use a signer or provider for transactions

  // Listen for the "MyEvent" event
  contract.on("UserRegistered", (user, name, isVerified) => {
    // Do something with the event data
    console.log("User Registered:");
    console.log(" - Address:", user);
    console.log(" - Name:", name);
    console.log(" - Verified:", isVerified);
    // console.log(`Received event: ${sender} ${value}`);
  });
};

// Start the event listener
eventListener();