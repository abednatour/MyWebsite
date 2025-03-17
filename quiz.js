// JavaScript for Quiz functionality

document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.querySelector('#quiz form');

    if (quizForm) {
        quizForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const answers = {
                question1: 'Lionel Messi',
                question2: '1899',
                question3: '5',
                question4: 'Camp Nou',
                question5: 'Pep Guardiola',
                question6: 'blue_and_red'
            };

            let score = 0;
            const formData = new FormData(quizForm);

            for (let [key, value] of formData.entries()) {
                if (value.toLowerCase() === answers[key].toLowerCase()) {
                    score++;
                }
            }

            alert(`Your score is ${score} out of 6`);
        });
    }

    // JavaScript for Shop functionality
    const cartItems = document.getElementById('cart-items');

    window.addToCart = function (item, price) {
        const li = document.createElement('li');
        li.textContent = `${item} - $${price}`;
        cartItems.appendChild(li);

        alert(`${item} has been added to your cart!`);
    };

    // Navigation linking between pages
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = link.getAttribute('href');
            if (href.includes('quiz.html') || href.includes('shop.html')) {
                e.preventDefault();
                window.location.href = href;
            }
        });
    });
});
