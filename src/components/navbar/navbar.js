import "./navbar.css";

function createNavbar() {

    const navbar = document.createElement("header");
    navbar.classList.add("navbar");

    const heading = document.createElement("h1");
    heading.classList.add("navbarTitle");
    heading.textContent = "Todo List";

    navbar.appendChild(heading);

    return navbar;

}

export default createNavbar;