const tip=document.getElementById("tip")
const calulate=document.getElementById("btn")
tip.style.display="none";
calulate.addEventListener('click',()=>{
const billamount=document.getElementById("bill").value;
const people=document.getElementById("people").value
const servicevalue=document.getElementById("servicevalue").value
document.getElementById("tipvalue").value="RS."+(billamount*servicevalue)/people
tip.style.display="inline"
})