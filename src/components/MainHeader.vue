<template>
    <header>
        <span class="left">
           <font-awesome-icon class="fa fa-bars"></font-awesome-icon>
        </span>
        <span>
            <el-input placeholder="Please input" v-model="searchBar" class="input-with-select">
                <el-select aria-placeholder="Categories" v-model="select" slot="prepend">
                    <el-option label="Restaurant" value="1"></el-option>
                    <el-option label="Order No." value="2"></el-option>
                    <el-option label="Tel" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </span>
        <span id="add-button-span" class="right">
            <el-button id="add-item-button" icon="el-icon-plus">
                <span>Add Product</span>
            </el-button>
        </span>
    </header>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
    data() {
        return {
            searchBar:''
        }
    },
    components: {
        FontAwesomeIcon,
    }
}
</script>
<style lang="scss" scoped>
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

    span  {
        position: relative;
        font-size: 20px;
        line-height: 1;
        letter-spacing: 0.02em;
        font-weight: 400;
        box-sizing: border-box;
    }

    #add-item-button {
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        align-items: center;
        height: 75%;

        span {
            font-size: 16px;
        }
    }
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