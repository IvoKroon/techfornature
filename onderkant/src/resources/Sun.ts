/// <reference path="../objects/ResourcesObject.ts" />

class Sun extends ResourcesObject{

    // amount:number;
    text:TextObject;
    game:Phaser.Game;

    constructor(x:number, y:number, amount:number, callback:Function, game:Phaser.Game){
        super(game, x, y, amount, 'sun', callback);
        
        this.game = game;
    }
    
    action(){
        console.log("Sun Clicked");
    }
}