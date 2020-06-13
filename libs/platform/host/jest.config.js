module.exports = {
  name: 'platform-host',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/platform/host',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
