import { app } from 'electron';

/**
 * Is the app in 'development' mode?
 */
export const isDevelopment = () => !app.isPackaged;

/**
 * Port in which the front is hosted in dev mode
 */
export const devPort = 5173;
