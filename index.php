<?php
// Read the contents of the JSON file
$jsonData = file_get_contents('data.json');

// Convert the JSON data into a PHP array
$cars = json_decode($jsonData, true);

// Check if a search query is provided
if (isset($_GET['color'])) {
  $searchColor = $_GET['color'];
  // Filter the cars based on the color
  $filteredCars = array_filter($cars['cars'], function($car) use ($searchColor) {
    return strtolower($car['color']) === strtolower($searchColor);
  });

  // Return the filtered car details as JSON response
  header('Content-Type: application/json');
  echo json_encode($filteredCars);

}
else {
  // Return all car details if no search color is provided
 /* header('Content-Type: application/json');
  echo json_encode($cars['cars']);*/
    echo " not found ";
}
?>
