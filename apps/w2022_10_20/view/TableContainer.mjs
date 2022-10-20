import Container from '../../../node_modules/neo.mjs/src/table/Container.mjs';

/**
 * @class W2022_10_20.view.TableContainer
 * @extends Neo.table.Container
 */
class TableContainer extends Container {
    static getConfig() {
        return {
            /**
             * @member {String} className='W2022_10_20.view.TableContainer'
             * @protected
             */
            className: 'W2022_10_20.view.TableContainer',
            /**
             * @member {Object[]} columns
             */
            columns: [{
                dataField: 'id',
                text: 'Id'
            }, {
                dataField: 'title',
                text: 'Name'
            },
            {
                dataField: 'image',
                text: 'Image',
                renderer: data => `<img src="${data.value[2].label}">`
            },
            {
                dataField: 'preview',
                text: 'Video',
                renderer: data => `<video src="${data.value[1].attributes.href}" controls></video>`
            }
            ],
            bind: {
                store: "stores.movieStore"
            }
        }
    }
}

Neo.applyClassConfig(TableContainer);

export default TableContainer;
