<template>
  <div class="hello">
    <Header v-if="authFlow === 'signin'" title="Sign In"/>
    <Header v-if="authFlow === 'create'" title="Create An Account"/>
     <Header v-if="authFlow === 'type'" title="Account Set Up"/>
    <LoginWindow v-if="authFlow === 'signin'"/>
    <CreateAccount v-if="authFlow === 'create'"/>
    <AccountType v-if="authFlow === 'type'"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from "./Header.vue";
import Button from "./Button.vue";
import LoginWindow from './LoginWindow';
import CreateAccount from './CreateAccount';
import AccountType from './AccountType';

export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome Back",
      username: "",
      password: "",
      authFlow: 'type', // can be 'sigin', 'create', 'type
    };
  }, 
  computed: {
    // ...mapState(['user']),
  },
  components: {
    Header,
    Button,
    LoginWindow,
    CreateAccount,
    AccountType
  },
  methods: {
    // ...mapMutations({
    //    SET_LOGIN: 'setLogin',
    // }),
    login() {
      alert("Login Pressed")
    },
    created () {
      console.log("Store", store);
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
