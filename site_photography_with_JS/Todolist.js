 window.addEventListener("load", function () {

    	let textInput = document.querySelector(".textInput");
    	let addButton = document.querySelector(".addButton");
    	let numberTask = 0;
    	addButton.addEventListener("click", function(){
    		if (textInput.value !== ""){
    			let li = document.createElement("li");
	    		let ul = document.getElementById("toDoList");
	    		li.classList.add("listItem");  
	    		let button = document.createElement("button");
	    		button.classList.add("button-remove");
		    	let input = document.createElement("input");
		    	input.setAttribute("type","checkbox");    	
		    	input.classList.add("DoneCheckbox");

		    	let span = document.createElement("span");
		    	span.classList.add("TodoText");
		    	button.innerHTML = "Remove";
		    	span.innerHTML =textInput.value;	    
		    		    	
		    	li.appendChild(input);
		    	li.appendChild(span);	    	
		    	li.appendChild(button);
		    	ul.appendChild(li);
	    		textInput.value = "";
	    		textInput.setAttribute("placeholder","Введите текст");
	    		let i=0;
	    		let count = true;
				li.addEventListener("click", function(){
    				if (count===true ){
		    			span.style.textDecoration = "line-through";
		    			span.classList.add("chacked");
		    			count=false; 
		    		} else {
		    			span.style.textDecoration = "none";
		    			span.classList.remove("chacked");
		    			count=true; 
		    		}
			    	
				})
   
	    	button.addEventListener("click", function(){	    			
		    			ul.removeChild(li);	    			
		    		
			})
    	}
    		
    		
    		})
    		

    	})