TypeScript setup for this workspace

Quick start (Windows PowerShell):

1. Install dependencies

npm install

2. Build all TypeScript files to `dist`

npm run build

3. Run a single .ts file directly (uses ts-node)

npm run start

4. Development with auto-reload (ts-node-dev)

npm run dev

Notes:
- `tsconfig.json` compiles TS files from the repo root into `dist/`.
- `ts-node` runs .ts files directly without a separate build step (good for scripting / quick testing).
- If you want to run a different file with `ts-node`, replace the path in `package.json` `start`/`dev` scripts or run `npx ts-node path/to/file.ts`.
