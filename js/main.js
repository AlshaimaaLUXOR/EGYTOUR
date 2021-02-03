/*******JavaScript*****/

var i = 1;

var timer = setInterval(function () {
    "use strict";
    if (i < 9) {
        i++;
        header.style.backgroundImage = "url(img/im" + i + ".jpg)";
    } else {
      i=1;
        header.style.backgroundImage = "url(img/im"+ i+".jpg)";
    }
    
}, 1500)


/************** open video **********/

document.getElementById("vid1").onclick = function () {
    "use strict";
    window.open("https://www.youtube.com/watch?v=rsv4drcgHys", "_blank", "");
}

document.getElementById("vid2").onclick = function () {
    "use strict";
    window.open("https://www.youtube.com/watch?v=mfxQy5A_tHs", "_blank", "");
}

document.getElementById("vid3").onclick = function () {
    "use strict";
    window.open("https://www.youtube.com/watch?v=qK4g5FPPMiQ", "_blank", "");
}