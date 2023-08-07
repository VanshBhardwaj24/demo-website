<?php
// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve the form data
  $sports = $_POST['sports'];
  $date = $_POST['date'];
  $time = $_POST['time'];
  $court = $_POST['court'];

  // TODO: Add your code to process the form data here

  // For example, you could output a confirmation message:
  echo "<p>Thank you for booking a $sports field/court for $time on $date. Your booking has been confirmed for $court court(s)/field(s).</p>";
}
?>
