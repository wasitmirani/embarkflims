<template>
    <div>
   <div class="section-body">
      <div class="container-fluid">
         <div class="d-flex justify-content-between align-items-center">
            <ul class="nav nav-tabs page-header-tab">
               <li class="nav-item"><a class="nav-link active" id="Resumes-tab" data-toggle="tab" href="#Resumes-list">Project List</a></li>
               <!-- <li class="nav-item"><a class="nav-link" id="Resumes-tab" data-toggle="tab" href="#Resumes-grid">Grid View</a></li> -->
            </ul>
            <div class="header-action d-md-flex">
               <div class="input-group mr-2">
                   <button type="button" class="btn btn-primary" @click="newProject">Add Project</button>

               </div>

            </div>
         </div>
         <div class="row clearfix">
            <div class="col-12">
               <div class="card">
                  <div class="card-body">
                     <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6">
                           <label>Search</label>
                           <div class="input-group">
                              <input type="text" class="form-control" placeholder="Search...">
                           </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                           <label>Hourly Rate</label>
                             <multiselect v-model="rates" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="name" :options="rates_list" :multiple="true" :taggable="true" ></multiselect>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                           <label>Academic Degree</label>
                           <div class="form-group">
                              <select class="custom-select">
                                 <option selected="">All degrees</option>
                                 <option value="1">Associate degree</option>
                                 <option value="2">Bachelor's degree</option>
                                 <option value="3">Master's degree</option>
                                 <option value="4">Doctoral degree</option>
                              </select>
                           </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                           <label>Order</label>
                           <div class="form-group">
                              <select class="custom-select">
                                 <option selected="">Relevance</option>
                                 <option value="1">Highest rate first</option>
                                 <option value="2">Lowest rate first</option>
                                 <option value="3">Highest degree first</option>
                                 <option value="4">Lowest degree first</option>
                              </select>
                           </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                           <label>&nbsp;</label>
                           <a href="javascript:void(0);" class="btn btn-sm btn-primary btn-block" title="">Filter</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="section-body">
      <div class="container-fluid">
         <div class="tab-content">
            <div class="tab-pane fade show active" id="Resumes-list" role="tabpanel">
               <div class="table-responsive">
                  <table class="table table-vcenter table_custom spacing5 border-style mb-0">
                     <thead>
                        <tr>
                           <th class="w40">#</th>
                           <th>Groom Name</th>
                           <th>Bride Name</th>
                           <th>Equipments</th>
                           <th>Lenses</th>
                           <th>Cameras</th>
                           <th>Hours</th>
                          <th>Date</th>
                           <th>Time</th>
                           <th>Attendees</th>
                           <th>Location</th>
                           <th>City</th>
                           <th>State</th>
                           <th>Country</th>
                           <th class="w40"></th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="item in projects.data" :key="item.id">
                           <td>
                              <span class="avatar avatar-pink" data-toggle="tooltip" data-placement="top" title="" :data-original-title="item.groom_name">{{item.groom_name.substr(0, 2).toUpperCase() }}</span>
                           </td>
                          <td>{{item.groom_name}}</td>
                           <td>{{item.bride_name}}</td>
                           <td>{{item.equipments}}</td>
                           <td>{{item.lenses}}</td>
                           <td>{{item.cameras}}</td>
                           <td>{{item.hours}}</td>
                          <td>{{item.date}}</td>
                           <td>{{item.time}}</td>
                           <td>{{item.attendees}}</td>
                           <td>{{item.location}}</td>
                           <td>{{item.city}}</td>
                           <td>{{item.state}}</td>
                           <td>{{item.zip_code}}</td>
                           <td>

                           </td>
                        </tr>


                     </tbody>
                  </table>
               </div>
            </div>

         </div>
      </div>
   </div>
