//
var data = [
{
    "user_id": 1,
    "device":"Windows 10",
    "action":"start",
    "date_actioned":100
},
{
    "user_id": 2,
    "device":"OSX 15",
    "action":"start",
    "date_actioned":200
},{
    "user_id": 1,
    "device":"iPhone 8s",
    "action":"start",
    "date_actioned":250
},
{
    "user_id": 1,
    "device":"Windows 10",
    "action":"stop",
    "date_actioned":370
},
{
    "user_id": 1,
    "device":"iPhone 8s",
    "action":"stop",
    "date_actioned":410
},
{
    "user_id": 2,
    "device":"OSX 15.4",
    "action":"stop",
    "date_actioned":490
},
{
    "user_id": 3,
    "device":"Android 9.1",
    "action":"start",
    "date_actioned":700
}

];
// Valid JSON
function validJSON(jsonString){
    try{
        if(typeof jsonString != 'string'){
            return false;
       }
        var st = JSON.parse(jsonString);   
        return true           
    }catch(error){
        console.log(error);
        return false;     
    }
    
}

function setup(){
    var xhp  = new XMLHttpRequest();
	
    xhp.open('GET','data.json',true);
    xhp.responseText = "text";
    xhp.send();
   // Makes sure connection has being stablish.
       xhp.onreadystatechange = function (){
        
        if (xhp.readyState == 4 && xhp.status === 200){
            console.log("Success ");
             
             var data1 = JSON.parse(xhp.responseText);
            // Making sure the data is fine to proccess
            console.log(validJSON(data1));
            console.log(data1); 
            document.getElementById("con").innerHTML = "Status is: " + xhp.status;
            //jsonData();
            return data1;
        
        } else {
            console.log("Fail"); 
            document.getElementById("con").innerHTML = "Status is: " + xhp.status;
            return "No data found";
        }

        
        
       
       }//  End of function. 

}

//Implementation on records
//data = setup();
// Use to return data to other Parts of the program 
console.log(data);
getUsers(data,"start" ,700 ,900);
console.log();
// Helps displaying to HTML in div tags.
function showMessage(message){
    document.getElementById("q3").innerHTML = message;
}