const { expect } = require('chai');
const { ethers } = require('hardhat');
const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
    // provider = new ethers.providers.Web3Provider(window.ethereum);
    
    //Setup Account
    [seller,buyer] = await ethers.getSigners();
    // console.log(seller);

    //Deploy
    const RealEstate =await ethers.getContractFactory('RealEstate');
    const realEstate = await RealEstate.deploy();
    await realEstate.deployed();

    console.log('realEstate address' + realEstate.address);
    console.log("Mining starting");

    //Mining
    // for(var i=1;i<=3;i++){
    //     let transaction = await realEstate.connect(seller).mint("https://ipfs.io/ipfs/QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A/"+i+".json");
    //     await transaction.wait();
    // }
    // console.log('owner address' + await realEstate.ownerOf(realEstate.totalSupply().address)+"\n seller address"+ seller.address);
    //Deploy
    const Contract = await ethers.getContractFactory('Contract');
    const contract = await Contract.deploy(realEstate.address,seller.address);
    await contract.deployed();
     
    console.log('contract address' + contract.address);
    //Approvals
    // for(var i=1;i<=3;i++){
    //     transaction = await realEstate.connect(seller).approve(contract.address,i);
    //     await transaction.wait();
    // }
    // var index = 1;
    //List property
    // transaction = await contract.connect(seller).list(index,tokens(10),"hello",'no',67);
    // await transaction.wait();
    // transaction = await contract.declareBuyer(index,buyer.address);
    // await transaction.wait();
    // index++;
    // transaction = await contract.connect(seller).list(index,tokens(15),"hello",'no',67);
    // await transaction.wait();
    // transaction = await contract.declareBuyer(index,buyer.address);
    // await transaction.wait();
    // index++;
    // transaction = await contract.connect(seller).list(index,tokens(20),"hello",'no',67);
    // await transaction.wait();
    // transaction = await contract.declareBuyer(index,buyer.address);
    // await transaction.wait();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  