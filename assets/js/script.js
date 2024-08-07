'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// Portpolio variables
const projectItem = document.querySelectorAll("[data-filter-item]");
const modalContainerPortpolio = document.querySelector("[data-modal-container-portpolio]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn-portpolio]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalProjectImage = document.querySelector("[data-project-img]");
const buttonShowDemo = document.querySelector("[data-show-demo-button]");
const projectTitle = document.querySelector("[data-project-title]");
const projectTechnologies = document.querySelector("[data-project-technologies]");
const projectDescription = document.querySelector("[data-project-text]");


// modal toggle function
const testimonialsModalFunc = function () {
  modalContainerPortpolio.classList.toggle("active");
  overlay.classList.toggle("active");
}

var projectLink = "";

// add click event to all modal items
for (let i = 0; i < projectItem.length; i++) {

  projectItem[i].addEventListener("click", function () {
    modalProjectImage.src = this.querySelector("[data-project-item-img]").src;
    modalProjectImage.alt = this.querySelector("[data-project-item-img]").alt;

    projectTitle.innerHTML = this.querySelector("[data-project-item-title]").innerHTML;
    projectTechnologies.innerHTML = "Technologies: " + this.querySelector("[data-project-item-languages]").innerHTML;
    projectDescription.innerHTML = this.querySelector("[data-project-item-description]").innerHTML;

    projectLink = this.querySelector("[data-project-item-demo]").innerHTML;
    if (projectLink == "") {
      buttonShowDemo.style.display = "none";
    }
    testimonialsModalFunc();
  });
}

buttonShowDemo.addEventListener("click", () => {
  console.log(projectLink);

  window.open(projectLink);
});

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}