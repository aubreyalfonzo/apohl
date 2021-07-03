function setup() {
	createCanvas(windowWidth, windowHeight);
	
	noStroke();
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	textSize(100);
}

function draw() {
	if(mouseX<width/2){
	background(-mouseX, mouseY, mouseX-mouseY);
	}else{
		background(mouseX/5, mouseY/5, mouseX-mouseY);
	}
	fill(mouseY, mouseX-mouseY, mouseX);
	
	for(i = 0; i<26; i++){
		let manip = cos(frameCount*.005)*i;
		
		let m = map(i, 0, 25, 0, width);
		let m2 = map(i, 0, 25, 0, height);
		
		rect(m, mouseY, 10);
		rect(mouseX, m2, 10);
	}
	
	let d = dist(mouseX, mouseY, width/2, height/2);
	
	if(d<50){
		text("COMING SOON", width/2, height/2);
	}
	
}