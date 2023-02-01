<?php
//Richiamo la stringa da todolist.json
$listString = file_get_contents('todolist.json');

//Converto la stringa '$listString' in un array leggibile da php
$arrayList = json_decode($listString, true);
