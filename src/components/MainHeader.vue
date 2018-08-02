<template>
    <header>
        <span class="left">
            <i class="el-icon-menu"></i>
        </span>
        <span>
            <el-input placeholder="Please input" v-model="searchBar" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="Select">
                    <el-option label="Restaurant" value="1"></el-option>
                    <el-option label="Order No." value="2"></el-option>
                    <el-option label="Tel" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </span>
        <span class="right">
            <el-button icon="el-icon-plus">Add Product</el-button>
        </span>
    </header>
</template>
<script>
export default {
    data() {
        return {
            searchBar:''
        }
    }
}
</script>
<style scoped>
header {
    margin: 0 !important;
    height: 75px;
    width: 100vw;
    padding: 0 16px 0 24px;
    background-color: #6532bd;
    color: #ffffff;
    display: inline-flex;
    justify-content: space-between;
    align-content: center; 
    align-items: center;
}
header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
.left {
    padding-left: 2vw;
}
.right {
    padding-right: 5vw;
}
.input-with-select {
    width: 490px;
    border-radius: 18px;
}
</style>