import BadgeButton             from '../../w2022_09_08/view/BadgeButton.mjs';
import Component               from '../../../node_modules/neo.mjs/src/component/Base.mjs';
import MainContainerController from './MainContainerController.mjs';
import TabContainer            from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
import Viewport                from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class W2022_09_22.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        /**
         * @member {String} className='W2022_09_22.view.MainContainer'
         * @protected
         */
        className: 'W2022_09_22.view.MainContainer',
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
        items: [{
            module: TabContainer,
            height: 300,
            width : 500,
            style : {flex: 'none', margin: '20px'},

            itemDefaults: {
                module: Component,
                cls   : ['neo-examples-tab-component'],
                style : {padding: '20px'},
            },

            items: [{
                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Tab 1'
                },
                vdom: {innerHTML: 'Welcome to your new Neo App.'}
            }, {
                tabButtonConfig: {
                    iconCls: 'fa fa-play-circle',
                    text   : 'Tab 2'
                },
                vdom: {innerHTML: 'Have fun creating something awesome!'}
            }]
        }, {
            module   : BadgeButton,
            badgeText: '0',
            handler  : 'onCounterButtonClick',
            reference: 'counter-button',
            style    : {marginLeft: '20px', marginTop: '10px'},
            text     : 'Counter'
        }],
        /*
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'vbox', align: 'start'}
    }}
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;