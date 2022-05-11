document.addEventListener('DOMContentLoaded', function(){
    function $(selector){
        // checking
        if(typeof selector !== "string") return "";
        // processing
        const selectors = document.querySelectorAll(selector);
        //return 
        return selectors.length == 1 ? selectors[0] : selectors;
    }
    
    const menuItem = $('.menu-item');
    if(menuItem){
        for(let i = 0 ; i < menuItem.length; i++){
            menuItem[i].style.color = "red";
        }
    }
})