function somar(){
    var ipt_X;
    ipt_X = document.getElementById("iptX");
    var x = parseInt(ipt_X.value);

    var y = parseInt(document.getElementById("ipty").value);

    var res = x + y;

    alert(res);
}
function colorV(){
    var Body = document.querySelector("body");
    Body.style.backgroundColor = "blue";
}
function colorP(){
    var Body = document.querySelector("body");
    Body.style.backgroundColor = "red";
}
