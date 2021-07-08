<template>
    <div>
        <div class="section-body">
	<div class="container-fluid">
		<div class="d-flex justify-content-between align-items-center">
			<ul class="nav nav-tabs page-header-tab">
				<li class="nav-item"><a class="nav-link active" id="user-tab" data-toggle="tab" href="#user-list">List</a></li>
				<li class="nav-item"><a class="nav-link" id="user-tab" data-toggle="tab" href="#user-add">Add New</a></li>
			</ul>
			<div class="header-action">
                <a class="nav-link" id="user-tab" data-toggle="tab" href="#user-add">
				<button type="button" class="btn btn-primary"><i class="fe fe-plus mr-2"></i>Add</button>
                </a>
			</div>
		</div>
	</div>
</div>
<div class="section-body mt-3">
	<div class="container-fluid">
		<div class="tab-content mt-3">
			<div class="tab-pane fade show active" id="user-list" role="tabpanel">
				<div class="card">
					<div class="card-header">
						<h3 class="card-title">User List</h3>
						<div class="card-options">
							<form>
								<div class="input-group">
                                    <SearchInput label="Search Users" v-model="query"></SearchInput>
								</div>
							</form>
						</div>
					</div>
					<div class="card-body">
					  <!-- User Table -->
                      <UserTable :users="users"  :getUsers="getUsers"></UserTable>
					</div>
				</div>
			</div>
			<div class="tab-pane fade" id="user-add" role="tabpanel">
				<div class="card">
					<div class="card-body">
                        <!-- User Form -->
                      <UserForm></UserForm>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</template>

<script>
import SearchInput from "../components/SearchInput";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
export default {
    name:"User",
    components:{
        SearchInput,
        UserForm,
        UserTable,
    },
    data(){
    return{
        users:{},
        query:"",
        page_num: 1,
    };
    },
    methods:{
         getUrlParams(){
 
            this.$router.replace({ name: "users", query: { query: this.query,page:this.page_num } })
         },
        getUsers(page=this.page_num){
            this.getUrlParams();
            axios.get("/user/users?page=" + page + "&query=" + this.query,).then((res)=>{
                this.users=res.data.users;
            });
        }
    },
    mounted(){
        if(this.$route.query.query){
                this.query=this.$route.query.query;
        }
        if(this.$route.query.page){
                 this.page_num=this.$route.query.page;
                 console.log(this.$route.query.page);
        }
        this.getUsers();

    }

}
</script>

<style>

</style>
