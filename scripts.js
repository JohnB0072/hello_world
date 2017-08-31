
	
	function getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 16)];
  }
  return color;}




	var clickedTime; var createdTime;
	
	function makeBox(){

	createdTime=Date.now();	
	
    var time=Math.random();
	
	time=time*5000;
	
	setTimeout(function(){
	
	if (Math.random()>0.5){
	
	document.getElementById("box").style.borderRadius="100px";}
	
	else{
	
	document.getElementById("box").style.borderRadius="0";}
	
	var top=Math.random();
	
<<<<<<< HEAD
	top=top*300;
=======
	top=top*200;
>>>>>>> origin/new
	
	var left=Math.random();
	
	left=left*800;
	
	document.getElementById("circle").style.top=top+"px";
	
	document.getElementById("box").style.top=top+"px";
	
	document.getElementById("box").style.left=left+"px";
	
	document.getElementById("circle").style.backgroundColor=getRandomColor();
	
	document.getElementById("box").style.backgroundColor=getRandomColor();
	
	document.getElementById("box").style.display="block";
	
	createdTime=Date.now();}
	
	,time);
	
	}
	
	document.getElementById("box").onclick=function(){
	
	clickedTime=Date.now();
	
	reactionTime=(clickedTime-createdTime)/1000;
	
	document.getElementById("time").innerHTML=reactionTime;
	
	this.style.display="none";makeBox();}
	
	makeBox();
	
	
	
	
	
	
    
		

		
		