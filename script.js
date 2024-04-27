class FormSubmit {

    constructor(settings) {

        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.formButton);


        if (this.form) {
            this.url = this.form.getAttribute('action')
        }
    }


    displaySucess() {
        this.form.innerHTML = this.settings.sucess
    }



    displayError() {
        this.form.innerHTML = this.settings.error;
    }


    init() {

        if (this.form) this.formButton.addEventListener('click', (e) => this.displaySucess());

        return this;
    }

}


const formSubmit = new FormSubmit({


    form: "[data-form]",
    botton: "[data-botton]",
    sucess: "<h1 class='sucess'> Mensagem Enviada </h1>",
    error: "<h1 class='error'> Não foi possivel enviar sua mensagem </h1>"
})