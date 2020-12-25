# <%= packageName %>

<%= packageDescription %>

# Developer notes for local development
- Run `nvm use` to use the current node version set for the template.
- Run `npm run dev` to keep monitoring for local changes and to build the CommonJS bundle.
- Run `npm link` in the root of your project root. This will create a symlink in the global folder to run our package.
- Run `<%= packageName %>` to run your cli. But, make sure that you are in the same version of node where you ran your `npm link`
- Once, done remeber to run `npm unlink`
