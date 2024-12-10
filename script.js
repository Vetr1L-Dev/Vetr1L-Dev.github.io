let tg = window.Telegram.WebApp;
let order = document.getElementById("endbutton");
tg.expand();

document.getElementById("checkbox").addEventListener("change", () => {
    if (document.getElementById("checkbox").checked) {
        document.getElementById("endbutton").style.display = "block";
    } else {
        document.getElementById("endbutton").style.display = "none";
        document.getElementById("error").style.display = "none";
    }
})
order.addEventListener("click", () => {
    document.getElementById("salary").style.display = "block";
    
});


document.getElementById('expenseschoice').addEventListener('change', function() {
    if (document.getElementById('expenseschoice').value == 'Деньги') {
        document.getElementById("salary").style.display = "block";
        
    }

})