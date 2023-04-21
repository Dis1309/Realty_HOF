
//ether import
// import  ethers  from '/RealState_practice/node_modules/ethers/lib/index';
//import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.umd.min.js";
// const ethers = window.ethers.default;

//ABI
// import  RealEstate  from "./abi/RealEstate.json" assert { type: "json" };
// import  Contract  from "./abi/Contract.json" assert { type: "json" };
// const Contract = window.abi/Contract.json.default;
// const RealEstate = window.abi/RealEstate.json.default
//config
// import config from "./config.json" assert { type: "json" };
// import { provider } from "ganache";
// const config = window.config.json.default;

// import config from './config.json';
// var account = null;

// async function connected() {
//     loadblockchaindata();
//     connectHandler;
// }
// function hello (){
//   console.log("helo");
//   connected;
// }

// async function connectHandler() {
//     //gets accounts
//     const accounts = await provider.request({method:'eth_requestAccounts'});
//     account = accounts[0];
//     // if(accounts.isnotEmpty) hello = true;
// }

// async function loadblockchaindata(){
    //creates connection and allow talking
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
   

    // //network fetching
    // const network = await provider.getNetwork();

    // // fetch contract
    // const realEstate = new ethers.Contract(config[network.ChainId].realEstate, RealEstate, provider);
    // const totalSupply = await realEstate.totalSupply();
    // con = new ethers.Contract(config.contract, Contract, provider);

    // //listing home
    // homes = [];

    // for(var i =1; i<= totalSupply;i++){
    //   const uri = await realEstate.tokenURI(i);
    //   const response = await fetch(uri);
    //   const metadata = await response.json;
    //   homes.push(metadata);
    // }
    // var account;
    // //change of account
    // window.ethereum.on('accountChanged',async () => {
    //     const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
    //     account = await ethers.utils.getAddress(accounts[0]);
    //   })
//}
// let btn = document.getElementById("connect");
// const conadd ="0x5FbDB2315678afecb367f032d93F642f64180aa3"
//             const reladd ="0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
// async function hello(){
//             const provider = new ethers.providers.Web3Provider(window.ethereum);
//             const network = await provider.getNetwork();
//             await provider.send("eth_requestAccounts", []);
//             const signer = provider.getSigner();
//             // fetch contract
//             // const realEstate = new ethers.Contract(reladd, RealEstate, provider);
//             // const totalSupply = await realEstate.totalSupply();
//             // const con = new ethers.Contract(conadd, Contract, provider);
//             }
            
async function hello(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    //const network = await provider.getNetwork();
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    console.log(signer);
}