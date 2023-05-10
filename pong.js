(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.topPaddle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ar3hyIXvAAIAADlI3vAAg");
	this.shape.setTransform(-0.0284,-12.5088,1.0868,1.0869);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ar3BzIAAjlIXvAAIAADlg");
	this.shape_1.setTransform(-0.0284,-12.5088,1.0868,1.0869);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.topPaddle, new cjs.Rectangle(-83.6,-26,167.2,27), null);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.rightPaddle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhyqdIDlAAIAAU7IjlAAg");
	this.shape.setTransform(12.8765,0.0002,1.1196,1.1194);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhyKeIAA07IDlAAIAAU7g");
	this.shape_1.setTransform(12.8765,0.0002,1.1196,1.1194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightPaddle, new cjs.Rectangle(-1,-76,27.8,152), null);


(lib.leftPaddle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ah8rtID5AAIAAXbIj5AAg");
	this.shape.setTransform(-12.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ah8LuIAA3bID5AAIAAXbg");
	this.shape_1.setTransform(-12.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftPaddle, new cjs.Rectangle(-26,-76,27,152), null);


(lib.bottomPaddle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ar3hyIXvAAIAADlI3vAAg");
	this.shape.setTransform(0.0216,12.4912,1.0868,1.0869);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ar3BzIAAjlIXvAAIAADlg");
	this.shape_1.setTransform(0.0216,12.4912,1.0868,1.0869);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bottomPaddle, new cjs.Rectangle(-83.5,-1,167.1,27), null);


(lib.ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACbAAQAABAguAtQgtAuhAAAQg/AAgtguQgugtAAhAQAAg/AuguQAtgtA/AAQBAAAAtAtQAuAuAAA/g");
	this.shape.setTransform(0.495,0.503,1.0323,1.0323);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAuAtAAA/QAABAguAtQgtAuhAAAQg/AAgtgug");
	this.shape_1.setTransform(0.495,0.503,1.0323,1.0323);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-16.5,-16.5,34,34), null);


// stage content:
(lib.finalProject = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var moveUpBind = moveUp.bind(this);
		var moveDownBind = moveDown.bind(this);
		var moveLeftBind = moveLeft.bind(this);
		var moveRightBind = moveRight.bind(this);
		
		var ballMoveBind = ballMove.bind(this);
		var ballBounceBind = ballBounce.bind(this);
		var ballLeaveBind = ballLeave.bind(this);
		
		var enterPressedBind = enterPressed.bind(this);
		var keyPressedBind = keyPressed.bind(this);
		var keyReleasedBind = keyReleased.bind(this);
		
		var leftPaddle, rightPaddle, topPaddle, bottomPaddle;
		var introTexts, promptText, numPaddlesText, pressEnterText;
		var instructionTexts, leftInstruction, rightInstruction, topInstruction, bottomInstruction, countdownText;
		
		var ball = new lib.ball();
		
		setTimeout(function() {
			promptText = dom_overlay_container.children["promptText"];
			promptText.disabled = true;
			promptText.value = "How many paddles would you like to have?";
			
			numPaddlesText = dom_overlay_container.children["numPaddlesText"];
			numPaddlesText.value = "1";
			
			pressEnterText = dom_overlay_container.children["pressEnterText"];
			pressEnterText.disabled = true;
			pressEnterText.value = "Press 'Enter' when ready"
			
			introTexts = [promptText, numPaddlesText, pressEnterText];
			introTexts.forEach((text) => {
				text.style.fontSize = "30px";
				text.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
				text.style.textAlign = "center";
				text.style.backgroundColor = "white";
			});
			
			leftInstruction = dom_overlay_container.children["leftInstruction"];
			leftInstruction.value = "Left: 'W' to move up, 'S' for down";
		
			rightInstruction = dom_overlay_container.children["rightInstruction"];
			rightInstruction.value = "Right: 'ArrowUp' to move up, 'ArrowDown' for down";
		
			topInstruction = dom_overlay_container.children["topInstruction"];
			topInstruction.value = "Top: 'A' to move left, 'D' for right";
		
			bottomInstruction = dom_overlay_container.children["bottomInstruction"];
			bottomInstruction.value = "Bottom: 'ArrowLeft' to move left, 'ArrowRight' for right";
		
			countdownText = dom_overlay_container.children["countdownText"];
			countdownText.value = "Game starting in 7";
		
			instructionTexts = [leftInstruction, rightInstruction, topInstruction, bottomInstruction, countdownText];
			instructionTexts.forEach((text) => {
				text.style.fontSize = "20px";
				text.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
				text.style.textAlign = "center";
				text.style.backgroundColor = "white";
				text.style.visibility = "hidden";
				text.disabled = true;
			})
		
			youLoseText = dom_overlay_container.children["youLoseText"];
			youLoseText.style.fontSize = "30px";
			youLoseText.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
			youLoseText.style.textAlign = "center";
			youLoseText.style.backgroundColor = "white";
			youLoseText.style.visibility = "hidden";
			youLoseText.disabled = true;
			youLoseText.value = "You lose :(";
			
		}, 0)
		
		window.addEventListener("keydown", enterPressedBind);
		
		function enterPressed(evt) {
			if (evt.key == "Enter") {
				switch(numPaddlesText.value) {
					case "1":
						hideTexts(introTexts);
						showTexts([leftInstruction, countdownText]);
						countdownThenPlay([addLeftPaddle], this);
						break;
					case "2":
						hideTexts(introTexts);
						showTexts([leftInstruction, rightInstruction, countdownText]);
						countdownThenPlay([addLeftPaddle, addRightPaddle], this);
						break;
					case "3":
						hideTexts(introTexts);
						showTexts([leftInstruction, rightInstruction, topInstruction, countdownText]);
						countdownThenPlay([addLeftPaddle, addRightPaddle, addTopPaddle], this);
						break;
					case "4":
						hideTexts(introTexts);
						showTexts([leftInstruction, rightInstruction, topInstruction, bottomInstruction, countdownText]);
						countdownThenPlay([addLeftPaddle, addRightPaddle, addTopPaddle, addBottomPaddle], this);
						break;
					default:
						promptText.value = "Please enter a number between 1 and 4";
				}
			}
		}
		
		function hideTexts(texts) {
			texts.forEach((text) => {text.style.visibility = "hidden";});
		}
		
		function showTexts(texts) {
			texts.forEach((text) => {text.style.visibility = "visible";});
		}
		
		function countdownThenPlay(addPaddleFunctions, stage) {
			var counter = 7;
			var interval = setInterval(function() {
				if (--counter == 0) {
					clearInterval(interval);
					hideTexts(instructionTexts);
					
					addPaddleFunctions.forEach((addPaddleFunction) => {addPaddleFunction(stage)});
				
					ball.x = ball_x_init;
					ball.y = ball_y_init;
					ball.addEventListener("tick", ballMoveBind);
					ball.addEventListener("tick", ballBounceBind);
					ball.addEventListener("tick", ballLeaveBind);
					stage.addChild(ball);
				
					window.addEventListener("keydown", keyPressedBind);
					window.addEventListener("keyup", keyReleasedBind);
				} else {
					countdownText.value = "Game starting in " + String(counter);
				}
			}, 1000);
		}
		
		function addLeftPaddle(stage) {
			leftPaddle = new lib.leftPaddle();
			leftPaddle.x = left_x_init;
			leftPaddle.y = rtlft_y_init;
			stage.addChild(leftPaddle);
		}
		
		function addRightPaddle(stage) {
			rightPaddle = new lib.rightPaddle();
			rightPaddle.x = right_x_init;
			rightPaddle.y = rtlft_y_init;
			stage.addChild(rightPaddle);
		}
		
		function addTopPaddle(stage) {
			topPaddle = new lib.topPaddle();
			topPaddle.x = topbot_x_init;
			topPaddle.y = top_y_init;
			stage.addChild(topPaddle);
		}
		
		function addBottomPaddle(stage) {
			bottomPaddle = new lib.bottomPaddle();
			bottomPaddle.x = topbot_x_init;
			bottomPaddle.y = bottom_y_init;
			stage.addChild(bottomPaddle);
		}
		
		function isDefined(paddle) {
			return (typeof paddle !== 'undefined');
		}
		
		function keyPressed(evt) {
			switch(evt.key) {
				case "w":
					leftPaddle.addEventListener("tick", moveUpBind);
					break;
				case "s":
					leftPaddle.addEventListener("tick", moveDownBind);
					break;
				case "ArrowUp":
					if (isDefined(rightPaddle)) {
						rightPaddle.addEventListener("tick", moveUpBind);
					}
					break;
				case "ArrowDown":
					if (isDefined(rightPaddle)) {
						rightPaddle.addEventListener("tick", moveDownBind);
					}
					break;
				case "a":
					if (isDefined(topPaddle)) {
						topPaddle.addEventListener("tick", moveLeftBind);
					}
					break;
				case "d":
					if (isDefined(topPaddle)) {
						topPaddle.addEventListener("tick", moveRightBind);
					}
					break;
				case "ArrowLeft":
					if (isDefined(bottomPaddle)) {
						bottomPaddle.addEventListener("tick", moveLeftBind);
					}
					break;
				case "ArrowRight":
					if (isDefined(bottomPaddle)) {
						bottomPaddle.addEventListener("tick", moveRightBind);
					}
					break;
			}
		}
		
		function keyReleased(evt) {
			switch(evt.key) {
				case "w":
					leftPaddle.removeEventListener("tick", moveUpBind);
					break;
				case "s":
					leftPaddle.removeEventListener("tick", moveDownBind);
					break;
				case "ArrowUp":
					if (isDefined(rightPaddle)) {
						rightPaddle.removeEventListener("tick", moveUpBind);
					}
					break;
				case "ArrowDown":
					if (isDefined(rightPaddle)) {
						rightPaddle.removeEventListener("tick", moveDownBind);
					}
					break;
				case "a":
					if (isDefined(topPaddle)) {
						topPaddle.removeEventListener("tick", moveLeftBind);
					}
					break;
				case "d":
					if (isDefined(topPaddle)) {
						topPaddle.removeEventListener("tick", moveRightBind);
					}
					break;
				case "ArrowLeft":
					if (isDefined(bottomPaddle)) {
						bottomPaddle.removeEventListener("tick", moveLeftBind);
					}
					break;
				case "ArrowRight":
					if (isDefined(bottomPaddle)) {
						bottomPaddle.removeEventListener("tick", moveRightBind);
					}
					break;
			}
		}
		
		function moveUp(evt) {
			evt.target.y -= paddleSpeed;
		}
		
		function moveDown(evt) {
			evt.target.y += paddleSpeed;
		}
		
		function moveLeft(evt) {
			evt.target.x -= paddleSpeed;
		}
		
		function moveRight(evt) {
			evt.target.x += paddleSpeed;
		}
		
		function ballMove() {
			ball.x -= ball_x_speed;
			ball.y -= ball_y_speed;
		}
		
		function ballBounce() {
			var leftOrRightHit, topOrBottomHit;
			switch(numPaddlesText.value) {
				case "1":
					leftOrRightHit = hitLeftPaddle() || hitRightWall();
					topOrBottomHit = hitTopWall() || hitBottomWall();
					break;
				case "2":
					leftOrRightHit = hitLeftPaddle() || hitRightPaddle();
					topOrBottomHit = hitTopWall() || hitBottomWall();
					break;
				case "3":
					leftOrRightHit = hitLeftPaddle() || hitRightPaddle();
					topOrBottomHit = hitTopPaddle() || hitBottomWall();
					break;
				case "4":
					leftOrRightHit = hitLeftPaddle() || hitRightPaddle();
					topOrBottomHit = hitTopPaddle() || hitBottomPaddle();
					break;
				default:
					leftOrRightHit = false;
					topOrBottomHit = false;
					break;
			}
		
			if (leftOrRightHit) {
				ball_x_speed = -ball_x_speed;
			}
		
			if (topOrBottomHit) {
				ball_y_speed = -ball_y_speed;
			}
		}
		
		function ballLeave() {
			var left;
			switch(numPaddlesText.value) {
				case "1":
					left = leftLeftWall();
					break;
				case "2":
					left = leftLeftWall() || leftRightWall();
					break;
				case "3":
					left = leftLeftWall() || leftRightWall() || leftTopWall();
					break;
				case "4":
					left = leftLeftWall() || leftRightWall() || leftTopWall() || leftBottomWall();
					break;
				default:
					left = false;
					break;
			}
		
			if (left) {
				youLoseText.style.visibility = "visible";
				ball.removeEventListener("tick", ballMoveBind);
				ball.removeEventListener("tick", ballBounceBind);
				ball.removeEventListener("tick", ballLeaveBind);
			}
		}
		
		function hitLeftPaddle() {
			return ball.x-16 <= leftPaddle.x && ball.x-16 >= leftPaddle.x-Math.abs(ball_x_speed) 
			&& ball.y <= leftPaddle.y+91 && ball.y >= leftPaddle.y-91;
		}
		
		function hitRightPaddle() {
			return ball.x+16 >= rightPaddle.x && ball.x+16 <= rightPaddle.x+Math.abs(ball_x_speed)
			&& ball.y <= rightPaddle.y+91 && ball.y >= rightPaddle.y-91
		}
		
		function hitTopPaddle() {
			return ball.y-16 <= topPaddle.y && ball.y-16 >= topPaddle.y-Math.abs(ball_y_speed)
			&& ball.x >= topPaddle.x-91 && ball.x <= topPaddle.x+91;
		}
		
		function hitBottomPaddle() {
			return ball.y+16 >= bottomPaddle.y && ball.y+16 <= bottomPaddle.y+Math.abs(ball_y_speed)
			&& ball.x >= bottomPaddle.x-91 && ball.x <= bottomPaddle.x+91;
		}
		
		function hitRightWall() {
			return ball.x+16 >= 640;
		}
		
		function hitTopWall() {
			return ball.y-16 <= 0;
		}
		
		function hitBottomWall() {
			return ball.y+16 >= 480;
		}
		
		function leftLeftWall() {
			return ball.x+16 <= 0;
		}
		
		function leftRightWall() {
			return ball.x-16 >= 640;
		}
		
		function leftTopWall() {
			return ball.y+16 <= 0;
		}
		
		function leftBottomWall() {
			return ball.y-16 >= 480;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.youLoseText = new lib.an_TextInput({'id': 'youLoseText', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.youLoseText.name = "youLoseText";
	this.youLoseText.setTransform(321.05,240.25,3.1196,2.2773,0,0,0,50.2,11.1);

	this.countdownText = new lib.an_TextInput({'id': 'countdownText', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.countdownText.name = "countdownText";
	this.countdownText.setTransform(320.25,395.95,3.9536,2.2773,0,0,0,50.2,11);

	this.bottomInstruction = new lib.an_TextInput({'id': 'bottomInstruction', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.bottomInstruction.name = "bottomInstruction";
	this.bottomInstruction.setTransform(320,323.95,6.1446,2.2773,0,0,0,50.2,11);

	this.topInstruction = new lib.an_TextInput({'id': 'topInstruction', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.topInstruction.name = "topInstruction";
	this.topInstruction.setTransform(320,256.9,6.1446,2.2773,0,0,0,50.2,11);

	this.rightInstruction = new lib.an_TextInput({'id': 'rightInstruction', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.rightInstruction.name = "rightInstruction";
	this.rightInstruction.setTransform(320,190.45,6.1446,2.2773,0,0,0,50.2,11);

	this.leftInstruction = new lib.an_TextInput({'id': 'leftInstruction', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.leftInstruction.name = "leftInstruction";
	this.leftInstruction.setTransform(320,122,6.1446,2.2773,0,0,0,50.2,11);

	this.pressEnterText = new lib.an_TextInput({'id': 'pressEnterText', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.pressEnterText.name = "pressEnterText";
	this.pressEnterText.setTransform(322.6,303.4,3.614,1.915,0,0,0,50.3,11.2);

	this.numPaddlesText = new lib.an_TextInput({'id': 'numPaddlesText', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.numPaddlesText.name = "numPaddlesText";
	this.numPaddlesText.setTransform(336.5,248.75,1,1.8889,0,0,0,67,17.6);

	this.promptText = new lib.an_TextInput({'id': 'promptText', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.promptText.name = "promptText";
	this.promptText.setTransform(320,167.05,6.1446,2.2773,0,0,0,50.2,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.promptText},{t:this.numPaddlesText},{t:this.pressEnterText},{t:this.leftInstruction},{t:this.rightInstruction},{t:this.topInstruction},{t:this.bottomInstruction},{t:this.countdownText},{t:this.youLoseText}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(328.5,335.8,300.6,86.39999999999998);
// library properties:
lib.properties = {
	id: '1D8EEAA370BD974EBD0664D524A33EF2',
	width: 640,
	height: 480,
	fps: 25,
	color: "#336600",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1683157866631", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1683157866631", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1683157866631", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1D8EEAA370BD974EBD0664D524A33EF2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;