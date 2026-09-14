# Vida de Homem BH — Colheita completa do site atual + referências para o novo site

> Arquivo de referência para o Claude Code. Contém TUDO que foi extraído de https://vidadehomembh.com.br/ em 14/09/2026: textos verbatim, estrutura, design tokens (cores/fontes exatas do Elementor), inventário de imagens (baixadas em `vdh-imagens.zip`), diagnóstico do site atual e direção criativa para o novo.
>
> Coloque este arquivo na raiz do projeto (ou referencie no `CLAUDE.md`) e descompacte `vdh-imagens.zip` em `public/assets/vdh/`.

---

## 1. O negócio

| Campo | Valor |
|---|---|
| Nome | **Vida de Homem BH** (sigla/marca: **VDH — Vida de Homem Belo Horizonte**) |
| Segmento | Aluguel de ternos e smokings + venda de acessórios masculinos |
| Desde | 2016 |
| Localização | Savassi, Belo Horizonte – MG |
| WhatsApp | **(31) 98272-9433** → `https://wa.me/5531982729433?text=Olá,%20estou%20vindo%20do%20site.` |
| Instagram | `@vidadehomembh` → https://www.instagram.com/vidadehomembh/ |
| Ocasiões atendidas | Casamento (noivo, padrinho, convidado), formatura, festa de 15 anos, evento corporativo |
| Acessórios vendidos | Sapatos, tênis, sapatênis, meias, cintos, gravatas, gravata-borboleta |
| Diferenciais declarados | Higienização rigorosa de todos os ternos; estoque renovado com frequência; cliente pronto em poucos minutos; ajuste/alinhamento do terno; atendimento personalizado (tipo físico + estilo + evento) |
| Trajes citados nas fotos | Cinza aço, azul indy liso, verde, bege areia, smoking slim preto, terno com tênis (padrinhos) |
| Site atual | WordPress + **Elementor 4.2.4** (kit id 6), plugins: Essential Addons (flip box), Smash Balloon Instagram Feed, Floating WhatsApp Button, GTM `GTM-P5SPGSS7`, cache WP Rocket |

---

## 2. Estrutura do site atual (one-page, sem menu)

Página única, 8 blocos, sem menu de navegação (o header só tem o logo). Não há hero — a página abre direto em "Sobre nós".

| # | Seção | Fundo | Conteúdo |
|---|---|---|---|
| 0 | Header (159px) | branco | Logo VDH à esquerda, nada mais |
| 1 | Sobre nós | `#F8F3E1` creme | Ilustração de coluna grega (capitel jônico) atrás de foto da loja + texto + botão WhatsApp |
| 2 | Por que ser nosso cliente | branco | 3 cards com foto P&B e overlay escuro + título/subtítulo em branco + botão |
| 3 | Quem confia, aprova! | branco | 8 flip-boxes (foto na frente, verso `#E0D7BA` com estrelas + título + depoimento) + botão |
| 4 | Depoimentos | `#F8FBF7` | Kicker "DEPOIMENTOS" + título + **carrossel de depoimentos VAZIO (widget quebrado)** + botão |
| 5 | Últimas notícias | `#E0D7BA` | Título + linha + **loop grid VAZIO (sem posts)** + botão "VER TODOS" |
| 6 | Instagram | `#F8F3E1` | Título + @vidadehomembh + grid 4×2 do feed + botão |
| 7 | CTA final | `#F8F3E1` | Card `#8D7D59` com textura espiral, radius 8px, título/texto brancos + botão; foto PNG recortada de homem no celular "vazando" do card |
| 8 | Footer | branco | Logo + "Todos os direitos reservados" (texto quase invisível, contraste ruim) |

Botão flutuante do WhatsApp (verde `#25D366`) no canto inferior direito em todas as seções.

---

## 3. Conteúdo textual (verbatim — reaproveitar/reescrever)

### 3.1 Sobre nós
**H2:** Sobre nós

