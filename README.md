# AF Negócios Digitais — site

Site institucional da AF Negócios Digitais, construído com [Astro](https://astro.build) como site 100% estático: cada página é gerada em HTML no build, sem depender de JavaScript para exibir conteúdo, para ter bom SEO e Core Web Vitals.

O visual segue o design system em `Design_System_AF_Negocios_Digitais.pdf` e o protótipo em `AF_Negocios_Digitais_Design_System.zip`. Para consultar o protótipo, extraia o zip em `referencia/` (essa pasta é ignorada pelo git).

## Comandos

| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências (Node 20+) |
| `npm run dev` | Servidor local em `http://localhost:4321` |
| `npm run build` | Checa os tipos e gera o site em `dist/` |
| `npm run preview` | Serve o `dist/` localmente |

## Onde editar

- **Contatos, telefone, e-mail, redes sociais (`sameAs`):** `src/data/site.ts`
- **Serviços (textos, benefícios, title/description de SEO):** `src/data/services.ts`
- **FAQ, depoimentos, etapas do processo:** `src/data/content.ts`
- **Cores, fontes e espaçamentos (tokens):** `src/styles/tokens.css`
- **Estilos dos componentes:** `src/styles/global.css`
- **Head, SEO e dados estruturados (JSON-LD):** `src/layouts/BaseLayout.astro`

## SEO incluído

- Title, meta description e canonical únicos por página; Open Graph e Twitter Card com imagem 1200×630 gerada no build.
- JSON-LD: `ProfessionalService` + `WebSite` em todas as páginas; `Service` nas páginas de serviço; `BreadcrumbList`; `FAQPage` em `/faq`; `AboutPage` e `ContactPage`.
- `sitemap-index.xml` (via `@astrojs/sitemap`) e `robots.txt`.
- Imagens em WebP responsivo; fontes auto-hospedadas com preload; quase nenhum JavaScript.
- As páginas jurídicas (`/privacidade`, `/termos`, `/lgpd`) estão no sitemap com prioridade baixa. Os dados da empresa usados nesses textos (razão social, CNPJ, endereço, encarregado, data de atualização) ficam em `LEGAL`, em `src/data/site.ts`; campos vazios são omitidos do texto.

## Deploy

Funciona tanto na Vercel (`vercel.json`) quanto na Netlify (`netlify.toml`): conecte o repositório e o build é detectado automaticamente.

- Defina a variável `SITE_URL` com o domínio canônico (padrão: `https://afecomm.com.br`).
- Redirecione a outra variante do domínio (www ou sem www) para a canônica com 301.
- Adicione redirecionamentos 301 das URLs do site antigo nos arquivos de configuração.

## Pendências antes do lançamento

1. Revisão jurídica dos textos de Privacidade, Termos e LGPD, e preenchimento de razão social, CNPJ e endereço em `LEGAL` (`src/data/site.ts`). Ao alterar os textos, atualize `LEGAL.updatedAt`.
2. Confirmação dos depoimentos e números em `/cases` e na home.
3. Perfis oficiais em redes sociais (`sameAs` em `src/data/site.ts`).
4. Depois de publicar: verificar o domínio no Google Search Console e no Bing Webmaster Tools, enviar o sitemap e configurar o Google Business Profile.
