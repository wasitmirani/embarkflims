<form class="card" action="{{ route('freelancer.userdetail.update',$position->id) }}" method="post">
    @csrf
    {!! method_field('PUT') !!}

    <div class="card-body">
    <h3 class="card-title">Acount Setting</h3>
    <div class="row">
        <div class="col-md-5">
            <div class="form-group">
            <label class="form-label">Position</label>
            <input type="text" class="form-control" disabled value="{{ $pos }}">
            </div>
            </div>
    <div class="col-md-5">
    <div class="form-group">
    <label class="form-label"> How many cameras do you film with?</label>
    <select class="form-control" name="no_cameras">

        <option  @if($position->no_cameras == '1')  selected  @endif  value="1">1</option>
        <option  @if($position->no_cameras == '2') selected @endif value="2">2</option>
        <option  @if($position->no_cameras == '3') selected @endif value="3">3</option>
    </select>
    </div>
    </div>

    <div class="col-sm-6 col-md-4">
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

         @foreach($equipments as $equipment)
           @foreach($position->equipments as $position->equipment)

        <option @if($position->equipment->equipment == $equipment->equipment) selected @endif  value="{{ $equipment->id }}" >{{ $equipment->equipment }}</option>
        @endforeach
        @endforeach


    </select>
    </div>
    </div>
    <div class="col-md-12">
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
