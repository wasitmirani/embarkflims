<?php

namespace App\Models;

use App\Models\Equipment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserDetail extends Model
{
    use HasFactory;

    public function equipments(){
        return $this->belongsToMany(Equipment::class,'equipment_user_detail');
    }

}
