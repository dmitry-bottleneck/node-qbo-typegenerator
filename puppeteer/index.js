import puppeteer from "puppeteer";
import parseSections from "./quickbooksScraper.js";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto(
    "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchaseorder"
  );

  // Set screen size
  await page.setViewport({ width: 1280, height: 1024 });

  // Wait and click on first result
  await page.waitForSelector(".method-attributes");

  // ---------------------------------------------------
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function generateClassName(name) {
    return name
      .split(" ")
      .map((s) => s.toLowerCase())
      .filter((word) => !["a", "the"].includes(word))
      .map(capitalizeFirstLetter)
      .join("");
  }

  function getText(linkText) {
    linkText = linkText.replace(/\r\n|\r/g, "\n");
    linkText = linkText.replace(/\ +/g, " ");

    // Replace &nbsp; with a space
    var nbspPattern = new RegExp(String.fromCharCode(160), "g");
    return linkText.replace(nbspPattern, " ");
  }

  const isCollapsed = async (expandLink) => {
    let valueHandle = await expandLink.getProperty("innerText");
    let linkText = await valueHandle.jsonValue();
    const text = getText(linkText);
    return text.trim() === "Show child attributes";
  };

  // // expand all child attributes
  // // initially everything is collapsed
  // let firstRun = true;
  // let collapsedLinks = [];
  // while (collapsedLinks.length > 0 || firstRun) {
  //     firstRun = false;
  //     const childAttributes = await page.$$(".attribute-child-attributes-toggle");
  //     collapsedLinks = await Promise.all(childAttributes.map(isCollapsed)).then((results) => {
  //         return childAttributes.filter((_v, index) => results[index]);
  //     });

  //     collapsedLinks.forEach(async (expandLink) => {
  //         let valueHandle = await expandLink.getProperty("innerText");
  //         let linkText = await valueHandle.jsonValue();
  //         const text = getText(linkText);
  //         console.log(text);

  //         await expandLink.evaluate((b) => b.click());
  //     });
  // }

  // this works
  const methodAttributes = await page.$$eval(
    ".method-attributes",
    parseSections
  );
  console.log(methodAttributes);

  await browser.close();
})();
