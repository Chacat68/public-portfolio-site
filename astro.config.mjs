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

/**
 * 站点 URL 解析顺序：
 * 1. PUBLIC_SITE_URL（本地 .env / Cloudflare Dashboard 构建变量）
 * 2. CF_PAGES_URL（Cloudflare Pages 自动注入）
 * 3. 公开默认地址（非密钥；CI 未配置变量时避免构建失败）
 */
const FALLBACK_SITE_URL = 'https://public-portfolio-site.pages.dev';
const SITE_URL = (
  process.env.PUBLIC_SITE_URL ||
  fileEnv.PUBLIC_SITE_URL ||
  process.env.CF_PAGES_URL ||
  FALLBACK_SITE_URL ||
  ''
).trim();

if (!SITE_URL) {
  throw new Error(
    [
      '缺少 PUBLIC_SITE_URL。',
      '本地：在 .env 中设置，例如 PUBLIC_SITE_URL=https://example.com/',
      'Cloudflare：Dashboard → 项目 Settings → Variables → 添加构建变量 PUBLIC_SITE_URL（Production 与 Preview 均需）',
    ].join('\n')
  );
}

if (
  !process.env.PUBLIC_SITE_URL &&
  !fileEnv.PUBLIC_SITE_URL &&
  !process.env.CF_PAGES_URL
) {
  console.warn(
    `[astro.config] 未检测到 PUBLIC_SITE_URL / CF_PAGES_URL，已回退到 ${FALLBACK_SITE_URL}。建议在 Cloudflare Dashboard 配置构建变量。`
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
