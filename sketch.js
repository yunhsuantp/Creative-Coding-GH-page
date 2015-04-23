var lines = [];
var headers = [];
var data = [];

/**
 * function that runs before setup.  typically http requests done here
 * @return {[type]} [description]
 */
function preload(){
  //load csv file into array
	lines = loadStrings('Cyclist_Count_by_Year_At_Selected_Commuter_Locations.csv');
	//load the image
  img = loadImage("processing.png");
}

function setupLines(){
  //split the first line into an array and load it into our global headers array
	for(var i=0;i<lines.length;i++){
		if(i == 0){
			headers = split(lines[0],",");
			//text(headers,100,100,800,800);			
		}
		else {
      //create a 2D array, without line[0]
			data[i-1] = split(lines[i],",");
		}
	}

}

function setup() {
  //create our drawing canvas
  createCanvas(windowWidth, windowHeight);
  background(200);
  //show the image
  image(img, windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2);
  
  setupLines();

  for(var i = 0; i < data.length; i++){ //for each row
    for(var j = 0; j < data[i].length; j++){ //and for each col
      data[i]= int(data[i]);
      //print(data[i]);
    }
  }
  noLoop();
}



function draw() {
	//visulaize with triangles
  for(var m=1; m<data.length; m++){
    for(var n=1; n<data[n].length; n++){
      
      var r = random(200);
      var g = random(100);
      var b = random(100);
      
      strokeWeight(2);
      stroke(r, g, b, 50);
      fill(r, g, b, 50);
      triangle(data[m][n]/30, data[m][n]/30, n*80+200, 0, 0, m*20+10);  //triangle(x1, y1, x2, y2, x3, y3)
      
    }
  }
  //print data
  for(var i=0,j=0; i<data.length; i++){
      fill(255);
      textSize(15);
      textFont("Helvetica");
      text(data[i][j], j*80+200, i*20+10);
  }
}