> A Vida de Homem BH é sua parceira de estilo desde 2016, oferecendo soluções elegantes e práticas para homens que buscam se destacar em ocasiões especiais. Localizada estrategicamente na Savassi, em Belo Horizonte, somos especializados em aluguel de ternos e smokings, além de vender acessórios essenciais como sapatos, tênis, sapatênis, meias e cintos. Com um atendimento personalizado e ágil, garantimos que você encontre o traje perfeito em pouco tempo, seja para um casamento, formatura, festa de 15 anos ou evento corporativo. Nosso compromisso com a qualidade se reflete na renovação constante do estoque e nos rigorosos processos de limpeza e conservação, assegurando que cada cliente saia impecável e confiante para seu evento especial.

**CTA:** FALE CONOSCO

### 3.2 Por que ser nosso cliente
**H2:** Por que ser nosso cliente

| Card | Título | Subtítulo | Imagem |
|---|---|---|---|
| 1 | TODOS OS TERNOS BEM LIMPOS E HIGIENIZADOS | ELEGÂNCIA QUE SE VÊ E SE SENTE! | `uploads/2024/10/Mask-group-68-e1727806667791.webp` |
| 2 | ESTOQUE SEMPRE ATUALIZADO | RENOVAMOS COM FREQUÊNCIA | `uploads/2024/10/box2.jpg` |
| 3 | VOCÊ PRONTO EM POUCOS MINUTOS | SEU TERNO ALINHADO E AJUSTADO | `uploads/2024/10/middle-aged-male-adult-wearing-suit_155003-11596.webp` |

**CTA:** QUERO ALUGAR

### 3.3 Quem confia, aprova! (8 cases com foto)
**H2:** Quem confia, aprova!

| # | Categoria | Texto | Foto (em `uploads/2024/10/`) |
|---|---|---|---|
| 1 | Padrinho | Missão Padrinho concluída com sucesso, com elegância e com estilo. Com um traje cinza aço e tênis. Todos os padrinhos de tênis acompanhando o noivo, muito bacana, moderno e despojado! | `445621156_1191271858994447_2143617100090484711_n-1.webp` |
| 2 | Jantar | Jantar dos Destaques do Galo de Ouro 2023 \| Rio de Janeiro 12/01/24. 🥂 | `424633744_17953330661733189_6491543057013663656_n.webp` |
| 3 | Formatura | Com muito estilo e elegância na formatura de direito da Dom Helder, podemos ver duas propostas diferentes. | `431694958_939683964457538_2782756716936381708_n.webp` |
| 4 | Elegância | A opção pelo azul indy liso com a gravata borboleta é um look diferenciado para quem tem personalidade para usar. | `436985735_411799158253514_1703115008318839797_n.webp` |
| 5 | Formatura | Este traje verde para comemorar a formatura dos amigos? Super recomendado. Destaque na medida certa. | `437081272_1083805896182110_5423197659229877622_n.webp` |
| 6 | Casamento | Existem momentos que são inesquecíveis como foi o casamento do Leonardo e da Marcella. Um casamento mais intimista, mas com muito charme e elegância. Noivo pai da noiva e padrinhos todos de smoking slim preto alinhadissimos. | `438887286_2108363032889913_6882183705212083491_n.webp` |
| 7 | Casamento | Muitas felicidades nessa nova etapa casal!! Ficamos muito felizes em fazer parte desse momento!! E obrigado pela confiança | `382906825_702192401284061_4109458914239482216_n.webp` |
| 8 | Casamento | A alegria que contagia! O traje bege Areia traz a leveza da felicidade! | `419002264_368481142553571_517337951836545738_n.webp` |

Verso do card usa `estrelas-1.png` (5 estrelas, 128×22).
**CTA:** SEJA MAIS UM CLIENTE

### 3.4 Depoimentos
**Kicker:** DEPOIMENTOS (letter-spacing 10px) · **H2:** O que dizem sobre nós · **CTA:** QUERO SER CLIENTE
Carrossel sem conteúdo no site atual. Único depoimento real encontrado (num post do Instagram):

> **Fernanda Silva** ★★★★★ — "Quero compartilhar a minha experiência com a loja: meu noivo precisou de alugar dois ternos nesse mês de abril, encontramos a vida de homem pela internet e desde o primeiro contato por telefone, foram solícitos e explicaram tudo muito bem. Fomos até a loja tirar as medidas, todos da equipe foram atenciosos, ágeis e cordiais, nos ajudando na escolha dos ternos preto e cinza…"

