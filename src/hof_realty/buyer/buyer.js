const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": '7112f3b271msh36e3c9c905f726dp1e7e11jsnc2ea975060d8'
    ,
    "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
  },
};


const continue_btn = document.querySelector("#continue_btn");
const personal_info = document.querySelector("#personal_info");
const property_info = document.querySelector("#property_info");
const back_btn = document.querySelector("#back_btn");
const submit_btn = document.querySelector("#submit_btn");
console.log(ethers);var r =0 ; let obj={}; let arr_list1=[]; let arr_list2 =[];let arr_list3 = []; let f = [];let arrp =[];
continue_btn.addEventListener("click", () => {
  personal_info.style.display = "none";
  property_info.style.display = "block";
});

back_btn.addEventListener("click", () => {
  personal_info.style.display = "block";
  property_info.style.display = "none";
});



const conadd = "0x9EEa542D08dF45f3c41B9c1C18A64D1504dD67bD";
const cabi =[
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
        "internalType": "string",
        "name": "_img",
        "type": "string"
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
        "name": "img",
        "type": "string"
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
   async function sure(){
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
    arr_list1.push(mail);
    mail = await con.meta2(i+1);
    arr_list2.push(mail);
    mail = await con.meta3(i+1);
    f.push(mail);
    arr_list3.push(f);
    }
    console.log(arr_list1);
    console.log(arr_list2);
    console.log(arr_list3);
    
    for(var i=0;i<index;i++){
    let price = await con.pr(i);
    arrp.push(price);
    }
    const tokens = (n) => {
      return ethers.parseUnits(n.toString())
    }
  }
  // sure();
