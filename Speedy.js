if(window.addEventListener){
window.addEventListener("load", InitiateSpeedDetection, false);
}

else if(window.attachEvent){
window.attachEvent("onload", InitiateSpeedDetection);
}

function InitiateSpeedDetection(){
window.setTimeout(MeasureConnectionSpeed, 1);
};

function MeasureConnectionSpeed(){
var startTime, endTime;
var download = new Image();
download.onload = function(){
endTime = (new Date()).getTime();
showResults();
setTimeout(()=>{
document.getElementById("alert").style.display="none";
},2000)
}
download.onerror = function(){
document.getElementById("slider").style.overflow="hidden";
document.querySelector(".dots").style.opacity="0";
setTimeout(()=>{
document.querySelector(".dots").style.display="none";
},500)
document.getElementById("test").style.display="block";
document.getElementById("test").style.opacity="1";
document.getElementById("no").style.right="62%";
document.getElementById("no").style.opacity="1";
document.getElementById("internet").style.left="40%";
document.getElementById("internet").style.opacity="1";
setTimeout(()=>{
document.getElementById("p").style.transform="translateY(64px)";
document.getElementById("p").style.opacity="1";
},400)
}
startTime = (new Date()).getTime();
download.src = "Scenery.jpg?nnn="+startTime;

function showResults(){
var result = document.getElementById("result");
var duration = (endTime - startTime) / 1000;
document.getElementById("result").innerHTML=(((6000000 * 8 / duration).toFixed(2) / 1024).toFixed(2) / 1024).toFixed(2);
document.getElementById("slider").style.overflowX="scroll";
document.querySelector(".dots").style.opacity="0";
document.getElementById("test").style.display="block";
document.getElementById("test").style.opacity="1";
setTimeout(()=>{
document.querySelector(".dots").style.display="none";
document.getElementById("data").style.opacity="1";
},500)
setTimeout(()=>{
result.style.transition="0";
},700)
document.getElementById("result").style.transform="translateY(0)";
document.getElementById("mbps").style.fontSize="345%";
document.getElementById("hr").style.width="90%";
document.getElementById("hr").style.opacity="1";
var speed = document.querySelector(".speed");
speed.innerHTML=document.getElementById("result").innerHTML;
var today = new Date();
var date = today.toJSON().slice(0, 10);
var nDate = date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4);
var condition = document.querySelector(".condition");
if(speed.innerHTML>7.5 && result.innerHTML<99){
condition.innerHTML="4G Speed";
}
else if(speed.innerHTML>0.1 && result.innerHTML<7.5){
condition.innerHTML="3G Speed";
}
else if(speed.innerHTML>99 && result.innerHTML<20480){
condition.innerHTML="5G Speed"
}
else if(speed.innerHTML<0.1 && result.innerHTML>0.056){
condition.innerHTML="2G Speed";
}
else if(speed.innerHTML<0.056){
condition.innerHTML="1G Speed";
}
else if(speed.innerHTML>20480){
condition.innerHTML="6G Speed";
}
document.querySelector(".speed").innerHTML+=" MB/s";
var op=document.querySelector(".op");
var region=document.querySelector(".region");
$.get("https://ipinfo.io/json?token=40c851c1d853c3", function(data){
document.querySelector(".ip").innerHTML=data.ip;
op.innerHTML=data.org;
region.innerHTML=data.city+"&#44; "+data.region;
var ops =op.innerHTML;
localStorage.setItem(Date.now(), "<div id='mmh'><b style='font-size:345%'><br>"+speed.innerHTML+"</b><br><span style='font-size:222%'>"+data.ip+" | "+condition.innerHTML+" | "+data.city+" - "+data.region+"<br>"+data.org+"</span></div>");
}, "jsonp");
}
}

function parallax(){
var snap = document.getElementById("slider");
var net = document.getElementById("int");
var his = document.getElementById("his");
var a = snap.scrollLeft-96.12;
var ab = a/1068;
var abc = ab*50;
var x = a+192.24;
var xy = x/1068;
var xyz = xy*50;
var i = 50-xyz
net.style.background="radial-gradient(circle at 50%, rgba(255, 255, 255, 0.1) "+i+"%, transparent 0)";
his.style.background="radial-gradient(circle at 50%, rgba(255, 255, 255, 0.1) "+abc+"%, transparent 0)";
var theme=document.getElementById("theme");
if(snap.scrollLeft<534){
theme.content="#000000";
}
else if(snap.scrollLeft>534){
theme.content="#201c05";
}
}

var acceleration = new Accelerometer({frequency: 60});
acceleration.start();
acceleration.addEventListener('reading',()=>{
document.getElementById("result").style.transform="translateX(" + acceleration.x*7 + "px)";
});

var value=[],
keys = Object.keys(localStorage), i=keys.length;
while(i--){
value.push(localStorage.getItem(keys[i]));
}
document.getElementById("hiss").innerHTML=value;
let comma = document.getElementById("hiss").innerHTML;
let nocomma = replace(comma);
function replace(data){
return data.split(",").map(item=>item.trim()).join("<br>");
}
document.getElementById("hiss").innerHTML=nocomma;
document.getElementById("v").src="Update.js?version="+Date.now();
