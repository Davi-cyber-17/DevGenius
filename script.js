/* =====================================================
   DADOS EDITÁVEIS — altere tudo aqui, sem mexer no resto
   ===================================================== */
const DATA = {
  contact: {
    whatsapp: "5511994536354",
    email: "davigracianosouza17@gmail.com",
    github: "https://github.com/Davi-cyber-17",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/davi-graciano-de-souza-a0008a3ab" 
  },
  photo: "img/davi.webp",

  stats: [
    { n: "+50", l: "Projetos realizados" }, { n: "15", l: "Tecnologias" },
    { n: "12", l: "Certificados" }, { n: "02", l: "Anos de experiência" }
  ],

  // Idiomas. Para adicionar um idioma, copie uma linha e preencha: { name: "Nome do idioma", level: "Nível" }
  // Níveis aceitos (escala CEFR, da barra menor para a maior): "A1", "A2", "B1", "B2", "C1", "C2". Também vale "Nativo" (barra cheia).
  // Exemplo: { name: "Inglês", level: "B1" },
  // Se a lista ficar vazia, a seção Idiomas fica escondida no site.
  languages: [
    { name: "Inglês", level: "B1" },
    { name: "Espanhol", level: "B1" }
  ],
  languageLevels: ["A1", "A2", "B1", "B2", "C1", "C2"],
  languageLabels: { A1: "Iniciante", A2: "Básico", B1: "Intermediário", B2: "Intermediário superior", C1: "Avançado", C2: "Proficiente", Nativo: "Língua nativa" },

  skills: [
    { g: "Linguagens",     ico: "{ }", items: ["Java", "Python", "JavaScript", "PHP"], main: "Java" },
    { g: "Front-end",      ico: "</>", items: ["HTML5", "CSS3", "JavaScript"] },
    { g: "Back-end",       ico: "=>",  items: ["Java", "Python", "PHP", "APIs"] },
    { g: "Banco de dados", ico: "DB",  items: ["SQL", "MySQL"] },
    { g: "Ferramentas",    ico: "#",   items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Office 365", "Visual Paradigm"] },
    
  ],

  about: {
    quick: [
      { k: "Quem sou", a: "Davi Graciano de Souza, desenvolvedor full-stack em formação." },
      { k: "O que estudo", a: "Programação, com foco em desenvolvimento full-stack e IA." },
      { k: "O que desenvolvo", a: "Sites, landing pages, sistemas web e projetos com IA." },
      { k: "Tecnologias principais", pills: ["Java", "Python", "JavaScript", "HTML5", "CSS3"] },
      { k: "O que procuro", a: "Oportunidades profissionais e novos projetos." }
    ],
    path: [
      { y: "2024", t: "Início dos estudos em tecnologia" },
      { y: "2025", t: "Conhecendo o Office 365" },
      { y: "2026", t: "Praticando a programação full-stack" },
      { y: "Atualmente", t: "Buscando oportunidades profissionais e projetos", now: true }
    ]
  },

  form: {
    tipos: ["Site institucional", "Landing page", "Sistema web", "API ou back-end", "Melhoria em site existente", "Outro"],
    prazos: ["Urgente (até 2 semanas)", "Até 1 mês", "1 a 3 meses", "Sem pressa"],
    dicas: {
      "Site institucional": "Ex.: qual é a empresa, o que ela faz e quais páginas você precisa (início, serviços, contato...).",
      "Landing page": "Ex.: o que você quer divulgar e qual ação o visitante deve fazer (chamar no WhatsApp, comprar...).",
      "Sistema web": "Ex.: quem vai usar, o que precisa cadastrar ou controlar e se terá login de usuários.",
      "API ou back-end": "Ex.: com o que precisa se integrar, quais dados e quais regras de negócio.",
      "Melhoria em site existente": "Ex.: endereço do site e o que precisa ser corrigido ou melhorado.",
      "Outro": "Conte o que você precisa e qual problema quer resolver."
    }
  },

  /* Assistente virtual (Orion): respostas prontas, escolhidas por palavras-chave. Edite os textos à vontade.
     q     = exemplo de pergunta (só para você se organizar)
     keys  = palavras ESPECÍFICAS do assunto (valem 3 pontos) — sem acento, minúsculas
     weak  = palavras GENÉRICAS (valem 1 ponto): sozinhas não bastam, precisam de 2+ para responder
     max   = (opcional) teto de pontos da resposta; usado em saudação/agradecimento para nunca vencerem um assunto real
     a = resposta | links = botões na resposta. Use "@whatsapp", "@email", "@github" e "@linkedin" para puxar de DATA.contact.
     Como as palavras casam:
       • "java" casa o começo da palavra (java, javascript); palavras de até 3 letras (cv, api, oi) e as que terminam em $ (euro$) casam só a palavra inteira
       • frases ("quanto custa", "como funciona") só casam juntas e valem +1 ponto por palavra extra
       • a mesma palavra não conta duas vezes (certificado/certificados, e mail/mail contam uma vez só)
       • perguntas fora do assunto (nenhuma resposta com 2+ pontos) caem no "fallback" com os botões de contato */
  assistant: {
    hello: "Olá! Me chamo Orion e sou o assistente virtual do Davi. Pergunte sobre tecnologias, projetos, serviços, valores ou contato.",
    fallback: {
      a: "Não tenho uma resposta para essa pergunta. Tente perguntar sobre tecnologias, projetos, serviços ou contato, ou fale direto com o Davi:",
      links: [{ t: "Chamar no WhatsApp", href: "@whatsapp" }, { t: "Enviar e-mail", href: "@email" }]
    },
    faq: [
      /* ORDEM = PRIORIDADE EM EMPATE (a primeira da lista vence). Por isso os assuntos de intenção
         (preço, contato, disponibilidade, processo, currículo) vêm antes dos projetos e das respostas genéricas. */
      { q: "Como peço um orçamento?",
        keys: ["solicitar", "formulario", "solicitar servico", "pedir orcamento", "como peco", "como pedir", "enviar solicitacao", "tipo de projeto", "preencher"],
        weak: ["servico"],
        a: "É só abrir Solicitar Serviço e preencher o formulário: nome, e-mail ou WhatsApp, tipo de projeto (site institucional, landing page, sistema web, API ou back-end, melhoria em site existente ou outro), prazo e uma descrição do que você precisa. A solicitação é enviada por WhatsApp ou e-mail e o Davi responde por lá.",
        links: [{ t: "Solicitar Serviço", href: "#orcamento" }] },
      { q: "Quanto custa um site?",
        keys: ["quanto custa", "preco", "custo", "custa", "valor", "cobra", "orcamento", "barato", "caro$", "pagamento", "investimento", "mensalidade"],
        weak: ["quanto", "pagar", "reais", "dinheiro"],
        a: "Os valores são definidos depois de analisar o projeto, porque cada site ou sistema tem necessidades diferentes. Conte o essencial do projeto em Solicitar Serviço e o Davi responde por WhatsApp ou e-mail.",
        links: [{ t: "Solicitar Serviço", href: "#orcamento" }] },
      { q: "Como entrar em contato?",
        keys: ["contato", "contatar", "entrar em contato", "whatsapp", "zap", "zapzap", "email", "e mail", "mail", "telefone", "celular", "linkedin", "github", "instagram", "redes sociais", "falar com", "conversar com", "posso falar", "quero falar", "quero conversar", "chamar"],
        weak: ["falar", "conversar", "redes", "numero", "onde encontro"],
        a: "Você pode falar com o Davi pelo WhatsApp ou por e-mail, ou preencher o formulário em Solicitar Serviço. Ele também está no LinkedIn e no GitHub. Escolha o que for mais fácil:",
        links: [{ t: "WhatsApp", href: "@whatsapp" }, { t: "E-mail", href: "@email" }, { t: "LinkedIn", href: "@linkedin" }, { t: "GitHub", href: "@github" }, { t: "Solicitar Serviço", href: "#orcamento" }] },
      { q: "Ele está disponível para trabalhar?",
        keys: ["disponivel", "disponiveis", "disponibilidade", "contrat", "vaga", "oportunidade", "freelanc", "freela", "emprego", "estagio", "recrut", "procura", "trabalhar comigo", "trabalhar conosco", "trabalhar para", "trabalhar pra", "aberto a"],
        weak: ["trabalhar com", "trabalha"],
        a: "Sim. O Davi está buscando oportunidades profissionais e novos projetos. Se quiser conversar, chame no WhatsApp ou envie um e-mail.",
        links: [{ t: "WhatsApp", href: "@whatsapp" }, { t: "E-mail", href: "@email" }] },
      { q: "Como funciona o processo?",
        keys: ["processo", "etapa", "prazo", "demora", "entrega", "quanto tempo leva", "quanto tempo demora", "quanto tempo para", "quanto tempo pra", "passo a passo"],
        weak: ["como funciona", "funciona", "passo", "tempo", "leva", "levar"],
        a: "São 6 etapas:\n\n1. Contato: você entra em contato\n2. Conversa: você explica o projeto\n3. Análise: o Davi analisa as necessidades\n4. Proposta: ele define o projeto e o orçamento\n5. Desenvolvimento: ele constrói o site\n6. Entrega: ele entrega e faz os ajustes\n\nNo formulário você também pode indicar o prazo que precisa.",
        links: [{ t: "5Ver como funciona", href: "#como-funciona" }, { t: "Solicitar Serviço", href: "#orcamento" }] },
      { q: "Ele faz projetos urgentes?",
        keys: ["urgente", "urgencia", "pressa", "prazo urgente"],
        weak: ["semanas"],
        a: "No formulário de Solicitar Serviço você escolhe o prazo: urgente (até 2 semanas), até 1 mês, 1 a 3 meses ou sem pressa. Depois de analisar o projeto, o Davi responde por WhatsApp ou e-mail.",
        links: [{ t: "Solicitar Serviço", href: "#orcamento" }] },
      { q: "Onde baixo o currículo?",
        keys: ["curriculo", "cv", "pdf", "baixar curriculo"],
        weak: ["resumo", "baixar", "download"],
        a: "O currículo do Davi está em PDF, no botão \"Baixar currículo\" da seção Sobre.",
        links: [{ t: "Ir para a seção Sobre", href: "#sobre" }] },
      { q: "Fale do MindSide",
        keys: ["mindside", "secretari", "agenda", "compromisso", "tarefa"],
        weak: ["objetivo", "conflito", "historico"],
        a: "MindSide é uma versão demonstrativa de um secretário digital, com tarefas, compromissos, agenda, objetivos e histórico. Ele detecta conflitos de horário, e o assistente interpreta texto livre, mas só altera algo depois da sua aprovação. Roda no navegador, com os dados salvos no próprio dispositivo.\n\nTecnologias: HTML5, CSS3, JavaScript e AI.",
        links: [{ t: "Ver MindSide", href: "https://davi-cyber-17.github.io/MindSide/" }, { t: "Todos os projetos", href: "#projetos" }] },
      { q: "Fale do Arcadia-Lab",
        keys: ["arcadia", "jogo", "game", "match", "turbo", "super gol", "plataforma de jogos"],
        weak: ["recorde", "favorito", "gratuit"],
        a: "Arcadia-Lab é uma plataforma de jogos gratuita que roda direto no navegador, com 32 jogos organizados por categoria. Tem busca, favoritos, histórico de jogos recentes, tema claro e escuro, modo tela cheia e uma seção de recordes. Um contador global de acessos em PHP alimenta a lista de populares.\n\nTecnologias: HTML5, CSS3, JavaScript e PHP.\n\nJogos em destaque: Match-3, Turbo Byte e Super Gol.",
        links: [{ t: "Ver Arcadia-Lab", href: "https://arcadia-lab.gt.tc/?i=1" }, { t: "Match-3", href: "https://davi-cyber-17.github.io/Match-3/" }, { t: "Turbo Byte", href: "https://davi-cyber-17.github.io/Turbo-Byte/" }, { t: "Super Gol", href: "https://davi-cyber-17.github.io/Super-Gol/" }] },
      { q: "Fale do Nexo FX",
        keys: ["nexo", "cambio", "cotac", "moeda", "conversao", "dolar", "euro$"],
        weak: ["grafico", "mercado", "variac"],
        a: "Nexo FX é uma plataforma que permite acompanhar cotações de moedas, realizar conversões, visualizar gráficos e monitorar as variações do mercado cambial.\n\nTecnologias: HTML5, CSS3 e JavaScript.",
        links: [{ t: "Ver Nexo FX", href: "https://davi-cyber-17.github.io/NexoFX/" }, { t: "Todos os projetos", href: "#projetos" }] },
      { q: "Fale do PizzaByte",
        keys: ["pizza", "cardapio", "pedido"],
        weak: ["delivery", "personaliz"],
        a: "PizzaByte é um sistema demonstrativo de pedidos online para pizzarias, com cardápio interativo, personalização de pizzas e ferramentas administrativas para gerenciar produtos e pedidos.\n\nTecnologias: HTML5, CSS3, JavaScript e Python.",
        links: [{ t: "Ver PizzaByte", href: "https://davi-cyber-17.github.io/PizzaByte/" }, { t: "Todos os projetos", href: "#projetos" }] },
      { q: "Fale do site da R&F",
        keys: ["r f", "construtora", "obra", "reforma"],
        weak: ["residencial", "comercial", "engenharia"],
        a: "R&F Soluções em Obras é um site institucional de uma construtora de obras e reformas residenciais e comerciais, com serviços, projetos executados, liderança e formulário de contato.\n\nTecnologias: HTML5, CSS3 e JavaScript.",
        links: [{ t: "Ver R&F Soluções em Obras", href: "https://rfsolucoesemobras.gt.tc/?i=1" }, { t: "Todos os projetos", href: "#projetos" }] },
      { q: "Fale da imersão na Samsung",
        keys: ["samsung", "sic", "innovation campus", "simulador", "morumbi", "e commerce", "ecommerce", "star$", "mentoria", "mentor", "imersao", "entrevista"],
        a: "Em 21/10/2026, o Davi passou o dia no escritório da Samsung, no Morumbi, em São Paulo, pelo curso Samsung Innovation Campus (SIC), do SENAI e patrocinado pela Samsung. Teve mentoria com profissionais da empresa sobre E-Commerce, aprendeu o método STAR para entrevistas, praticando em um simulador de entrevista, e conheceu as novidades da Samsung e a rotina de uma empresa global de tecnologia.",
        links: [{ t: "Ver experiências", href: "#experiencias" }] },
      { q: "Quais idiomas ele fala?",
        keys: ["idioma", "idiomas", "ingles", "espanhol", "b1", "lingua estrangeira", "fala ingles", "fala espanhol"],
        a: "O Davi tem inglês nível B1 e espanhol nível B1 (intermediário). Os idiomas aparecem na seção Habilidades.",
        links: [{ t: "Ver idiomas", href: "#habilidades" }] },
      { q: "Fale da palestra sobre Linux",
        keys: ["linux", "maddog", "mad dog", "jon hall", "software livre"],
        a: "Em 27/05/2026, o Davi assistiu presencialmente, no SENAI onde estuda, a uma palestra sobre Linux ministrada por Jon “maddog” Hall. Ele contou a história do Linux, como utilizar o Linux e falou de um novo hardware que o Linux estava desenvolvendo.",
        links: [{ t: "Ver experiências", href: "#experiencias" }] },
      { q: "Fale do Gemini Academy",
        keys: ["gemini", "google", "academy", "agente"],
        a: "Em 29/04/2026, o Davi participou do Gemini Academy, evento do Google realizado presencialmente no SENAI, onde ele estuda. Aprendeu as funcionalidades do Gemini e como usá-lo da forma certa, como configurar um agente do Gemini e como ele pode ajudar em tarefas diárias.",
        links: [{ t: "Ver experiências", href: "#experiencias" }] },
      { q: "Quantos certificados ele tem?",
        keys: ["quantos certificados", "quantos cursos", "quantidade de certificados", "total de certificados"],
        a: "O Davi tem 12 certificados, organizados em três categorias: Pequenos (7), Médios (2) e Grandes (3). Na seção Certificados, escolha uma categoria para ver cada um.",
        links: [{ t: "Ver certificados", href: "#certificados" }] },
      { q: "Ele tem certificados?",
        keys: ["certificad", "certificac", "curso", "diploma", "onu", "diplomata", "empreendedor", "economia circular", "excel", "word$", "escola virtual"],
        weak: ["onedrive", "outlook"],
        a: "Sim! O Davi tem certificados de cursos do SENAI e da Escola Virtual, em temas como inteligência artificial, Office 365 (Word, Excel, Outlook e OneDrive), programação com HTML, CSS, JavaScript e Python, comportamento empreendedor e economia circular. Também tem o certificado de Diplomata Social, por ter sido delegado em um Modelo ONU.\n\nNa seção Certificados, escolha uma categoria (Pequenos, Médios ou Grandes) para ver cada um.",
        links: [{ t: "Ver certificados", href: "#certificados" }] },
      { q: "Ele sabe inteligência artificial?",
        keys: ["inteligencia artificial", "ia", "ai"],
        a: "Sim. O Davi tem conhecimento em IA, desde o funcionamento até como usá-la da forma certa. Ele fez cursos sobre o tema (IA para Estudantes, Ética na Era da IA e Comunicação e Mobilização com IA), participou do Gemini Academy e criou o MindSide, em que um assistente interpreta texto livre e só altera algo depois da sua aprovação.",
        links: [{ t: "Ver MindSide", href: "https://davi-cyber-17.github.io/MindSide/" }, { t: "Ver certificados", href: "#certificados" }] },
      { q: "Ele faz automação?",
        keys: ["automac", "automatiz", "automatizar processos"],
        a: "Sim. Entre o que o Davi cria estão sites, landing pages, sistemas web, automação e banco de dados.",
        links: [{ t: "Ver habilidades", href: "#habilidades" }, { t: "Solicitar Serviço", href: "#orcamento" }] },
      { q: "Quais tecnologias ele utiliza?",
        keys: ["tecnolog", "linguagem", "java", "python", "php", "stack", "habilidad", "ferramenta", "framework", "banco de dados", "mysql", "front", "backend", "back end", "back$", "html", "css", "sql", "api", "apis", "git", "intellij", "vs code", "visual paradigm", "office"],
        weak: ["sabe", "conhece", "domina", "utiliza"],
        a: "O Davi trabalha principalmente com Java e também tem experiência com Python, JavaScript e PHP.\n\n• Front-end: HTML5, CSS3 e JavaScript\n• Back-end: Java, Python, PHP e APIs\n• Banco de dados: SQL e MySQL\n• Ferramentas: Git, GitHub, VS Code, IntelliJ IDEA, Office 365 e Visual Paradigm",
        links: [{ t: "Ver habilidades", href: "#habilidades" }] },
      { q: "Quais são as experiências dele?",
        keys: ["experiencia", "senai", "visita", "evento", "palestra"],
        weak: ["vivencia"],
        a: "Algumas experiências do Davi:\n\n• Imersão na Samsung (21/10/2026): passou o dia no escritório da Samsung, no Morumbi, em São Paulo, pelo curso Samsung Innovation Campus (SIC), do SENAI. Teve mentoria com profissionais da empresa sobre E-Commerce, método STAR para entrevistas (com simulador de entrevista) e novidades da Samsung.\n• Palestra sobre Linux (27/05/2026): palestra presencial no SENAI com Jon “maddog” Hall, sobre a história do Linux, como utilizar o Linux e um novo hardware que o Linux estava desenvolvendo.\n• Gemini Academy (29/04/2026): evento do Google realizado presencialmente no SENAI, sobre funcionalidades do Gemini, como configurar um agente e como usá-lo em tarefas diárias.",
        links: [{ t: "Ver experiências", href: "#experiencias" }] },
      { q: "Qual a trajetória dele?",
        keys: ["trajetoria", "linha do tempo", "como comecou", "quando comecou", "comecou", "ele comecou", "comecou na", "iniciou", "como tudo comecou"],
        a: "A trajetória do Davi: em 2024, começou os estudos em tecnologia; em 2025, conheceu o Office 365; em 2026, passou a praticar programação full-stack. Atualmente, busca oportunidades profissionais e projetos.",
        links: [{ t: "Conhecer mais", href: "#sobre" }] },
      { q: "Quais projetos ele já fez?",
        keys: ["projeto", "portfolio", "portifolio", "trabalhos", "exemplo", "cases", "demo", "ja fez", "o que ele fez", "quais sites", "que sites", "quais sistemas", "que sistemas"],
        weak: ["fez", "feito", "fizeram"],
        a: "Alguns projetos do Davi:\n\n• R&F Soluções em Obras: site institucional de uma construtora, com serviços, projetos executados e formulário de contato.\n• MindSide: versão demonstrativa de um secretário digital, com tarefas, agenda, objetivos e histórico.\n• Nexo FX: plataforma para acompanhar cotações de moedas, fazer conversões e ver gráficos.\n• PizzaByte: sistema demonstrativo de pedidos online para pizzarias.\n• Arcadia-Lab: plataforma de jogos gratuita no navegador, com 32 jogos.\n\nEsses não são todos os projetos que o Davi já fez, são apenas alguns que ele achou interessante mostrar no site. Pergunte sobre qualquer um deles para saber mais.",
        links: [{ t: "R&F Soluções em Obras", href: "https://rfsolucoesemobras.gt.tc/?i=1" }, { t: "MindSide", href: "https://davi-cyber-17.github.io/MindSide/" }, { t: "Nexo FX", href: "https://davi-cyber-17.github.io/NexoFX/" }, { t: "PizzaByte", href: "https://davi-cyber-17.github.io/PizzaByte/" }, { t: "Arcadia-Lab", href: "https://arcadia-lab.gt.tc/?i=1" }, { t: "Todos os projetos", href: "#projetos" }] },
      { q: "Ele desenvolve sites?",
        keys: ["servico", "desenvolve", "criar", "criacao", "cria", "landing", "aplicativ", "loja virtual", "sistema", "manutencao", "melhoria", "atualizacao", "institucional"],
        weak: ["site", "pagina", "web", "website", "faz", "fazer", "app", "loja", "queria", "quero", "preciso", "gostaria"],
        a: "Sim! Os serviços do Davi são:\n\n• Criação de sites: modernos, responsivos e personalizados\n• Sites institucionais: para empresas, profissionais e projetos\n• Landing pages: focadas em apresentação, divulgação e conversão\n• Sistemas web e back-end: sistemas, APIs e aplicações web completas, do front-end ao back-end\n• Manutenção e melhorias: atualizações, correções e melhorias em sites existentes",
        links: [{ t: "Ver serviços", href: "#servicos" }, { t: "Solicitar Serviço", href: "#orcamento" }] },
      { q: "O que é DevGenius?",
        keys: ["devgenius", "dev genius", "slogan", "go straight", "straight on", "lema", "marca$"],
        a: "DevGenius é o nome sob o qual o Davi apresenta seu trabalho neste site, e o lema é \"Go Straight on.\". Ele é desenvolvedor full-stack e cria sites e sistemas web sob medida, com Java, Python e JavaScript.",
        links: [{ t: "Conhecer mais", href: "#sobre" }] },
      { q: "Qual o diferencial dele?",
        keys: ["diferencial", "por que contratar", "porque contratar", "por que escolher", "excelencia", "qualidade", "atencao aos detalhes", "como ele trabalha", "vantagem"],
        a: "O Davi une lógica, criatividade e atenção aos detalhes, do planejamento à implementação, para criar soluções que façam sentido para quem vai usá-las. Em cada resultado, busca a maior excelência possível e está sempre se aperfeiçoando.",
        links: [{ t: "Ver projetos", href: "#projetos" }, { t: "Solicitar Serviço", href: "#orcamento" }] },
      { q: "O que tem no site?",
        keys: ["o que tem no site", "secao", "secoes", "navegar", "menu", "mapa do site", "onde vejo", "onde fica"],
        a: "O site tem seis seções: Sobre (com trajetória e currículo), Habilidades, Projetos, Experiências, Certificados e Contato. Também há o painel Solicitar Serviço, com serviços, como funciona e o formulário de orçamento.",
        links: [{ t: "Sobre", href: "#sobre" }, { t: "Habilidades", href: "#habilidades" }, { t: "Projetos", href: "#projetos" }, { t: "Experiências", href: "#experiencias" }, { t: "Certificados", href: "#certificados" }, { t: "Contato", href: "#contato" }, { t: "Solicitar Serviço", href: "#orcamento" }] },
      { q: "Qual a idade dele?",
        keys: ["idade", "que idade", "quantos anos ele tem", "anos ele tem"],
        a: "O Davi tem 17 anos.",
        links: [{ t: "Conhecer mais", href: "#sobre" }] },
      { q: "Quem é o Davi?",
        keys: ["quem e o davi", "quem e davi", "quem e ele", "sobre o davi", "sobre ele", "fale do davi", "fale dele", "conte sobre", "apresent", "formacao", "historia", "especialidade", "estuda", "estudo", "tempo de experiencia", "anos de experiencia", "quantos anos ele programa", "quantos anos de", "desde quando", "ha quanto tempo"],
        weak: ["quem", "sobre", "davi", "principal", "conhece"],
        a: "O Davi Graciano de Souza é desenvolvedor full-stack. Sua linguagem principal é Java, e ele também trabalha com Python e JavaScript. Estuda programação desde 2024, com foco em desenvolvimento full-stack, e cria sites, landing pages, sistemas web e projetos com IA. Gosta de transformar ideias em sistemas e páginas organizados, rápidos e fáceis de manter.",
        links: [{ t: "Conhecer mais", href: "#sobre" }] },
      { q: "Quem é você?",
        keys: ["quem e voce","seu nome","como voce se chama","voce e um robo","voce e uma ia","voce e humano","assistente virtual","chatbot","robo","bot"],
        weak: ["voce","assistente"],
        a: "Eu sou o Orion, o assistente virtual do Davi. Respondo com informações deste site: tecnologias, projetos, serviços, experiências, certificados e contato. Não sou uma pessoa. Para falar com o Davi de verdade, use o contato:",
        links: [{ t: "WhatsApp", href: "@whatsapp" }, { t: "E-mail", href: "@email" }] },
      { q: "Saudação",
        keys: ["oi", "ola", "bom dia", "boa tarde", "boa noite", "e ai", "hello", "hey", "opa", "hi", "tudo bem", "orion", "salve"],
        max: 2,
a: "Olá! Como posso ajudar? Pergunte sobre tecnologias, projetos, serviços, valores ou contato." },
      { q: "Agradecimento",
        keys: ["obrigad", "valeu", "agradec", "brigad", "vlw"],
        max: 2,
a: "Por nada! Se precisar de mais alguma coisa, é só perguntar." }
    ]
  },

  // Categorias dos filtros de projetos
  categories: ["Todos", "Sites", "Sistemas", "Projetos pessoais", "Outros"],
  // demo/repo: deixe "" se não houver (botão fica desativado ou oculto).
  projects: [
    { name: "R&F Soluções em Obras", cat: "Sites", desc: "Site institucional de uma construtora de obras e reformas residenciais e comerciais, com serviços, projetos executados, liderança e formulário de contato.", tech: ["HTML5", "CSS3", "JavaScript"], image: "img/capa-rf.webp", demo: "https://rfsolucoesemobras.gt.tc/?i=1", repo: "", real: true },
    { name: "MindSide", cat: "Projetos pessoais", desc: "Versão demonstrativa de um secretário digital com tarefas, compromissos, agenda, objetivos e histórico. Detecta conflitos de horário e o assistente interpreta texto livre, mas só altera algo depois da sua aprovação. Roda no navegador, com os dados salvos no próprio dispositivo.", tech: ["HTML5", "CSS3", "JavaScript", "Python", "IA"], image: "img/capa-mindside.webp", demo: "https://davi-cyber-17.github.io/MindSide/", repo: "", real: true },
    { name: "Nexo FX", cat: "Sistemas", desc: "Plataforma que permite acompanhar cotações de moedas, realizar conversões, visualizar gráficos e monitorar as variações do mercado cambial.", tech: ["HTML5", "CSS3", "JavaScript"], image: "img/capa-nexofx.webp", demo: "https://davi-cyber-17.github.io/NexoFX/", repo: "", real: true  },
    { name: "PizzaByte", cat: "Outros", desc: "Sistema demonstrativo de pedidos online para pizzarias, com cardápio interativo, personalização de pizzas e ferramentas administrativas para gerenciar produtos e pedidos.", tech: ["HTML5", "CSS3", "JavaScript", "Python"], image: "img/capa-pizzabyte.webp", demo: "https://davi-cyber-17.github.io/PizzaByte/", repo: "", real: true},
    // games: jogos em destaque exibidos dentro do card (nome + link). Deixe fora para projetos sem destaques.
    { name: "Arcadia-Lab", cat: "Sistemas", desc: "Plataforma de jogos gratuita que roda direto no navegador, com 32 jogos organizados por categoria. Tem busca, favoritos, histórico de jogos recentes, tema claro e escuro, modo tela cheia e uma seção de recordes. Um contador global de acessos em PHP alimenta a lista de populares.", tech: ["HTML5", "CSS3", "JavaScript", "PHP"], image: "img/capa-arcadia.webp", demo: "https://arcadia-lab.gt.tc/?i=1", repo: "", real: true,
      games: [
        { name: "Match-3", url: "https://davi-cyber-17.github.io/Match-3/" },
        { name: "Turbo Byte", url: "https://davi-cyber-17.github.io/Turbo-Byte/" },
        { name: "Super Gol", url: "https://davi-cyber-17.github.io/Super-Gol/" }
      ] }
  ],

  // Experiências
  experiences: [
    { title: "Imersão na Samsung: mentoria com profissionais",
      org: "Samsung Electronics da América Latina · Morumbi, São Paulo · Samsung Innovation Campus (SIC) / SENAI",
      period: "21/10/2026",
      desc: "Passei o dia inteiro no escritório da Samsung, em São Paulo, por meio do curso Samsung Innovation Campus (SIC), do SENAI e patrocinado pela Samsung. Recebi dicas e mentoria de profissionais da empresa.",
      tasks: [
        "Mentoria sobre E-Commerce com trabalhadores da Samsung",
        "Método STAR para entrevistas, com prática em um simulador de entrevista",
        "Apresentação das novas tecnologias e novidades da Samsung",
        "Conhecimento do ambiente de trabalho e da rotina de uma empresa global de tecnologia"
      ] },
    { title: "Palestra sobre Linux com Jon “maddog” Hall",
      org: "Evento presencial no SENAI",
      period: "27/05/2026",
      desc: "Assisti presencialmente, no SENAI onde estudo, a uma palestra sobre Linux ministrada por Jon “maddog” Hall, nome de referência da comunidade Linux e do software livre.",
      tasks: [
        "A história do Linux",
        "Como utilizar o Linux",
        "Um novo hardware que o Linux estava desenvolvendo"
      ] },
    { title: "Gemini Academy",
      org: "Google · evento presencial no SENAI",
      period: "29/04/2026",
      desc: "Participei do Gemini Academy, evento promovido pelo Google e realizado presencialmente no SENAI, onde estudo, sobre como aproveitar a inteligência artificial Gemini no trabalho e no dia a dia.",
      tasks: [
        "Funcionalidades do Gemini e como usá-lo da forma certa",
        "Como configurar um agente do Gemini",
        "Como o Gemini pode ajudar em tarefas diárias"
      ] }
  ],

  // Categorias dos certificados (os botões aparecem nesta ordem).
  certCategories: ["Pequenos", "Médios", "Grandes"],
  // Certificados. cat: uma das categorias acima. image: caminho da imagem do certificado.
  certs: [
    { name: "Fundamentos e Ações da Economia Circular", inst: "Escola SENAI “Anchieta”", date: "19/04/2026", area: "Sustentabilidade · 4h", cat: "Pequenos", image: "img/certificados/economia-circular.webp" },
    { name: "Crie um site simples usando HTML, CSS e JavaScript", inst: "Escola Virtual", date: "15/10/2026", area: "Programação · 2h", cat: "Pequenos", image: "img/certificados/site-html-css-js.webp" },
    { name: "Inteligência Artificial para Estudantes", inst: "Escola Virtual", date: "15/10/2026", area: "Inteligência Artificial · 4h", cat: "Pequenos", image: "img/certificados/ia-para-estudantes.webp" },
    { name: "Ética na Era da IA", inst: "Escola Virtual", date: "15/10/2026", area: "Inteligência Artificial · 2h", cat: "Pequenos", image: "img/certificados/etica-na-era-da-ia.webp" },
    { name: "Comunicação e Mobilização com IA", inst: "Escola Virtual", date: "15/10/2026", area: "Inteligência Artificial · 2h", cat: "Pequenos", image: "img/certificados/comunicacao-mobilizacao-ia.webp" },
    { name: "Microsoft Office 365 – Conhecendo o OneDrive", inst: "Escola Virtual", date: "16/10/2026", area: "Office 365 · 1h", cat: "Pequenos", image: "img/certificados/office365-onedrive.webp" },
    { name: "Microsoft Office 365 – Conhecendo o Outlook", inst: "Escola Virtual", date: "16/10/2026", area: "Office 365 · 1h", cat: "Pequenos", image: "img/certificados/office365-outlook.webp" },
    { name: "Microsoft Word 2016 – Básico", inst: "Escola Virtual", date: "15/10/2026", area: "Office 365 · 9h", cat: "Médios", image: "img/certificados/word-2016-basico.webp" },
    { name: "Comportamento Empreendedor", inst: "Escola SENAI “Anchieta”", date: "21/04/2026", area: "Desenvolvimento pessoal · 12h", cat: "Médios", image: "img/certificados/comportamento-empreendedor.webp" },
    { name: "Diplomata Social – Delegado no Modelo ONU", inst: "ESPM Social · Ministério das Relações Exteriores (ERESP)", date: "09/06/2026", area: "Desenvolvimento pessoal", cat: "Grandes", image: "img/certificados/diplomata-social.webp" },
    { name: "Excel Básico", inst: "Escola SENAI “Anchieta”", date: "23/04/2026", area: "Office 365 · 20h", cat: "Grandes", image: "img/certificados/excel-basico.webp" },
    { name: "Linguagem de Programação Python – Básico", inst: "Escola Virtual", date: "23/10/2026", area: "Programação · 18h", cat: "Grandes", image: "img/certificados/python-basico.webp" }
  ],

  services: [
    ["Criação de Sites", "Desenvolvimento de sites modernos, responsivos e personalizados."],
    ["Sites Institucionais", "Sites profissionais para empresas, profissionais e projetos."],
    ["Landing Pages", "Páginas focadas em apresentação, divulgação e conversão."],
    ["Sistemas Web e Back-end", "Desenvolvimento de sistemas, APIs e aplicações web completas, do front-end ao back-end."],
    ["Manutenção e Melhorias", "Atualizações, correções e melhorias em sites existentes."]
  ],

  steps: [
    ["Contato", "Você entra em contato."], ["Conversa", "Você explica o projeto."],
    ["Análise", "Analiso as necessidades."], ["Proposta", "Defino o projeto e o orçamento."],
    ["Desenvolvimento", "Construo o site."], ["Entrega", "Entrego e faço os ajustes."]
  ]
};

/* =====================================================
   CÓDIGO
   ===================================================== */
/* Atalhos: $ encontra um elemento na página; esc protege textos contra HTML indevido (segurança). */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const C = DATA.contact;

/* Ícones simples (SVG) */
const ICONS = {
  whatsapp: '<path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  github: '<path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5a3 3 0 0 0-1-2.5c3.300-.4 6.500-1.600 6.500-7a5 5 0 0 0-1.400-3.500 4.600 4.600 0 0 0-.1-3.500s-1.200-.4-3.900 1.400a13 13 0 0 0-7 0C6.400 2.100 5.200 2.500 5.200 2.500a4.600 4.600 0 0 0-.1 3.500A5 5 0 0 0 3.700 9.500c0 5.400 3.200 6.600 6.500 7a3 3 0 0 0-1 2.500V21"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.500 6.500h.01"/>',
  linkedin: '<path d="M4 9h4v12H4zM6 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h4v2c.8-1.400 2.300-2.300 4-2.300 3 0 4 2 4 5V21h-4v-6c0-1.500-.6-2.400-2-2.400s-2 1-2 2.400V21h-4z"/>'
};
const icon = k => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>`;

/* Capa gerada para projetos sem imagem */
/* Cria a capa (imagem SVG) usada quando um projeto não tem imagem própria. */
function cover(name, i) {
  const hues = [215, 160, 265, 30];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect width="320" height="200" fill="hsl(${hues[i % 4]},35%,22%)"/><rect x="24" y="24" width="272" height="16" rx="8" fill="#fff" opacity=".18"/><rect x="24" y="60" width="120" height="116" rx="8" fill="#fff" opacity=".12"/><rect x="156" y="60" width="140" height="50" rx="8" fill="#fff" opacity=".12"/><rect x="156" y="122" width="140" height="54" rx="8" fill="#fff" opacity=".08"/></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

/* Links de contato */
/* Monta a lista de contatos (só os preenchidos em DATA.contact) e desenha na seção Contato e no rodapé. */
const wa = C.whatsapp ? `https://wa.me/${C.whatsapp}` : "";
const links = [
  ["whatsapp", "WhatsApp", wa], ["email", "E-mail", C.email ? `mailto:${C.email}` : ""],
  ["github", "GitHub", C.github], ["instagram", "Instagram", C.instagram], ["linkedin", "LinkedIn", C.linkedin]
].filter(l => l[2]);
const ext = h => h.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";
$("#contacts").innerHTML = links.map(([k, n, h]) => `<li><a class="card" href="${esc(h)}"${ext(h)}>${icon(k)}<span>${n}</span></a></li>`).join("");
$("#socials").innerHTML = links.filter(l => l[0] !== "email").map(([k, n, h]) => `<li><a href="${esc(h)}"${ext(h)}>${n}</a></li>`).join("");

/* Foto, indicadores, habilidades */
$("#photo").innerHTML = DATA.photo ? `<img src="${esc(DATA.photo)}" alt="Davi Graciano de Souza">` : "DG";
$("#stats").innerHTML = DATA.stats.map(s => `<li><b>${esc(s.n)}</b><span>${esc(s.l)}</span></li>`).join("");
/* Sobre mim: cartões rápidos e trajetória */
$("#quick").innerHTML = DATA.about.quick.map(q => `<li class="card quick-i reveal"><span class="q-k">${esc(q.k)}</span>${q.pills ? `<div class="pills">${q.pills.map(p => `<span class="pill">${esc(p)}</span>`).join("")}</div>` : `<p class="q-a">${esc(q.a)}</p>`}</li>`).join("");
$("#path").innerHTML = DATA.about.path.map(p => `<li class="reveal${p.now ? " now" : ""}"><span class="p-y">${esc(p.y)}</span><p>${esc(p.t)}</p></li>`).join("");

$("#skills").innerHTML = DATA.skills.map(g => `<li class="card skill-group">
  <div class="sg-head"><span class="sg-ico" aria-hidden="true">${esc(g.ico)}</span><h3>${esc(g.g)}</h3><span class="sg-n">${g.items.length}</span></div>
  <div class="pills">${g.items.map((s, k) => `<span class="pill${s === g.main ? " main" : ""}" style="--k:${k}"${s === g.main ? ' title="Tecnologia principal"' : ""}>${esc(s)}</span>`).join("")}</div>
</li>`).join("");
/* Idiomas: cada idioma mostra o nome, o nível e uma barra de 5 pontos. A seção só aparece se houver idiomas em DATA.languages. */
if (DATA.languages.length) {
  $("#langs-box").hidden = false;
  $("#langs").innerHTML = DATA.languages.map(l => {
    const total = DATA.languageLevels.length;
    const n = l.level === "Nativo" ? total : DATA.languageLevels.indexOf(l.level) + 1;
    const desc = DATA.languageLabels[l.level];
    const label = desc && l.level !== "Nativo" ? `${l.level} · ${desc}` : (desc || l.level);
    const dots = n ? `<span class="lang-dots" role="img" aria-label="Nível ${esc(l.level)}, ${n} de ${total}">${DATA.languageLevels.map((_, k) => `<i${k < n ? ' class="on"' : ""}></i>`).join("")}</span>` : "";
    return `<li class="card lang reveal"><span class="lang-n">${esc(l.name)}</span><span class="lang-l">${esc(label)}</span>${dots}</li>`;
  }).join("");
}
/* Projetos + filtros */
/* Desenha os cards da seção Projetos a partir de DATA.projects (botões sem link ficam desativados). */
$("#projects").innerHTML = DATA.projects.map((p, i) => {
  const btn = (label, url, ghost) => `<a class="btn ${ghost ? "btn-ghost" : ""}" href="${url ? esc(url) : "#projetos"}"${url ? ext(url) : ' aria-disabled="true" tabindex="-1"'}>${label}</a>`;
  return `<article class="card project reveal" data-cat="${esc(p.cat)}">
    <img src="${esc(p.image || cover(p.name, i))}" alt="Capa do projeto ${esc(p.name)}" loading="lazy" width="320" height="200">
    <div class="pb">${p.real ? "" : '<span class="badge">Exemplo editável</span>'}<h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
    <div class="chips">${p.tech.map(t => `<span>${esc(t)}</span>`).join("")}</div>
    ${p.games && p.games.length ? `<div class="featured"><span class="featured-h">Jogos em destaque</span><div class="featured-l">${p.games.map(g => `<a href="${esc(g.url)}"${ext(g.url)}>${esc(g.name)}</a>`).join("")}</div></div>` : ""}
    <div class="actions">${btn("Ver projeto", p.demo)}${p.repo ? btn("Código", p.repo, true) : ""}</div></div></article>`;
}).join("");

/* Cria os botões de filtro e mostra/esconde os projetos conforme a categoria clicada. */
$("#filters").innerHTML = DATA.categories.map((c, i) => `<button type="button" aria-pressed="${i === 0}" data-f="${esc(c)}">${esc(c)}</button>`).join("");
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
  document.querySelectorAll(".project").forEach(p => p.classList.toggle("hide", b.dataset.f !== "Todos" && p.dataset.cat !== b.dataset.f));
});

