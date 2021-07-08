<template>
      <div class="form-group">
        <label class="form-label" v-if="name">{{name}}</label>
        <div class="input-icon mb-3">
        <input type="text" class="form-control" :placeholder="label">
        <span class="input-icon-addon"><i class="fe fe-search"></i></span>
        </div>
      </div>
</template>

<script>
export default {
name:"search-input",
props:['label','name'],
}
</script>

<style>
</style>
