let time = document.getElementById("watch");
let d = new Date();
time.innerHTML = d.toLocaleTimeString();
let celsiusinput = document.querySelector('#celsius>input');
let fahrenheitinput = document.querySelector('#fahrenheit>input');
let kelvininput = document.querySelector('#kelvin>input');

let btn = document.querySelector('.button button')

function roundnumber(number){
    return Math.round(number*100)/100
}
celsiusinput.addEventListener('input',function(){
    let cTemp = parseFloat(celsiusinput.value)
    let fTemp = (cTemp*(9/5)+32)
    let kTemp = cTemp + 273.15

    fahrenheitinput.value = roundnumber(fTemp)
    kelvininput.value = roundnumber(kTemp)
})
function roundnumber(number){
    return Math.round(number*100)/100
}
celsiusinput.addEventListener('input',function(){
    let cTemp = parseFloat(celsiusinput.value)
    let fTemp = (cTemp*(9/5)+32)
    let kTemp = cTemp + 273.15

    fahrenheitinput.value = roundnumber(fTemp)
    kelvininput.value = roundnumber(kTemp)
})
fahrenheitinput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenheitinput.value)
    let cTemp = (fTemp-32)*(5/9)
    let kTemp = (fTemp-32)*(5/9)+273.15

    celsiusinput.value = roundnumber(cTemp)
    kelvininput.value = roundnumber(kTemp)
})
kelvininput.addEventListener('input',function(){
    let kTemp = parseFloat(kelvininput.value)
    let fTemp = (kTemp-273.15)
    let cTemp =  (kTemp-273.15)*(9/5)+32

    fahrenheitinput.value = roundnumber(fTemp)
    celsiusinput.value = roundnumber(cTemp)
})

btn.addEventListener('click', ()=>{
    celsiusinput.value=""
    fahrenheitinput.value=""
    kelvininput.value=""
})
// function reset(){
//     document.getElementsByClassName("input").reset();
// }