module.exports = api => {
  api.cache(false);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry"
        }
      ],
      "@babel/preset-react"
    ]
  };
};
