//create click event for button and display menu
const dropDownButton = document.getElementById("mainBtn");
dropDownButton.addEventListener("click", function displayDropDownMenu(){
    document.querySelector(".drop_menu").classList.toggle("visible");
});