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
      const wineandbread = createWidget(widget.IMG, {
        x: 50,
        y: 150,
        src: 'wineandbread.png'
      })

        const fish = createWidget(widget.IMG, {
        x: 225,
        y: 150,
          src: 'fish.png'
        })

    } else {
      // Kein Fastentag: Frittiertes Hähnchen anzeigen
      const fried_chicken = createWidget(widget.IMG, {
        x: 175,
        y: 150,
        src: 'fried-chicken.png'
      })
    }
  }
})
