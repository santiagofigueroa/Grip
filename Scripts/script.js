
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
                tmpRec[key].date_actioned <= end_time){

             if(tmpRec[key].action == action){
                console.log(tmpRec[key].user_id);
                // Add the correct user package.
                result.push(tmpRec[key].user_id);
                
            }
        }
    }

    }
    showMessage(result);
    return result;
}


// Q4 - //getPlaybackTime(1, records)//will return 310

function getPlaybackTime(user_id, records){


}