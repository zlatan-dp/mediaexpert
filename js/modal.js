(() => {
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
  
    refs.openModalBtns.forEach(btn => {
        btn.addEventListener('click', toggleModal);
    });

    refs.closeModalBtn.addEventListener('click', toggleModal);

    refs.openTermsBtn.addEventListener('click', toggleTermsModal);
    refs.closeTermsBtn.addEventListener('click', toggleTermsModal);

    refs.backdrop.addEventListener('click', (event) => {
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
  })();