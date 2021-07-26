@extends('layouts.frontend.app')
@section('content')
<div class="section-body mt-3">
    @if(Auth::user()->post == 'editor')

       @include('frontend.freelancer.editor.components.profile')

    @endif
    @if(Auth::user()->post == 'videographer')
      @include('frontend.freelancer.videographer.components.profile')

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

