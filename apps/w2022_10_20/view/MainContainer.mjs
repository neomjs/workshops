import MainContainerController from './MainContainerController.mjs';
import MainContainerModel      from './MainContainerModel.mjs';
import Viewport                from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';
import TableContainer from './TableContainer.mjs';

/**
 * @class W2022_10_20.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        /**
         * @member {String} className='W2022_10_20.view.MainContainer'
         * @protected
         */
        className: 'W2022_10_20.view.MainContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: MainContainerController,
        /**
         * @member {Object[]} items
         */
        items: [
            TableContainer
        ],
        /**
         * @member {Neo.model.Component} model=MainContainerModel
         */
        model: MainContainerModel
    }}
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;
