<?php 

// echo "<pre>";
// print_r($_REQUEST);
// echo "</pre>";

echo "<h3>";
echo "Received from the server";
echo "</h3>";


foreach ($_REQUEST as &$value) {
    echo $value;
    echo "<br>";
}



?>