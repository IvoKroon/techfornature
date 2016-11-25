/// <reference path="../tsDefinitions/phaser.d.ts" />

class SimpleGame
{
	game:Phaser.Game;
	textStyle:Object;
	water:number; 
	sun:Sun; 
	earth:number;
	coins:number; 
	diamonds:number;
	speed:number = 1;

	sunText:Phaser.Text;
	
	counter:number;
	
	
	constructor()
	{
		this.sun = new Sun(20,20,30,30,"assets/images/dog.png",0, this.game);
		this.textStyle = { font: "20px Arial", fill: "#ff0044", align: "center" };
		this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload:this.preload.bind(this), 
																		create:this.create.bind(this), 
																		render:this.render.bind(this)});
		this.counter = 0;
	}
	
	preload()
	{
		this.game.load.image( 'dog', "assets/images/dog.png" );
		this.game.load.image( 'button', "assets/images/dog.png" );
		// this.game.load.image( 'sun', "assets/images/sun.png" );
		this.sun.preload();
	}

	create()
	{
		this.setSunText();
		var sun = this.game.add.sprite(20,10, 'sun');
		//dfsafsdf
		sun.width = 30;
		sun.height = 30;
		
		var button = this.game.add.button(this.game.world.centerX , 450, 'button', SimpleGame.prototype.up.bind(this));
		button.anchor.setTo(0.5, 0.5);
		button.width = 300;
		button.height = 100;
		this.game.time.events.loop(Phaser.Timer.SECOND, SimpleGame.prototype.updateCounter.bind(this), this);
	} 

	updateCounter(){
		this.sun.amount += this.speed;
		this.water += this.speed;
		this.earth += this.speed;
		this.showSunData();
	}
	showSunData(){
		this.sunText.setText(String(this.sun));
	}
	setSunText(){
		var text = String(this.sun)
		var style = this.textStyle;
		this.sunText = this.game.add.text(60, 30, text, style);
		this.sunText.anchor.set(0.5);
		this.sunText.tint = 0xff0000;

		this.sunText.inputEnabled = true;
	}
	up(){
		this.speed++;
		console.log("speed = " + this.speed );
	}

	//user this for rendering
	render(){
	}

	customText(text:string,color:string, fontsize:number, fontKind:string){
		var font = fontsize + "px "+ fontKind;
		var text = text;
		var style = { font: font, fill: color, align: "center" };
		var textbar = this.game.add.text(this.game.world.centerX, this.game.world.centerY, text, style);
		textbar.anchor.set(0.5);
	}
}

// when the page has finished loading, create our game
window.onload = () => {
	var game = new SimpleGame();
}