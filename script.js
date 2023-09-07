const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

// console.log(celsius,fahrenheit,kelvin);

window.addEventListener('load',() => celsius.focus());
celsius.value = '';
fahrenheit.value = '';
kelvin.value = '';

celsius.addEventListener("input",() => {
    if(!celsius.value){
        fahrenheit.value = '';
        kelvin.value = '';
    }
    fahrenheit.value = ((celsius.value*9)/5 + 32).toFixed(2);
    kelvin.value = ((celsius.value)*1 + 273.15).toFixed(2);
});

fahrenheit.addEventListener("input", () => {
    if(!fahrenheit.value){
        celsius.value = '';
        kelvin.value = '';
    }
    celsius.value = ((fahrenheit.value-32) * (5/9)).toFixed(2);
    kelvin.value = ((fahrenheit.value -32 )*(5/9) + 273.15).toFixed(2);
    
});

kelvin.addEventListener("input", () => {
    if(!kelvin.value){
        celsius.value = '';
        fahrenheit.value = '';
    }
    celsius.value = ((kelvin.value - 273.15)).toFixed(2);
    fahrenheit.value = ((kelvin.value -273.15)*(9/5) + 32).toFixed(2);
    
});
