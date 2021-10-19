const assert = require('assert');

describe('wenpack.base.js test case', () => {

    const baseConfig = require('../../lib/webpack.base');
    console.log(baseConfig);
    it('entry', () => {
        assert.equal(baseConfig.entry.index, 'F:/2021-plan/学习/webpack学习/webpack-base-proj/builder-webpack/test/smoke/template/src/index/index.js');
        assert.equal(baseConfig.entry.search, 'F:/2021-plan/学习/webpack学习/webpack-base-proj/builder-webpack/test/smoke/template/src/search/index.js');
    });
});