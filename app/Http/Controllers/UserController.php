<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Equipment;
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


        $validate = $request->validate([

            'name' => 'required',
            'email' => 'required'

        ]);

        $user = User::where('id',Auth::user()->id)->first();

        $user->name = $request->name;
        $user->email = $request->email;
        $update = $user->save();
        if($update){
            return back()->with('message','Profile Updated');

        }

    }
}
