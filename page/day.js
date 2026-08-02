import { createWidget, widget, align, text_style } from '@zos/ui'

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
      y: 120,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text: dateText
    })

    // Display fasting day message
    if (isWednesdayOrFriday) {
      const fastingText = createWidget(widget.TEXT, {
        x: 96,
        y: 200,
        w: 288,
        h: 80,
        color: 0xffffff,
        text_size: 24,
        align_h: align.CENTER_H,
        align_v: align.CENTER_V,
        text_style: text_style.NONE,
        text: 'Today is a fasting day (Wednesday/Friday)'
      })
    } else {
      const noFastingText = createWidget(widget.TEXT, {
        x: 96,
        y: 200,
        w: 288,
        h: 80,
        color: 0xffffff,
        text_size: 24,
        align_h: align.CENTER_H,
        align_v: align.CENTER_V,
        text_style: text_style.NONE,
        text: 'Today is not a fasting day'
      })
    }
  }
})