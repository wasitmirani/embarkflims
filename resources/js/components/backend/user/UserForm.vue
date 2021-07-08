<template>
  <div>
      <div class="row clearfix">
							<div class="col-lg-12 col-md-12 col-sm-12">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Employee ID *"> </div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-12">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="First Name *"> </div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-12">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Last Name"> </div>
							</div>
							<div class="col-md-4 col-sm-12">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Email ID *"> </div>
							</div>
							<div class="col-md-4 col-sm-12">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Mobile No"> </div>
							</div>
							<div class="col-md-4 col-sm-12">
								<div class="form-group">
									<select class="form-control show-tick">
										<option>Select Role Type</option>
										<option>Super Admin</option>
										<option>Admin</option>
										<option>Employee</option>
									</select>
								</div>
							</div>
							<div class="col-md-4 col-sm-12">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Username *"> </div>
							</div>
							<div class="col-md-4 col-sm-12">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Password"> </div>
							</div>
							<div class="col-md-4 col-sm-12">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Confirm Password"> </div>
							</div>
							<div class="col-12">
								<hr class="mt-4">
								<h6>Module Permission</h6>
								<div class="table-responsive">
									<table class="table table-striped">
										<thead>
											<tr>
												<th></th>
												<th>Read</th>
												<th>Write</th>
												<th>Delete</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Super Admin</td>
												<td>
													<label class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked=""> <span class="custom-control-label">&nbsp;</span> </label>
												</td>
												<td>
													<label class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked=""> <span class="custom-control-label">&nbsp;</span> </label>
												</td>
												<td>
													<label class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked=""> <span class="custom-control-label">&nbsp;</span> </label>
												</td>
											</tr>
											<tr>
												<td>Admin</td>
												<td>
													<label class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked=""> <span class="custom-control-label">&nbsp;</span> </label>
												</td>
												<td>
													<label class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1"> <span class="custom-control-label">&nbsp;</span> </label>
												</td>
												<td>
													<label class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1"> <span class="custom-control-label">&nbsp;</span> </label>
												</td>
											</tr>
											<tr>
												<td>Employee</td>
												<td>
													<label class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked=""> <span class="custom-control-label">&nbsp;</span> </label>
												</td>
												<td>
													<label class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1"> <span class="custom-control-label">&nbsp;</span> </label>
												</td>
												<td>
													<label class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1"> <span class="custom-control-label">&nbsp;</span> </label>
												</td>
											</tr>
											<tr>
												<td>HR Admin</td>
												<td>
													<label class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked=""> <span class="custom-control-label">&nbsp;</span> </label>
												</td>
												<td>
													<label class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked=""> <span class="custom-control-label">&nbsp;</span> </label>
												</td>
												<td>
													<label class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked=""> <span class="custom-control-label">&nbsp;</span> </label>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<button type="button" class="btn btn-primary">Add</button>
								<button type="button" class="btn btn-secondary" data-dismiss="modal">CLOSE</button>
							</div>
						</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
