import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx'],
      layout: {
        runbook: resolve(root, 'src/lib/layouts/runbook.svelte')
      }
    })
  ],
  kit: {
    adapter: adapter(),
    alias: {
      '#lib': 'src/lib'
    },
    prerender: {
      handleHttpError: 'warn'
    }
  }
};

export default config;
