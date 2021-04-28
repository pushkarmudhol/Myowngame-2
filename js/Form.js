class Form{

    constructor(){
        this.input=createInput("Entre your name here");
        this.button=createButton('Lets play');
        this.title=createElement('h2');
        this.greeting=createElement('h2');
    }

    display(){
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(200,5);
        this.input.position(displayWidth/2-70,50);
        this.button.position(displayWidth/2-60,200);
        this.greeting.position(displayWidth/2-20,200);

    }

}