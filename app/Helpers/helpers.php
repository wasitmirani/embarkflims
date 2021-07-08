<?php

use App\Helpers\HelperComponent;




function sideBarMenu(){
    return HelperComponent::sideBar();
}
function setSingleLink($title,$icon,$can=null,$v_can=null,$url=null,$v_route=null){
    return [
        "title"=>$title,
        "icon"=>$icon,
        "can"=>$can,
        "v-can"=>$v_can,
        "url"=>$url,
        "v-route"=>$v_route,
    ];
}
function singleImgUpload($request, $path)
{
    if ($request->hasfile('thumbnail')) {
        $name = Str::slug($request->name, '-')  . "-" . time() . '.' . $request->thumbnail->extension();
        $request->thumbnail->move(public_path($path), $name);
    } else
        $name = "";
    return $name;
}
function setSubMenu($url=null,$title,$icon=null,$v_can=null,$can=null,$v_route=null){
    return [
        "url"=>$url,
        "title"=>$title,
        "icon"=>$icon,
        "can"=>$can,
        "v-can"=>$v_can,
        "v-route"=>$v_route,
    ];
 }
