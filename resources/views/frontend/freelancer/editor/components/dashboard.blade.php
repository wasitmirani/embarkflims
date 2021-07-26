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
