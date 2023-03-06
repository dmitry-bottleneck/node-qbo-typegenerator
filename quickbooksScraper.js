/**
 * This function is run in browser context, note NodeJS!
 * @param {NodeList} methodAttributes - Array of div.method-attributes NodeElement elements
 */
export default function parseSections(methodAttributes) {
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
    function parseListGroupItem(listGroupAttr) {
        const attrName = listGroupAttr.querySelector(
            ".attribute-content > .attribute-rules > .attribute-name"
        ).innerText;
        const attrType = listGroupAttr.querySelector(
            ".attribute-content > .attribute-info > .attribute-info-first > .attribute-type"
        ).innerText;

        const isReq =
            listGroupAttr.querySelector(
                ".attribute-content > .attribute-rules > .attribute-metadata .attribute-required"
            )?.innerText === "Required";
        const comment = attrName.includes(" [0..n]") ? " // list item" : "";
        stdOut += `    ${attrName.replace(" [0..n]", "")}${isReq ? "" : "?"}: ${attrType};${comment}\n`;
    }

    function parseListGroup(methodAttr) {
        const listGroup = methodAttr.querySelector(".attributes-list-group");
        if (!listGroup) {
            return;
        }
        listGroup.querySelectorAll(".attribute-list-item").forEach(parseListGroupItem);
    }
    let stdOut = "";

    methodAttributes.forEach((methodAttr) => {
        const sectionNameH2 = methodAttr.querySelector("h2");

        if (sectionNameH2) {
            const sectionRule = { name: sectionNameH2.innerText };
            stdOut += `export type ${generateClassName(sectionNameH2.innerText)} {\n`;
            parseListGroup(methodAttr);
            stdOut += "}\n";
        }
    });

    return stdOut;
}
