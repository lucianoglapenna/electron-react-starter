import { app, BrowserWindow } from 'electron';
import resolveFile from './utils/resolveFile';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadURL(resolveFile());
};

app.whenReady().then(() => {
  createWindow();
});
