<?php

//Richiamo la stringa da todolist.json
$listString = file_get_contents('todolist.json');

//Converto la stringa '$listString' in un array leggibile da php
$arrayList = json_decode($listString, true);

if (isset($_POST['item'])) {
    $postItem = $_POST['item'];
    $array = [
        "language" => $postItem,
        "done" => true,
    ];
    $arrayList[] = $array;
    file_put_contents('todolist.json', json_encode($arrayList));
}

header('Content-Type: application/json');
echo json_encode($arrayList);
