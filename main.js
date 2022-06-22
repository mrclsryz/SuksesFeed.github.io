var timejs1 = document.querySelector('#time1');
var timejs2 = document.querySelector('#time2');
var timejs3 = document.querySelector('#time3');

function notifTimer(){
    var select = document.getElementById('tgl');
    var value = select.options[select.selectedIndex].value;
    var timeee = document.getElementById('timer').value;
    alert("Pet feed has been set for "+ value +" "+ timeee)
    timejs3.textContent = timejs2.textContent;
    timejs2.textContent = timejs1.textContent;
    timejs1.textContent = "> "+ value + " / "+ timeee; 
}

function notifFeed(){
    alert("Berhasil memberi makan")
}