### 3.5 Últimas notícias
**H2:** Últimas notícias · **CTA:** VER TODOS · (vazio — não existe blog)

### 3.6 Instagram
**H2:** Instagram · **Sub:** @vidadehomembh · **CTA:** FALE CONOSCO

Posts do feed (imagens em `uploads/sb-instagram-feed-images/`), todos com layout de marca própria (creme + verde + Bodoni itálico):

| Post | Tema (caption) | Arquivo |
|---|---|---|
| DBjLgAJulRL | "Experiência sem complicação" — foto da loja | `464199219_…_nfull.jpg` |
| DBg6uWLuccc | "Sem Complicações: escolha, ajuste e pronto" | `464295386_…_nfull.jpg` |
| DBeIRkiO8SH | "Pacotes especiais para formatura" (formandos 2024/25) | `464465622_…_nfull.jpg` |
| DBbkSMnOVPO | "Seu terno em poucos minutos" (última hora) | `464180146_…_nfull.jpg` |
| DBY5HkDusPP | "Acessórios que fazem a diferença" | `464258584_…_nfull.jpg` |
| DBTuzcsOYfV | "O que dizem os clientes" (Fernanda Silva) | `463921119_…_nfull.jpg` |
| DBThDFbu1Q6 | "Limpeza impecável: qualidade garantida" | `463898028_…_nfull.jpg` |
| DBRSxZiOF7K | "Fique bem na foto!" — lista: noivos e padrinhos, evento corporativo, formatura, festa de 15 anos | `463772496_…_nfull.jpg` |

### 3.7 CTA final
**H2:** Ajudamos a encontrar o terno ideal para você!

> Com nossa experiência e atendimento personalizado, consideramos seu tipo físico, estilo pessoal e a natureza do evento para recomendar o traje mais adequado a você. Seja um casamento, uma formatura, uma festa de 15 anos ou um evento corporativo, estamos aqui para assegurar que você se sinta bem e confiante com o seu traje escolhido. Ajudamos você a encontrar o terno certo que fará você se destacar como noivo, padrinho, formando ou convidado.

**CTA:** CONVERSAR NO WHATSAPP

### 3.8 Footer
"Todos os direitos reservados"

---

## 4. Design tokens (extraídos do Elementor kit — valores exatos)

### 4.1 Cores

```css
:root {
  /* Paleta oficial do kit Elementor */
  --vdh-green:        #365A48;  /* primary  — botões, divisores, título "Instagram" */
  --vdh-green-deep:   #325542;  /* variação mais escura do verde */
  --vdh-gold:         #8D7D59;  /* secondary — títulos H2, kicker, fundo do card CTA */
  --vdh-cream:        #F8F3E1;  /* "text" no kit, mas usado como FUNDO de seção */
  --vdh-sand:         #E0D7BA;  /* accent — fundo de seção/verso de card, ilustração da coluna */
  --vdh-white:        #FFFFFF;
  --vdh-charcoal:     #272727;  /* texto corrido */
  --vdh-charcoal-64:  rgba(39,39,39,.64); /* texto secundário */
  --vdh-mint-bg:      #F8FBF7;  /* fundo da seção Depoimentos */
  --vdh-whatsapp:     #25D366;  /* botão flutuante */
}
```

Uso observado: fundo branco ↔ creme ↔ areia alternando entre seções; verde só em ações/linhas; dourado em títulos display. Relação: dourado sobre creme (baixo contraste, ~2.9:1 — cuidado em texto pequeno), branco sobre verde (ok), branco sobre dourado (~3.2:1 — só em tamanho grande).

### 4.2 Tipografia

| Papel | Fonte | Peso | Tamanho | Observação |
|---|---|---|---|---|
| Display / H2 | **Bodoni Moda** (Google Fonts) — sempre em **itálico** | 600–700 | 48px (36px em títulos secundários, 45px no CTA) | Cor `#8D7D59`; no bloco Instagram cor `#365A48`; no CTA final `#FFFFFF` |
| Kicker | Poppins | 400 | 16px | uppercase, `letter-spacing: 10px`, cor dourada |
| Título de card | Poppins | 500 | 24px | uppercase, branco sobre overlay |
| Subtítulo de card | Poppins | 500 | ~16px | uppercase, branco |
| Corpo | Poppins (kit) — **mas na prática renderiza fallback do sistema (Segoe UI/Roboto), bug do site atual** | 400 | 16px / lh 24px | cor `#272727` |
| Texto secundário | Poppins | 500 | 14px / lh 21px | `rgba(39,39,39,.64)` |
| Botão | Poppins | 500 | 15px | uppercase, ícone WhatsApp à esquerda |

