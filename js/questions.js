const questionWraps = document.querySelectorAll('.question-wrap')

questionWraps.forEach((wrap) => {
    wrap.addEventListener('click', function () {
        const answer = wrap.nextElementSibling; // Наступний елемент відповіді
        const icon = wrap.querySelector('.question-icon'); // Іконка всередині wrap

        answer.classList.toggle('active')
        icon.classList.toggle('rotated')
    })
    })
