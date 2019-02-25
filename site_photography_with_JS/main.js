 window.addEventListener("load", function(){
 	let bar = document.querySelector(".bar");
 	let menu_nav = document.querySelector(".menu-nav");
 	let social_icons = document.querySelector(".social-icons");
 	let isMenuOpen = true;
 	// menu_nav.style.display = "none";
 	// social_icons.style.display = "none";
 	bar.addEventListener("click",function(){
 		
 		if (isMenuOpen===true ){
 			menu_nav.style.display = "block";
 			social_icons.style.display = "flex";
 			isMenuOpen=false;
 		}
 		else {
 			menu_nav.style.display = "none";
 			social_icons.style.display = "none";
 			isMenuOpen=true;
 		}
 		
 	})
 
 // let iw = window.innerWidth;
 // // alert(iw);
 // if (iw>=951){
 // 	menu_nav.style.display = "block";
 // 	social_icons.style.display = "flex";
 // }
 // else if (iw<=950){
 // 	menu_nav.style.display = "none";
 // 	social_icons.style.display = "none";
 // }


 })