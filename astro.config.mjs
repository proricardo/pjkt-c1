import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://projekt.com.br',
  output: 'static',
  markdown: {
    syntaxHighlight: 'shiki'
  }
});
