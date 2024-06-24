'use strict';

window.addEventListener('load', (event) => {
    // Once the page has loaded, add the consistent page elements
    createHeader();
    //createFooter();
})

function createHeader() {
    const header = document.getElementById('header');

    // Create the title and append it to the header
    const title = document.createElement("a");
    title.id = "title"
    title.href = "/index.html"
    const image = document.createElement("img");
    image.src = "/images/title.png"
    image.alt = "Charlotte Kalutycz"
    title.append(image);
    header.append(title);

    // Create the navigation menu and append it to the header
    const navigation = document.createElement("nav");
    const u_list = document.createElement("ul");
    let nav_options = ["Education", "Work Experience"]
    let nav_links = ["/content/education.html", "/content/work.html"]
    for (let i=0; i < nav_options.length; i++) {
        const current_li = document.createElement("li");
        const current_a = document.createElement("a");
        current_a.textContent = nav_options[i];
        current_a.href = nav_links[i];
        current_li.append(current_a);
        u_list.append(current_li);
    }
    navigation.append(u_list);
    header.append(navigation);
}

function createFooter() {
    const footer = document.getElementById('footer');
}

