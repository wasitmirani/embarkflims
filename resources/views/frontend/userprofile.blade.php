@extends('layouts.frontend.app')
@section('content')
<div class="section-body mt-3">
    @if (Session::has('message'))

     <p class='alert alert-danger'>{{ Session::get('message') }}</p>

    @endif
<form class="card" action="{{ route('update.profile') }}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="card-body">
    <h3 class="card-title">Edit Profile</h3>
    <div class="row">

    <div class="col-sm-6 col-md-6">
    <div class="form-group">
    <label class="form-label">Username</label>
    <input type="text" class="form-control" placeholder="Username" value="{{ Auth::user()->name }}" name="name">
    @error('name')
    <span class="invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
    </span>
   @enderror
    </div>
    </div>
    <div class="col-sm-6 col-md-6">
    <div class="form-group">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control" value="{{ Auth::user()->email }}" name="email">
    @error('email')
    <span class="invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
    </span>
@enderror
    </div>
    </div>
    <div class="col-sm-6 col-md-6">
        <div class="form-group">
        <label class="form-label">Location</label>
        <input type="text" class="form-control" value="{{ Auth::user()->location }}" name="location">
        @error('location')
        <span class="invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
        </div>
        </div>
    <div class="col-sm-6 col-md-6">
        <div class="form-group">
        <label class="form-label">Profile Image</label>
        <input type="file" class="form-control" value="" name="image">
        @error('image')
        <span class="invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
        </div>
        </div>
  </div>
    </div>
    <div class="card-footer text-right">
    <button type="submit" class="btn btn-primary">Update Profile</button>
    </div>
    </form>
</div>
@endsection
