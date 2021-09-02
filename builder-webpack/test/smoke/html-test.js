const glob = require('glob-all');

// eslint-disable-next-line no-undef
describe('checking generate file exists', () => {
  // eslint-disable-next-line no-undef
  it('should generate html files', (done) => {
    const files = glob.sync(
      [
        './dist/index.html',
        './dist/search.html',
      ],
    );
    if (files.length > 0) {
      done();
    } else {
      throw new Error('No html files found');
    }
  });
});
