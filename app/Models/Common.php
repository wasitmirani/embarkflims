<?php

namespace App\Models;
class Common
{
    public function getData($model){

        $data = $model::all();

        return $data;


    }

    public function getIndividual($model, $id){

        $data = $model::find($id);


    }


}

