
    // дії з Local Storage
// localStorage.setItem("number", 1);

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("number");

// localStorage.clear();

window.addEventListener("DOMContentLoaded", function(){
    // Получаэмо доступ до елементів на сторінці.
    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];
    // перевірки
        if(localStorage.getItem('isChecked') === "true"){
            checkbox.checked = true;
        }
        if(localStorage.getItem('bg') === "changed"){
            form.style.backgroundColor = "#FF4766";
        }
    
    checkbox.addEventListener('click', function(){
        localStorage.setItem('isChecked', true);
    });
// заміна кольору форми
    change.addEventListener('click', function(){
        localStorage.setItem('bg', "changed");
        form.style.backgroundColor = "#FF4766";
    });


    // запис об'єкта в LocalStorage
    let persone = {
        name: 'Alex',
        age: '25',
        tech: ['mobile', 'notebook']
    };

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem('Alex', serializedPersone);

    console.log(JSON.parse(localStorage.getItem('Alex')));

});