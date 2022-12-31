import { resolve } from 'node:path';
import { isDevelopment, port } from '../config';

/**
 * Creates an URL/URI to use in the `loadURL` function of Electron window
 * @param fileName File to open
 * @returns URL/URI representing the resource to open
 */
export default function resolveFile(fileName = 'index.html') {
  if (isDevelopment()) {
    const url = new URL(`http://localhost:${port}`);

    return url.href;
  } else {
    const pathToFile = resolve(__dirname, 'renderer', fileName);

    return `file://${pathToFile}`;
  }
}
