# Brandão Luthieria

Site estático da oficina de Hugo Brandão, luthier na Chácara Santo Antônio (São Paulo): regulagem, elétrica, reparo e pintura de violão, guitarra e baixo. Publicado em https://brandaoluthieria.vercel.app/.

## Stack

HTML, CSS e JavaScript, sem framework, bundler ou gerenciador de pacotes. A Vercel publica a pasta `public` (`vercel.json`: `installCommand` e `buildCommand` vazios, `outputDirectory`: `public`).

## Pastas

- `public/index.html` — página
- `public/style/style.css` — estilos
- `public/script.js` — menu, rolagem e ano
- `public/imagens/` — fotos
- `public/robots.txt`, `public/sitemap.xml` — SEO
- `vercel.json` — deploy e headers
- `.github/workflows/ci.yml` — confere se os arquivos do site existem

## Comandos

Não há `package.json` nem scripts de install, lint ou build.

- Install: nenhum (`installCommand` vazio)
- Dev: abrir `public/index.html` no navegador
- Lint: nenhum
- Test: nenhum no repo; o CI só roda `test -s` nos arquivos obrigatórios
- Build: nenhum (`buildCommand` vazio; a saída já é `public/`)

## Agentes

- Faça mudanças pequenas, só no que foi pedido.
- Não leia `node_modules`, builds (`.next`, `dist`, `build`, `out`, `coverage`), lockfiles nem o que está no `.cursorignore`.
- Não faça merge.
