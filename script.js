// script.js

document.addEventListener('DOMContentLoaded', function () {
    var monitorizareResurseSection = document.querySelector('.monitorizare-resurse');
    var imaginiResurse = document.querySelectorAll('.monitorizare-resurse img');

    if (imaginiResurse.length === 0) {
        console.error('Nu există imagini pentru slide-show.');
        return;
    }

    var index = 0;
    var slideShowDiv = document.createElement('div');
    slideShowDiv.classList.add('slide-show');

    imaginiResurse.forEach(function (img, i) {
        var slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = 'url(' + img.src + ')';
        slide.style.animation = 'slideIn 3s ' + (i * 3) + 's forwards';
        slideShowDiv.appendChild(slide);
    });

    monitorizareResurseSection.appendChild(slideShowDiv);

    // Ascultăm evenimentul de dublu click pe textul "Monitorizare Resurse"
    var h2Element = document.querySelector('.monitorizare-resurse h2');
    h2Element.addEventListener('dblclick', function () {
        slideShowDiv.style.display = 'flex';
        setTimeout(function () {
            if (index < imaginiResurse.length) {
                index++;
            } else {
                slideShowDiv.style.display = 'none';
            }
        }, 3000);
    });
});
