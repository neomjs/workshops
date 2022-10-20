import Model from '../../../node_modules/neo.mjs/src/data/Model.mjs';

/**
 * @class W2022_10_20.model.Movie
 * @extends Neo.data.Model
 */
class Movie extends Model {
    static getConfig() {
        return {
            /**
             * @member {String} className='W2022_10_20.model.Movie'
             * @protected
             */
            className: 'W2022_10_20.model.Movie',
            /**
             * @member {Object[]} fields
             */
            fields: [{
                name: 'id',
                mapping: 'id.attributes.im:id'
            }, {
                name: 'title',
                type: 'String',
                mapping: 'im:name.label'
            }, {
                name: 'image',
                mapping: 'im:image'
            }, {
                name: 'artist',
                mapping: 'im:artist.label'
            }, {
                name: 'itunesstore',
                mapping: 'link'
            }, {
                name: 'preview',
                mapping: 'link'
            }]
        }
    }
}

Neo.applyClassConfig(Movie);

export default Movie;
