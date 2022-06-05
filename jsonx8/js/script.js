var fgowu = document.getElementById('fgowu');
var addcart = document.getElementById('addcart');
var addcart2 = document.getElementById('addcart2');
		var ftitles = document.getElementById('ftitles');
		var fnext = document.getElementById('fnext');
		var fdj = document.getElementById('fdj');
		var layout = document.getElementById('layout');
		var naver = document.getElementById('naver');
		var fnall = document.getElementById('fnall');
		var faddto = document.getElementById('faddto');
		 var ftlte1 = document.getElementById("ftl1");
		 var ftlte2 = document.getElementById("ftl2");
		 var ftlte3 = document.getElementById("ftl3");
			
			
		
		
		
		
		
		// mobile version header
		function hasClass(obj, cls) {
		    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
		}  
		  
		function addClass(obj, cls) {  
		    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
		}  
		  
		function removeClass(obj, cls) {  
		    if (hasClass(obj, cls)) {  
		        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
		        obj.className = obj.className.replace(reg, ' ');  
		    }  
		}  
		  
	
		
		
		function fgh(){
			var obj = document.getElementById('layout');  
			toggleClass(obj,"selected");  
		};
		
		
		
		function hasClass(fobj, fcls) {
		    return fobj.className.match(new RegExp('(\\s|^)' + fcls + '(\\s|$)'));  
		}  
		  
		function addClass(fobj, fcls) {  
		    if (!this.hasClass(fobj, fcls)) fobj.className += " " + fcls;  
		}  
		  
		function removeClass(fobj, fcls) {  
		    if (hasClass(fobj, fcls)) {  
		        var reg = new RegExp('(\\s|^)' + fcls + '(\\s|$)');  
		        fobj.className = fobj.className.replace(reg, ' ');  
		    }  
		}  
		  
		function toggleClass(fobj,fcls){ 
		    if(hasClass(fobj,fcls)){  
		        removeClass(fobj, fcls);  
		    }else{  
		        addClass(fobj, fcls);  
		    }  
		}
		
		
		function fnent(){
			var fobj = document.getElementById('ftext');  
			toggleClass(fobj,"on");  
		};
		
		
		
		
		
		
		
		var title = document.querySelectorAll(".tlte li");
			var content = document.querySelectorAll(".fdels .ls");
			for (var i = 0; i < title.length; i++) {
				title[i].setAttribute("index", i);
				title[i].onclick = function() {
					var cindex = this.getAttribute("index");
					for (var j = 0; j < content.length; j++) {
						if (j == cindex) {
							content[j].style.display = "block";
						} else {
							content[j].style.display = "none";
						}
					}
					for (var k = 0; k < title.length; k++) {
						title[k].className = ""
			 
					}
					this.className = "on"
				}
			}
			
			
			
			//cart increase number
					function add(btn) {
							//number*price
						
	
						var num=btn.parentElement.children[1].value;
				
						btn.parentElement.children[1].value=++num;
							
						var proce=btn.parentElement.parentElement.nextElementSibling.children[0].innerText;
							
						var total=parseFloat(proce)*num;
							
						btn.parentElement.parentElement.nextElementSibling.children[1].innerText=total;
						
						 calSum();
					}
					
					//cart decrease number
					function minus(btn){
						//number*price
						
						var num=btn.parentElement.children[1].value;
						//can't decrease to minus
						if(num==0){
							return;
						}
						btn.parentElement.children[1].value=--num;
					
						var price=btn.parentElement.parentElement.nextElementSibling.children[0].innerText;
					
						var total=parseFloat(price)*num;
						btn.parentElement.parentElement.nextElementSibling.children[1].innerText=total;
					
					
						 calSum();
					}
					
					
						var _all=document.getElementById("all");
						var _sum=document.getElementById("sum");
						var _sum1=document.getElementById("sum1");
						var _sum2=document.getElementById("sum2");
					
						var _boxes=document.querySelectorAll("input[type=checkbox]:not(#all)")
						
						_all.onclick=function(){
							// checked:status（return true when selected，otherwise false）
							// this：clicking
							var status=this.checked;
							_boxes.forEach(function(tag){
							
								tag.checked=status;
							})
							
					
							 setTimeout(function(){
								 calSum();
							 },300)
						}
						
					
						_boxes.forEach(function(tag){
						
							tag.onclick=function(){
								//filter all selected checkbox
								// filter:return all eligible element arrays
								var chs=Array.from(_boxes).filter(function(item){
									return item.checked==true;
								})
								
								_all.checked=chs.length===_boxes.length;
							
							
								 calSum();
							}
						})
						
					
						function  calSum(){
							var sum=0;		
							//newBoxes:the selected button
							// tag：the two buttons
							var newBoxes=Array.from(_boxes).filter(function(tag){
								return tag.checked==true;
							})
							
							//tag:the selected button
							newBoxes.forEach(function(tag){
							console.log(tag.parentElement)
								sum+=parseFloat(tag.parentElement.parentElement.children[3].children[1].innerText)
							})
							
							_sum.innerText=sum;
							_sum2.innerText=sum + parseFloat(_sum1.innerText);
							console.log(_sum1.innerText)
						
			
			}
		
		
		var cart = true;
		fgowu.onclick = function(){
			
			if(cart == true){
				ftitles.style.right = "0px";
				 cart = false;
			}else{
				ftitles.style.right = "-140vw";
				 cart = true;
			}
		};
		fnext.onclick = function(){
			ftitles.style.right = "-415px";
		};
		
		addcart.onclick = function(){
			
			if(cart == true){
				ftitles.style.right = "0px";
				 cart = false;
			}else{
				ftitles.style.right = "-140vw";
				 cart = true;
			}
		};
		
		addcart2.onclick = function(){
			
			if(cart == true){
				ftitles.style.right = "0px";
				 cart = false;
			}else{
				ftitles.style.right = "-140vw";
				 cart = true;
			}
		};
		
		