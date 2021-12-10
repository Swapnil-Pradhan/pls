let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
e.preventDefault();
deferredPrompt = e;
showInstallPromotion();
});

window.addEventListener('appinstalled', () => {
hideInstallPromotion();
deferredPrompt = null;
alert("Thank you for installing Calculator 😄");
window.open("https://swapnil-pradhan.github.io/Calculator/")
});

if('serviceWorker' in navigator){
navigator.serviceWorker.register('Cache.js')
}
function calculator(Id){
document.calc.txt.value+=Id;
}

function calculator(Id){
document.calc.txt.value+=Id;
}

function calculate(clickedClassList){
document.calc.main.value+=clickedClassList;
}

function small(){
var scrollAmount = 0;
document.calc.txt.scrollTo({
left: Math.max(scrollAmount += 99, document.calc.txt.clientWidth),
behavior: 'smooth'
});;
if(document.calc.main.value==""){}
else{
document.calc.small.value=eval(calc.main.value);
}
}

function pi(Id){
var Main = document.calc.main;
var op = ["/", "-", "*", "+", "%", ""];
document.calc.txt.value+=Id;
if(op.indexOf((Main.value.slice(-1)))!==-1){
Main.value+="(22/7)";
}
else{
Main.value+="*(22/7)";
}
}

function euler(){
var Main = document.calc.main;
var op = ["/", "-", "*", "+", "%", ""];
document.calc.txt.value+="e";
if(op.indexOf((Main.value.slice(-1)))!==-1){
Main.value+="2.718281828459045235360287471352662497757247093699959574966967627724076630353";
}
else{
Main.value+="*2.718281828459045235360287471352662497757247093699959574966967627724076630353";
}
}

function bracketstart(){
var Main = document.calc.main;
var op = ["/", "-", "*", "+", "(", ""];
document.calc.txt.value+="(";
if(op.indexOf((Main.value.slice(-1)))!==-1){
Main.value+="(";
}
else if(Main.value.slice(-1)=="%"){
Main.value+="*(";
}
else{
Main.value+="*(";
}
}

function bracketend(){
var Main = document.calc.main;
if(Main.value.slice(-1)=="("){}
else if(Main.value.slice(-2)=="**"){}
else if((Main.value.split(")").length - 1)==(Main.value.split("(").length - 1)){}
else{
Main.value+=")";
document.calc.txt.value+=")";
}
}

function divide(Id){
var Main = document.calc.main;
var op = ["/", "%", "+", "-", "*", "("];
if(op.indexOf((Main.value.slice(-1)))!==-1){}
else if(Main.value==""){}
else if(Main.value.slice(-2)=="**"){
Main.value+="/";
document.calc.txt.value+=Id;
}
else{
Main.value+="/";
document.calc.txt.value+=Id;
}
}

function multiply(Id){
var Main = document.calc.main;
var VRValue = document.calc.txt;
var op = ["/", "%", "+", "-", "*", "("];
if(op.indexOf((Main.value.slice(-1)))!==-1){}
else if(Main.value.slice(-2)=="**"){
Main.value+="*";
document.calc.txt.value+=Id;
}
else if(Main.value==""){}
else{
Main.value=Main.value+"*";
VRValue.value+=Id;
}
}

function plus(){
var Main = document.calc.main;
var op = ["/", "%", "+", "-", "*", "("];
if(op.indexOf((Main.value.slice(-1)))!==-1){}
else if(Main.value.slice(-2)=="**"){
Main.value+="+";
document.calc.txt.value+="+";
}
else if(Main.value==""){}
else{
Main.value+="+";
document.calc.txt.value+="+";
}
}

function exponent(){
var Main = document.calc.main;
var op = ["/", "%", "+", "-", "*", "("];
if(op.indexOf((Main.value.slice(-1)))!==-1){}
else if(Main.value==""){}
else{
Main.value+="**";
document.calc.txt.value+="^";
}
}

function minus(){
var Main = document.calc.main;
if(Main.value.slice(-2)=="--"){}
else{
Main.value+="-";
document.calc.txt.value+="-";
}
}

function percent(){
var Main = document.calc.main;
var op = ["/", "%", "+", "-", "*", "("];
if(op.indexOf((Main.value.slice(-1)))!==-1){}
else if(Main.value==""){}
else{
Main.value+="%";
document.calc.txt.value+="%";
}
}

