/** Conteúdo compartilhado portado de codigo-fonte/app.js. */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'Em quanto tempo vejo resultados?',
    answer:
      'Depende do serviço. Em consultoria, as primeiras recomendações chegam em até 2 semanas. Em desenvolvimento, o primeiro MVP fica pronto em 4 a 8 semanas. Para resultados de tráfego e conversão, os primeiros números aparecem em 30 a 60 dias de operação.',
  },
  {
    question: 'Trabalham com qual porte de empresa?',
    answer:
      'Atendemos desde empreendedores que estão montando sua primeira loja até empresas com operações de médio e grande porte. O que importa é a vontade de crescer com estratégia — e não apenas ferramentas.',
  },
  {
    question: 'Posso contratar só um serviço?',
    answer:
      'Sim. Você pode contratar consultoria pontual, um projeto de desenvolvimento específico ou uma automação isolada. Não há obrigação de pacotes fechados — o escopo é montado de acordo com a necessidade.',
  },
  {
    question: 'Quais plataformas vocês dominam?',
    answer:
      'Shopify, WooCommerce, VTEX, Nuvemshop, Magento e plataformas customizadas. Também há integrações com marketplaces como Mercado Livre, Amazon, Shopee e Magazine Luiza, conforme o conteúdo publicado no site de referência.',
  },
  {
    question: 'Como funciona o suporte pós-entrega?',
    answer:
      'O site de referência informa planos de suporte contínuo com SLA definido, horas mensais de manutenção e evolução ou suporte avulso. O atendimento pode ocorrer via WhatsApp, e-mail e sistema de tickets.',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'O depoimento relata que, em 90 dias, a taxa de conversão dobrou e o custo por aquisição caiu 40% após a entrega do novo site.',
    name: 'Ricardo Santos',
    role: 'CEO · Loja Exclusiva',
  },
  {
    quote:
      'O depoimento atribui à automação com IA a redução de 35% nos custos operacionais e destaca a combinação entre tecnologia e visão de negócio.',
    name: 'Camila Mendes',
    role: 'Diretora de Ops · ModaPlus',
  },
  {
    quote:
      'O relato descreve a migração completa do ERP integrado ao Shopify sem uma hora de indisponibilidade e destaca o cuidado com a execução.',
    name: 'Pedro Lima',
    role: 'CTO · TechStore Brasil',
  },
];

export const processSteps: [string, string, string][] = [
  ['01', 'Diagnóstico', 'Analisamos fundo o seu negócio: métricas, tecnologia, concorrência e oportunidades para montar um diagnóstico preciso.'],
  ['02', 'Estratégia', 'Desenhamos o plano de ação com prioridades, entregáveis, timelines e KPIs claros — sem achismo.'],
  ['03', 'Execução', 'Desenvolvimento, integrações, automações e ajustes acontecem com transparência.'],
  ['04', 'Evolução contínua', 'Monitoramos, medimos e evoluímos com relatórios periódicos e otimizações constantes.'],
];
