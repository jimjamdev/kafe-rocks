// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, `src/components`),
        "@typings": path.resolve(__dirname, `types`),
        "@styles": path.resolve(__dirname, `src/styles`),
        "@functions": path.resolve(__dirname, `src/functions`),
      },
    },
  });
};
