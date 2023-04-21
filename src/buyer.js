// const { ethers } = require("ethers");

// import ethers  from "ethers";
console.log(ethers);var r =0 ; let obj={}; let arr =[]; let arr1 =[];
// let sort=document.querySelector("#sort");
sort.addEventListener("click",()=>{
    let price=document.querySelector("#price").value;
let locati=document.querySelector("#locati").value;
let are = document.querySelector('#area').value;
var  description=document.querySelector("#description");
    r++;
    hello(r);

    description.innerHTML +=`Price: ${price} Area: ${are} Location: ${locati}`;
    // description.innerHTML="Price: "+price;
})
// function showInfo(){
// let price=document.querySelector("#price").value;
// let locati=document.querySelector("#locati").value;
// let are = document.querySelector('#area').value;
// var  description=document.querySelector("#description");

//      hello();
//     description.innerHTML +=`Price: ${price} Area: ${are} Location: ${locati}`;
//     // description.innerHTML="Price: "+price;
    
// }
const conadd = "0x4C4a2f8c81640e47606d3fd77B353E87Ba015584";
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
          }
        ],
        "name": "cancelSale",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "inputs": [],
        "name": "index",
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
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_nftID",
            "type": "uint256"
          }
        ],
        "name": "listed",
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
          }
        ],
        "name": "meta",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
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
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "metadata",
        "outputs": [
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "phnu",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
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
        "name": "retprice",
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
        "inputs": [],
        "name": "store",
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
        "stateMutability": "payable",
        "type": "receive"
      }
    ];
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const  con = new ethers.Contract(conadd,cabi,signer);
async function hello (r) {
    console.log(signer);
    
    console.log(con);
    let transaction = await con.declareBuyer(r,signer);
    let index = await con.store();
    console.log(index);
    for(var i=0;i<index;i++){
    let mail = await con.meta(i+1);
    arr.push(mail);
    }
    
    console.log(arr);
    const tokens = (n) => {
      return ethers.parseUnits(n.toString())
    }
    await signer.sendTransaction({to: conadd,value: tokens(3),gasLimit: 60000});
    let b = await con.getBalance();
    console.log(b);
    let result = await con.connect(signer).bought(r,{value: tokens(1)});
    console.log(result);
     b = await con.getBalance();
    console.log(b);
    for(var i=0;i<index;i++){
      let mail = await con.listed(i+1);
      arr1.push(mail);
      }
      console.log(arr1);
    // for(var i =0;i<index;i++){
    //   let mail = await con.store(i+1);
    // // }

    
    // let sortbutton = document.querySelector("sort");
    // sortbutton.addEventListener("click",()=>{
    //   if(locati =obj.r.location){
    //     console.log(obj.r);
    //   }
    //   else{
    //     alert("no such house available");
    //   }
    //})
    
}

let bubutton=document.querySelector("#sale-btn");
bubutton.addEventListener("click",async()=>{
  let transaction = await con.cancelSale(1); 
})

// let sortbutton=document.querySelector("#sort");
// sortbutton.addEventListener("click",()=>{

// })

