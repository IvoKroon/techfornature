
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

	menubutton:ButtonObject;
	button:ButtonObject;
	button2:ButtonObject;
	button3:ButtonObject;
	button4:ButtonObject;

	menuGroup:Phaser.Group; // maakt var van groep phaser..
	
	  constructor() {
            super();
			
        }
        	preload()
	{
		this.menuGroup = new GroupObject(this.game); // maakt nieuwe groep aan op phaser.group manier. 

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

		this.menubutton = new ButtonObject(this.game,this.game.width - 30, this.game.height - 30,"button", this.toggleMenu.bind(this)) // bind zorgt ervoor dat je in de functie nog bij je menugroep item kan.
        this.menubutton.anchor.set(0.5);
	    this.menuGroup.add(this.menubutton);  // voeg zo alle knopjes in de array.

		
		var fourth = this.game.width / 4; // een vierde van de game grote
		var eigth = this.game.height /8; // 1/8
		this.button = new ButtonObject(this.game,this.game.width - 30,	this.game.height + 50, "button1", this.button1Click); // nieuw button object die nog nergens staat maar button1 als plaatje gebruikt en button1click fnctie uitvoert op click.
		this.button.setSizes(fourth,eigth); // zet knop grote 1 4e breed en 1 8e hoog
		this.button.anchor.set(0.5);
		
	    this.menuGroup.add(this.button); 

		this.button2 = new ButtonObject(this.game,this.game.width - 30,	this.game.height + 100, "button2", this.button2Click); 
		this.button2.setSizes(fourth,eigth);
		this.button2.anchor.set(0.5);
		this.menuGroup.add(this.button2); 

		this.button3 = new ButtonObject(this.game,this.game.width - 30,	this.game.height + 150, "button3", this.button3Click);
		this.button3.setSizes(fourth,eigth);
		this.button3.anchor.set(0.5);
	    this.menuGroup.add(this.button3); 

		this.button4 = new ButtonObject(this.game,this.game.width - 30,	this.game.height + 200, "button4", this.button4Click);
		this.button4.setSizes(fourth,eigth);
		this.button4.anchor.set(0.5);
		this.menuGroup.add(this.button4); 
		console.log(this.menuGroup);
		//this loop goes every second.
		//and this will upscale the amount of earth, water and sun
		this.game.time.events.loop(Phaser.Timer.SECOND, this.updateValues.bind(this), this);
	} 
 toggleMenu(){
	console.log(this.menuGroup);
     if(this.menuGroup.y == 0){
          var menuTween = this.game.add.tween(this.menuGroup).to({
               y: -250     
          }, 500, Phaser.Easing.Bounce.Out, true);
     }
     if(this.menuGroup.y == -250){
          var menuTween = this.game.add.tween(this.menuGroup).to({
               y: 0    
          }, 500, Phaser.Easing.Bounce.Out, true);     
     }
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