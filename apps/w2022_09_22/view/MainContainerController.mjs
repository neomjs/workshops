import Component from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class W2022_09_22.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='W2022_09_22.view.MainContainerController'
         * @protected
         */
        className: 'W2022_09_22.view.MainContainerController',
        /**
         * @member {Number} counter_=0
         */
        counter_: 0
    }}

    /**
     * Triggered after the counter config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetCounter(value, oldValue) {
        if (value > 0) {
            this.getReference('counter-button').badgeText = value;
        }
    }

    /**
     * Triggered after the counter config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    beforeSetCounter(value, oldValue) {
        console.log(value, oldValue, Neo.isNumber(value));

        if (!Neo.isNumber(value)) {
            return oldValue;
        }

        return value;
    }

    /**
     * @param {Object} data
     */
    onCounterButtonClick(data) {
        // data.component.badgeText = ++this.counter;
        this.counter++;
    }
}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;
