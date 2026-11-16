import type { IconName } from './icons';

export interface Service {
  slug: string;
  path: string;
  title: string;
  /** Primeira linha do H1 (o restante vai em itálico terracota). */
  h1Lead: string;
  h1Accent: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  icon: IconName;
  benefits: string[];
  includes: string[];
  process: [string, string][];
  partners?: string[];
  related?: boolean;
  seo: { title: string; description: string };
}

/** Conteúdo portado de codigo-fonte/app.js (servicePages). */
export const services: Service[] = [
  {
    slug: 'consultoria',
    path: '/servicos/consultoria',
    title: 'Consultoria em e-commerce',
    h1Lead: 'Consultoria em',
    h1Accent: 'e-commerce',
    eyebrow: 'Estratégia para crescer com clareza',
    subtitle: 'Transforme seu negócio digital com estratégia',
    description:
      'Consultoria estratégica e personalizada para identificar oportunidades, corrigir gargalos e potencializar resultados.',
    icon: 'compass',
    benefits: ['Diagnóstico completo do e-commerce', 'Plano de ação personalizado', 'Acompanhamento e mentoria'],
    includes: ['Análise técnica e operacional', 'Roadmap de prioridades', 'Reuniões periódicas', 'Suporte de especialistas'],
    process: [
      ['Mapeamento', 'Análise detalhada do cenário atual e identificação de oportunidades.'],
      ['Desenvolvimento', 'Elaboração do plano de ação e definição de estratégias.'],
      ['Implementação', 'Acompanhamento e ajustes contínuos para garantir resultados.'],
    ],
    seo: {
      title: 'Consultoria em E-commerce | AF Negócios Digitais',
      description:
        'Consultoria em e-commerce com diagnóstico completo, plano de ação personalizado e mentoria para corrigir gargalos e vender mais online.',
    },
  },
  {
    slug: 'desenvolvimento',
    path: '/servicos/desenvolvimento',
    title: 'Desenvolvimento de e-commerce',
    h1Lead: 'Desenvolvimento de',
    h1Accent: 'e-commerce',
    eyebrow: 'Lojas virtuais e plataformas',
    subtitle: 'Lojas virtuais modernas e escaláveis',
    description:
      'Desenvolvimento de lojas virtuais sob medida, seguras e otimizadas para performance e conversão.',
    icon: 'store',
    benefits: ['Design responsivo e exclusivo', 'Integração de pagamentos', 'SEO otimizado'],
    includes: ['Briefing e planejamento', 'Desenvolvimento ágil', 'Testes e homologação', 'Suporte pós-lançamento'],
    process: [
      ['Mapeamento', 'Entendimento do público, objetivos e diferenciais.'],
      ['Desenvolvimento', 'Criação da loja virtual com tecnologia de ponta.'],
      ['Implementação', 'Publicação, testes finais e suporte contínuo.'],
    ],
    partners: ['Nuvemshop — parceiro certificado', 'Linx Commerce', 'Uappi'],
    related: true,
    seo: {
      title: 'Desenvolvimento de Loja Virtual | AF Negócios Digitais',
      description:
        'Criação de lojas virtuais sob medida em Nuvemshop, Linx Commerce e Uappi: design responsivo, pagamentos integrados e SEO otimizado.',
    },
  },
  {
    slug: 'ia',
    path: '/servicos/ia',
    title: 'Sistemas com Inteligência Artificial',
    h1Lead: 'Sistemas com',
    h1Accent: 'Inteligência Artificial',
    eyebrow: 'IA aplicada ao negócio real',
    subtitle: 'Automatize e personalize com inteligência',
    description: 'Soluções de IA sob medida para automação, personalização e decisões inteligentes.',
    icon: 'sparkles',
    benefits: ['Chatbots inteligentes', 'Recomendações personalizadas', 'Análise preditiva'],
    includes: ['Desenvolvimento de modelos IA', 'Integração com sistemas', 'Treinamento e suporte'],
    process: [
      ['Mapeamento', 'Identificação de oportunidades para IA no seu negócio.'],
      ['Desenvolvimento', 'Criação e treinamento de modelos inteligentes.'],
      ['Implementação', 'Integração e acompanhamento dos resultados.'],
    ],
    seo: {
      title: 'Inteligência Artificial para E-commerce | AF Negócios',
      description:
        'Soluções de IA para e-commerce: chatbots inteligentes, recomendações personalizadas e análise preditiva integradas aos seus sistemas.',
    },
  },
  {
    slug: 'bi',
    path: '/servicos/bi',
    title: 'Business Intelligence (BI)',
    h1Lead: 'Business Intelligence',
    h1Accent: '(BI)',
    eyebrow: 'Dados para decidir melhor',
    subtitle: 'Transforme dados em decisões',
    description: 'Soluções de BI com dashboards, relatórios e análises para impulsionar o crescimento.',
    icon: 'chart',
    benefits: ['Dashboards interativos', 'Relatórios automatizados', 'KPIs personalizados'],
    includes: ['Mapeamento de indicadores', 'Desenvolvimento de painéis', 'Treinamento de equipe'],
    process: [
      ['Mapeamento', 'Levantamento de necessidades e indicadores.'],
      ['Desenvolvimento', 'Criação de dashboards e relatórios.'],
      ['Implementação', 'Treinamento e acompanhamento dos resultados.'],
    ],
    seo: {
      title: 'Business Intelligence para E-commerce | AF Negócios',
      description:
        'BI para e-commerce com dashboards interativos, relatórios automatizados e KPIs personalizados para decidir com base em dados.',
    },
  },
  {
    slug: 'automacao',
    path: '/servicos/automacao',
    title: 'Automação de Processos',
    h1Lead: 'Automação de',
    h1Accent: 'Processos',
    eyebrow: 'Mais eficiência na operação',
    subtitle: 'Eficiência e redução de custos',
    description:
      'Automatize tarefas repetitivas e aumente a eficiência do seu negócio com automação inteligente.',
    icon: 'workflow',
    benefits: ['Mapeamento de processos', 'Desenvolvimento de integrações', 'Workflows automatizados'],
    includes: ['Análise de gargalos', 'Criação de fluxos', 'Monitoramento e alertas'],
    process: [
      ['Mapeamento', 'Identificação de gargalos e oportunidades.'],
      ['Desenvolvimento', 'Criação de integrações e automações.'],
      ['Implementação', 'Monitoramento e suporte contínuo.'],
    ],
    seo: {
      title: 'Automação de Processos | AF Negócios Digitais',
      description:
        'Automação de processos para e-commerce: mapeamento de gargalos, workflows automatizados e integrações que reduzem custos operacionais.',
    },
  },
  {
    slug: 'sites',
    path: '/servicos/sites',
    title: 'Sites Institucionais',
    h1Lead: 'Sites',
    h1Accent: 'Institucionais',
    eyebrow: 'Presença digital profissional',
    subtitle: 'Uma presença digital forte e profissional',
    description:
      'Desenvolvimento de sites institucionais modernos, responsivos e otimizados para resultados.',
    icon: 'window',
    benefits: ['Design exclusivo', 'Responsividade total', 'SEO avançado'],
    includes: ['Layout personalizado', 'CMS integrado', 'Otimização de performance'],
    process: [
      ['Mapeamento', 'Levantamento de requisitos e identidade visual.'],
      ['Desenvolvimento', 'Criação do site com foco em performance.'],
      ['Implementação', 'Publicação e otimização para SEO.'],
    ],
    seo: {
      title: 'Criação de Sites Institucionais | AF Negócios Digitais',
      description:
        'Criação de sites institucionais modernos e responsivos, com design exclusivo, CMS integrado, alta performance e SEO avançado.',
    },
  },
  {
    slug: 'trafego',
    path: '/servicos/trafego',
    title: 'Gestão de Tráfego Pago',
    h1Lead: 'Gestão de',
    h1Accent: 'Tráfego Pago',
    eyebrow: 'Growth & performance',
    subtitle: 'Atraia mais clientes e vendas',
    description:
      'Campanhas estratégicas em Google Ads, Facebook Ads e outras plataformas para maximizar resultados.',
    icon: 'megaphone',
    benefits: ['Planejamento de campanhas', 'Criação de anúncios', 'Otimização de investimento'],
    includes: ['Gestão de contas', 'Relatórios de performance', 'Remarketing'],
    process: [
      ['Mapeamento', 'Análise do público e definição de objetivos.'],
      ['Desenvolvimento', 'Criação e otimização das campanhas.'],
      ['Implementação', 'Acompanhamento e ajustes para maximizar ROI.'],
    ],
    seo: {
      title: 'Gestão de Tráfego Pago | AF Negócios Digitais',
      description:
        'Gestão de tráfego pago para e-commerce em Google Ads e Meta Ads: planejamento, anúncios, remarketing e otimização do investimento.',
    },
  },
  {
    slug: 'erp',
    path: '/servicos/erp',
    title: 'Implementação de ERPs',
    h1Lead: 'Implementação de',
    h1Accent: 'ERPs',
    eyebrow: 'Sistemas e gestão conectados',
    subtitle: 'Centralize e automatize sua gestão',
    description:
      'Implementação de sistemas ERP sob medida para automatizar processos e centralizar a gestão.',
    icon: 'database',
    benefits: ['Diagnóstico e planejamento', 'Parametrização e customização', 'Integração de sistemas'],
    includes: ['Treinamento da equipe', 'Suporte pós-implantação', 'Acompanhamento contínuo'],
    process: [
      ['Mapeamento', 'Entendimento das necessidades e processos.'],
      ['Desenvolvimento', 'Parametrização e integração do ERP.'],
      ['Implementação', 'Treinamento e suporte pós-implantação.'],
    ],
    partners: ['Olist ERP Tiny — parceiro certificado'],
    seo: {
      title: 'Implementação de ERP Olist Tiny | AF Negócios Digitais',
      description:
        'Implementação de ERP para e-commerce, parceiro certificado Olist ERP Tiny: parametrização, integração, treinamento e suporte.',
    },
  },
  {
    slug: 'integracao',
    path: '/servicos/integracao',
    title: 'Integração de Sistemas',
    h1Lead: 'Integração de',
    h1Accent: 'Sistemas',
    eyebrow: 'Sua operação em sintonia',
    subtitle: 'Conecte todas as áreas do seu negócio',
    description: 'Integrações inteligentes entre plataformas, ERPs, e-commerces e APIs.',
    icon: 'plug',
    benefits: ['Mapeamento de necessidades', 'Desenvolvimento de APIs', 'Sincronização de dados'],
    includes: ['Monitoramento 24/7', 'Documentação completa', 'Suporte técnico'],
    process: [
      ['Mapeamento', 'Identificação dos sistemas e fluxos a integrar.'],
      ['Desenvolvimento', 'Criação de APIs e conectores sob medida.'],
      ['Implementação', 'Monitoramento, documentação e suporte.'],
    ],
    seo: {
      title: 'Integração de Sistemas e APIs | AF Negócios Digitais',
      description:
        'Integração entre e-commerce, ERP, marketplaces e APIs com sincronização de dados, monitoramento 24/7 e documentação completa.',
    },
  },
];

export const NUVEMSHOP_PATH = '/servicos/desenvolvimento/nuvemshop';

export const serviceByPath = (path: string) => services.find((s) => s.path === path);
