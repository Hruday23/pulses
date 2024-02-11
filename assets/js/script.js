var nav = document.getElementById("navi");
var b = document.getElementById("bars");
var c = document.getElementById("close");
var t = document.getElementById("tm-details");

function Open() 
{
    nav.style.animation='navigationOne .4s linear forwards';
    b.style.visibility='hidden';
    c.style.visibility='visible';
}
function Close() 
{
    nav.style.animation='navigationTwo .4s linear';
    b.style.visibility='visible';
    c.style.visibility='hidden';
}