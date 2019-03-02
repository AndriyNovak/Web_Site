 window.addEventListener("load", function(){
 	
 	 
 	
 	let box_img = document.querySelectorAll(".box-img");
 	let box_img__hover = document.querySelectorAll(".box-img__hover");
 	let box_img__item = document.querySelectorAll(".box-img__item");
 	let imgEexpand = document.querySelectorAll(".img-expand");

 	// box_img.forEach(function(elem1,index1){

 	// 	imgEexpand.forEach(function(elem2,index2){
	 // 		elem2.addEventListener("click", function(e){
	 			
	 // 			box_img__item.forEach(function(elem3,index3){
	 // 				box_img[1].classList.add("divScreen");
	 // 				console.log("hello click");
	 // 				document.body.style.background = "gray";
	 // 				document.body.style.opacity = "0.5";

	 // 			// })

	 // 		})
 			
 	// 	})
 	// });
 	imgEexpand.forEach(function(elem,i){
 		elem.addEventListener("click", function(e){
 			
 			
 			let divScreen = document.createElement("div");			
			
			divScreen.classList.add("divScreen");
			let imgScreen = document.createElement("img");

			imgScreen.src = box_img__item[i].src;
			imgScreen.classList.add("imgScreen");
			
			let divDeleteSign = document.createElement("div");
			divDeleteSign.classList.add("divDeleteSign");
	 		let delSignImg = document.createElement("img");
	 		delSignImg.classList.add("delSignImg");
	 		delSignImg.src = "img/icon/deleteSign.png";
	 		divDeleteSign.appendChild(delSignImg);
	 		divScreen.appendChild(divDeleteSign);
			divScreen.appendChild(imgScreen);
			document.body.appendChild(divScreen);
			
			let wrapperHeader = document.querySelector(".wrapper-header");
			let nav = document.querySelector(".nav");
			wrapperHeader.style.background = "gray";
	 		wrapperHeader.style.opacity = "0.5";
	 		nav.style.background = "gray";
	 		nav.style.opacity = "0.5";
	 		console.log(divScreen);

	 		delSignImg.addEventListener("click", function(e){
	 			wrapperHeader.style.background = "none";
		 		wrapperHeader.style.opacity = "1";
		 		nav.style.background = "rgb(95, 109, 126)";
		 		nav.style.opacity = "1";
		 		document.body.removeChild(divScreen);
	 		})



			// box_img__item[i].webkitRequestFullscreen();
			// box_img__item[i].mozRequestFullScreen();
			// box_img__item[i].msRequestFullscreen();
			// box_img__item[i].requestFullscreen();
		})
	})









 	

 })