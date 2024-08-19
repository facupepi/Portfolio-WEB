let mode_light;

if(localStorage.getItem("mode") == null){
    console.log('Aca');
    let mode_light = false;
    document.getElementById("checkitem").checked = false;
    localStorage.setItem("mode", mode_light);
}
else{
    if(localStorage.getItem("mode") == "true"){
        console.log('BBB');
        document.getElementById("checkitem").checked = true;
        enableDarkMode();
        localStorage.setItem("mode", mode_light);
    }
};
//Dark Mode



function enableDarkMode() {
    mode_light = !mode_light;
    localStorage.setItem("mode", mode_light);
    
    let main_body = document.body;
    main_body.classList.toggle("light-mode");

    let buttons = document.querySelectorAll("button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("light-mode-button");
    }

    let spans = document.querySelectorAll("span");
    for (i = 0; i < spans.length; i++) {
        spans[i].classList.toggle("light-mode-span");
    }

    let h1 = document.querySelector("h1");
    h1.classList.toggle("light-mode-h1");

    let img = document.querySelector("img");
    img.classList.toggle("light-mode-img");

    let footer = document.querySelector("footer");
    footer.classList.toggle("light-mode-footer");

    let a_social_media = document.querySelectorAll(".social_media > a");
    for (i = 0; i < a_social_media.length; i++) {
        a_social_media[i].classList.toggle("light-mode-a");
    }

    let label_checkitem = document.querySelector("div > label");
    label_checkitem.classList.toggle("light-mode-label-checkitem");
    
}

