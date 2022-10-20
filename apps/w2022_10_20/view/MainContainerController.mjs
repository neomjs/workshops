import Component from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class W2022_10_20.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends Component {
    static getConfig() {
        return {
            /**
             * @member {String} className='W2022_10_20.view.MainContainerController'
             * @protected
             */
            className: 'W2022_10_20.view.MainContainerController'
        }
    }

    construct(config) {
        super.construct(config);
        fetch("https://itunes.apple.com/us/rss/topmusicvideos/limit=5/json").then(Response => Response.json())
        .then(data => {
            console.log(data);
            const store = this.getModel().getStore("movieStore");
            store.data = data.feed.entry;
            console.log(store);
        })
    }
}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;
