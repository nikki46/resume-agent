import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const stage = resolve(root, '.langsmith-build');
await rm(stage, { recursive: true, force: true });
await mkdir(stage, { recursive: true });
// Explicit allowlist prevents secrets, Vercel state, and API routes entering the static bundle.
for (const file of ['components', 'hooks', 'lib', 'public', 'tsconfig.json', 'postcss.config.mjs']) {
  await cp(resolve(root, file), resolve(stage, file), { recursive: true });
}
await cp(resolve(root, 'app'), resolve(stage, 'app'), {
  recursive: true,
  filter: path => path !== resolve(root, 'app/api') && path !== resolve(root, 'app/chatgpt-auth.ts'),
});
await writeFile(resolve(stage, 'package.json'), JSON.stringify({ name: 'scout-langsmith-ui', private: true, type: 'module' }));
await writeFile(resolve(stage, 'next.config.ts'), 'export default { output: "export", images: { unoptimized: true } };\n');
const result = spawnSync(process.execPath, [resolve(root, 'node_modules/next/dist/bin/next'), 'build', '--webpack', stage], {
  cwd: root, stdio: 'inherit', env: { ...process.env, NEXT_PUBLIC_HOSTING_TARGET: 'langsmith', NEXT_TELEMETRY_DISABLED: '1' },
});
process.exit(result.status ?? 1);
