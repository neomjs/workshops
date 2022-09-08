import Component from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class W2022_09_08.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='W2022_09_08.view.MainContainerController'
         * @protected
         */
        className: 'W2022_09_08.view.MainContainerController'
    }}

    /**
     * @param {Object} data
     */
    onButton2Click(data) {
        this.component.buttonText = 'Hello Alex!';
    }
}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;
