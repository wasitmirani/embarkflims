@extends('layouts.frontend.authmaster')
@section('content')
<div class="container">
    <div class="card">
        <div class="row g-0">
            <div class="col">
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        <div class="ltf-block-logo d-block d-lg-none text-center text-lg-start">
                            <img width="120" src="../../assets/images/logo.svg" alt="logo">
                        </div>
                        <div class="my-5 text-center text-lg-start">
                            <h1 class="display-8">Create Account</h1>
                            <p class="text-muted">You can create a free account now</p>
                        </div>
                        <form class="mb-5" method="POST" action="{{ route('register') }}">
                            @csrf
                            <div class="mb-3">
                                <input type="text" class="form-control @error('name') is-invalid @enderror" placeholder="Enter fullname" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus
                                       required>
                                       @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control  @error('email') is-invalid @enderror" placeholder="Enter email"
                                       required name="email" value="{{ old('email') }}" required autocomplete="email">
                                       @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control  @error('password') is-invalid @enderror" placeholder="Enter password"
                                       required @error('password') is-invalid @enderror" name="password">
                                       @error('password')
                                       <span class="invalid-feedback" role="alert">
                                           <strong>{{ $message }}</strong>
                                       </span>
                                   @enderror
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control "  name="password_confirmation" placeholder="Re-enter password"
                                       required>
                            </div>
                            <div class="mb-3">
                              <select class="form-control" name="role" id="role">
                                  <option value="">Register As</option>
                                  <option value="freelancer">{{ __('freelancer') }}</option>
                                  <option value="customer">{{ __('customer') }}</option>
                              </select>
                            </div>
                            <div class="mb-3">
                                <select class="form-control" name="post" id="post">
                                    <option value="">Freelancer As </option>
                                    <option value="videographer">{{ __('Videographer') }}</option>
                                    <option value="editor">{{ __('Editor') }}</option>

                                </select>
                              </div>

                            <div class="text-center text-lg-start">
                                <button type="submit" class="btn btn-primary">Sign Up</button>
                            </div>

                        </form>


                    </div>
                </div>
            </div>
            <div class="col d-none d-lg-flex border-start align-items-center justify-content-between flex-column text-center">
                <div class="col-md-10 offset-md-1">
                    <div class="ltf-block-logo d-block d-lg-none text-center text-lg-start">
                        <img width="120" src="{{ asset('assets/images/logo.svg') }}" alt="logo">
                    </div>
                    <div class="my-5 text-center text-lg-start">
                        <h1 class="display-8">SignIn</h1>

                    </div>
                    <form class="mb-5" method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="mb-3">
                            <input type="email"  class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="Enter email"
                                   required>
                                   @error('email')
                                   <span class="invalid-feedback" role="alert">
                                       <strong>{{ $message }}</strong>
                                   </span>
                               @enderror
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                            @error('password')
                 <span class="invalid-feedback" role="alert">
                     <strong>{{ $message }}</strong>
                 </span>
             @enderror
                        </div>

                        <div class="text-center text-lg-start">
                            <button type="submit" class="btn btn-primary">Sign In</button>
                        </div>
                    </form>

                {{-- <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">Terms & Conditions</a>
                    </li>
                </ul> --}}
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
$(document).ready(function(){

    $("#post").css({display: "none"})


})
$('#role').change(function(){
    var selected = $('#role').find(":selected").text();
    if(selected == 'freelancer'){
        $("#post").css({display: "inline"})



    }if(selected == 'customer'){
        $("#post").css({display: "none"})

    }

})

</script>
@endsection
