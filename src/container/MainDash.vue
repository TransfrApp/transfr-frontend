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
                        <div style="padding: 14px;">
                            <span>{{`${item.title} ${index + 1}`}}</span>
                            <div class="bottom clearfix">
                                <span>Price</span>
                                <el-button type="text" class="select-product-button" @click="checkoutItems.push(item);">Select</el-button>
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
                <div v-if="checkoutItems.length == 0" class="empty-product-list">
                    <h4>No Product Selected</h4>
                    <h4>Please select from product list</h4>
                </div>

                <!-- Populated List of Items -->
                <div v-if="checkoutItems.length > 0" class="populated-product-list">
                   <div v-for="(item, index) in checkoutItems" :key="index" class="list-item">
                        <img class="checkout-list-image" :src="item.image"/>
                        <div class="quantity-current-checkout">
                            <p>{{item.title}}</p>
                             <el-input-number v-model="activeItemQuantity" class="input-amount" size="mini" :min="1" :max="10"></el-input-number>
                        </div>
                        <p>{{`$${item.price}.00`}}</p>
                        <i @click="checkoutItems.splice(index, 1)" style="padding-left: 3%" class="el-icon-delete"></i>
                    </div>
                    <div class="check-out-controls">
                        <p>Subtotal - $206.00</p>
                        <p>Tax - $10.00</p>
                        <p>Total - $216.00</p>
                        <el-button @click="showDiscountModal = true" class="checkout-button ghost-button">Discount</el-button>
                        <el-button @click="showPaymentTypeModal = true" class="checkout-button full-button">Select Payment Method</el-button>
                    </div>
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
                <h4>Testing the Discount Dialogue Box</h4>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="showDiscountModal = false">Cancel</el-button>
                    <el-button type="primary" @click="showDiscountModal = false">Confirm</el-button>
                </span>
            </el-dialog>

            <!-- Dialogue Box to Select Payment Method -->
             <el-dialog 
                :modalAppendToBody="false"
                title="Pay With"
                :visible.sync="showPaymentTypeModal"
                width="30%">
                <div class="crypto-payment-square" v-for="coin in coins">
                    <img :src="coin.imageUrl" class="crypto-icon" />
                    <span class="crypto-icon-subtext">{{coin.name}}</span>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="showPaymentTypeModal = false">Confirm</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import MainHeader from '../components/MainHeader';
import Button from '../components/Button';
// Off White background color - F5F9FB
export default {
    name: 'mainDash',
    data() {
        return {
            addingProduct: false,
            dialogVisible: false,
            showDiscountModal: false,
            showPaymentTypeModal: false,
            coins: [
                {
                   name: "Bitcoin",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/btc.png",
                },
                {
                   name: "Dash",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/dash.png",
                },
                {
                   name: "Vechain",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/ven.png",
                },
                {
                   name: "Tether",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/usdt.png",
                },
                {
                   name: "Ethereum",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/eth.png",
                },
                {
                   name: "Lisk",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/lsk.png",
                },
                {
                   name: "Neo",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/neo.png",
                },
                {
                   name: "Eos",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/eos.png",
                },
                {
                   name: "Siacoin",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/sc.png",
                },
                {
                   name: "Qtum",
                   imageUrl: "https://raw.githubusercontent.com/dziungles/cryptocurrency-logos/master/coins/32x32/qtum.png",
                },
                {
                   name: "Zcash",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/zec.png",
                },
                {
                   name: "Digixdao",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/dgd.png",
                },
                {
                   name: "Steem",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/steem.png",
                },
                {
                   name: "Rchain",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/rhoc.png",
                },
                {
                   name: "Waves",
                   imageUrl: "https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/32/icon/waves.png",
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
                },
            ],
            activeItemQuantity: 0,
        }
    },
    components: {
        MainHeader,
        Button
    },
    methods: {
        calculateTotals(){

        }
    }
}
</script>
<style>
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
    height: 95%;
    width: 22%;
    margin-right: 4%;
    box-shadow: 0px 5px 25px 0px #C9C9C9;
}
.empty-product-list {
    justify-content: center;
    text-align: center;
    padding-top: 20vh;
}
.checkout-list-image {
    height: 10%;
    width: 15%;
    margin-right: 3%;
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
    border: 1px solid black;
    height: 100%;
    width: 75%;
    margin: 0
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
    width: 14%;
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
.crypto-payment-square {
    height: 5rem;
    width: 5rem;
    border: 1px solid gray;
    border-radius: 15px;
    display: inline-block;
    max-width: 25%;
    text-align: center;
    margin: 5px;
}

.crypto-icon {
    margin-top: 20%;
}

.crypto-icon-subtext {
    display: block;
}
</style>
