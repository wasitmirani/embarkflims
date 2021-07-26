<?php

namespace App\Http\Controllers;

use App\Models\Common;
use App\Models\Equipment;
use App\Models\UserDetail;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $equipments = Equipment::all();
        $pos = '';
        $position = '';

     

        if(Auth::user()->is_complete == 'yes'){

        $position = UserDetail::where('user_id',Auth::user()->id)->first();
        if(isset($position->completion_time)){
            if($position->completion_time == '30 days'){

                $pos = 'Advance Editor: $350';

            }
            if($position->completion_time == '60 days'){

                $pos = 'Basic Editor: $350';

            }

        }

        if(isset($position->no_cameras)){
            if($position->no_cameras == '1'){

                $pos = 'Asistant Videographer';

            }
            if($position->no_cameras == '2'){

                $pos = 'Videographer';

            }
            if($position->no_cameras == '3'){

                $pos = 'Cinametographer';

            }

        }


    }



        switch (Auth::user()->role) {
            case 'customer':
                return view('backend.index');
                break;

            case 'freelancer':
                return view('frontend.dashboard',compact('pos','position','equipments'));
                break;

            default:
            return view('backend.index');
                break;
        }

    }

    public function profile(){
        $equipments = Equipment::all();
        $position = UserDetail::with('equipments')->where('user_id',Auth::user()->id)->first();


        $pos = '';
        if(isset($position->completion_time)){
            if($position->completion_time == '30 days'){

                $pos = 'Advance Editor: $350';

            }
            if($position->completion_time == '60 days'){

                $pos = 'Basic Editor: $350';

            }

        }
        if(isset($position->no_cameras)){
            if($position->no_cameras == '1'){

                $pos = 'Asistant Videographer';

            }
            if($position->no_cameras == '2'){

                $pos = 'Videographer';

            }
            if($position->no_cameras == '3'){

                $pos = 'Cinametographer';

            }

        }




        return view('frontend.profile',compact('pos','position','equipments'));
    }
}
