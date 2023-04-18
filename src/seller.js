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
const form = document.forms["forms"];
submit_btn.addEventListener("click", (e) =>{
  r++;
    const address=document.querySelector("#address").value;

const price=document.querySelector("#price").value;

const area = document.querySelector("#area").value;
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
    e.preventDefault();
        console.log(obj);
        hello();
        // +console.log(json);
    // provider = new ethers.providers.Web3Provider(window.ethereum);
   
      main();
       
       
         
      
      // console.log(network.chainId); 
      }
    
)


async function hello(){
  const provider = new ethers.providers.Web3Provider(window.ethereum);
const network = await provider.getNetwork();
await provider.send("eth_requestAccounts", []);
const seller = provider.getSigner();
// fetch contract
// const realEstate = new ethers.Contract(reladd, RealEstate, provider);
// const totalSupply = await realEstate.totalSupply(); 
//  con = new ethers.Contract(conadd, Contract, provider);
const { expect } = require('chai');
const { ethers } = require('hardhat');
const tokens = (n) => {
   return ethers.utils.parseUnits(n.toString(), 'ether')
}}

async function main() {
  // provider = new ethers.providers.Web3Provider(window.ethereum);
  
  //Setup Account
 //  [buyer,seller] = await ethers.getSigners();

  //Deploy
  const RealEstate =await ethers.getContractFactory('RealEstate');
  const realEstate = await RealEstate.deploy();
  await realEstate.deployed();

  console.log('realEstate address' + realEstate.address);
  console.log("Mining starting");

  //Mining
  
      let transaction = await realEstate.connect(seller).mint("https://ipfs.io/ipfs/QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A/"+r+".json");
      await transaction.wait();
  
  // console.log('owner address' + await realEstate.ownerOf(realEstate.totalSupply().address)+"\n seller address"+ seller.address);
  //Deploy
  const Contract = await ethers.getContractFactory('Contract');
  const contract = await Contract.deploy(realEstate.address,seller.address);
  await contract.deployed();
   
  console.log('contract address' + contract.address);

  //Approvals
  
      transaction = await realEstate.connect(seller).approve(contract.address,r);
      await transaction.wait();
  
 transaction = await contract.connect(seller).list(r,tokens(arr[r-1].price),arr[r-1].email,arr[r-1].address,arr[r-1].arr[r-1].area);
  await transaction.wait();
  console.log(r);
  //List property
  
 //  transaction = await contract.declareBuyer(index,buyer.address);
 //  await transaction.wait();
 //  index++;
 //  transaction = await contract.connect(seller).list(index,tokens(15),"hello",'no',67);
 //  await transaction.wait();
 //  transaction = await contract.declareBuyer(index,buyer.address);
 //  await transaction.wait();
 //  index++;
 //  transaction = await contract.connect(seller).list(index,tokens(20),"hello",'no',67);
 //  await transaction.wait();
 //  transaction = await contract.declareBuyer(index,buyer.address);
 //  await transaction.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
        // createNFTFromAssetData(json,img);
//     const data = new FormData(e.target);

//    const value = Object.fromEntries(data.entries());

//     console.log({ value });
// })
// async function createNFTFromAssetData(content, options) {
    // add the asset to IPFS
    // const filePath = options //.path || 'asset.bin'
    // const basename =  path.basename(filePath)
    // const basename = filePath;
    // When you add an object to IPFS with a directory prefix in its path,
    // IPFS will create a directory structure for you. This is nice, because
    // it gives us URIs with descriptive filenames in them e.g.
    // 'ipfs://bafybeihhii26gwp4w7b7w7d57nuuqeexau4pnnhrmckikaukjuei2dl3fq/cat-pic.png' vs
    // 'ipfs://bafybeihhii26gwp4w7b7w7d57nuuqeexau4pnnhrmckikaukjuei2dl3fq'
    // const ipfsPath = '/nft/' + basename
    // const { cid: assetCid } = await this.ipfs.add({ path: ipfsPath, content })
  
    // make the NFT metadata JSON
    // const assetURI = ensureIpfsUriPrefix(assetCid) + '/' + basename
    // const metadata = await this.makeNFTMetadata(assetURI, options)
  
    // add the metadata to IPFS
    // const { cid: metadataCid } = await this.ipfs.add({ 
    //   path: '/nft/metadata.json', 
    //   content: JSON.stringify(metadata)
    // })
    // const metadataURI = ensureIpfsUriPrefix(metadataCid) + '/metadata.json'
  
    // get the address of the token owner from options, 
    // or use the default signing address if no owner is given
    
      //   ownerAddress = await this.defaultOwnerAddress()
      // console.log(metadataURI);
    
      // mint a new token referencing the metadata URI
    //   const tokenId = await this.mintToken(ownerAddress, metadataURI)
    
      // format and return the results
    //   return {
    //     tokenId,
    //     metadata,
    //     assetURI,
    //     metadataURI,
    //     assetGatewayURL: makeGatewayURL(assetURI),
    //     metadataGatewayURL: makeGatewayURL(metadataURI),
    //   }
    //}
   
    