<template>
  <div>
    <div class="col-lg-12 justify-content-center">
            <form class="card" v-on:submit.prevent="onSubmit">
            <div class="card-body">
                <h3 class="card-title">{{ editmode ?  "Edit" : "New"}} Service</h3>
                <div class="row ">

                    <div class="col-md-12">
                        <div class="form-group">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" v-model="name" placeholder="Service Name"  required>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="form-group mb-0">
                        <label class="form-label">Description</label>
                        <textarea rows="5" class="form-control" v-model="description" placeholder="Here can be your description" value=""></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-right">
                <button type="submit" class="btn btn-primary"> {{ editmode ?  "Update" : "Submit"}}  </button>
            </div>

        </form>
    </div>
  </div>
</template>

<script>
export default {
data()
    {
        return{
            name:null,
            description:null,
            thembunail:null,
            editmode:false,
    };
 },
 methods:{
     onSubmit(){
    Vue.$toast.default('Please wait data is processing!');
      let formdata = new FormData();
      formdata.append("name", this.name);
      formdata.append("description", this.description);
      formdata.append("thembunail", this.thembunail);
      formdata.append("id", this.editId);
      axios.post('/portal/service/store',formdata).then((res)=>{
          setTimeout(() => {
               Vue.$toast.success('New service has been saved');
          }, 1500);

      });
     },
 },
}
</script>

<style>

</style>
