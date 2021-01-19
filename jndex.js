var box_time_label = "Total reading time: "

function haha() {
    document.getElementById("nbBox").innerHTML = box_time_label + localStorage.getItem("min");
}



function addmin() {
    var time2add = document.getElementById("inNb").value;
    var currentMin = localStorage.getItem("min")

    if (currentMin !== null) {
        try {
            if (isNaN(time2add)) throw "Not a number, please try again";
            switch (document.getElementById("time_unit").value) {
                case "h":
                    time2add = time2add * 60
            }
            var newmin = parseInt(currentMin) + parseInt(time2add);
            update(newmin)
            updateHist(time2add)
        } catch (err) {
            document.getElementById("nbBox").innerHTML = err;
        }
    } else {
        update(time2add)
    }
};

function refresh() {
    var currentMin = localStorage.getItem("min")
    var d = new Date();
    if (currentMin !== null) {
        localStorage.setItem("backup ".concat(d), currentMin);
    }
    update(0)
    var hist = document.getElementById("hist")
    hist.removeChild(hist.children)
}

function update(nb) {
    document.getElementById("nbBox").innerHTML = box_time_label + timeConvert(nb);
    document.getElementById("progress").value = nb / 60
    localStorage.setItem("min", nb.toString());
}

function updateHist(nb) {
    const div = document.createElement('div');
    const hist = document.getElementById("hist")
    var d = new Date();

    div.className = 'row';

    div.innerHTML = d + ", " + nb + " minutes of reading";

    hist.prepend(div);
    const childern = hist.childNodes;
    if (childern.length > 4) {
        hist.removeChild(hist.lastChild)
    }

}

function timeConvert(n) {
    var num = parseInt(n);
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return (rhours + " hour(s) and " + rminutes + " minute(s).").toString();
}
// { % comment % } < html lang = "en" >
//     <
//     head >
//     <
//     meta charset = "UTF-8" >
//     <
//     meta name = "viewport"
// content = "width=device-width, initial-scale=1.0" >
//     <
//     title > Document < /title> <
//     /head> <
//     body onload = "haha()" >
//     <
//     h1 > Free Vacuum Cleaner Bags! < /h1> <
//     img src = "vc.jpg" > < img >
//     <
//     br > < /br>     <
//     p > Our vacuum cleaners are free!All you have to do is enter you bank credentials here, <
//         input type = "text"
//     id = "lolol"
// name = "fname" >
//     free delevery! < /p>   <
//     button type = "button"
// onclick = "lol()" >
//     Click Here to submit <
//     /button> <
//     br > < /br><br></br >
//     <
//     p > === > < /p> <
//     a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" > link to the product < /a> <
//     /body> <
//     /html> {% endcomment %}
//     /html> {% endcomment %}