Google Fonts: `https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@1,6..96,400..900&family=Poppins:wght@400;500;600&display=swap`

### 4.3 Componentes

- **Botão primário:** bg `#365A48`, texto `#FFF`, `padding: 15px 50px`, `border-radius: 3px`, sem borda, ícone WhatsApp (Font Awesome) antes do texto.
- **Divisor de título:** linha 75px × 2px sólida `#365A48`, centralizada abaixo do H2 (branca na seção CTA). Na seção "Últimas notícias" a linha se estende até a borda direita ao lado do título (alinhado à esquerda).
- **Card "Por que":** foto P&B com gradiente escuro de baixo para cima, texto centralizado na base, cantos retos.
- **Flip box:** frente = foto; verso = fundo `#E0D7BA`, 5 estrelas, título Bodoni, texto.
- **Card CTA:** bg `#8D7D59` + textura de espirais/linhas finas (arquivo `CTA-2-e1727879166189.webp`), `border-radius: 8px`, imagem PNG do homem (`businessman-using-smart-phone…png`) posicionada à direita ultrapassando o topo/base do card.
- **Container:** conteúdo ≈ 1130px centralizado; padding lateral 10px; seções com ~80–100px de respiro vertical.
- **Motivo gráfico da marca:** **coluna grega / capitel jônico** (no logo, na ilustração do "Sobre nós" em `#E0D7BA` e nos posts do Instagram). Espirais/volutas aparecem como textura do CTA. ← este é o elemento a explorar no novo site.

### 4.4 Logo
`uploads/2024/10/Mask-group-67.webp` (127×127, versão pequena usada no header/footer) e `uploads/2024/05/vidadehomem.png` (favicon/ícone). Composição: capitel jônico pequeno no topo + "VDH" grande em serifa (verde `#365A48`) + "VIDA DE HOMEM" + "BELO HORIZONTE" em caixa alta, dourado. **Pedir ao cliente o logo vetorial (SVG/AI)** — só existe versão raster pequena no site.

---

## 5. Inventário de imagens (`vdh-imagens.zip` — 28 arquivos, ~1,1 MB)

Caminhos relativos a `wp-content/` (a estrutura de pastas foi preservada no ZIP).

**Marca**
- `uploads/2024/10/Mask-group-67.webp` — logo (127×127)
- `uploads/2024/05/vidadehomem.png` — favicon
- `uploads/2024/10/estrelas-1.png` — 5 estrelas douradas (128×22)

**Fotos institucionais**
- `uploads/2024/10/fotos.webp` (635×559) e `fotos-300x264.webp` — interior da loja (araras de ternos, iluminação de trilho)
- `uploads/2024/10/Mask-group-68-e1727806667791.webp` — terno P&B (card 1)
- `uploads/2024/10/box2.jpg` — terno P&B (card 2)
- `uploads/2024/10/middle-aged-male-adult-wearing-suit_155003-11596.webp` — smoking com gravata-borboleta (card 3, stock)
- `uploads/2024/10/businessman-using-smart-phone-against-white-background-1.png` — homem de terno no celular, fundo transparente (CTA, stock)
- `uploads/2024/10/CTA-2-e1727879166189.webp` — textura de fundo do card CTA (espirais)

**Cases reais (clientes)** — 8 arquivos `uploads/2024/10/4xxxxxxxx_…_n.webp` e `382906825_…`, `419002264_…` (mapeados na tabela 3.3)

**Feed do Instagram** — 8 arquivos `uploads/sb-instagram-feed-images/46xxxxxxx_…_nfull.jpg` (mapeados na tabela 3.6)

**Plugin WhatsApp** — `plugins/floating-wb/template/default/img/whatsapp.png`, `send.png`, `background_wp.png` (descartáveis)

