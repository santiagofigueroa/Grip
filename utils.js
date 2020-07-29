// Helps displaying to HTML in div tags.
function showMessage(message){
document.getElementById("q3").innerHTML = message;
}
let data = [];
function setup(){
    var xhp  = new XMLHttpRequest();
	
    xhp.open('GET','data.json',true);
    xhp.responseText = "text";
    xhp.send();
   // Makes sure connection has being stablish.
       xhp.onreadystatechange = function (){
        
        if (xhp.readyState == 4 && xhp.status === 200){
            console.log("Success "); 
             data = JSON.parse(xhp.responseText);
            // Making sure the data is fine to proccess
            console.log(data);   
            jsonData(data);   
        
        } else {
            console.log("Fail");    
        }
        document.getElementById("con").innerHTML = "Status is: " + xhp.status;
       
       }//  End of function. 

}

function jsonData(){
    console.log(data);
    return data;

}