let frogQuote = [
    {name:"Failure is the condiment that gives success its flavor."}, 
    {name:"You are enough just as you are."}, 
    {name:"It might not be easy but it'll be worth it"}, 
    {name:"Everything happens for a reason"}, 
    {name:"What is yours will find you."}, 
    {name:"Take the risk or lose the chance."}, 
    {name:"Things get better."}, 
    {name:"Take things one step at a time."}, 
    {name:"Give yourself some credit for how far you've come."}, 
    {name:"It's ok to not be ok. Just don't give up."},
    {name:"You are the main protagonist of your own story."},
    {name:"There's no advantage to hurring through life."},
    {name:"The human mind works in mysterious ways. You just need to see the sun shining in the morning to feel energized. A blue sky makes you feel happy you're alive."},
    {name:"Even if they have wings, birds can never fly without a sky."},
    {name:"Whatever happens, happens."}];


    let index = 0;
let buttonPressed = false;




function setup() {
  createCanvas(1845, 975);
  background(255,253,208); 
  textSize(20);
  text("Click for some advice", 10,30);
  console.log(frogQuote[index]);
  //index =int(random(5));
  console.log(index);
  mouseClicked(buttonPressed);


}
function mouseClicked(){
  buttonPressed = true;
}

function draw() {
    loadImage('frog1.jpg', img =>{
        Image(img, width * 0.2, width * 0.26, width * 0.4);
    });

  if (buttonPressed == true){
    index =int(random(15));
    text(frogQuote[index].name,mouseX,mouseY);
   buttonPressed = false;
  }
}