/* Experiências, certificados, serviços, etapas */
/* Desenha as seções Experiências, Certificados, Serviços e Como funciona a partir dos dados no topo do arquivo. */
$("#timeline").innerHTML = DATA.experiences.map(x => `<li class="card reveal"><time>${esc(x.period)}</time><h3>${esc(x.title)}</h3><p class="org">${esc(x.org)}</p><p>${esc(x.desc)}</p><ul>${x.tasks.map(t => `<li>${esc(t)}</li>`).join("")}</ul></li>`).join("");
$("#certs").innerHTML = DATA.certs.map((c, i) => `<article class="card reveal" data-cat="${esc(c.cat || "")}" hidden><h3>${esc(c.name)}</h3><p class="meta">${esc(c.inst)} · ${esc(c.date)} · ${esc(c.area)}</p><button class="btn btn-ghost" data-cert="${i}" type="button">Ver certificado</button></article>`).join("");

/* Categorias dos certificados: nenhum aparece até a pessoa clicar numa categoria (clicar de novo recolhe). */
const certFilters = $("#cert-filters"), certMsg = $("#cert-msg");
certFilters.innerHTML = DATA.certCategories.map(c => `<button type="button" aria-pressed="false" data-c="${esc(c)}">${esc(c)}</button>`).join("");
certFilters.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  const abrir = b.getAttribute("aria-pressed") !== "true";
  certFilters.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", abrir && x === b));
  let n = 0;
  document.querySelectorAll("#certs article").forEach(a => {
    const show = abrir && a.dataset.cat === b.dataset.c;
    a.hidden = !show; if (show) { n++; a.classList.add("in"); }
  });
  certMsg.hidden = !abrir || n > 0;
  certMsg.textContent = abrir && n === 0 ? `Ainda não há certificados na categoria ${b.dataset.c}.` : "";
});
$("#services").innerHTML = DATA.services.map(s => `<article class="card reveal"><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></article>`).join("");
$("#steps").innerHTML = DATA.steps.map(s => `<li class="card reveal"><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></li>`).join("");

