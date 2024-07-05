(function () {
    "use strict"

    const form = document.querySelector('.form__fields');

    form.addEventListener('submit', formSend);

    async function formSend(event) {
        event.preventDefault();

        let error = formValidate(form)
        let formData = new FormData(this);

        if(error === 0) {
            form.classList.add('_sending');
            document.body.style.overflow = 'hidden';

            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            })
            if(response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
                document.body.style.overflow = 'visible';
            } 
            else {
                alert('Ошибка')
                form.classList.remove('_sending');
                document.body.style.overflow = 'visible';
            }
        }
        else {
            alert('Заполните обязательные поля')
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for(let index = 0; index < formReq.length; index++) {
            const input = formReq[index];

            formRemoveError(input);

            if(input.classList.contains('_email')) {
                if(!emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            }
            else if(input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            }
            else {
                if(input.value === '') {
                    formAddError(input); 
                    error++;
                }
            }
        }

        return error
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }

    function emailTest(input) {
        return /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,6}$/.test(input.value)
    }
})()

