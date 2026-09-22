ELEVANGOLA TECH — SITE COM SOLUÇÕES FUJI
Entrega: integração da brochura Fuji no site existente

FICHEIROS NOVOS
- solucoes.html   → página principal da gama (já existia; foi reconstruída)
- passageiros.html → elevadores de passageiros: benefícios, tecnologia, 25 cabines
                      com filtro e favoritos, painéis, portas, tectos, dimensões
                      de obra, segurança e panorâmicos
- villa.html      → elevador villa: 3 tamanhos com plantas à escala, tabela e
                      desenho de obra
- carga.html      → elevador de carga, elevador de viaturas e montapratos
- fuji.html       → "porquê Fuji": empresa, fábrica, segurança, energia,
                      certificações, percurso e projectos de referência

FICHEIROS ALTERADOS
- index.html      → cartões da secção "Soluções" agora têm fotografia e ligam
                      às páginas novas; nova secção "Cabines e acabamentos";
                      nova secção "Equipamento Fuji"
- sobre.html, servicos.html, processo.html → sem alterações de conteúdo;
                      apenas correcções técnicas (ver abaixo)
- contactos.html  → o formulário aceita agora ?tipo=...&msg=... na URL, para
                      chegar pré-preenchido a partir dos botões "Pedir orçamento"
                      das páginas de solução
- assets/styles.css → CSS original mantido integralmente; acrescentado no fim
                      (nunca substituído) + a fonte Inter local
- assets/app.js   → script original mantido integralmente; acrescentada uma
                      função pequena de pré-preenchimento do formulário
- assets/solucoes.js → novo, só carrega nas páginas de solução: filtro de
                      cabines e barra de favoritos
- assets/logo_elevangola.png → mesma imagem, comprimida (266 KB → 44 KB)
- assets/fonts/inter-var-latin.woff2 → fonte Inter local (a Font Awesome foi
                      removida; o ícone do WhatsApp passou a SVG embutido)
- assets/img/     → 71 imagens da brochura Fuji, convertidas para WebP
                      (1,4 MB ao todo, antes eram 3,7 MB + 17,7 MB em PDF)

CORRECÇÕES FEITAS EM TODO O SITE
- Email unificado para geral@elevangola.ao (estava geral@engelevatech.ao
  nalgumas páginas e geral@elevangola.ao noutras)
- Removida a biblioteca Font Awesome (carregava um script inteiro só para
  o ícone do WhatsApp); substituída por um SVG de +/-1 KB
- A fonte Inter passou a estar no próprio site (antes não estava declarada
  em lado nenhum, por isso o texto usava a fonte do sistema)
- O menu de rodapé de todas as páginas passou a incluir as 4 páginas novas

POR CONFIRMAR
- O texto sobre a Fuji (fuji.html) usa números e certificações indicados na
  brochura do fabricante (1985, 108 m, 10.000 elevadores/ano, EN 81, ISO
  9001, CE, etc.). Convém confirmar que a Elevangola Tech tem autorização
  para os citar publicamente e cópias dos certificados, se pedidos.
- A tabela de montapratos (carga.html) não tem números, porque a brochura
  Fuji não os traz — fica "configuração sob consulta", como no site actual
  para o simulador de preço.
- O botão "PEDIR PROPOSTA" do montapratos e os botões "Pedir orçamento"
  das páginas de solução enviam para contactos.html com o tipo de projecto
  já seleccionado; confirme que o texto de cada categoria no formulário
  (select "tipo_projeto") corresponde ao que a equipa espera receber.

COMO PÔR NO AR
Carregar a pasta inteira (todas as páginas .html e a pasta assets/) para o
alojamento actual do site, substituindo os ficheiros com o mesmo nome.
Nenhuma configuração adicional é necessária: não há passo de build, é HTML,
CSS e JavaScript simples.


ACTUALIZAÇÃO (2ª entrega)
- Aviso "role para baixo": todas as páginas com a animação da porta a abrir
  (solucoes, passageiros, villa, carga, fuji) mostram agora, por baixo do
  banner, um aviso discreto com seta a piscar, que desaparece assim que a
  pessoa começa a rolar a página ou se clicar nele. Resolve a sensação de
  "ficar preso" atrás da porta aberta.
- Villa e Montapratos passaram a ter imagem: como a brochura da Fuji não
  traz fotografias destes dois equipamentos, foram desenhadas duas
  ilustrações técnicas originais (tipo corte arquitectónico, no mesmo
  estilo das plantas já usadas no site: fundo azul-marinho, traço a
  dourado, com uma figura humana para dar noção de escala). Cada uma tem
  o selo "ILUSTRAÇÃO" sobreposto e uma legenda a dizer claramente que não
  é uma fotografia do equipamento — para não induzir o cliente em erro.
  Ficam em assets/img/villa-illustracao.svg e
  assets/img/montapratos-illustracao.svg.
- Certificações da Fuji: reforçada a distinção entre fabricante e
  distribuidor. A página "Porquê Fuji" passou a ter uma nota explícita
  ("A Elevangola Tech é distribuidora e parceira técnica dos equipamentos
  Fuji em Angola — não é a entidade certificadora") e a secção da empresa
  mudou de "A empresa" para "O fabricante", para não haver ambiguidade
  sobre quem detém a licença de nível AA (é da Fuji, na China, não da
  Elevangola Tech).
