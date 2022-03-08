const drawerBtnElement = document.getElementById('drawer-btn');
const mobileDrawerElement = document.getElementById('mobile-drawer');
const contentElement = document.getElementById("content")


function toggleDrawer() {
    mobileDrawerElement.classList.toggle('open');
    contentElement.classList.toggle("open");
}

drawerBtnElement.addEventListener('click', toggleDrawer);