// { % comment % } < !DOCTYPE html >
//     <
//     html lang = "en" >
//     <
//     head >
//     <
//     meta charset = "UTF-8" >
//     <
//     meta name = "viewport"
// content = "width=device-width, initial-scale=1.0" >
//     <
//     script type = "text/javascript"
// src = "jndex.js" > < /script>   <
//     title > Document < /title> <
//     /head> <
//     body onload = "haha()" >
//     <
//     p > I took a shit in Ibiza < /p> <
//     h1 > 2021 - 365 hours of reading < /h1> <
//     button type = "button"
// onclick = "lol()" >
//     Add Minutes <
//     /button> <
//     input type = "text"
// id = "lolol"
// name = "fname" >
//     <
//     label
// for = "fname" > Minutes < /label><br><br> <
//     div id = "lol"
// style = "margin:auto;" > THIS IS THE NUMBER < /div> <
//     /body> <
//     /html>  {% endcomment %}/ / console.log('hello world');

// // function printText(boxid, nb) {

//     var fh = fs.fopen("timee.txt", 3); // Open the file for writing

//     if (fh != -1) // If the file has been successfully opened
//     {
//         var fhh = fs.fopen("timee.txt", 0); // Open the file for writing

//         var hours = fs.fread(fhh, flength(fhh));

//         hours = Number(hours) + Number(nb)

//         fs.fwrite(fh, str); // Write the string to a file
//         fs.fclose(fh); // Close the file
//         document.getElementById(boxid).innerHTML = hours
//         console.log(hours)
//     }
// };

function haha() {

    document.getElementById("lol").innerHTML = "Current Number: " +
        localStorage.getItem("lol");
}


function lol() {
    var lol = document.getElementById("lolol").value;

    if (localStorage.getItem("lol") !== null) {
        var lolol = localStorage.getItem("lol");
        console.log(lolol)
        var lololol = parseInt(lol) + parseInt(lolol);
        console.log(lololol)
        var lolololol = lololol.toString();
        console.log(lolololol)
        localStorage.setItem("lol", lolololol);
        document.getElementById("lol").innerHTML = "Current Number: " + lolololol;
    } else {
        localStorage.setItem("lol", lol);
        document.getElementById("lol").innerHTML = "Current Number: " + lol;
    }




};