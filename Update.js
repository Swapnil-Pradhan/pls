var update=document.getElementById("updatebg");
if(document.getElementById("update").innerHTML<2.1){
update.style.display="flex";
update.style.opacity="1";
document.getElementById("version").style.innerHTML+=")";
document.getElementById("line1").innerHTML="No more annoying translate options.";
}
