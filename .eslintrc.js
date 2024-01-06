module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  "prettier/prettier": [
    "error",
    {
      "endOfLine": "auto"
    }
  ],
  'no-console': 'off'
}
