![Build](https://github.com/HugoDF/buttondown/workflows/Build%20&%20test/badge.svg)

microbundle-ts-pkg: A TypeScript npm package skeleton/starter project with microbundle, node:test and prettier

Comes with:

- [SAMPLE_README.md](./SAMPLE_README.md) and [USE_CASES.md](./USE_CASES.md) for documentation.
- [built-in `node:test` runner](https://nodejs.org/dist/latest-v18.x/docs/api/test.html) for testing (see [./tests](./tests))
- prettier for formatting
- microbundle for compiling TypeScript to UMD, ESM, CJS

## Requirements

- Node 18 (to run this repository, due to `node:test` usage)
- npm v7+

## Setup

1. Clone the repository
2. Run `npm install` installs all required dependencies.
3. Run `npm run build` to build from TypeScript to common JavaScript distribution formats.
4. Run `npm test` to run all tests.

## npm scripts

- `npm run test` run tests against **built output** with Node.js' native `node:test` module. **Important**: runs against build output so run `npm run build` beforehand.
- `npm run build` run build from TypeScript to UMD, CJS, ESM with [microbundle](https://github.com/developit/microbundle)
- `npm run watch` runs build in watch mode with [microbundle](https://github.com/developit/microbundle)
- `npm run lint` will ensure all of the files are prettier-formatted
- `npm run format` will run prettier formatting option on all the examples files (and tests).
- `npm run release`, run clean, production build and release with `np`.

# About

This package is maintained by Hugo from [Code with Hugo](https://codewithhugo.com) and [Alpine.js Weekly](https://alpinejs.codewithhugo.com/newsletter).

## Acknowledgments


Special thanks to:

- The developers behind
  - [microbundle](https://github.com/developit/microbundle#readme)
  - [np](https://github.com/sindresorhus/np#readme)

# LICENSE

Code is licensed under the [MIT License](./LICENSE).

