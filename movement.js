function fly(e) {
	var keyval;
	keyval=e.keyCode;
	console.log(e.keyCode);
	switch (keyval) {
		case 39:
		  moveRight();
		  break;
		case 37:
		  moveLeft();
		  break;
		case 38:
		  moveUp();
		  break;
		case 80:
		  punch();
		  break;
	}
}

function moveRight() {
	if (r<(document.body.clientWidth - ele.width)){
		r +=20;
		ele.style.left =r+'px';
		ele.src="image/left.png";
	} else
	  ele.src = "image/front.png";
}

function moveUp() {
	if(u<(window.innerHeight - ele.width)){
		u += 100;
		ele.style.bottom = u+"px";
		ele.src="image/front.png";
		moveDown();
	}
}

function moveDown(){
	var id= setInterval(function(){
		if(u>0){
			u -=20;
			ele.style.bottom=u+'px';
		}
		if(u===0)
			clearInterval(id);
	},100);
}

function moveLeft(){
	if(r>0){
		r -=20;
		ele.style.left=r+'px';
		ele.src="image/right.png";
	}else
	 ele.src="image/front.png";
}

function punch(){
	ele.src="image/hitshort1.gif";
	setTimeout(function(){
		ele.src="image/front.png";
	},1000);
}

window.addEventListener('keydown',fly);

window.addEventListener('load',function(){
	ele=document.getElementById('bn');
	r=0;
	u=0;
});