function dropdown(){
var history = document.getElementById("history");
var dropbtn = document.getElementById("dropbtn");
var hishead = document.getElementById("hishead");
if(dropbtn.style.transform=="translateY(600%) rotate(180deg)"){
document.getElementById("history").scrollTo({
top: 0,
behavior: 'smooth'
})
history.style.height="32%";
hishead.style.opacity="0";
document.querySelector(".value").style.height="100%";
dropbtn.style.transform="translateY(600%) rotate(-360deg)";
history.style.overflow="hidden";
document.calc.small.style.opacity="1";
}
else{
history.style.height="99%";
hishead.style.opacity="1";
document.querySelector(".value").style.height="9%";
dropbtn.style.transform="translateY(600%) rotate(180deg)";
history.style.overflowY="scroll";
document.calc.small.style.opacity="0";
}
if(localStorage.length==0){
document.getElementById("clear").style.display="none";
}
}

function backspace(){
var Main = document.calc.main;
var Small = document.calc.small;    
var VRValue = document.calc.txt;
if(Main.value.slice(-7)=="*(22÷7)"){
Main.value=Main.value.substr(0, Main.value.length - 7);
VRValue.value=VRValue.value.substr(0, VRValue.value.length -1);
}
else if(Main.value.slice(-6)=="(22÷7)"){
Main.value=Main.value.substr(0, Main.value.length - 6);
VRValue.value=VRValue.value.substr(0, VRValue.value.length -1);
}
else if(Main.value.slice(-78)=="*2.718281828459045235360287471352662497757247093699959574966967627724076630353"){
Main.value=Main.value.substr(0, Main.value.length - 78);
VRValue.value=VRValue.value.substr(0, VRValue.value.length -1);
}
else if(Main.value.slice(-77)=="2.718281828459045235360287471352662497757247093699959574966967627724076630353"){
Main.value=Main.value.substr(0, Main.value.length - 77);
VRValue.value=VRValue.value.substr(0, VRValue.value.length -1);
}
else if(Main.value.slice(-2)=="**"){
Main.value=Main.value.substr(0, Main.value.length - 2);
VRValue.value=VRValue.value.substr(0, VRValue.value.length -1);
}
else{
Main.value=Main.value.substr(0, Main.value.length - 1);
VRValue.value=VRValue.value.substr(0, VRValue.value.length -1);
}
if(Small.value.length === 1){
Small.value=Small.value.substr(0, VRValue.value.length -1);
}
}

for(var no = 0; no < localStorage.length; no+=1){
var para = document.createElement("p");
para.className="hiss";
para.innerHTML= localStorage.getItem([no]);
document.getElementById("calculation").appendChild(para);
}

window.addEventListener("load", showimg);

function showimg(){
if(localStorage.length == 0){
document.getElementById("nocalc").style.display="block";
}
else{
document.getElementById("nocalc").style.display="none";
}
}

function clearall(){
var popup = document.getElementById("fix");
var i = document.getElementById("deltxt");
document.getElementById("clear").style.display="none";
popup.style.display="block";
if(i.innerHTML.slice(-1)==" "){	
i.innerHTML+=localStorage.length+" calculation(s)? You won't be able to restore them.";
}
}

function clearno(){
var popup = document.getElementById("fix");
popup.style.display="none";
document.getElementById("clear").style.display="block";
}

function clearyes(){
localStorage.clear();
document.getElementById("clear").style.display="none";
document.getElementById("fix").style.display="none";
showimg();
document.querySelectorAll(".hiss").forEach(function(a){
a.remove();
})
}

function equals(){
var Main = document.calc.main;
var VR = document.calc.txt;
var Small = document.calc.small;
var op = ["*", "+", "/", "%", "-"];
var history = localStorage.length;
var para = document.createElement("p");
if(op.indexOf((Main.value.slice(-1)))!==-1){
Main.value+="0";
}
if((Main.value.split(")").length -1)<(Main.value.split("(").length -1)){
var lesbrak = (Main.value.split("(").length - 1) - (Main.value.split(")").length - 1);
var eqbrak = ")".repeat(lesbrak);
Main.value+=eqbrak;
VR.value=eval(calc.main.value);
Main.value=eval(calc.main.value);
Small.value="";
}
localStorage.setItem(history, VR.value+"="+eval(calc.main.value));
VR.value=eval(calc.main.value);
Main.value=eval(calc.main.value);
Small.value="";
para.className="hiss";
para.innerHTML=localStorage.getItem(history);
document.getElementById("clear").style.display="block";
showimg();
document.getElementById("calculation").appendChild(para);
}

if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
document.getElementById("delimg").src="DeleteLight.png";
document.getElementById("nocalcimg").src="NoCalculationsLight.png";
}
