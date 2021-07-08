<template>
  <div>
      	<div class="table-responsive">
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


									<tr v-for="user in users.data" :key="user.id">
										<td> <span class="avatar avatar-blue" data-toggle="tooltip" data-placement="top" title="" :data-original-title="user.name">{{user.name | avatar_name}}</span> </td>
										<td>
											<h6 class="mb-0">{{user.name}}</h6> <span><a :href="'mailto:'+user.email" class="__cf_email__" data-cfemail="93f2fff6ebf2fdf7f6e1d3f4fef2faffbdf0fcfe">[email&#160;protected]</a></span> </td>
										<td><span class="tag tag-success">HR Admin</span></td>
										<td>{{user.created_at}}</td>
										<td>HR</td>
										<td>
											<button type="button" class="btn btn-icon" title="Edit"><i class="fa fa-edit"></i></button>
											<button type="button" class="btn btn-icon js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
										</td>
									</tr>
								</tbody>
							</table>
                            <hr>
                            <pagination :data="users" @pagination-change-page="getUsers"></pagination>
						</div>
  </div>
</template>

<script>
Vue.filter('avatar_name',function(value){
    if(value){
        return value.slice(0,2);
    }
    return value;
});
export default {
    props:['users','getUsers'],
}
</script>

<style>

</style>
