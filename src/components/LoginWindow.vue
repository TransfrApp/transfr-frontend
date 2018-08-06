<template>
    <div class="window">
      <h1 class="center title">{{ msg }}</h1>
     <el-col class="input-form" :span="24">
        <el-row type="flex" justify="center">
          <el-input class="input" v-model="username" placeholder="Username"/>
        </el-row>
        <el-row type="flex" justify="center">
          <el-input class="input" v-model="password" placeholder="Password" type="password"/>
        </el-row>
        <el-row class="top" type="flex" justify="center">
          <p>Forgot Password?</p> 
          <p class="hotlink">Reset</p>
        </el-row>
     </el-col>
     <el-col class="login-section">
       <el-row type="flex"  align="center" justify="center">
       <router-link :to="{path: '/home'}">
          <Button v-on:click="login" text="Log In"/>
       </router-link>
       </el-row>
     </el-col>
    <el-col class="login-section">
      <el-row align="center" type="flex" justify="center">
        <p class="text">No Account?</p>
        <a @click="handleStart"><p class="hotlink text">Get Started</p></a>
      </el-row>
    </el-col>
   </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Button from './Button.vue';
import store from '../../mockStore.js';

export default {
  name: 'LoginWindow',
  computed: {
    // ...mapState(['user']),
  },
  data() {
    return {
      msg: "Welcome Back!"
    };
  },
  components: {
    Button,
  },
  methods: {
    ...mapState,
    handleStart: () => {
      console.log("Store", store);
     store.commit('adjustLoginFlow', 'create');
    }
  }
};
</script>
<style scoped>
h1 {
  font-weight: 400;
  font-family: Helvetica, Arial, sans-serif
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
  width: 295px;
  height: 66px;
  font-size: 20px;
  border-color: transparent;
  background-color: #FBFCFC;
  margin-top: 5px;
  margin-bottom: 5px;
}
.input::placeholder {
  color: grey;
  font-size: 20px;
}
.hotlink {
  text-decoration: none;
  color: #6532bd;
  padding-left: 5px;
}
.top {
  padding-bottom: 3%;
}
.route-link {
  text-decoration: none;
}
.text {
  font-size: 20px;
  font-weight: 300;
}
.title {
  color: #202447;
}
</style>