module.exports = () => {
  return {
    env: {
      type: "node",
    },

    testFramework: {
      configFile: "./jest.config.js",
    },
  };
};
