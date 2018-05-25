import $ from 'jquery';

export const snakeScript = () => {
	//Canvas stuff
	var canvas = $('#canvas')[0];
	var ctx = canvas.getContext('2d')
	var w = $('#canvas').width()
	var h = $('#canvas').height();
	var cw = 10;
	var direction;
	var score;
	var food;
	var mine;
	var mines_array = [];
	var game_loop;
	var welcome_interval;
	var started = false;
	
	//Snake stuff
	var snake_array;
	
	function newGame() {
		clearInterval(game_loop);
		
		ctx.textAlign = 'center'
		// draw button
		ctx.fillStyle = 'hotpink';
		ctx.strokeStyle = 'white';
		ctx.fillRect((w / 2) - 50, (w / 2) + 50, 100, 50)
		ctx.strokeRect((w / 2) - 50, (w / 2) + 50, 100, 50)
		ctx.fillStyle = 'white';
		ctx.font = '1.8rem monospace';
		ctx.fillText('Start', (w / 2), (h / 2) + 82)
		// draw message
		let message_visible = true
		ctx.font = '4rem monospace';
		var message_text = 'Welcome!'
		ctx.fillStyle = 'white';
		ctx.fillText(message_text, (w / 2), (h/2)); 
		
		welcome_interval = setInterval(() => {
			ctx.font = '4rem monospace';
			ctx.textAlign = 'center'
			if (message_visible) {
				ctx.fillStyle = 'black';
				ctx.strokeStyle = 'black';
			} else {
				ctx.fillStyle = 'white';
			}
			message_visible = !message_visible;
			ctx.strokeText(message_text, (w / 2), (h / 2)); 
			ctx.fillText(message_text, (w / 2), (h / 2)); 
		}, 1000);

		$(document).on('click', (e) => {
			let leftEdge = (window.innerWidth - w) / 2;
			let headerHeight = document.getElementsByClassName('top')[0].clientHeight;
			let topEdge = $('#canvas').offset().top
			clearInterval(welcome_interval)
			let x = e.clientX
			let y = e.clientY
			
			if (x >= leftEdge + (w / 2) - 50 
				&& x <= leftEdge + (w / 2) + 50
				&& y >= topEdge + (w / 2) + 50
				&& y <= topEdge + (w / 2) + 100) {
					init()
				}
			});
		}
		
	function init() {
		direction = 'right';
		create_snake();
		create_food();
		score = 0;

		if (typeof game_loop != 'undefined') clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	newGame();

	function create_snake() {
		var length = 5;
		snake_array = [];
		for (var i = length - 1; i > 0; i--) {
			snake_array.push({ x: i, y: 0 });
		}
	}

	function create_food() {
		food = {
			x: Math.round(Math.random() * (w - cw) / cw),
			y: Math.round(Math.random() * (h - cw) / cw)
		}
		checkForMineFoodCollision();
	}

	function checkForMineFoodCollision() {
		mines_array.forEach(mine => {
			if (mine.x === food.x && mine.y === food.y) {
				create_food();
			}
		})
	}

	function create_mines(newMine) {
		let mines = mines_array.length;
		if (newMine || mines === 0) mines++;
		delete_mines();
		for (let i = 0; i < mines; i++) {
			mine = {
				x: Math.round(Math.random() * (w - cw) / cw),
				y: Math.round(Math.random() * (w - cw) / cw)
			}
			mines_array.push(mine);
		}
	}

	function delete_mines() {
		mines_array = [];
	}

	function paint() {

		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle = 'black';
		ctx.strokeRect(0, 0, w, h);

		if (snake_array.length) {
			var nx = snake_array[0].x;
			var ny = snake_array[0].y;
		}

		if (direction == 'right') nx++;
		else if (direction == 'left') nx--;
		else if (direction == 'up') ny--;
		else if (direction == 'down') ny++;

		if (nx == -1 || nx == w / cw || ny == -1 || ny == h / cw || check_collision(nx, ny, snake_array)) //Collision detection
		{
			food = {};
			mines_array = [];
			snake_array = [];
			newGame();
			return;
		}

		mines_array.forEach(mine => {
			let headX = snake_array[0].x, headY = snake_array[0].y;
			if (headX == mine.x && headY == mine.y) {
				food = {};
				mines_array = [];
				snake_array = [];
				newGame();
				return;
			}
			if (score >= 50) {
				if (headX === mine.x + 1 && headY === mine.y ||
					headX === mine.x && headY === mine.y + 1 &&
					headX === mine.x + 1 && headY === mine.y + 1) {
					food = {};
					mines_array = [];
					snake_array = [];
					newGame();
					return;
				}
			}
		})

		if (nx == food.x && ny == food.y) {
			var tail = { x: nx, y: ny };
			score += 10;
			create_food();
			if (score >= 10) {
				create_mines();
			}
			if (score >= 100 
				&& score % 50 === 0 
				&& mines_array.length < 12) {
				create_mines(true);
			}
		} else {
			var tail = snake_array.pop();
			if (tail) {
				tail.x = nx;
				tail.y = ny;
			}
		}

		snake_array.unshift(tail);

		for (var i = 0; i < snake_array.length; i++) {
			var c = snake_array[i];
			if (c) {
				paint_cell(c.x, c.y);
			}
		}


		if (mines_array.length) {
			mines_array.forEach(mine => {
				paint_mine(mine.x, mine.y);
			})
		}
		paint_cell(food.x, food.y);

		var score_text = 'Score: ' + score;
		ctx.font = '10px monospace';
		ctx.textAlign = 'left';
		ctx.fillText(score_text, 5, h - 5);

	}

	function paint_cell(x, y) {
		ctx.fillStyle = 'hotpink';
		ctx.fillRect(x * cw, y * cw, cw, cw);
		ctx.strokeStyle = 'white';
		ctx.strokeRect(x * cw, y * cw, cw, cw);
	}

	function paint_mine(x, y) {
		ctx.fillStyle = 'red';
		ctx.strokeStyle = 'white';
		if (score < 50) {
			ctx.fillRect(x * cw, y * cw, cw, cw);
			ctx.strokeRect(x * cw, y * cw, cw, cw);
		} else if (score >= 50) {
			ctx.fillRect(x * cw, y * cw, cw * 2, cw * 2);
			ctx.strokeRect(x * cw, y * cw, cw * 2, cw * 2);
		}
	}

	function check_collision(x, y, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i].x == x && array[i].y == y)
				return true;
		}
		return false;
	}




	$(document).keydown(function (e) {
		var key = e.which;
		if (key == '37' && direction != 'right') direction = 'left';
		else if (key == '38' && direction != 'down') direction = 'up';
		else if (key == '39' && direction != 'left') direction = 'right';
		else if (key == '40' && direction != 'up') direction = 'down';
		e.preventDefault();
		return false;
	});

};