// let bgColor = document.querySelectorAll(".bgColor");
// // console.log(bgColor);
// [...bgColor].map((element)=>{
//     // console.log(element)
// })



// let ele = document.createElement("h1");
// ele.innerText = "Dynamic creation of html element";
// // ele.setAttribute("id" , "demo");
// ele.id = "demo";

// //ele.removeAttribute("id")
// //console.log(ele);

// let image = document.createElement("img");
// image.src = "./"
// console.log(image);

// document.body.append


// let ele=document.createElement("h1");
// ele.innerText="Dynamic creation of html element";
// //ele.setAttribute("id","demo");
// ele.id="demo";
// //ele.removeAttribute("id")
// //console.log(ele);
// document.body.append(ele);

// let image=document.createElement("img");
// image.src="./sanju.jpg";
// console.log(image);

// document.body.appendChild(ele);
// document.body.appendChild(image)



// let ele=document.createElement("h1");
// ele.innerText="Dynamic creation of html element";
// //ele.setAttribute("id","demo");
// ele.id="demo";
// //ele.removeAttribute("id")
// //console.log(ele);
// document.body.append(ele);

// let image=document.createElement("img");
// image.src="./sanju.jpg";
// console.log(image);

// document.body.appendChild(ele);
// document.body.appendChild(image)

// let form=document.querySelector("form");
// let username=document.getElementById("uName");
// let mail=document.getElementById("uMail");
// let psw=document.getElementById("uPsw");


// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     console.log(event);
//     console.log("form submitted");
//     let uname=username.value;
//     let uemail=mail.value;
//     let upass=psw.value;
//     let userDetails={
//         uname,uemail,upass
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData", JSON.stringify(userDetails))
// })



// let h1 = document.createElement("h1")
// h1.innerText = "MRU Batch JS session";


// let mainEle = document.createElement("div");
// mainEle.setAttribute("id","mainBlock");
// mainEle.style.border="2px solid red";
// mainEle.style.width="550px";
// mainEle.style.height="550px";

// console.log(mainEle);


// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");
// // console.log(mainEle);

// let image = document.createElement("div");
// image.src="sanju.jpg";
// image.style.width="550px"


// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class","bottomBlock");
// //console.log(bottomEle);

// let h1 = document.createElement("h1");
// h1.innerText = "BURGER";
// h1.style.textAlign="center"

// let btn = document.createElement("button");
// btn.innerText="View More";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.backgroundColor="dodgerblue";
// btn.style.color="white";


// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);


// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);


//!
let mainEle=document.createElement("div");
mainEle.setAttribute("id","mainBlock");
mainEle.style.border="2px solid red";
mainEle.style.width="550px";
mainEle.style.height="550px";

console.log(mainEle);

let topEle=document.createElement("div");
topEle.setAttribute("class","topBlock");
//console.log(topEle);
let image=document.createElement("img");
image.src="sanju.jpg";
image.style.width="550px";

let bottomEle=document.createElement("div");
bottomEle.setAttribute("class","bottomBlock");

let h1=document.createElement("h1");
h1.innerText="BURGER";
h1.style.textAlign="center"

let btn=document.createElement("button");
btn.innerText="View More";
btn.style.border="none";
btn.style.padding="20px";
btn.style.backgroundColor="dodgeblue";
btn.style.color="white";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);

topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);



