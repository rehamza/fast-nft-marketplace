require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString();

const projectId = "k32QbfDX3TNgF0Nrszxbh1cuUA_fhwDR"

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
  mumbai: {
   url: `https://polygon-mumbai.g.alchemy.com/v2/${projectId}`,
   accounts: [privateKey]
   },
  //  mainnet: {
  //   url: `https://polygon-mainnet.g.alchemy.com/v2/${projectId}`,
  //   accounts: [privateKey]
  //  }

  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
