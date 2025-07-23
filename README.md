# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Branching Rules

> `main` - `deploy-prodaction`
> `staging` - `final-review before submitting a PR`
> `feature/nav-bar` - `developed branch`
> `fix/nav-bar` - `bugfix branch`

- The `main` branch always contains the latest stable release. Do not commit directly to `main`.
- Create a new branch for each feature, bugfix, or task. Use clear and descriptive names, such as `feature/login-page` or `fix/navbar-bug`.
- Before starting work, pull the latest changes from `main` and branch off from it.
- Open a pull request (PR) to merge your branch into `main` when your work is complete.
- Ensure your branch passes all tests and follows the project's coding standards before submitting a PR.
- Resolve any merge conflicts with `main` before requesting a review.
- Delete your branch after it has been merged.
