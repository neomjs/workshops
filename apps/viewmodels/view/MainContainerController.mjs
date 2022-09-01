import Component from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class ViewModels.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends Component {
    static getConfig() {return {
        /*
         * @member {String} className='ViewModels.view.MainContainerController'
         * @protected
         */
        className: 'ViewModels.view.MainContainerController'
    }}

    /**
     * @param {Object} data
     */
    onChangeOffsetButtonClick(data) {
        this.getModel().setData({
            offset: 0
        });
    }

    /**
     * @param {Object} data
     */
    onChangeOffset2ButtonClick(data) {
        data.component.getModel().setData({
            offset2         : 0,
            'user.firstname': 'Akshay'
        });

        console.log(data.component.getModel());
    }
}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;
