<template>
    <div class="container">
        <main-header></main-header>
        <div class="main">

            <div class="products" v-if="addingProduct == false" @click="addingProduct = true">
                <h4>You Have No Products</h4>
                <h4>Click the button below to add a product</h4>
                <div class="toggle-add-product-button">
                    <i class="el-icon-plus add-product-icon"></i>
                    <h4>Add Product</h4>
                </div>
            </div>

            <div class="add-product-square" v-if="addingProduct == true">
                <h2>Add your item here</h2>
                <el-input placeholder="Name of product"/>
                <el-select placeholder="Category" />
            </div>

            <div class="checkout">
                <h4>Current Checkout</h4>
                <div class="product-list">
                    <h4>No Product Selected</h4>
                    <h4>Please select from product list</h4>
                </div>
            </div>



        </div>
    </div>
</template>
<script>
import MainHeader from '../components/MainHeader';
// Off White background color - F5F9FB
export default {
    name: 'mainDash',
    data() {
        return {
            addingProduct: false
        }
    },
    components: {
        MainHeader,
    }
}
</script>
<style>
.main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    background-color: #F5F9FB;
    width: 100%;
    height: 90%;
    position: fixed;
}
h4 {
    color: #B1B5C2;
    padding: 0;
}
.toggle-add-product-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 165px;
    width: 165px;
    border-radius: 18px;
    box-shadow: 0px 0px 10px 0px #C9C9C9;
}
.add-product-icon {
    color: #B1B5C2;
    font-size: 55px;
}

.add-product-square {
    background: white;
    height: 500px;
    width: 500px;
    box-shadow: 0px 2px 15px 0px #C9C9C9;
    border-radius: 40px;
}
.products {
    display: flex;
    text-align: center;
    padding-left: 10vw;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.checkout {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    background-color: #ffffff;
    height: 640px;
    width: 305px;
    box-shadow: 0px 5px 25px 0px #C9C9C9;
}
.product-list {
    justify-content: center;
    text-align: center;
    padding-top: 20vh;
}
</style>
