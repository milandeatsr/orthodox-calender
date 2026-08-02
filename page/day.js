import { createWidget, widget, align, text_style } from '@zos/ui'
import * as hmUI from '@zos/ui'

Page({
  build() {
    // Aktuelles Datum abrufen
    const now = new Date()
    const day = now.getDate()
    const month = now.getMonth() + 1 // Monate sind 0-indexiert
    const year = now.getFullYear()
    const dayOfWeek = now.getDay() // 0 (Sonntag) bis 6 (Samstag)
    
    // Prüfen, ob heute Mittwoch (3) oder Freitag (5) ist
    const isWednesdayOrFriday = dayOfWeek === 3 || dayOfWeek === 5
    
    // Datum im Format TT/MM/JJJJ formatieren
    const dateText = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
    
    // Datum anzeigen
    const dayText = createWidget(widget.TEXT, {
      x: 96,
      y: 80,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text: dateText
    })

    // Konvertierte Bilder anzeigen
    if (isWednesdayOrFriday) {
      // Fastentag: Fisch und Wein/Brot anzeigen
      if (global.fishConvertedPath) {
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 100,
          y: 150,
          src: global.fishConvertedPath
        })
      }
      
      if (global.wineAndBreadConvertedPath) {
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 200,
          y: 150,
          src: global.wineAndBreadConvertedPath
        })
      }
    } else {
      // Kein Fastentag: Frittiertes Hähnchen anzeigen
      if (global.friedChickenConvertedPath) {
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 150,
          y: 150,
          src: global.friedChickenConvertedPath
        })
      }
    }
  }
})
