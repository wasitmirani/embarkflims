<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    //
    public function getProjects(Request $request){
        $query = request('query');
        $projects = Project::orderBy('groom_name', 'ASC')
        ->where('groom_name', 'like', '%' . $query . '%')
        ->orWhere('bride_name', 'like', '%' . $query . '%')
        ->orWhere('equipments', 'like', '%' . $query . '%')
        ->orWhere('lenses', 'like', '%' . $query . '%')
        ->paginate(env('PER_PAGE'));

        return response()->json(['projects'=>$projects]);
    }
    public function getProject(Request $request){
        $project = Project::FindorFail($request->id);
        return response()->json( $project);
    }
    public function storeProject(Request $request){


       $project= Project::create([
            'groom_name'=>$request->name,
            'bride_name'=>$request->b_name,
            'date'=>$request->date,
            'time'=>$request->time,
            'cameras'=>$request->cameras,
            'location'=>$request->location,
            'city'=>$request->city,
            'state'=>$request->state,
            'zip_code'=>$request->zip_code,
            'hours'=>$request->hours,
            'attendees'=>$request->attendees,
            'equipments'=>$request->equipments,
            'lenses'=>$request->lenses,
            'description'=>$request->description,
            'user_id'=>$request->user_id,
            'title'=>$request->title,
        ]);

        return response()->json($project);
    }
}
