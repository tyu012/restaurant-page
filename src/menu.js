const loadMenu = function(elementID) {
  let contents = document.querySelector(elementID);

  contents.innerHTML = "";

  let title = document.createElement("h1");
  title.textContent = "Menu";

  let menuList = document.createElement("ul");
  addItemToList("Pepperoni Pizza", menuList);
  addItemToList("Cheese Pizza", menuList);
  addItemToList("Small Steak", menuList);
  addItemToList("Large Steak", menuList);
  addItemToList("Soup of the Day", menuList);
  addItemToList("Vegetable Salad", menuList);
  contents.appendChild(menuList);
}

function addItemToList(innerHTML, list) {
  let item = document.createElement("li");
  item.innerHTML = innerHTML;
  list.appendChild(item);
}

export { loadMenu as default };