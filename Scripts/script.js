//NavBar 
//Hamburger Js (display)
const hamburgerMenu = () => {
    let getNav = document.getElementById('topNav');
    let icon = document.querySelector('.hamburger-bars');

    if(getNav.className === 'theTopNav') {
        getNav.className += ' responsive';
        icon.classList.add('rotate'); //add
    } else {
        getNav.className = 'theTopNav';
        icon.classList.remove('rotate'); //remove 
    }
}

//Active Link selected function (current and update)
document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll('.theTopNav a:not(.logo):not(.icon)'); //do not selct the logo or hamburger menu

    //Function to update the active state based on scroll position
    const updateActiveState = () => {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        navLinks.forEach(function(link) {
            let sectionId = link.getAttribute('href').substring(1); //Remove '#' from href
            let section = document.getElementById(sectionId);

            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                link.classList.add('active-nav-link');
            } else {
                link.classList.remove('active-nav-link');
            }
        });
    }

    //Event listener to update the active state on scroll
    window.addEventListener('scroll', updateActiveState);

    //Update active state initially
    updateActiveState();
});

//Home page -> displaying text
const descriptions = ["I'm A Web Developer. . .", "I'm A Coder. . .", "I'm A Learner. . ."];
let currentDescription = 0;
let currentLetter = 0;

const typeDescription = () => {
    let descriptionElement = document.getElementById('homeDescription');

    if (currentLetter < descriptions[currentDescription].length) {
        descriptionElement.textContent += descriptions[currentDescription].charAt(currentLetter);
        currentLetter++;
        setTimeout(typeDescription, 75);
    } else {
        currentLetter = 0;
        currentDescription = (currentDescription + 1) % descriptions.length;
        setTimeout(deleteDescription, 2000);
    }
}

const deleteDescription = () => {
    let descriptionElement = document.getElementById('homeDescription');

    if (descriptionElement.textContent.length > 0) {
        descriptionElement.textContent = descriptionElement.textContent.slice(0, -1);
        setTimeout(deleteDescription, 75);
    } else {
        setTimeout(typeDescription, 75);
    }
}

//Call the function
typeDescription();

//AboutMe Page
//function to open tab in about section
const openTab = (tabName, currentButton) => {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');

    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display  = 'none';
    } 

    tablinks = document.getElementsByClassName('tablink');

    for(i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = '';
    }

    document.getElementById(tabName).style.display ='block';
    currentButton.style.backgroundColor = '#333'
}

//by default set to 'overview page'
document.getElementById("defaultOpen").click();

//function to change image for each tab
const changeImage = (imagePath) => {
    document.getElementById('tabImage').src = imagePath;
}

//Projects  page 
//addProject -> add new projects dynamically 
const addProject = (title, description, link, imagePath) => {
    let projectContainer = document.getElementById('projectContainer');
    let projectDiv = document.createElement('div');
    
    projectDiv.className = 'project';
    projectDiv.style = 'width: 300px; border: 1px solid #ccc; border-radius: 10px; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);';
    projectDiv.setAttribute('data-aos', 'zoom-in');
    projectDiv.setAttribute('data-aos-duration', '1500');

    let projectTitle = document.createElement('h3');
    projectTitle.textContent = title;

    let projectDescription = document.createElement('p');
    projectDescription.textContent = description;
    projectDescription.style.color = 'black';
    projectDescription.style.fontSize = '16px';
    projectDescription.style.lineHeight = '1.6'; 
    
    let projectImage = document.createElement('img');
    projectImage.src = imagePath;
    projectImage.style = 'width: 100%; height: auto; margin-bottom: 15px;'; 

    let projectLink = document.createElement('a');
    projectLink.href = link;
    projectLink.textContent = 'View Project';
    projectLink.style = 'display: inline-block; margin: 0 10px; padding: 14px 16px; text-decoration: none; color: #fff; background-color: #45a049; border: none; outline: none; cursor: pointer; font-size: 17px; width: 33.3%; transition: all 0.3s ease; border-radius: 20px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);';
    
    projectLink.onmouseover = function() {
        this.style.backgroundColor = '#66cc66';
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)';
    };

    projectLink.onmouseout = function() {
        this.style.backgroundColor = '#45a049';
        this.style.transform = 'none';
        this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)';
    };

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectImage);
    projectDiv.appendChild(projectDescription);
    projectDiv.appendChild(projectLink);

    projectContainer.appendChild(projectDiv)
}

//Add new projects (call function -> addProject)
addProject('Seneca Library Software', 'Upon arrival at the Seneca library, all books and other resources are systematically labeled and placed in an orderly manner on the shelves for convenience. I’ve engineered a digital solution that catalogs these resources into the system, capturing all the necessary details for easy location in the future. This console based system also enables library patrons to borrow these resources, each assigned with a specific date for return. If not returned on time then a appropriate fee is charged!', '', './Assets/Images/senecaLibrary.png');
addProject('Assembly Line Simulation', 'This project involves an assembly line with multiple workstations, each holding specific stock items. Customer orders, consisting of a list of items, are moved along the line by a line manager. Each station processes orders from a queue, filling an order if it requests the station’s item and the item is in stock. The line manager continues moving orders until all are processed. If a station runs out of stock, it can’t fill more orders. At the end, orders are either completed or incomplete due to insufficient inventory. The simulator lists both completed and incomplete orders after all orders have been processed.', '', './Assets/Images/assembly.png');
addProject('Personal Portfolio Website', 'This personal portfolio website is a dynamic, interactive showcase of the skills, projects, and experiences I possess. Made with HTML, CSS, and JavaScript, it features a clean, professional design that is both responsive and user-friendly. The HTML structure provides a solid foundation, ensuring the website’s accessibility. The CSS styling brings the site to life with visually appealing layouts, colors, and animations. JavaScript adds interactivity to the site, enhancing the user experience with features like a dynamic project gallery, smooth scrolling, and a contact form with validation. This personal portfolio website shows of what I have learned and what I yet to learn in my journey as a web developer.', '', './Assets/Images/website.png');
addProject('COMING SOON', '', 'link', './Assets/Images/underConstruction.png')
addProject('COMING SOON', '', 'link', './Assets/Images/underConstruction.png')

//Contact page 
//function to check for form Validation 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    //Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let isValid = true;

    //check for name
    if (!name) {
        document.getElementById('nameError').textContent = 'Please enter your name.';
        isValid = false;
    }

    //check for valid email
    if (!email) {
        document.getElementById('emailError').textContent = 'Please enter your email.';
        isValid = false;
    } else {
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email.';
            isValid = false;
        }
    }

    //check for message
    if (!message) {
        document.getElementById('messageError').textContent = 'Please enter your message.';
        isValid = false;
    }

});