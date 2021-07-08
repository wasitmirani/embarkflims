<template>
    <div>
        <div class="section-body">
   <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center">
         <ul class="nav nav-tabs page-header-tab">
            <li class="nav-item"><a class="nav-link active" id="Departments-tab" data-toggle="tab" href="#Departments-list">List View</a></li>
            <li class="nav-item"><a class="nav-link" id="Departments-tab" data-toggle="tab" href="#Departments-grid">New Service</a></li>
         </ul>
         <div class="header-action">
           <!-- <a  id="Departments-tab" data-toggle="tab" href="#Departments-grid"><i class="fe fe-plus mr-2"></i>Add</a> -->
         </div>
      </div>
   </div>
</div>
<div class="section-body mt-3">
<div class="container-fluid">
<div class="tab-content mt-3">
   <div class="tab-pane fade show active" id="Departments-list" role="tabpanel">
      <div class="card">
         <div class="card-header">
            <h3 class="card-title">Services List</h3>
            <div class="card-options">
               <form>
                  <div class="input-group">
                     <input type="text" class="form-control form-control-sm" placeholder="Search something..." name="s">
                     <span class="input-group-btn ml-2"><button class="btn btn-icon" type="submit"><span class="fe fe-search"></span></button></span>
                  </div>
               </form>
            </div>
         </div>
         <div class="card-body">
             <ServiceTable :services="services"
              v-on:editItem="edit($event)"
              v-on:deleteItem="deleteItem($event)"
             ></ServiceTable>
         </div>
      </div>
   </div>
   <div class="tab-pane fade" id="Departments-grid" role="tabpanel">
      <div class="row clearfix">
          <ServiceForm></ServiceForm>
      </div>
   </div>
</div>
</div>
</div>
 </div>
</template>

<script>
import ServiceTable from "./ServiceTableComponent";
import ServiceForm from "./ServiceForm";
export default {
    components:{
        ServiceTable,
        ServiceForm,
    },
    data(){
        return {
            services:{},
        };
    },
    methods:{
        editItem(item){

        },
        deleteItem(item){
                 Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
            axios
                .delete("/portal/service" + item.id)
                .then((res) => {
                this.getusers();
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                });
            }
        });
        },
        getServices(){
            axios.get('/portal/services').then((res)=>{
                this.services=res.data.services;
            });
        },
    },
    mounted(){
        this.getServices();
    },
}
</script>

<style>

</style>
