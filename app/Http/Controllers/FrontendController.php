<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function index(){
        return view('frontend.index');
    }

    public function showLogin(){
        return view('frontend.auth.login');
    }


    public function showRegister(){
        return view('frontend.auth.register');
    }

}
