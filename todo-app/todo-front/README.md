# React application

This application is created with [Vite](https://vitest.dev/).

Install dependencies with `npm install`

You can run the application in development mode with `npm run dev`

You can build static files for production release with `npm run build`

## Environment variables

Use env VITE_BACKEND_URL to set where the backend for this application is

## Docker

When running in dev mode, run `docker compose -f docker-compose.dev.yml up`. Note that the backend services need to be running in docker but the backend services should be run using `npm run dev` from the BE directory. The backend should be available at `localhost:3000`
