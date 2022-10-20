import Store from '../../../node_modules/neo.mjs/src/data/Store.mjs';
import Movie from '../model/Movie.mjs';

/**
 * @class W2022_10_20.store.Movies
 * @extends Neo.data.Store
 */
class Movies extends Store {
    static getConfig() {return {
        /**
         * @member {String} className='W2022_10_20.store.Movies'
         * @protected
         */
        className: 'W2022_10_20.store.Movies',
        model: Movie
    }}
}

Neo.applyClassConfig(Movies);

export default Movies;
