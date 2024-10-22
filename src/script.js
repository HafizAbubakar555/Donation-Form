// //navbar start

function myFunction(x) {
  x.classList.toggle("change");
}

const navBtn = document.querySelector("#nav-btn");
const mainNav = document.querySelector("#navbar");
let width = true;
navBtn.addEventListener("click", () => {
  if (width === true) {
    mainNav.style.width = "350px";
    width = false;
  } else {
    width = true;
    mainNav.style.width = "0px";
  }
});
// //navbar end

// form start
const btn_1 = document.querySelector("#one");
const btn_2 = document.querySelector("#two");
const btn_3 = document.querySelector("#three");
const btn_4 = document.querySelector("#four");
const btn_5 = document.querySelector("#five");
const btn_6 = document.querySelector("#six");
const btn_7 = document.querySelector("#seven");
const text_btn = document.querySelector("#text-btn");
const text_box = document.querySelector("#textbox");
const amount = document.querySelector("#amount");
const area = document.querySelector("#area");
const amount_btn = document.querySelector("#amount-btn");


btn_1.addEventListener("click", () => {
  amount.innerText = "$5,000";
});


btn_2.addEventListener("click", () => {
  amount.innerText = "$3,600";
});


btn_3.addEventListener("click", () => {
  amount.innerText = "$1,800";
});


btn_4.addEventListener("click", () => {
  amount.innerText = "$1,000";
});


btn_5.addEventListener("click", () => {
  amount.innerText = "$500";
});


btn_6.addEventListener("click", () => {
  amount.innerText = "$180";
});


btn_7.addEventListener("click", () => {
  amount.innerText = "$100";
});

text_btn.addEventListener("click", () => {
    text_box.style.display = "flex"
});

amount_btn.addEventListener("click", () =>{
    amount.innerText ="$"+ area.value;
     text_box.style.display = "none"
}) 

// form end
