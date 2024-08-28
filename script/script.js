let mode_light;

/*Cada vez que se carga la pagina se verifica en que HTML estamos y el modo que posee*/
window.onload = function () {
    var LocationActual = window.location.pathname;
    console.log(LocationActual);
    console.log(mode_light);
    if (localStorage.getItem("mode") == "true" && LocationActual == "/projects.html") {
        document.getElementById("checkitem").checked = true;
        enableDarkMode_proyectos();
    } else if (localStorage.getItem("mode") == "true" && LocationActual == "/index.html") {
        document.getElementById("checkitem").checked = true;
        enableDarkMode();
    } else if (localStorage.getItem("mode") == "true" && LocationActual == "/education.html") {
        document.getElementById("checkitem").checked = true;
        enableDarkMode_education();
    } else if (localStorage.getItem("mode") == "true" && LocationActual == "/contact.html") {
        document.getElementById("checkitem").checked = true;
        enableDarkMode_contact();
    } else if (localStorage.getItem("mode") == "true" && LocationActual == "/aboutme.html") {
        document.getElementById("checkitem").checked = true;
        enableDarkMode_aboutme();
    } else if (localStorage.getItem("mode") == null) {
        let mode_light = false;
        document.getElementById("checkitem").checked = false;
        localStorage.setItem("mode", mode_light);
    }
};

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

    let footer = document.querySelector("footer");
    footer.classList.toggle("light-mode-footer");

    let a_social_media = document.querySelectorAll(".social_media > a");
    for (i = 0; i < a_social_media.length; i++) {
        a_social_media[i].classList.toggle("light-mode-a");
    }

    let label_checkitem = document.querySelector("div > label");
    label_checkitem.classList.toggle("light-mode-label-checkitem");

    cambiarColorCubo();

}

function cambiarColorCubo() {
    //Cambiar color del cubo de manera aleatoria
    let cubes = document.querySelectorAll(".cube");
    for (i = 0; i < cubes.length; i++) {
        cubes[i].style.backgroundColor = `hsl(${Math.random() * 5000}, 100%, 50%)`;
    }
}

function enableDarkMode_proyectos() {
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

    let strong = document.querySelectorAll("strong");
    for (i = 0; i < strong.length; i++) {
        strong[i].classList.toggle("light-mode-strong");
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

    let articles = document.querySelectorAll(".article_project");
    for (i = 0; i < articles.length; i++) {
        articles[i].classList.toggle("light-mode-article");
    }

    let articles_h2 = document.querySelectorAll("h2");
    for (i = 0; i < articles_h2.length; i++) {
        articles_h2[i].classList.toggle("light-mode-h2-article");
    }

    let articles_p = document.querySelectorAll("p");
    for (i = 0; i < articles_p.length; i++) {
        articles_p[i].classList.toggle("light-mode-p-article");
    }

    let articles_stong = document.querySelectorAll("strong");
    for (i = 0; i < articles_stong.length; i++) {
        articles_stong[i].classList.toggle("light-mode-strong-article");
    }
}

function enableDarkMode_education() {
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

    let footer = document.querySelector("footer");
    footer.classList.toggle("light-mode-footer");

    let article = document.querySelectorAll("article");
    for (i = 0; i < article.length; i++) {
        article[i].classList.toggle("light-mode-article");
    }

    let articles_p = document.querySelectorAll("p");
    for (i = 0; i < articles_p.length; i++) {
        articles_p[i].classList.toggle("light-mode-p-article");
    }

    let articles_stong = document.querySelectorAll("strong");
    for (i = 0; i < articles_stong.length; i++) {
        articles_stong[i].classList.toggle("light-mode-strong-article");
    }

    let strong = document.querySelectorAll("strong");
    for (i = 0; i < strong.length; i++) {
        strong[i].classList.toggle("light-mode-strong");
    }

    let articles_h2 = document.querySelectorAll("h2");
    for (i = 0; i < articles_h2.length; i++) {
        articles_h2[i].classList.toggle("light-mode-h2-article");
    }

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

    let cube = document.querySelectorAll(".cube-loader .cube-wrapper .cube-span");
    for (i = 0; i < cube.length; i++) {
        cube[i].classList.toggle("light-mode-cube-span");
    }
}

function enableDarkMode_contact() {
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

    let section_form = document.querySelector(".section_form");
    section_form.classList.toggle("light-mode-section_form");

    let typewriter = document.querySelector(".typewriter");
    typewriter.classList.toggle("light-mode-typewriter");
}

function enableDarkMode_aboutme() {
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

    let articles = document.querySelectorAll(".section_card");
    for (i = 0; i < articles.length; i++) {
        articles[i].classList.toggle("light-mode-article");
    }

    let articles_h2 = document.querySelectorAll("h2,h3");
    for (i = 0; i < articles_h2.length; i++) {
        articles_h2[i].classList.toggle("light-mode-h2-article");
    }

    let articles_p = document.querySelectorAll("p");
    for (i = 0; i < articles_p.length; i++) {
        articles_p[i].classList.toggle("light-mode-p-article");
    }

    let articles_stong = document.querySelectorAll("strong");
    for (i = 0; i < articles_stong.length; i++) {
        articles_stong[i].classList.toggle("light-mode-strong-article");
    }

}