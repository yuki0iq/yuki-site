var link_id = "dark_mode_sheet";

var dark_child = (function () {
    var head = document.head;
    var link = document.createElement("style");
    link.innerHTML = `
        body {
            color: #ccc;
            background-color: #000;
        }
        a:link {
            color: #9e9eff;
        }
        a:visited {
            color: #ff9e9e;
        }
        a:hover {
            color: #d0adf0;  
        }
    `;
    link.id = link_id;
    return link;
})();


function is_dark_mode() {
    return document.cookie.indexOf("d=1") !== -1;
}

function reset_dark_mode() {
    document.cookie = "d=1; max-age=0";
}

function apply_dark_mode() {
    document.cookie = "d=1";
}

function toggle_dark_mode() {
    if (is_dark_mode()) {
        reset_dark_mode();
    } else {
        apply_dark_mode();
    }
}

function apply_dark_style() {
    document.head.appendChild(dark_child);
}

function reset_dark_style() {
    try {
        document.head.removeChild(document.getElementById(link_id));
    } catch {
    }
}

function apply_dark() {
    if (is_dark_mode()) {
        apply_dark_style();
    } else {
        reset_dark_style();
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    var button = document.createElement("Button");
    button.innerHTML = "Toggle dark mode";
    button.style = "top: 1em; right: 1em; position: absolute; z-index: 9999";
    button.addEventListener("click", function() {
        toggle_dark_mode();
        apply_dark();
    });
  
    document.body.appendChild(button);
});


apply_dark();

