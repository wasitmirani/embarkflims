<template>
<div>
<div class="table-responsive">
  <table class="table table-vcenter table_custom spacing5 border-style mb-0">
   <thead>
      <tr>
         <th class="w40">#</th>
         <th>Name</th>
         <th>Description</th>
         <th>Created At</th>
         <th class="w40">Action</th>
      </tr>
   </thead>
   <tbody>
      <tr v-for="item in services" :key="item.id">
         <td>
            <span class="avatar avatar-pink" data-toggle="tooltip" data-placement="top" title="" :data-original-title="item.name">{{item.name.slice(0, 2).toUpperCase()}}</span>
         </td>
         <td>{{item.name}}</td>
         <td>{{item.description}}</td>
         <td><span>{{item.created_at| timeformat}}</span></td>


         <td>
             <a role="button" @click="editItem(item)" ><i class="fas fa-edit"></i>  </a> |
            <a role="button" @click="deleteItem(item)" ><i class=" fa fa-trash text-danger"></i>  </a>
         </td>
      </tr>

   </tbody>
</table>
</div>

</div>
</template>

<script>

export default {
props:['services'],
methods:{
    editItem(item) {
        return this.$emit("editItem", item);
    },
    deleteItem(item){

      return this.$emit("deleteItem", item);
    }
}
}
</script>

<style>

</style>
