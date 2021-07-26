<div class="grid lg:grid-cols-3 mt-12 gap-8">

    <div class="section-body mt-3">
        <div class="header-action ">
            <h6 class="page-title ml-4">Complete Your Profile</h6>
        </div>
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <form action="{{ route('freelancer.add') }}" method="post">
                    @csrf
               <div class="row clearfix">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">

                      <select class="form-control" name="editing_software">
                          <option>Which editing software do you use?</option>
                          <option value="Final Cut Pro X">Final Cut Pro X</option>
                          <option value="Adobe Premier">Adobe Premier</option>
                      </select>
                      </div>
                   </div>
                   <div class="col-lg-12 col-md-12 col-sm-12">
                       <div class="form-group">
                        <select class="form-control" name="footage">
                            <option> Can you edit 4k footage?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                       </div>
                   </div>
                   <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                        <select class="form-control" name="experience">
                            <option>Color grading experience?</option>
                            <option value="Basic"> Basic</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                        <select class="form-control" name="lut">
                            <option >Do you use LUT and presets?</option>
                            <option value="Yes"> Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                        <select class="form-control" name="completion_time">
                            <option>How long does it take for you to complete a wedding film/project?</option>
                            <option value="30 days"> 30 days</option>
                            <option value="60 days">60 days</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-12 col-sm-12 col-sm-12">
                    <div class="form-group">
                         <button type="submit" class="btn btn-primary"><i class="fe fe-plus mr-2"></i>Submit</button>
                    </div>
                </div>


               </div>
            </form>
            </div>
        </div>

    </div>
</div>
