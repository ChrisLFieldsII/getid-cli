# getid CLI

A CLI to generate ids and copy them to the clipboard. Created with `gluegun`.

Currently only supports `cuid`.

Future state would be to pass flag to change id type.

# Install locally

1. run `npm link` or `yarn link` at root
2. run `getid`

## Customizing your CLI

Check out the documentation at https://github.com/infinitered/gluegun/tree/master/docs.

## Publishing to NPM

To package your CLI up for NPM, do this:

```shell
$ npm login
$ npm whoami
$ npm lint
$ npm test
(if typescript, run `npm run build` here)
$ npm publish
```

# License

MIT - see LICENSE
