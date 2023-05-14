import { ethers } from "hardhat";

async function main() {
    const Faucet = await ethers.getContractFactory("Faucet");
    const faucet = await Faucet.deploy('0x360FF87896DFA12f8096109408Cff5868a156C2f');

    await faucet.deployed();
    
    console.log(`Faucet for FranciscoToken deployed: ${faucet.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});