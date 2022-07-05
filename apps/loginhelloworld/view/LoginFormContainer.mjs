import FormContainer from '../../../node_modules/neo.mjs/src/form/Container.mjs'
import TextField from '../../../node_modules/neo.mjs/src/form/field/Text.mjs'
import PasswordField from '../../../node_modules/neo.mjs/src/form/field/Password.mjs'

import LoginFormContainerController from './LoginFormContainerController.mjs'


class LoginFormContainer extends FormContainer {
    static getConfig() {return{
        className: 'LoginHelloWorld.view.LoginFormContainer',
        controller: LoginFormContainerController,
        itemDefaults: {
            flex: 'none',
            labelPosition: 'inline',
            validBeforeMount: true
        },
        items: [{
            module: TextField,
            name: 'user',
            labelText: 'User',
            required: true,
            minLength: 5,
            maxLength: 52
        },{
            module: PasswordField,
            name: 'password',
            labelText: 'Password'
        },{
            ntype: 'button',
            text: 'Hello!',
            iconCls: 'fa fa-angle-up',
            style: {
                marginTop: 'auto',
                maxWidth: '50%'
            },
            handler: 'onWelcomeButtonClick'
        }],
        layout: {
            ntype: 'vbox',
            align: 'stretch'
        }
    }}
}

Neo.applyClassConfig(LoginFormContainer);

export default LoginFormContainer;