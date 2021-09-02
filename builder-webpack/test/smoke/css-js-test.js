const glob = require('glob-all');

// eslint-disable-next-line no-undef
describe('checking generate file exists', () => {
  // eslint-disable-next-line no-undef
  it('should generate js & css files', (done) => {
    const files = glob.sync(
      [
        './dist/index_*.js',
        './dist/search_*.js',
        './dist/index_*.css',
        './dist/search_*.css',
      ],
    );
    if (files.length > 0) {
      done();
    } else {
      throw new Error('No files found');
    }
  });
});
