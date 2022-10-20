import Component  from '../../../node_modules/neo.mjs/src/model/Component.mjs';
import MovieStore from '../store/Movies.mjs';

/**
 * @class W2022_10_20.view.MainContainerModel
 * @extends Neo.model.Component
 */
class MainContainerModel extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='W2022_10_20.view.MainContainerModel'
         * @protected
         */
        className: 'W2022_10_20.view.MainContainerModel',
        /**
         * @member {Object} data
         */
        data: {},
        /**
         * @member {Object} stores
         */
        stores: {
            movieStore : MovieStore
        }
    }}
}

Neo.applyClassConfig(MainContainerModel);

export default MainContainerModel;
