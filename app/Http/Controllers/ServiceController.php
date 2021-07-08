<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    //

    public function getServices(){
        $services=Service::latest()->orderBy('name','ASC')->get();

        return response()->json(['services'=>$services]);
    }

    public function storeService(Request $request){
       
        $thumbnail=singleImgUpload($request,"/images/service");
        Service::updateOrCreate([
            'name'=>$request->name,
            'slug'=>Str::slug($request->name),
            'description'=>$request->description,
            'thumbnail'=>$thumbnail,
        ]);
        return response()->json(['services'=>'success']);
    }
}
