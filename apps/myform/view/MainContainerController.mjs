import ComponentController from '../../../node_modules/neo.mjs/src/controller/Component.mjs';
import Dialog from '../../../node_modules/neo.mjs/src/dialog/Base.mjs';

/**
 * @class MyForm.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainerController extends ComponentController {
    static getConfig() {return {
        /*
         * @member {String} className='MyForm.view.MainContainer'
         * @protected
         */
        className: 'MyForm.view.MainContainerController',        
    }}

    onAcceptClick(data) {
        let button = data.component,
            form = this.component.down('form-container'),
            vm = this.getModel();        
        
    }
}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;