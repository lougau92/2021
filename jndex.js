// console.log('hello world');

// function printText(boxid, nb) {

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