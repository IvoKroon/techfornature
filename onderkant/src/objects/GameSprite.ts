class GameSprite extends Phaser.Sprite{
    x:number;
    y:number;

    constructor(game:Phaser.Game, x:number, y:number, spriteName:string, height:number, width:number){
        super(game, x, y,spriteName);
        this.x = x;
        this.y = y;
        this.width = height;
        this.height = width;

        //add the sprite to the game.
        game.add.existing(this);

    }
}