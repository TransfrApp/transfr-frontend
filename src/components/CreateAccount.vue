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
        <router-link :to="{path: '/home'}">
            <Button v-on:click="login" text="Sign Up"/>
        </router-link>
       </el-row>
     </el-col>
    <el-col>
      <el-row align="bottom" type="flex" justify="center">
        <p class="text">Already have an Account?</p>
        <a @click="handleLogin"><p>Log In</p></a>
      </el-row>
    </el-col>
   </div>
</template>
<script>
import Button from './Button.vue';

export default {
name: 'CreateAccount',
// computed: {
//     ...mapState(['login'])
// },
data() {
    return {
      msg: "Welcome",
      businessName: '',
      username: '',
      email: '',
      confirmPassword: '',

    };
  },
  components: {
    Button,
  },
  methods: {
    // ...mapMutations(['SET_LOGIN']),
      handleLogin(){
          alert("Testing Handle Login")
      }
  }
};
</script>
<style scoped>
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