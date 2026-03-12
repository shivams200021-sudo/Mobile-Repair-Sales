const models = {

Apple:["iPhone 11","iPhone 12","iPhone 13","iPhone 14"],
Samsung:["Galaxy S21","Galaxy S22","Galaxy A51","Galaxy M31"],
Xiaomi:["Redmi Note 10","Redmi Note 11"],
Realme:["Realme 8","Realme 9"],
Oppo:["Oppo F19","Oppo Reno 6"],
Vivo:["Vivo V20","Vivo V25"]

}

const brand=document.getElementById("brand")
const model=document.getElementById("model")

if(brand){

brand.addEventListener("change",function(){

model.innerHTML=""

models[this.value].forEach(m=>{

let option=document.createElement("option")

option.text=m

model.add(option)

})

})

}

const form=document.getElementById("repairForm")

if(form){

form.addEventListener("submit",function(e){

e.preventDefault()

let ticket="REP"+Math.floor(Math.random()*100000)

document.getElementById("ticket").innerHTML=

"Request Submitted. Ticket ID: "+ticket

})

}
