<template>
  <div class="hello">
    <Header v-if="login === true" title="Sign In"/>
    <Header v-else title="Create An Account"/>
    <LoginWindow v-if="login === true"/>
    <CreateAccount v-else/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Button from "./Button.vue";
import LoginWindow from './LoginWindow';
import CreateAccount from './CreateAccount';

export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome Back",
      username: "",
      password: "",
      login: false,
    };
  },
  components: {
    Header,
    Button,
    LoginWindow,
    CreateAccount
  },
  methods: {
    login() {
      alert("Login Pressed")
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  flex: 1;
  height: 110vh;
  background-color: #6532bd;
  justify-content: center;
}
.center {
  padding-top: 5vh;
  text-align: center;
}
</style>
