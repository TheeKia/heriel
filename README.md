This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run `bun run lint` to lint the project with Oxlint, or `bun run lint --fix` to apply automatic fixes. Rules and generated-file exclusions are configured in `.oxlintrc.json`.

Run `bun run format` to format the project with Oxfmt, or `bun run format:check` to check formatting without modifying files. Formatting options and exclusions are configured in `.oxfmtrc.json`.

For formatting on save in VS Code, install the recommended [Oxc extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode). The workspace settings select it as the default formatter.

The configuration preserves the supported native rules from the former Next.js and TypeScript ESLint presets. Oxlint currently has no native equivalents for `react/no-deprecated`, `react-hooks/config`, `react-hooks/gating`, or `@next/next/no-location-assign-relative-destination`.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
