const themeChange = document.querySelector('#bukfats');

themeChange.addEventListener("change", function(){
    if(this.checked){
    document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark")
    }
});

