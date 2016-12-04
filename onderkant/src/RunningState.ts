class RunningState extends Phaser.State{
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

	button:ButtonObject;
	button2:ButtonObject;
	button3:ButtonObject;
	button4:ButtonObject;

	
	  constructor() {
            super();
		
        }
        	preload()
	{
		//load the sprite of the resourses
		this.load.image( 'water', "assets/images/dog.png" );
		this.load.image( 'button', "assets/images/button.png" );
		this.load.image( 'sun', "assets/images/sun.png");
		this.load.image( 'earth', "assets/images/sun.png");
		this.load.image( 'button1', "assets/images/roundbutton.png");
		this.load.image( 'button2', "assets/images/roundbutton2.png");
		this.load.image( 'button3', "assets/images/roundbutton3.png");
		this.load.image( 'button4', "assets/images/roundbutton4.png");
	}

	create()
	{
	
	    // tell Phaser how you want it to handle scaling when you go full screen
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        // and this causes it to actually do it
        this.game.scale.refresh();
		//this lines will build the resourse objects.
		this.sun = new Sun(20,20,10, Sun.prototype.action, this.game);
		this.sun.setSizes(20,20);

		this.earth = new Earth(20,50,10, Earth.prototype.action,this.game);
		this.earth.setSizes(20,20);

		this.water = new Water(20,80,10, Water.prototype.action,this.game);
		this.water.setSizes(20,20);

		/*
	    var menuButton = this.game.add.button(this.game.width - 30, this.game.height - 30, "button", this.toggleMenu);
        menuButton.anchor.set(0.5);
		menuGroup.add(menuButton); */
		
		var fourth = this.game.width / 4; // een vierde van de game grote
		var eigth = this.game.height /8; // 1/8
		this.button = new ButtonObject(this.game,0,	0, "button1", this.button1Click); // nieuw button object die nog nergens staat maar button1 als plaatje gebruikt en button1click fnctie uitvoert op click.
		this.button.setSizes(fourth,eigth); // zet knop grote 1 4e breed en 1 8e hoog
		var bh = this.button.height; // waarde voor huidige grote van knop
		this.button.position.x =  0; // begin deze knop bij 0 pixels links
		this.button.position.y = this.game.height - bh; // zet deze knop zo laag mogelijk maar nog wel hoog genoeg om zijn eigen hoogte bh. te tonen
		
		this.button2 = new ButtonObject(this.game,0,	0, "button2", this.button2Click); 
		this.button2.setSizes(fourth,eigth);
		this.button2.position.x =  fourth  ; // zelfde als boven maar begin knop bij 1/4e
		this.button2.position.y = this.game.height - bh;

		this.button3 = new ButtonObject(this.game,0,	0, "button3", this.button3Click);
		this.button3.setSizes(fourth,eigth);
		this.button3.position.x =  this.game.width / 2  ; // op helft
		this.button3.position.y = this.game.height - bh;	

		this.button4 = new ButtonObject(this.game,0,	0, "button4", this.button4Click);
		this.button4.setSizes(fourth,eigth);
		this.button4.position.x =  this.game.width - this.button4.width  ; // begin bij einde maar min eigen breedte om nog te tonen
		this.button4.position.y = this.game.height - bh;	
		//this loop goes every second.
		//and this will upscale the amount of earth, water and sun
		this.game.time.events.loop(Phaser.Timer.SECOND, RunningState.prototype.updateValues.bind(this), this);
	} 

	updateValues(){
		this.earth.amount += 5;
		this.water.amount += 20;
		this.sun.amount += 10;
	}
	rewriteValues(){
		this.sunText.setText(String(this.sun.amount));
	}

	setSunText(){
		let text = String(this.sun.amount);
		this.sunText = new TextObject(this.game, 100, 100, text, 100,"#ff0000");
	}
	 button1Click () {

    this.game.stage.backgroundColor = "#ff0000";
	// stage change naar menu state. nieuw .ts bestand. shop. opt. ect.

	}
		 button2Click () {
 this.game.stage.backgroundColor = "#21ff00";

	}
		 button3Click () {
 this.game.stage.backgroundColor = "#0043ff";

	}
		 button4Click () {
 this.game.stage.backgroundColor = "#ffff00";

	}
	//user this for rendering
	render(){
		//
	}
}