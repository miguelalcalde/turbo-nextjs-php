# Demo template barebones

This repo exists to set up custom demos in a very fast with the bare minimum

✅ Create and Deploy from terminal \
✅ shadcn-ui & tailwindcss ready to be used \
✅ Vercel toolbar ready to link vercel project. \

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), and [`shadcn-ui`](https://ui.shadcn.com/)

Add Shadcn-UI components

```bash
npm run a button
# or
pnpm a button
```

## Quick start

#### Create app locally
```
npx create-next-app -e https://github.com/miguelalcalde/demotemplate && 
cd my-app
```
#### Create repo (needs gh cli)
```
git init &&
gh repo create $(basename $(pwd)) --private --source=. --remote=origin && 
git add . && git commit -m "first commit" &&
git push --set-upstream origin $(git_current_branch)
```
#### Push and deploy to vercel (needs vercel cli)
```
vercel link &&
vercel git connect
vercel
```