Fallback caso precise rebaixar tudo direto (rodar no Claude Code):

```bash
mkdir -p assets/vdh && cd assets/vdh
BASE=https://vidadehomembh.com.br/wp-content
for f in uploads/2024/10/Mask-group-67.webp uploads/2024/05/vidadehomem.png uploads/2024/10/estrelas-1.png \
 uploads/2024/10/fotos.webp uploads/2024/10/Mask-group-68-e1727806667791.webp uploads/2024/10/box2.jpg \
 uploads/2024/10/middle-aged-male-adult-wearing-suit_155003-11596.webp \
 uploads/2024/10/businessman-using-smart-phone-against-white-background-1.png \
 uploads/2024/10/CTA-2-e1727879166189.webp \
 uploads/2024/10/445621156_1191271858994447_2143617100090484711_n-1.webp \
 uploads/2024/10/424633744_17953330661733189_6491543057013663656_n.webp \
 uploads/2024/10/431694958_939683964457538_2782756716936381708_n.webp \
 uploads/2024/10/436985735_411799158253514_1703115008318839797_n.webp \
 uploads/2024/10/437081272_1083805896182110_5423197659229877622_n.webp \
 uploads/2024/10/438887286_2108363032889913_6882183705212083491_n.webp \
 uploads/2024/10/382906825_702192401284061_4109458914239482216_n.webp \
 uploads/2024/10/419002264_368481142553571_517337951836545738_n.webp \
 uploads/sb-instagram-feed-images/464199219_2873712442797734_3454419328199834882_nfull.jpg \
 uploads/sb-instagram-feed-images/464295386_1449237449080371_7657368760617227294_nfull.jpg \
 uploads/sb-instagram-feed-images/464465622_956046996365231_3423136889251725461_nfull.jpg \
 uploads/sb-instagram-feed-images/464180146_517442254540592_8986686645395494085_nfull.jpg \
 uploads/sb-instagram-feed-images/464258584_1609587163309190_2858332296872233414_nfull.jpg \
 uploads/sb-instagram-feed-images/463921119_1074044897699514_2407771463218018954_nfull.jpg \
 uploads/sb-instagram-feed-images/463898028_928443439034000_4770963545766818417_nfull.jpg \
 uploads/sb-instagram-feed-images/463772496_1069359697740281_5556477051255390890_nfull.jpg
do curl -sSL --create-dirs -o "$f" "$BASE/$f"; done
```

---

## 6. Diagnóstico do site atual (argumentos de venda para o cliente)

1. **Sem hero / sem promessa acima da dobra** — a página abre em "Sobre nós", texto denso, sem foto de impacto e sem CTA forte.
2. **Duas seções vazias em produção** — "Depoimentos" (carrossel quebrado) e "Últimas notícias" (blog inexistente). Passa descuido.
3. **Sem menu de navegação, sem endereço, sem horário, sem mapa, sem telefone visível** — o único canal é o botão de WhatsApp. Não há página de contato nem Google Maps da loja na Savassi.
4. **Sem catálogo** — nenhum terno, cor, modelo, preço ou pacote. Cliente não consegue "ver o estoque" que o site tanto elogia.
5. **Sem processo explicado** — como funciona o aluguel (prazo, medidas, ajuste, devolução, caução, lavagem inclusa)? Nada.
6. **Fonte do corpo quebrada** — Poppins declarada mas não aplicada; renderiza fonte do sistema.
7. **Fotos stock óbvias** (homem no celular, smoking P&B) misturadas com fotos reais de clientes de qualidade inferior.
8. **Contraste baixo** (dourado sobre creme; footer com texto quase invisível).
9. **Rodapé sem CNPJ, endereço, horário, redes, políticas** (LGPD/privacidade).
10. **Sem SEO local** (nada de "aluguel de terno Savassi", "aluguel de smoking BH" como estrutura de páginas) e sem performance otimizada (Elementor + 4 plugins).
11. Logo apenas em raster 127px.

---

## 7. Direção criativa para o novo site ("surreal")

**Conceito:** *"Atelier de ocasião"* — a loja como um templo da elegância masculina. O capitel jônico do logo vira linguagem: colunas, volutas, mármore, bronze. A experiência deve parecer uma vitrine de alfaiataria de luxo, não um site de aluguel.

