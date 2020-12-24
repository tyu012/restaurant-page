const nav = function() {
  let navbar = document.createElement("nav");
  
  let list = document.createElement("ul");

  let homepage = document.createElement("li");
  homepage.id = "nav-home";
  homepage.classList.add("tab")
  homepage.innerHTML = "Home";
  list.appendChild(homepage);

  let contact = document.createElement("li");
  contact.id = "nav-contact";
  contact.classList.add("tab");
  contact.innerHTML = "Contact";
  list.appendChild(contact);

  let menu = document.createElement("li");
  menu.id = "nav-menu";
  menu.classList.add("tab");
  menu.innerHTML = "Menu";
  list.appendChild(menu);

  navbar.appendChild(list);

  return navbar;
}

export { nav as default };