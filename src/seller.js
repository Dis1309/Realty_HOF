// import { ethers } from "hardhat";

console.log(ethers);
// import  ether  from 'hardhat';
// let obj={};let arr = [];let r =0;
// const submit_btn = document.querySelector("#submit_btn");
// const form = document.forms["forms"];
// submit_btn.addEventListener("click", (e) =>{
//   r++;
//     const address=document.querySelector("#address").value;

// const price=document.querySelector("#price").value;

// const area = document.querySelector("#area").value;
// obj.address = address;
// obj.price=price;
// obj.area=area;
// arr.push(obj);
// e.preventDefault();
//     console.log(obj);
//     hello();
// }
    
// )
// async function hello(){
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const network = await provider.getNetwork();
//   await provider.send("eth_requestAccounts", []);
//   const seller = provider.getSigner();
  
// }
 let obj={};let arr = [];let r =0;
// import IPFS from "/home/dishad/Desktop/BLOCKCHAIN/RealState_practice/node_modules/ipfs-api/nanoid/index";
// import IPFS from './ipfs-http-client';
// import {IPFS} from "https://cdn.jsdelivr.net/npm/ipfs/dist/index.min.js";
// (async () => {
//   const src = chrome.runtime.getURL("./ipfs-http-client");
//   const contentMain = await import(src);
//   contentMain.main();
// })();

const submit_btn = document.querySelector("#submit_btn");
const form = document.forms["#forms"];
submit_btn.addEventListener("click", (e) =>{
  e.preventDefault();
  const address=document.querySelector("#address").value;

const price=document.querySelector("#price").value;

const area = document.querySelector("#area").value;
  r++;

// let img;
// const imageInput= document.getElementById("imageInput");
//                   var uploaded_image="";
//                   imageInput.addEventListener("change",function(){
//                       const reader=new FileReader();
//                       reader.addEventListener("load",()=>{
//                           uploaded_image=reader.result;
//                           document.querySelector("#display_image").style.backgroundImage=`url(${uploaded_image})`;
//                       });
//                       img = reader.readAsDataURL(this.files[0]);
//                   });
    obj.address = address;
    obj.price=price;
    obj.area=area;
    arr.push(obj);
    
        console.log(obj);
        hello();
       // hello();
        // +console.log(json);
    // provider = new ethers.providers.Web3Provider(window.ethereum);
   
     // main();
       
       
         
      
      // console.log(network.chainId); 
    }
    
)


async function hello(){
  if(!window.ethereum) {
    throw new Error("No wallet installed")
  }
  const provider = new ethers.BrowserProvider(window.ethereum)
  console.log(provider);
// const network = await provider.getNetwork();
// await provider.m
if(!ethereum) {
  throw new Error("No ethereum");
}

const signer = await provider.getSigner();
console.log(signer);
const seller= signer
// const seller = signer[0];
const cabi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_nftaddress",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_seller",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "bought",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "buyer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_buyer",
        "type": "address"
      }
    ],
    "name": "declareBuyer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "isListed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_purchasePrice",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_location",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_phnu",
        "type": "uint256"
      }
    ],
    "name": "list",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nftaddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "purchasePrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "retemail",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "retloc",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "retph",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "seller",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];
const rabi =[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "tokenURI",
        "type": "string"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const reladd = "0xc5a5C42992dECbae36851359345FE25997F5C42d";
const conadd = "0x67d269191c92Caf3cD7723F116c85e6E9bf55933";
const privatekey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
  

// const RealEstate =await ethers.getContractFactory('RealEstate');
//     const realstate = await RealEstate.deploy();
//     await realstate.deployed();
// fetch contract
const realEstate = new ethers.Contract(reladd, rabi, provider);

const con = new ethers.Contract(conadd, cabi, seller);
console.log(con);
console.log(seller);
// const tokens = (n) => {
//    return ethers.utils.parseUnits(n.toString(), 'ether')
// }}
const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}
let transaction = await realEstate.connect(seller).mint("https://ipfs.io/ipfs/QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A/"+r+".json");
console.log(await realEstate.ownerOf(r));
// const totalSupply = await realEstate.totalSupply(); 
//          await transaction.wait();
transaction = await realEstate.connect(seller).setApprovalForAll(conadd,r);
// await transaction.wait();
 transaction = await con.connect(seller).list(r,price,email,address,area);
