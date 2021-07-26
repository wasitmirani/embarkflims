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
<div class="grid lg:grid-cols-3 mt-12 gap-8  " >


    <div class="section-body mt-3">
        <div class="header-action ">
            <h6 class="page-title ml-4">Complete Your Profile</h6>
        </div>
        <div class="container-fluid">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('freelancer.store') }}" method="post">
                        @csrf
                   <div class="row clearfix">
                      <div class="col-lg-12 col-md-12 col-sm-12">
                          <div class="form-group">

                           <select class="form-control" name="no_cameras">
                               <option selected> How many cameras do you film with?</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                           </select>
                          </div>
                       </div>


                       <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="form-group">
                            <select class="form-control" name="camera_quality">
                                <option selected> What quality can your camera film in?</option>
                                <option value="1080p HD 60fps">1080p HD 60fps</option>
                                <option value="4k 24fps (or more)">4k 24fps (or more)</option>

                            </select>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12">

                        <div class="form-group">
                            <select class="form-control" name="dron_license">
                                <option selected> Do you have a Drone operating license?</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>


                            </select>
                        </div>
                    </div>

                    <div class="col-md-12 col-sm-12 col-sm-12">
                        <div class="form-group">
                            <select class="form-control js-example-responsive"  multiple="multiple" name="equipment[]">
                                <option selected> Please select any equipment that you own and use</option>
                                @foreach($equipments as $equipment)
                                <option value="{{ $equipment->id }}">{{ $equipment->equipment }}</option>
                                @endforeach


                            </select>
                        </div>
                    </div>

                     <div class="col-md-12 col-sm-12 col-sm-12">
                        <div class="form-group">
                            <select class="form-control" name="lense">
                                <option selected>  Please select any lense that you own and use</option>
                                <option value="16-35mm f1.8 (or lower)">16-35mm f1.8 (or lower)</option>
                                <option value="50mm f1.8 (or lower)">50mm f1.8 (or lower)</option>
                                <option value="85mm f1.8 (or lower)">85mm f1.8 (or lower)</option>
                                <option value="85mm f1.8 (or lower)">85mm f1.8 (or lower)</option>
                                <option value="70-200mm (f4) or lower)">70-200mm (f4) or lower)</option>
                                <option value="18-105mm f4 (or lower)">18-105mm f4 (or lower)</option>

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



</div>
 @endif
 @if(Auth::user()->is_complete == 'yes')

 <div class="section-body mt-3">
    <div class="container-fluid">
    <div class="row clearfix">


        <div class="card">
            <div class="card-header">
            <h3 class="card-title">@if(isset($pos)){{ $pos }}@endif</h3>
            <div class="card-options">
            <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>


            <div class="item-action dropdown ml-2">

            <div class="dropdown-menu dropdown-menu-right">

            <div class="dropdown-divider"></div>


            </div>
            </div>
            </div>
             </div>
            <div class="card-body">
            <div class="row">
           



        </div>
        </div>
        </div>
        <div class="col-12 col-sm-12">
            <div class="card">
             <div class="card-header">
            <h3 class="card-title">Project Summary</h3>
            </div>
            <div class="card-body">
            <div class="table-responsive">
            <table class="table table-hover table-striped text-nowrap table-vcenter mb-0">
            <thead>
            <tr>
            <th>#</th>
            <th>Client Name</th>
            <th>Project</th>
            <th>Project Cost</th>
            <th>Payment</th>
            <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>#AD1245</td>
            <td>Sean Black</td>
            <td>Angular Admin</td>
            <td>$14,500</td>
            <td>Done</td>
            <td><span class="tag tag-success">Delivered</span></td>
            </tr>

            </tbody>
            </table>
            </div>
            </div>
            </div>
            </div>
            </div>

 @endif
@endif
@if(Auth::user()->post == 'editor')
@if(Auth::user()->is_complete == 'No')
<div class="grid lg:grid-cols-3 mt-12 gap-8">

    <div class="section-body mt-3">
        <div class="header-action ">
            <h6 class="page-title ml-4">Complete Your Profile</h6>
        </div>
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <form action="{{ route('freelancer.store') }}" method="post">
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
@endif
@if(Auth::user()->is_complete == 'yes')
<div class="section-body mt-3">
    <div class="container-fluid">
       <div class="row clearfix">
        <div class="card">
            <div class="card-header">
            <h3 class="card-title">Position Based On Answers: <strong>@if(isset($pos)){{ $pos }}@endif</strong></h3>
            <div class="card-options">
            <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>


            </div>
             </div>
            <div class="card-body">
            <div class="row">
            <div class="col-lg-4 col-md-4">
            <div class="card">
            <div class="card-body currency_state">
            <div class="icon"><i class="fa fa-video-camera" aria-hidden="true"></i></div>
            <div class="content">
            <div class="text">Editing Software</div>
            <h5 class="number">{{ $position->editing_software }}</h5>
            </div>
            </div>
            </div>
            </div>
            <div class="col-lg-4 col-md-4">
            <div class="card">
            <div class="card-body currency_state">
            <div class="icon"><i class="fa fa-clone" aria-hidden="true"></i></div>
            <div class="content">
            <div class="text">Grading Experience</div>
            <h5 class="number">{{ $position->grading_experience }}</h5>
            </div>
            </div>
            </div>
            </div>
            <div class="col-lg-4 col-md-4">
            <div class="card">
            <div class="card-body currency_state">
            <div class="icon"><i class="fa fa-calendar" aria-hidden="true"></i></div>
            <div class="content">
            <div class="text">Completion Time</div>
            <h5 class="number">{{ $position->completion_time }}</h5>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div id="User_Statistics" style="height: 290px"></div>
            </div>
            </div>
       </div>
    </div>
    </div
    <div class="col-12 col-sm-12">
        <div class="card">
         <div class="card-header">
        <h3 class="card-title">Project Summary</h3>
        </div>
        <div class="card-body">
        <div class="table-responsive">
        <table class="table table-hover table-striped text-nowrap table-vcenter mb-0">
        <thead>
        <tr>
        <th>#</th>
        <th>Client Name</th>

        <th>Project</th>
        <th>Project Cost</th>
        <th>Payment</th>
        <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>#AD1245</td>
        <td>Sean Black</td>

        <td>Angular Admin</td>
        <td>$14,500</td>
        <td>Done</td>
        <td><span class="tag tag-success">Delivered</span></td>
        </tr>



        </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
</div>


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
