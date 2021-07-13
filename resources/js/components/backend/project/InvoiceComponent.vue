<template>
  <div>
          <div>
   <div class="section-body">
      <div class="container-fluid">
         <div class="d-flex justify-content-between align-items-center">
            <ul class="nav nav-tabs page-header-tab">
               <li class="nav-item"><a class="nav-link active" id="Resumes-tab" data-toggle="tab" href="#Resumes-list">Project Invoice</a></li>
               <!-- <li class="nav-item"><a class="nav-link" id="Resumes-tab" data-toggle="tab" href="#Resumes-grid">Grid View</a></li> -->
            </ul>
            <div class="header-action d-md-flex">
               <div class="input-group mr-2">


               </div>

            </div>
         </div>
         <div class="row clearfix">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Invoice</h3>
                        <div class="card-options">

                            <div class="item-action dropdown ml-2">

                                <div class="dropdown-menu dropdown-menu-right">
                                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-eye"></i> View Details </a>
                                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-share-alt"></i> Share </a>
                                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-cloud-download"></i> Download</a>
                                <div class="dropdown-divider"></div>
                                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-copy"></i> Copy to</a>
                                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-folder"></i> Move to</a>
                                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-edit"></i> Rename</a>
                                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fa fa-trash"></i> Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <address>
                                <strong>{{project.title}}.</strong> <h5 class="float-right">{{project.date}}</h5><br>
                                Location: <strong>{{project.location}}</strong><br>
                                {{project.city}}, {{project.state}} {{project.zip_code}}<br>
                                <abbr title="Phone">Phone:</abbr> (123) 456-34636
                                </address>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                <tr>

                                    <th>Groom Name</th>
                                    <th>Bride Name</th>
                                    <th>Videographers</th>
                                    <th>Cinematographer</th>
                                    <th>Drone</th>
                                    <th> Add documentary edit</th>
                                    <th>Flim Length</th>


                                    <th>Hours</th>
                                    <th>Date/Time</th>
                                    <th>Attendees</th>
                                    <th>Action</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{{project.groom_name}}</td>
                                    <td>{{project.bride_name}}</td>
                                    <td>{{project.video_exp}}</td>
                                    <td>{{project.no_videograp}}</td>
                                    <td>{{project.drone}}</td>
                                    <td>{{project.documentary_edit}}</td>
                                    <td>{{project.flim_length}}</td>

                                    <td>{{project.hours	}}</td>
                                    <td>{{project.date + " "+project.time}}</td>

                                    <td>{{project.attendees}}</td>
                                     <td><a role="button" @click="goupdate">edit</a></td>

                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td></td>
                                    <td colspan="9"></td>
                                    <td><strong>${{project.total}}</strong></td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-md-12 align-right">
                                <button class="btn btn-warning" @click="printdata"><i class="icon-printer"></i></button>
                                <button class="btn btn-primary">Pay Now</button>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>

         </div>

      </div>
   </div>
          </div>
  </div>

</template>

<script>
export default {
    data:()=>{
        return{
            project_id:"",
            project:{},
        }
    },
    mounted(){
    this.getProject();
    },
    methods: {
        goupdate(){
               this.$router.push(`/project/update/${this.$route.params.id}`)
        },
        printdata(){
             console.log(this.$route.params.id);
            window.print();

        },
        getProject(){
            axios.get('/project/'+this.$route.params.id).then((res)=>{
                this.project=res.data;
            });
        },
    },
}
</script>

<style>

</style>
