# with-jest-swc

This is a simple example of using Remirror with Jest and TypeScript. It uses [@swc/jest](https://swc.rs/docs/usage/jest) to translate the TypeScript code.

Since Remirror v2 is a pure ECMAScript Modules (ESM) package, you need to do some extra work to make it work with Jest. Its recommended to use Jest v28 or higher version because it has better support for ESM. You can find more information about Jest and ESM on [Jest's website](https://jestjs.io/docs/ecmascript-modules).
