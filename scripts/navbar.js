(function(){
    let downArrow = document.getElementById("chev-down");
    var navList = document.getElementById("nav-bar");

    function ShowNavMenu(){
        //if the display is set to "none" then set it to "flex", else set it to "none"
        //This is a way to toggle between none and flex layouts when the dropdown 
        //arrow is pressed to show and hide the layout on smaller screens
        navList.style.display = navList.style.display === "none" ? "flex" : "none";
        navList.style.position = navList.style.position === "static" ? "absolute" : "static";
    }

    downArrow.addEventListener("click", ShowNavMenu);
}());