/* Modal de certificados */
/* Modal (janela) que mostra o certificado sem sair da página. Fecha com o X, clique fora ou tecla Esc. */
const modal = $("#modal"); let lastFocus;
/* Abre o modal com o certificado escolhido e leva o foco do teclado para ele (acessibilidade). */
function openModal(i) {
  const c = DATA.certs[i]; lastFocus = document.activeElement;
  $("#modal-title").textContent = c.name;
  $("#modal-body").innerHTML = c.image ? `<img src="${esc(c.image)}" alt="Certificado: ${esc(c.name)}">` : `<div class="ph">Imagem do certificado ainda não adicionada.</div>`;
  modal.hidden = false; $("#modal-x").focus();
}
/* Fecha o modal e devolve o foco ao botão que o abriu. */
function closeModal() { modal.hidden = true; if (lastFocus) lastFocus.focus(); }
$("#certs").addEventListener("click", e => { const b = e.target.closest("[data-cert]"); if (b) openModal(+b.dataset.cert); });
$("#modal-x").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

/* Menu mobile */
/* Abre/fecha o menu no celular: fecha ao clicar num link, fora do menu, com Esc ou ao voltar para tela larga; trava a rolagem do fundo enquanto aberto. */
const burger = $("#burger"), menu = $("#menu");
const setMenu = o => {
  menu.classList.toggle("open", o); burger.setAttribute("aria-expanded", o);
  burger.setAttribute("aria-label", o ? "Fechar menu" : "Abrir menu"); document.body.classList.toggle("menu-open", o);
};
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.addEventListener("click", e => { if (e.target.closest("a,[data-orc]")) setMenu(false); });
document.addEventListener("click", e => { if (menu.classList.contains("open") && !e.target.closest("#menu,#burger")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && menu.classList.contains("open")) { setMenu(false); burger.focus(); } });
matchMedia("(min-width:1001px)").addEventListener("change", e => { if (e.matches) setMenu(false); });

