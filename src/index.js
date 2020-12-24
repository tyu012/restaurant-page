import loadHomepage from "./homepage";
import loadContactPage from "./contact";
import loadMenu from "./menu";
import nav from "./nav";

const ELEMENT_ID = "#main";

const content = document.querySelector("#content");

content.appendChild(nav());

const mainContent = document.createElement("div");
mainContent.id = "main";

content.appendChild(mainContent);

loadHomepage(ELEMENT_ID);

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    console.log("Clicked tab");
    switch (tab.id) {
      case "nav-home":
        loadHomepage(ELEMENT_ID);
        break;
      case "nav-contact":
        loadContactPage(ELEMENT_ID);
        break;
      case "nav-menu":
        loadMenu(ELEMENT_ID);
        break;
    }
  });
});