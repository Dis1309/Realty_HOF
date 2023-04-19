function showInfo(){
let price=document.querySelector("#price").value;
let locati=document.querySelector("#locati").value;
let are = document.querySelector('#area').value;
var  description=document.querySelector("#description");
let buyButton=document.querySelector("#buy-btn");
    description.innerHTML +=`Price: ${price} Area: ${are} Location: ${locati}`;
    // description.innerHTML="Price: "+price;
    
}


