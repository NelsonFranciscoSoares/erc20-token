import { ethers } from "hardhat";

async function main() {
    const FranciscoToken = await ethers.getContractFactory("FranciscoToken");
    const franciscoToken = await FranciscoToken.deploy(10000, 50);

    await franciscoToken.deployed();
    
    console.log(`Francisco Token deployed: ${franciscoToken.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;

});