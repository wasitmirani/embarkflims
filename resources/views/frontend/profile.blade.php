@extends('layouts.frontend.app')
@section('content')
<div class="section-body mt-3">

    @if(Auth::user()->post == 'editor')
    <form class="card" action="{{ route('freelancer.update',$position->id) }}" method="post" >
        @csrf
        {!! method_field('PUT') !!}
        <div class="card-body">
        <h3 class="card-title">Acount Setting</h3>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                <label class="form-label">Position</label>
                <input type="text" class="form-control" disabled value="{{ $pos }}">
                </div>
                </div>
        <div class="col-md-6">
        <div class="form-group">
        <label class="form-label">Which editing software do you use?</label>
        <select class="form-control" name="editing_software">
            <option>What editing software do you use?</option>
            <option @if($position->editing_software == "Final Cut Pro X") {{ 'selected' }} @endif value="Final Cut Pro X">Final Cut Pro X</option>
            <option @if($position->editing_software == "Adobe Premier") {{ 'selected' }} @endif value="Adobe Premier">Adobe Premier</option>
        </select>
        </div>
        </div>

        <div class="col-sm-6 col-md-6">
        <div class="form-group">
        <label class="form-label">Can you edit 4k footage?</label>
        <select class="form-control" name="footage">
            <option> Can you edit 4k footage?</option>
            <option @if($position->k_footage == 'Yes') selected @endif  value="Yes">Yes</option>
            <option value="No" @if($position->k_footage == 'No') selected @endif>No</option>
        </select>
        </div>
        </div>
        <div class="col-sm-6 col-md-6">
        <div class="form-group">
        <label class="form-label">Color grading experience?</label>
        <select class="form-control" name="experience">
            <option>Color grading experience?</option>
            <option value="Basic" @if($position->grading_experience == 'Basic') selected @endif> Basic</option>
            <option value="Advanced" @if($position->grading_experience == 'Advanced') selected @endif>Advanced</option>
        </select>
        </div>
        </div>
        <div class="col-sm-6 col-md-6">
        <div class="form-group">
        <label class="form-label">Do you use LUT and presets?</label>
        <select class="form-control" name="lut">
            <option >Do you use LUT and presets?</option>
            <option @if($position->lut == "Yes") selected @endif value="Yes">Yes</option>
            <option @if($position->lut == "No") selected @endif value="No">No</option>
        </select>
        </div>
        </div>
        <div class="col-md-6">
        <div class="form-group">
        <label class="form-label">How long does it take for you to complete a wedding film/project?</label>
        <select class="form-control" name="completion_time">
            <option>How long does it take for you to complete a wedding film/project?</option>
            <option value="30 days" @if($position->completion_time == '30 days') selected @endif> 30 days</option>
            <option value="60 days" @if($position->completion_time == '60 days') selected @endif>60 days</option>
        </select>
        </div>
        </div>



        </div>
        </div>
        <div class="card-footer text-right">
        <button type="submit" class="btn btn-primary">Update Profile</button>
        </div>
        </form>
        @endif
        @if(Auth::user()->post == 'videographer')

        <form class="card" action="{{ route('freelancer.update',$position->id) }}" method="post">
            @csrf
            {!! method_field('PUT') !!}

            <div class="card-body">
            <h3 class="card-title">Acount Setting</h3>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                    <label class="form-label">Position</label>
                    <input type="text" class="form-control" disabled value="{{ $pos }}">
                    </div>
                    </div>
            <div class="col-md-6">
            <div class="form-group">
            <label class="form-label"> How many cameras do you film with?</label>
            <select class="form-control" name="no_cameras">

                <option  @if($position->no_cameras == '1')  selected  @endif  value="1">1</option>
                <option  @if($position->no_cameras == '2') selected @endif value="2">2</option>
                <option  @if($position->no_cameras == '3') selected @endif value="3">3</option>
            </select>
            </div>
            </div>

            <div class="col-sm-6 col-md-6">
            <div class="form-group">
            <label class="form-label">What quality can your camera film in?</label>
            <select class="form-control" name="camera_quality">

                <option @if($position->camera_quality == '1080p HD 60fps') selected @endif  value="1080p HD 60fps">1080p HD 60fps</option>
                <option @if($position->camera_quality == '4k 24fps (or more)') selected @endif   value="4k 24fps (or more)">4k 24fps (or more)</option>

            </select>
            </div>
            </div>
            <div class="col-sm-6 col-md-6">
            <div class="form-group">
            <label class="form-label">Do you have a Drone operating license?</label>
            <select class="form-control" name="dron_license">

                <option @if($position->drone_license == 'Yes') selected @endif  value="Yes">Yes</option>
                <option @if($position->drone_license == 'No') selected @endif  value="No">No</option>


            </select>
            </div>
            </div>
            <div class="col-sm-6 col-md-6">
            <div class="form-group">
            <label class="form-label">Please select any equipment that you own and use</label>


            <select class="form-control js-example-responsive"  multiple="multiple" name="equipment[]">


                   @foreach($position->equipments as $equips )
                    @php $equips = $equips->toArray() @endphp
                    @endforeach
                   @foreach($equipments as $equipment)
                   <option {{ in_array($equipment->equipment, $equips) ? 'selected' : ''}} value="{{ $equipment->id }}">{{ $equipment->equipment }}</option>
                @endforeach



            </select>
            </div>
            </div>
            <div class="col-md-6">
            <div class="form-group">
            <label class="form-label">Please select any lense that you own and use</label>
            <select class="form-control" name="lense">

                <option @if($position->lense == '16-35mm f1.8 (or lower)') selected @endif value="16-35mm f1.8 (or lower)">16-35mm f1.8 (or lower)</option>
                <option @if($position->lense == '50mm f1.8 (or lower)') selected @endif value="50mm f1.8 (or lower)">50mm f1.8 (or lower)</option>
                <option @if($position->lense == '85mm f1.8 (or lower)') selected @endif value="85mm f1.8 (or lower)">85mm f1.8 (or lower)</option>
                <option @if($position->lense == '85mm f1.8 (or lower)') selected @endif value="85mm f1.8 (or lower)">85mm f1.8 (or lower)</option>
                <option @if($position->lense == '70-200mm f4 (or lower)') selected @endif value="70-200mm f4 (or lower)">70-200mm (f4) or lower)</option>
                <option @if($position->lense == '18-105mm f4 (or lower)') selected @endif value="18-105mm f4 (or lower)">18-105mm f4 (or lower)</option>

            </select>
            </div>
            </div>



            </div>
            </div>
            <div class="card-footer text-right">
            <button type="submit" class="btn btn-primary">Update Profile</button>
            </div>
            </form>
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

