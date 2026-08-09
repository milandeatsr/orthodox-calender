import { BaseSideService } from "@zeppos/zml/base-side";

async function fetchData(res) {
  try {

    // A network request is simulated here, Reference documentation: https://jsonplaceholder.typicode.com/
    const response = await fetch({
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      method: 'GET'
    })
    const resBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body

    res(null, {
      result: resBody,
    });
  } catch (error) {
    res(null, {
      result: "ERROR",
    });
  }
};

AppSideService(
  BaseSideService({
    onInit() {},

    onRequest(req, res) {
      console.log("=====>,", req.method);
      if (req.method === "GET_DATA") {
        fetchData(res);
      }
    },

    onRun() {},

    onDestroy() {},
  })
);