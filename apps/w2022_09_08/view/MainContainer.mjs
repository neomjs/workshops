import BadgeButton             from './BadgeButton.mjs';
import Button                  from '../../../node_modules/neo.mjs/src/button/Base.mjs';
import MainContainerController from './MainContainerController.mjs';
import MainContainerModel      from './MainContainerModel.mjs';
import UserContainer           from './UserContainer.mjs';
import Viewport                from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class W2022_09_08.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        /**
         * @member {String} className='W2022_09_08.view.MainContainer'
         * @protected
         */
        className: 'W2022_09_08.view.MainContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {String} buttonText_=null
         */
        buttonText_: 'Hello World',
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: MainContainerController,
        /**
         * @member {Object[]} items
         */
        items: [{
            module   : Button,
            reference: 'button-1'
        }, {
            module   : Button,
            handler  : 'onButton2Click',
            reference: 'button-2',
            text     : 'Click ME!'
        }, {
            module: Button,
            bind: {
                text: data => data.vmButtonText
            }
        }, {
            module: UserContainer,
            flex  : 1
        }, {
            module   : BadgeButton,
            badgeText: '22',
            iconCls  : 'fa fa-user',
            style    : {maxWidth: '200px'},
            text     : 'BadgeButton'
        }],
        /**
         * @member {Object} layout
         */
        layout: {ntype: 'vbox'},
        /**
         * @member {Neo.model.Component} model=MainContainerModel
         */
        model: MainContainerModel,
        /**
         * @member {Object} items
         */
        style: {
            padding: '20px'
        }
    }}

    /**
     * Triggered after the buttonText config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetButtonText(value, oldValue) {
        this.items[0].text = value;
    }
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;
