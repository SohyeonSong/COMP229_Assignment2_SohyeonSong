/*
File Name: public/Content/app.css
Student's Name: Sohyeon Song
StudentID: 301145311
*/


// Start app
(function(){

    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);
})();


// Show popup when user submit the form and read the user's input
function showPopup() { 

    let FirstName = document.getElementById("firstN");
    let LastName = document.getElementById("lastN");
    let Phone = document.getElementById("phone");
    let Email = document.getElementById("email");
    let Message = document.getElementById("mess");
    alert("Thank you for submitting!"); 
    alert("Name: "+ FirstName.value + " " + LastName.value);
    alert("Phone Number: " + Phone.value + "   Email: " + Email.value);

    // Redirect to homepage
    location.href="/home";
}

