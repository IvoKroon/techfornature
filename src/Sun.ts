/// <reference path="../tsDefinitions/phaser.d.ts" />

class Sun extends GameObject{

    sprite:String;
    amount:number;
    width:number;
    height:number;
    game:Phaser.Game;

    constructor(x:number, y:number, width:number, height:number, sprite:String, amount:number, game:Phaser.Game){
        super(x,y)
        this.game = game;
        this.sprite = sprite;
        this.amount = amount;
        this.height = height;
        this.width = width;
    }

    preload(){
        this.game.load.image( 'sun', "assets/images/sun.png" );
    }
}