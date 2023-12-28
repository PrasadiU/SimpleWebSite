
		function display(){
			
			var str;
			str=document.getElementById("txtindexno").value;
			if(str=="")
				alert("please enter Index No"); 
			else
				
				if(str.length=="4")
					alert(str);
				                     
				else
					alert("please enter a valid length in Index No");
					
		}
		
		function display1(){
			
			var tel;
			tel=document.getElementById("txttelno").value;
			if(tel=="")
				alert("please enter Telephone No"); 
			else
				
				if(tel.length=="10")
					alert(tel);
				                     
				else
					alert("please enter a valid length in Telephone No");
					
		}
		 function msg(){
			alert("you clicked on 'Submit'");
		}
			
		
		function setFocus(){
			document.forms["data_form"]["txtindexno"].focus();
		}
		
		