# Coded Immersions Docs
This is the docs site for all of Coded Immersions' packages.

## How it's built
The site is written using [VitePress](https://vitepress.dev/) under the `/src` directory. Then, when we push to the repo,
a GitHub Action builds it using VitePress's own workflow, then pushes it to GitHub Pages.

This way, we don't have to edit raw HTML on our own and test it by each little change, and it makes the documentation-writing faster and easier.

You can check out the site at [docs.codedimmersions.com](https://docs.codedimmersions.com)!