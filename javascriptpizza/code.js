function checkEmail()
{
    //check textboxes to make sure they are not empty
    //check to se if the text in both boxes is the same

    var email = document.getElementById("email").value;
    var confrim = document.getElementById("confirm").value;

    if(email == "") // conditional expression, when is true the code in the block will be executed
    {
        document.getElementById("email-error").innerHTML = "Please fill in this field";
    }
    else{
        document.getElementById("email-error").innerHTML = "";
    }

    //check to see if confirm textbox is empty
    if(confrim == "") // conditional expression, when is true the code in the block will be executed
    {
        document.getElementById("confirm-error").innerHTML = "Please fill in this field";
    }
    else{
        document.getElementById("confirm-error").innerHTML = "";
    }

    //check if both textboxes have the same value
    if( email != confrim) //if the two strings are NOT the same
    {
            document.getElementById("email-error").innerHTML = "Please fill in this field";
            document.getElementById("confirm-error").innerHTML = "Please fill in this field";
    }

}

function pizzaOrder() 
{
    var output = "<h3>Pizza Order: ";

    //radio buttons
    if( document.getElementById("small").checked == true)
    {
        output += " Small ";
    }
    else if( document.getElementById("medium").checked == true)
    {
        output += " Medium ";
    }
    else
    {
        output += "Large"; 
    }
    
    //checkboxes
    if( document.getElementById("pepperoni").checked == true)
    {
        output += " Pepperoni "
    }
    if( document.getElementById("sausage").checked == true)
    {
        output += " Sausage "
    }
    if( document.getElementById("mushrooms").checked == true)
    {
        output += " Mushrooms "
    }
    //output statement
    document.getElementById("output").innerHTML = output + "</h3>";

}