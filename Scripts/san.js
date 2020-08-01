// const User = {
//     String: name, 
//     int:age,
//     String: surname, 
//     String: Gender

// };

// var me = new User();
//$(document).ready(function (){
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/typeof 
// https://wiki.sei.cmu.edu/confluence/display/java/Input+Validation+and+Data+Sanitization#:~:text=Validation%3A%20Validation%20is%20the%20process,domain%20of%20valid%20program%20input.&text=Sanitization%20may%20include%20the%20elimination,encoding%2C%20or%20escaping%20the%20characters.
// The folowing functins will implement how to Sanatize user's input.
function sanatize (name , surname , age, dob) {
   if (typeof name === 'string' ){
        // Do the following. the following.
    }

    if(typeof surname === 'string'){


    } 

    if(typeof age ===  'number'){

    }
    if(dob == ""){


    }    
}
// To show masseges at the front-end.
function showMessage(item,divID){
    var tmp = divID;
    document.getElementById(tmp).innerHTML = item;
}
//});