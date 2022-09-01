import Button                  from '../../../node_modules/neo.mjs/src/button/Base.mjs';
import Component               from '../../../node_modules/neo.mjs/src/component/Base.mjs';
import Container               from '../../../node_modules/neo.mjs/src/container/Base.mjs';
import Label                   from '../../../node_modules/neo.mjs/src/component/Label.mjs';
import MainContainerController from './MainContainerController.mjs';
import MainContainerModel      from './MainContainerModel.mjs';
import TabContainer            from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
import Viewport                from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

import modifyWidth from './Util.mjs';

/**
 * @class ViewModels.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        /*
         * @member {String} className='ViewModels.view.MainContainer'
         * @protected
         */
        className: 'ViewModels.view.MainContainer',
        /*
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: MainContainerController,
        /*
         * @member {Object[]} items
         */
        items: [{
            module: TabContainer,
            style : {flex: 'none', margin: '20px'},

            bind  : {
                height: data => data.offset + data.height,
                width : data => data.offset + data.width + modifyWidth(data.offset2)
            },

            model: {
                data: {
                    offset2: 100
                }
            },

            itemDefaults: {
                module: Component,
                cls   : ['neo-examples-tab-component'],
                style : {padding: '20px'},
            },

            items: [{
                module: Container,
                layout: {ntype: 'vbox', align: 'start'},
                items : [{
                    module : Button,
                    handler: 'onChangeOffset2ButtonClick',
                    style  : {marginLeft: '20px'},
                    text   : 'Change Offset 2',

                    bind: {
                        width: data => data.offset2 + data.width - 150
                    }
                }, {
                    module: Label,
                    style : {border: '1px solid red', padding: '10px'},

                    bind  : {
                        text : data => data.user.firstname,
                        width: data => 150 + data.offset
                    }
                }],

                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Tab 1'
                }
            }, {
                tabButtonConfig: {
                    iconCls: 'fa fa-play-circle',
                    text   : 'Tab 2'
                },
                vdom: {innerHTML: 'Have fun creating something awesome!'}
            }]
        }, {
            module : Button,
            handler: 'onChangeOffsetButtonClick',
            style  : {marginLeft: '20px'},
            text   : 'Change Offset',

            bind: {
                width: data => data.offset + data.width
            }
        }],
        /*
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'vbox', align: 'start'},
        /**
         * @member {Neo.model.Component} model=MainContainerModel
         */
        model: MainContainerModel
    }}
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;
