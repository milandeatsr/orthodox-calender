import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { BasePage } from "@zeppos/zml/base-page";

const logger = Logger.getLogger("fetch_api");

let textWidget;
Page(
  BasePage({
    state: {},
    build() {
      hmUI.createWidget(hmUI.widget.TEXT, {
        x: 100,
        y: 100,
      });
    },
    fetchData() {
      this.request({
        method: "GET_DATA",
      })
        .then((data) => {
          logger.log("receive data");
          const { result = {} } = data;
          const text = JSON.stringify(result);

          if (!textWidget) {
            textWidget = hmUI.createWidget(hmUI.widget.TEXT, text);
          } else {
            textWidget.setProperty(hmUI.prop.TEXT, text);
          }
        })
        .catch((res) => {});
    },
  })
);