module.exports = {
  '*.{js,jsx,ts,tsx}': [
    () => 'tsc -p tsconfig.json --noEmit',
    () => 'next lint',
    () => 'prettier --write .',
  ],
};
