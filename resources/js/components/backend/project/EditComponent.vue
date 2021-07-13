
<template>

  <div>
          <div>
   <div class="section-body">
      <div class="container-fluid">
         <div class="d-flex justify-content-between align-items-center">
            <ul class="nav nav-tabs page-header-tab">
               <li class="nav-item"><a class="nav-link active" id="Resumes-tab" data-toggle="tab" href="#Resumes-list">Project Update</a></li>
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

                        <div class="card-options">
                                <form class="card"  v-on:submit.prevent="onSubmit"  :state="getRates">
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
               <input type="number" class="form-control" min="4" max="12" v-model="hours" placeholder="Hour's" >
            </div>
         </div>
          <div class="col-sm-6 col-md-4">
            <div class="form-group">
               <label class="form-label">Videographers</label>
                   <input type="number" class="form-control" v-model="video_exp" placeholder="No of Videographers" >
            </div>
         </div>
         <div class="col-sm-6 col-md-4">
            <div class="form-group">
               <label class="form-label">Cinematographer</label>
                  <input type="number" class="form-control" v-model="no_videograp" placeholder="No of Cinematographer" >
            </div>
         </div>
              <div class="col-sm-6 col-md-4">
            <div class="form-group">
               <div class="form-group">
                   <label for="">Select flim length</label>
                   <select class="custom-select" v-model="flim_length">
                       <option value="(3 Minutes) - $300">3 Minutes</option>
                       <option value="(5 Minutes) - $400">5 Minutes</option>
                       <option value="(8 Minutes) - $500">8 Minutes</option>
                   </select>
               </div>

            </div>
         </div>
        <div class="col-sm-6 col-md-6">
            <div class="form-group">
               <div class="form-group">
                   <label for="">Select Drone</label>
                   <select class="custom-select" v-model="drone">

                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
               </div>

            </div>
         </div>
         <div class="col-sm-6 col-md-6">
            <div class="form-group">
               <div class="form-group">
                   <label for="">Add documentary edit </label>
                   <select class="custom-select" v-model="documentary_edit">

                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
               </div>

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
   <div class="float-right mt-2">
       <div class="float-right " v-if="total>0"><i class="fa fa-shopping-cart"></i> <h4>${{total}}</h4> </div>
   </div>

   <div class="card-footer text-right">
      <button type="submit" class="btn btn-primary">Submit</button>
   </div>
</form>
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
 computed:{
        setBride(){

           this.title="EW-"+this.name+" "+ this.b_name;
        },
        getRates(){
            if(this.video_exp.length>0){

                this.total=(this.video_exp*this.video_exp_rate)*this.hours;
            }
            if(this.no_videograp.length>0){
                this.total=(this.no_videograp*this.cinematographer_rate)*this.hours;
            }
        switch (this.drone) {
                case "yes":
                      this.total=this.total+this.drone_rate;
                    break;

                default:
                    break;
            }
            switch (this.documentary_edit) {
                case "yes":
                      this.total=this.total+this.documentary_edit_rate;
                    break;
                default:
                    break;
            }
            switch (this.flim_length) {
                case "(3 Minutes) - $300":
                    this.total=this.total+300;
                    break;
                case "(5 Minutes) - $400":
                    this.total=this.total+400;
                    break;
                case "(8 Minutes) - $500":
                   this.total= this.total+500;
                    break;
                default:
                    break;
            }


        }
    },
    data(){
        return {
            rates:[],
            equipments:[],
            project:{},
            id:0,
            newproject:{},
            title:"",
            b_name:"",
            date:null,
            time:null,
            cameras:null,
            location:null,
            no_videograp:0,
            city:null,
            state:null,
            zip_code:null,
            hours:1,
            attendees:0,
            description:null,
            video_exp:0,
            drone:"",
            video_exp_rate:50,
            cinematographer_rate:80,
            drone_rate:150,
            documentary_edit_rate:150,
            total:0,


            flim_length:"",
            documentary_edit:"",
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
              axios.get('/project/'+this.$route.params.id).then((res)=>{
                 $('#exampleModalLong').modal('show')
                this.project=res.data;
                this.title=this.project.title;
                this.id=this.project.id;
                this.name=this.project.groom_name;
                this.b_name=this.project.bride_name;
                this.date=this.project.date;
                this.time=this.project.time;
                this.hours=this.project.hours;
                this.video_exp=this.project.video_exp;
                this.no_videograp=this.project.no_videograp;
                this.flim_length=this.project.flim_length;
                this.drone=this.project.drone;
                this.documentary_edit=this.project.documentary_edit;
                this.location=this.project.location;
                this.city=this.project.city;
                this.state=this.project.state;
                this.zip_code=this.project.zip_code;
                this.description=this.project.description;

                // this.b_name=this.
            });
        },
        onSubmit(){
            Vue.$toast.default("Please wait data is processing",{duration:600});
           let formdata = new FormData();
            formdata.append("title",this.title);
            formdata.append("id",this.id);
            formdata.append("name",this.name);
            formdata.append("b_name",this.b_name);
            formdata.append("date",this.date);
            formdata.append("time",this.time);

            formdata.append("location",this.location);
            formdata.append("city",this.city);
            formdata.append("state",this.state);
            formdata.append("zip_code",this.zip_code);
            formdata.append("hours",this.hours);
            formdata.append("video_exp",this.video_exp);
            formdata.append("total",this.total);
            formdata.append("no_videograp",this.no_videograp);
            formdata.append("drone",this.drone);
            formdata.append("flim_length",this.flim_length);
            formdata.append("documentary_edit",this.documentary_edit);


            formdata.append("attendees",this.attendees);

            formdata.append("description",this.description);
            formdata.append("user_id",user.id);
            axios.post("/update/project",formdata).then((res)=>{
                $('#exampleModalLong').modal('hide');
                let item=res.data;
                setTimeout(() => {
                       Vue.$toast.success("New project has been created successfuly",{duration:1500});
                       this.getProjects();
                       this.$router.push(`/project/invoice/${this.id}`)
                }, 1600);


                });
        },
        newProject(){
            $('#exampleModalLong').modal('show')
        }
    },
}
</script>

<style>

</style>
