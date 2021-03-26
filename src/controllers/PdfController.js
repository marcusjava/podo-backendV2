const puppeteer = require("puppeteer");

const options = {
  printBackground: true,
  format: "A4",
  width: "21cm",
  height: "29,7cm",
  margin: {
    top: "20px",
    bottom: "10px",
    left: "10px",
    right: "5px",
  },
};

const getConsultsPDF = async (req, res) => {
  const { url } = req.body;

  console.log(url);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3001/api/consults/reports/consults", {
    waitUntil: "networkidle0",
  });

  const pdf = await page.pdf(options);

  await browser.close();

  res.contentType("application/pdf");

  return res.send(pdf);
};

module.exports = { getConsultsPDF };
