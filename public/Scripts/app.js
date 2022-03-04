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

        let deleteButtons = document.querySelectorAll('.btn-outline-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
              // Ask user to delete
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
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

// Sorting the contact list in acsending order
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  sortTable();

