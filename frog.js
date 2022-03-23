let quotes = ["Failure is the condiment that gives success its flavor.", "You are enough just as you are.", "It might not be easy but it'll be worth it", 
"Everything happens for a reason", "What is yours will find you.", "Take the risk or lose the chance.", "Things get better.", 
"Take things one step at a time.", "Give yourself some credit for how far you've come.", "It's ok to not be ok. Just don't give up."]
let frogs = []
let button;

let frog1 = loadImage("frog1.jpg");
let frog2 = loadImage("frog2.jpg");
let frog3 = loadImage("frog3.jpg");
let frog4 = loadImage("frog4.jpg");
let frog5 = loadImage("frog5.jpg");
let frog6 = loadImage("frog6.jpg");
let frog7 = loadImage("frog7.jpg");
let frog8 = loadImage("frog8.jpg");
let frog9 = loadImage("frog9.jpg");
let frog10 = loadImage("frog10.jpg");

frogs = [frog1,frog2,frog3,frog4,frog5,frog6,frog7,frog8,frog9,frog10];


function setup(){
    createCanvas(600, 600);
    background(220);

    let button = createButton("Click to be happy.");
    button.style('color', 'rgb(0,150,200)');
    button.style('backgroundColor', 'rgb(0,255,0)');
    button.style('borderColor', 'rgb(250,255,0)');
    button.style('fontSize', 'large');
    button.position(235,500);

}

function draw(){
    textSize(70);
    fill(0)
    textAlign(CENTER);
    textFont(arial);

}

function mousePressed(){
    background(color(random(255,253,208), random(237,231,221)));
    fill("#ffffff");
    square(125, 125, 350, 20);
    imageMode(CENTER);
    let randomFrog = random(frogs);
    randomFrog.resize(300,300);
    image(randomfrog, width/2, height/2);

    randomQuote();
}

function randomQuote(){
    let quote = random(quotes);
    textSize(30);
    fill(0);
    textFont(arial);
    textAlign(CENTER);
}