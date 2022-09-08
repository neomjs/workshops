import Component from '../../../node_modules/neo.mjs/src/model/Component.mjs';

/**
 * @class W2022_09_08.view.MainContainerModel
 * @extends Neo.model.Component
 */
class MainContainerModel extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='W2022_09_08.view.MainContainerModel'
         * @protected
         */
        className: 'W2022_09_08.view.MainContainerModel',
        /**
         * @member {Object} data
         */
        data: {
            users: [
                'Akshay',
                'Alex',
                'Alwina',
                'Amit',
                'Arasch',
                'Biplav',
                'Ion',
                'Kiattipoom',
                'Tobi'
            ],
            vmButtonText: 'Hello CTS'
        }
    }}
}

Neo.applyClassConfig(MainContainerModel);

export default MainContainerModel;
