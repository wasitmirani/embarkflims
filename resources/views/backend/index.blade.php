@extends('layouts.backend.master')


@section('content')
  <!-- component matched by the route will render here -->
  <router-view></router-view>
   <!-- set progressbar -->
   <vue-progress-bar></vue-progress-bar>
@endsection