<!-- Modal -->
<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Event Description</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <div class="col-lg-12">
<form class="card"  v-on:submit.prevent="onSubmit">
   <div class="card-body">
      <!-- <h3 class="card-title">Edit Profile</h3> -->
      <div class="row">

         <div class="col-md-4">
            <div class="form-group">
               <label class="form-label">Groom Name</label>
               <input type="text" v-model="name" class="form-control"   placeholder="Groom Name"  required>
            </div>
         </div>
          <div class="col-md-4">
            <div class="form-group">
               <label class="form-label">Bride Name</label>
               <input type="text" v-model="b_name" class="form-control" :state="setBride"  placeholder="Bride Name"  >
            </div>
         </div>
       <div class="col-md-4">
            <div class="form-group">
               <label class="form-label">Attendees</label>
               <input type="number" v-model="attendees" class="form-control"   placeholder="Attendees"  >
            </div>
         </div>
            <div class="col-md-12">
            <div class="form-group">
               <label class="form-label">Project Title</label>
               <input type="text" v-model="title" class="form-control"   placeholder="Title"  readonly>
            </div>
         </div>
         <div class="col-sm-6 col-md-4">
            <div class="form-group">
               <label class="form-label">Date</label>
                <input type="date" class="form-control" v-model="date"  placeholder="date" >
               <!-- <b-form-datepicker  v-model="date" required class="mb-2"></b-form-datepicker> -->
            </div>
         </div>
         <div class="col-sm-6 col-md-4">
            <div class="form-group">
               <label class="form-label">Time</label>
              <input type="time" class="form-control" v-model="time" placeholder="Time" >
            </div>
         </div>
         <div class="col-sm-6 col-md-4">
            <div class="form-group">
               <label class="form-label">Hour's</label>
               <input type="number" class="form-control" v-model="hours" placeholder="Hour's" >
            </div>
         </div>
          <div class="col-sm-6 col-md-4">
            <div class="form-group">
               <label class="form-label">Cameras</label>
                <select name="beast" id="select-beast" class="form-control custom-select" v-model="cameras">
                    <option value="1">One Camera</option>
                    <option value="2">Two Cameras</option>
                    <option value="3">Three Cameras</option>
                    </select>
            </div>
         </div>
         <div class="col-sm-6 col-md-4">
            <div class="form-group">
               <label class="form-label">Equipments</label>
                  <multiselect v-model="equipments" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="name" :options="equipments_list" :multiple="true" :taggable="true" ></multiselect>

            </div>
         </div>
        <div class="col-sm-6 col-md-4">
            <div class="form-group">
               <label class="form-label">Lenses</label>
                  <multiselect v-model="lenses" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="name" :options="lenses_list" :multiple="true" :taggable="true" ></multiselect>

            </div>
         </div>
         <div class="col-md-12">
            <div class="form-group">
               <label class="form-label">Location</label>
               <input type="text" class="form-control" v-model="location" placeholder="Location" value="" required>
            </div>
         </div>
         <div class="col-sm-6 col-md-3">
            <div class="form-group">
               <label class="form-label">City</label>
               <input type="text" class="form-control" v-model="city" placeholder="City" value="" required>
            </div>
         </div>
        <div class="col-sm-6 col-md-3">
            <div class="form-group">
               <label class="form-label">State</label>
               <input type="text" class="form-control" v-model="state" placeholder="State" value="" required>
            </div>
         </div>
         <div class="col-sm-6 col-md-3">
            <div class="form-group">
               <label class="form-label">ZIP Code</label>
               <input type="number" class="form-control" v-model="zip_code" placeholder="ZIP Code" required>
            </div>
         </div>
         <div class="col-md-3">
            <div class="form-group">
               <label class="form-label">Country</label>
               <select class="form-control custom-select">
                  <option value="USA" selected>USA</option>
               </select>
            </div>
         </div>
         <div class="col-md-12">
            <div class="form-group mb-0">
               <label class="form-label">Description</label>
               <textarea rows="5" class="form-control" v-model="description" placeholder="Here can be your description" value="Mike"> </textarea>
            </div>
         </div>
      </div>
   </div>
   <div class="card-footer text-right">
      <button type="submit" class="btn btn-primary">Submit</button>
   </div>
</form>
                </div>
      </div>
      <div class="modal-footer">

      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
export default {
    computed:{
        setBride(){

           this.title="EW-"+this.name+" "+ this.b_name;
        }
    },
    data(){
        return {
            rates:[],
            equipments:[],
            projects:{},
            newproject:{},
            equipments_list:[
                  {name:"Drone",value:1},
                  {name:"Gimbal",value:2},
                  {name:"Monopod",value:3},
                  {name:"Tripod",value:4},
                  {name:"Wireless Lavalier Mic",value:5},
                  {name:"External Audio Recorder",value:6},
            ],
            lenses:[],
            lenses_list:[
                  {name:"16-35mm f1.8 (or lower)",value:1},
                  {name:"50mm f1.8 (or lower)",value:2},
                  {name:"85mm f1.8 (or lower)",value:3},
                  {name:"70-200mm (f4) or lower)",value:4},
                  {name:"18-105mm f4 (or lower)",value:5},
            ],
            name:"",
            title:"",
            b_name:"",
            date:null,
            time:null,
            cameras:null,
            location:null,
            city:null,
            state:null,
            zip_code:null,
            hours:null,
            attendees:0,
            description:null,
            rates_list:[
               {name:"$0 - $50",value:1},
               {name:"$50 - $100",value:2},
               {name:"$100 - $200",value:3},
               {name:"$200 - $500",value:4},
               {name:"$500 +",value:5},
            ],
        };
    },
    mounted(){
        this.getProjects();
    },
    methods: {
        getProjects(){
            axios.get('/projects').then((res)=>{
                this.projects=res.data.projects;
            });
        },
        onSubmit(){
            Vue.$toast.default("Please wait data is processing",{duration:600});
           let formdata = new FormData();
             formdata.append("title",this.title);
            formdata.append("name",this.name);
            formdata.append("b_name",this.b_name);
            formdata.append("date",this.date);
            formdata.append("time",this.time);
            formdata.append("cameras",this.cameras);
            formdata.append("location",this.location);
            formdata.append("city",this.city);
            formdata.append("state",this.state);
            formdata.append("zip_code",this.zip_code);
            formdata.append("hours",this.hours);
            const equipments_=this.equipments.map((item)=>{
                return item.name;
            });
             const lenses_=this.lenses.map((item)=>{
                return item.name;
            });
            formdata.append("attendees",this.attendees);
            formdata.append("equipments",equipments_);
            formdata.append("lenses",lenses_);
            formdata.append("description",this.description);
            formdata.append("user_id",user.id);
            axios.post("/create/project",formdata).then((res)=>{
                $('#exampleModalLong').modal('hide');
                let item=res.data;
                setTimeout(() => {
                       Vue.$toast.success("New project has been created successfuly",{duration:1500});
                       this.getProjects();
                       this.$router.push(`/project/invoice/${item.id}`)
                }, 1600);


                });
        },
        newProject(){
            $('#exampleModalLong').modal('show')
        }
    },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

</style>
