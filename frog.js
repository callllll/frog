let frogs = [{name: "frog1"},
 {name: "frog2"},
 {name: "frog3"},
 {name: "frog4"},
 {name: "frog5"},
 {name: "frog6"},
 {name: "frog7"},
 {name: "frog8"},
 {name: "frog9"},
 {name: "frog10"}];

let randomizer
let animation = false;
let frogpics = [];

function preload(){

    for (let i = 0; i <= 10; i++){
        frogpics[i] = loadImage("assets/frogs" + i + ".JPG")
    }
}

function setup(){
    createCanvas(600,600);
    background(200);
    textSize(20);
    imageMode(CENTER);

    text("click for good vibes!", 50, 50);

    
}

function draw(){

    if(animation == true){
        image(frogs[0], width/2, height/2);
    }
}

function randomizer(){
    animation = false;
    if (frogs[0]){
        background(random(200,255));
        randomIndex = int(random(frogs.length));
        text(frogs[randomIndex].normalize, 50, 50);
        frogs.splice(randomIndex, 1);
    }
}