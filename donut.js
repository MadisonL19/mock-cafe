window.onload = function () {
    // Navbar elements
    var navBar = document.querySelector('#navbar-links');
    var style = getComputedStyle(navBar);
    var menuToggler = document.querySelector('#toggler-icon');
    var menuList = document.querySelector('#toggler-list');
    var bar1 = document.querySelector('#bar1');
    var bar2 = document.querySelector('#bar2');
    // main nav
    var navHome = document.querySelector('#nav-home');
    var navAbout = document.querySelector('#nav-about');
    var navLocations = document.querySelector('#nav-locations');
    var navContact = document.querySelector('#nav-contact');
    // toggle nav
    var toggleHome = document.querySelector('#toggle-home');
    var toggleAbout = document.querySelector('#toggle-about');
    var toggleLocations = document.querySelector('#toggle-locations');
    var toggleContact = document.querySelector('#toggle-contact');
    // Sections
    // Hero
    var button = document.querySelector('#location-btn');
    // About
    var aboutSection = document.querySelector('#about-top');
    // Locations
    var locationsSection = document.querySelector('#locations');
    // Contact
    var contactSection = document.querySelector('#contact');


    // Menu toggle

    function showMenu() {
        if (style.display == 'none') {
            menuList.classList.remove('hide');
            bar1.style.display = 'none';
            bar2.style.display = 'none';
        }
        else {
            return null;
        }
    }

    menuToggler.addEventListener("mouseover", showMenu);
    toggleHome.addEventListener("mouseover", showMenu);
    toggleAbout.addEventListener("mouseover", showMenu);
    toggleLocations.addEventListener("mouseover", showMenu);
    toggleContact.addEventListener("mouseover", showMenu);

    function hideMenu() {
        if (style.display == 'none') {
            menuList.classList.add('hide');
            bar1.style.display = 'grid';
            bar2.style.display = 'grid';
        }
        else {
            return null;
        }
    }

    menuList.addEventListener("mouseout", hideMenu);

    // Nav event listeners

    navHome.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    navAbout.addEventListener("click", function () {
        scrollEffect(aboutSection);
    });

    navLocations.addEventListener("click", function () {
        scrollEffect(locationsSection);
    });

    navContact.addEventListener("click", function () {
        scrollEffect(contactSection);
    });

    // Toggle event listeners 

    toggleHome.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    toggleAbout.addEventListener("click", function () {
        scrollEffect(aboutSection);
    });

    toggleLocations.addEventListener("click", function () {
        scrollEffect(locationsSection);
    });

    toggleContact.addEventListener("click", function () {
        scrollEffect(contactSection);
    });

    // Button event listener

    button.addEventListener("click", function () {
        scrollEffect(locationsSection);
    });

    // Reset to Home on Refresh

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    // Scroll effect

    function scrollEffect(element) {

        element.scrollIntoView({ behavior: 'smooth' });

    }
}