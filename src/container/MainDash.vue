<template>
    <div class="container">
        <main-header></main-header>
        <div class="main">
            <div class="products">
                <h4>You Have No Products</h4>
                <h4>Click the button below to add a product</h4>
                <div class="addProd">
                    <i class="el-icon-plus addProdIcon"></i>
                    <h4>Add Product</h4>
                </div>
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
    width: 100vw;
    height: 90vh;
    position: fixed;
}
h4 {
    color: #B1B5C2;
    padding: 0;
}
.addProd {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 165px;
    width: 165px;
    border-radius: 18px;
    background-color: #ffffff;
}
.addProdIcon {
    color: #B1B5C2;
    font-size: 55px;
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
}
.product-list {
    justify-content: center;
    text-align: center;
    padding-top: 20vh;
}
</style>
