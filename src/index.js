//create click event for button and display menu
const dropDownButton = document.getElementById("mainBtn");
dropDownButton.addEventListener("click", function displayDropDownMenu(){
    document.querySelector(".drop_menu").classList.toggle("visible");
});

//create click event for window (off button click) that hides menu
window.addEventListener("click", function hideDropDownMenu(event){
    if (event.target !== dropDownButton){
        this.document.querySelector(".drop_menu").classList.remove("visible");
    }
});