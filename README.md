# Starter template with next.js 14 and google authentication

### Packages used:

- next 14
- next-auth 5 Beta
- vercel/postgres
- drizzle-orm
- google adapter

Install with:

> npm install

After that copy file .env.local.example to .env.local

> .env.local.example -> .env.local

Add your own variables, you need to create database in vercel and app in google, after you add your settings inside .env.local, you can run a migration to populate database with authentication tables:

> npm run migration:push

Your template with google authentication is ready, you can run

> npm run dev

You can add more authentication adapters (Facebook, Github and etc) inside

> /src/utils/auth.ts
