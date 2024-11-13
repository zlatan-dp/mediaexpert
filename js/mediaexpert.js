document.addEventListener('DOMContentLoaded', function () {
    const refs = {
        openModalBtns: document.querySelectorAll('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        openTermsBtn: document.querySelector('[data-terms-open]'),
        closeTermsBtn: document.querySelector('[data-terms-close]'),
        modal: document.querySelector('[data-modal]'),
        modalTerms: document.querySelector('[data-modal-terms]'),
        body: document.querySelector('body'),
        backdrop: document.querySelector('.backdrop'),
    };

    // FAQ розділ: питання-відповіді
    const questionWraps = document.querySelectorAll('.question-wrap');

    questionWraps.forEach((wrap) => {
        wrap.addEventListener('click', function () {
            const answer = wrap.nextElementSibling; // Наступний елемент відповіді
            const icon = wrap.querySelector('.question-icon'); // Іконка всередині wrap

            answer.classList.toggle('active');
            icon.classList.toggle('rotated');
        });
    });

    // modal

    refs.openModalBtns.forEach(btn => {
        btn.addEventListener('click', toggleModal);
    });

    refs.closeModalBtn?.addEventListener('click', toggleModal);
    refs.openTermsBtn?.addEventListener('click', toggleTermsModal);
    refs.closeTermsBtn?.addEventListener('click', toggleTermsModal);

    refs.backdrop?.addEventListener('click', (event) => {
        if (event.target === refs.backdrop) { 
            toggleModal();
        }
    });

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
    }

    function toggleTermsModal() {
        refs.modalTerms.classList.toggle('is-hidden');
    }

    // modal form rules

    document.querySelector('input[name="phone"]').addEventListener('input', function () {
        this.value = this.value.replace(/[^\d]/g, '').slice(0, 9); // обмеження 9 символів
    });

    document.querySelector('#dateInput').addEventListener('blur', function () {
        formatDate(this);
    });

    function formatDate(input) {
        if (input.value) {
            const date = new Date(input.value);
            
            if (!isNaN(date)) { // Перевірка, чи дата валідна
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0'); // Місяці з 0-11
                const year = date.getFullYear();
                
                input.type = 'text'; 
                input.value = `${day}.${month}.${year}`; // Формат DD.MM.YYYY
            } else {
                console.warn('Некоректний формат дати:', input.value);
            }
        } else {
            input.type = 'text'; // Повертаємо тип текст, якщо поле порожнє
        }
    }

    const checkbox = document.getElementById('submit-politicka');
    const submitButton = document.getElementById('submit-btn');

    if (checkbox && submitButton) {
        checkbox.addEventListener('change', function () {
            submitButton.disabled = !checkbox.checked;
        });
    }
});
