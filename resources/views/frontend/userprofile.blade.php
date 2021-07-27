@extends('layouts.frontend.app')
@section('content')
<div class="section-body mt-3">
    <div class="card">
        <div class="card-header">
       <h3 class="card-title">My Profile</h3>

       </div>
       <div class="card-body">
        @if (Session::has('message'))


        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{{ Session::get('message') }}</strong>

          </div>

       @endif
        <form  action="{{ route('update.profile') }}" method="post" enctype="multipart/form-data">
            @csrf
       <div class="row">
       <div class="col-auto">
           @if(Auth::user()->image == null)
       <img class="avatar avatar-xl" src="{{ asset('freelancer/img/profile.jpg') }}" alt="avatar">
       @endif
       @if(Auth::user()->image != null)
       <img class="avatar avatar-xl" src="{{ asset('freelancer/img/'.Auth::user()->image) }}" alt="avatar">
       @endif
       </div>
       <div class="col">
       <div class="form-group">
       <label class="form-label">Username</label>
       <input class="form-control" placeholder="Username" value="{{ Auth::user()->name }}" name="name">
       </div>
       @error('name')
       <span class="invalid-feedback" role="alert">
           <strong>{{ $message }}</strong>
       </span>
      @enderror
       </div>
       </div>

       <div class="form-group">
       <label class="form-label">Email-Address</label>
       <input class="form-control" value="{{ Auth::user()->email }}" name="email">
       @error('email')
       <span class="invalid-feedback" role="alert">
           <strong>{{ $message }}</strong>
       </span>
      @enderror
       </div>
       <div class="form-group">
       <label class="form-label">Location</label>
       <input type="text" class="form-control" value="{{ Auth::user()->location }}" name="location">
       </div>
       <div class="form-group">
        <label class="form-label">Upload Image</label>
        <input type="file" class="form-control" value="" name="image">
        </div>
       <div class="form-footer">
       <button type="submit" class="btn btn-primary btn-block">Save</button>
       </div>
       </form>
       </div>
       </div>


</div>
@endsection
