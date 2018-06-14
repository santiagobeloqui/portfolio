let cursor = document.getElementById('cursor');

setInterval(()=>{
	if (cursor.style.visibility == 'hidden'){
		cursor.style.visibility = 'visible';
	} else{
		cursor.style.visibility = 'hidden';
	}
	
	
}, 700);

