const http = require('http')
const { chromium } = require('playwright-chromium')

it("should show the correct error", async () => {
  http.createServer((req, resp) => {
    resp.end(JSON.stringify({}))
  }).listen(9000)
  try {
    await chromium.connectOverCDP({
      endpointURL: "http://localhost:9000",
    });
  } catch (error) {
    debugger
    console.log(error)
    throw error
  }
});
