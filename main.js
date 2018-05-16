'use strict';

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

var mainWindow = null;

function createWindow () {

  mainWindow = new BrowserWindow({width: 420, height: 452, resizable: false, autoHideMenuBar: true})
  mainWindow.setMenu(null);
 
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})