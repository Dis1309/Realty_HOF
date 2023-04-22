const continue_btn = document.querySelector("#continue_btn");
const personal_info = document.querySelector("#personal_info");
const property_info = document.querySelector("#property_info");
const back_btn = document.querySelector("#back_btn");
const submit_btn = document.querySelector("#submit_btn");
continue_btn.addEventListener("click", () => {
  personal_info.style.display = "none";
  property_info.style.display = "block";
});

back_btn.addEventListener("click", () => {
  personal_info.style.display = "block";
  property_info.style.display = "none";
});
submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const ph_number = document.querySelector("#ph_number").value;
  const city = document.querySelector("#city").value;
  const min_price = document.querySelector("#min_price").value;
  const max_price = document.querySelector("#max_price").value;
  const room_count = document.querySelector("#bedroom_count").value;
  const foot_size = document.querySelector("#foot_size").value;
  console.log(name);
  console.log(email);
  console.log(ph_number);
  console.log(city);
  console.log(min_price);
  console.log(max_price);
  console.log(room_count);
  console.log(foot_size);
});


const conadd = "0x3eb6f73Bf5b028720F5738341D678f32AA49Ea63";
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
        "internalType": "string",
        "name": "_amenities",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_sqfoot",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_bedno",
        "type": "uint256"
      },
      {
        "internalType": "string[]",
        "name": "_img",
        "type": "string[]"
      },
      {
        "internalType": "string",
        "name": "_descp",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_purchasePrice",
        "type": "uint256"
      }
    ],
    "name": "list1",
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
        "internalType": "string",
        "name": "_city",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_country",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_addline",
        "type": "string"
      }
    ],
    "name": "list2",
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
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_proptype",
        "type": "string"
      }
    ],
    "name": "list3",
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
    "name": "meta1",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
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
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "meta2",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
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
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "meta3",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
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
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "phoneno",
        "type": "string"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "city",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "country",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "addline",
            "type": "string"
          }
        ],
        "internalType": "struct Contract.adds",
        "name": "adds",
        "type": "tuple"
      },
      {
        "internalType": "string",
        "name": "proptype",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "amenities",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "sqfoot",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "bedno",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "descp",
        "type": "string"
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
        "name": "_nftID",
        "type": "uint256"
      }
    ],
    "name": "pr",
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
    console.log(signer);
    
    console.log(con);
    //fetching data
    let index = await con.store();
    console.log(index);
    for(var i=0;i<index;i++){
    let mail = await con.meta1(i+1);
    f.push(mail);
    mail = await con.meta2(i+1);
    f.push(mail);
    mail = await con.meta1(i+1);
    f.push(mail);
    arr.push(f);
    }
    
    console.log(arr);
    for(var i=0;i<index;i++){
    let price = await con.pr(i);
    arrp.push(price);
    }
    const tokens = (n) => {
      return ethers.parseUnits(n.toString())
    }

//using buy 
async function hello (r) {
    let transaction = await con.declareBuyer(r,signer);
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
}
//using cancel sale

let bubutton=document.querySelector("#sale-btn");
bubutton.addEventListener("click",async()=>{
  let transaction = await con.cancelSale(1); 
})