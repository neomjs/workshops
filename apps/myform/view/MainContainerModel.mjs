import ComponentModel from '../../../node_modules/neo.mjs/src/model/Component.mjs';

/**
 * @class MyForm.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainerModel extends ComponentModel {
    static getConfig() {return {
        /*
         * @member {String} className='MyForm.view.MainContainer'
         * @protected
         */
        className: 'MyForm.view.MainContainerModel',

        data: {
            form: {
                name: 'Lukas'
            }
        }
    }}
}

Neo.applyClassConfig(MainContainerModel);

export default MainContainerModel;