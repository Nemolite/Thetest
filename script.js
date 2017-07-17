
var marker_once = false;
var marker_valid_input = false;
var marker_valid_age = false;
var br="<br>";

function prepare_xml() {
	 var formData = new FormData(document.forms.name_form);
	 console.dir(formData);
	 var xhr = new XMLHttpRequest();
	 xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("result_output").innerHTML = this.responseText;
            }
            else
            {
            	document.getElementById("result_output").innerHTML = "Error";
            }	
        };
     xhr.open("POST", "/controller.php");
     xhr.send(formData);

}

function prepare_websocket() {

	var ws = new WebSocket("ws://localhost:8081");
	ws.onopen = function() { 
		
		document.getElementById("result_websocket_connect").innerHTML = "Connection opened...";

		  var ws_last_name = document.forms.name_form.last_name.value;
		  var ws_first_name = document.forms.name_form.first_name.value;
		  var ws_patronymic = document.forms.name_form.patronymic.value;
		  var ws_age = document.forms.name_form.age.value;
		  ws.send(ws_first_name);
		  var result_msg = ws_last_name+br+ws_first_name+br+ws_patronymic+br+ws_age; 
		  ws.send(result_msg);
		
	};

    ws.onmessage = function(event) {
    var incomingMessage = event.data;
    document.getElementById("result_websocket").innerHTML = incomingMessage;
};



}


function out_data() {
	   var h3 =  document.createElement('h3');
	   h3.innerHTML = "Before sending to the server";  	
       var add_h3 = document.getElementById("result_input");
       add_h3.appendChild(h3);

       var last_name = document.forms["name_form"]["last_name"].value;
       var first_name = document.forms["name_form"]["first_name"].value;
       var patronymic = document.forms["name_form"]["patronymic"].value;
       
       var result = last_name+br+first_name+br+patronymic;

       var p = document.createElement('p');
       p.innerHTML = result;
       var div = document.getElementById("result_input");
       div.appendChild(p);

       
	   var age = document.forms["name_form"]["age"].value;
	   var p4 = document.createElement('p');
       p4.innerHTML = age;
       p.parentNode.insertBefore(p4, p.nextSibling);

	   return marker_once =true; 	   
} 
 


function transport_to_server() {
	
	if(!marker_once&&marker_valid_age&&marker_valid_input) {
	      out_data();
	        }
      // prepare_xml();
      prepare_websocket();	
    }


function valid_input(txt) 
		{
	        if ((txt.value.length<15)&&(/[a-zA-Zа-яА-Я]/.test(txt.value))){
		    	   	
		    	document.getElementById("error").innerHTML = "";
		    	document.getElementById(txt.name).setAttribute('Class', "ok");
		    	return marker_valid_input = true;
		    }
		     else 
		    {
		    	document.getElementById("error").innerHTML = "Поля должны содержать символы и не более 15";
		    	document.getElementById(txt.name).setAttribute('Class', "error");
		    	return marker_valid_input = false;	     
		    }
	    
        }

function valid_age(num) 
		{
	        
        if(/[0-9]{2}$/.test(num.value))
	       {
		        if ((num.value>=18)&&(num.value<=50)){
			    	   	
			    	document.getElementById("error_age").innerHTML = "";
			    	document.getElementById(num.name).setAttribute('Class', "ok");
			    	return marker_valid_age = true;
			    }
			     else 
			    {
			    	document.getElementById("error_age").innerHTML = "Возраст должен быть от 18 до 50 лет";
			    	document.getElementById(num.name).setAttribute('Class', "error");
			   	 	return marker_valid_age = false;
			    }
	    	}
	    	else
	    	{
	    		document.getElementById("error_age").innerHTML = "Поле возраста предполагает число";
			    document.getElementById(num.name).setAttribute('Class', "error");
			    return marker_valid_age = false;
			   	 
	    	}
		}