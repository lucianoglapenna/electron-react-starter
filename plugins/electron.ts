import { Plugin } from 'vite';

/**
 * Configures app to work alongside Electron
 * @returns Vite `Plugin`
 */
export default function electron(): Plugin[] {
  return [
    {
      name: 'vite-plugin-electron-react',
      apply: 'serve', // only run this plugin when serving the app,
      config(c) {
        c.clearScreen = false;
      },
    },
    {
      name: 'vite-plugin-electron-react',
      apply: 'build', // only run this plugin when building the app
      config(c) {
        // alter the vite config
        c.base = './';
        c.build.outDir = 'build/renderer';
      },
    },
  ];
}
