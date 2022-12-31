import { app, BrowserWindow } from 'electron';
import { resolve } from 'node:path';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile(resolve(__dirname, 'app/index.html'));
};

app.whenReady().then(() => {
  createWindow();
});
