let tg = window.Telegram.WebApp;
let order = document.getElementById("order");
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
    let data = {
        name: document.getElementById("user_name").value,
        surname: document.getElementById("user_surname").value,
        patronymic: document.getElementById("user_patronymic").value,
        birthday: document.getElementById("user_birthday").value,
        phone: document.getElementById("user_phone").value,
        email: document.getElementById("user_email").value,
        vk: document.getElementById("user_vk").value,
        registration: document.getElementById("user_registration").value,
        residence: document.getElementById("user_residence").value,
        series: document.getElementById("user_series").value,
        number: document.getElementById("user_number").value,
        dateofissue: document.getElementById("user_dateofissue").value,
        issuedbywhom: document.getElementById("user_issuedbywhom").value,
        division: document.getElementById("user_division").value,
        inn: document.getElementById("user_inn").value,
        snils: document.getElementById("user_snils").value
    };

    if ((data['name'].length < 3) 
        || (data['surname'].length < 3) 
        || (data['patronymic'].length < 3) 
        || (data['birthday'].length < 8)   
        || (data['phone'].length < 8) 
        || (data['email'].length < 10) 
        || (data['registration'].length < 15) 
        || (data['residence'].length < 15) 
        || (data['series'].length != 4) 
        || (data['number'].length != 6) 
        || (data['dateofissue'].length < 8) 
        || (data['issuedbywhom'].length < 4) 
        || (data['division'].length < 6) 
        || (data['inn'].length < 10) 
        || (data['snils'].length < 9)) {
        return document.getElementById("error").style.display = "block";
    }
    tg.sendData(JSON.stringify(data));
    tg.close();
});