import { injectReducer } from '../../store/reducers';

export default (store) => ({
    path : 'convertCsv',
  /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
            const ConvertCSV = require('./containers/ConvertCsvContainer').default;
            const reducer = require('./modules/convertCsv').default;

      /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, { key: 'convertCsv', reducer });

      /*  Return getComponent   */
            cb(null, ConvertCSV);

    /* Webpack named bundle   */
        }, 'convertCsv');
    }
});
