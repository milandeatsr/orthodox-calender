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

