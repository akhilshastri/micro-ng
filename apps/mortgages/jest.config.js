module.exports = {
  name: 'mortgages',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mortgages',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
