<template>
    <div class="window">
      <h1 class="center">{{ msg }}</h1>
     <el-col :span="24">
        <el-row type="flex" justify="center">
          <el-input class="input" v-model="businessName" placeholder="Business Name"/>
        </el-row>
        <el-row type="flex" justify="center">
          <el-input class="input" v-model="username" placeholder="User Name"/>
        </el-row>
        <el-row type="flex" justify="center">
          <el-input class="input" v-model="email" placeholder="Email"/>
        </el-row>
        <el-row type="flex" justify="center">
          <el-input class="input" v-model="password" placeholder="Password" type="password"/>
        </el-row>
        <el-row type="flex" justify="center">
          <el-input class="input" v-model="confirmPassword" placeholder="Confirm Password" type="password"/>
        </el-row>
     </el-col>
     <el-col>
       <el-row type="flex"  align="bottom" justify="center">
           <el-button class="circle-button" @click="handleNext">Sign Up</el-button>
       </el-row>
     </el-col>
    <el-col>
      <el-row align="bottom" type="flex" justify="center">
        <p class="text">Already have an Account?</p>
        <a @click="handleLogin" class="text"><p>Log In</p></a>
      </el-row>
    </el-col>
   </div>
</template>
<script>
import Button from "./Button.vue";
import store from "../../mockStore.js";

export default {
  name: "CreateAccount",
  data() {
    return {
      msg: "Welcome",
      businessName: "",
      username: "",
      email: "",
      confirmPassword: ""
    };
  },
  components: {
    Button
  },
  methods: {
    // ...mapMutations(['SET_LOGIN']),
    handleLogin() {
      store.commit("adjustLoginFlow", "signin");
    },
    handleNext() {
      store.commit("adjustLoginFlow", "type");
    }
  }
};
</script>
<style scoped>
h1 {
  font-weight: 400;
  font-family: Helvetica, Arial, sans-serif;
  padding: 5px;
}
.center {
    font-size: 2rem;
    margin: 3%;
    margin-bottom: 5%;
}
.window {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin-top: 15vh;
  margin-left: 20vw;
  width: 60vw;
  min-height: 50vh;
  border-radius: 37px;
}
.input-form {
  justify-content: center;
}
.input {
  width: 75%;
  height: 12%;
  border-color: transparent;
  background-color: #ffffff;
  margin-top: 1%;
  margin-bottom: 1%;
}
.input::placeholder {
  color: grey;
  font-size: 20px;
}
a {
  text-decoration: none;
  color: #6532bd;
  padding-left: 5px;
}
.top {
  padding-bottom: 15vh;
}
.circle-button {
  background: linear-gradient(to right, #6532bd, #7D3BB7);
  color: white;
  border-radius: 18px;;
  font-size: 20px;
  height: 25%;
  width: 50%;
  align-items: flex-end;
  margin-top: 5%;
}
.text {
  font-size: 20px;
  font-weight: 300;
}
</style>