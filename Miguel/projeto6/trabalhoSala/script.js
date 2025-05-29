function somar(){
    var ipt_X;
    ipt_X = document.getElementById("iptX");
    var x = parseInt(ipt_X.value);

    var y = parseInt(document.getElementById("ipty").value);

    var res = x + y;

   
    spnRes.innerHTML = "O resultado é:  "+res;
}