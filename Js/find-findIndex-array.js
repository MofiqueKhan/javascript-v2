var a = [10,14,19,21,23];
document.write(a + "<br>");

var b = a.findIndex(checkadult);
document.write(b + "<br>");

function checkadult(age) {
    return age >= 18;
}
