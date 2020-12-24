const loadHomepage = function(elementID) {
  let contents = document.querySelector(elementID);

  contents.innerHTML = "";

  let title = document.createElement("h1");
  title.textContent = "Good Restaurant";
  contents.appendChild(title);

  let image = document.createElement("img");
  image.src = "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg";
  image.alt = "Picture of our restaurant";
  contents.appendChild(image);

  let description = document.createElement("p");
  description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia efficitur tristique. Aliquam id pellentesque nibh, et sodales massa. Curabitur ante tortor, facilisis id mollis ut, fermentum et mi. Ut sed velit sapien. Suspendisse ut libero eu ipsum lacinia efficitur vel a erat. Vivamus ac justo sed magna gravida cursus.";
  contents.appendChild(description);
}

export { loadHomepage as default };