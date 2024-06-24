'use strict';

window.addEventListener('load', (event) => {
    // Once the page has loaded, add the consistent page elements
    createHeader();
    //createFooter();
})

function createHeader() {
    const header = document.getElementById('header');

    // Create the title and append it to the header
    const title = document.createElement("h1");
    title.textContent = "Charlotte Kalutycz";
    header.append(title);

    // Create the navigation menu and append it to the header
    const navigation = document.createElement("nav");
    const u_list = document.createElement("ul");

    const edu_li = document.createElement("li");
    const edu_a = document.createElement("a");
    edu_a.textContent = "Education";
    edu_a.href = "/content/education.html"
    edu_li.append(edu_a);
    u_list.append(edu_li);

    navigation.append(u_list);
    header.append(navigation);
}

function createFooter() {
    const footer = document.getElementById('footer');
}