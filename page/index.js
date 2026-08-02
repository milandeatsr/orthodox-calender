import { createWidget, widget, align, text_style } from '@zos/ui'
import { push } from '@zos/router'

Page({
  build() {
    const text = createWidget(widget.TEXT, {
      x: 96,
      y: 120,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text: 'Orthodox Calendar'
    })

    // Navigate to the day display page after 2 seconds
    setTimeout(() => {
      push({
        url: 'page/day'
      })
    }, 2000)
  }
})