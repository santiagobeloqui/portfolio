cursor = document.getElementById('cursor');

setInterval(()=>{
	if (cursor.style.visibility == 'hidden'){
		cursor.style.visibility = 'visible';
	} else{
		cursor.style.visibility = 'hidden';
	}
	
	
}, 700);

window.onscroll = function() {
	myFunction();
	return;
};

/*function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        alert("Hola");
	}
	return;
	
}*/

let bioTitle = document.getElementById("bio-title");
let bioText = document.getElementById("bio-text");
/*
window.setTimeout(()=>{
	bioTitle.style.visibility = "visible";
}, 700);

window.setTimeout(()=>{
	bioText.style.visibility = "visible";
}, 1000);
*/
