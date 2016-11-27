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
        this.load.image("title", "assets/images/TitleScreen.png");
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
        this.load.image('water', "assets/images/dog.png");
        this.load.image('button', "assets/images/button.png");
        this.load.image('sun', "assets/images/sun.png");
        this.load.image('earth', "assets/images/sun.png");
    };
    RunningState.prototype.create = function () {
        this.sun = new Sun(20, 20, 10, Sun.prototype.action, this.game);
        this.sun.setSizes(20, 20);
        this.earth = new Earth(20, 50, 10, Earth.prototype.action, this.game);
        this.earth.setSizes(20, 20);
        this.water = new Water(20, 80, 10, Water.prototype.action, this.game);
        this.water.setSizes(20, 20);
        this.game.time.events.loop(Phaser.Timer.SECOND, RunningState.prototype.updateValues.bind(this), this);
    };
    RunningState.prototype.updateValues = function () {
        this.earth.amount += 5;
        this.water.amount += 200;
        this.sun.amount += 10;
    };
    RunningState.prototype.rewriteValues = function () {
        this.sunText.setText(String(this.sun.amount));
    };
    RunningState.prototype.setSunText = function () {
        var text = String(this.sun.amount);
        this.sunText = new TextObject(this.game, 100, 100, text, 100, "#ff0000");
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
        this.game.state.start("RunningState", true, true);
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