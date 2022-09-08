import Button from '../../../node_modules/neo.mjs/src/button/Base.mjs';

/**
 * @class W2022_09_08.view.BadgeButton
 * @extends Neo.button.Base
 */
class BadgeButton extends Button {
    static getConfig() {return {
        /**
         * @member {String} className='W2022_09_08.view.BadgeButton'
         * @protected
         */
        className: 'W2022_09_08.view.BadgeButton',
        /**
         * @member {String} badgeText_=null
         */
        badgeText_: null,
        /**
         * @member {String[]} cls
         */
        cls: ['neo-badge-button', 'neo-button'],
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {tag: 'button', type: 'button', cn: [
            {tag: 'span', cls: ['neo-button-glyph']},
            {tag: 'span', cls: ['neo-button-text']},
            {tag: 'span', cls: ['neo-button-badge'], style: {
                color     : 'white',
                marginLeft: 'auto',
                position  : 'absolute',
                top       : '-10px',
                right: '-10px',
                backgroundColor: 'red',
                borderRadius: '5px',
                padding: '3px'
            }}
        ]}
    }}

    /**
     * Triggered after the badgeText config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetBadgeText(value, oldValue) {
        let me      = this,
            vdom    = me.vdom,
            badgeEl = vdom.cn[2];

        badgeEl.html      = value;
        badgeEl.removeDom = !Boolean(value);

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(BadgeButton);

export default BadgeButton;
