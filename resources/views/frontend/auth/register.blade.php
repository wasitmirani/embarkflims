@extends('layouts.frontend.master')
@section('style')
<style>
    body{}
    .job-form{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
    text-align: center;
}
.job-form .nav-tabs{
    margin: 30px auto 30px;
    border: 0;
    text-align: center;
    justify-content: center;
}
.job-form .nav-tabs li.nav-item{
    margin: 0 20px 0 0;
}
.job-form .nav-tabs li.nav-item button{
    font-size: 15px;
    font-weight: 700;
}
.job-form h2{}
.job-form label{
    font-size: 18px;
    font-weight: 700;
}
.job-form .form-control{
    border-color: #0006;
    box-shadow: none;
    background-color: #fff;
    outline: none;
    border-radius: 0;
    height: 46px;
    width: 50%;
    margin: auto;
}
.job-form .btn.btn-business{
    font-size: 15px;
    font-weight: 700;
    background-color: #9c3d3d;
    padding: 10px 40px;
    border-radius: 15px 0px 15px 15px;
    color: #fff;
}
.job-form  .mycusttab li button.active, .job-form  .mycusttab li button:hover {
    background-color: #455444;
    color: #fff;
    border-color: #455444;
    cursor: pointer;
}
.job-form  .mycusttab li button {
    margin: auto;
    background-color: transparent;
    border: 2px solid;
    border-radius: 15px 0px 15px 15px;
    padding: 5px 40px;
    box-shadow: none !important;
    outline: none;
    transition: all .5s ease;
    border-color: #000;
    color: #000;
}
.job-form .form-group{
    margin: 0 0 15px;
}
</style>
@endsection
@section('content')
<section class="job-form">
    <div class="container">
      <div class="row">
        <h1>Create Your Free Embark Account</h1>
        <div class="col-lg-12">
          <!-- Nav tabs -->
          <!-- tab options -->
          <ul class="nav nav-tabs mycusttab" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="contact-tab1" data-bs-toggle="tab" data-bs-target="#create_job" type="button" role="tab" aria-controls="create_job" aria-selected="false">Register As Freelancer</button>
            </li>

            <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Register As Client</button>
            </li>
          </ul>
          <!-- tab options -->
          <!-- tab area -->
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="create_job" role="tabpanel" aria-labelledby="contact-tab1">
              <section class="update-pro">

                <form method="POST" action="{{ route('register') }}">
                    @csrf
                      <div class="row">
                        <div class=" col-12 ">

                          <label for="exampleInputEmail1">Name</label>
                          <input type="text"  class="form-control @error('name') is-invalid @enderror" placeholder="Enter fullname" name="name" value="{{ old('name') }}" required autocomplete="name" id="" aria-describedby="emailHelp" placeholder="" value="">
                          @error('name')
                          <span class="invalid-feedback" role="alert">
                              <strong>{{ $message }}</strong>
                          </span>
                        @enderror
                        </div>
                        <div class=" col-12 form-group">
                          <label for="exampleInputEmail1">Email</label>
                          <input type="email" class="form-control  @error('email') is-invalid @enderror" placeholder="Enter email"
                          required name="email" value="{{ old('email') }}" required autocomplete="email" id="" aria-describedby="emailHelp" placeholder="" value="">
                          @error('email')
                          <span class="invalid-feedback" role="alert">
                              <strong>{{ $message }}</strong>
                          </span>
                      @enderror
                        </div>

                        <div class="col-12 form-group">
                          <label for="exampleInputEmail1">Password</label>
                          <input type="password" class="form-control  @error('password') is-invalid @enderror" placeholder="Enter password"
                          required @error('password') is-invalid @enderror" name="password" id="" aria-describedby="emailHelp" placeholder="">
                          @error('password')
                          <span class="invalid-feedback" role="alert">
                              <strong>{{ $message }}</strong>
                          </span>
                      @enderror
                        </div>
                        <div class="col-12 form-group">
                          <label for="exampleInputEmail1">Confirm Password</label>
                          <input  type="password" class="form-control "  name="password_confirmation" placeholder="Re-enter password"
                          required>
                        </div>
                        <div class="col-12 form-group">
                            <div class="col-12 form-group">
                                <input type="hidden" name="role" value="freelancer"  id="role">

                              </div>
                        </div>
                        <div class="col-12 form-group mt-4">

                        <select class="form-control" name="post" id="post">
                            <option value="">Freelancer As </option>
                            <option value="videographer">{{ __('Videographer') }}</option>
                            <option value="editor">{{ __('Editor') }}</option>

                        </select>
                    </div>
                        <div class="col-12">
                          <button type="submit" class="btn btn-business bg-blue mt-4">Register</button>
                        </div>
                      </div>
                    </form>
              </section>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <h2 class="sec-heading">Register</h2>
              <form method="POST" action="{{ route('register') }}">
                @csrf
                  <div class="row">
                    <div class=" col-12 form-group">
                      <label for="exampleInputEmail1">Name</label>
                      <input type="text"  class="form-control @error('name') is-invalid @enderror" placeholder="Enter fullname" name="name" value="{{ old('name') }}" required autocomplete="name" id="" aria-describedby="emailHelp" placeholder="" value="">
                      @error('name')
                      <span class="invalid-feedback" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
                    </div>
                    <div class=" col-12 form-group">
                      <label for="exampleInputEmail1">Email</label>
                      <input type="email" class="form-control  @error('email') is-invalid @enderror" placeholder="Enter email"
                      required name="email" value="{{ old('email') }}" required autocomplete="email" id="" aria-describedby="emailHelp" placeholder="" value="">
                      @error('email')
                      <span class="invalid-feedback" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
                    </div>

                    <div class="col-12 form-group">
                      <label for="exampleInputEmail1">Password</label>
                      <input type="password" class="form-control  @error('password') is-invalid @enderror" placeholder="Enter password"
                      required @error('password') is-invalid @enderror" name="password" id="" aria-describedby="emailHelp" placeholder="">
                      @error('password')
                      <span class="invalid-feedback" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
                    </div>
                    <div class="col-12 form-group">
                      <label for="exampleInputEmail1">Confirm Password</label>
                      <input  type="password" class="form-control "  name="password_confirmation" placeholder="Re-enter password"
                      required>
                    </div>
                    <div class="col-12 form-group">
                      <input type="hidden" name="role" value="customer"  id="role">

                    </div>

                    <div class="col-12">
                      <button type="submit" class="btn btn-business bg-blue mt-4">Register</button>
                    </div>
                  </div>
                </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
@endsection
