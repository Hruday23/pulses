function navigation() {
    var x = document.getElementById("navigation-bar");
    var t = document.getElementById("one");
    var b = document.getElementById("two");
    if (x.style.display === 'block'){
        x.style.display = "none";
        t.style.visibility="hidden";
        b.style.visibility="visible";
    }
    else {
        x.style.display = "block";
        t.style.visibility="visible";
        b.style.visibility="hidden";
    }
}
function showPassword() {
    var sp = document.getElementById("password");
    if(sp.type === "password")
    {
        sp.type = "text";
        document.getElementById("show").style.visibility='hidden';
        document.getElementById("hide").style.visibility='visible';
    }
    else
    {
        sp.type = "password";
        document.getElementById("hide").style.visibility='hidden';
        document.getElementById("show").style.visibility='visible';
    }
}
function showPasswordOne() {
    var sq = document.getElementById("password-one");
    if(sq.type === "password")
    {
        sq.type = "text";
        document.getElementById("show-one").style.visibility='hidden';
        document.getElementById("hide-one").style.visibility='visible';
    }
    else
    {
        sq.type = "password";
        document.getElementById("hide-one").style.visibility='hidden';
        document.getElementById("show-one").style.visibility='visible';
    }
}