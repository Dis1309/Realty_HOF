require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports ={
  solidity: "0.8.17",
  networks:{
    hardhat :{},
    polygon_mumbai:{
      url:"https://polygon-mumbai.g.alchemy.com/v2/Gc_VlMr5WTe57ynQps7sKYAEFoqIqxfY",
      accounts: [`0x${"e640df6bd6fde686b64a74304ac8ba636106a546401afbb5dcb0899e85403110"}`]
    }
  },
  gasPrice:200 ,
}