var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MenuScreenState = (function (_super) {
    __extends(MenuScreenState, _super);
    function MenuScreenState() {
        _super.call(this);
        this.count = 0;
    }
    MenuScreenState.prototype.preload = function () {
        this.load.image("title", "TitleScreen.png");
    };
    MenuScreenState.prototype.create = function () {
        this.titleScreenImage = this.add.sprite(0, 0, "title");
        this.input.onTap.addOnce(this.titleClicked, this);
    };
    MenuScreenState.prototype.titleClicked = function () {
        this.game.state.start("RunningState");
    };
    return MenuScreenState;
}(Phaser.State));
var RunningState = (function (_super) {
    __extends(RunningState, _super);
    function RunningState() {
        _super.call(this);
        this.speed = 1;
    }
    RunningState.prototype.preload = function () {
        this.menuGroup = new GroupObject(this.game);
        this.load.image('water', "assets/images/dog.png");
        this.load.image('button', "assets/images/button.png");
        this.load.image('sun', "assets/images/sun.png");
        this.load.image('earth', "assets/images/sun.png");
        this.load.image('button1', "assets/images/roundbutton.png");
        this.load.image('button2', "assets/images/roundbutton2.png");
        this.load.image('button3', "assets/images/roundbutton3.png");
        this.load.image('button4', "assets/images/roundbutton4.png");
    };
    RunningState.prototype.create = function () {
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.game.scale.refresh();
        this.sun = new Sun(20, 20, 10, Sun.prototype.action, this.game);
        this.sun.setSizes(20, 20);
        this.earth = new Earth(20, 50, 10, Earth.prototype.action, this.game);
        this.earth.setSizes(20, 20);
        this.water = new Water(20, 80, 10, Water.prototype.action, this.game);
        this.water.setSizes(20, 20);
        this.menubutton = new ButtonObject(this.game, this.game.width - 30, this.game.height - 30, "button", this.toggleMenu.bind(this));
        this.menubutton.anchor.set(0.5);
        this.menuGroup.add(this.menubutton);
        var fourth = this.game.width / 4;
        var eigth = this.game.height / 8;
        this.button = new ButtonObject(this.game, this.game.width - 30, this.game.height + 50, "button1", this.button1Click);
        this.button.setSizes(fourth, eigth);
        this.button.anchor.set(0.5);
        this.menuGroup.add(this.button);
        this.button2 = new ButtonObject(this.game, this.game.width - 30, this.game.height + 100, "button2", this.button2Click);
        this.button2.setSizes(fourth, eigth);
        this.button2.anchor.set(0.5);
        this.menuGroup.add(this.button2);
        this.button3 = new ButtonObject(this.game, this.game.width - 30, this.game.height + 150, "button3", this.button3Click);
        this.button3.setSizes(fourth, eigth);
        this.button3.anchor.set(0.5);
        this.menuGroup.add(this.button3);
        this.button4 = new ButtonObject(this.game, this.game.width - 30, this.game.height + 200, "button4", this.button4Click);
        this.button4.setSizes(fourth, eigth);
        this.button4.anchor.set(0.5);
        this.menuGroup.add(this.button4);
        console.log(this.menuGroup);
        this.game.time.events.loop(Phaser.Timer.SECOND, this.updateValues.bind(this), this);
    };
    RunningState.prototype.toggleMenu = function () {
        console.log(this.menuGroup);
        if (this.menuGroup.y == 0) {
            var menuTween = this.game.add.tween(this.menuGroup).to({
                y: -250
            }, 500, Phaser.Easing.Bounce.Out, true);
        }
        if (this.menuGroup.y == -250) {
            var menuTween = this.game.add.tween(this.menuGroup).to({
                y: 0
            }, 500, Phaser.Easing.Bounce.Out, true);
        }
    };
    RunningState.prototype.updateValues = function () {
        this.earth.amount += 5;
        this.water.amount += 20;
        this.sun.amount += 10;
    };
    RunningState.prototype.rewriteValues = function () {
        this.sunText.setText(String(this.sun.amount));
    };
    RunningState.prototype.setSunText = function () {
        var text = String(this.sun.amount);
        this.sunText = new TextObject(this.game, 100, 100, text, 100, "#ff0000");
    };
    RunningState.prototype.button1Click = function () {
        this.game.stage.backgroundColor = "#ff0000";
    };
    RunningState.prototype.button2Click = function () {
        this.game.stage.backgroundColor = "#21ff00";
    };
    RunningState.prototype.button3Click = function () {
        this.game.stage.backgroundColor = "#0043ff";
    };
    RunningState.prototype.button4Click = function () {
        this.game.stage.backgroundColor = "#ffff00";
    };
    RunningState.prototype.render = function () {
    };
    return RunningState;
}(Phaser.State));
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');
        this.game.state.add("MenuScreenState", MenuScreenState, false);
        this.game.state.add("RunningState", RunningState, false);
        this.game.state.start("MenuScreenState", true, true);
    }
    return SimpleGame;
}());
window.onload = function () {
    var game = new SimpleGame();
};
var ButtonObject = (function (_super) {
    __extends(ButtonObject, _super);
    function ButtonObject(game, x, y, key, callback) {
        _super.call(this, game, x, y, key, callback);
        game.add.existing(this);
    }
    ButtonObject.prototype.setSizes = function (width, height) {
        this.width = width;
        this.height = height;
    };
    ButtonObject.prototype.action = function () { };
    return ButtonObject;
}(Phaser.Button));
var GameObject = (function () {
    function GameObject(x, y) {
        this.x = x;
        this.y = y;
    }
    return GameObject;
}());
var GameSprite = (function (_super) {
    __extends(GameSprite, _super);
    function GameSprite(game, x, y, spriteName, height, width) {
        _super.call(this, game, x, y, spriteName);
        this.x = x;
        this.y = y;
        this.width = height;
        this.height = width;
        game.add.existing(this);
    }
    return GameSprite;
}(Phaser.Sprite));
var GroupObject = (function (_super) {
    __extends(GroupObject, _super);
    function GroupObject() {
        _super.apply(this, arguments);
    }
    return GroupObject;
}(Phaser.Group));
var ResourcesObject = (function (_super) {
    __extends(ResourcesObject, _super);
    function ResourcesObject(game, x, y, amount, key, callback) {
        _super.call(this, game, x, y, key, callback);
        this._amount = amount;
        this.setValue(this.amount);
    }
    ResourcesObject.prototype.setValue = function (amount) {
        var x = this.x + 30;
        var y = this.y;
        var amountString = String(amount);
        this.text = new TextObject(this.game, x, y, amountString, 15);
    };
    ResourcesObject.prototype.updateValue = function (amount) {
        var amountString = String(amount);
        this.text.setText(amountString);
    };
    Object.defineProperty(ResourcesObject.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (amount) {
            this._amount = amount;
            this.updateValue(this._amount);
        },
        enumerable: true,
        configurable: true
    });
    return ResourcesObject;
}(ButtonObject));
var TextObject = (function (_super) {
    __extends(TextObject, _super);
    function TextObject(game, x, y, text, size, color) {
        if (color === void 0) { color = "#FFFFFF"; }
        var fontsize = size + "px";
        var fontstyle = "Arial";
        var font = fontsize + " " + fontstyle;
        _super.call(this, game, x, y, text, { font: font, fill: color });
        game.add.existing(this);
    }
    TextObject.prototype.remove = function () {
        this.remove;
    };
    return TextObject;
}(Phaser.Text));
var Earth = (function (_super) {
    __extends(Earth, _super);
    function Earth(x, y, amount, callback, game) {
        _super.call(this, game, x, y, amount, 'earth', callback);
        this.game = game;
    }
    Earth.prototype.action = function () {
        console.log(this.amount);
    };
    return Earth;
}(ResourcesObject));
var Sun = (function (_super) {
    __extends(Sun, _super);
    function Sun(x, y, amount, callback, game) {
        _super.call(this, game, x, y, amount, 'sun', callback);
        this.game = game;
    }
    Sun.prototype.action = function () {
        console.log("Sun Clicked");
    };
    return Sun;
}(ResourcesObject));
var Water = (function (_super) {
    __extends(Water, _super);
    function Water(x, y, amount, callback, game) {
        _super.call(this, game, x, y, amount, 'water', callback);
        this.game = game;
    }
    Water.prototype.action = function () {
        console.log("Water Clicked");
    };
    return Water;
}(ResourcesObject));
//# sourceMappingURL=game.js.map