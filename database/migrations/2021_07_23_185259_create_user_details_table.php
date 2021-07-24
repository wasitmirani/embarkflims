<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->string('editing_software')->nullable();
            $table->string('k_footage')->nullable();
            $table->string('grading_experience')->nullable();
            $table->string('lut')->nullable();
            $table->string('completion_time')->nullable();
            $table->string('no_cameras')->nullable();
            $table->string('camera_quality')->nullable();
            $table->string('drone_license')->nullable();
            $table->string('equipment')->nullable();
            $table->string('lense')->nullable();
            $table->string('status')->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_details');
    }
}
