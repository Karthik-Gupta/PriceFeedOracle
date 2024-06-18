import { ethers } from "hardhat";

// Importing required modules and libraries from the ethers.js library.
import { Contract, ContractFactory } from "ethers";

import priceOracleProxy from "../utils/PriceoracleProxy.json";

async function main() {
    const [owner] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${owner.address}`);

    const factory = new ContractFactory(
      priceOracleProxy.abi,
      priceOracleProxy.bytecode,
      owner
    );

    const contract = await factory.deploy(owner);
    const oracleAddress = await contract.getAddress();
    
    console.log(`Oracle deployed to ${oracleAddress}`);
}

// Executing the main function and handling possible outcomes.
main()
  .then(() => process.exit(0)) // Exiting the process if deployment is successful.
  .catch((error) => {
    console.error(error); // Logging any errors encountered during deployment.
    process.exit(1); // Exiting the process with an error code.
  });
