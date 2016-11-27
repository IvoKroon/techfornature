/// <reference path="../tsDefinitions/phaser.d.ts" />

class SimpleGame
{
	game:Phaser.Game;
	textStyle:Object;
	//resourses
	water:Water; 
	sun:Sun; 
	earth:Earth;

	coins:number; 
	diamonds:number;
	speed:number = 1;

	sunText:Phaser.Text;
	
	counter:number;
	
	
	constructor()
	{
		//setup the game
		this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload:this.preload.bind(this), 
																		create:this.create.bind(this), 
																		render:this.render.bind(this)});
	}
	
	preload()
	{
		//load the sprite of the resourses
		this.game.load.image( 'water', "assets/images/dog.png" );
		this.game.load.image( 'button', "assets/images/button.png" );
		this.game.load.image( 'sun', "assets/images/sun.png");
		this.game.load.image( 'earth', "assets/images/sun.png");
	}

	create()
	{
		//this lines will build the resourse objects.
		this.sun = new Sun(20,20,10, Sun.prototype.action, this.game);
		this.sun.setSizes(20,20);

		this.earth = new Earth(20,50,10, Earth.prototype.action,this.game);
		this.earth.setSizes(20,20);

		this.water = new Water(20,80,10, Water.prototype.action,this.game);
		this.water.setSizes(20,20);

		//this loop goes every second.
		//and this will upscale the amount of earth, water and sun
		this.game.time.events.loop(Phaser.Timer.SECOND, SimpleGame.prototype.updateValues.bind(this), this);
	} 

	updateValues(){
		this.earth.amount += 5;
		this.water.amount += 2;
		this.sun.amount += 10;
	}
	rewriteValues(){
		this.sunText.setText(String(this.sun.amount));
	}

	setSunText(){
		var text = String(this.sun.amount)
		this.sunText = new TextObject(this.game, 100, 100, text, 100,"#ff0000");
	}

	//user this for rendering
	render(){
		//
	}

}

// when the page has finished loading, create our game
window.onload = () => {
	var game = new SimpleGame();
}