/* Seção atual no menu + animação ao entrar na tela */
/* Destaca no menu a seção que está na tela (spy) e faz os blocos aparecerem suavemente ao rolar (reveal). */
const navLinks = [...menu.querySelectorAll("a:not(.btn)")];
const spy = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));
const rev = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); } }), { threshold: .1 });
document.querySelectorAll(".reveal").forEach(el => rev.observe(el));

/* Voltar ao topo */
/* Mostra o botão de voltar ao topo depois de rolar 600px e sobe suavemente ao clicar. */
const toTop = $("#totop");
addEventListener("scroll", () => { toTop.hidden = scrollY < 600; }, { passive: true });
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

/* Formulário inteligente: opções em botões, contato único (e-mail ou WhatsApp, com máscara),
   dica de descrição conforme o tipo de projeto e envio por WhatsApp (ou e-mail).
   Para usar um backend/serviço de formulário no futuro, envie `data` com fetch() dentro de sendForm(). */
const form = $("#form"), fb = $("#feedback"), contatoEl = form.elements.contato, hint = $("#contato-hint"), descEl = form.elements.descricao;
const descPadrao = descEl.placeholder;
const radios = (name, list) => list.map(o => `<label class="opt"><input type="radio" name="${name}" value="${esc(o)}"><span>${esc(o)}</span></label>`).join("");
$("#tipos").innerHTML = radios("tipo", DATA.form.tipos);
$("#prazos").innerHTML = radios("prazo", DATA.form.prazos);

