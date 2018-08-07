<template>
  <div class="hello">
    <Header v-if="this.$store.state.loginFlow === 'signin'" title="Sign In"/>
    <Header v-if="this.$store.state.loginFlow === 'create'" title="Create An Account"/>
    <Header v-if="this.$store.state.loginFlow === 'type'" title="Account Set Up"/>
    <LoginWindow v-if="this.$store.state.loginFlow === 'signin'"/>
    <CreateAccount v-if="this.$store.state.loginFlow === 'create'"/>
    <AccountType v-if="this.$store.state.loginFlow === 'type'"/>
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
  height: 100vh;
  background: linear-gradient(180deg, #6532bd 50%, #F5F9FB 50%);
  justify-content: center;
  overflow: hidden;
}
.center {
  padding-top: 5vh;
  text-align: center;
}
</style>
