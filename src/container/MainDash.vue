<template>
    <div class="container">
        <main-header></main-header>
        <div class="main">

            <div class="products" v-if="products.length == 0" @click="addingProduct = true">
                <h4>You Have No Products</h4>
                <h4>Click the button below to add a product</h4>
                <div class="toggle-add-product-button">
                    <i class="el-icon-plus add-product-icon"></i>
                    <h4>Add Product</h4>
                </div>
            </div>

            <div v-if="products.length > 0" class="product-list-view">
                <h4>All Products</h4>
                <div class="card-container">
                    <el-card v-for="(item, index) in products" :key="index" class="product-card" :body-style="{ padding: '0px' }">
                        <img src='http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg' class="product-image"/>
                        <div style="padding: 7px;">
                            <span>{{`${item.title} ${index + 1}`}}</span>
                            <div class="bottom clearfix">
                                <span style="color: gray">Description</span>
                                <br/>
                                <span>${{item.price}}</span>
                                <el-button type="text" class="select-product-button" @click="checkoutItems.push(item) && calculateTotals()">Select</el-button>
                            </div>
                        </div>
                    </el-card>
                </div>
            </div>

            <div class="add-product-square" v-if="addingProduct == true">
                <h2>Add a new Product</h2>
                <el-input class="product-input" placeholder="Name of product"/>
                <el-select class="product-input" placeholder="Category" />
                <el-button @click="addProduct">Test Button</el-button>
            </div>

            <div class="checkout">
                <h4>Current Checkout</h4>
                <!-- Empty list of items -->
                <div v-if="checkoutItems.length == 0 && selectedCoin == '' && completedTransaction !== true" class="empty-product-list">
                    <h4>No Product Selected</h4>
                    <h4>Please select from product list</h4>
                </div>

                <!-- Populated List of Items -->
                <div v-if="checkoutItems.length > 0 && selectedCoin == ''" class="populated-product-list">
                   <div v-for="(item, index) in checkoutItems" :key="index" class="list-item">
                        <img class="checkout-list-image" :src="item.image"/>
                        <div class="quantity-current-checkout">
                            <p>{{item.title}}</p>
                             <el-input-number v-model="activeItemQuantity" class="input-amount" size="mini" :min="1" :max="10"></el-input-number>
                        </div>
                        <p class="checkout-item-price">{{`$${item.price}.00`}}</p>
                        <i @click="checkoutItems.splice(index, 1) && calculateTotals()" style="padding-left: 3%; margin-top: 5vh;" class="el-icon-delete"></i>
                    </div>
                    <div class="check-out-controls">
                        <p>{{`Subtotal - $${subtotal}.00`}}</p>
                        <p>{{`Tax - $${tax}`}}</p>
                        <p v-if="discount !== 0">{{`Discount - $${discount}`}}</p>
                        <p>{{`Total - $${parseFloat(subtotal) + parseFloat(tax) - parseFloat(discount)}`}}</p>
                        <el-button @click="showDiscountModal = true" class="checkout-button ghost-button">Discount</el-button>
                        <el-button @click="showPaymentTypeModal = true" class="checkout-button full-button">Select Payment Method</el-button>
                    </div>
                </div>

                <div v-if="completedTransaction == true" class="completed-payment">
                   <div class="header-section">
                        <h2>Great Success!</h2>
                        <h3>The transaction went through without a hitch</h3>
                   </div>
                    <p>{{`Subtotal - $${subtotal}.00`}}</p>
                    <p>{{`Tax - $${tax}`}}</p>
                    <p v-if="discount !== 0">{{`Discount - $${discount}`}}</p>
                    <p>{{`Total - $${parseFloat(subtotal) + parseFloat(tax) - parseFloat(discount)}`}}</p>
                    <div class="button-section">
                        <el-button>Cancel Transaction</el-button>
                        <el-button @click="newTransaction">Start New Transaction</el-button>
                    </div>

                </div>

                 <!-- If a coin has already been selected -->

                <div class="payment-window" v-if="selectedCoin !== '' && completedTransaction !== true">
                    <img src="../assets/QR_code.png"/>
                    <h4>Show your customer the QR Code so they can pay with their phone</h4>
                </div>
            </div>

            <!-- Dialogue Box for the user to add a product -->
            <el-dialog
                :modalAppendToBody="false"
                title="Select Category"
                :visible.sync="dialogVisible"
                width="30%">
                <span>This is a message</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
                </span>
            </el-dialog>

            <!-- Dialogue Box for Adding a Discount -->
            <el-dialog 
                :modalAppendToBody="false"
                title="Select Discount Amount"
                :visible.sync="showDiscountModal"
                width="30%">
                <p style="text-align: center">Please specify your discount in dollar amounts</p>
               <el-input placeholder="$15" v-model="discount"/>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="showDiscountModal = false">Cancel</el-button>
                    <el-button type="primary" @click="showDiscountModal = false">Confirm</el-button>
                </span>
            </el-dialog>

            <!-- Dialogue Box to Select Payment Method -->
             <el-dialog 
                :modalAppendToBody="false"
                title="Pay With"
                custom-class="payment-modal"
                :visible.sync="showPaymentTypeModal"
                width="25%">
                <div class="crypto-payment-square" v-for="coin in coins">
                    <img :src="coin.imageUrl" class="crypto-icon" />
                    <span class="crypto-icon-subtext">{{coin.name}}</span>
                    <el-radio-group v-model="selectedCoin" size="large" class="select-coin-radio-button">
                        <el-radio :label="coin.name"/>
                    </el-radio-group>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="handleSelectCrypto">Confirm</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import MainHeader from '../components/MainHeader';