const digits = v => v.replace(/\D/g, "");
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isPhone = v => { const n = digits(v).length; return n >= 10 && n <= 13; };
const kindOf = v => /[a-zA-Z@]/.test(v) ? "email" : (digits(v) ? "whatsapp" : "");
/* Formata (00) 00000-0000 enquanto a pessoa digita; números com "+" (internacionais) ficam como digitados. */
const maskPhone = v => {
  if (v.trim().startsWith("+")) return v;
  const d = digits(v).slice(0, 11); if (!d) return "";
  if (d.length <= 2) return `(${d}`;
  const b = d.length > 10 ? d.slice(2, 7) : d.slice(2, 6), c = d.length > 10 ? d.slice(7) : d.slice(6);
  return `(${d.slice(0, 2)}) ${b}` + (c ? `-${c}` : "");
};
const setHint = () => {
  const k = kindOf(contatoEl.value);
  hint.innerHTML = k === "email" ? "Vou responder por <b>e-mail</b>." : k === "whatsapp" ? "Vou responder por <b>WhatsApp</b>." : "Pode ser e-mail ou WhatsApp.";
};
contatoEl.addEventListener("input", e => {
  if (kindOf(contatoEl.value) === "whatsapp" && !(e.inputType || "").startsWith("delete")) contatoEl.value = maskPhone(contatoEl.value);
  setHint();
});
/* Ao escolher o tipo de projeto, a dica do campo de descrição muda. */
form.addEventListener("change", e => { if (e.target.name === "tipo") descEl.placeholder = DATA.form.dicas[e.target.value] || descPadrao; });
form.addEventListener("reset", () => setTimeout(() => { setHint(); descEl.placeholder = descPadrao; }));
/* Ao corrigir um campo, o aviso de erro dele some. */
form.addEventListener("input", e => { const box = e.target.closest("[data-k]"); if (box && box.classList.contains("bad")) { box.classList.remove("bad"); box.querySelector(".err").textContent = ""; } });