// await transaction.wait();
// async function main() {
//   // provider = new ethers.providers.Web3Provider(window.ethereum);
  
//   //Setup Account
//  //  [buyer,seller] = await ethers.getSigners();

//   //Deploy
//   const RealEstate =await ethers.getContractFactory('RealEstate');
//   const realEstate = await RealEstate.deploy();
//   await realEstate.deployed();

//   console.log('realEstate address' + realEstate.address);
//   console.log("Mining starting");

//   //Mining
  
//       let transaction = await realEstate.connect(seller).mint("https://ipfs.io/ipfs/QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A/"+r+".json");
//       await transaction.wait();
  
//   // console.log('owner address' + await realEstate.ownerOf(realEstate.totalSupply().address)+"\n seller address"+ seller.address);
//   //Deploy
//   const Contract = await ethers.getContractFactory('Contract');
//   const contract = await Contract.deploy(realEstate.address,seller.address);
//   await contract.deployed();
   
//   console.log('contract address' + contract.address);

//   //Approvals
  
//       transaction = await realEstate.connect(seller).approve(contract.address,r);
//       await transaction.wait();
  
//  transaction = await contract.connect(seller).list(r,tokens(arr[r-1].price),arr[r-1].email,arr[r-1].address,arr[r-1].arr[r-1].area);
//   await transaction.wait();
//   console.log(r);
//   //List property
  
//  //  transaction = await contract.declareBuyer(index,buyer.address);
//  //  await transaction.wait();
//  //  index++;
//  //  transaction = await contract.connect(seller).list(index,tokens(15),"hello",'no',67);
//  //  await transaction.wait();
//  //  transaction = await contract.declareBuyer(index,buyer.address);
//  //  await transaction.wait();
//  //  index++;
//  //  transaction = await contract.connect(seller).list(index,tokens(20),"hello",'no',67);
//  //  await transaction.wait();
//  //  transaction = await contract.declareBuyer(index,buyer.address);
//  //  await transaction.wait();
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
//         // createNFTFromAssetData(json,img);
// //     const data = new FormData(e.target);

// //    const value = Object.fromEntries(data.entries());

// //     console.log({ value });
// // })
// // async function createNFTFromAssetData(content, options) {
//     // add the asset to IPFS
//     // const filePath = options //.path || 'asset.bin'
//     // const basename =  path.basename(filePath)
//     // const basename = filePath;
//     // When you add an object to IPFS with a directory prefix in its path,
//     // IPFS will create a directory structure for you. This is nice, because
//     // it gives us URIs with descriptive filenames in them e.g.
//     // 'ipfs://bafybeihhii26gwp4w7b7w7d57nuuqeexau4pnnhrmckikaukjuei2dl3fq/cat-pic.png' vs
//     // 'ipfs://bafybeihhii26gwp4w7b7w7d57nuuqeexau4pnnhrmckikaukjuei2dl3fq'
//     // const ipfsPath = '/nft/' + basename
//     // const { cid: assetCid } = await this.ipfs.add({ path: ipfsPath, content })
  
//     // make the NFT metadata JSON
//     // const assetURI = ensureIpfsUriPrefix(assetCid) + '/' + basename
//     // const metadata = await this.makeNFTMetadata(assetURI, options)
  
//     // add the metadata to IPFS
//     // const { cid: metadataCid } = await this.ipfs.add({ 
//     //   path: '/nft/metadata.json', 
//     //   content: JSON.stringify(metadata)
//     // })
//     // const metadataURI = ensureIpfsUriPrefix(metadataCid) + '/metadata.json'
  
//     // get the address of the token owner from options, 
//     // or use the default signing address if no owner is given
    
//       //   ownerAddress = await this.defaultOwnerAddress()
//       // console.log(metadataURI);
    
//       // mint a new token referencing the metadata URI
//     //   const tokenId = await this.mintToken(ownerAddress, metadataURI)
    
//       // format and return the results
//     //   return {
//     //     tokenId,
//     //     metadata,
//     //     assetURI,
//     //     metadataURI,
//     //     assetGatewayURL: makeGatewayURL(assetURI),
//     //     metadataGatewayURL: makeGatewayURL(metadataURI),
//     //   }
//     //}
} 