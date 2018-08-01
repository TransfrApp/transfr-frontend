<template>
  <div class="hello">
    <Header title="Sign In"/>
   <div class="window">
      <h1 class="center">{{ msg }}</h1>
     <el-col :span="24">
        <el-row type="flex" justify="center">
          <el-input class="input" v-model="username" placeholder="Username"/>
        </el-row>
        <el-row type="flex" justify="center">
          <el-input class="input" v-model="password" placeholder="Password" type="password"/>
        </el-row>
        <el-row class="top" type="flex" justify="center">
          <p>Forgot Password?</p> 
          <a href="#"><p>Reset</p></a>
        </el-row>
     </el-col>
     <el-col>
       <el-row type="flex"  align="bottom" justify="center">
        <Button text="Log In"/>
       </el-row>
     </el-col>
    <el-col>
      <el-row align="bottom" type="flex" justify="center">
        <p class="text">No Account?</p>
        <a><p>Get Started</p></a>
      </el-row>
    </el-col>
   </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Button from "./Button.vue";

export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome Back",
      username: "",
      password: ""
    };
  },
  components: {
    Header,
    Button
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  flex: 1;
  height: 105vh;
  background-color: #6532bd;
  justify-content: center;
}
.center {
  padding-top: 5vh;
  text-align: center;
}
.window {
  background-color: #ffffff;
  margin-top: 15vh;
  margin-left: 20vw;
  width: 60vw;
  height: 60vh;
  border-radius: 37px;
}
.input-form {
  margin-top: 10vh;
  justify-content: center;
}
.input {
  width: 295px;
  height: 66px;
  border-color: transparent;
  background-color: #ffffff;
  margin-top: 5px;
  margin-bottom: 5px;
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
</style>
