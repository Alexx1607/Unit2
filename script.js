document.addEventListener('DOMContentLoaded', function () {
    var imaginiResurse = document.querySelectorAll('.monitorizare-resurse img');
    var animatieActivata = false;
    var animatieInterval;

    if (imaginiResurse.length === 0) {
        console.error('Nu există imagini pentru animație.');
        return;
    }

    imaginiResurse.forEach(function (img, index) {
        img.classList.add('animatie-imagine');
        img.style.left = index * 10 + 'px';
    });

    function startAnimatie() {
        imaginiResurse.forEach(function (img, index) {
            img.style.animation = `slideAnim ${5 + index * 0.5}s linear infinite`;
        });
    }

    function stopAnimatie() {
        imaginiResurse.forEach(function (img) {
            img.style.animation = '';
        });
    }

    var h2Element = document.querySelector('.monitorizare-resurse h2');
    h2Element.addEventListener('dblclick', function () {
        if (!animatieActivata) {
            animatieActivata = true;
            startAnimatie();
        } else {
            animatieActivata = false;
            stopAnimatie();
        }
    });
});
