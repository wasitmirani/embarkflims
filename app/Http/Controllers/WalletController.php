<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WalletController extends Controller
{
    public function checkout(){
        return view('frontend.checkout');
    }
}
