@extends('layouts.frontend.app')
@section('style')
<style>

</style>
@endsection

@section('content')
<ul class="list uk-tab nav nav-pills" id="tabs-nav">
    <li class="nav-item"><a class="nav-link" aria-current="page" href="#tab1">Basic Info</a></li>
    <li class="nav-item"><a class="nav-link"  href="#tab2">Experties</a></li>
    <li class="nav-item"><a class="nav-link" href="#tab3">Profile</a></li>
    <li class="nav-item"><a class="nav-link" href="#tab4">Detailsp</a></li>

</ul>
{{-- <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <a href="#tab1" class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"  role="tab" aria-controls="nav-home" aria-selected="true" style="margin-right: 20px;">Basic Info</a>
      <a href="#tab2" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"  role="tab" aria-controls="nav-profile" aria-selected="false" style="margin-right: 20px;">Experties</a>
      <a href="#tab3" class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"  role="tab" aria-controls="nav-contact" aria-selected="false" style="margin-right: 20px;">Profile</a>
      <a href="#tab4" class="nav-link" id="nav-group-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"  role="tab" aria-controls="nav-contact" aria-selected="false" style="margin-right: 20px;">Details</a>
    </div>
  </nav> --}}
<div class="grid lg:grid-cols-3 mt-12 gap-8 tab-content " id="tab1">

    <div class="header-action align-right">
        <button type="button" class="btn btn-primary"><i class="fe fe-plus mr-2"></i>Add</button>
    </div>
    <div class="section-body mt-3">
        <div class="container-fluid">
            <table class="table table-striped table-hover table-vcenter text-nowrap mb-0">
                <thead>
                <tr>
                <th class="w60">Name</th>
                <th></th>
                <th></th>
                <th>Created Date</th>
                <th>Role</th>
                <th class="w100">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td class="width45">
                <span class="avatar avatar-blue" data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name">NG</span>
                </td>
                <td>
                <h6 class="mb-0">Marshall Nichols</h6>
                <span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="54393526273c353838793a143339353d387a373b39">[email&#160;protected]</a></span>
                </td>
                <td><span class="tag tag-danger">Super Admin</span></td>
                <td>24 Jun, 2015</td>
                <td>CEO and Founder</td>
                <td></td>
                </tr>
            </tbody>
        </table>
        </div>
         </div>



</div>
<div class="grid lg:grid-cols-3 mt-12 gap-8 tab-content " id="tab2">
    <div class="section-body mt-3">
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
               <div class="row clearfix">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="Employee ID *">
                      </div>
                   </div>
                   <div class="col-lg-12 col-md-12 col-sm-12">
                       <div class="form-group">
                         <input type="text" class="form-control" placeholder="Employee ID *">
                       </div>
                   </div>
                   <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Employee ID *">
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Employee ID *">
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="form-group">
                         <input type="text" class="form-control" placeholder="Confirm Password">
                    </div>
                </div>

               </div>
            </div>
        </div>

    </div>
</div>




</div>
<div class="grid lg:grid-cols-3 mt-12 gap-8 tab-content " id="tab3">
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
               <div class="row clearfix">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="Employee ID *">
                      </div>
                   </div>
                   <div class="col-lg-12 col-md-12 col-sm-12">
                       <div class="form-group">
                         <input type="text" class="form-control" placeholder="Employee ID *">
                       </div>
                   </div>
                   <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Employee ID *">
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Employee ID *">
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="form-group">
                         <input type="text" class="form-control" placeholder="Confirm Password">
                    </div>
                </div>

               </div>
            </div>
        </div>

    </div>

</div>
<div class="grid lg:grid-cols-3 mt-12 gap-8 tab-content " id="tab4">
<div ></div>
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
               <div class="row clearfix">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="Employee ID *">
                      </div>
                   </div>
                   <div class="col-lg-12 col-md-12 col-sm-12">
                       <div class="form-group">
                         <input type="text" class="form-control" placeholder="Employee ID *">
                       </div>
                   </div>
                   <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Employee ID *">
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Employee ID *">
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="form-group">
                         <input type="text" class="form-control" placeholder="Confirm Password">
                    </div>
                </div>

               </div>
            </div>
        </div>

    </div>
</div>


@endsection
@section('scripts')
<script>


        $('.select2-selection').css({"width": "604px","height":"1px"});
        $('#tabs-nav li:first-child').addClass('active');
         console.log($('#tabs-nav li:first-child'))
        $('.tab-content').hide();
        $('.tab-content:first').show();

// Click function
        $('#tabs-nav li').click(function(){
            $('#tabs-nav li').removeClass('active');
            $(this).addClass('active');
            $('.tab-content').hide();

              var activeTab = $(this).find('a').attr('href');
           $(activeTab).fadeIn();
              return false;
        });


</script>

@endsection
