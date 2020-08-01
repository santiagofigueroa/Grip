
// Q3 - Returns users  
function getUsers(records,  action ,  start_time, end_time ){
    var tmpRec  =  {};
    tmpRec = records;
    console.log(tmpRec);
    var result = [] ;

    for(key in tmpRec){
        console.log(tmpRec[key].user_id);
        if(tmpRec.hasOwnProperty(key)){
            if(tmpRec[key].date_actioned >= start_time && 
               end_time <= tmpRec[key].date_actioned){

             if(tmpRec[key].action == action){
                console.log(tmpRec[key].user_id);
                // Add the correct user package.
                result.push(tmpRec[key].user_id);
                
            }
        }
    }

    }
    var q3 = "q3";
   // showMessage(result,q3);
    return result;
}


// Q4 - //getPlaybackTime(1, records)//will return 310

function getPlaybackTime(user_id, records){
    var tmpRec  =  {};
    // Temporary  variable to hold the data 
    tmpRec = records;
    var playback = [];
    result = 0;
   // console.log(tmpRec);
    for(key in tmpRec){
        if(tmpRec.hasOwnProperty(key)){
            if(tmpRec[key].user_id == user_id){
                console.log(tmpRec[key].user_id);
               //We add all the Playback times to an array.
                playback.push(tmpRec[key].date_actioned);
            } 

        }
    }
    // As all playback number are sorted. 
    console.log(playback);
     //Highest - lowest value in the array.
    result = (playback[playback.length -1]) - playback[0];
    console.log(result);
    //showMessage(result,"q4");
    return result;
}