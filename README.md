# Code test: Lit Button
Based on the LitElement TypeScript Starter project.

**Click on the button and be surprised.**

My focus was on getting to know LitElement framework while having something fun to show. Although the element stated that it should be for a broad audience, this one might not be for two reasons:
1. Too many hectic visual changes might be triggering. I Would solve this by using a more neutral color and less contrasting states for hovering and active
2. Image popping up might break layout of consuming page. I would remove this entirely in a serious project.

Things I did **NOT** do:

- Resetting the css, so non-intended css doesn't get leaked int
- Have my own grid for spacing and sizes, to standardise values being used so you have equal spacing



---------

# LitElement TypeScript starter

This project includes a sample component using LitElement with TypeScript.

This template is generated from the `lit-starter-ts` package in [the main Lit
repo](https://github.com/lit/lit). Issues and PRs for this template should be
filed in that repo.

## Setup

Install dependencies:

```bash
npm i
```

## Build

This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Dev Server

This sample uses modern-web.dev's [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) for previewing the project without additional build steps. Web Dev Server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers. See [modern-web.dev's Web Dev Server documentation](https://modern-web.dev/docs/dev-server/overview/) for more information.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html. Note that this command will serve your code using Lit's development mode (with more verbose errors). To serve your code against Lit's production mode, use `npm run serve:prod`.

## Editing

If you use VS Code, we highly recommend the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin), which enables some extremely useful features for lit-html templates:

- Syntax highlighting
- Type-checking
- Code completion
- Hover-over docs
- Jump to definition
- Linting
- Quick Fixes

The project is setup to recommend lit-plugin to VS Code users if they don't already have it installed.

## Linting

Linting of TypeScript files is provided by [ESLint](eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `.eslintrc.json` and `tsconfig.json`.

To lint the project run:

```bash
npm run lint
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Lit's style. You can change this in `.prettierrc.json`.

Prettier has not been configured to run when committing files, but this can be added with Husky and `pretty-quick`. See the [prettier.io](https://prettier.io/) site for instructions.

## Static Site

This project includes a simple website generated with the [eleventy](https://11ty.dev) static site generator and the templates and pages in `/docs-src`. The site is generated to `/docs` and intended to be checked in so that GitHub pages can serve the site [from `/docs` on the master branch](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

To enable the site go to the GitHub settings and change the GitHub Pages &quot;Source&quot; setting to &quot;master branch /docs folder&quot;.</p>

To build the site, run:

```bash
npm run docs
```

To serve the site locally, run:

```bash
npm run docs:serve
```

To watch the site files, and re-build automatically, run:

```bash
npm run docs:watch
```

The site will usually be served at http://localhost:8000.

**Note**: The project uses Rollup to bundle and minify the source code for the docs site and not to publish to NPM. For bundling and minification, check the [Bundling and minification](#bundling-and-minification) section.

## Bundling and minification

As stated in the [static site generation](#static-site) section, the bundling and minification setup in the Rollup configuration in this project is there specifically for the docs generation.

We recommend publishing components as unoptimized JavaScript modules and performing build-time optimizations at the application level. This gives build tools the best chance to deduplicate code, remove dead code, and so on.

Please check the [Publishing best practices](https://lit.dev/docs/tools/publishing/#publishing-best-practices) for information on publishing reusable Web Components, and [Build for production](https://lit.dev/docs/tools/production/) for building application projects that include LitElement components, on the Lit site.

## More information

See [Get started](https://lit.dev/docs/getting-started/) on the Lit site for more information.
