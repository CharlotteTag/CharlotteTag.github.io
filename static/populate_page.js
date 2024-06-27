'use strict';

window.addEventListener('load', (event) => {
    // Once the page has loaded, add the consistent page elements
    createHeader();
    createFooter();
})

function createHeader() {
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
    const footer = document.getElementById('footer');

    // Create the navigation menu ahnd append it to the footer
    const navigation = document.createElement("nav");
    const u_list = document.createElement("ul");
    const nav_options = ["Home", "Education", "Work Experience", "Project Experience", "Extracurriculars"];
    const nav_links = ["/index.html", "/content/education.html", "/content/workexperience.html", "/content/projectexperience.html", "/content/extracurriculars.html"];
    for (let i=0; i < nav_options.length; i++) {
        let current_li = document.createElement("li");
        let current_a = document.createElement("a");
        current_a.textContent = nav_options[i];
        current_a.href = nav_links[i];
        current_li.append(current_a);
        u_list.append(current_li);
    }
    navigation.append(u_list);
    footer.append(navigation);

    // Create the contact menu in the footer
    const contact = document.createElement("h1");
    contact.textContent = "Connect with me!"
    footer.append(contact)
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
    footer.append(contact_nav);
}

