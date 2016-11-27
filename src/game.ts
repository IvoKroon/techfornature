/// <reference path="../tsDefinitions/phaser.d.ts" />
class SimpleGame
{
	game:Phaser.Game;

	constructor()
	{
		//setup the game
		this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');
		this.game.state.add("MenuScreenState", MenuScreenState , false);
		this.game.state.add("RunningState", RunningState , false);
		//this.game.state.start("MenuScreenState",true,true);
		this.game.state.start("RunningState",true,true);

	}
}

// when the page has finished loading, create our game
window.onload = () => {
	var game = new SimpleGame();
};