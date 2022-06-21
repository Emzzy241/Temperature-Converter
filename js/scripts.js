// The business logic
function add(degrees, kelvin){
    return degrees + kelvin + "k";
}




// The userInterface Logic
$(document).ready( function(){
    $("#temp").submit( function(event){
        event.preventDefault();
        
        const degrees = parseInt($("#degrees").val());
        const kelvin = +273;
        const output = add(degrees, kelvin);

        $(".output").html(output)

    })
});