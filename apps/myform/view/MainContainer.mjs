import FormContainer from '../../../node_modules/neo.mjs/src/form/Container.mjs';
import TextField from '../../../node_modules/neo.mjs/src/form/field/Text.mjs';
import Viewport from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';
import Button from '../../../node_modules/neo.mjs/src/button/Base.mjs';

import MainContainerModel from './MainContainerModel.mjs';
import MainContainerController from './MainContainerController.mjs';

/**
 * @class MyForm.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {
        return {
            /*
             * @member {String} className='MyForm.view.MainContainer'
             * @protected
             */
            className: 'MyForm.view.MainContainer',

            model: MainContainerModel,
            controller: MainContainerController,

            cls: ['main-container', 'neo-viewport'],
            /*
             * @member {Boolean} autoMount=true
             */
            autoMount: true,
            /*
             * @member {Object[]} items
             */
            items: [{
                module: FormContainer,

                model: {
                    data: {
                        lastName: 'Baier'
                    }
                },

                layout: {
                    ntype: 'vbox',
                },
                items: [{
                    module: TextField,

                    bind: { value: (data) => 
                        data.form.name + ' ' + data.lastName.toLowerCase()
                    }
                }, {
                    module: Button,
                    cls: ['neo-button', 'my-button'],

                    text: 'Accept',
                    handler: 'onAcceptClick',
                    iconCls: 'fa fa-home'
                }]
            }],
            /*
             * @member {Object} layout={ntype:'fit'}
             */
            layout: { ntype: 'fit' }
        }
    }
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;