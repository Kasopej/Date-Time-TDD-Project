module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: ["date-time.js", "test/spec/date-time-spec.js"],
    browsers: ["Chrome"],
    singleRun: true,
    preprocessors: { "*.js": ["coverage"] },
    reporters: ["progress", "coverage"],
  });
};
