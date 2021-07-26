@extends('layouts.frontend.app')
@section('style')
<style>

</style>
@endsection
@section('content')

{{-- <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <a href="#tab1" class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"  role="tab" aria-controls="nav-home" aria-selected="true" style="margin-right: 20px;">Basic Info</a>
      <a href="#tab2" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"  role="tab" aria-controls="nav-profile" aria-selected="false" style="margin-right: 20px;">Experties</a>
      <a href="#tab3" class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"  role="tab" aria-controls="nav-contact" aria-selected="false" style="margin-right: 20px;">Profile</a>
      <a href="#tab4" class="nav-link" id="nav-group-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"  role="tab" aria-controls="nav-contact" aria-selected="false" style="margin-right: 20px;">Details</a>
    </div>
  </nav> --}}
@if(Auth::user()->post == 'videographer')
    @if(Auth::user()->is_complete == 'No')
       @include('frontend.freelancer.videographer.components.form')
    @endif
    @if(Auth::user()->is_complete == 'yes')
       @include('frontend.freelancer.videographer.components.dashboard')
    @endif
@endif
@if(Auth::user()->post == 'editor')
    @if(Auth::user()->is_complete == 'No')
       @include('frontend.freelancer.editor.components.form')
    @endif
    @if(Auth::user()->is_complete == 'yes')
       @include('frontend.freelancer.editor.components.dashboard')
    @endif
@endif

</div>
@endsection
@section('scripts')
<script>



        $(document).ready(function(){
            $(".js-example-responsive").select2({
                  width: 'resolve' // need to override the changed default
             });

        })



</script>

@endsection
