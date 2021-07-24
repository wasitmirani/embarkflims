<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\UserDetail;

class Equipment extends Model
{
    use HasFactory;

    public function user_details(){
        return $this->belongsToMany(UserDetail::class,'equipment_user_detail','id');
    }
}
