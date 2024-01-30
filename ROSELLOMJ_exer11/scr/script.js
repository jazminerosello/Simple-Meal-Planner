//*PRE-SUBMISSION*//

//*Disable meat when vegetarian option selected*//
function meat() {
    document.getElementById("chicken").disabled = true;
    document.getElementById("pork").disabled = true;
    document.getElementById("beef").disabled = true;
}

function undisable(){
    document.getElementById("chicken").disabled = false;
    document.getElementById("pork").disabled = false;
    document.getElementById("beef").disabled = false;
}
//*End code for disbaling meat*//




//*POST SUBMISSION*//

function warn(){

    var caloric = 0 //**Variable for calculating total calories *//

    //**variables for low carb alert **//
    var count1 = 0
    const carbo = document.getElementsByClassName('carbs');

    //**variables for 2 vegetables reccommended *//
    var count2 = 0;
    const veggie = document.getElementsByClassName('veggie');

    //**Variables for atleast 2 Food Items should be Selected **//
    const food = document.getElementsByName('food');
    var counting = 0

    

    //**For calculating Total Calories**//
    if (document.getElementById('rice').checked){
        caloric += 204; 
    } 
    
    if (document.getElementById('potato').checked){
        caloric += 194;
    } 
    
    if (document.getElementById('bread').checked){
        caloric += 140;
    } 
    
    if (document.getElementById('chicken').checked){
        caloric += 147;
    } 
    
    if (document.getElementById('pork').checked){
        caloric += 260;
    } 
    
    if (document.getElementById('beef').checked){
        caloric += 282;
    } 
    
    if (document.getElementById('slowbeans').checked){
        caloric += 124;
    } 
    
    if (document.getElementById('turnips').checked){
        caloric += 135;
    } 
    
    if (document.getElementById('carrots').checked){
        caloric += 150;
    }  
    
    if (document.getElementById('broccoli').checked){
        caloric += 90;
    } 
    
    if (document.getElementById('steamedbeans').checked){
        caloric += 70;
    }
    //**end code for calculating total calories *//

    //** For loop for 2 veggies are recommended and for the low carb  **/
        for (let j=0; j < 3; j++){
            if (veggie[j].checked){
                count2++
            } if (carbo[j].checked){
                count1++
            }
        }
    //**End of For Loop **//

    //**For loop for at least 2 food items shoudld be selected */
        for(i=0; i<food.length; i++){
            if (food[i].checked){
                counting++
            }
        }
    //**End of For Loop *// 

        if (counting <=1){ //**To alert users if they have not selected atleast 2 food items **//
            alert("Please select at least 2 from Food Items")

        }else{ //**However,... **//

            //**If the user chose the low carb and they also checked more than 2 carbohydrates in the food items and also if the total calories is less than 400 **//
            if (document.getElementById('low_carb').checked && count1 > 2 && caloric < 400){ 
                alert('You choose Low Carb but you have selected more than 2 carbohydrates!' 
                +  '\n\nTotal Calories: ' + caloric +
                "\n\nYou're eating too little")
        
            //**If the user chose the low carb and they also checked more than 2 carbohydrates in the food items and also if the total calories is more than 750 **//
            }else if (document.getElementById('low_carb').checked && count1 > 2 &&  caloric > 750){
                alert('You choose Low Carb but you have selected more than 2 carbohydrates!' 
                +  '\n\nTotal Calories: ' + caloric +
                "\n\nYou shouldn't be eating this much")
        
            //**If the user chose the low carb and they also checked more than 2 carbohydrates in the food items and also if the total calories is okay then **//
            }else if (document.getElementById('low_carb').checked && count1 > 2 ){
                alert('You choose Low Carb but you have selected more than 2 carbohydrates!' + '\n\nTotal Calories: ' + caloric)
            
            //**If the user chose only 1 veggie or less than 1 veggie and if the total calories is less than 400 **//
            }else if (count2 < 2 && caloric < 400){ 
                alert("At least 2 veggies is recommended for a healthy meal!" + '\n\nTotal Calories: ' + caloric + 
                "\n\nYou're eating too little") 
        
            //**If the user chose only 1 veggie or less than 1 veggie and if the total calories is more than 750 **//
            }else if (count2 < 2 && caloric > 750){ 
                alert("At least 2 veggies is recommended for a healthy meal!" + '\n\nTotal Calories: ' + caloric + 
                "\n\nYou shouldn't be eating this much") 
        
            //**If the user chose only 1 veggie or less than 1 veggie and if the total calories is okay **//
            }else if  (count2 < 2){ 
                alert("At least 2 veggies is recommended for a healthy meal!" + '\n\nTotal Calories: ' + caloric )
                
            //**If the user meet the standard but the total calories of the selected food items is more than 750 **//
            }else if (caloric > 750){
                alert('Total Calories: ' + caloric + "\nYou shouldn't be eating this much")
        
            //**If the user meet the standard but the total calories of the selected food items is less than 400 **//
            }else if (caloric < 400){
                alert('Total Calories: ' + caloric + "\nYou're eating too little")
        
            //**If the user meet the standard but the total calories is between the 400 to 750, then it means it is okay **//
            }else if (caloric >= 400 && caloric <= 750){ 
                alert('Total Calories: ' + caloric)
            }
        }

}


