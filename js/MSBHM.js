function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let img, img1;
// let font;

let font = googleFont('Volkhov');


function preload(){
	img = loadImage("https://i.imgur.com/yqTqaSZ.png");
	img1 = loadImage("https://i.imgur.com/7LaSjsL.png");
	
	// font = loadFont("../data/data_msu/S_22/GD2_P1/Redaction20-Bold.otf");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	imageMode(CENTER);
	// blendMode(DIFFERENCE);
	
	textFont(font);
	textAlign(CENTER, CENTER);
	textSize(width/4);

	
}

function draw() {
	background(0);
	
	img.resize(width, height);
	img1.resize(width, height);
	
	image(img, width/2, height/2);
	text("MSBH", width/2, height/2);
	
	push();
	blendMode(DIFFERENCE);
	image(img1, width/2, height/2);
	image(img1, mouseX, mouseY);
	pop();
}

function googleFont(fontName) {
	let link = document.createElement("link")
	link.href = "https://fonts.googleapis.com/css?family=" + encodeURI(fontName) + '&display=swap'
	link.rel = "stylesheet"
	document.head.appendChild(link)
	return fontName
}