<?php

namespace App\Models;

use App\Models\Equipment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserDetail extends Model
{
    use HasFactory;

    public function equipments(){
        return $this->belongsToMany(Equipment::class,'equipment_user_detail');
    }

    public static function getPosition(){
        $pos = "";
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
           return $pos;



    }

}
