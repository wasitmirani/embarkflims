<form class="card" action="{{ route('freelancer.userdetail.update',$position->id) }}" method="post" >
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
    <label class="form-label">Which editing software do you use?</label>
    <select class="form-control" name="editing_software">
        <option>What editing software do you use?</option>
        <option @if($position->editing_software == "Final Cut Pro X") {{ 'selected' }} @endif value="Final Cut Pro X">Final Cut Pro X</option>
        <option @if($position->editing_software == "Adobe Premier") {{ 'selected' }} @endif value="Adobe Premier">Adobe Premier</option>
    </select>
    </div>
    </div>

    <div class="col-sm-6 col-md-4">
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
    <div class="col-md-12">
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
