function getRandom(maxNum) {
	var rand = Math.random();
	return Math.round(rand * 1000) % maxNum;
}

function shuffle() {
	var divs = document.getElementById('ordered').getElementsByTagName('div');
	var shuffled = document.getElementById('shuffled');
	
	for (let i = divs.length-1; i>=0; i--) {
		var numOfChildren = shuffled.children.length;
		var rand = getRandom(numOfChildren + 1);
		
		if (rand !== numOfChildren) {
			shuffled.insertBefore(divs[i], shuffled.children[rand]);
		} else {
			shuffled.appendChild(divs[i]);
		}
	}
	
	ordered.style.display = 'none';
	shuffled.style.display = 'block';
}
