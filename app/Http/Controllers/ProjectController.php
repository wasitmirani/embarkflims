<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class ProjectController extends Controller
{
    //
    public function getProjects(Request $request){
        $query = request('query');
        $projects = Project::orderBy('groom_name', 'ASC')
        ->where('groom_name', 'like', '%' . $query . '%')
        ->orWhere('bride_name', 'like', '%' . $query . '%')
        ->paginate(env('PER_PAGE'));

        return response()->json(['projects'=>$projects]);
    }

    public function getDailyProjects(Request $request){

        $projects = Project::latest();

        if($request->status=="null"){
            $projects=  $projects->where('created_at', '>=', Carbon::today());

        }

        if($request->status=="4"){
            $projects=  $projects->orderBy('id','desc');

        }
        else {
            $projects=  $projects->where('status',$request->status);
        }


        $projects=$projects->paginate(env('PER_PAGE'));
        $my_projects=Project::where('user_id',$request->user_id)->get();
        $collection =collect($my_projects);
        $total=count($my_projects);
        $completed= $collection->where('status',2)->count();
        $pending=$collection->where('status',0)->count();
        $procces=$collection->where('status',1)->count();
        $cancel=$collection->where('status',3)->count();

        return response()->json(['projects'=>$projects,'total'=>$total,'completed'=>$completed,'pending'=>$pending,'cancel'=>$cancel]);
    }
    public function getProject(Request $request){
        $project = Project::FindorFail($request->id);
        return response()->json( $project);
    }
    public function updateProject(Request $request){
        $project= Project::where('id',$request->id)->update([
            'groom_name'=>$request->name,
            'bride_name'=>$request->b_name,
            'date'=>$request->date,
            'time'=>$request->time,
            'drone'=>$request->drone,
            'location'=>$request->location,
            'city'=>$request->city,
            'state'=>$request->state,
            'zip_code'=>$request->zip_code,
            'hours'=>$request->hours,
            'attendees'=>$request->attendees,
            'video_exp'=>$request->video_exp,
            'flim_length'=>$request->flim_length,
            'documentary_edit'=>$request->documentary_edit,
            'no_videograp'=>$request->no_videograp,
            'description'=>$request->description,
            'user_id'=>$request->user_id,
            'total'=>$request->total,
            'title'=>$request->title,
        ]);
        return response()->json($project);
    }
    public function storeProject(Request $request){


       $project= Project::create([
            'groom_name'=>$request->name,
            'bride_name'=>$request->b_name,
            'date'=>$request->date,
            'time'=>$request->time,
            'drone'=>$request->drone,
            'location'=>$request->location,
            'city'=>$request->city,
            'state'=>$request->state,
            'zip_code'=>$request->zip_code,
            'hours'=>$request->hours,
            'attendees'=>$request->attendees,
            'video_exp'=>$request->video_exp,
            'flim_length'=>$request->flim_length,
            'documentary_edit'=>$request->documentary_edit,
            'no_videograp'=>$request->no_videograp,
            'description'=>$request->description,
            'user_id'=>$request->user_id,
            'total'=>$request->total,
            'title'=>$request->title,
        ]);

        return response()->json($project);
    }
}
