(function(){
    addEventListenerToBtn();
})();

function addEventListenerToBtn(){
    const mainBtn = document.getElementById("mainBtn");
    mainBtn.addEventListener("click", ()=>{
        showMenu();
    });

    mainBtn.addEventListener("hover", ()=>{
        showMenu();
    });
}

function showMenu(){
    //implement
}