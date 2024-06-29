// This program manipulates the DOM to add the header and footer to all HTML files
// Its purpose is to eliminate repetitive code from the HTML files within this website, since the header and footer content is constant

'use strict';

window.addEventListener('load', (event) => {
    // Once the page has loaded, delete the JavaScript message and call the header and footer functions
    const loading_message = document.getElementById('loading');
    loading_message.remove();
    createHeader();
    createFooter();
})

function createHeader() {
    // Get the header element from the DOM
    const header = document.getElementById('header');

    // Create the title and append it to the header
    const title = document.createElement("a");
    title.id = "title";
    title.href = "/index.html";
    title.textContent = "Charlotte Kalutycz";
    header.append(title);

    // Create the navigation menu and append it to the header
    const navigation = document.createElement("nav");
    const u_list = document.createElement("ul");
    const nav_options = ["Education", "Work Experience", "Project Experience", "Extracurriculars"];
    const nav_links = ["/content/education.html", "/content/workexperience.html", "/content/projectexperience.html", "/content/extracurriculars.html"];
    for (let i=0; i < nav_options.length; i++) {
        let current_li = document.createElement("li");
        let current_a = document.createElement("a");
        current_a.textContent = nav_options[i];
        current_a.href = nav_links[i];
        current_li.append(current_a);
        u_list.append(current_li);
    }
    navigation.append(u_list);
    header.append(navigation);
}

function createFooter() {
    // Get the footer element from the DOM
    const footer = document.getElementById('footer');

    // Create the navigation menu and append it to the footer
    const nav_div = document.createElement("div");
    nav_div.classList.add("menudiv");
    const nav_header = document.createElement("h1");
    nav_header.textContent = "Explore the Site";
    nav_div.append(nav_header);
    const nav_nav = document.createElement("nav");
    const nav_list = document.createElement("ul");
    const nav_options = ["Home", "Education", "Work Experience", "Project Experience", "Extracurriculars"];
    const nav_links = ["/index.html", "/content/education.html", "/content/workexperience.html", "/content/projectexperience.html", "/content/extracurriculars.html"];
    for (let i=0; i < nav_options.length; i++) {
        let current_li = document.createElement("li");
        let current_a = document.createElement("a");
        current_a.textContent = nav_options[i];
        current_a.href = nav_links[i];
        current_li.append(current_a);
        nav_list.append(current_li);
    }
    nav_nav.append(nav_list);
    nav_div.append(nav_nav);
    footer.append(nav_div);

    // Create the contact menu in the footer
    const contact_div = document.createElement("div");
    contact_div.classList.add("menudiv");
    const contact_header = document.createElement("h1");
    contact_header.textContent = "Connect With Me";
    contact_div.append(contact_header);
    const contact_nav = document.createElement("nav");
    const contact_list = document.createElement("ul");
    const contact_options = ["LinkedIn", "GitHub"];
    const contact_links = ["https://www.linkedin.com/in/charlotte-kalutycz-5459572aa/", "https://github.com/CharlotteTag"];
    for (let i=0; i < nav_options.length; i++) {
        let current_li = document.createElement("li");
        let current_a = document.createElement("a");
        current_a.textContent = contact_options[i];
        current_a.href = contact_links[i];
        current_li.append(current_a);
        contact_list.append(current_li);
    }
    contact_nav.append(contact_list);
    contact_div.append(contact_nav);
    footer.append(contact_div);

    // Create the source code link and add it to the footer
    const source_div = document.createElement("div");
    source_div.id = "sourcecode";
    const source_header = document.createElement("h2");
    const source_link = document.createElement("a");
    source_header.textContent = "View this site's source code "
    source_link.textContent = "here!";
    source_link.href = "https://github.com/CharlotteTag/CharlotteTag.github.io";
    source_header.append(source_link);
    source_div.append(source_header);
    footer.append(source_div);
}

