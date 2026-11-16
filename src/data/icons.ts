/** Ícones de linha originais do protótipo (app.js › icons). Canvas 24×24, traço currentColor 1.6. */
export const icons = {
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2.8 5.6-5.6 2.8 2.8-5.6 5.6-2.8Z"/>',
  store: '<path d="M3 10.5 4.5 4h15l1.5 6.5"/><path d="M4 10v9h16v-9M3 10a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0M9 19v-5h6v5"/>',
  sparkles: '<path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15ZM5 3l.7 1.8L7.5 5.5l-1.8.7L5 8l-.7-1.8-1.8-.7 1.8-.7L5 3Z"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 14 4-4 3 3 6-7"/><path d="M16 6h4v4"/>',
  workflow: '<rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="4" width="6" height="5" rx="1"/><rect x="9" y="16" width="6" height="5" rx="1"/><path d="M6 9v3h12V9M12 12v4"/>',
  window: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 14h8M8 17h5"/>',
  megaphone: '<path d="m3 11 18-5v12L3 13v-2Z"/><path d="M11 15.2 13 21h-4l-1.5-6.5M21 10a3 3 0 0 1 0 4"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  plug: '<path d="M8 2v6M16 2v6M6 8h12v2a6 6 0 0 1-6 6v6M8 8v2a4 4 0 0 0 8 0V8"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  leaf: '<path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 8-8 8-16Z"/><path d="M4 21c3-5 7-8 12-11"/>',
  hand: '<path d="M8 12V6a1.5 1.5 0 0 1 3 0v5-7a1.5 1.5 0 0 1 3 0v7-5a1.5 1.5 0 0 1 3 0v6-3a1.5 1.5 0 0 1 3 0v5c0 5-3 8-7 8h-1c-3 0-5-1.5-7-4l-2-3a1.5 1.5 0 0 1 2.5-1.6L8 15"/>',
  heart: '<path d="M20.8 8.6c0 5.4-8.8 11-8.8 11S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z"/>',
  message: '<path d="M21 11.5a8.5 8.5 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 21l1.7-4.3A8 8 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z"/>',
} as const;

export type IconName = keyof typeof icons;
