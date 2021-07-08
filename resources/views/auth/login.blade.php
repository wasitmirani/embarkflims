@extends('layouts.backend.authmaster')

@section('content')

<div class="auth_left">
    <div class="card">
       <div class="text-center mb-2">
          <a class="header-brand" href="{{route('home')}}"><i class="fe fe-command brand-logo"></i></a>
       </div>
       <div class="card-body">
          <div class="card-title">Login to your account</div>
          <form method="POST" action="{{ route('login') }}">
            @csrf

          <div class="form-group">
            <input id="email" type="email" placeholder="E-Mail Address"  class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

            @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
          </div>
          <div class="form-group">
             <label class="form-label">Password<a href="forgot-password.html" class="float-right small">I forgot password</a></label>
             <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

             @error('password')
                 <span class="invalid-feedback" role="alert">
                     <strong>{{ $message }}</strong>
                 </span>
             @enderror
          </div>
          <div class="form-group">
             <label class="custom-control custom-checkbox">
             <input type="checkbox" class="custom-control-input" />
             <span class="custom-control-label">Remember me</span>
             </label>
          </div>
          <div class="form-footer">

                <button type="submit" class="btn btn-primary btn-block"> Sign in</button>

          </div>
          </form>
       </div>
       <div class="text-center text-muted">
          {{-- Don't have account yet? <a href="register.html">Sign up</a> --}}
       </div>
    </div>
 </div>
@endsection
