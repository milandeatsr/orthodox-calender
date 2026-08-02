import { createWidget, widget, align, text_style } from '@zos/ui'
import * as hmUI from '@zos/ui'

Page({
  build() {
    // Get the current date
    const now = new Date()
    const day = now.getDate()
    const month = now.getMonth() + 1 // Months are 0-indexed
    const year = now.getFullYear()
    const dayOfWeek = now.getDay() // 0 (Sunday) to 6 (Saturday)
    
    // Check if today is Wednesday (3) or Friday (5)
    const isWednesdayOrFriday = dayOfWeek === 3 || dayOfWeek === 5
    
    // Format the date as DD/MM/YYYY
    const dateText = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
    
    // Display the date
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

    // Display the appropriate image based on fasting day
    if (isWednesdayOrFriday) {
      // Fasting day: Display fish.png and wineandbread.png
      const fishImg = hmUI.createWidget(hmUI.widget.IMG, {
        x: 120,
        y: 150,
        src: 'assets/default.r/fish.png'
      })
      
      const wineAndBreadImg = hmUI.createWidget(hmUI.widget.IMG, {
        x: 220,
        y: 150,
        src: 'assets/default.r/wineandbread.png'
      })
    } else {
      // Non-fasting day: Display fried-chicken.png
      const friedChickenImg = hmUI.createWidget(hmUI.widget.IMG, {
        x: 120,
        y: 150,
        src: 'assets/default.r/fried-chicken.png'
      })
    }
  }
})