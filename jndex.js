Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

var box_time_label = "Total reading time: "

var currentDate = new Date()
var currentWeek = currentDate.getWeek();


function haha() {
    console.log(currentWeek)
    document.getElementById("nbBox").innerHTML = box_time_label + localStorage.getItem("min");
    loadHist()
    loadWeeks()
}

function loadWeeks() {
    for (var i = 0; i < 5; i++) {
        loadWeekBox(currentWeek - 4 + i)
    }
}

function loadHist() {
    var recordNb = parseInt(localStorage.getItem("recordNb"));
    for (var i = (recordNb - 3); i <= recordNb; i++) {
        if (i <= 0) {
            continue
        }
        loadHistBox(i)
    }
}

function loadHistBox(boxNb) {
    var recordNb = "record " + boxNb
    var minRecord = localStorage.getItem(recordNb)
    var dateKey = "date " + boxNb
    var dateRecord = localStorage.getItem(dateKey)
    updateHist(minRecord, dateRecord)
}

function loadWeekBox(weekNb) {
    var recordNb = "weekRecord " + weekNb
    var weekRecord = localStorage.getItem(recordNb)
    updateStats(weekRecord, weekNb)
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
        var d = new Date;

        var newmin = parseInt(currentMin) + parseInt(time2add);

        update(newmin)

        updateHist(time2add, d)
        var currentRecord = parseInt(localStorage.getItem("recordNb"));
        if (!isNaN(currentRecord)) {
            currentRecord = currentRecord + 1;
        } else {
            currentRecord = 0;
        }
        localStorage.setItem("record " + currentRecord, time2add);
        localStorage.setItem("date " + currentRecord, d);
        localStorage.setItem("recordNb", currentRecord)
            // } catch (err) {
            //     document.getElementById("nbBox").innerHTML = err;
            // }
    } else {
        update(time2add)
    }
    updateStats(time2add, currentWeek)

};



function refresh() {
    var currentMin = localStorage.getItem("min")
    var d = new Date();
    if (currentMin !== null) {
        localStorage.setItem("backup ".concat(d), currentMin);
    }
    update(0)

    localStorage.setItem("recordNb", "0")

    var hist = document.getElementById("hist")
    while (hist.firstChild != null) {
        hist.removeChild(hist.firstChild)
    }
    var stats = document.getElementById("weeklybox")
    while (stats.firstChild != null) {
        stats.removeChild(stats.firstChild)
    }
    for (var i = 0; i < 5; i++) {
        localStorage.setItem("weekRecord " + (currentWeek - i), "0")
    }
}

function update(nb) {
    document.getElementById("nbBox").innerHTML = box_time_label + timeConvert(nb);
    document.getElementById("progressbar").value = nb / 60
    localStorage.setItem("min", nb.toString());
}

function nextWeek() {
    currentWeek = currentWeek + 1;
}

function updateStats(nb, weekNb) {
    if (isNaN(nb)) { nb = 0 }
    const stats_table = document.getElementById("weeklybox")
    const childern = stats_table.childNodes;
    var weekbox;
    console.log(childern.length);
    console.log(weekNb)

    // var week = d.getWeek()

    if (childern.length == 1) {
        newWeek(weekNb)
    } else if (document.getElementById(weekNb.toString()) == null) {
        if (childern.length >= 5) {
            stats_table.removeChild(stats_table.lastChild)
        }
        newWeek(weekNb)
    }
    weekbox = document.getElementById(weekNb.toString());
    var currentMin = parseInt(localStorage.getItem("weekRecord " + weekNb));
    if (isNaN(currentMin)) { currentMin = 0 }
    var newMin = currentMin + parseInt(nb);
    localStorage.setItem("weekRecord " + weekNb, newMin.toString());
    setLengthWeekBox(weekbox, newMin)
}

function newWeek(weekNb) {
    localStorage.setItem("weekRecord " + weekNb, "0")
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
    stats_table.prepend(week_row);
}

function setLengthWeekBox(weekbox, nb) {
    if (isNaN(nb)) {
        nb = 0;
    }
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

function updateHist(nb, d) {
    const hist_row = document.createElement('div');
    const hist_table = document.getElementById("hist")

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