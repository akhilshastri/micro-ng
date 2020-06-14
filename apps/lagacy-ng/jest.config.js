module.exports = {
  name: 'lagacy-ng',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/lagacy-ng',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
