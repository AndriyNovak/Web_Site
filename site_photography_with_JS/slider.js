

window.addEventListener("load", function(){
	let slider = document.getElementById("slider");
	let previos_btn = document.querySelector(".slider-previos-btn");
	let arrow_left = document.querySelector(".arrow-left");
	let slider_picture = document.querySelector(".slider-picture");
	let slider_img = document.querySelector(".slider-img");	
	let next_btn = document.querySelector(".slider-next-btn");
	let arrow_right = document.querySelector(".arrow-right");
	
	let arr_picture = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg'];
	let img = document.createElement("img");
  	img.src = arr_picture[0];
  	slider_picture.appendChild(img);
	let count =0;

	let circ_slider;
	let div_circle = document.querySelector(".div-circle");
	arr_picture.forEach(function(elem,index){
		circ_slider = document.createElement("div");
		circ_slider.classList.add("circle-slider");
		div_circle.appendChild(circ_slider);
	})

	
	
	next_btn.addEventListener("click",function(e){
			arrow_left.style.display = "block";				
			if (count<arr_picture.length-1){
				count++;
				img.src = arr_picture[count];
				console.log(count);				
				let pop = document.querySelectorAll(".circle-slider");
				pop.forEach(function(el,index){
					if(count===index){
						el.classList.add("black-circle");
					}
					else {
						el.classList.remove("black-circle");
					}
				})	
				
				
			}
			else {
				
				arrow_right.style.display = "none";
			}
			
		
	})
	previos_btn.addEventListener("click",function(e){	
			arrow_right.style.display = "block";					
			if (count>0){
				count--;
				img.src = arr_picture[count];
				console.log(count);
				let pop = document.querySelectorAll(".circle-slider");
				pop.forEach(function(el,index){
					if(count===index){
						el.classList.add("black-circle");
					}
					else {
						el.classList.remove("black-circle");
					}
				})		
			}
			else {
				arrow_left.style.display = "none";
				
			}
			
	}) 

	

})
