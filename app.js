var number = "";

function toCelcius() {
    number = document.getElementById("farenheit").value;
    document.getElementById("celcius").value = Math.round(number - 32 * 5 / 9);
    if (number == "") {
        document.getElementById("celcius").value = "";
    }
}

function toFarenheit() {
    number = document.getElementById("celcius").value;
    document.getElementById("farenheit").value = Math.round(number * 9 / 5 + 32);
    if (number == "") {
        document.getElementById("farenheit").value = "";
    }
}

