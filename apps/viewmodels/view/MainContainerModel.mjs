import Component from '../../../node_modules/neo.mjs/src/model/Component.mjs';

/**
 * @class ViewModels.view.MainContainerModel
 * @extends Neo.model.Component
 */
class MainContainerModel extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='ViewModels.view.MainContainerModel'
         * @protected
         */
        className: 'ViewModels.view.MainContainerModel',
        /**
         * @member {Object} data
         */
        data: {
            height: 400,
            offset: 50,
            width : 600,

            user: {
                firstname: 'Ion'
            }
        }
    }}
}

Neo.applyClassConfig(MainContainerModel);

export default MainContainerModel;
