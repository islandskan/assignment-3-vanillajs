/* DOM ELEMENTS */
const sideNav = document.querySelector("#sideNav");
const navClose = document.querySelector(".sidenav__close");
const navOpen = document.querySelector(".sidenav__open");
const modalOverlay = document.querySelector(".modal");
const openModal = document.querySelector(".modal-btn");
const closeModal = document.querySelector(".modal__container--close");
const libBtn = document.querySelector(".btn");

// The default style for the modal and navbar elements are set to
// visibility = "hidden" in our stylecheet

/*FUNCTIONS */

// Function to open the navbar when you click on the burger icon
function btnOpen() {
  sideNav.style.width = "50%";
}

// Function to close the navbar again when you click on the X-mark or outside
function btnClose() {
  sideNav.style.width = "0";
}

// Function to open the modal when you click on the books
function openMod() {
  modalOverlay.style.visibility = "visible";
  modalContent.style.visibility = "visible";
}

// Function to close the modal when you click on the x mark or outside the modal container
closeModal.onclick = () => {
  modalOverlay.style.visibility = "hidden";
};

window.onclick = (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.visibility = "hidden";
  }
};

// Function to change the class of the Add to library-button when it's clicked
libBtn.onclick = () => {
  libBtn.classList.replace("btn", "btn__add");
  libBtn.innerHTML = "Added to Library";
};

/*Event listeners for the DOM elements */

// Event listener added to the burger icon, when the icon is clicked the function btnOpen is invoked
navOpen.addEventListener("click", btnOpen);

// Event listener added to the X mark, when the x is clicked the function btnClose is invoked
navClose.addEventListener("click", btnClose);

// Event Listener added to the books, when the books are clicked the function openMod is invoked
openModal.addEventListener("click", openMod);
