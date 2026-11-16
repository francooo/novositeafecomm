export const SITE = {
  name: 'AF Negócios Digitais',
  tagline: 'Construindo seu negócio',
  description:
    'Consultoria, desenvolvimento de e-commerce, Nuvemshop, ERP, integrações, automação, IA e tráfego pago. Tecnologia e parceria para seu e-commerce crescer.',
  phoneDisplay: '(51) 98122-0279',
  phoneLink: '+5551981220279',
  email: 'contato@afecomm.com.br',
  foundingYear: '2024',
  locale: 'pt_BR',
  /** Perfis oficiais (Instagram, LinkedIn…) para o schema `sameAs`. Preencher quando confirmados. */
  sameAs: [] as string[],
} as const;

/**
 * Dados do controlador usados nas páginas Privacidade, Termos e LGPD.
 * Campos vazios são omitidos do texto; preencha-os assim que confirmados.
 */
export const LEGAL = {
  /** Razão social completa (se diferente do nome fantasia). */
  legalName: '',
  /** CNPJ no formato 00.000.000/0000-00. */
  cnpj: '',
  /** Endereço completo da sede. */
  address: '',
  /** Nome do encarregado pelo tratamento de dados (DPO), se houver. */
  dpoName: '',
  /** Data da última revisão dos textos jurídicos (AAAA-MM-DD). */
  updatedAt: '2026-11-16',
} as const;

export const WA_URL = `https://wa.me/${SITE.phoneLink.replace('+', '')}`;
export const TEL_URL = `tel:${SITE.phoneLink}`;
export const MAIL_URL = `mailto:${SITE.email}`;
