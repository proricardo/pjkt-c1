# Projekt — Site Institucional (Astro + GitHub Pages)

Site estático premium para presença institucional da **Projekt**, com foco em inovação e IA.

## Stack
- Astro (SSG)
- TypeScript (config)
- CSS custom (leve, sem dependências pesadas)
- Conteúdo de insights via Astro Content Collections

## Rodando localmente
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Saída em `dist/` (compatível com GitHub Pages).

## Deploy no GitHub Pages
1. Suba o repositório no GitHub.
2. Em **Settings → Pages**, configure Source como **GitHub Actions**.
3. O workflow `.github/workflows/deploy-pages.yml` fará build/deploy automaticamente em pushes na branch `main`.

## Formulário (Formspree/StaticForms)
- Defina o secret do repositório: `PUBLIC_FORM_ENDPOINT`.
- Exemplo Formspree: `https://formspree.io/f/SEU_ID`
- Sem endpoint, o formulário cai automaticamente em fallback `mailto:`.

## Domínio customizado (projekt.com.br)
1. Crie arquivo `CNAME` em `public/CNAME` com `projekt.com.br` (opcional para este repo).
2. DNS recomendado:
   - `A` (apex) para IPs do GitHub Pages.
   - `CNAME` `www` → `<usuario>.github.io`.
3. Em Settings → Pages, marque **Enforce HTTPS** após propagação.

## SEO e compliance
- `robots.txt` em `public/robots.txt`
- Sitemap estático em `public/sitemap.xml`
- OpenGraph/Twitter Cards no layout base
- Schema.org Organization com placeholders
- Páginas LGPD: `/privacidade` e `/cookies`
- Banner de consentimento de cookies com armazenamento local

## Estrutura de rotas
- `/`
- `/servicos`
- `/cases`
- `/metodologia`
- `/sobre`
- `/insights`
- `/insights/[slug]`
- `/contato`
- `/privacidade`
- `/cookies`
- `/404`

## Ajustes pendentes pelo cliente
- Links de redes (`[PREENCHER_*]`)
- Dados reais de cases e depoimentos
- Perfil do fundador(a)
- Endpoint definitivo do formulário
