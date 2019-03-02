window.addEventListener("load", function(){
	let logoWrap = document.querySelector(".logo-wrap");
	let changeImg = document.querySelectorAll(".changeImg");
	let logo = document.querySelector(".logo");
	let btnSaveLogo = document.querySelector(".btnSaveLogo");
	let divChangeLogo = document.querySelector(".divChangeLogo");
	let password = document.querySelector(".password");
	let enterPass = document.querySelector(".enterPass");
	let logoSrc;
	
	if (localStorage.getItem("logo")){								
		logo.src = localStorage.getItem("logo");
	}else {
		logo.src = "img/profile.jpg";
	}

	logo.addEventListener("click",function(){
			password.style.display = "block";
			enterPass.style.display = "block";				
			password.addEventListener("change",function(e){
				console.log(password.value);
				enterPass.addEventListener("click",function(){
				if (password.value == 123) {
					console.log("Пароль верный");
					password.style.display = "none";
					enterPass.style.display = "none";	
					divChangeLogo.style.display = "flex";
						btnSaveLogo.style.display = "flex";
						
						changeImg.forEach(function(elem1,j){
							elem1.addEventListener("click",function(){
								localStorage.setItem("logo",elem1.src);
								if (localStorage.getItem("logo")){								
								logo.src = localStorage.getItem("logo");
								}
								
								btnSaveLogo.addEventListener("click",function(){
									
								divChangeLogo.style.display = "none";
								btnSaveLogo.style.display = "none";	
								password.value = "";

								if (localStorage.getItem("logo")){								
								logo.src = localStorage.getItem("logo");
								}
								})
							})
						})
				} else {
					alert("Ви ввели неверный пароль");
					password.value = "";
					
				}
				
			})	

			})	
						
				
	});
})