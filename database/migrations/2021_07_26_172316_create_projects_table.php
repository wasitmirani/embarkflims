<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('groom_name');
            $table->string('bride_name');
            $table->string('date');
            $table->string('time');
            $table->string('drone');
            $table->string('location');
            $table->string('city');
            $table->string('state');
            $table->string('zip_code');
            $table->string('hours');
            $table->string('attendees');
            $table->string('video_exp');
            $table->string('file_length');
            $table->string('documentary_edit');
            $table->string('no_videograp');
            $table->string('description');
            $table->string('user_id');
            $table->string('total');
            $table->string('title');
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
        Schema::dropIfExists('projects');
    }
}
