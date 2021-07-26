@extends('layouts.frontend.authmaster')
@section('content')
<div class="container">
    <div class="card">
        <div class="row g-0">
            <div class="col">
                <div class="row">
                    @include('frontend.auth.components.registration')

                </div>
            </div>
            @include('frontend.auth.components.login')

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
