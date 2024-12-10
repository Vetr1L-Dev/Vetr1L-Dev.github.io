document.getElementById('choice').addEventListener('change', function(){
    if (document.getElementById('choice').value == 'Не выбрано'){
        document.getElementById('check').style.display == 'none'
    } else {
        document.getElementById('check').style.display == 'block'
    }
})