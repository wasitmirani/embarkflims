<template>
    <div>
          {{this.$Progress.start()}}
            <div class="section-body mt-3">
               <div class="container-fluid">
                 <div class="row clearfix row-deck">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <a role="button" @click="getProjects(4)">
                        <div class="card-body">
                            <div class="widgets2">
                                <div class="state">
                                <h6>Projects</h6>
                                <h2>{{  this.total}}</h2>
                                </div>
                                <div class="icon">
                                <i class="fa fa-hand-o-left"></i>
                                </div>
                            </div>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-info" role="progressbar" :aria-valuenow="getpercentage(total)" aria-valuemin="0" aria-valuemax="100" :style="'width:'+ getpercentage(total)+'%;'"></div>
                            </div>
                            <span class="text-small">Total Projects</span>
                        </div>
                        </a>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                           <a role="button" @click="getProjects(0)">
                        <div class="card-body">
                            <div class="widgets2">
                                <div class="state">
                                <h6>Proccess</h6>
                                <h2>{{procces}}</h2>
                                </div>
                                <div class="icon">
                                <i class="fa fa-hand-o-left"></i>
                                </div>
                            </div>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-success" role="progressbar" :aria-valuenow="getpercentage(procces)" aria-valuemin="0" aria-valuemax="100" :style="'width:'+ getpercentage(procces)+'%;'"></div>
                            </div>
                            <span class="text-small">Total Projects in Proccess</span>
                        </div>
                           </a>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                         <a role="button" @click="getProjects(2)">
                        <div class="card-body">
                            <div class="widgets2">
                                <div class="state">
                                <h6>Completed</h6>
                                <h2>{{completed}}</h2>
                                </div>
                                <div class="icon">
                                <i class="fa fa-hand-o-left"></i>
                                </div>
                            </div>
                            <div class="progress progress-sm">
                                 <div class="progress-bar bg" role="progressbar" :aria-valuenow="getpercentage(completed)" aria-valuemin="0" aria-valuemax="100" :style="'width:'+ getpercentage(completed)+'%;'"></div>
                            </div>
                            <span class="text-small">Total Projects in Completed</span>
                        </div>
                         </a>
                    </div>
                  </div>
                         <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                          <a role="button" @click="getProjects(3)">
                        <div class="card-body">
                            <div class="widgets2">
                                <div class="state">
                                <h6>Canecel</h6>
                                <h2>{{cancel}}</h2>
                                </div>
                                <div class="icon">
                                <i class="fa fa-hand-o-left"></i>
                                </div>
                            </div>
                            <div class="progress progress-sm">
                                <div class="progress-bar bg-success" role="progressbar" :aria-valuenow="getpercentage(cancel)" aria-valuemin="0" aria-valuemax="100" :style="'width:'+ getpercentage(cancel)+'%;'"></div>
                            </div>
                            <span class="text-small">Total Projects in Cancel</span>
                        </div>
                          </a>
                    </div>
                  </div>

                 </div>

               </div>
            </div>
            <div class="section-body">
               <div class="container-fluid">
                  <div class="row clearfix">
                     <div class="col-12 col-sm-12">
                        <div class="card">
                           <div class="card-header">
                              <h3 class="card-title">RECENT Project</h3>
                           </div>
                           <div class="card-body">
                                     <div class="table-responsive">
                  <table class="table table-vcenter table_custom spacing5 border-style mb-0">
                     <thead>
                        <tr>
                           <th class="w40">#</th>

                           <th>Groom Name</th>
                           <th>Bride Name</th>
                          <th>Total Pay</th>
                          <th>Status</th>
                           <th>Drone</th>
                           <th>Videographers</th>
                           <th>Cinematographer</th>
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
                            <td><a href="#"><h5><strong>${{item.total}}</strong></h5></a> </td>
                               <td >
                               <p :inner-html.prop="item.status | projectstatus"></p>
                           </td>
                           <td>{{item.drone}}</td>
                           <td>{{item.no_videograp}}</td>
                           <td>{{item.video_exp}}</td>
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
               </div>
            </div>
             {{this.$Progress.finish()}}
    </div>
</template>

<script>
export default {
name:"Home",
data(){
    return {
         projects:{},
         total:0,
         completed:0,
         procces:0,
         cancel:0,
         pending:0,
    };
},
methods:{

        getpercentage(value){

            if(value!="0"){
                   return (value/this.total)*100;
            }
            return 0;

        },
        getProjects(status){
            axios.get('/daily/projects?user_id='+user.id+"&status="+status).then((res)=>{
                this.projects=res.data.projects;
                this.total=res.data.total;
                this.completed=res.data.completed;
                this.cancel=res.data.cancel;
                this.procces=res.data.pending;

            });
        },
},
mounted(){
    this.getProjects(null);
    var chart = c3.generate({
            bindto: "#chart-combination",
            data: {
                columns: [
                    ["data1", 1, 2, 4, 9, 6, 3, 2, 5, 8, 7],
                    ["data2", 7, 5, 2, 1, 6, 4, 9, 8, 3, 2],
                    ["data3", 7, 5, 3, 1, 5, 9, 8, 5, 2, 6],
                    ["data4", 1, 2, 3, 5, 4, 8, 5, 2, 6, 1],
                ],
                type: "bar",
                types: { data2: "line", data3: "spline" },
                groups: [["data1", "data4"]],
                colors: { data1: "#fed284", data2: "#ff7f81", data3: "#44b39b", data4: "#004660" },
                names: { data1: "Development", data2: "Marketing", data3: "Design", data4: "Sales" },
            },
            axis: { x: { type: "category", categories: ["Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8", "Jun 9", "Jun 10"] } },
            bar: { width: 16 },
            legend: { show: false },
            padding: { bottom: 0, top: 0 },
        });
        console.log("charts",chart);
}
}
</script>

<style>

</style>
