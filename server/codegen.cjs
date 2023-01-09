
const config = {
  overwrite: true,
  schema: "http://localhost:4000",
  generates: {
    "src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

module.exports = config;
