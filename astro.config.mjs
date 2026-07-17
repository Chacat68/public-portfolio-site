// https://astro.build/config
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/** 读取 .env 中的 PUBLIC_*（config 阶段 process.env 不一定已注入） */
function readDotEnv() {
  const envPath = resolve(process.cwd(), '.env');
  const result = {};
  if (!existsSync(envPath)) return result;
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    result[key] = val;
  }
  return result;
}

const fileEnv = readDotEnv();
const SITE_URL = (
  process.env.PUBLIC_SITE_URL ||
  fileEnv.PUBLIC_SITE_URL ||
  ''
).trim();

if (!SITE_URL) {
  throw new Error(
    '缺少 PUBLIC_SITE_URL。请在 .env 中设置真实站点地址，例如 PUBLIC_SITE_URL=https://example.com/'
  );
}

export default defineConfig({
  markdown: {
    shikiConfig: {
    theme: "github-dark",
    wrap: true,
    }
  },
  envPrefix: 'PUBLIC_',
  site: SITE_URL,
  base: '/',
  integrations: [sitemap(), mdx()],
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern",
      },
    },
  },
})
