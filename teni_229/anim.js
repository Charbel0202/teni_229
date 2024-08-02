document.addEventListener("DOMContentLoaded", function () {
    const text = "Teni_229";
    const ecriture = document.querySelector(".ecriture");
    let index = 0;
    let isAdding = true;

    function type() {
        if (isAdding) {
            if (index < text.length) {
                ecriture.textContent += text[index];
                index++;
                setTimeout(type, 200);
            } else {
                isAdding = false;
                setTimeout(type, 1000);
            }
        } else {
            if (index > 0) {
                ecriture.textContent = text.substring(0, index-1);
                index--;
                setTimeout(type, 100);
            } else {
                isAdding = true;
                setTimeout(type, 200);
            }
        }
    }
    type();
});


document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'img/removebg1.png',
        'img/removebg3.png',
        'img/removebg5.png',
        'img/removebg4.png',
    ];

    let currentIndex = 0;

    function changeImage() {
        const imgElement = document.querySelector('.girl');
        currentIndex = (currentIndex + 1)% images.length;
        imgElement.src = images[currentIndex];
        console.log('new: ', currentIndex);
    }
    setInterval(changeImage, 3000);
});

// pour faire apparaitre les textes

document.addEventListener('DOMContentLoaded', function () {
   const titles = document.querySelectorAll('.titre');
   
   titles.forEach(title => {
    title.addEventListener('click', function () {
        const description = this.nextElementSibling;

        if (description.style.display === 'block') {
            description.style.display = 'none';
        } else {
            
            description.style.display = 'block';
        }
    });
   });
});





// les photos du about

document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'img/removebg6.png',
        'img/removebg8.png',
        'img/removebg9.png',
        'img/removebg10.png',
    ];

    let currentIndex = 0;

    function changeImage() {
        const imgElement = document.querySelector('.about');
        currentIndex = (currentIndex + 1)% images.length;
        imgElement.src = images[currentIndex];
        console.log('new: ', currentIndex);
    }
    setInterval(changeImage, 2000);
});


let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide2').appendChild(items[0]);
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide2').prepend(items[items.length - 1]);
})