**Paleta evoluída (mantendo o DNA):**
- Base escura para o hero e seções de impacto: `#0F1A14` (verde-preto) → dá cinematicidade e faz o dourado brilhar.
- Verde `#365A48` como cor de marca; dourado `#8D7D59` → adicionar um "champagne metálico" `#C9B98A` para highlights/linhas finas; creme `#F8F3E1` e areia `#E0D7BA` para seções claras; marfim `#FBF8F0` como branco quente.
- Nunca branco puro em grandes áreas; texto em `#272727` sobre claro, `#F8F3E1` sobre escuro.

**Tipografia:** manter **Bodoni Moda itálico** como display (é o que torna a marca reconhecível) em tamanhos grandes (72–120px no hero, `opsz` alto). Corpo em **Poppins** (ou trocar por *Inter Tight* / *Manrope* para modernizar mantendo geometria). Kicker em caixa alta com tracking 0.3em.

**Movimento e "surreal":**
- Hero em tela cheia com vídeo/foto escura de um terno sendo ajustado, título Bodoni gigante com reveal por máscara; volutas do capitel desenhadas em SVG animado (stroke-dashoffset) ao fundo.
- Scroll suave (Lenis) + GSAP ScrollTrigger: colunas em parallax, ternos "flutuando" em 3D leve (tilt no hover), transições de cor de fundo entre seções (escuro → creme → escuro).
- Cursor customizado dourado; grain/noise sutil sobre fundos escuros; linhas finas champagne como separadores.
- Galeria "Quem confia, aprova!" como carrossel horizontal arrastável com cartões grandes e legenda em Bodoni.
- Seção "Como funciona" em 4 passos com numeração romana (I, II, III, IV) — reforça o tema clássico.

**Arquitetura de páginas sugerida:**
`Home` · `Coleção` (catálogo filtrável: terno / smoking / cor / ocasião, com "reservar pelo WhatsApp") · `Como funciona` (aluguel, medidas, ajuste, devolução, higienização) · `Ocasiões` (Noivo, Padrinhos, Formatura, 15 anos, Corporativo — bom para SEO local) · `Acessórios` · `Galeria / Clientes` · `Sobre` · `Contato` (mapa Savassi, horário, WhatsApp, formulário de agendamento de prova).

**Stack sugerida:** Next.js 15 (App Router) + Tailwind + GSAP/Framer Motion + Lenis; imagens via `next/image` (converter as fotos para AVIF/WebP em 3 tamanhos); CMS leve (Sanity/Payload) ou o próprio sistema que você vai construir alimentando o catálogo.

---

## 8. Gancho para o "sistema completo"

O site novo deve ser a vitrine do sistema. Módulos naturais para uma locadora de ternos (usar como pauta com o cliente):

- **Catálogo/estoque**: peça (paletó, calça, colete, camisa, gravata, sapato) × tamanho × cor × estado; código de barras/QR; fotos.
- **Reservas e agenda**: calendário de eventos, retirada/devolução, bloqueio de peça por período, provas agendadas.
- **Clientes e medidas**: ficha com medidas corporais, histórico de aluguéis, preferências, aniversário do evento.
- **Contratos e pagamentos**: contrato digital, caução, sinal via Pix, multas por atraso/dano.
- **Higienização e manutenção**: fila de lavanderia após devolução, status (disponível / alugado / lavando / ajuste / baixa).
- **WhatsApp**: notificações automáticas (confirmação, lembrete de retirada/devolução, pós-evento pedindo avaliação — alimenta a seção Depoimentos do site, que hoje está vazia).
- **Painel**: ocupação do estoque, peças mais alugadas, receita por ocasião/mês, sazonalidade (formaturas dez/jul, casamentos).
- **Integração site ↔ sistema**: catálogo público lê disponibilidade em tempo real; "reservar" cria pré-reserva no sistema.

---

*Dica: antes de codar, abra o site atual lado a lado e tire screenshots de cada seção (desktop e mobile) para a pasta `docs/referencia/` — o Claude Code lê imagens e isso ajuda a comparar "antes × depois".*
