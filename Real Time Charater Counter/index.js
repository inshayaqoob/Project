const select = document.getElementById("txt")
const areaE1 = document.getElementById("pu")
select.addEventListener("keyup" , ()=>{
    // console.log('key is prressed');
    updateCounter()
})
function updateCounter(){
    areaE1.innerText = select.value.length
}