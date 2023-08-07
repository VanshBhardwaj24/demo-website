// function validateForm() {
//     var sports = document.getElementById("sports").value;
//     var date = document.getElementById("date").value;
//     var time = document.getElementById("time").value;
//     var court = document.getElementById("court").value;

//     // Check if any field is empty
//     if (sports == "" || date == "" || time == "" || court == "") {
//       alert("Please fill out all fields.");
//       return false;
//     }

//     // Check if sports field is text only
//     if (!/^[a-zA-Z]+$/.test(sports)) {
//       alert("Please enter a valid sports name.");
//       return false;
//     }

//     // Check if date is valid
//     var selectedDate = new Date(date);
//     var today = new Date();
//     if (selectedDate < today) {
//       alert("Please select a valid date.");
//       return false;
//     }

//     // Check if time is valid
//     var selectedTime = parseInt(time.split("-")[0]);
//     var currentTime = new Date().getHours();
//     if (selectedTime < currentTime || selectedTime > (currentTime + 1)) {
//       alert("Please select a valid time slot.");
//       return false;
//     }

//     // Check if court field is valid
//     if (isNaN(court) || court < 1 || court > 10) {
//       alert("Please enter a valid court count.");
//       return false;
//     }

//     // If all fields are valid, submit the form
//     alert("Your details are stored.");
//     return true;
//   }
 

// document.getElementById("button").onclick() = function{
//     windows.prompt("Your deatails are submitted")
//     return true
    
    
// }
// if (selectedTime <currentTime){
//     alert("Select correct time for the above")
// }

function validateForm() {
    // add your form validation logic here
    return true;
  }
  
  function showMessage() {
    // show success message
    document.getElementById("success").style.display = "block";
    // hide danger message (if it's visible)
    document.getElementById("danger").style.display = "none";
  }
  