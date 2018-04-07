var Reqem_input = document.querySelector("#Reqem");
var Hasil_button = document.querySelector("#Hasil");


Hasil_button.onclick = function () {
    var Reqem = Reqem_input.value;
    counter = 1;
    for (i = 1; i <= 10; i++) {
        counter = Reqem * i;
        console.log(Reqem + "*" + i + "=" + counter);
    }
}