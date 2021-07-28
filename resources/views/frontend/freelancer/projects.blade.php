@extends('layouts.frontend.app')
@section('content')
<div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center">
         <h5>Assigned Projects</h5>

        </div>
    <div class="row">
    <div class="col-lg-4 col-md-12">
    <div class="card">
    <div class="card-header">
    <h3 class="card-title">New Admin Design</h3>
    <div class="card-options">
    <label class="custom-switch m-0">
    <input type="checkbox" value="1" class="custom-switch-input statusCheck" checked="">
    <span class="custom-switch-indicator"></span>
    </label>
    <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
    </div>
    </div>
    <div class="card-body">
    <span class="tag tag-blue mb-3">Web Design</span>
    <p>Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!</p>
    <div class="row">
    <div class="col-5 py-1"><strong>Created:</strong></div>
    <div class="col-7 py-1">09 Jun 2019 11:32AM</div>
    <div class="col-5 py-1"><strong>Creator:</strong></div>
    <div class="col-7 py-1">Nathan Guerrero</div>

    <div class="col-5 py-1"><strong>Client Name:</strong></div>
    <div class="col-7 py-1"><strong>Colorado</strong></div>

    <div class="col-5 py-1"><strong>Client:</strong></div>
    <div class="col-7 py-1">
    <div class="avatar-list avatar-list-stacked">
    <img class="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" title="" data-original-title="Avatar Name">

    </div>
    </div>
    </div>
    </div>
    <div class="card-footer">
    <div class="clearfix">
    <div class="float-left"><strong>15%</strong></div>
    <div class="float-right"><small class="text-muted">Progress</small></div>
    </div>
    <div class="progress progress-xs">
    <div class="progress-bar bg-red" role="progressbar" style="width: 15%" aria-valuenow="36" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-4 col-md-12">
    <div class="card">
    <div class="card-header">
    <h3 class="card-title">Job Portal Web App</h3>
    <div class="card-options">
    <label class="custom-switch m-0">
    <input type="checkbox" value="1" class="custom-switch-input statusCheck" checked="">
    <span class="custom-switch-indicator"></span>
    </label>
    <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
    </div>
    </div>
    <div class="card-body">
    <span class="tag tag-pink mb-3">Angular</span>
    <p>Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!</p>
    <div class="row">
    <div class="col-5 py-1"><strong>Created:</strong></div>
    <div class="col-7 py-1">09 Jun 2019 11:32AM</div>
    <div class="col-5 py-1"><strong>Client:</strong></div>
    <div class="col-7 py-1">Nathan Guerrero</div>
    <div class="col-5 py-1"><strong>Status:</strong></div>
    <div class="col-7 py-1 showStatus"></div>


    <div class="col-5 py-1"><strong>Team:</strong></div>
    <div class="col-7 py-1">
    <div class="avatar-list avatar-list-stacked">
    <img class="avatar avatar-sm" src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" title="" data-original-title="Avatar Name">

    </div>
    </div>
    </div>
    </div>
    <div class="card-footer">
    <div class="clearfix">
    <div class="float-left"><strong>75%</strong></div>
    <div class="float-right"><small class="text-muted">Progress</small></div>
    </div>
    <div class="progress progress-xs">
    <div class="progress-bar bg-green" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-4 col-md-12">
    <div class="card">
    <div class="card-header">
    <h3 class="card-title">App design and Development</h3>
    <div class="card-options">
    <label class="custom-switch m-0">
    <input type="checkbox" value="1" class="custom-switch-input statusCheck" checked="">
    <span class="custom-switch-indicator"></span>
    </label>
    <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
    </div>
    </div>
    <div class="card-body">
    <span class="tag tag-green mb-3">Android</span>
    <p>Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!</p>
    <div class="row">
    <div class="col-5 py-1"><strong>Created:</strong></div>
    <div class="col-7 py-1">09 Jun 2019 11:32AM</div>
    <div class="col-5 py-1"><strong>Client:</strong></div>
    <div class="col-7 py-1">Nathan Guerrero</div>


    <div class="col-5 py-1"><strong>Team:</strong></div>
    <div class="col-7 py-1">
    <div class="avatar-list avatar-list-stacked">
    <img class="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" title="" data-original-title="Avatar Name">

    </div>
    </div>
    </div>
    </div>
    <div class="card-footer">
    <div class="clearfix">
    <div class="float-left"><strong>47%</strong></div>
    <div class="float-right"><small class="text-muted">Progress</small></div>
    </div>
    <div class="progress progress-xs">
    <div class="progress-bar bg-blue" role="progressbar" style="width: 47%" aria-valuenow="47" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-4 col-md-12">
    <div class="card">
    <div class="card-header">
    <h3 class="card-title">Job Portal Web App</h3>
    <div class="card-options">
    <label class="custom-switch m-0">
    <input type="checkbox" value="1" class="custom-switch-input statusCheck" checked="">
    <span class="custom-switch-indicator"></span>
    </label>
    <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
    </div>
    </div>
    <div class="card-body">
    <span class="tag tag-pink mb-3">Angular</span>
    <p>Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!</p>
    <div class="row">
    <div class="col-5 py-1"><strong>Created:</strong></div>
    <div class="col-7 py-1">09 Jun 2019 11:32AM</div>
    <div class="col-5 py-1"><strong>C:</strong></div>
    <div class="col-7 py-1">Nathan Guerrero</div>

    <div class="col-5 py-1"><strong>Team:</strong></div>
    <div class="col-7 py-1">
    <div class="avatar-list avatar-list-stacked">
    <img class="avatar avatar-sm" src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" title="" data-original-title="Avatar Name">

    </div>
    </div>
    </div>
    </div>
    <div class="card-footer">
    <div class="clearfix">
    <div class="float-left"><strong>75%</strong></div>
    <div class="float-right"><small class="text-muted">Progress</small></div>
    </div>
    <div class="progress progress-xs">
    <div class="progress-bar bg-green" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-4 col-md-12">
    <div class="card">
    <div class="card-header">
    <h3 class="card-title">One Page landing</h3>
    <div class="card-options">
    <label class="custom-switch m-0">
    <input type="checkbox" value="1" class="custom-switch-input statusCheck" checked="">
    <span class="custom-switch-indicator"></span>
    </label>
    <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
    </div>
    </div>
    <div class="card-body">
    <span class="tag tag-blue mb-3">Wordpress</span>
    <p>Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!</p>
    <div class="row">
    <div class="col-5 py-1"><strong>Created:</strong></div>
    <div class="col-7 py-1">09 Jun 2019 11:32AM</div>
    <div class="col-5 py-1"><strong>Creator:</strong></div>
    <div class="col-7 py-1">Nathan Guerrero</div>

    <div class="col-5 py-1"><strong>Team:</strong></div>
    <div class="col-7 py-1">
    <div class="avatar-list avatar-list-stacked">
    <img class="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" title="" data-original-title="Avatar Name">

    </div>
    </div>
    </div>
    </div>
    <div class="card-footer">
    <div class="clearfix">
    <div class="float-left"><strong>17%</strong></div>
    <div class="float-right"><small class="text-muted">Progress</small></div>
    </div>
    <div class="progress progress-xs">
    <div class="progress-bar bg-red" role="progressbar" style="width: 17%" aria-valuenow="36" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-4 col-md-12">
    <div class="card">
    <div class="card-header">
    <h3 class="card-title">Job Portal Web App</h3>
    <div class="card-options">
    <label class="custom-switch m-0">
    <input type="checkbox" value="1" class="custom-switch-input statusCheck" checked="">
    <span class="custom-switch-indicator"></span>
    </label>
    <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
    </div>
    </div>
    <div class="card-body">
    <span class="tag tag-gray mb-3">iOS App</span>
    <p>Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!</p>
    <div class="row">
    <div class="col-5 py-1"><strong>Created:</strong></div>
    <div class="col-7 py-1">09 Jun 2019 11:32AM</div>
    <div class="col-5 py-1"><strong>Client:</strong></div>
    <div class="col-7 py-1">Nathan Guerrero</div>

    <div class="col-5 py-1"><strong>Team:</strong></div>
    <div class="col-7 py-1">
    <div class="avatar-list avatar-list-stacked">
    <img class="avatar avatar-sm" src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" title="" data-original-title="Avatar Name">

    </div>
    </div>
    </div>
    </div>
    <div class="card-footer">
    <div class="clearfix">
    <div class="float-left"><strong>81%</strong></div>
    <div class="float-right"><small class="text-muted">Progress</small></div>
    </div>
     <div class="progress progress-xs">
    <div class="progress-bar bg-green" role="progressbar" style="width: 81%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
@endsection
@section('scripts')
<script>
    $(document).ready(function(){
        var status = "";
        $('.statusCheck').on('change',function(){


            if(status == "" || status == 'Deactive') {
                status = 'Active'
                $('.showStatus').html(status)

            }else if(status == 'Active'){
                status = 'Deactive'
                $('.showStatus').html(status)
            }

          

        })

    })
</script>

@endsection
