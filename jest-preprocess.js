const { createTransformer } = require('babel-jest').default;

const babelOptions = {
    presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
};

module.exports = createTransformer(babelOptions);
