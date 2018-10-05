if($(window).width() > 500) {
	var numberOfDrops = 400;
} else {
	var numberOfDrops = 100;
}

const board = document.getElementById("canvas");
const width = board.offsetWidth;

function getMargin(width) {
	return Math.floor(Math.random() * Math.floor(width));
}

function createRain(numberOfDrops) {
	for(let i = 0; i < numberOfDrops; i++) {
		let margin = getMargin(width);
		let delay = Math.random() + 0.2;
		let raindrop = `<div class="raindrop" style="margin-left: ${margin}px; animation-delay: ${delay}s" id="drop${i}"></div>`;
		
		board.insertAdjacentHTML('beforeend', raindrop);
	}
}

createRain(numberOfDrops);

$(document).ready(function() {
	
	$('.n').addClass('fall');
	setTimeout(function() {
		$('.d').addClass('fall');
		setTimeout(function() {
			$('.d').addClass('out');
		}, 2000);
	}, 2000);
});