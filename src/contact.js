const loadContactPage = function(elementID) {
  let contents = document.querySelector(elementID);

  contents.innerHTML = "";

  let heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  contents.appendChild(heading);

  let addressHeading = document.createElement("h2");
  addressHeading.textContent = "Address";
  contents.appendChild(addressHeading);

  let address = document.createElement("p");
  address.innerHTML = "Good Restaurant<br>123 First Street<br>Anytown, CA 99999";
  contents.appendChild(address);

  let phoneNumberHeading = document.createElement("h2");
  phoneNumberHeading.innerHTML = "Phone number"
  contents.appendChild(phoneNumberHeading);

  let phoneNumber = document.createElement("p");
  phoneNumber.textContent = "(123) 456-7890";
  contents.appendChild(phoneNumber);
}

export { loadContactPage as default };