/* Regras de validação: cada campo devolve true se estiver certo ou a mensagem de erro. */
const rules = {
  nome: v => v.trim().length >= 2 || "Informe seu nome.",
  contato: v => isEmail(v) || isPhone(v) || "Informe um e-mail ou um WhatsApp com DDD.",
  tipo: v => !!v || "Escolha o tipo de projeto.",
  prazo: v => !!v || "Escolha um prazo.",
  descricao: v => v.trim().length >= 10 || "Descreva o projeto (mín. 10 caracteres)."
};
/* Aplica as regras, mostra os erros abaixo de cada campo e leva a tela até o primeiro com problema. */
function validate() {
  let ok = true, first = null;
  for (const [k, fn] of Object.entries(rules)) {
    const f = form.elements[k], r = fn(f.value), bad = r !== true, box = form.querySelector(`[data-k="${k}"]`);
    box.classList.toggle("bad", bad); box.querySelector(".err").textContent = bad ? r : "";
    const inp = f.length ? f[0] : f; inp.setAttribute("aria-invalid", bad);
    if (bad) { ok = false; first = first || inp; }
  }
  if (first) { first.focus({ preventScroll: true }); first.closest("[data-k]").scrollIntoView({ block: "center", behavior: "smooth" }); }
  return ok;
}
/* Monta a mensagem do orçamento e abre o WhatsApp ou o e-mail. Retorna false se o contato não estiver configurado. */
function sendForm(data, via) {
  const canal = kindOf(data.contato) === "email" ? "E-mail" : "WhatsApp";
  const msg = `Olá, Davi! Gostaria de solicitar um orçamento.\n\nNome: ${data.nome}\n${canal}: ${data.contato}\nTipo de projeto: ${data.tipo}\nPrazo: ${data.prazo}\nDescrição: ${data.descricao}`;
  if (via === "email") {
    if (!C.email) return false;
    location.href = `mailto:${C.email}?subject=${encodeURIComponent("Orçamento: " + data.tipo)}&body=${encodeURIComponent(msg)}`;
  } else {
    if (!C.whatsapp) return false;
    window.open(`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  }
  return true;
}
/* Ao enviar: valida, prepara a mensagem, mostra o feedback e limpa o formulário se deu certo. */
form.addEventListener("submit", e => {
  e.preventDefault();
  fb.className = "feedback";
  if (!validate()) { fb.textContent = "Revise os campos destacados."; return; }
  const via = e.submitter && e.submitter.dataset.via || "whatsapp";
  const done = sendForm(Object.fromEntries(new FormData(form)), via);
  fb.textContent = done ? "Solicitação preparada! Confirme o envio na janela aberta." : "Contato não configurado. Edite DATA.contact em script.js.";
  if (done) { fb.classList.add("ok"); form.reset(); }
});

/* Painel "Solicitar Serviço": Serviços, Como funciona e o formulário ficam dentro dele, fora da página.
   Qualquer elemento com data-orc abre o painel; data-orc="servicos|processo|form" já rola até a parte escolhida. */
const orc = $("#orc"), orcBox = $("#orc-box"); let orcFocus;
const ORC_PARTES = { "#orcamento": "orc-form", "#servicos": "orc-servicos", "#como-funciona": "orc-processo" };
/* Abre o painel, trava a rolagem do fundo e (opcionalmente) leva até uma parte dele. */
function openOrc(parte) {
  if (orc.hidden) { orcFocus = document.activeElement; orc.hidden = false; document.body.classList.add("orc-open"); orcBox.scrollTop = 0; }
  orcBox.focus({ preventScroll: true });
  if (parte) { const el = document.getElementById(parte); if (el) setTimeout(() => el.scrollIntoView({ block: "start", behavior: "smooth" }), 60); }
}
/* Fecha o painel e devolve o foco ao botão que o abriu. */
function closeOrc() {
  if (orc.hidden) return;
  orc.hidden = true; document.body.classList.remove("orc-open");
  if (orcFocus && document.contains(orcFocus)) orcFocus.focus({ preventScroll: true });
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-orc]"); if (!b) return;
  e.preventDefault(); if (typeof aClose === "function" && !asst.hidden) aClose(false);
  openOrc(b.dataset.orc || "");
});
$("#orc-x").addEventListener("click", closeOrc);
orc.addEventListener("click", e => { if (e.target === orc) closeOrc(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !orc.hidden && modal.hidden) closeOrc(); });
$(".orc-tabs").addEventListener("click", e => {
  const b = e.target.closest("[data-go]"); if (b) document.getElementById(b.dataset.go).scrollIntoView({ block: "start", behavior: "smooth" });
});
/* Links antigos (#orcamento, #servicos, #como-funciona), como os do assistente, abrem o painel. */
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]"); if (!a) return;
  const parte = ORC_PARTES[a.getAttribute("href")]; if (!parte) return;
  e.preventDefault(); if (!asst.hidden) aClose(false);
  openOrc(parte);
});
if (ORC_PARTES[location.hash]) openOrc(ORC_PARTES[location.hash]);

/* Assistente virtual: janela de conversa com respostas prontas (DATA.assistant).
   Ao digitar, procura a resposta pelas palavras-chave; se não achar, indica o contato direto. */
const A = DATA.assistant, asst = $("#asst"), aFab = $("#asst-fab"), aLog = $("#asst-log"), aIn = $("#asst-in");
const aNorm = s => " " + s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim() + " ";
const aHref = h => h === "@whatsapp" ? wa : h === "@email" ? (C.email ? `mailto:${C.email}` : "") : h === "@github" ? C.github : h === "@linkedin" ? C.linkedin : h;
/* Monta o balão do assistente: texto (quebras de linha preservadas) + botões de link. */
const aHtml = it => {
  const ls = (it.links || []).map(l => [l.t, aHref(l.href)]).filter(l => l[1]);
  return `<p>${esc(it.a).replace(/\n/g, "<br>")}</p>` + (ls.length ? `<div class="msg-links">${ls.map(([t, u]) => `<a class="msg-link" href="${esc(u)}"${ext(u)}>${esc(t)}</a>`).join("")}</div>` : "");
};
const aScroll = () => aLog.scrollTo({ top: aLog.scrollHeight, behavior: RM ? "auto" : "smooth" });
const aAdd = (who, html) => { const d = document.createElement("div"); d.className = "msg " + who; d.innerHTML = html; aLog.append(d); aScroll(); return d; };
/* Regras de pontuação (ver o comentário em DATA.assistant): keys = 3 pts, weak = 1 pt, frase = +1 pt por palavra extra.
   Mínimo de 2 pontos para responder; em empate vence a primeira da lista. */
const A_STRONG = 3, A_WEAK = 1, A_MIN = 2;
/* Acha onde a palavra-chave aparece no texto já normalizado e devolve o trecho coberto (ou null). */
function aHit(n, key, base) {
  const exact = key.endsWith("$"), k = aNorm(key.replace(/\$$/, "")).trim();
  if (!k) return null;
  const whole = exact || k.length <= 3;            // curtas e marcadas com $ casam só a palavra inteira
  const i = n.indexOf(" " + k + (whole ? " " : ""));
  if (i < 0) return null;
  const start = i + 1, end = whole ? start + k.length : n.indexOf(" ", start + k.length);
  return { start, end, w: base + (k.split(" ").length - 1) };
}
/* Soma os pontos de uma resposta; trechos que se sobrepõem contam uma vez só (vale o de maior peso). */
function aScore(n, it) {
  const hits = [];
  for (const k of it.keys || []) { const h = aHit(n, k, A_STRONG); if (h) hits.push(h); }
  for (const k of it.weak || []) { const h = aHit(n, k, A_WEAK); if (h) hits.push(h); }
  hits.sort((a, b) => b.w - a.w || (b.end - b.start) - (a.end - a.start));
  const used = []; let total = 0;
  for (const h of hits) {
    if (used.some(u => h.start < u.end && u.start < h.end)) continue;
    used.push(h); total += h.w;
  }
  return it.max ? Math.min(total, it.max) : total;
}
/* Escolhe a resposta de maior pontuação (mínimo A_MIN); sem pontos suficientes, usa o fallback. */
function aFind(text) {
  const n = aNorm(text); let best = null, top = 0;
  for (const it of A.faq) { const s = aScore(n, it); if (s > top) { top = s; best = it; } }
  return top >= A_MIN ? best : A.fallback;
}
/* Mostra a pergunta do visitante, os três pontinhos "digitando" e depois a resposta. */
function aAsk(text, item) {
  aAdd("user", `<p>${esc(text)}</p>`);
  const typing = aAdd("bot typing", "<span></span><span></span><span></span>");
  typing.setAttribute("aria-label", "Digitando");
  setTimeout(() => { typing.remove(); aAdd("bot", aHtml(item || aFind(text))); }, RM ? 0 : 650);
}
$("#asst-form").addEventListener("submit", e => {
  e.preventDefault(); const v = aIn.value.trim(); if (!v) return;
  aIn.value = ""; aAsk(v);
});
function aOpen() {
  if (!aLog.children.length) aAdd("bot", `<p>${esc(A.hello)}</p>`);
  asst.hidden = false; aFab.setAttribute("aria-expanded", "true");
  (matchMedia("(hover:hover)").matches ? aIn : asst).focus({ preventScroll: true }); aScroll();
}
function aClose(back = true) { asst.hidden = true; aFab.setAttribute("aria-expanded", "false"); if (back) aFab.focus({ preventScroll: true }); }
aFab.addEventListener("click", aOpen);
$("#asst-x").addEventListener("click", () => aClose());
document.addEventListener("keydown", e => { if (e.key === "Escape" && !asst.hidden && modal.hidden) aClose(); });
/* Ao tocar num link interno da resposta (ex.: #orcamento), fecha a janela para a página aparecer. */
aLog.addEventListener("click", e => { const a = e.target.closest("a[href^='#']"); if (a) aClose(false); });

/* Atualiza o ano do copyright no rodapé automaticamente. */
$("#year").textContent = new Date().getFullYear();

/* =====================================================
   ANIMAÇÕES EXTRAS
   ===================================================== */
const RM = false; /* animações sempre ligadas, mesmo com "reduzir movimento" ativo no sistema. Para respeitar essa opção: matchMedia("(prefers-reduced-motion:reduce)").matches */
if (!RM) {
  /* Barra de progresso de rolagem + sombra do cabeçalho */
  const bar = document.createElement("div"); bar.className = "progress"; document.body.prepend(bar);
  const hd = $(".header"); let tick = false;
  const onScroll = () => {
    if (tick) return; tick = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      hd.classList.toggle("scrolled", scrollY > 10); tick = false;
    });
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* Números dos indicadores contam até o valor */
  const cnt = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return; cnt.unobserve(en.target);
    const b = en.target, m = b.textContent.match(/^(\D*)(\d+)(\D*)$/);
    if (!m || +m[2] === 0) return;
    const [, p, d, s] = m, to = +d, t0 = performance.now();
    const step = t => {
      const k = Math.min((t - t0) / 1200, 1);
      b.textContent = p + String(Math.round(to * (1 - Math.pow(1 - k, 3)))).padStart(d.length, "0") + s;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: .6 });
  document.querySelectorAll("#stats b").forEach(b => cnt.observe(b));

  /* Entrada escalonada nos grupos de itens e nos títulos */
  document.querySelectorAll("#skills li,#langs li,#quick li,#path li,#stats li,#services article,#certs article,#steps li,#contacts li,.projects .project,h2").forEach((el, i, all) => {
    const idx = [...el.parentElement.children].indexOf(el);
    el.classList.add("reveal"); el.style.setProperty("--d", (idx % 6) * .07 + "s");
    el.addEventListener("transitionend", () => el.style.removeProperty("--d"), { once: true });
    rev.observe(el);
  });
  $("#photo").classList.add("reveal", "from-l"); rev.observe($("#photo"));
  rev.observe($("#timeline"));

  /* Projetos reaparecem com animação ao trocar o filtro */
  $("#filters").addEventListener("click", () => document.querySelectorAll(".project:not(.hide)").forEach((p, i) => {
    p.classList.add("in"); p.classList.remove("pop"); void p.offsetWidth;
    p.style.setProperty("--pd", i * .06 + "s"); p.classList.add("pop");
  }));
}