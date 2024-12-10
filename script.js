let tg = window.Telegram.WebApp;
let order = document.getElementById("endbutton");
tg.expand();

document.getElementById("checkbox").addEventListener("change", () => {
    if (document.getElementById("checkbox").checked) {
        document.getElementById("closeworkbutton").style.display = "block";
    } else {
        document.getElementById("closeworkbutton").style.display = "none";
        document.getElementById("error").style.display = "none";
    }
})
order.addEventListener("click", () => {
    document.getElementById("salary").style.display = "block";
    
});


document.getElementById('expenseschoice').addEventListener('change', function() {
    if (document.getElementById('expenseschoice').value == 'Деньги') {
        document.getElementById("salary").style.display = "block";
        document.getElementById("paragcheck").style.display = "block";
    } else if (document.getElementById('expenseschoice').value == 'Не выбрано') {
        document.getElementById("salary").style.display = "none";
        document.getElementById("paragcheck").style.display = "none";
    } else {
        document.getElementById("salary").style.display = "none";
        document.getElementById("paragcheck").style.display = "block";
    }

})