(function(){
    let downArrow = document.getElementById("chev-down");
    var navList = document.getElementById("nav-bar");

    function ShowNavMenu(){
        navList.style.display = navList.style.display === "none" ? "flex" : "none";
        navList.style.position = navList.style.position === "static" ? "absolute" : "static";
    }

    downArrow.addEventListener("click", ShowNavMenu);
}());