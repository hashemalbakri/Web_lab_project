function buy(){
    var check = document.querySelector(".checkbox").value;
    
    
    var name = document.querySelector("#n1").value;
    var num = document.querySelector(".amount").value;
    var text = "Congratulation "+name+"' You bought your car for '"+num+"$";
    document.getElementById("myform").style.display="none";
    document.querySelector(".cong").style.display="block";
    document.querySelector("#styles").innerHTML = text;
    document.querySelector(".text").style.cssText = 'text-align:center; padding-top:30px'
}
function exit1(){
    document.querySelector(".cong").style.display="none";
}