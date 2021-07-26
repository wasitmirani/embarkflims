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
