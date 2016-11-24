var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TitleScreenState = (function (_super) {
    __extends(TitleScreenState, _super);
    function TitleScreenState() {
        _super.apply(this, arguments);
        this.count = 0;
    }
    TitleScreenState.prototype.create = function () {
        this.startButton = this.game.add.button(this.game.world.centerX, 0, 'button', this.up, this, 2, 1, 0);
        this.game.input.onDown.add(TitleScreenState.prototype.up, this);
    };
    TitleScreenState.prototype.up = function () {
        this.count++;
        console.log("up " + this.count);
    };
    return TitleScreenState;
}(Phaser.State));
var TextBuilder = (function () {
    function TextBuilder() {
    }
    return TextBuilder;
}());
var SimpleGame = (function () {
    function SimpleGame() {
        this.water = 10;
        this.sun = 10;
        this.earth = 10;
        this.speed = 1;
        this.textStyle = { font: "20px Arial", fill: "#ff0044", align: "center" };
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload.bind(this),
            create: this.create.bind(this),
            render: this.render.bind(this) });
        this.counter = 0;
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image('dog', "assets/images/dog.png");
        this.game.load.image('button', "assets/images/button.png");
        this.game.load.image('sun', "assets/images/sun.png");
    };
    SimpleGame.prototype.create = function () {
        this.setSunText();
        var sun = this.game.add.sprite(20, 10, 'sun');
        sun.width = 30;
        sun.height = 30;
        var button = this.game.add.button(this.game.world.centerX, 450, 'button', SimpleGame.prototype.up.bind(this));
        button.anchor.setTo(0.5, 0.5);
        button.width = 300;
        button.height = 100;
        this.game.time.events.loop(Phaser.Timer.SECOND, SimpleGame.prototype.updateCounter.bind(this), this);
    };
    SimpleGame.prototype.updateCounter = function () {
        this.sun += this.speed;
        this.water += this.speed;
        this.earth += this.speed;
        this.showSunData();
    };
    SimpleGame.prototype.showSunData = function () {
        this.sunText.setText(String(this.sun));
    };
    SimpleGame.prototype.setSunText = function () {
        var text = String(this.sun);
        var style = this.textStyle;
        this.sunText = this.game.add.text(60, 30, text, style);
        this.sunText.anchor.set(0.5);
        this.sunText.tint = 0xff0000;
        this.sunText.inputEnabled = true;
    };
    SimpleGame.prototype.up = function () {
        this.speed++;
        console.log("speed = " + this.speed);
    };
    SimpleGame.prototype.render = function () {
    };
    SimpleGame.prototype.customText = function (text, color, fontsize, fontKind) {
        var font = fontsize + "px " + fontKind;
        var text = text;
        var style = { font: font, fill: color, align: "center" };
        var textbar = this.game.add.text(this.game.world.centerX, this.game.world.centerY, text, style);
        textbar.anchor.set(0.5);
    };
    return SimpleGame;
}());
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=game.js.map