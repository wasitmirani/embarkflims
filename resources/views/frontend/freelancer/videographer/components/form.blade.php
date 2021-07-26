<div class="grid lg:grid-cols-3 mt-12 gap-8  " >


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
