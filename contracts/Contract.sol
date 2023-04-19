//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    ) external;
}
contract Contract {
    address public nftaddress;
    address payable public seller;
    mapping(uint256 => address) public buyer;
    mapping(uint256 => uint256) public purchasePrice;
    mapping (uint256 => bool) public isListed;
    
    constructor(address _nftaddress, address payable _seller) {
        nftaddress = _nftaddress;
        seller = _seller;
    }
    struct Property {
       string  email;
       string  location;
       uint256 phnu;
    }
    mapping(uint256 => Property) internal metadata;
    modifier OnlySeller(){
        require(msg.sender == seller,"Only seller can use this method");
        _;
    }

    modifier onlyBuyer(uint256 _nftID){
        require(msg.sender == buyer[_nftID],"Only buyer can use this method");
        _;
    }
    
    function list(uint256 _nftID, uint256 _purchasePrice ,string memory _email,
       string memory _location, uint256 _phnu)public payable {
        IERC721(nftaddress).transferFrom(seller, address(this), _nftID);

        purchasePrice[_nftID] = _purchasePrice;
        isListed[_nftID] = true;
        metadata[_nftID] =  Property(_email,_location,_phnu);
        
    }
    
    function declareBuyer(uint256 _nftID, address _buyer) public {
        buyer[_nftID] = _buyer;
    }
    receive() external payable {}
    

    function bought(uint256 _nftID) public payable onlyBuyer(_nftID) {
      require(msg.value == purchasePrice[_nftID]);
     (bool success, ) = payable(seller).call{value: address(this).balance}("");

     IERC721(nftaddress).transferFrom(address(this), buyer[_nftID], _nftID);
    }

    function getBalance() public view returns(uint256) {
        return address(this).balance;
    }
    
    function retemail(uint256 _nftID) public returns(string memory) {
        return metadata[_nftID].email;
    }

    function retloc(uint256 _nftID) public returns(string memory) {
        return metadata[_nftID].location;
    }

    function retph(uint256 _nftID) public returns(uint256) {
        return metadata[_nftID].phnu;
    }
}
