let inpu = document.getElementById("tb")
let FarhenitoCelcius = document.getElementById("radfaren")
let CelciustoFarheni = document.getElementById("radcelci")
let res = document.getElementById("result")
let temp
let sub=document.getElementById("subbtn")
sub.onclick = function () {
    let temp = Number(inpu.value);

    if (FarhenitoCelcius.checked) {
        temp = ((temp - 32) * 5) / 9;
        res.textContent = "Result: " + temp.toFixed(2) + " °C";
    } else if (CelciustoFarheni.checked) {
        temp = (temp * 9) / 5 + 32;
        res.textContent = "Result: " + temp.toFixed(2) + " °F";
    } else {
        res.textContent = "Please select a conversion type!";
    }
};