module.exports = {
  name: 'lagacy-j-query',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/lagacy-j-query',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
