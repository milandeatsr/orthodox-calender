import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { BasePage } from "@zeppos/zml/base-page";

const logger = Logger.getLogger("fetch_api");

let textWidget;

Page(
  BasePage({

    build() {
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

