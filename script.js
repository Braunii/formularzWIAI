function rezerwacja(){
    var formData = {
        imie: document.getElementById('imie').value,
        nazwisko: document.getElementById('nazwisko').value,
        data: document.getElementById('data').value,
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

