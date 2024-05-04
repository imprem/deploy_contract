require("@nomicfoundation/hardhat-toolbox");

// const metamask_private_key = "0xae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f";
//0x9a3DBCa554e9f6b9257aAa24010DA8377C57c17e
module.exports = {
  solidity: "0.8.24",

   networks: {
     besuprivate:{
       url: "http://localhost:8545",
       chainId:1337,
       accounts: ["0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63"]
     },
   },

  // networks: {
  //   pubnet:{
  //     url: "https://sepolia.infura.io/v3/6124eb36419141c0829d71c2e1cbe4e0",
  //     accounts: [metamask_private_key]
  //   },
  // },
};
