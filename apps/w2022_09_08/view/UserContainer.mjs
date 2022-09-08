import Base  from '../../../node_modules/neo.mjs/src/container/Base.mjs';
import Label from '../../../node_modules/neo.mjs/src/component/Label.mjs';

/**
 * @class W2022_09_08.view.UserContainer
 * @extends Neo.container.Base
 */
class UserContainer extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='W2022_09_08.view.UserContainer'
         * @protected
         */
        className: 'W2022_09_08.view.UserContainer',
        /**
         * @member {Object} itemDefaults
         */
        itemDefaults: {
            module: Label
        },
        /**
         * @member {Object[]} items
         */
        items: [{
            bind: {text: data => data.vmButtonText}
        }]
    }}

    onConstructed() {
        super.onConstructed();

        let me    = this,
            users = me.getModel().data.users.map(user => {
                return {
                    text: user
                }
            });

        me.add(users);
    }
}

Neo.applyClassConfig(UserContainer);

export default UserContainer;
