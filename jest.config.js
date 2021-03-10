module.exports = {
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  "moduleNameMapper": {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  testPathIgnorePatterns: ["/node_modules/"],
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
};
