<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Equipment;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function edit_profile(){
        $user = Auth::user();

        $equipments = Equipment::all();

        return view('frontend.userprofile',compact('user'));

    }
    
    public function update_profile(Request $request){




        $user = User::where('id',Auth::user()->id)->first();
        $name = "";
        if ($request->hasfile('image')) {
            $name = !empty($request->name) ? $request->name : config('app.name');

            $name = Str::slug($name, '-')  . "-" . time() . '.' . $request->image->extension();
            $request->image->move(public_path("/freelancer/img/"), $name);
            $user->image = $name;
        }


        $user->name = $request->name;
        $user->email = $request->email;

        $user->location = $request->location;
        $update = $user->save();
        if($update){
            return back()->with('message','Profile Updated');

        }

    }
}
