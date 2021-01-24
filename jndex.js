var box_time_label = "Total reading time: "

function haha() {
    document.getElementById("nbBox").innerHTML = box_time_label + localStorage.getItem("min");
}



function addmin() {
    var time2add = document.getElementById("inNb").value;
    var currentMin = localStorage.getItem("min")

    if (currentMin !== null) {
        // try {
        if (isNaN(time2add)) throw "Not a number, please try again";
        switch (document.getElementById("time_unit").value) {
            case "h":
                time2add = time2add * 60
        }
        var newmin = parseInt(currentMin) + parseInt(time2add);
        update(newmin)
        updateHist(time2add)
            // } catch (err) {
            //     document.getElementById("nbBox").innerHTML = err;
            // }
    } else {
        update(time2add)
    }
    updateStats(time2add)
};

function refresh() {
    var currentMin = localStorage.getItem("min")
    var d = new Date();
    if (currentMin !== null) {
        localStorage.setItem("backup ".concat(d), currentMin);
    }
    update(0)
    var hist = document.getElementById("hist")
    while (hist.firstChild != null) {
        hist.removeChild(hist.firstChild)
    }
    var stats = document.getElementById("weeklystats")
    while (stats.firstChild != null) {
        stats.removeChild(stats.firstChild)
    }
    localStorage.setItem("weekmin", "0")
}

function update(nb) {
    document.getElementById("nbBox").innerHTML = box_time_label + timeConvert(nb);
    document.getElementById("progressbar").value = nb / 60
    localStorage.setItem("min", nb.toString());
}

var week = 5;

function nextWeek() {
    week = week + 1;
}

function updateStats(nb) {
    const stats_table = document.getElementById("weeklybox")
    const childern = stats_table.childNodes;
    var weekbox;
    console.log(childern.length)
    console.log(week)

    // var week = d.getWeek()

    if (childern.length == 1) {
        newWeek(week)
    } else if (document.getElementById(week.toString()) == null) {
        newWeek(week)
    }
    weekbox = document.getElementById(week.toString());
    var currentMin = parseInt(localStorage.getItem("weekmin"));
    var newMin = currentMin + parseInt(nb);
    localStorage.setItem("weekmin", newMin.toString());
    setLengthWeekBox(weekbox)
}

function newWeek(weekNb) {
    localStorage.setItem("weekmin", "0")
    const stats_table = document.getElementById("weeklybox")

    const week_row = document.createElement('div');
    week_row.className = "weekrow "

    weekbox = document.createElement('div');
    weekbox.id = weekNb.toString();
    weekbox.className = 'weekbox';

    labl = document.createElement("Label");
    labl.className = "labelweek";
    labl.innerHTML = "Week " + weekNb + " : "
    labl.setAttribute('for', weekNb.toString());

    week_row.appendChild(labl);
    week_row.appendChild(weekbox);
    stats_table.appendChild(week_row);
}

function setLengthWeekBox(weekbox) {
    var nb = localStorage.getItem("weekmin")
    while (weekbox.firstChild != null)
        weekbox.removeChild(weekbox.firstChild)
    var rest = nb % 60;
    var hNb = (nb - rest) / 60;

    for (i = 0; i < hNb; i++) {
        hbox = document.createElement('div')
        hbox.className = "hbox"
        weekbox.appendChild(hbox)
    }
    if (rest != 0) {
        hbox = document.createElement('div')
        hbox.className = "hbox"
        hbox.style.width = (rest / 60 * 40) + "px"
        weekbox.appendChild(hbox)
    }
}

function updateHist(nb) {
    const hist_row = document.createElement('div');
    const hist_table = document.getElementById("hist")
    var d = new Date();

    hist_row.className = 'row';

    hist_row.innerHTML = d + ", " + nb + " minutes of reading";

    hist_table.prepend(hist_row);
    const childern = hist_table.childNodes;
    if (childern.length > 4) {
        hist_table.removeChild(hist_table.lastChild)
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

Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
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
//     /html> {% endcomment %}