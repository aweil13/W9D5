
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    if (htmlElement.children) {
        Array.from(htmlElement.children).forEach(el => {htmlElement.removeChild(el);})
    }
    const newP = document.createElement("p");
    newP.textContent = string;
    htmlElement.appendChild(newP);
};

htmlGenerator('Party Time.', partyHeader);