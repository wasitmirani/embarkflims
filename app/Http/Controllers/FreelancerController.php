<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Equipment;
use App\Models\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Common;

class FreelancerController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {



        $status = UserDetail::with('equipments')->where('user_id',Auth::user()->id)->first();

        return view('frontend.dashboard');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeFreelancer(Request $request){
        $detail = new UserDetail();
        $equipment = json_encode($request->equipment);
        $detail->user_id = Auth::user()->id;
        $detail->editing_software = $request->editing_software;
        $detail->no_cameras = $request->no_cameras;
        $detail->k_footage = $request->footage;
        $detail->grading_experience = $request->experience;
        $detail->lut = $request->lut;
        $detail->completion_time = $request->completion_time;
        $detail->no_cameras = $request->no_cameras;
        $detail->camera_quality = $request->camera_quality;
        $detail->drone_license = $request->dron_license;
        $detail->equipment = $equipment;
        $detail->completion_time = $request->completion_time;
        $detail->lense = $request->lense;

        $profile_updated = $detail->save();
        if($profile_updated){

            $detail->equipments()->attach($request->equipment,['created_at'=>now(), 'updated_at'=>now()]);

            User::where('id',Auth::user()->id)->update([
                'is_complete' => 'yes'

            ]);
            $equipments = Equipment::all();
            $position = UserDetail::with('equipments')->where('user_id',Auth::user()->id)->first();
            $pos = '';
            if($position->completion_time == '30 days'){

                $pos = 'Advance Editor: $350';

            }
            if($position->completion_time == '60 days'){

                $pos = 'Basic Editor: $350';

            }
            if($position->no_cameras == '1'){

                $pos = 'Asistant Videographer';

            }
            if($position->no_cameras == '2'){

                $pos = 'Videographer';

            }
            if($position->no_cameras == '3'){

                $pos = 'Cinametographer';

            }




            return view('frontend.profile',compact('pos','position','equipments'));
        }


    }
    // public function store(Request $request)
    // {


    //     $detail = new UserDetail();
    //     $equipment = json_encode($request->equipment);
    //     $detail->user_id = Auth::user()->id;
    //     $detail->editing_software = $request->editing_software;
    //     $detail->no_cameras = $request->no_cameras;
    //     $detail->k_footage = $request->footage;
    //     $detail->grading_experience = $request->experience;
    //     $detail->lut = $request->lut;
    //     $detail->completion_time = $request->completion_time;
    //     $detail->no_cameras = $request->no_cameras;
    //     $detail->camera_quality = $request->camera_quality;
    //     $detail->drone_license = $request->dron_license;
    //     $detail->equipment = $equipment;
    //     $detail->completion_time = $request->completion_time;
    //     $detail->lense = $request->lense;

    //     $profile_updated = $detail->save();
    //     if($profile_updated){

    //         $detail->equipments()->attach($request->equipment,['created_at'=>now(), 'updated_at'=>now()]);

    //         User::where('id',Auth::user()->id)->update([
    //             'is_complete' => 'yes'

    //         ]);
    //         $equipments = Equipment::all();
    //         $position = UserDetail::with('equipments')->where('user_id',Auth::user()->id)->first();
    //         $pos = '';
    //         if($position->completion_time == '30 days'){

    //             $pos = 'Advance Editor: $350';

    //         }
    //         if($position->completion_time == '60 days'){

    //             $pos = 'Basic Editor: $350';

    //         }
    //         if($position->no_cameras == '1'){

    //             $pos = 'Asistant Videographer';

    //         }
    //         if($position->no_cameras == '2'){

    //             $pos = 'Videographer';

    //         }
    //         if($position->no_cameras == '3'){

    //             $pos = 'Cinametographer';

    //         }




    //         return view('frontend.profile',compact('pos','position','equipments'));
    //     }



    // }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $detail = UserDetail::where('id',$id)->first();
        $equipment = json_encode($request->equipment);
        $detail->user_id = Auth::user()->id;
        $detail->editing_software = $request->editing_software;
        $detail->no_cameras = $request->no_cameras;
        $detail->k_footage = $request->footage;
        $detail->grading_experience = $request->experience;
        $detail->lut = $request->lut;
        $detail->completion_time = $request->completion_time;
        $detail->no_cameras = $request->no_cameras;
        $detail->camera_quality = $request->camera_quality;
        $detail->drone_license = $request->dron_license;
        $detail->equipment = $equipment;
        $detail->completion_time = $request->completion_time;
        $detail->lense = $request->lense;

        $profile_updated = $detail->save();
        if($profile_updated){
            $detail->equipments()->attach($request->equipment,['created_at'=>now(), 'updated_at'=>now()]);

            User::where('id',Auth::user()->id)->update([
                'is_complete' => 'yes'

            ]);
            $equipments = Equipment::all();
            $position = UserDetail::with('equipments')->where('user_id',Auth::user()->id)->first();
            $pos = '';
            if($position->completion_time == '30 days'){

                $pos = 'Advance Editor: $350';

            }
            if($position->completion_time == '60 days'){

                $pos = 'Basic Editor: $350';

            }
            if($position->no_cameras == '1'){

                $pos = 'Asistant Videographer';

            }
            if($position->no_cameras == '2'){

                $pos = 'Videographer';

            }
            if($position->no_cameras == '3'){

                $pos = 'Cinametographer';

            }


            return view('frontend.profile',compact('pos','position','equipments'));
        }


    }
    public function updateFreelancer(Request $request, $id)
    {

        $detail = UserDetail::where('id',$id)->first();
        $equipment = json_encode($request->equipment);
        $detail->user_id = Auth::user()->id;
        $detail->editing_software = $request->editing_software;
        $detail->no_cameras = $request->no_cameras;
        $detail->k_footage = $request->footage;
        $detail->grading_experience = $request->experience;
        $detail->lut = $request->lut;
        $detail->completion_time = $request->completion_time;
        $detail->no_cameras = $request->no_cameras;
        $detail->camera_quality = $request->camera_quality;
        $detail->drone_license = $request->dron_license;
        $detail->equipment = $equipment;
        $detail->completion_time = $request->completion_time;
        $detail->lense = $request->lense;

        $profile_updated = $detail->save();
        if($profile_updated){
            $detail->equipments()->attach($request->equipment,['created_at'=>now(), 'updated_at'=>now()]);

            User::where('id',Auth::user()->id)->update([
                'is_complete' => 'yes'

            ]);
            $equipments = Equipment::all();
            $position = UserDetail::with('equipments')->where('user_id',Auth::user()->id)->first();
            $pos = '';
            if($position->completion_time == '30 days'){

                $pos = 'Advance Editor: $350';

            }
            if($position->completion_time == '60 days'){

                $pos = 'Basic Editor: $350';

            }
            if($position->no_cameras == '1'){

                $pos = 'Asistant Videographer';

            }
            if($position->no_cameras == '2'){

                $pos = 'Videographer';

            }
            if($position->no_cameras == '3'){

                $pos = 'Cinametographer';

            }


            return view('frontend.profile',compact('pos','position','equipments'));
        }


    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {


    }

    public function assignedProject(){

        return view('frontend.freelancer.projects');

    }

    public function recomendedProject(){
        return view('frontend.freelancer.recomended');

    }
}
