import type { APIRoute } from 'astro';
import { faviconPng } from '../lib/png-icon';

export const GET: APIRoute = () => faviconPng(180, 14);
