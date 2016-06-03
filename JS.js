function removeItem(arr,key) {
	arr.splice(key,1);
	return arr;
}

function getRandom(maxNum) {
	var rand = Math.random();
	return Math.round(rand * 1000) % maxNum;
}

function shuffle() {
	var ps = document.getElementById('ordered').getElementsByTagName('div');
	var shuffled = document.getElementById('shuffled');
	for (var i = ps.length-1; i>=0; i--) {
		var numOfChildren = shuffled.children.length;
		var rand = getRandom(numOfChildren + 1);
		if (rand !== numOfChildren) {
			shuffled.insertBefore(ps[i], shuffled.children[rand]);
		} else {
			shuffled.appendChild(ps[i]);
		}
		
		//alert(i + "," + numOfChildren + "," + rand);
	}
	
	ordered.style.display = 'none';
	shuffled.style.display = 'block';
}