module.exports = {
  name: 'payments',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/payments',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