//using buy 
async function hello (r) {
    let transaction = await con.declareBuyer(r,signer);
    await signer.sendTransaction({to: conadd,value: tokens(0.03),gasLimit: 600});
    let b = await con.getBalance();
    console.log(b);
    let result = await con.connect(signer).bought(r,{value: tokens(0.01)});
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

// let bubutton=document.querySelector("#sale-btn");
// bubutton.addEventListener("click",async()=>{
//   let transaction = await con.cancelSale(1); 
// })

const container2 = document.querySelector("#container2");
submit_btn.addEventListener("click", async (e) => {
  e.preventDefault();

  await sure();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const ph_number = document.querySelector("#ph_number").value;
  const city = document.querySelector("#city").value;
  const min_price = document.querySelector("#min_price").value;
  const max_price = document.querySelector("#max_price").value;
  const room_count = document.querySelector("#bedroom_count").value;
  
  
  console.log(name);
  console.log(email);
  console.log(ph_number);
  console.log(city);
  console.log(min_price);
  console.log(max_price);
  console.log(room_count);
  console.log(arrp.length);
  console.log(arrp);
console.log(arrp[0] == '0');
 for(let i=0; i<arrp.length; i++){
  
    const arr_image = ["./house1_drawingroom.jpg", "./house1.jpg"];
    console.log(arr_image);
    //here we are creating a div that will show the info of a single house
  const house = document.createElement("div");
  house.classList.add("house");
  //code for initial visible part
  const visible =  document.createElement("div");
  visible.classList.add("visible");
 
  //here is the code for swiper
  const swiper = document.createElement("div");
  swiper.classList.add("swiper");
  swiper.classList.add("mySwiper");
  const swiper_wrapper = document.createElement("div");
  swiper_wrapper.classList.add("swiper-wrapper");
  for (let j = 0; j < arr_image.length; j++) {
    const img = document.createElement("img");
    img.classList.add("swiper-slide");
    img.setAttribute("src", arr_image[j]);
    swiper_wrapper.appendChild(img);
  }
  swiper.appendChild(swiper_wrapper);
  const swiper_next_btn = document.createElement("div");
  swiper_next_btn.classList.add("swiper-button-next");
  const swiper_prev_btn = document.createElement("div");
  swiper_prev_btn.classList.add("swiper-button-prev");
  swiper.appendChild(swiper_next_btn);
  swiper.appendChild(swiper_prev_btn);
  var swip = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  visible.appendChild(swiper);
  //visible content(heading) 
  const visible_content = document.createElement("div");
  visible_content.classList.add("visible_content");
  const visible_content_heading = document.createElement("h1");
  visible_content_heading.classList.add("visible_content_heading");
  visible_content_heading.innerHTML = ` ${arr_list1[i][2]}-BHK apartment is available in ${arr_list2[i][0]}`;
  visible_content.appendChild(visible_content_heading);
  //div for all the other details
  const div_info = document.createElement("div");
  div_info.classList.add("div_info");
  //pricing
  const div_info_price = document.createElement("div");
  div_info_price.classList.add("div_info_price");
  const div_info_price_p = document.createElement("p");
  div_info_price_p.innerHTML = "price";
  const div_info_price_h3 = document.createElement("h3");
  div_info_price_h3.innerHTML ="$" + arrp[i];
  div_info_price.appendChild(div_info_price_p);
  div_info_price.appendChild(div_info_price_h3);
  div_info.appendChild(div_info_price);
    //bedroom count
    const div_info_bedroom = document.createElement("div");
    div_info_bedroom.classList.add("div_info_bedroom");
    const div_info_bedroom_p = document.createElement("p");
    div_info_bedroom_p.innerHTML = "bedroom count";
    const div_info_bedroom_h3 = document.createElement("h3");
    div_info_bedroom_h3.innerHTML = arr_list1[i][0][2] + "BHK";
    div_info_bedroom.appendChild(div_info_bedroom_p);
    div_info_bedroom.appendChild(div_info_bedroom_h3);
    div_info.appendChild(div_info_bedroom);
    //amenities
    const div_info_amenities = document.createElement("div");
    div_info_amenities.classList.add("div_info_amenities");
    const div_info_amenities_p = document.createElement("p");
    div_info_amenities_p.innerHTML = "amenities";
    const div_info_amenities_h3 = document.createElement("h3");
    div_info_amenities_h3.innerHTML = arr_list1[0][0];
    div_info_amenities.appendChild(div_info_amenities_p);
    div_info_amenities.appendChild(div_info_amenities_h3);
    div_info.appendChild(div_info_amenities);
    //location
    const div_info_city = document.createElement("div");
    div_info_city.classList.add("div_info_city");
    const div_info_city_p = document.createElement("p");
    div_info_city_p.innerHTML = "city";
    const div_info_city_h3 = document.createElement("h3");
    div_info_city_h3.innerHTML = arr_list2[i][0];
    div_info_city.appendChild(div_info_city_p);
    div_info_city.appendChild(div_info_city_h3);
    div_info.appendChild(div_info_city);
    visible_content.appendChild(div_info);
    const show_more_btn = document.createElement("button");
    show_more_btn.classList.add("show_more_btn");
    show_more_btn.innerHTML = "Show More";
    visible_content.appendChild(show_more_btn);
 visible.appendChild(visible_content);
  house.appendChild(visible);
  //here the initially hidden portion starts
  const hidden = document.createElement("div");
    hidden.classList.add("hidden");
    const hidden_content = document.createElement("div");
    hidden_content.classList.add("hidden_content");
    hidden_content.innerHTML = `"` + arr_list1[i][4] + `"`;
    hidden.appendChild(hidden_content);
    const map_add = document.createElement("div");
    map_add.classList.add("map_add");
    //HERE COMES THE MAP
    async function initMap(latitude, longitude) {
      // The location of Uluru
      const position = { lat: latitude, lng: longitude };
      // Request needed libraries.
      //@ts-ignore
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

      // The map, centered at Uluru
      let map = new Map(map_add, {
        zoom: 15,
        center: position,
        mapId: "9585128d1e56df8e",
      });

      // The marker, positioned at Uluru
      const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Uluru",
        animation: google.maps.Animation.BOUNCE,
      });
      marker.addListener("click", toggleBounce);
    }
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
    fetch(
      `https://trueway-geocoding.p.rapidapi.com/Geocode?address=awho%20twin%20towers%20greater%20noida%20india&language=en`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(response.results[0].location.lat);
        console.log(response.results[0].location.lng);
        initMap(
          response.results[0].location.lat,
          response.results[0].location.lng
        );
      })
      .catch((err) => console.error(err));
    //HERE MAP ENDS
    hidden.appendChild(map_add);
    //adding a div that will be wrapping 3 btn 
    const div_buttons = document.createElement("div");
    div_buttons.classList.add("div_buttons");
    //here is show more btn
    const show_less_btn = document.createElement("button");
    show_less_btn.classList.add("show_less_btn");
    show_less_btn.innerHTML = "Show Less";
    div_buttons.appendChild(show_less_btn);
    //buy button
    const buy_btn = document.createElement("button");
    buy_btn.classList.add("buy_btn");
    buy_btn.innerHTML = "Buy Now";
    div_buttons.appendChild(buy_btn);
    //cancel btn
    const cancel_btn = document.createElement("button");
    cancel_btn.classList.add("cancel_btn");
    cancel_btn.innerHTML = "Cancel Deal";
    div_buttons.appendChild(cancel_btn);

    hidden.appendChild(div_buttons);
    house.appendChild(hidden);
  container2.appendChild(house);
  }
 
 
});




const show_more = document.querySelector(".show_more_btn");
container2.addEventListener("click", (e) => {
  if (e.target.className == "show_more_btn") {
    const hidden = e.target.parentElement.parentElement.nextSibling;
    console.log(e.target.parentElement.parentElement.nextSibling);
    console.log(hidden);
    hidden.style.display = "flex";
    e.target.style.display = "none";
  }
});
container2.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.target.parentElement);
  console.log(e.target.parentElement.parentElement);
  console.log(e.target.parentElement.parentElement.previousSibling);
 

  const show_more =
    e.target.parentElement.parentElement.previousSibling.querySelector(".show_more_btn");
  console.log(
   show_more
  );
  if (e.target.className == "show_less_btn") {
    const hidden = e.target.parentElement.parentElement;
    hidden.style.display = "none";
    show_more.style.display = "block";
  }
});


