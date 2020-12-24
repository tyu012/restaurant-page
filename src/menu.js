const loadMenu = function(elementID) {
  let contents = document.querySelector(elementID);

  contents.innerHTML = "";

  let menuList = document.createElement("ul");
  
  addItemToList("Pepperoni Pizza", menuList);
  addItemToList("Cheese Pizza", menuList);
  addItemToList("Small Steak", menuList);
  addItemToList("Large Steak", menuList);
  addItemToList("Soup of the Day", menuList);
  addItemToList("Vegetable Salad", menuList);
}

function addItemToList(innerHTML, list) {
  let item = document.createElement("li");
  item.innerHTML = innerHTML;
  list.appendChild(item);
}

export { loadMenu as default };