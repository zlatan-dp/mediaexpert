(() => {
    const refs = {
      openModalBtns: document.querySelectorAll('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      body: document.querySelector('body'),
      backdrop: document.querySelector('.backdrop'),
    };
  
    refs.openModalBtns.forEach(btn => {
        btn.addEventListener('click', toggleModal);
    });

    refs.closeModalBtn.addEventListener('click', toggleModal);

    refs.backdrop.addEventListener('click', (event) => {
        if (event.target === refs.backdrop) { 
            toggleModal();
        }
    });
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();