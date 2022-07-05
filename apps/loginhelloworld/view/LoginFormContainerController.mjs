import Controller from '../../../node_modules/neo.mjs/src/controller/Component.mjs'


class LoginFormContainerController extends Controller {
    static getConfig() {
        return {
            className: 'LoginHelloWorld.view.LoginFormContainerController',
        }
    }

    onWelcomeButtonClick(data) {
        data.component.text = 'Goodbye!'

        let form = this.component;
        
        if (form) {
            console.log(form.getValues());
        }
    }
}

Neo.applyClassConfig(LoginFormContainerController);

export default LoginFormContainerController;