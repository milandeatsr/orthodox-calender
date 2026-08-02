import { image } from '@zos/app-side'

AppSideService({
  onInit() {
    // Pfade zu den Bildern
    const fishPath = 'assets/default.b/fish.png'
    const wineAndBreadPath = 'assets/default.b/wineandbread.png'
    const friedChickenPath = 'assets/default.b/fried-chicken.png'

    // Bilder in das ZeppOS-kompatible Format umwandeln
    Promise.all([
      image.convert({ filePath: fishPath }),
      image.convert({ filePath: wineAndBreadPath }),
      image.convert({ filePath: friedChickenPath })
    ]).then((results) => {
      // Konvertierte Pfade in globalen Variablen speichern
      global.fishConvertedPath = results[0].targetFilePath
      global.wineAndBreadConvertedPath = results[1].targetFilePath
      global.friedChickenConvertedPath = results[2].targetFilePath

      console.log('Bilder umgewandelt:', {
        fish: global.fishConvertedPath,
        wineAndBread: global.wineAndBreadConvertedPath,
        friedChicken: global.friedChickenConvertedPath
      })
    }).catch((error) => {
      console.error('Fehler bei der Umwandlung:', error)
    })
  },

  onRun() {
  },

  onDestroy() {
  }
})
