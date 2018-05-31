const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')
getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'electron-clock-win32-ia32/'),
    authors: 'Neil Brittliff',
    noMsi: true,
    version: '1.0.0',
    title: 'electron-clock',
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'electron-clock.exe',
    setupExe: 'electron-clock-installer.exe',
    setupIcon: path.join(rootPath, 'assets', 'icons', 'win', 'icon.ico')
  })

}