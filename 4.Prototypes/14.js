var AuthController = {
    autenticate() {
        server.autenticate(
            [ this.username, this.password ],
            this.handleRasponse.bind(this)
        );
    },
    handleRasponse(resp) {
        if (!resp.ok) this.displayError(resp.msg);
    }
};

var LoginFormContraller =
    Object.assign(Object.create(AuthController), {
        onSubmit() {
            this.username = this.$username.val();
            this.password = this.$password.val();
            this.autenticate();
        },
        displayError(msg) {
            console.log(msg);
        }
    })