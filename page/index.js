import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { BasePage } from "@zeppos/zml/base-page";

const logger = Logger.getLogger("fetch_api");

let textWidget;

Page(
  BasePage({

    build() {


    const now = new Date()
    const day = now.getDate()
    const month = now.getMonth() + 1 // Monate sind 0-indexiert
    const year = now.getFullYear()
    const dayOfWeek = now.getDay() // 0 (Sonntag) bis 6 (Samstag)


    
    // Prüfen, ob heute Mittwoch (3) oder Freitag (5) ist
    const isWednesdayOrFriday = dayOfWeek === 3 || dayOfWeek === 5


      textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 20,
        y: 100,
        w: 430,
        h: 100,
        text: "Loading...",
        text_size: 30,
      });

      this.fetchData();

        // Konvertierte Bilder anzeigen

  // Bilder anzeigen
  if (isWednesdayOrFriday) {
    // Wein und Brot
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 60,
      y: 150,
      w: 150,
      h: 150,
      src: 'wineandbread.png'
    })

    // Fisch
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 244,
      y: 150,
      w: 150,
      h: 150,
      src: 'fish.png'
    })

  } else {
    // Frittiertes Hähnchen
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 152,
      y: 150,
      w: 150,
      h: 150,
      src: 'fried-chicken.png'
    })
  }


    },

    fetchData() {
      this.request({
        method: "GET_DATA",
      })
        .then((data) => {
          logger.log("receive data");

          const { result = {} } = data;
          const text = JSON.stringify(result);

          textWidget.setProperty(
            hmUI.prop.TEXT,
            text
          );
        })
        .catch((error) => {
          logger.log(`request error: ${JSON.stringify(error)}`);

          textWidget.setProperty(
            hmUI.prop.TEXT,
            "Error loading data"
          );
        });
    },
  })
);

