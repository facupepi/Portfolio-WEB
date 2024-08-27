let mode_light;

window.onload = function () {
    console.log(localStorage.getItem("mode"));
    if (localStorage.getItem("mode") == "true") {
        document.getElementById("checkitem").checked = true;
        enableDarkMode_aboutme();
    }
};

function enableDarkMode_aboutme(){
    mode_light = !mode_light;
    localStorage.setItem("mode", mode_light);

    let main_body = document.body;
    main_body.classList.toggle("light-mode");

    let buttons = document.querySelectorAll("button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("light-mode-button_form");
    }

    let spans = document.querySelectorAll("span");
    for (i = 0; i < spans.length; i++) {
        spans[i].classList.toggle("light-mode-span");
    }

    let h1 = document.querySelector("h1");
    h1.classList.toggle("light-mode-h1");

    let footer = document.querySelector("footer");
    footer.classList.toggle("light-mode-footer");

    let a = document.querySelectorAll("nav > a");
    for (i = 0; i < a.length; i++) {
        a[i].classList.toggle("light-mode-a");
    }

    let a_social_media = document.querySelectorAll(".social_media > a");
    for (i = 0; i < a_social_media.length; i++) {
        a_social_media[i].classList.toggle("light-mode-a");
    }

    let label_checkitem = document.querySelector("div > label");
    label_checkitem.classList.toggle("light-mode-label-checkitem");




}