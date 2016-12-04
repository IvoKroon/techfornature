class ButtonObject extends Phaser.Button{
    
    constructor(game:Phaser.Game, x:number, y:number, key:string, callback:Function){
        super(game,x,y,key, callback);
        game.add.existing(this);
    }

    setSizes(width:number, height:number){
        this.width = width;
        this.height = height;
    }

    action(){}
}