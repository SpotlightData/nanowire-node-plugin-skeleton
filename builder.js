const { start, when, bundle } = require('@atecake/builder');

const pkg = require('./package.json');

start([
  when('build', [
    bundle({
      files: { input: 'src/index.js', output: pkg.main },
    }),
  ]),
]);
