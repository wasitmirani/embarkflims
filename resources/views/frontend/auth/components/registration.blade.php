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
