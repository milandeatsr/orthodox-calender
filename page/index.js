import { createWidget, widget, align, prop, text_style, event } from '@zos/ui'

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

    text.addEventListener(event.CLICK_DOWN, (info) => {
      text.setProperty(prop.MORE, {
        y: 200
      })
    })

    const textWithFont = createWidget(widget.TEXT, {
      x: 96,
      y: 300,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      font: 'fonts/custom.ttf',
      text_i18n: {
        'en-US': 'Orthodox Calendar',
        'zh-CN': '正教历法',
        'sr-RS': 'Pravoslavni Kalendar',
        'de-DE': 'Orthodoxer Kalender'
      }
    })
  }
})