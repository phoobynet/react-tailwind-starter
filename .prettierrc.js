module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // required for pnpm and yarn
  plugins: [require('prettier-plugin-tailwindcss')],
}
