function rezerwacja(){
    var parts = document.getElementById('data').value.split("-");
    var year = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1;
    var day = parseInt(parts[2], 10);
    var formData = {
        imie: document.getElementById('imie').value,
        nazwisko: document.getElementById('nazwisko').value,
        rok: year,
        miesiac: month,
        dzien: day,
        trzezwy: document.getElementById('trzezwy').value,
        siedzenie: document.getElementById('siedzenie').value,
    }

    localStorage.setItem('formData', JSON.stringify(formData));
}

var form = document.getElementById('formularz');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    rezerwacja();
    window.location.href = 'wynik.html';
});

function sprawdzDate(input) {
    var formatDaty = /^\d{4}-\d{2}-\d{2}$/;

    if(!input.value.match(formatDaty)) {
        alert('Data powinna być w formacie RRRR-MM-DD!');
        input.value = "";
    }

    var parts = input.value.split("-");
    var year = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1;
    var day = parseInt(parts[2], 10);

    var data = new Date(year, month, day);
    if(data.getFullYear() !== year || data.getMonth() !== month || data.getDate() !== day) {
        alert('Wprowadzona data jest nieprawidłowa!');
        input.value = "";
    }
}