import Button from '../components/Button';
import store from '../../mockStore.js';
// Off White background color - F5F9FB
export default {
    name: 'mainDash',
    data() {
        return {
            addingProduct: false,
            dialogVisible: false,
            showDiscountModal: false,
            showPaymentTypeModal: false,
            selectedCoin: "",
            coins: [
                {
                   name: "ETH",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/eth.png",
                },
                {
                   name: "REQ",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/req.png",
                },
                {
                   name: "KNC",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/knc.png",
                },
                {
                   name: "DGX",
                   imageUrl: "https://awebanalysis.com/img/coins/32/digix-gold-token.png",
                },
                {
                   name: "DAI",
                   imageUrl: "https://awebanalysis.com/img/coins/32/dai.png",
                },
                {
                   name: "NEO",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/neo.png",
                },
            ],
            products:[
                {
                    image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7af156881360cd678f19062bd9c1f8a&auto=format&fit=crop&w=634&q=80',
                    title: 'Product',
                    price: 45,
                    quantity: 1
                },{
                    image: 'https://images.unsplash.com/photo-1504185945330-7a3ca1380535?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f2d35c4ea30a81e428e66c653748f91&auto=format&fit=crop&w=621&q=80',
                    title: 'Product',
                    price: 35,
                    quantity: 1
                },{
                    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9647d95a500b5e222258fb03ed086ed1&auto=format&fit=crop&w=800&q=80',
                    title: 'Product',
                    price: 40,
                    quantity: 1
                },{
                    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=716729f150e7137d6873291d1ef9c9a4&auto=format&fit=crop&w=634&q=80',
                    title: 'Product',
                    price: 45,
                    quantity: 1
                },{
                    image: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a98ac47048f530b6d587279d52c13ab7&auto=format&fit=crop&w=1268&q=80',
                    title: 'Product',
                    price: 55,
                    quantity: 1
                },{
                    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74ac7c1aa35dc36f50cc1ac7517c70a7&auto=format&fit=crop&w=1350&q=80',
                    title: 'Product',
                    price: 45,
                    quantity: 1
                }
            ],
            checkoutItems: [
                //  {
                //     image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7af156881360cd678f19062bd9c1f8a&auto=format&fit=crop&w=634&q=80',
                //     title: 'Product',
                //     price: 45,
                //     quantity: 1
                // },{
                //     image: 'https://images.unsplash.com/photo-1504185945330-7a3ca1380535?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f2d35c4ea30a81e428e66c653748f91&auto=format&fit=crop&w=621&q=80',
                //     title: 'Product',
                //     price: 35,
                //     quantity: 1
                // },
            ],
            activeItemQuantity: 0,
            subtotal: 0,
            tax: 0,
            total: 0,
            discount: 0, // as a dollar amount
            completedTransaction: false // default is false
        }
    },
    components: {
        MainHeader,
        Button
    },
    methods: {
        created () {
            console.log("This ", this);
            calculateTotals();
        },
        calculateTotals(){
            const total = this.checkoutItems.reduce((accum, val) => {
                return val.price + accum;
            }, 0);
            this.tax = (total * 0.029).toFixed(2);
            this.subtotal = total;
            this.total = total + tax;
        },
        handleSelectCrypto(){
            store.commit('setCoinType', this.selectedCoin);
            this.showPaymentTypeModal = false;
             setTimeout(() => {
                this.completedTransaction = true
             }, 5000);
             setTimeout(() => {
                this.checkoutItems = [];
                this.selectedCoin = '';
                this.total = 0;
                this.tax = 0;
                this.discount = 0;
                this.completedTransaction = false;
             }, 30000);
        },
        newTransaction(){
            this.checkoutItems = [];
            this.selectedCoin = '';
            this.total = 0;
            this.tax = 0;
            this.discount = 0;
            this.completedTransaction = false;
        }
    }
}
</script>
<style scoped>
      .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
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
    height: 85vh;
    width: 40vh;
    margin-right: 4%;
    box-shadow: 0px 5px 25px 0px #C9C9C9;
}
.empty-product-list {
    justify-content: center;
    text-align: center;
    padding-top: 20vh;
}
.checkout-list-image {
    height: 50px;
    width: 50px;
    margin-right: 3%;
    object-fit: cover;
}
.input-amount {
    width: 90%;
    padding-bottom: 4%;
}
.populated-product-list {
    justify-content: flex-start;
}
.input {
    padding-bottom: 5vh;
    width: 15rem;
}
.inputWindow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 450px;
    width: 450px;
    background-color: #ffffff;
}
.product-input {
    width: 75%;
    margin: 5% 0 5% 0;
}
el-dialog {
    border-radius: 18px;
    background: transparent;
}
.product-list-view {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 65%;
    margin: 0;
    padding-left: 1%;
}
.quantity-current-checkout{
    width: 40%;
    height: 100%;
    justify-content: center;
    align-content: center;
    align-items: center;

}
.check-out-controls {
    display: flex;
    flex-direction: column;
     width: 100%;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
}
.check-out-controls p {
    margin: 2% 0 0 0;
}
.list-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20%;
    border-bottom: 1px solid lightgrey;
}
.card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.product-card {
    display: flex;
    text-align: center;
    flex-direction: column;
    margin: 1%;
    width: 22%;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.product-image {
    width: 100%
}
.select-product-button {
    color: #6532bd;
}
.checkout-button{
    width: 95%;
    height: 20%;
    margin: 5px 0 5px 0;
    justify-content: center;
    align-content: center;
}
.checkout-item-price {
    margin-top: 7vh;
}
.crypto-payment-square {
    height: 2rem;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 5%;
    border-radius: 15px;
    display: flex;
    align-items: center;
}

.crypto-icon-subtext {
    margin-left: 2%;
    display: inline-block;
    font-weight: bold;
}

.select-coin-radio-button {
    margin-left: auto;
}
.el-radio__label {
    display: none;
}

.el-radio__inner {
    width: 22px;
    height: 22px;
}

.el-radio__inner:hover {
    border-color: #6532bd;
}

.el-radio__inner::after {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #6532bd;
}

.el-radio__input.is-checked .el-radio__inner {
    border-color: grey;
    background: white;
}

.payment-modal {
    border-radius: 25px;
}
.payment-window {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    width: 100%;
    justify-content: space-around;
}
.payment-window h4 {
    text-align: center;
    width: 80%;
}
.completed-payment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 60%
}
.completed-payment .header-section {
    width: 80%;
}
</style>
