const adjustNavbar = () => {
    const checkInput = document.getElementById("check");
    const navList = document.getElementById("navlist");
    
    if(checkInput.checked){
        // if navlist is to be shown
        navList.className = "hidden";
    }
    else{
        // if navlist is not to be shown
        navList.className = "";
    }
}

const setPage = () => {
    const location = window.location.href;
    const currentLocation = location.slice(location.lastIndexOf("/") + 1, location.length);
    const currentItem = document.getElementById(currentLocation ? currentLocation : "home");

    currentItem.className = "currentPage";
}

const loadFuctionalities = () => {
    // set navbar
    adjustNavbar();

    // set active page
    setPage();
}

const contact = () => {
    alert("Contacting...")
}