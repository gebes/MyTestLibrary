// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};


let sticky_header;
let sticky;

window.onload = function (){
    // After the document has been loaded, we get the header
    sticky_header = document.getElementById("homepageHeader");
    sticky = sticky_header.offsetTop;
};

// Add the sticky class to the sticky_header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        sticky_header.classList.add("sticky");
    } else {
        sticky_header.classList.remove("sticky");
    }
}