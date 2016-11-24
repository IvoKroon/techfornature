class TitleScreenState extends Phaser.State{
    game: Phaser.Game;
    startButton: Phaser.Button;
    count:number = 0; 

    create(){
        this.startButton = this.game.add.button(this.game.world.centerX, 0, 'button', this.up, this, 2, 1, 0);
        this.game.input.onDown.add(TitleScreenState.prototype.up, this);
        // this.titleScreenImage = this.add.sprite(0,0, "hammer");
        // this.dog = this.add.sprite(0,0, "dog");
        // this.dog.scale.setTo(
        //     this.game.width / this.titleScreenImage.width / 2,
        //     this.game.height / this.titleScreenImage.height / 2
        // );
    }



    up(){
        this.count++;
		console.log("up " + this.count);
	}

}