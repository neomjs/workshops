import Component    from '../../../node_modules/neo.mjs/src/component/Base.mjs';
import TabContainer from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
import Viewport     from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';
import LoginFormContainer from './LoginFormContainer.mjs';

/**
 * @class LoginHelloWorld.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        /*
         * @member {String} className='LoginHelloWorld.view.MainContainer'
         * @protected
         */
        className: 'LoginHelloWorld.view.MainContainer',
        /*
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /*
         * @member {Object[]} items
         */
        items: [{
            module: TabContainer,
            height: 300,
            width : 500,
            style : {flex: 'none', margin: '20px'},

            itemDefaults: {
                module: Component,                
                style : {padding: '20px'},
            },

            items: [{
                module: LoginFormContainer,
                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Tab 1'
                },
            }, {
                tabButtonConfig: {
                    iconCls: 'fa fa-play-circle',
                    text   : 'Tab 2'
                },
                cls   : ['neo-examples-tab-component'],
                vdom: {innerHTML: 'Have fun creating something awesome!'}
            }]
        }],
        /*
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'fit'}
    }}
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;