arrow = document.querySelector(".arrow");
startButton = document.querySelector("#startButton");
clickButton = document.querySelector("#clickButton")
countP = document.querySelector(".trueClickCount")
countPdiv = document.querySelector("#trueClickCounts");
var randomColor;
var trueClickCount= 0;
var speed = 0;
var accel = 0;
startButton.addEventListener("click",start);
clickButton.addEventListener("click",check)
var arrowColors = ["red","blue","green","purple"]
function start() {

	
	clickButton.style.display = "inline-block";
	startButton.style.display = "none";
	randomColorC();
	accel= 0.5;	
}
function rot () {
	arrow.style.transform = "rotate("+speed+"deg)"
	speed += accel;
}
setInterval(rot,0.001);
function end () {		
	speed = 0;
	accel = 0;
	arrow.style.backgroundColor = "black"
	clickButton.style.display = "none";
	startButton.style.display = "inline-block";
	var newCount = document.createElement("p");
	newCount.className =  "trueClickCount";
	newCount.innerHTML =""+trueClickCount+"";
	countPdiv.appendChild(newCount);
	trueClickCount = 0;
	countP.innerHTML =""+trueClickCount+""
}
function randomColorC() {
	randomColor = arrowColors[Math.floor( 4*Math.random() )]
	arrow.style.backgroundColor=randomColor;		
}
function check() {
	var angle = getAngle();
	
	if (angle < 135 && angle > 45 && randomColor == "blue") {		
	}
	else if (angle < 225 && angle > 135 && randomColor == "green") {		
	}
	else if (angle < 315 && angle > 225 && randomColor == "purple") {		
	}
	else if ( (angle < 45 || angle > 315) && randomColor == "red") {		
	} else {
		end();
		return
	} 
	trueClickCount++;
	if(accel < 3 ) accel += 0.2;	
	else accel += 0.05;
	
	countP.innerHTML =""+trueClickCount+""
	randomColorC();
}
function getAngle () {
	var st = window.getComputedStyle(arrow, null);
	var tr = st.getPropertyValue("transform");
	var values = tr.split('(')[1].split(')')[0].split(',');
	var a = values[0];
	var b = values[1];
	var c = values[2];
	var d = values[3];
	var scale = Math.sqrt(a*a + b*b);
	var sin = b/scale;
	var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));	
	if (angle < 0) angle = angle + 360;
	return angle;
}